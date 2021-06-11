"use strict";

const toonTalks = function(data){
    console.log("Talks:");
    console.log(data);
    for (const item of data){
           console.log(item);
    }
};


const getTalks = function(){
    handleData(`http://api.laprudence.be/project2/v2/talks`,toonTalks);
};

const init = function(){
    console.log("init");
    getTalks();
};

document.addEventListener('DOMContentLoaded', init);