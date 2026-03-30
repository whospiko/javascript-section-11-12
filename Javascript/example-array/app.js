const music = ["song1", "song2", "song3"]

function addSong(songName) {
    let index = music.indexOf(songName);

    if(index !== -1){
       console.log("Music already exist");
       return
    }
     music.push(songName);
}

function nextPlay(songName){
    music.unshift(songName);
}

function removeSong(songName){
    let index = music.indexOf(songName);
    console.log(index);
    if(index === -1){
        console.log("Music Not Found")
        return
    }
    music.splice(index, 1);
}

console.log(music)
addSong("song4")
console.log("After adding song")
console.log(music)
nextPlay("song5")
console.log(music)
removeSong("song1")
console.log(music)