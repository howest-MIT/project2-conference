"use strict";

const calcTime = function (time) {
  let pieces = time.split(':'), hour, minute;

  console.log(pieces);

  if(pieces.length === 2) {
      hour = parseInt(pieces[0], 10);
      minute = parseInt(pieces[1], 10);
  }
  let passedTime = `${hour + 1}:${minute}`;
  
  if(minute == 0){
    passedTime = `${hour + 1}:${minute}0`;
  }
  

  return passedTime
}

const showTalks = function (jsonData) {
  console.log(jsonData)
  const room = document.querySelector(`.js-schedule-${jsonData.id}`);
  for (const talk of jsonData.talks) {
    console.log(new Date(talk.start));
    let end = calcTime(talk.start);
   room.innerHTML += `<tr>
   <td>
     <p class="uur">${talk.start}h - ${end}</p>
   </td>
   <td>
   <div class="col-sm-6 c-schedule">
      <a href="roomdetail.html" class="c-link"><h3>${talk.titel}</h3></a>
      <p class="c-scheduletext">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
    </div>`;
  }
}

const showRooms = function (jsonData) {
  console.log("showRooms");
  console.log(jsonData);
    for (const room of jsonData) {
        document.querySelector(".js-schedule").innerHTML += `<div class="row">
        <div class="c-schedule">
         <p class=" c-scheduletext room w-100 js-room">${room.omschrijving}</p>
       </div>
      <div class="js-room-${room.id}"></div> </div>
      `;

      handleData(`https://api.laprudence.be/project2/v2/zalen/${room.id}/talks`, showTalks);
    }
}

const getRooms = function () {
  console.log("getRooms");
    handleData("https://api.laprudence.be/project2/v2/zalen", showRooms);
}

const init = function () {
  console.log("init");
    getRooms();
}

document.addEventListener("DOMContentLoaded", init);