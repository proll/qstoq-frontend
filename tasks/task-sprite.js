module.exports = function(grunt) {
	var path = require('path');
	var fs = require('fs');
	var im = require('imagemagick');
	var _ = require('underscore');
	// var util = require('util');

	var sprite 	= require('node-sprite');

	grunt.registerTask('sprite', 'Simple sprite generation', function() {
		var basePath = path.resolve(grunt.config('sprites.sourcePath'));
		var done = this.async();

		sprite.sprites({path: basePath}, function(err, helper) {
			var lessStr = "// This file was generated automaticly, so don't modify it!\n";
			_.each(helper, function(pack){
				if(pack.name.indexOf("-2x")==-1) {
					lessStr += "." + pack.name + "{\n";
					lessStr += '\tbackground: url("' + grunt.config('sprites.webPath') + pack.filename() + '") no-repeat 0 0;\n';
					lessStr += '\tvertical-align:text-top;\n';
					lessStr += '\tdisplay:inline-block;\n';
					lessStr += "}\n";
					_.each(pack.images, function(file){
						lessStr += "." + pack.name + "-" + file.name + "{";
						lessStr += "\n";
						lessStr += "\twidth: " + file.width + "px;\n";
						lessStr += "\theight: " + file.height + "px;\n";
						lessStr += "\tbackground-position: " + (-file.positionX) + "px " + (-file.positionY) + "px;\n";
						lessStr += "}\n";
					});
				} else {
					var retinaName = pack.name,
						normalName = retinaName.replace("-2x",""),
						retinaFileName = pack.filename(),
						normalFileName = retinaFileName.replace("-2x",""),
						width = 	Math.ceil(pack._width()/2),
						height = 	Math.ceil(pack._height()/2);

					// resize to normal
					im.resize({
						srcPath: pack.url(), 
						dstPath: pack.url().replace("-2x",""), 
						width: width,
						height: height,
						format: "png"
					}, function(err, stdout, stderr){
						if (err) throw err
					 	console.log('resize retina sprite ' + retinaName);
					});


					lessStr += "." + normalName + "{\n";
					lessStr += '\tbackground: url("' + grunt.config('sprites.webPath') + normalFileName + '") no-repeat 0 0;\n';
					lessStr += '\tvertical-align:text-top;\n';
					lessStr += '\tdisplay:inline-block;\n';
					lessStr += "}\n";

					lessStr += "@media @highdensity {\n";
					lessStr += "\t." + normalName + "{\n";
					lessStr += '\t\tbackground: url("' + grunt.config('sprites.webPath') + retinaFileName + '") no-repeat 0 0;\n';
					lessStr += '\t.background-size('+width+'px '+height+'px);\n';
					lessStr += '\t\tvertical-align:text-top;\n';
					lessStr += '\t\tdisplay:inline-block;\n';
					lessStr += "\t}\n";
					lessStr += "}\n";

					_.each(pack.images, function(file){
						lessStr += "." + normalName + "-" + file.name + "{";
						lessStr += "\n";
						lessStr += "\twidth: " + Math.ceil(file.width/2) + "px;\n";
						lessStr += "\theight: " + Math.ceil(file.height/2) + "px;\n";
						lessStr += "\tbackground-position: " + (-Math.ceil(file.positionX/2)) + "px " + (-Math.ceil(file.positionY/2)) + "px;\n";
						lessStr += "}\n";
					});
				}
			});
			fs.writeFile(path.resolve(grunt.config('sprites.lessPath')), lessStr, function(){
				if (err) throw err;
				console.log('File ' + grunt.config('sprites.lessPath').cyan + ' was updated.');
				done(true);
			});

		});
	})
}