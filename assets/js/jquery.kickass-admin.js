/*    
                ADMIN PANEL

    Project     : KickAss Slider (http://www.jashwant.com/kickass-slider)
    Version     : 0.1
    Author      : Jashwant Singh Chaudhary
    Author url  : http://www.jashwant.com
    Github      : https://github.com/jashwant/kickass-slider
    Twitter     : @jashwant
    License     : MIT License (http://www.opensource.org/licenses/mit-license.php)

    Copyright (c) 2013-2014, Jashwant Singh Chaudhary <https://twitter.com/jashwant> 
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
*/
 
// jQuery transit plugin

(function ($,window,document,undefined) {

    // Utility Functions
    var ajaxPostRequest = function (params,cb) {

        $.post(JS_DATA.ajaxUrl, params, cb);
    }

    var add_postbox_toggle = function () {
        // needs more unbinding
        $('.postbox h3, .postbox .handlediv').unbind('click.postboxes'); 
        postboxes.add_postbox_toggles(JS_DATA.pageHook);
    }

    var wpMediaPopUp = function ($container,data) {
        
        var frame = wp.media({
            title:  data.uploaderTitle,
            button: {
                text: data.uploaderButtonText,
            },
            multiple: false 
        }); 
       
        frame.on( 'select', function() {
            var img = frame.state().get('selection').first().toJSON(); 
            if(data.action === 'bg-upload') {  
                $container.find('.bg').remove();
                $container.closest('.panel').find('.remove-bg').prop('disabled',false);

                $('<div />')
                    .addClass('object bg') 
                    .data('slider',{ type : 'bg' , easing : 'linear', transition : 'slideLeft', duration : 800 })
                    .append('<img src="' + img.url + '" />')
                    .appendTo($container);
            }
            // If img-upload
            else {
                $('<div></div>')
                    .addClass('object img') 
                    .data('slider',{ type : 'img' , easing : 'linear', transition: 'slideWest', duration : 800 })
                    .append('<img src="' + img.url + '" />')
                    .appendTo($container)
                    .draggable();
            } 
        }); 
 
        frame.open();
        return false;
    }

    var previewPopUp = function (params) {
        var $dialog = $('#slider-preview-dialog');
        var $iframe = $('#preview_slider',$dialog); 
        $dialog.dialog({
            dialogClass : 'wp-dialog',
            title       : 'Preview', 
            height      :  490,
            width       :  860, 
            modal       :  true,
            position    :  {
                my: "center",
                at: "center",
                of: window
            },
            open: function() {
                $('.ui-widget-overlay').on('click',function() {
                    $dialog.dialog('close');
                });
            }
        }); 
        var inputs = '';
        for(var i in params) {
            inputs += '<input type="hidden" name="'+ i + '" value="' + params[i] + '" />';
        } 

        var $form = $('<form />', {
            action : JS_DATA.ajaxUrl,
            target : 'preview_slider',
            method : 'post'
        });


        $form.html(inputs)
        $form.submit(); 
    }

    var init = function () {
        var $normalSortables = $('#normal-sortables');
        $normalSortables.find('.inside').each(function () {
            var $this = $(this);
            $this.find('.remove-bg').prop('disabled',$this.find('.bg').length === 0);
        });

        $normalSortables.find('.color-picker').wpColorPicker({
            change: function(event, ui) { 
                var $this = $(this);
                var slideContainer = $this.closest('.inside').find('.slideContainer');
                slideContainer.css('background',$this.prop('value')).addClass('bgColor');
            }, 
            clear: function() { 
                var $this = $(this);
                var slideContainer = $this.closest('.inside').find('.slideContainer');
                slideContainer.css('background','').removeClass('bgColor');
            } 
        });

        $('.if-js-closed').removeClass('if-js-closed').addClass('closed'); 
        add_postbox_toggle();
        
        // Disable sortable thingy in sidebar
        $('#side-sortables').sortable( "option", "disabled", true );

        $('.object').not('.bg').draggable(); 
    }

    var sliderActions = function () { 
        var $this = $(this);
        var data = $this.data();

        var params =  { 
            action          :  JS_DATA.ajaxAction, 
            task            :  data.action,
            sliderID        :  data.slider,
            ajaxNonceValue  :  JS_DATA.ajaxNonce
        } 

        switch(data.action) {
            case 'delete-slider': 
                if(!confirm('Do you really want to delete ?')) {
                    return false;
                }
            break;

            case 'preview-slider':
                previewPopUp(params); 
            break;

            default: 
            break;
        }  

        ajaxPostRequest(params,function (resp) {   
            switch (data.action) {
                case 'delete-slider' : 
                    if($this.hasClass('delete-link')) {
                        location.href = location.href.split('?')[0] + '?page=' + JS_DATA.pageName;
                    }
                    else {
                        var $tr = $this.closest('tr'); 
                        var $tbody = $tr.closest('tbody');
                        $tr.remove(); 
                        if($tbody.find('tr').length === 0) {
                            $tbody.append('<tr><td colspan="6">No sliders found. Create one by clicking &quot;Add New&quot; above</td></tr>');
                        }
                    }
                break;

                case 'duplicate-slider' :
                    if(JS_DATA.slidersOrder === 'asc') {
                        $this.closest('table').append(resp.html);
                    }
                    else {
                        $this.closest('table').prepend(resp.html);
                    } 
                break; 

                default : 
                break;
            } 
        }); 
    }

    $('#normal-sortables')
        .on('click','.panel [data-action]',function (event) {

            var $this = $(this),
                $inside = $this.closest('.inside'),
                $slideContainer = $inside.find('.slideContainer'),
                data = $this.data();

            if(data.action === 'bg-upload' || data.action === 'img-upload') {
               wpMediaPopUp($slideContainer,data);
            }

            else if(data.action === 'add-text') {
                $('<div />')
                    .html('<span style="font-size:30px">Your text</span>')
                    .addClass('object text') 
                    .data('slider', { 
                        type        : 'text',
                        easing      : 'linear',
                        transition  : 'slideWest',
                        duration    : 800,
                        delay       : 0 
                    })
                    .appendTo($slideContainer) 
                    .draggable()
            }
            else if(data.action === 'remove-background-image') { 
                $this.prop('disabled',true);
                $slideContainer.find('.bg').remove(); 
            }
            else if(data.action === 'add-video') {
                var $dialog = $('#add-video-dialog');
                $dialog.dialog({
                    dialogClass : 'wp-dialog',
                    title       : 'Add Video', 
                    minWidth    :  300 
                }); 
                $dialog.parent('.ui-dialog').appendTo($inside);
                $dialog.dialog("option", { 
                    position    : { 
                        my  : "left+10 top", 
                        at  : "right top", 
                        of  : $this
                    } 
                });

            }
            else if (data.action === 'maximize-container') {
                var $postbox = $(this).closest('.postbox'),
                    width = $postbox.data('width') || false;
                if(!width) {
                    $postbox.data('width',$postbox.width()).css('width',$('#poststuff').width());    
                }
                else {
                    $postbox.width($postbox.data('width'));
                    $postbox.data('width',false)
                }
            }
            else if(data.action === 'delete-slide') {
                // Dont delete the last slide
                if($(event.delegateTarget).children('.postbox').length === 1) {
                    alert('Each slider must have atleast 1 slide');
                    return;
                }
                // Hiding animation before removing to enhance UI, 
                //as user may click multiple times and delete more than one slide
                $(this).closest('.postbox').hide('fast',function () {
                    $(this).remove();
                });
            }
            else {
                // Invalid data-action
            }
        }) 
        .on('dblclick','.slideContainer > .object:not(.bg)',function () {
                var $object = $(this),
                    data    = $object.data('slider'),
                    // Dialogs are named on object types
                    $dialog = $('#' + data.type + '-dialog');
                

                $('#normal-sortables').find('.object.editing').removeClass('editing');
                $object.addClass('editing');
                $('.object-dialog').dialog('close');

                if($object.hasClass('video')) {
                    var text = $.trim(data.videoID);
                    $dialog.find('.video-type[value="' + data.videoType + '"]')[0].checked = true;
                }
                else if($object.hasClass('img')) {
                    var img = $object.find('img')[0];
                    $dialog.find('.thumb')[0].src = img.src;
                    $dialog.find('.alt')[0].value = img.alt;

                }
                else {
                    var text = $object.html();
                }

                $dialog.find('.text').val(text);
                $dialog.find('.duration').val(data.duration);
                $dialog.find('.delay').val(data.delay); 
                $dialog.find('.easing').val(data.easing);
                $dialog.find('.transition').val(data.transition); 
                $dialog.find('.top').val(parseInt($object.css('top'),10)).spinner();
                $dialog.find('.left').val(parseInt($object.css('left'),10)).spinner();
                $dialog.dialog("option",{ 
                    position    : { 
                        my  : "left+15 top", 
                        at  : "right top-5", 
                        of  : $object
                    } 
                }).dialog('open');  
                      
        });

    $(document).ready( function() {  
        init();  

        var $publish = $('#publish');
        
        $publish.find('.update-slider').click(function (e) {  
            e.preventDefault();
            
            var task = $(this).data('action');
            var status = null;
            var $sliderStatus = $('#sliderStatus'); 
            if($sliderStatus.length > 0) {
                status = $sliderStatus.val();
            }
            else {
                if(task === 'save-slider') {
                    status = 'published';
                }
                else {
                    status = 'draft';
                }
            }  
 
            // Sort to keep up with metabox reorder
            var postBoxes = $('#normal-sortables').find('.postbox');
            var slidesOrder = [];

            postBoxes.each(function (k,v) {
                slidesOrder[k] = parseInt(v.id.split('_Slide')[1]);
            });
 

            postBoxes.sort(function(a,b){
                var aid = parseInt(a.id.split('_Slide')[1]);
                var bid = parseInt(b.id.split('_Slide')[1]);
                if(aid < bid) return -1;
                if(aid > bid) return 1;
                return 0;
            });
            
            var $slideContainer = postBoxes.find('.slideContainer');
            var slider = { 
                width  : 600, 
                status : status,
                slidesOrder : slidesOrder,
                slides  : []
            }; 

            $('#sliderOptions').find('input[type="text"],input[type="radio"]:checked').each(function () {
                var $this = $(this);
                slider[this.name] = this.value;
            });

            $slideContainer.each(function (k,v) { 
                var $this = $(this); 

                //Hack - Show container as top and left in % do not work with closed container.
                $this.closest('.inside').show();

                var slide = {
                    bgColor    : $this.css('background-image') === 'none' ? $this.css('background-color') : '',  
                    objects    : [],
                    transition : $this.closest('.panel').find('.slide-transition').val(),
                    duration   : $this.closest('.panel').find('.slide-duration').val(),
                    delay      : $this.closest('.panel').find('.slide-delay').val() 
                };
                $this.find('.object').each(function () {
                    var $object = $(this);  
                    var data = $object.data('slider'); 
                    
                    //var css = $object.css(['top','left']), included in jQuery 1.9 only

                    data.top  = $object.css('top');
                    data.left = $object.css('left');

                    // Convert px into % by multplying with 100/ totalContainer width
                    var wf = parseFloat(100 / $this.width());
                    var hf = parseFloat(100 / $this.height());

                    if(data.top.indexOf('px') !== -1) {
                        data.top  = Math.round(parseInt(data.top) * hf) + '%';
                    }
                    if(data.left.indexOf('px') !== -1) {
                        data.left = Math.round(parseInt(data.left) * wf) + '%';
                    }    

                    var object = { 
                        html    :   $object.html(),
                        data    :   data
                    }; 

                    slide.objects.push(object); 
                }); 
                slider.slides.push(slide);
 
                // Hiding all containers which we deliberately shown for workaround
                if($this.closest('.postbox').hasClass('closed')) {
                    $this.closest('.inside').hide();
                }
            });

            var params =  { 
                action          :  JS_DATA.ajaxAction, 
                task            :  task,
                sliderID        :  JS_DATA.sliderID,
                slider          :  slider,
                ajaxNonceValue  :  JS_DATA.ajaxNonce
            } 

            if(task === 'preview-slider') {
                // Serialize object for queryting
                params.slider = $.param(params.slider);
                previewPopUp(params);
            }
            else { 
                ajaxPostRequest(params,function (id) {
                    location.href = location.href.split('?')[0] + '?page=' + JS_DATA.pageName + '&slider-id=' + id;
                });
            }
        }); 
        
        $publish.find('.delete-link').click(sliderActions);
        
        $('#export-sliders').click(function () {
            var params =  { 
                action          :  JS_DATA.ajaxAction, 
                task            :  'export-sliders',
                ajaxNonceValue  :  JS_DATA.ajaxNonce
            } 
            var $form = $('<form />', {
                action : JS_DATA.ajaxUrl,
                target : 'preview_slider',
                method : 'post'
            });
            var inputs = '';

            for(var i in params) {
                inputs += '<input type="hidden" name="' + i + '" value="' + params[i] + '" />';    
            } 
            
            $form.html(inputs).submit(); 
        });

        $('#import-sliders').click(function () {
            var $this = $(this);
            var $dialog = $('#import-dialog');
            $dialog.dialog({
                dialogClass : 'wp-dialog',
                title       : 'Import sliders', 
                minWidth    :  300 
            });
            $dialog.dialog("option", { 
                position    : { 
                    my  : "right top", 
                    at  : "right bottom+5", 
                    of  :  this
                } 
            });
        });

        $('#listSliders').find('tbody').on('click','.action',sliderActions);

        $('#add_new_slide').click(function () { 
            var normalSortables = $('#normal-sortables');
            var postBoxes = normalSortables.find('.postbox');
            var slide = postBoxes.first().clone();
            var index = postBoxes.length;  
            slide.attr('id','Slider' + JS_DATA.sliderID + '_Slide' + index)
                .appendTo(normalSortables)
                .find('.inside').html($('#slide-template').html()); 

            slide.find('.color-picker').wpColorPicker({
                    change: function(event, ui) { 
                        var $this = $(this);
                        var slideContainer = $this.closest('.inside').find('.slideContainer');
                        slideContainer.css('background',$this.prop('value')).addClass('bgColor');
                    }, 
                    clear: function() { 
                        var $this = $(this);
                        var slideContainer = $this.closest('.inside').find('.slideContainer');
                        slideContainer.css('background','').removeClass('bgColor');
                    } 
            }); 
            slide.find('.hndle').find('span').html('Slide #' + (index +1));
            add_postbox_toggle();
        });

        $('#fetchVideo').click(function () {
            var $this = $(this); 
            var $slideContainer = $this.closest('.inside').find('.slideContainer'); 
            var $dialog = $('#add-video-dialog');

            var videoID =  $.trim($dialog.find('.video-id').prop('value')); 
            var videoType = 'youtube'; 
            var videoTypeEle = $dialog.find('.video-type:checked'); 
            // This check as chrome sometimes does not check the checkbox by 'checked' attribute
            if(videoTypeEle.length !== 0) {
                videoType = videoTypeEle[0].value;
            } 

            if(videoType === 'youtube') {
                var src = 'http://www.youtube.com/embed/' + videoID + '?hd=1&wmode=opaque&controls=0&modestbranding=1&showinfo=0&rel=0';
            }
            else {
                var src = 'http://player.vimeo.com/video/' + videoID + '?title=0&byline=0&portrait=0&player_id=iframe142&api=1';
            }

            var iframe = $('<iframe></iframe>',{
                type : "text/html",
                width : '100%',
                height : '100%',
                src  : src,
                allowfullscreen : true,
                frameborder : "0" 
            });  

            $('<div />')
                .append('<div class="mask"></div>',iframe) 
                .addClass('object video')
                .data('slider', { 
                    type: 'video', 
                    easing : 'linear', 
                    transition : 'slideWest',
                    duration : 800,
                    delay : 0,
                    videoType : videoType,
                    videoID : videoID
                })
                .appendTo($slideContainer)
                .draggable();

            $dialog.dialog('close');              
        }); 
        
        var $dialog = $('.object-dialog');
        $dialog.dialog({
            dialogClass : 'wp-dialog',
            title       : 'Edit',
            autoOpen    : false,
            width       : 450,
            minWidth    : 450,
            open        : function (event, ui) { 
                if(this.id === 'text-dialog') {
                    tinymce.execCommand('mceAddControl',true,'editor'); 
                }
            },
            close       : function( event, ui ) {
                if(this.id === 'text-dialog') {
                    tinymce.execCommand('mceRemoveControl',true, 'editor'); 
                }
            }
        })
        .on('click','.save-dialog',function () {  
            var $dialog = $(this).closest('.object-dialog');  
            var $widget = $dialog.dialog('widget');
            var $object = $('#normal-sortables').find('.object.editing');
            var data =  $object.data('slider');
            data.easing = $widget.find('.easing').val();
            data.transition = $widget.find('.transition').val();    
            data.duration = parseInt($widget.find('.duration').val(),10) || 800;
            data.delay = parseInt($widget.find('.delay').val(),10) || 0;

            if($object.hasClass('video')) {

                var videoID     = $widget.find('.text')[0].value;
                var videoType   = $widget.find('.video-type:checked')[0].value;

                if(videoType !== data.videoType) {
                    if(videoType === 'youtube') {
                        var src = 'http://www.youtube.com/embed/' + videoID + '?hd=1&wmode=opaque&controls=0&modestbranding=1&showinfo=0&rel=0';
                    }
                    else {
                        var src = 'http://player.vimeo.com/video/' + videoID + '?title=0&byline=0&portrait=0&player_id=iframe142&api=1';
                    }
                } 
                $object.find('iframe').attr('src',src);

                data.videoID =  videoID;
                data.videoType = videoType;
            }
            else if ($object.hasClass('img')) {
                var img = $object.find('img')[0];
                img.src = $dialog.find('.thumb')[0].src;
                img.alt = $dialog.find('.alt')[0].value;
            }
            else {
                $object.html(tinymce.get('editor').getContent());
            } 
            
            $object.data('slider',data)
                .css({
                    top     : $dialog.find('.top').val() + 'px',
                    left    : $dialog.find('.left').val() + 'px'
                });
            $dialog.dialog("close"); 
        })
        .on('click','.delete-object',function (e) { 
            $('#normal-sortables').find('.object.editing').remove();  
            $dialog.dialog("close"); 
        })
        .on('click','.change-img',function () {
            
            var obj = {
                title:  'Change image', 
                button: {
                    text: 'Change image'
                },
                multiple: false 
            }
            frame = wp.media(obj);

            frame.on( 'select', function() {
                var img = frame.state().get('selection').first().toJSON();  
                $dialog.find('.thumb')[0].src = img.url;
                $dialog.find('.alt')[0].value = img.alt;
            }); 
            frame.open();
            return false;
        });
 
    });
       
})(jQuery,window,document);