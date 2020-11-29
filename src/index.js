let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  // select the toy collection
  let toyCollection = document.querySelector('#toy-collection')

  // select like counter:


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

    fetch(url,{
        method:'GET',
        ContentType:'application/json'
    })
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
    // headers as Content-Type: application/json, Accept: application/json
    // send new toy as payload (name: imgUrl)



// onClick of likeBtn
    // increment toy like count

    // send patch request to update likes
        // set headers
        // set body as incrementer


});
