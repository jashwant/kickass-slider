<ul id="sliderOptions" class="clearfix">
<?php  
	$options = self::$slider_options; 
	ob_start();  
    foreach($options as $opt) {
		echo '<li class="alignleft">';
		
		switch($opt['type']) {
			case 'textbox' : 
				echo '<label title="'.$opt['title'].'" for="'.$opt['name'].'">'.$opt['label'].'</label>
					<input type="text" id="'.$opt['name'].'" value="'.$slider[$opt['name']].'" name="'.$opt['name'].'" />';	
			break;

			case 'radio' :
				$choices = array('Yes' => 1,'No' => 0);
				echo '<span title="'.$opt['title'].'" class="label">'.$opt['label'].'</span>';
				echo '<span class="radioBox">';
				foreach($choices as $key => $choice) { 
					$checked = $choice === (int) $slider[$opt['name']] ? ' checked': '';
					echo '<label>'.$key.
							'<input'.$checked.' title="'.$opt['title'].'" type="radio" name="'.$opt['name'].'" value="'.$choice.'" />'; 			
					echo '</label>';
				}
				echo '</span>';
			break;
			default: 
			break;
		} 
		echo '</li>';
	}
	$options = ob_get_contents();
    ob_end_clean(); 
    echo $options;
	
?>
</ul>