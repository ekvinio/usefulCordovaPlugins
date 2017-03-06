var exec = require("cordova/exec");

function Intentplugin(){}

Intentplugin.prototype.getData = function (cb) {
    exec(function (success) {
        var contain = success.split(":");
        console.log(contain);
        if(contain[0].indexOf("file") > -1){
            var erg = success + "";
            console.log(erg);
            document.addEventListener("deviceready", init, false);
                function init() {
                    window.resolveLocalFileSystemURL(erg, gotFile, fail);

                }

                function fail(e) {
                console.log("FileSystem Error");
                console.dir(e);
                }

                function gotFile(fileEntry) {

                fileEntry.file(function(file) {
                    var reader = new FileReader();

                    reader.onloadend = function(e) {
                        var res2 = JSON.parse(this.result);
                        window.stammdaten = res2;
                            cb();
                }

                reader.readAsText(file);
                });

            }
            erg = null;
            sucess = null;
        }
        else if(contain[0].indexOf("content") > -1){
            var splitatRegex = success.split(/([A-Z a-z]*):\/\/([A-Z a-z]*).([A-Z a-z]*).([A-Z a-z]*)/);
            var erg = "file://"+splitatRegex[splitatRegex.length-1];
            console.log(erg);
            document.addEventListener("deviceready", init, false);
                function init() {
                    window.resolveLocalFileSystemURL(erg, gotFile, fail);

                }

                function fail(e) {
                console.log("FileSystem Error");
                console.dir(e);
                }

                function gotFile(fileEntry) {

                fileEntry.file(function(file) {
                    var reader = new FileReader();

                    reader.onloadend = function(e) {
                        var res2 = JSON.parse(this.result);
                        window.stammdaten = res2;
                            cb();
                }

                reader.readAsText(file);
                });

            }
        }
        else{
            delete window.stammdaten;
            cb();
            }

    },function (error) {
        alert(error);
    },"Intentplugin","getData",[]);
};
module.exports = new Intentplugin();
