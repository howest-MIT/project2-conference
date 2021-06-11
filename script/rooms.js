"use strict";

const toonZalen = function(data){
    console.log("zalen:");
    console.log(data);
    for(const item of data){
        console.log(`${item.id.omschrijving}`);
    }
};

const getZalen = function(){
    handleData(`http://api.laprudence.be/project2/v2/zalen`,toonZalen);
};

const init = function(){
    console.log("init");
    getZalen();
};

document.addEventListener('DOMContentLoaded', init);