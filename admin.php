<div id="kickAssWrapper" class="wrap"> 
    <?php    
        // Create / edit slider page
        if(self::$slider_id) { 
            ob_start(); 
            do_meta_boxes(self::$page_hook,'side','');
            $do_side_meta = ob_get_contents();
            ob_end_clean();  

            ob_start();
            do_meta_boxes(self::$page_hook,'normal',''); 
            $do_normal_meta = ob_get_contents();
            ob_end_clean();  

            $tpl = self::$mustache->loadTemplate('slider');  
            echo $tpl-> render(array(
                'screen_icon'       => screen_icon('generic'),
                'wp_nonce_fields'   => array(
                    'parallaxslider'    => wp_nonce_field('parallaxslider'),
                    'closedpostboxes'   => wp_nonce_field('closedpostboxes', 'closedpostboxesnonce', false),
                    'meta-box-order'    => wp_nonce_field('meta-box-order', 'meta-box-order-nonce', false)
                ),
                'do_side_meta'      => $do_side_meta,
                'do_normal_meta'    => $do_normal_meta,
                'new_slider?'       => self::$slider_id === 'new'
            ));
        } 
        // List slider page
        else {   
            $sliders = self::$sliders; 

            if( isset($_FILES['import_sliders']) && $_FILES['import_sliders']['error'] === 0 && is_uploaded_file($_FILES['import_sliders']['tmp_name'])) {
                update_option(self::PLUGIN_PREFIX.'option',unserialize(file_get_contents($_FILES['import_sliders']['tmp_name']))); 
            }

            // wp returns false (if no such option) and empty array (in case of no sliders) , hench using empty
            if(!empty($sliders)) {
                if(!(isset($_GET['order']) && $_GET['order'] === 'asc')) {
                    $sliders = array_reverse($sliders,true);
                }
                $sliders = new ArrayIterator(self::arrToHashConversion($sliders));  
            }
            
            $tpl = self::$mustache->loadTemplate('sliders');   
            echo $tpl->render(array(
                'title_url'     => (isset($_GET['order']) && $_GET['order'] === 'asc') ? '?page='.self::$page_name : '?page='.self::$page_name.'&order=asc',
                'sliders'       => $sliders,
                'screen_icon'   => screen_icon('generic'),
                'plugin_name'   => self::PLUGIN_NAME,
                'page_name'     => self::$page_name,

            )); 
        }
    ?>      
</div>