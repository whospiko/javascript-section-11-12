// part1 : object model
function Music(name, type=""){
    this.id = 0;
    this.name = name;
    this.type = type;
}

// part2 : object collection
function MusicCollection(){
    this.sequential = 1;
    this.musics = []
    this.save = function (music){
        let id = this.sequential++;
        music.id = id
        this.musics.push(music)
    }
    this.update = function (id, updateMusic){
        const music = this.findById(id)
        if(music === null) {
            console.log("Music Not found")
            return;
        }
        if(updateMusic.id !== undefined){
            console.log("cannot modify music id")
            return;
        }
        if(updateMusic.name !== undefined){
            music.name = updateMusic.name
        }
        if(updateMusic.type !== undefined){
            music.type = updateMusic.type
        }
    }
    this.delete = (id) => {
        const music = this.findById(id)
        if(music === null) {
            console.log("Music Not found")
            return;
        }
        this.musics.splice(this.musics.indexOf(music), 1)
    }
    this.findById = (id) => {
        const music = this.musics.find(music => music.id === id)
        if(music === undefined){
            return null;
        }
        return music
    }
    this.displayMusicName = function (){
        this.musics.forEach((music) => {
            console.log(`${music.id} - ${music.name}`)
        })
    }
}
// part 3
const m1 = new Music("abc", "rock")
const m2 = new Music("abcd", "rock")
const m3 = new Music("da", "slow")

const musicCollection = new MusicCollection()
musicCollection.save(m1)
musicCollection.save(m2)
musicCollection.delete(1)
musicCollection.save(m3)
musicCollection.save(new Music("da1", "slow1"))
musicCollection.delete(2)
musicCollection.update(1, {
    name: 'bcd',
})
console.log("------------ display Music Collection -------------------")
musicCollection.displayMusicName()