<ul id="sliderPublishContainer">
	<li class="clearfix">
		<input type="button" data-action="save-draft" class="alignleft button update-slider <?php echo $slider['status'] === 'published' ? ' hidden' : '' ?>" value="Save Draft" />
		<a data-action="preview-slider" class="alignright button update-slider">
			<span class="preview-icon"></span>Preview
		</a>
 	</li>  
	<li class="separator clearfix">
		<label class="label">Status:
			<?php if($slider['status'] === 'draft') :?>
				Draft
			<?php else : ?>
				<select name="post_status" id="sliderStatus">
					<?php $status = array('published' => 'Published','draft' => 'Draft'); ?>
					<?php foreach($status as $k => $v) : ?> 
						<option value="<?php echo $k; ?>" <?php echo $k === $slider['status'] ? 'selected' : '' ?>><?php echo $v; ?></option>  
					<?php endforeach; ?>
				</select>
			<?php endif; ?>
		</label> 
	</li>   
	<li class="clearfix">
		<?php if(self::$slider_id !== false && self::$slider_id !== 'new') : ?>
			<a class="delete-link alignleft" data-slider="<?php echo self::$slider_id; ?>" data-action="delete-slider" href="javascript:void(0);">Move to Trash</a> 
		<?php endif; ?>
		<input class="button button-primary button-large update-slider alignright"  type="submit" data-action="save-slider" value="<?php echo $slider['status'] === 'published' ? 'Update' : 'Publish' ?>" name="submit" /> 
	</li>  
</ul>