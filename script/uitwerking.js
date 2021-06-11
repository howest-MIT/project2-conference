"use strict";

const toonLanden = function(data){
    console.log("Landen:");
    console.log(data);
    for (const item of data){
           console.log(item);
    }
};


const getLanden = function(){
    handleData(`http://api.laprudence.be/project2/v2/landen`, toonLanden);
};

const init = function(){
    console.log("init");  
    getLanden();    
};
document.addEventListener('DOMContentLoaded', init);