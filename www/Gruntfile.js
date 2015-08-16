module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            dynamic_mappings: {
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: './src/',      // Src matches are relative to this path.
                        src: ['**/*.js'], // Actual pattern(s) to match.
                        dest: 'build/',   // Destination path prefix.
                    },
                ],
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: './src/',
                        src: ['**/*.css'],
                        dest: 'build/',
                    }
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);
};
