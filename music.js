const Songs = [{
    "img":"friends.jpg",
    "music":"Friends.mp3",
    "name":"FRIENDS"
},
{
    "img":"montero.jpg",
    "music":"Montero.mp3",
    "name":"MONTERO"
},
{
    "img":"stay.jpg",
    "music":"Stay.mp3",
    "name":"STAY"
},
{
    "img":"unstappable.jpg",
    "music":"Unstoppable.mp3",
    "name":"UNSTOPPABLE"
},
{
    "img":"love_nwantiti.jpg",
    "music":"Love Nwantiti.mp3",
    "name":"lOVE NWANTITI"
},]

var BackBtn = document.getElementById("Back");
var PlayBtn = document.getElementById("Play");
var NextBtn = document.getElementById("Next");
var CoverImg = document.querySelector(".Cover-img");
var CoverName = document.querySelector(".text2")
let Audio = document.createElement("audio");
let Position = 0;
var Playing = false;
var Start = true;


function PlayPause(){
    if(Playing){
        Audio.pause();
        Playing = false;
        PlayBtn.src = "Play.png";
        console.log("plaaa");
    }
    else{
        Audio.play();
        Playing = true;
        PlayBtn.src = "Pause.png";
    }

}
function Back(){
    if(Position>=1)
    Position--;
    else
    Position = Songs.length-1;
    LoadMusic(Position);
    Playing = false;
    PlayPause();
}
function Next(){
    if(Position<Songs.length-1)
    Position++;
    else
    Position = 0;
    LoadMusic(Position);
    Playing = false;
    PlayPause();
}
function LoadMusic(n){
    Position = n;
    Audio.src = Songs[n].music;
    CoverImg.src = Songs[n].img;
    CoverName.innerText = Songs[n].name;
    if(Start){
        Start = false;
        Playing = true;
    }
    else{
        
        Playing = false;
    }
    PlayPause();
}
LoadMusic(Position);
