const container = document.getElementById("container");
const formBusquedaGif = document.getElementById ("form-busqueda-gif")
const API_KEY = "766uz6yWVGCfNJT8GXBCq9q7N4q96tms";
const inputBuscador = document.getElementById ("input-buscador");
const buscador = document.getElementById ("buscador");
let valueInputBusqueda = "";
const giftBuscado = document.getElementById("gif-buscado");
const seccionGatitos = document.getElementById("seccion-gatitos");
 


//BUSCADOR

const buscarGif = () =>{
  fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=${valueInputBusqueda}`)
  .then((res) => res.json())
  .then((data) => {
  giftBuscado.innerHTML = gifAHtml (data.data)
})
}
 
 const gifAHtml = (data) =>{
  
  const reduceAData = data.reduce ((acc,curr) =>{ 

    return acc + `
    <article class="gift-card">
    <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
    </article>
    `
  },"")
    return reduceAData;
  }

formBusquedaGif.onsubmit = (e) =>{
  e.preventDefault()
  valueInputBusqueda = inputBuscador.value; 
  buscarGif();
} 

//Sección gatitos

const ferchAGatitos = () =>{
  fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=gatos`)
  .then((res) => res.json())
  .then((data) => {
  console.log (data)
  
  seccionGatitos.innerHTML = gatitosAHtml (data.data)
})
}
const gatitosAHtml = (data) =>{
  
  const reduceADataGatitos = data.reduce ((acc,curr) =>{ 

    return acc + `
    <article class="gift-card">
    <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
    </article>
    `
  },"")
    return reduceADataGatitos;
  }

  const llamandoSeccionGatitos = () =>{
    seccionGatitos.addEventListener ('click' = ()=>{
      seccionPerrito
    })
  }









/*  fetch (`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=gift`)
   .then((res) => res.json())
   .then((data) => {
     console.log (data)
    crearTarjetasGift (data.data) 
})

const crearTarjetasGif = (data) =>{
  const gift = document.getElementById("gift")
  const htmlGift = data.reduce ((acc,curr,index) =>{  
    return acc + `
  <article class="gift-card">
  <img class="img-gift" src="${data[index].images.fixed_height.url}" alt="gift">
  </article>
  `
  },"")

  gift.innerHTML = htmlGift
} */