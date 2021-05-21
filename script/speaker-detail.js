'use strict';

let HaalIdOpUitQueryString = function () {
  //lees https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  //lees https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const urlParams = new URLSearchParams(window.location.search);
  const idVanSpeaker = urlParams.get('speakerid');
  const html_placeholder = document.querySelector('.js-placeholder');

  if (idVanSpeaker) {
    html_placeholder.innerHTML = idVanSpeaker;
    console.log(`Het id van de gekozen speaker is ${idVanSpeaker}`);
  } else {
    html_placeholder.innerHTML = 'De querystring ontbreekt';
    console.log('De querystring ontbreekt');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM geladen');
  HaalIdOpUitQueryString();
});
