"use strict";

const toonLanden = function(){
    console.log("Landen:");
};

const getLanden = function(){
    handleData(`http://api.laprudence.be/project2/v2/landen`, toonLanden);
};

const init = function(){
    console.log("init");  
    getLanden();    
};

document.addEventListener('DOMContentLoaded', init);