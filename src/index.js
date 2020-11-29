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
        console.log(data)
        // create card div
        let div = document.createElememt('div')
        div.classList.add('card')
        div.innerHTML = `
            <h2> data.name </h2>
        `

            // h2

            // img:src

            // p

            // button, class like-btn

        // add div to toyCollection

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
