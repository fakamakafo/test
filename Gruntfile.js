module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['**/*.js', 'LESS/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          onCreateServer: function(server, connect, options) {
            // var io = require('socket.io').listen(server);
            // io.sockets.on('connection', function(socket) {
            //   // do something with socket
            // });
          }
        }
      }
    },


    less: {
      development: {
        files: {
          'app.style.css': 'LESS/00_base.less'
        }
      },
    }

  });

  // Load required modules
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Task definitions
  grunt.registerTask('serve', [
    'connect',
    'watch',
    'less'
  ]);
};
