module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    purifycss: {
      options: {

      },
      target: {
        src: ['*.html'], // Observe all html files
        css: ['css/*.css'], // Take all css files into consideration
        dest: 'dest/tmp.css' // Write to this path
      }
    }
  });

  grunt.registerTask('default', ['purifycss']);
};
