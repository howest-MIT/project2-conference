"use strict";

const toonTalks = function(){
    console.log("Talks:");
};

const getTalks = function(){
    handleData(`http://api.laprudence.be/project2/v2/talks`,toonTalks);
};

const init = function(){
    console.log("init");
    getTalks();
};

document.addEventListener('DOMContentLoaded', init);