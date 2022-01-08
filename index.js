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
  <img class="img-gift" src="${data[index].images.fixed_height.url}" alt="gift">
  </article>
  `
  },"")

  gift.innerHTML = htmlGift
}

//LLAMAR AL BOTON BUSCAR PARA DAR ESTA ACCION

const buscador = document.querySelector("#buscador");

buscador.addEventListener("click", (e) =>{
//a desarrollar idea

  return buscarGift
})

fetch (`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=`)
.then((res) => res.json())
.then((data) => {
  console.log (data)
 buscarGift (data.data) 
})

const buscarGift = (data) =>{
  const giftBuscado = document.getElementById("gift-buscado")
  const GiftEncontrado = data.reduce ((acc,curr,index) =>{  
    return acc + `
  <article class="gift-card">
  <img class="img-gift" src="${data[index].images.fixed_height.url}" alt="Resultado de la busqueda">
  </article>
  `
  },"")

  giftBuscado.innerHTML = GiftEncontrado
}

