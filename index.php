<?php get_header() ?>
  <?php echo do_shortcode('[rev_slider alias="home"]') ?>
  <?php get_template_part('part/content','sobre'); ?>
  <?php get_template_part('part/content', 'financiamento') ?>
  <?php get_template_part('part/content', 'consorcio') ?>
  <?php get_template_part('part/content', 'sliderparceiros') ?>
<?php get_footer() ?>
