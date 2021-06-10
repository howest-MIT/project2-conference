"use strict";

const toonSprekers = function(data){
    console.log("Sprekers:");
    console.log(data);
    for (const item of data){
           console.log(item);
    }
};

const getSprekers = function(){
    handleData(`http://api.laprudence.be/project2/v2/sprekers`,toonSprekers);
};

const init = function(){
    console.log("init");
    getSprekers();    
};

document.addEventListener('DOMContentLoaded', init);