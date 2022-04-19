fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=5")
.then(res => res.json())
.then(data => {
    data.forEach(arr => {
        displayMovie(arr)
    });
})

//Variable declarations
let poster = document.querySelector('#poster')
let name = document.querySelector('#name')
let yr = document.querySelector('#year')
let char = document.querySelector('#character')
let quote = document.querySelector('#quote')
let video = document.querySelector('#video')
let audio = document.querySelector('#audio')

// Render Functions

const displayMovie = (arr) => {
    //console.log(arr)
   let div = document.querySelector('#top-list')
   let img = document.createElement('img')
   img.classList.add('new-poster')
   img.src = arr.poster
   img.style.width = "100"
   img.style.height = "200"
   div.append(img)
   img.addEventListener('click', (e) => handleClick(e, arr))
}

const handleClick = (e, arr) => {
    //console.log(arr)
    poster.src = arr.poster
    name.textContent = arr.movie
    yr.textContent = arr.year
    char.textContent = arr.character
    quote.textContent = `Full Quote: "${arr.full_line}"`
}


//Movie info on load
fetch("https://owen-wilson-wow-api.herokuapp.com/wows/ordered/29")
.then(res => res.json())
.then(arr => onLoadMovie(arr))

function onLoadMovie(arr) {
    poster.src = arr.poster
    name.textContent = arr.movie
    yr.textContent = arr.year
    char.textContent = arr.character
    quote.textContent = `Full Quote: "${arr.full_line}"`

    video.src = arr.video['1080p']
    audio.src = arr.audio
    console.log(arr.video['1080p'])

    console.log(video)
    console.log(audio)
    video.src = arr.video['1080p']
    audio.src = arr.audio

}