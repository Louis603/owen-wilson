fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=5")
.then(res => res.json())
.then(data => console.log(data))

console.log(1+1)