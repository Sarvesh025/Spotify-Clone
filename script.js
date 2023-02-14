let initialSong = 0;
let audioElement = new Audio('/songs/1.mp3');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songListPlay = document.getElementsByClassName('songListPlay');
let text = document.getElementById('songName');
// let gif = document.getElementsByClassName('beats');
// audioElement.play();


let songs = [
    {songName : "Basti ka hasti", filePath : '/song/1.mp3', coverPath : '/covers/1.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/2.mp3', coverPath : '/covers/2.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/3.mp3', coverPath : '/covers/3.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/4.mp3', coverPath : '/covers/4.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/5.mp3', coverPath : '/covers/5.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/6.mp3', coverPath : '/covers/6.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/7.mp3', coverPath : '/covers/7.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/8.mp3', coverPath : '/covers/8.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/9.mp3', coverPath : '/covers/9.jpg'},
    {songName : "Basti ka hasti", filePath : '/song/10.mp3', coverPath : '/covers/10.jpg'}
]

//play Pause Button
let Mplay = document.getElementById('mPlay');
Mplay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime <= 0){
   audioElement.play();
//    pause();
   Mplay.classList.remove('fa-play');
   Mplay.classList.add('fa-pause');
   document.getElementsByClassName('beat').className.style.opacity = 1;
}
   else{
    audioElement.pause();
    // play.index.classList.remove('fa-circle-pause');
    // index.classList.add('fa-circle-play');
    document.querySelectorAll("beat").className.style.opacity = 0;

    Mplay.classList.remove('fa-pause');
    Mplay.classList.add('fa-play');

   }

}) 

const playAll = ()=>{
    Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
          element.classList.remove('fa-circle-pause');
          element.classList.add('fa-circle-play');
        })
    }

    

// const pauseAll = ()=>{
//     Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
//           element.classList.remove('fa-circle-play');
//           element.classList.add('fa-circle-pause');
//         })
//     }

//song button
let play = Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // playAll();
        //     index = parseInt(e.target.id);
        //   e.target.classList.remove('fa-circle-play');
        //   e.target.classList.add('fa-circle-pause');
        //   audioElement.src = `/songs/${index}.mp3`;
        //   audioElement.currentTime = 0;
        //   audioElement.play();
        //   Mplay.classList.remove('fa-play');
        //   Mplay.classList.add('fa-pause');
        
        // const pause = ()=>{
        //     index = parseInt(e.target.id);
        //   index.classList.remove('fa-circle-pause');
        //   index.classList.add('fa-circle-play');
        // }

        index = parseInt(e.target.id);
        if(audioElement.paused){
            playAll();
            audioElement.currentTime = 0;
            audioElement.src = `/songs/${index}.mp3`;
            audioElement.play();
            text.innerText = songs[index].songName;

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        Mplay.classList.remove('fa-play');
        Mplay.classList.add('fa-pause');
        gif.style.opacity = 1;
        }
        else{
            // playAll();
         audioElement.pause();
         e.target.classList.remove('fa-circle-pause');
         e.target.classList.add('fa-circle-play');
         Mplay.classList.remove('fa-pause');
        Mplay.classList.add('fa-play');
        gif.style.opacity = 0;
     
        }


    })
})




//Progress Bar
let progressBar = document.getElementById('progressBar');
audioElement.addEventListener('timeupdate', ()=>{
    let process = parseInt((audioElement.currentTime / audioElement.duration)*100);
    progressBar.value = process;
}) 

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value*audioElement.duration)/100;
})


let previous = document.getElementById('previous');
previous.addEventListener('click', ()=>{
    if(index <=1){
        index = 1;
    }
    else{
        index -= 1;
    }
    audioElement.src = `/songs/${index}.mp3`;
    audioElement.currentTime = 0;
        audioElement.play();
        text.innerText = songs[index].songName;
        Mplay.classList.remove('fa-play');
    Mplay.classList.add('fa-pause');
})

let next = document.getElementById('next');
next.addEventListener('click', ()=>{
    if(index <=1){
        index = 1;
    }
    else{
        index += 1;
    }
    text.innerText = songs[index].songName;
    audioElement.src = `/songs/${index}.mp3`;
    audioElement.currentTime = 0;
        audioElement.play();
        Mplay.classList.remove('fa-play');
    Mplay.classList.add('fa-pause');
})
