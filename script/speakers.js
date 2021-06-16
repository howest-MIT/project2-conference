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

<div class="col-sm-4 c-speakers js-sprekers">
    <div class="c-card ">
        <a href="speakersdetail.html"><img src="img/${img}" alt="Avatar"  class="c-imgspeakers"></a>
        <div class="c-container"><br>
          <p><i class="far fa-heart"></i>Aantal likes </p>
          <h4 class="c-speakertext"><b>${fnaam} ${lnaam}</b></h4> 
          <div class="c-moreinfo"><a href="speaker-detail.html?speakerid=${id}" target="_blank" class="btn">More info</a></div>
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