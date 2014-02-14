module.exports = function (grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		uglify: {
			my_target:{
				files:{
					'_/js/scripts.js':['_/componemts/js/*.js']
				}
			}
		},
		watch:{
			options: { livereload: true },
			scripts:{
				files:['_/componemts/js/*.js'],
				tasks: ['uglify']
			},
			html:{
				files: ['*.html']
			}	
		}
	})
	grunt.registerTask('default','watch');
}