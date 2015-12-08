module.exports = function(grunt) {

  grunt.initConfig({

    useminPrepare: {

      html: 'src/index.html',

      options: {

        dest: 'build'
      }
    },

    usemin: {

      html: ['build/*.html']
    },

    copy: {

      html: {

        files: [

          {
            expand: true,
            src:'src/*.{html,json,php}',
            dest: 'build/',
            filter: 'isFile',
            flatten: true
          }
        ]
      },

      img: {

        files: [

          {
            expand: true,
            cwd: 'src/',
            src: 'img/**/*.{jpg,png,gif}',
            dest: 'build/'
          }
        ]
      }
    },

    less: {

      compileCore: {

        src:  'src/less/bootstrap.less',
        dest: 'src/css/bootstrap.css'
      },

      compileTheme: {

        src:  'src/less/theme.less',
        dest: 'src/css/theme.css'
      }
    },

    cssmin: {

      options: {
        
        shorthandCompacting: false,
      }
    },

    watch: {

      theme: {
        files: 'src/less/**/*.less',
        tasks: 'less:compileTheme'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('build', [
    'less',
    'copy',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin'
  ]);

};