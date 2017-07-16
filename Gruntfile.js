module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    'Script/buld/global.min.js': ['Script/libs/*.js'],
                    'Script/buld/ext.min.js': ['Script/libs/ext/*.js'],
                    'Script/buld/sli.min.js': ['Script/libs/slider/*.js']
                }
            }
        },
        compass: {
            compile: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            options: {
                reload: true,
                livereload: true
            },
            compass: {
                files: ['Style/scss/**/*.{scss,sass}', 'Script/libs/**/*.js', '**/*.html'],
                tasks: ['compass', 'uglify']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('live', ['uglify', 'compass', 'watch']);



};