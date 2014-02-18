module.exports = function (grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target:{
				files:{

					'_/js/scripts.js':['_/components/js/*.js'],
					'_/js/vendor/modernizr.js':['_/components/js/vendor/modernizr.js']

			}
		},
		compass:{
			dev: {
				options: {
					config: 'config.rb',
					require: 'susy'
				}
			}
		},
		watch:{
			options: { livereload: true },
			scripts:{
				files:['_/components/js/*.js'],
				tasks: ['uglify']
			},
			sass: {
				files:['_/scss/*.scss'],
				tasks: ['compass:dev']
			},
			html:{
				files: ['*.html']
			}	
		}
	})
	grunt.registerTask('default',['watch','compass','uglify']);
}