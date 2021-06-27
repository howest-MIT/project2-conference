// "use strict"



const getSprekers = function(){
    handleData(`https://api.laprudence.be/project2/v2/sprekers?all`,toonSprekers, "GET");
};

const toonSprekers =function(speakersData){
console.log("Speakers");
const arrSpeakers = speakersData.data;
console.log(arrSpeakers);
document.querySelector(".js-sprekers").innerHTML = "";
for (let speaker of arrSpeakers){
  const id =  speaker.id;
  const fnaam = speaker.voornaam;
  const lnaam = speaker.familienaam;
  const love = speaker.id;
  let name = "";
  const givimg = speaker.afbeelding;
  const ukimg = "unknown_person.jpg";
  let img = ";";
  const likes = speaker.love_teller;
  const country = speaker.land.benaming.eng;

  console.log(givimg);
  if (givimg && givimg != null){
      img = givimg;
  }
  else{
      img = ukimg;
  }

  if (fnaam && fnaam != ""){
      name = fnaam;
    }
    else{
        naam = lnaam;
    }
    document.querySelector(".js-sprekers").innerHTML += 
`

<div class="col-sm-4 c-speakers">
    <div class="c-card ">
        <a href="speakersdetail.html"><img src="img/${img}" alt="Avatar"  class="c-imgspeakers"></a>
        <div class="c-container"><br>
        <p class="c-speakers__likes"><i class="far fa-heart c-info__heart"></i>${likes} </p>
          <h5 class="c-speaker__text"><b>${fnaam} ${lnaam}</b></h5> 
          <div class="c-moreinfo"><a href="speaker-detail.html" target="_blank" class="btn">${speaker.bio.eng.slice(0,160)}</a></div>
        </div>
      </div>
    </div>`
}

let heart = document.querySelectorAll(".info__heart");
  console.log(heart);
  for (let love of heart) {
    love.addEventListener("click", function () {
      handleData(`https://api.laprudence.be/project2/v2/sprekers/${heart.love}/love`, location.reload(), "PATCH", `{"extra_love":1}`);
    })
  }

};

const init = function(){
    console.log("init");
    getSprekers();
    
};


document.addEventListener('DOMContentLoaded', init);