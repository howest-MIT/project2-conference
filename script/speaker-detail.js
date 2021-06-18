'use strict';
let talkID = '';


let HaalIdOpUitQueryString = function () {
  //lees https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  //lees https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const urlParams = new URLSearchParams(window.location.search);
  talkID = urlParams.get('talkid');
  // const html_placeholder = document.querySelector('.js-placeholder');

  if (talkID) {
    // html_placeholder.innerHTML = talkID;
    console.log(`Het id van de gekozen speaker is ${talkID}`);
  } else {
    // html_placeholder.innerHTML = 'De querystring ontbreekt';
    console.log('De querystring ontbreekt');
  }
};

const getTalkById = function(id) {
  console.log('getTalkById');
  handleData(`https://api.laprudence.be/project2/v2/talks/${talkID}`, showTalkById);
}

const showTalkById = function(data) {
  // console.log(data);
  console.log('showTalkById');
  const detail = document.querySelector('.js-detail');
  let detailhtml = '';
console.log(data)
  let foto = '';
  let voornaam = '';
  let familienaam = '';

  // avatar indien geen foto
    if (data.afbeelding != null) {
       foto = data.afbeelding
    }
    else {
       foto = 'null.jpg'
    }

     // voornaam leeglaten als null
   if (data.voornaam != null ) {
    voornaam = data.voornaam;
   }
   else {
    voornaam = '';
   }
   
   // familienaam leeglaten als null
   if (data.familienaam != null ) {
    familienaam = data.familienaam;
   }
   else {
    familienaam = '';
   }

      

      detailhtml += `
      <div class="container">
  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4"></div>
    <div class="col-sm-12 c-detailtitle"><h3>Speaker</h3></div>
    <div class="col-sm-4"></div>
    <div class="col-sm-2"><img src="img/${foto}" class="c-imgdetail"></div>
    <div class="col-sm-5 c-speakerdetail"></div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm-4"></div>
    // <div class="col-sm-2 c-detailtext"><p>"${data.familienaam}${data.voornaam}"</p></div>
    <div class="col-sm-4 c-detailtext2"><p><svg aria-hidden="true" opacity="70%"  height="20px" width="20px" color="red" focusable="false" data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16 c-speakerheart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>Aantal likes </p></div>
    <div class="col-sm-2"></div>
  </div>

<div class="container">
  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-2">${data.bio.eng}</div>
    <div class="col-sm-4"></div>
    <div class="col-sm-2"></div>
  </div>
</div>
</div>  
      `
  

  detail.innerHTML = detailhtml;

  }
  

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM geladen');
  HaalIdOpUitQueryString();
  getTalkById();
  
});