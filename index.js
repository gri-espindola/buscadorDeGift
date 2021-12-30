const container = document.getElementById("container");
const formBusquedaGift = document.getElementById ("form-busqueda-gift")
const API_KEY = "766uz6yWVGCfNJT8GXBCq9q7N4q96tms";
const inputBuscador = document.getElementById ("input-buscador");
const buscador = document.getElementById ("buscador");



 fetch (`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=gift`)
   .then((res) => res.json())
   .then((data) => {
     console.log (data)
    crearTarjetasGift (data.data) 
})

const crearTarjetasGift = (data) =>{
  const gift = document.getElementById("gift")
  const htmlGift = data.reduce ((acc,curr,index) =>{  
    return acc + `
  <article class="gift-card">
  <h2>${data[index].title}</h2>
  <img src="${data[index].images.fixed_height.url}" alt="gift">
  </article>
  `
  },"")

  gift.innerHTML = htmlGift
}


