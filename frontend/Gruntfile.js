module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt
            .file
            .readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/test.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            build: [
                'Gruntfile.js', 'src/js/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsxhint');

    grunt.registerTask('default', ['jshint', 'uglify']);
}