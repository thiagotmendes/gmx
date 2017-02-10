module.exports = function (grunt) {
  // Configuração
  grunt.initConfig({
    // concatena css
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/css/main.min.css': [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/font-awesome/css/font-awesome.css',
            'bower_components/slick-carousel/slick/slick.css',
            'bower_components/slick-carousel/slick/slick-theme.css',
          ]
        }
      }
    },
    // sass - comprime o css
    sass:{
      options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
      dist:{
        files:{
          'assets/css/estilo.min.css' : 'global/css/main.scss'
        }
      }
    },
    // concatena arquivos js
    uglify: {
      my_target: {
        files: {
          'assets/js/main.min.js': ['bower_components/bootstrap/dist/js/bootstrap.js', 'bower_components/slick-carousel/slick/slick.js'],
          'assets/js/funcoes.min.js' : ['global/js/funcoes.js']
        }
      }
    },
    //copia arquivos comuns
    copy: {
     main: {
       files: [
         {expand: true,flatten: true, src: 'bower_components/bootstrap/fonts/*', dest: 'assets/fonts',},
         {expand: true,flatten: true, src: 'bower_components/font-awesome/fonts/*', dest: 'assets/fonts',},
         {expand: true,flatten: true, src: 'bower_components/slick-carousel/slick/fonts/*', dest: 'assets/fonts',},
         {expand: true,flatten: true, src: 'bower_components/slick-carousel/slick/ajax-loader.gif', dest: 'assets/images',},
       ]
     },
   },
    // watch - acompanha as modificações nos arquivos deforma altomatica
    watch: {
      options:{
        livereload: true
      },
      sass: {
        files: 'global/css/*.scss',
        tasks: 'sass'
      },
      js: {
        files:'global/js/funcoes.js',
        tasks: 'uglify'
      }
    },
  });

  // load plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register tasks
  grunt.registerTask('site',['copy','uglify','cssmin','sass']);
  grunt.registerTask('live',['watch']);
};
