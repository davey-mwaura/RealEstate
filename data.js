
// Show land Api
function showLands(land){

let extraInfo = document.createElement("div")
extraInfo.classList.add('Card')
extraInfo.innerHTML = `
<ul>
<li class="first">ID:${land.id}</li>

<li class="second">Land:${land.title}</li>

<li class="third">Location:${land.location}</li>

<li class="fourth">Price:${land.price}</li>
</ul>
<img src= ${land.poster}>

<button class= "semi" id="Delete">Sell Land</button>
`


// Append created element
let div = document.querySelector("div").appendChild(extraInfo)

// delete function------------------------------------------------------------

let deleteButton = document.getElementById("Delete")
// console.log(extraInfo)
deleteButton.addEventListener('click', () => {
  // let show = document.querySelector("ul")
  // console.log(show)
  // let Bruno = land.id
  // console.log(Bruno)
  
  // deleteJSON(land.id)
  div.remove()
  })

  // function deleteJSON(id){
  //   fetch(`http://localhost:3000/land/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(land => console.log(land))
  
  // }  

}


// Once the Page loads the function is run.Maybe dont use content loaded
 document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:3000/land")
  .then(res => res.json())
  .then(data => {
    data.forEach(land => { showLands(land)
    });

    })
  }
)


// Get the form element
const form = document.getElementById('landForm')

// post
form.addEventListener('submit', postData)

function postData(e){
    
  
  let userObject = {
      id: e.target.idInput.value,
      title: e.target.title.value,
      location: e.target.location.value,
      price: e.target.price.value,
      poster: e.target.Image.value
  }
  
  pushToApi(userObject)

}
  
function pushToApi(userObject){
    fetch("http://localhost:3000/land", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
})

console.log(userObject)
console.log("Api uploded,Refresh page to see")

}

// function deleteJSON(id){
//   fetch(`http://localhost:3000/land/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(res => res.json())
//   .then(land => console.log(land))

// }

