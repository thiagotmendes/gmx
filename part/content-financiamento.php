<!-- FINANCIAMENTO -->
<?php
$args = array(
  'page_id' => 15
);

$postHome = new wp_query($args);
if ($postHome->have_posts()):
  while($postHome->have_posts()): $postHome->the_post()
    ?>
    <section id="financiamento-habitacional">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h2> <span> <?php the_title() ?> </span> </h2>
            <?php the_content() ?>
          </div>
          <div class="col-md-5">
            <?php the_post_thumbnail( 'high', array( 'class' => 'img-responsive' ) ); ?>
          </div>
        </div>
      </div>
    </section>
    <?php
  endwhile;
endif;
?>
