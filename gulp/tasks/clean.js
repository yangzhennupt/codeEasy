var gulp=require('gulp'),
    del =require('del'),
	config=require('../config');
	
	gulp.task('clean',function(cb){
		return del(config.dest,cb);
	});
	

	//gulp.task('default', ['clean','scss','html','javascript','image','watch']);