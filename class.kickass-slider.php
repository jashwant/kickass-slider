<?php

class KickAssSlider { 
    protected static $version; 
    protected static $file;
    protected static $plugin_dir_url;
    protected static $plugin_dir_path;
    protected static $page_hook;
    protected static $plugin_name; 
    protected static $mustache;
    protected static $slider_id; 
    protected static $sliders;  
    protected static $page_name;
    protected static $plugin_prefix;
    protected static $slide_transitions;
    protected static $slider_options ;
    protected static $object_transitions;
    protected static $object_easings;


    const PLUGIN_NAME = 'KickAss Slider'; 
    const PLUGIN_PREFIX = 'kickAssSlider_';

    public function __construct($file,$ver) {
        self::$file =  $file;
        self::$plugin_dir_url =  plugin_dir_url($file); 
        self::$plugin_dir_path = plugin_dir_path($file);
        self::$version = $ver;   
        self::$page_name = basename($file, '.php') ;  
        self::$slide_transitions = array( 
            array(
                'value'     => 'slideTop', 
                'text'      => 'Slide Top'
            ),
            array(
                'value'     => 'slideRight',
                'text'      => 'Slide Right'
            ),
            array(
                'value'     => 'slideBottom',
                'text'      => 'Slide Bottom'
            ),
            array(
                'value'     => 'slideLeft',
                'text'      => 'Slide Left'
            ),
            array(
                'value'     => 'fadeIn',
                'text'      => 'Fade In'
            ),
            array(
                'value'     => 'zoomOut',
                'text'      => 'Zoom Out'
            ), 
            array(
                'value'     => 'rubikRotateUp',
                'text'      => 'Rubik Rotate Up'
            ), 
            array(
                'value'     => 'rubikRotateRight',
                'text'      => 'Rubik Rotate Right'
            ),
            array(
                'value'     => 'rubikRotateDown',
                'text'      => 'Rubik Rotate Down'
            ),
            array(
                'value'     => 'rubikRotateLeft',
                'text'      => 'Rubik Rotate Left'
            ), 
            array(
                'value'     => 'rubikDispersedRotateUp',
                'text'      => 'Rubik Dispersed Rotate Up'
            ),
            array(
                'value'     => 'rubikDispersedRotateRight',
                'text'      => 'Rubik Dispersed Rotate Right'
            ), 
            array(
                'value'     => 'rubikDispersedRotateDown',
                'text'      => 'Rubik Dispersed Rotate Down'
            ),
            array(
                'value'     => 'rubikDispersedRotateLeft',
                'text'      => 'Rubik Dispersed Rotate Left'
            ),
            array(
                'value'     => 'cuboidRotateUp',
                'text'      => 'Cuboid Rotate Up'
            ),
            array(
                'value'     => 'cuboidRotateLeft',
                'text'      => 'Cuboid Rotate Left'
            ),
            array(
                'value'     => 'cuboidRotateDown',
                'text'      => 'Cuboid Rotate Down'
            ),
            array(
                'value'     => 'cuboidRotateLeft',
                'text'      => 'Cuboid Rotate Left'
            ),
        );
        self::$object_transitions = array(
            array(
                'value'     => 'fadeIn',
                'text'      => 'Fade In'
            ),
            array(
                'value'     => 'fadeOut',
                'text'      => 'Fade Out'
            ),
            array(
                'value'     => 'slideTop', 
                'text'      => 'Slide Top'
            ),
            array(
                'value'     => 'slideTopRight', 
                'text'      => 'Slide Top Right'
            ),
            array(
                'value'     => 'slideRight',
                'text'      => 'Slide Right'
            ),
            array(
                'value'     => 'slideBottomRight', 
                'text'      => 'Slide Bottom Right'
            ),
            array(
                'value'     => 'slideBottom',
                'text'      => 'Slide Bottom'
            ),
            array(
                'value'     => 'slideBottomLeft',
                'text'      => 'Slide Bottom Left'
            ),
            array(
                'value'     => 'slideLeft',
                'text'      => 'Slide Left'
            ),
            array(
                'value'     => 'slideTopLeft',
                'text'      => 'Slide Top Left'
            ),
        );
        self::$object_easings = array(
            array(
                'value'     => 'easeInQuad',
                'text'      => 'easeInQuad'
            ),
            array(
                'value'     => 'easeOutQuad',
                'text'      => 'easeOutQuad'
            ),
            array(
                'value'     => 'easeInOutQuad',
                'text'      => 'easeInOutQuad'
            ),
            array(
                'value'     => 'easeInCubic',
                'text'      => 'easeInCubic'
            ),
            array(
                'value'     => 'easeOutCubic',
                'text'      => 'easeOutCubic'
            ),
            array(
                'value'     => 'easeInOutCubic',
                'text'      => 'easeInOutCubic'
            ),
            array(
                'value'     => 'easeInQuart',
                'text'      => 'easeInQuart'
            ),
            array(
                'value'     => 'easeOutQuart',
                'text'      => 'easeOutQuart'
            ),
            array(
                'value'     => 'easeInOutQuart',
                'text'      => 'easeInOutQuart'
            ),
            array(
                'value'     => 'easeInQuint',
                'text'      => 'easeInQuint'
            ),
            array(
                'value'     => 'easeOutQuint',
                'text'      => 'easeOutQuint'
            ),
            array(
                'value'     => 'easeInOutQuint',
                'text'      => 'easeInOutQuint'
            ),
            array(
                'value'     => 'easeInSine',
                'text'      => 'easeInSine'
            ),
            array(
                'value'     => 'easeOutSine',
                'text'      => 'easeOutSine'
            ),
            array(
                'value'     => 'easeInOutSine',
                'text'      => 'easeInOutSine'
            ),
            array(
                'value'     => 'easeInExpo',
                'text'      => 'easeInExpo'
            ),
            array(
                'value'     => 'easeOutExpo',
                'text'      => 'easeOutExpo'
            ),
            array(
                'value'     => 'easeInOutExpo',
                'text'      => 'easeInOutExpo'
            ),
            array(
                'value'     => 'easeInCirc',
                'text'      => 'easeInCirc'
            ),
            array(
                'value'     => 'easeOutCirc',
                'text'      => 'easeOutCirc'
            ),
            array(
                'value'     => 'easeInOutCirc',
                'text'      => 'easeInOutCirc'
            ),
            array(
                'value'     => 'easeInElastic',
                'text'      => 'easeInElastic'
            ),
            array(
                'value'     => 'easeOutElastic',
                'text'      => 'easeOutElastic'
            ),
            array(
                'value'     => 'easeInOutElastic',
                'text'      => 'easeInOutElastic'
            ),
            array(
                'value'     => 'easeInBack',
                'text'      => 'easeInBack'
            ),
            array(
                'value'     => 'easeOutBack',
                'text'      => 'easeOutBack'
            ),
            array(
                'value'     => 'easeInOutBack',
                'text'      => 'easeInOutBack'
            ),
            array(
                'value'     => 'easeInBounce',
                'text'      => 'easeInBounce'
            ),
            array(
                'value'     => 'easeOutBounce',
                'text'      => 'easeOutBounce'
            ),
            array(
                'value'     => 'easeInOutBounce',
                'text'      => 'easeInOutBounce'
            )
        );
        self::$slider_options = array( 
            array( 
                'label' => 'Title',
                'type'  => 'textbox',
                'name'  => 'title',
                'title' => 'Enter title of slider'
            ),
            array(
                'label' => 'Start from slide',
                'type'  => 'textbox',
                'name'  => 'firstSlideIndex',
                'title' => 'Start slider from nth slide'
            ),
            array(
                'label' => 'Cycle slider ?',
                'type'  => 'radio',
                'name'  => 'cycle',
                'title' => 'Should the slider restart after the last slide'
            ),
            array( 
                'label' => 'Auto-play ?',
                'type'  => 'radio',
                'name'  => 'autoPlay',
                'title' => 'Should the slider start automatically or not ?'
            ),
            array(
                'label' => 'Auto-play Delay',
                'type'  => 'textbox',
                'name'  => 'autoPlayDelay',
                'title' => 'Delay before autoplaying next slide (in ms)'
            ),
            array(
                'label' => 'Pause on hover ?',
                'type'  => 'radio',
                'name'  => 'pauseOnHover',
                'title' => 'Should the slider pause when you hover mouse on it ?'
            ),
            array(
                'label' => 'Keyboard nav ?',
                'type'  => 'radio',
                'name'  => 'keyBoardNav',
                'title' => 'Use keyboard left / right to switch slides'
            ),
            array(
                'label' => 'Animate 1st slide ?',
                'type'  => 'radio',
                'name'  => 'animateFirstSlide',
                'title' => 'Should the first slide animate ?'
            ),
            array(
                'label' => 'Shuffle slides ?',
                'type'  => 'radio',
                'name'  => 'shuffle',
                'title' => 'If yes, slides will be displayed randomly ?'
            )
        );

        //Cache the get_option result and thus reduce db access
        self::$sliders = get_option(self::PLUGIN_PREFIX.'option'); 

        if (is_admin()) { 
            add_action('admin_init', array(__CLASS__,'cb_admin_init'));
            add_action('admin_menu', array(__CLASS__,'cb_admin_Menu' ));
            add_action('admin_enqueue_scripts', array(__CLASS__,'cb_admin_enqueue_scripts' )); 
            add_action( 'wp_ajax_'.self::PLUGIN_PREFIX.'ajax', array(__CLASS__,'cb_wp_ajax' )); 
        }
        else {

            // Enqueue plugin's css/js for front end. 
            //Using wp_enqueue_scripts for css and js both as wp_enqueue_styles is buggy
            add_action('wp_enqueue_scripts', array(__CLASS__,'cb_wp_enqueue_scripts' ));
            
            // Not needed in admin panel as not using do_shortcode anywhere
            add_shortcode("kickass-slider", array(__CLASS__,'cb_shortcode' ));
        }
    }
    
    public static function cb_admin_init () {
        wp_register_script('kickass-admin-js', self::$plugin_dir_url.'assets/js/jquery.kickass-admin.js',array('jquery'),self::$version,true);
        wp_register_style('kickass-admin-css', self::$plugin_dir_url.'assets/css/kickass-admin.css',null,self::$version,'all'); 
    }

    public static  function cb_admin_menu () {
        self::$page_hook = add_menu_page(self::PLUGIN_NAME,self::PLUGIN_NAME, 'administrator',self::$page_name, array(__CLASS__,'cb_page_render' ));
        
        // Load js/css on plugin page only so that they do not interfer with other js/css 
        // and reduce unnecessary loading and thus reduce loading time of other admin pages 
        add_action('load-'.self::$page_hook, array(__CLASS__, 'cb_page_load'));
        add_action('admin_print_scripts-'. self::$page_hook, array(__CLASS__,'cb_admin_print_scripts' ));
        add_action('admin_print_styles-' . self::$page_hook, array(__CLASS__,'cb_admin_print_styles' ));
        
        // Initialize mustache template engine
        self::init_mustache();
    } 

    public static function cb_page_load () {  
        if(isset($_GET['slider-id'])) { 
            self::$slider_id = $_GET['slider-id']; 

            // Create new slider page
            if(self::$slider_id === 'new') {
                self::add_meta_boxes(array()); 
            }

            // Edit exisiting slider page
            else { 
                if(array_key_exists(self::$slider_id,self::$sliders)) {
                    self::add_meta_boxes(self::$sliders[self::$slider_id]); 
                }   
                else { 
                    // TODO :  Still searching for a good way to display errors on top of the plugin
                } 
            } 
        }
        else {
            // Setting slide_id to false to signify sliders page
            self::$slider_id = false;    
        } 
    } 

    private static function add_meta_boxes($slider) {

        $default_slider = array(
            'title'             => '', 
            'width'             => 800,
            'cycle'             => 1,
            'status'            => 'draft',
            'autoPlay'          => 1,
            'autoPlayDelay'     => 3000,
            'pauseOnHover'      => 0, 
            'keyBoardNav'       => 1,
            'firstSlideIndex'   => 1,
            'animateFirstSlide' => 0,
            'shuffle'           => 0,
            'slides' => array(
                array(
                    'bgColor'    => '',
                    'transition' => 'slideWest',
                    'duration'   => 1000,
                    'delay'      =>  0,
                    'objects'    => array() 
                )
            )
        );
        
        // TODO: Confirm that array_merge is like $.extend() in jQuery
        $slider = array_merge($default_slider,$slider); 


        // For each slide in slider, generate a metabox
        foreach($slider['slides'] as $index => $slide) { 
            // Give metabox a unique name and thus keep its display order
            $slug = 'Slider'.self::$slider_id.'_Slide'.$index;
            add_meta_box($slug ,'Slide #'.($index + 1),array(__CLASS__,'cb_slides_meta'),self::$page_hook, 'normal', 'core',$slide);
        } 

        // Generate publish and options metabox
        add_meta_box('publish','Publish',array(__CLASS__,'cb_publish_mb'),self::$page_hook,'side','core', $slider);
        add_meta_box('options' ,'Slider options',array(__CLASS__,'cb_slider_options_mb'),self::$page_hook,'side','core', $slider);
    }

    
    // First argument $post contains post data in page,post and custom post types,
    // But it gives nothing (empty string) in plugins's page
    public static function cb_publish_mb ($post,$metabox) {  
        $slider = $metabox['args'];   
        require 'views/templates/publish_mb.php'; 
    }

    public static function cb_slider_options_mb ($post,$metabox) { 
        $slider = $metabox['args'];  
        require 'views/templates/slider_options_mb.php'; 
    }

    public static function cb_slides_meta($post,$metabox) {
        $slide = $metabox['args'];    
        $transitions = self::$slide_transitions;

        // Convert transitions array into hash for mustache
        foreach($transitions as $k => &$v) {
            if($v['value'] === $slide['transition']) {
                $v['selected'] = 'selected';
                break;
            }
        }  

        // Convert objects array into hash for mustache
        foreach($slide['objects'] as &$object) {
            $object['html'] = stripslashes($object['html']);  
            $object['type'] = $object['data']['type']; 
            $object['top'] = $object['data']['top'];
            $object['left'] = $object['data']['left']; 
            $object['data'] = json_encode($object['data']);
        } 

        // If slide has bgColor modify it to apply to element's style attribute
        if($slide['bgColor'] !== '') {
            $slide['bgStyle'] = 'background:'.$slide['bgColor'];
        } 

        $partial = self::$mustache -> loadPartial('slide'); 
        echo $partial -> render(array(
            'slide'         => $slide,
            'transitions'   => $transitions
        )); 
    }  
 
    public static function cb_wp_ajax() { 
        if (!(isset($_POST['ajaxNonceValue']) && wp_verify_nonce($_POST['ajaxNonceValue'], self::PLUGIN_PREFIX.'ajax_nonce') && current_user_can('administrator'))) {
            die ( 'Access Denied');
        }

        if(!isset($_POST['task'])) {
            die('Invalid Request');    
        }

        $task = $_POST['task']; 
        $sliders = self::$sliders;

        switch ($task) {
            case "delete-slider" :
                if(isset($_POST['sliderID'])) {
                    $key = $_POST['sliderID'];  
                    unset($sliders[$key]);  
                    update_option(self::PLUGIN_PREFIX.'option',$sliders); 
                    $response = array('result' => 'success');
                }
            break;

            case "duplicate-slider" :
                if(isset($_POST['sliderID'])) { 
                    $key = $_POST['sliderID'];
                    $slider = $sliders[$key];
                    $slider['title'] = 'Copy of '.$slider['title'];
                    $sliders[] = $slider;  
                    update_option(self::PLUGIN_PREFIX.'option',$sliders);

                    $id =  max(array_keys($sliders));                    
                    $slidesCount = array_key_exists('slides', $slider) ? count($slider['slides']) : 0 ;
                    
                    self::init_mustache();
                    $partial = self::$mustache -> loadPartial('slide_tr'); 
                    $html = $partial -> render(array(
                        'key'         => $id,
                        'page_name'   => self::$page_name,
                        'title'       => $slider['title'],
                        'slidesCount' => $slidesCount 
                    )); 

                    $response = array('result' => 'success', 'html' => $html);
                }
            break;

            case "preview-slider" : 
                if(isset($_POST['sliderID']) || isset($_POST['slider'])) { ?> 
                    <!doctype html>
                    <html> 
                        <body style="padding:0px;margin:0px;overflow:hidden">
                            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
                            <script type="text/javascript" src="<?php echo self::$plugin_dir_url ?>assets/js/jquery.kickass.js"></script> 
                            <link href="<?php echo self::$plugin_dir_url?>assets/css/kickass.css" rel="stylesheet" type="text/css" />
                            <?php
                                if(isset($_POST['sliderID']) && isset($_POST['slider'])) {
                                    parse_str($_POST['slider'],$slider); 

                                    // jQuery does not send empty arrays in ajax
                                    foreach($slider['slides'] as &$slides) {
                                        if(!array_key_exists('objects', $slides)) {
                                            $slides['objects'] = array();
                                        }
                                    }
                                    self::fetchFrontEndMarkup($slider,$_POST['sliderID']);
                                }
                                else {   
                                    $id = $_POST['sliderID']; 
                                    self::fetchFrontEndMarkup($sliders[$id],$id);                   
                                }
                            ?>
                        </body>
                    </html>
                <?php  } 
                die(); 
            break;

            case "save-slider":
            case "save-draft" :   
                $slider_id = $_POST['sliderID']; 
                $slider = $_POST['slider'];

                if($slider_id === 'new') {
                    // If either false or empty array 
                    $slider_id = empty($sliders) ? 1 : max(array_keys($sliders)) + 1 ; 
                } 

                // jQuery does not send empty arrays in ajax
                foreach($slider['slides'] as &$slides) {
                    if(!array_key_exists('objects', $slides)) {
                        $slides['objects'] = array();
                    }
                }
                
                if($slider['title'] === '') $slider['title'] = 'Slider #'. $slider_id; 

                $sliders[$slider_id] = $slider; 
                update_option(self::PLUGIN_PREFIX.'option',$sliders); 
                // die does not work with int 
                die((string)$slider_id);  
            break;

            case "export-sliders" : 
                $file_name =  self::PLUGIN_PREFIX.'export_'.date('d-M-Y_H:i:s').'.txt'; 
                header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
                header('Content-Description: File Transfer');
                header('Content-type: text/plain');
                header('Content-Disposition: attachment; filename='.$file_name);
                header('Expires: 0');
                header('Pragma: public'); 
                ob_clean();
                flush();
                die(serialize(self::$sliders));
            break;

            case "wp-editor" :
                die(wp_editor('','editor',array(
                    'media_buttons'  => false,
                    'quicktags'      => false
                )));
            break;

            default :
            break;
        }  
 
        header( "Content-Type: application/json" );  
        die(json_encode($response));
    }

    public static function cb_shortcode($atts) {
        if(array_key_exists('id',$atts)) {
            $id = $atts['id'];
            $sliders = get_option(self::PLUGIN_PREFIX.'option'); 
            if(array_key_exists($id,$sliders)) {
                self::fetchFrontEndMarkup($sliders[$id],$id);
            }
            else {
                return 'No slider with this id. Please enter a valid slider id';
            }
        }  
        else {
            return 'id is needed in shortcode e.g. [parallax-slider id="2"]';
        }
    }

    public static function cb_admin_print_styles () {

        wp_enqueue_style('kickass-admin-css'); 
    }

    public static function cb_admin_print_scripts () {

        wp_enqueue_script('kickass-admin-js');   
    }

    public static function cb_wp_enqueue_scripts () { 
        wp_enqueue_script('kickass-front-js', self::$plugin_dir_url.'assets/js/jquery.kickass.js', array('jquery'), self::$version );
        wp_enqueue_style ('kickass-front-css',self::$plugin_dir_url.'assets/css/kickass.css',null, self::$version );
    }

    public static function cb_admin_enqueue_scripts () {
        // wp_enqueue_script('dashboard'); is buggy, thus adding following 4 scripts
        wp_enqueue_script('common');
        wp_enqueue_script('wp-lists');
        wp_enqueue_script('postbox'); 
        wp_enqueue_media(); 
        
        wp_enqueue_script('wp-color-picker'); 
        wp_enqueue_script('jquery-ui-dialog');
        wp_enqueue_script('jquery-ui-spinner');


        wp_enqueue_style( 'wp-color-picker' );  
        wp_enqueue_style ( 'wp-jquery-ui-dialog');

        wp_localize_script('kickass-admin-js', 'JS_DATA', array(
            'ajaxUrl'         =>  admin_url('admin-ajax.php'), 
            'ajaxAction'      =>  self::PLUGIN_PREFIX.'ajax',
            'ajaxNonce'       =>  wp_create_nonce(self::PLUGIN_PREFIX.'ajax_nonce'),
            'pageHook'        =>  self::$page_hook,
            'pageName'       =>  self::$page_name,
            'sliderID'        =>  self::$slider_id, 
            'slidersOrder'    =>  (isset($_GET['order']) && $_GET['order'] === 'asc') ? 'asc' : 'dsc' 
        ));
    }

    public static function cb_page_render() {  
        require dirname(self::$file).'/admin.php';

        self::init_mustache(); 
        $tpl = self::$mustache->loadTemplate('dialogs'); 
        echo $tpl->render(array(
            'transitions'   =>  self::$object_transitions,
            'easings'       =>  self::$object_easings
        )); 


        // Hack to include tinyMce js/css in wp's way
        // Creating a hidden fake_editor 
        ob_start(); 
        wp_editor( '', 'fake_editor',array(
            'media_buttons' => false,
            'tinymce' => array(
                'theme_advanced_buttons1' => 'bold,italic,underline,formatselect,fontsizeselect,fontselect,wp_adv',
                'theme_advanced_buttons2' => 'bullist,blockquote,justifyleft,justifycenter,justifyright,justifyfull,link,unlink,forecolor,backcolor,code' 
            )
        ));
        $editor = ob_get_contents();
        ob_end_clean();

        echo '<div class="hidden"><div id="fake_editor">'.$editor.'</div></div>';
         
    } 

    private static function arrToHashConversion($arr) {
        foreach($arr as $k => &$v) {
            $v['key']  = $k;
            $v['slidesCount'] = array_key_exists('slides', $v) ? count($v['slides']) : 0;
        }
        return $arr;
    }

    public static function cb_escape ($value) {
        return htmlspecialchars($value, ENT_COMPAT, 'UTF-8');
    }

    private static function init_mustache() {
        if(class_exists('Mustache_Autoloader')) return;

        require self::$plugin_dir_path.'/mustache/src/Mustache/Autoloader.php';
        Mustache_Autoloader::register();
        
        self::$mustache = new Mustache_Engine(array( 
            //'cache' => self::$plugin_dir_path.'/mustache/cache', 
            'escape' => array(__CLASS__,'cb_escape'),
            'charset' => 'UTF-8', 
            'loader' => new Mustache_Loader_FilesystemLoader(self::$plugin_dir_path. '/views/mustache'),
            'partials_loader' => new Mustache_Loader_FilesystemLoader(self::$plugin_dir_path. '/views/mustache/partials')
        ));
    } 

    private static function fetchFrontEndMarkup($slider,$id) { 
        $t = $slider['slides'];
        $slides = array(); 

        foreach($slider['slidesOrder'] as $k => $v) { 
            $slides[] = $t[$v];
        }

        foreach($slides as &$slide ) { 
            if($slide['bgColor'] !== '') {
                $slide['bgColor'] = 'background:'.$slide['bgColor'];
            }

            foreach($slide['objects'] as &$object) { 
                $object['html'] = stripslashes($object['html']);
                $object['type'] = $object['data']['type'];
                $object['top']  = $object['data']['top'];
                $object['left'] = $object['data']['left'];
                $object['data'] = json_encode($object['data']);
            }    
        }

        self::init_mustache();
        $tpl = self::$mustache->loadTemplate('slider_front_end');  

        $slider['slides'] = $slides;

        echo $tpl->render(array(
            'slider'            => $slider,
            'slider_html_id'    => self::$page_name.$id
        ));
    }
}

?>