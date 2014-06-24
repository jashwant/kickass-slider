/* 
    Project     : KickAss Slider (http://www.jashwant.com/kickass-slider)
    Version     : 1.0
    Author      : Jashwant Singh Chaudhary
    Author url  : http://www.jashwant.com
    Github      : https://github.com/jashwant/kickass-slider
    Twitter     : @jashwant
    License     : MIT License (http://www.opensource.org/licenses/mit-license.php)

    Copyright (c) 2013-2014, Jashwant Singh Chaudhary <https://twitter.com/jashwant> 
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
    Kickass Slider uses following 'awesome' open source scripts :-

    -   jQuery imagesLoaded 2.1.0 (http://github.com/desandro/imagesloaded)
        Paul Irish et al 
        Available under a MIT License: http://www.opensource.org/licenses/mit-license.php
    
    -   jQuery Transit - CSS3 transitions and transformations
        (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
        MIT Licensed.
        http://ricostacruz.com/jquery.transit
        http://github.com/rstacruz/jquery.transit
    
    -   jQuery Slicebox by codrops
        MIT Licensed
        https://github.com/codrops/Slicebox)

    -   jQuery easings 
        http://gsgd.co.uk/sandbox/jquery/easing/
    
    -   Modernizr 2.6.2 (Custom Build) | MIT & BSD
        http://modernizr.com/

    Kickass Slider has been greatly inspired by Sequence and have used some code and coding style.

    -   Sequence - The Responsive Slider with Advanced CSS3 
        © 2013 Ian Lunn Design 
        MIT Licensed.
        https://github.com/IanLunn/Sequence

*/
 
// Modernizr 2.6.2 (Custom Build) | MIT & BSD
// Build: http://modernizr.com/download/#-csstransforms3d-teststyles-testprop-testallprops-prefixes-domprefixes
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransforms3d=function(){var a=!!E("perspective");return a&&"webkitPerspective"in f.style&&v("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e}(this,this.document);

// jQuery transit plugin
;(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);

// jQuery easing plugin
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

;(function ( $, window, document, undefined ) {  
    
    var pluginName = "KickAssSlider",
        defaults = {
            cycle             :  true,  
            shuffle           :  false,
            firstSlideIndex   :  1,
            autoPlay          :  true,
            pauseOnHover      :  false,
            autoPlayDelay     :  3000,
            animateFirstSlide :  false,
            keyBoardNav       :  true,

            /* User cannot change below options from wp panel, left for future updates */
            preloader         :  true,   
            autoPlayDirection :  1,
            hideNavOnMouseOut :  true
        };
     
    // The actual plugin constructor
    function KickAssSlider( element, options ) { 
        this.element    = element;
        this.$element   = $(element);
        this.slider     = this.$element.children('ul');
        this.slides     = this.slider.children('li');
        this.navs       = this.$element.find('.next,.prev').css('opacity',0);

        // Callbacks
        this.afterLoaded = function () {};
        
        this.options    = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;

        this.slidesCount = this.slides.length;
        this.nextSlideIndex     = this.options.firstSlideIndex;
        this.nextSlide          = this.slides.filter(':nth-child(' + this.nextSlideIndex + ')');
        this.nextSlideObjects   = this.nextSlide.find('.object');
        this.isAnimating = false;

        


        //jQuery imagesLoaded plugin v2.1.0 (http://github.com/desandro/imagesloaded)
        // Using as function, as in future thinking to supply filtered list of images.
        function imagesLoaded(imagesToPreload, callback) {
            BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            var $this = imagesToPreload,
                deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
                hasNotify = $.isFunction(deferred.notify),
                $images = $this.find('img').add( $this.filter('img') ),
                loaded = [],
                proper = [],
                broken = [];

            //Register deferred callbacks
            if($.isPlainObject(callback)) {
                $.each(callback, function(key, value) {
                    if(key === 'callback') {
                        callback = value;
                    }else if(deferred) {
                        deferred[key](value);
                    }
                });
            }

            function doneLoading() {
                var $proper = $(proper),
                    $broken = $(broken);

                if(deferred) {
                    if(broken.length) {
                        deferred.reject($images, $proper, $broken);
                    }else{
                        deferred.resolve($images);
                    }
                }

                if($.isFunction(callback)) {
                    callback.call($this, $images, $proper, $broken);
                }
            }

            function imgLoaded( img, isBroken ) {   
                if(img.src === BLANK || $.inArray(img, loaded) !== -1) { // don't proceed if BLANK image, or image is already loaded
                    return;
                }
                
                loaded.push(img); // store element in loaded images array

                if(isBroken) { // keep track of broken and properly loaded images
                    broken.push(img);
                }else{
                    proper.push(img);
                }

                $.data(img, 'imagesLoaded', {isBroken: isBroken, src: img.src }); // cache image and its state for future calls

                if(hasNotify) { // trigger deferred progress method if present
                    deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]);
                }

                if($images.length === loaded.length) { // call doneLoading and clean listeners if all images are loaded
                    setTimeout(doneLoading);
                    $images.unbind('.imagesLoaded');
                }
            }

            if(!$images.length) { // if no images, trigger immediately
                doneLoading();
            }else{
                $images.bind('load.imagesLoaded error.imagesLoaded', function(event) {
                    imgLoaded(event.target, event.type === 'error'); // trigger imgLoaded
                }).each(function(i, el) {
                    var src = el.src;
                    var cached = $.data(el, 'imagesLoaded'); // find out if this image has been already checked for status if it was, and src has not changed, call imgLoaded on it
                    if(cached && cached.src === src) {
                        imgLoaded(el, cached.isBroken);
                        return;
                    }

                    if(el.complete && el.naturalWidth !== undefined) { // if complete is true and browser supports natural sizes, try to check for image status manually
                        imgLoaded(el, el.naturalWidth === 0 || el.naturalHeight === 0);
                        return;
                    }

                    // cached images don't fire load sometimes, so we reset src, but only when dealing with IE, or image is complete (loaded) and failed manual check webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
                    if(el.readyState || el.complete) {
                        el.src = BLANK;
                        el.src = src;
                    }
                });
            }
        };

        var self = this;
        function oncePreloaded() {
           self.afterLoaded();
           // imagesLoad modifies `this`, hence `self`. It also passes args, which we are ignoring
           self.slider.show();
           self.init(); 
        }
        
        if(this.options.preloader) {    
            var imagesToPreload = this.slides.find('img');
            this.slider.hide();
            imagesLoaded(imagesToPreload, oncePreloaded);
        }else{ //if not using the preloader...
            $(window).one("load", function() {
                oncePreloaded();
            });
        }
    }

    KickAssSlider.prototype = {

        init: function() { 
            var self = this;   

            // Change transit transition to animate if browser doesnt support transition
            if (!$.support.transition) {
                $.fn.transition = $.fn.animate;
            }  
            
            $.extend($.cssEase, { 
                // 'bounce'        : 'cubic-bezier(0,1,0.5,1.3)',
                'easeInCubic'   : 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                'swing'         : 'ease-in-out',
                'linear'        : 'cubic-bezier(0.250, 0.250, 0.750, 0.750)'
                
            });  
             
            // Handling option - shuffle
            if(this.options.shuffle) {
                // Shuffling logic from http://dtm.livejournal.com/38725.html, avoiding .sort()
                var i, j, t,len,list = this.slides;
                for (i = 1; i < this.slidesCount; i++) {
                    j = Math.floor(Math.random()*(1+i));  // choose j in [0..i]
                    if (j != i) {
                      t = list[i];                        // swap list[i] and list[j]
                      list[i] = list[j];
                      list[j] = t;
                    }
                }
                this.slides.remove();
                this.slider.append(list);
            } 
            

            // Handling option - Keyboard Navigation
            if(this.options.keyBoardNav) { 
                $(document).keydown(function(e) {   
                    var arrowKeys = {
                        'left'  : 37,
                        'right' : 39
                    } 

                    if( e.which === arrowKeys['left'] ) {
                        self.prev();
                    }
                    else if( e.which === arrowKeys['right']){
                        self.next();                        
                    }  

                });
            }
 
            // Handling option - animateFirstSlide
            if(this.options.animateFirstSlide) {  

                this.currentSlideIndex = this.nextSlideIndex === 1 ? this.slidesCount : this.nextSlideIndex - 1; 
                
                this.goToSlide(this.nextSlideIndex,1);
            }
            else {
                this.currentSlideIndex = this.nextSlideIndex; 
                this.currentSlide   =  this.slides.filter(':nth-child('+ this.currentSlideIndex +')');
                this.currentSlide.addClass('active');
                this.startAutoPlay(this.options.autoPlayDelay);
            }

            // Handling option - pauseOnHover  
            if(this.options.pauseOnHover && this.options.autoPlay ) {
                this.slider.on({
                    mouseenter: function() { 
                        this.mouseover = true;
                        if(!self.isHardPaused) {
                            self.pause();
                        }
                    },
                    mouseleave: function() {  
                        this.mouseover = false;
                        if(!self.isHardPaused) {
                            self.pause(); // pause toggles last state, thus unpause it
                        }
                    }
                });
            }
 
            // Handling option - hideNavOnMouseOut
            if(this.options.hideNavOnMouseOut) {
                var self = this;
                this.$element.on({
                    mouseenter: function() { 
                       self.navs.stop().transition({'opacity': 1 },500,'swing');
                    },
                    mouseleave: function() {  
                       self.navs.stop().transition({'opacity': 0 },500,'swing'); 
                    }
                });
            }
            else {
                this.navs.css('opacity',1);
            }  

            this.navs.click(function (e) { 
                e.preventDefault();
                if($(this).hasClass('next')) {
                    self.next();
                }
                else {
                    self.prev();
                }
            });
        },
 
        startAutoPlay: function(delay) {
            if(this.options.autoPlay && !this.isPaused) {
                var self = this;
                self.stopAutoPlay(); 
                self.autoPlayTimer = setTimeout(function() {  
                    self.options.autoPlayDirection === 1 ? self.next(): self.prev(); //go to either the next or previous frame
                }, delay);
            }
        },
         
        stopAutoPlay: function() { 
            clearTimeout(this.autoPlayTimer);
        },

        pause: function(hardPause) {
            if(!this.isPaused) {
                this.isPaused = true;
                this.isHardPaused = hardPause;
                this.stopAutoPlay();
            }
            else { 
                this.isPaused = false;
                this.isHardPaused = false;
                if(!this.isAnimating) {
                    this.startAutoPlay(this.options.autoPlayDelay);
                }
            }
        },  

        next: function() { 
            if(this.currentSlideIndex === this.slidesCount) {
                if(this.options.cycle) {
                    this.nextSlideIndex = 1;
                }
                else {
                    return;
                }
            }
            else {
                this.nextSlideIndex = this.currentSlideIndex + 1;
            }
            this.goToSlide(this.nextSlideIndex);
        },
         
        prev: function() { 
            if(this.currentSlideIndex === 1) {
                if(this.options.cycle) {
                    this.nextSlideIndex = this.slidesCount;
                }
                else {
                    return;
                }
            }
            else {
                this.nextSlideIndex = this.currentSlideIndex - 1
            }
            this.goToSlide(this.nextSlideIndex); //go to the prev frame
        },  

        goToSlide: function(id) {
            if( this.isAnimating ) return;

            this.isAnimating = true; 

            this.currentSlide   =  this.slides.filter(':nth-child('+ this.currentSlideIndex +')');
            this.nextSlide      =  this.slides.filter(':nth-child(' + id + ')'); 
            
            this.currentSlide.addClass('active'); 
            this.nextSlide.addClass('animating');

            var nextSlideData = this.nextSlide.data();  
            var currentSlideData = this.currentSlide.data(); 

            var currentSlideTransition = nextSlideCSS = nextSlideTransition = opts = {}; 

            var transition = nextSlideData.transition;

            // If transition and transform3d is not supported, do normal animation instead of 3d
            // $.support.transform3d returns true for Safari 5.1.7, hence using Modernizr
            if (!($.support.transition && Modernizr.csstransforms3d)) { 
                if(transition === 'rubikRotateUp' || transition === 'rubikDispersedRotateUp' || transition === 'cuboidRotateUp') {
                   transition = 'slideTop';
                }
                else if( transition === 'rubikRotateRight' || transition === 'rubikDispersedRotateRight' || transition === 'cuboidRotateRight' ) {
                    transition = 'slideRight';
                }
                else if(transition === 'rubikRotateDown'   || transition === 'rubikDispersedRotateDown'  || transition === 'cuboidRotateDown' ) {
                    transition = 'slideBottom';
                }
                else if(transition === 'rubikRotateLeft' || transition === 'rubikDispersedRotateLeft'    || transition === 'cuboidRotateLeft') {
                    transition = 'slideLeft';
                }
                else {
                    // Do nothing
                }
            }


            if(transition === 'slideTop') { 
                currentSlideTransition = {
                    top: '-100%'
                }

                nextSlideCSS = {
                    top: '100%',
                    left: 0
                }

                nextSlideTransition = {
                    top : 0
                } 
            }
            else if (transition === 'slideRight') {
                currentSlideTransition = { 
                    left: '100%'  
                }

                nextSlideCSS = {
                    left : '-100%',
                    top  : 0
                }
                
                nextSlideTransition = {
                        left : 0 
                } 
            }
            else if(transition === 'slideBottom') {
                currentSlideTransition = {
                    top: '100%'
                }

                nextSlideCSS = {
                    top  : '-100%',
                    left : 0
                }

                nextSlideTransition = {
                    top : 0 
                }
            }
            else if(transition === 'slideLeft') {
                currentSlideTransition = {
                    left : '-100%'
                }

                nextSlideCSS = {
                    left : '100%',
                    top  : 0
                }

                nextSlideTransition = {
                    left : 0  
                } 
            }
            else if(transition === 'fadeIn') {
                // Do nothing actually, opacity for symmetry
                currentSlideTransition = {
                    opacity : 1
                }

                nextSlideCSS = {
                    left : 0,
                    top  : 0,
                    opacity : 0
                }

                nextSlideTransition = {
                    opacity : 1  
                } 
            }
            else if(transition === 'zoomOut') {
               
                nextSlideCSS = {
                    left : '50%',
                    top  : '50%',
                    width : 0,
                    height : 0
                }

                nextSlideTransition = {
                    left   : 0,
                    top    : 0,
                    width  : '100%',
                    height : '100%'
                } 
            }
            else if(transition === 'rubikRotateUp') {
                opts = { orientation : 'v' , dir : 'prev' }; 
            }
            else if(transition === 'rubikRotateRight') {
                opts = { orientation : 'h', dir : 'prev'};  
            }
            else if(transition === 'rubikRotateDown') {
                opts = { orientation : 'v' , dir : 'prev' }; 
            }
            else if(transition === 'rubikRotateLeft') {
                opts = { orientation : 'h', dir : 'next'};  
            }  
            else if(transition === 'rubikDispersedRotateUp') {
                opts = { orientation : 'v', disperseFactor : 30, dir : 'prev' };  
            }
            else if(transition === 'rubikDispersedRotateRight') {
                opts = { orientation : 'h', disperseFactor : 30, dir : 'prev' };   
            }
            else if(transition === 'rubikDispersedRotateDown') {
                opts = { orientation : 'v', disperseFactor : 30, dir : 'next'  };  
            }
            else if(transition === 'rubikDispersedRotateLeft') {
                opts = { orientation : 'h', disperseFactor : 30, dir : 'next'  };   
            }            
            else if(transition === 'cuboidRotateUp') {
                opts = { orientation : 'v', cuboidsCount : 1, dir : 'prev' };   
            } 
            else if(transition === 'cuboidRotateRight') {
                opts = { orientation : 'h', cuboidsCount : 1, dir : 'prev'  };   
            } 
            else if(transition === 'cuboidRotateDown') {
                opts = { orientation : 'v', cuboidsCount : 1, dir : 'next' };   
            }
            else if(transition === 'cuboidRotateLeft') {
                opts = { orientation : 'h', cuboidsCount : 1, dir : 'next'  };   
            }
            
            else {
                this.log(transition + ' is invalid transition name'); 
            } 


            // If 3d animation, use slicebox logic, else mine
            if(    transition === 'rubikRotateUp' 
                || transition === 'rubikRotateRight' 
                || transition === 'rubikRotateDown' 
                || transition === 'rubikRotateLeft' 
                || transition === 'rubikDispersedRotateUp'
                || transition === 'rubikDispersedRotateRight'
                || transition === 'rubikDispersedRotateDown'
                || transition === 'rubikDispersedRotateLeft'
                || transition === 'cuboidRotateUp'
                || transition === 'cuboidRotateRight'
                || transition === 'cuboidRotateDown'
                || transition === 'cuboidRotateLeft'  ) {

                this.animate3D(opts); 
            }
            else {
                this.animate2D(nextSlideCSS,nextSlideData,currentSlideData,nextSlideTransition,currentSlideTransition);
            }    
        }, 

        animate3D : function (options) {  
            // Keepin everything default except orientation and disperse factor
            var defaults = {
                // (v)ertical, (h)orizontal or (r)andom
                orientation : 'h',
                // perspective value
                perspective : 1200,
                // number of slices / cuboids
                // needs to be an odd number 15 > number > 0 (if you want the limit higher, change the _validate function).
                cuboidsCount : 5,
                // if true then the number of slices / cuboids is going to be random (cuboidsCount is overwitten)
                cuboidsRandom : false,
                // the range of possible number of cuboids if cuboidsRandom is true
                // it is strongly recommended that you do not set a very large number :)
                maxCuboidsCount : 5,
                // each cuboid will move x pixels left / top (depending on orientation). The middle cuboid doesn't move. the middle cuboid's neighbors will move disperseFactor pixels
                disperseFactor : 0,  // 30 for 4th example
                // color of the hidden sides
                colorHiddenSides : '#222',
                // the animation will start from left to right. The left most cuboid will be the first one to rotate
                // this is the interval between each rotation in ms
                sequentialFactor : 150,
                // animation speed
                // this is the speed that takes "1" cuboid to rotate
                speed : 600,
                // transition easing
                easing : 'ease',

                dir : 'next'
            } 
            
            options = $.extend(defaults,options);

            $.Cuboid = function( config, pos ) {

                this.config = config;
                this.pos = pos;
                this.side = 1;
                this._setSize();
                this._configureStyles();

            };

            $.Cuboid.prototype = {

                _setSize : function() {

                    this.size = {
                        width : this.config.o === 'v' ? Math.floor( this.config.size.width / this.config.cuboidsCount ) : this.config.size.width,
                        height : this.config.o === 'v' ? this.config.size.height : Math.floor( this.config.size.height / this.config.cuboidsCount )
                    };
                    // extra space to fix gaps
                    this.extra = this.config.o === 'v' ? this.config.size.width - ( this.size.width * this.config.cuboidsCount ) : this.config.size.height - ( this.size.height * this.config.cuboidsCount );

                },
                _configureStyles : function() {

                    // style for the cuboid element
                    // set z-indexes based on the cuboid's position
                    var middlepos = Math.ceil( this.config.cuboidsCount / 2 ),
                        positionStyle = this.pos < middlepos ? {
                            zIndex : ( this.pos + 1 ) * 100,
                            left : ( this.config.o === 'v' ) ? this.size.width * this.pos : 0,
                            top : ( this.config.o === 'v' ) ? 0 : this.size.height * this.pos
                        } : {
                            zIndex : (this.config.cuboidsCount - this.pos) * 100,
                            left : ( this.config.o === 'v' ) ? this.size.width * this.pos : 0,
                            top : ( this.config.o === 'v' ) ? 0 : this.size.height * this.pos
                        };

                    // how much this cuboid is going to move (left or top values)
                    this.disperseFactor = this.config.disperseFactor * ( ( this.pos + 1 ) - middlepos );

                    this.style = $.extend( {
                        '-webkit-transition' : '-webkit-transform ' + this.config.speed + 'ms ' + this.config.easing,
                        '-moz-transition' : '-moz-transform ' + this.config.speed + 'ms ' + this.config.easing,
                        '-o-transition' : '-o-transform ' + this.config.speed + 'ms ' + this.config.easing,
                        '-ms-transition' : '-ms-transform ' + this.config.speed + 'ms ' + this.config.easing,
                        'transition' : 'transform ' + this.config.speed + 'ms ' + this.config.easing
                    }, positionStyle, this.size );

                    this.animationStyles = {
                        side1 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px )' },
                        side2 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px ) rotate3d( 1, 0, 0, -90deg )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px ) rotate3d( 0, 1, 0, -90deg )' },
                        side3 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px ) rotate3d( 1, 0, 0, -180deg )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px ) rotate3d( 0, 1, 0, -180deg )' },
                        side4 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px ) rotate3d( 1, 0, 0, -270deg )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px ) rotate3d( 0, 1, 0, -270deg )' }
                    };

                    var measure = ( this.config.o === 'v' ) ? this.size.height : this.size.width;

                    this.sidesStyles = {
                        frontSideStyle : {
                            width : ( this.config.o === 'v' ) ? this.size.width + this.extra : this.size.width,
                            height : ( this.config.o === 'v' ) ? this.size.height : this.size.height + this.extra,
                            backgroundColor : this.config.colorHiddenSides,
                            transform : 'rotate3d( 0, 1, 0, 0deg ) translate3d( 0, 0, ' + ( measure / 2 ) + 'px )'
                        },
                        backSideStyle : {
                            width : this.size.width,
                            height : this.size.height,
                            backgroundColor : this.config.colorHiddenSides,
                            transform : 'rotate3d( 0, 1, 0, 180deg ) translate3d( 0, 0, ' + ( measure / 2 ) + 'px ) rotateZ( 180deg )'
                        },
                        rightSideStyle : {
                            width : measure,
                            height : ( this.config.o === 'v' ) ? this.size.height : this.size.height + this.extra,
                            left : ( this.config.o === 'v' ) ? this.size.width / 2 - this.size.height / 2 : 0,
                            backgroundColor : this.config.colorHiddenSides,
                            transform : 'rotate3d( 0, 1, 0, 90deg ) translate3d( 0, 0, ' + ( this.size.width / 2 ) + 'px )'
                        },
                        leftSideStyle : {
                            width : measure,
                            height : ( this.config.o === 'v' ) ? this.size.height : this.size.height + this.extra,
                            left : ( this.config.o === 'v' ) ? this.size.width / 2 - this.size.height / 2  : 0,
                            backgroundColor : this.config.colorHiddenSides,
                            transform : 'rotate3d( 0, 1, 0, -90deg ) translate3d( 0, 0, ' + ( this.size.width / 2 ) + 'px )'
                        },
                        topSideStyle : {
                            width : ( this.config.o === 'v' ) ? this.size.width + this.extra : this.size.width,
                            height : measure,
                            top : ( this.config.o === 'v' ) ? 0 : this.size.height / 2 - this.size.width / 2,
                            backgroundColor : this.config.colorHiddenSides,
                            transform : 'rotate3d( 1, 0, 0, 90deg ) translate3d( 0, 0, ' + ( this.size.height / 2 ) + 'px )'
                        },
                        bottomSideStyle : {
                            width : ( this.config.o === 'v' ) ? this.size.width + this.extra : this.size.width,
                            height : measure,
                            top : ( this.config.o === 'v' ) ? 0 : this.size.height / 2 - this.size.width / 2,
                            backgroundColor : this.config.colorHiddenSides,
                            transform : 'rotate3d( 1, 0, 0, -90deg ) translate3d( 0, 0, ' + ( this.size.height / 2 ) + 'px )'
                        }
                    };

                },
                getEl : function() {

                    this.$el = $('<div/>').css( this.style )
                            .css( this.animationStyles.side1 )
                            .append( $('<div/>').addClass('sb-side').css( this.sidesStyles.frontSideStyle ) )
                            .append( $('<div/>').addClass('sb-side').css( this.sidesStyles.backSideStyle ) )
                            .append( $('<div/>').addClass('sb-side').css( this.sidesStyles.rightSideStyle ) )
                            .append( $('<div/>').addClass('sb-side').css( this.sidesStyles.leftSideStyle ) )
                            .append( $('<div/>').addClass('sb-side').css( this.sidesStyles.topSideStyle ) )
                            .append( $('<div/>').addClass('sb-side').css( this.sidesStyles.bottomSideStyle ) );
                    
                    this._showImage( this.config.prev );
                    
                    return this.$el;

                },
                _showImage : function( imgPos ) {

                    var sideIdx,
                        $item = this.config.items.filter(':nth-child('+ imgPos+')'),
                        imgParam = {
                            'background-size' : this.config.size.width + 'px ' + this.config.size.height + 'px'
                        };

                    var img = $item.find( '.bg').find('img');
                    
                    if(img.length > 0) {
                        imgParam.backgroundImage = 'url(' + img.attr('src') + ')';
                    }

                    imgParam.backgroundColor = $item.css('background-color');
                    switch( this.side ) {

                        case 1 : sideIdx = 0; break;
                        case 2 : sideIdx = ( this.config.o === 'v' ) ? 4 : 2; break;
                        case 3 : sideIdx = 1; break;
                        case 4 : sideIdx = ( this.config.o === 'v' ) ? 5 : 3; break;

                    };

                    imgParam.backgroundPosition = ( this.config.o === 'v' ) ? - ( this.pos * this.size.width ) + 'px 0px' : '0px -' + ( this.pos * this.size.height ) + 'px';
                    //imgParam.backgroundPosition = ( this.config.o === 'v' ) ? - ( this.pos * this.size.width + offsetLeft ) + 'px ' + (offsetRight) + 'px' : '0px -' + ( this.pos * this.size.height ) + 'px';
                    

                    this.$el.children().eq( sideIdx ).css( imgParam );

                },
                rotate : function( callback ) {

                    var self = this, animationStyle; 
                    setTimeout(function() {

                        if( self.config.direction === 'next' ) {

                            switch( self.side ) {
                                case 1 : animationStyle = self.animationStyles.side2; self.side = 2; break;
                                case 2 : animationStyle = self.animationStyles.side3; self.side = 3; break;
                                case 3 : animationStyle = self.animationStyles.side4; self.side = 4; break;
                                case 4 : animationStyle = self.animationStyles.side1; self.side = 1; break;
                            };
                        
                        }
                        else {

                            switch( self.side ) {
                                case 1 : animationStyle = self.animationStyles.side4; self.side = 4; break;
                                case 2 : animationStyle = self.animationStyles.side1; self.side = 1; break;
                                case 3 : animationStyle = self.animationStyles.side2; self.side = 2; break;
                                case 4 : animationStyle = self.animationStyles.side3; self.side = 3; break;
                            };

                        }
                        
                        self._showImage( self.config.current );
                        
                        var animateOut  = {}, animateIn = {};
                        
                        if( self.config.o === 'v' ) {

                            animateOut.left = '+=' + self.disperseFactor + 'px';
                            animateIn.left = '-=' + self.disperseFactor + 'px';
                        
                        }
                        else if( self.config.o === 'h' ) {

                            animateOut.top = '+=' + self.disperseFactor + 'px';
                            animateIn.top = '-=' + self.disperseFactor + 'px';
                        
                        }

                        self.$el.css( animationStyle ).animate( animateOut, self.config.speed / 2 ).animate( animateIn, self.config.speed / 2 , function() {
                            
                            if( callback ) {

                                callback.call( self, self.pos );

                            }

                        });

                    }, this.config.sequentialFactor * this.pos + 30 );

                }

            };

            function _layout () {  

                var orientation = options.orientation;
                if( orientation === 'r' ) {
                    orientation = Math.floor( Math.random() * 2 ) === 0 ? 'v' : 'h';
                }
                if(options.cuboidsRandom) {
                    options.cuboidsCount = Math.floor( Math.random() * options.maxCuboidsCount + 1 );
                }
                  
                var boxStyle = {
                        'width' : this.slider.width(),
                        'height' : this.slider.height(),
                        'perspective' : options.perspective + 'px'
                    },
                    config = $.extend( options, {
                        size : {
                            width: this.slider.width(),
                            height: this.slider.height()
                        },
                        colorHiddenSides : options.colorHiddenSides,
                        items : this.slides,
                        direction : options.dir,
                        prev : this.currentSlideIndex,
                        current : this.nextSlideIndex,
                        o : orientation
                    } ),
                    self = this;

                this.$box = $('<div>').addClass( 'sb-perspective' ).css( boxStyle ).appendTo( this.slider );

                this.cuboids = [];

                this.slider.css( 'overflow', 'visible' );

                for( var i = 0; i < options.cuboidsCount; ++i ) {

                    var cuboid = new $.Cuboid( config, i );
                    
                    this.$box.append( cuboid.getEl() );

                    this.cuboids.push( cuboid );

                } 
            }

            this.slides.hide();
             
            _layout.call(this);


            this.nextSlide.css({
                width   : '100%',
                height  : '100%',
                left    :  0,
                top     :  0
            })

            for( var i = 0; i < options.cuboidsCount; ++i ) {

                var cuboid = this.cuboids[ i ],
                    self = this;

                cuboid.rotate( function( pos ) {

                    if( pos === options.cuboidsCount - 1 ) {
                        self.slider.css( 'overflow', 'hidden' );
                        self.slides.show();
                        self.$box.remove();  
                        self.bgAnimationCompleted();
                    }

                });

            }
        },

        animate2D : function (nextSlideCSS,nextSlideData,currentSlideData,nextSlideTransition,currentSlideTransition) {

            // Prepare next slide for animation
            this.nextSlide.css(nextSlideCSS);   
            
            // Hide all objects until animation is complete
            this.nextSlide.find('.object').not('.bg').css('opacity',0);

            // Animate next slide
            var self = this;
            this.nextSlide
                .stop(true,false)
                .delay(nextSlideData.delay)
                .transition(nextSlideTransition, parseFloat(nextSlideData.duration), 'swing', function () {
                    self.bgAnimationCompleted();
                });
 
            // Animate current slide 
            this.currentSlide  
                .stop(true,false).transition(currentSlideTransition, 2 * parseFloat(currentSlideData.duration) , 'swing', function () {
                   
                });
        },

        bgAnimationCompleted : function () { 
            var self = this;
            self.currentSlideIndex  = self.nextSlideIndex; 
            self.currentSlide.removeClass('active'); 
            self.nextSlide.removeClass('animating').addClass('active'); 

            var $objects = this.nextSlide.find('.object').not('.bg');
            $objects.css('opacity',1);

            var objectsCount = $objects.length ; 
            if(objectsCount === 0) {
                this.slideAnimationCompleted();
                return;
            }
             
            $objects.each(function () {
                var $object = $(this);
                var objectData = $object.data('slider'); 
                var top  = objectData.top;
                var left = objectData.left;
                var css = transition = {};

                if(objectData.transition === 'slideTop') {
                    css  = { 
                        top     :  '100%',
                        left    :  left,
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if (objectData.transition === 'slideTopRight') {
                    css = {
                        top     :  '100%',
                        left    :  '-100%',
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    } 
                }
                else if(objectData.transition === 'slideRight') {
                    css = {
                        top     : top,
                        left    : '-100%',
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if (objectData.transition === 'slideBottomRight') {
                    css =  {
                        top     : '-100%',
                        left    : '-100%',
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if(objectData.transition === 'slideBottom') {
                    css = {
                        top     : '-100%',
                        left    : left,
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if(objectData.transition === 'slideBottomLeft') {
                    css = {
                        top     : '-100%',
                        left    : '100%',
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if(objectData.transition === 'slideLeft') {
                    css = {
                        top     : top,
                        left    : '100%',
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if(objectData.transition === 'slideTopLeft') {
                    css =  {
                        top     : '100%',
                        left    : '100%',
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if (objectData.transition === 'fadeIn') {
                    css = {
                        top : top,
                        left: left,
                        opacity : 0
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 1
                    }
                }
                else if(objectData.transition === 'fadeOut') {
                    css = {
                        top : top,
                        left : left,
                        opacity : 1
                    }
                    transition = { 
                        top : objectData.top , 
                        left : objectData.left,
                        opacity : 0
                    }
                }
                else {
                    self.log(objectData.transition + ' is an invalid transition name'); 
                } 

                $object
                    .css(css)
                    .stop(true,false)
                    .delay(objectData.delay)
                    .transition(transition,parseFloat(objectData.duration),objectData.easing, function() {
                        if(--objectsCount === 0) {
                            // All animations have been completed
                            self.slideAnimationCompleted();
                        }
                    }); 
            }); 
        },

        slideAnimationCompleted : function () {
            this.isAnimating = false; 
            this.startAutoPlay(this.options.autoPlayDelay); 
        },

        log : function (msg) {
            if (window.console) { 
                window.console.log(msg); 
            }
        }


    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new KickAssSlider( this, options ));
            }
        });
    };

})( jQuery, window, document );