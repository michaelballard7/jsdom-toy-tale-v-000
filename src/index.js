let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  // select the toy collection
  let toyCollection = document.querySelector('#toy-collection')

  // select the toy form
  let toyForm = document.querySelector('.add-toy-form')

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // fetch all toys index and display
    let url = 'http://localhost:3000/toys'

    fetch(url)
    .then(res => res.json())
    .then( data => {

        data.forEach( toy => {
            // create card div
            let div = document.createElement('div')
            div.classList.add('card')
            // img:src
            // p
            // button, class like-btn
            div.innerHTML = `
                <h2> ${toy.name} </h2>
                <img src = ${toy.image} class="toy-avatar"> </img>
                <p> ${toy.likes} Likes </p>
                <button class='like-btn'> Like </button>
            `
            // add div to toyCollection
            toyCollection.insertAdjacentElement('beforeend',div)
        })

    })


 // onSubmit of toy container  POST to url
 toyForm.addEventListener('submit', async (e) => {

    console.log(e.target.name.value)
    console.log(e.target.image.value);

     e.preventDefault()

     let url = 'http://localhost:3000/toys'

     // headers as Content-Type: application/json, Accept: application/json
     // send new toy as payload (name, imgUrl, likes:0)
     let post = await fetch(url, {
         headers: {
             method:'PATCH',
             "Content-Type":"application/json",
             "Accept": "application/json"
         },
         body: JSON.stringify({
             "name": e.target.name.value,
             "image": e.target.image.value,
             "likes":0
         })
     })
     .then( res => res.json())
     .then( data => console.log(data))
     .catch( err => console.log(err))

 })

// onClick of likeBtn
    // increment toy like count

    // send patch request to update likes
        // set headers
        // set body as incrementer


});
