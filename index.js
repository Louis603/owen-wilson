fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=5")
.then(res => res.json())
.then(data => {
    data.forEach(arr => {
        displayMovie(arr)
    });
})



// Render Functions

const displayMovie = (arr) => {
    console.log(arr)
   let div = document.querySelector('#top-list')
   let span = document.createElement('span')
   span.textContent = arr.movie
   div.append(span)
}