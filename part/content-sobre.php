<!-- SOBRE A EMPRESA -->
<?php
$args = array(
  'page_id' => 13
);

$postHome = new wp_query($args);
if ($postHome->have_posts()):
  while($postHome->have_posts()): $postHome->the_post()
  ?>
    <section id="gmx">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <?php the_post_thumbnail( 'high', array( 'class' => 'img-responsive' ) ); ?>
          </div>
          <div class="col-md-7">
            <h1> <span> <?php the_title() ?> </span></h1>
            <?php the_content() ?>
          </div>
        </div>
      </div>
    </section>
  <?php
  endwhile;
endif;
?>
