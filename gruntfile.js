module.exports = function (grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		uglify: {
			my_target:{
				files:{
					'_/js/scripts.js':['_/componemts/js/*.js']
				}
			}
		}
	});
}