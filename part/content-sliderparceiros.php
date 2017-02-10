<!-- SLIDER CLIENTES -->
<section id="parceiros">
  <div class="container">
    <?php
    $page_id = 19;
    $page_data = get_page ( $page_id );
    ?>
    <h2 class="text-center"> <span> <?php echo $page_data->post_title; ?> </span> </h2>
    <div class="parceiros">
      <?php
      remove_filter( 'the_content', 'wpautop' );
      echo apply_filters( 'the_content', $page_data->post_content );
      ?>
    </div>
  </div>
</section>
