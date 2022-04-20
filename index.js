//FETCHES
//Movie info on load
fetch("https://owen-wilson-wow-api.herokuapp.com/wows/ordered/29")
.then(res => res.json())
.then(arr => onLoadMovie(arr))


fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=5")
.then(res => res.json())
.then(data => {
    data.forEach(arr => {
        displayMovie(arr)
    });
})


//Variable declarations
let poster = document.querySelector('#poster')
let movieName = document.querySelector('#name')
let yr = document.querySelector('#year')
let char = document.querySelector('#character')
let quote = document.querySelector('#quote')
let video = document.querySelector('#video')
let audio = document.querySelector('#audio')
let form = document.querySelector('#form')
let vote = document.getElementById("vote-count")
let userVote = document.getElementById('user-vote')
let btn = document.getElementById('btn')
let result = document.getElementById('result')
let divQuiz = document.getElementById('quiz')

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

function onLoadMovie(arr) {
    poster.src = arr.poster
    movieName.textContent = arr.movie
    yr.textContent = `Released: ${arr.year}`
    char.textContent = `Character: ${arr.character}`
    quote.textContent = `Full Quote: "${arr.full_line}"`
    video.src = arr.video['1080p']
    audio.src = arr.audio
    userVote.textContent = ''
    btn.addEventListener('click',(e) => wowGuess(e, arr))
}



//CALLBACKS
const handleClick = (e, arr) => {
    console.log(arr)
    poster.src = arr.poster
    movieName.textContent = arr.movie
    yr.textContent = `Released: ${arr.year}`
    char.textContent = `Character: ${arr.character}`
    quote.textContent = `Full Quote: "${arr.full_line}"`
    video.src = arr.video['1080p']
    audio.src = arr.audio
    

    // let num1 = arr.total_wows_in_movie 
    // console.log(num1)
    btn.addEventListener('click',(e) => wowGuess(e, arr))
      

}

//Guesser event callback
function wowGuess(e, arr) {
    let answer = arr.total_wows_in_movie 
    let input = document.getElementById('guess').value
    console.log(input)
    if (input == answer){
        let hidden = document.createElement('audio')
        hidden.autoplay = 'autoplay'
        hidden.src = 'https://assets.ctfassets.net/bs8ntwkklfua/5wTwFaxcgg9E4QIwUXTJK4/9fbcc04e27d5860c9bf3febf72c9f20d/Cars_Wow_1.mp3'
        divQuiz.append(hidden)
        result.textContent = 'CORRECT!'
    }else result.textContent = 'WRONG!'
  }



//FORM
form.addEventListener('submit', function(e) {
    e.preventDefault()
    userVote.textContent = vote.value
})