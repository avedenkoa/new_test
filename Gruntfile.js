module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: 1337
            },
            css: {
                files: ['assets/css/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'csso']
            },
            html: {
                files: ['**/*.html']
            },
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['uglify']
            },
        },
        sass: {
            development: {
                options: {
                    style: 'compressed'
                },
                files: {
                    "dist/style.css": "assets/css/main.scss"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            your_target: {
                src: 'dist/style.css',
                dest: 'dist/style.css'
            }
        },
        csso: {
            compress: {
                options: {
                    report: 'gzip'
                },
                files: {
                    'dist/style.min.css': ['dist/style.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/main.min.js': ['assets/js/**/*.js']
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        exec: {
            run_server: {
                cmd: "start node static-file-server.js"
            },
            open_web: {
                cmd: "start chrome http://127.0.0.1:4200/"
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['exec', 'sass', 'autoprefixer', 'csso', 'uglify', 'imagemin', 'watch']);
};