const container = document.getElementById("container");
const formBusquedaGif = document.getElementById ("form-busqueda-gif")
const API_KEY = "766uz6yWVGCfNJT8GXBCq9q7N4q96tms";
const inputBuscador = document.getElementById ("input-buscador");
const buscador = document.getElementById ("buscador");
let valueInputBusqueda = "";
const gifBuscado = document.getElementById("gif-buscado");
const linkGatitos = document.querySelector(".link-gatitos");
const linkPerritos = document.querySelector(".link-perritos");
const linkSpiderMan = document.querySelector(".link-spiderman");
const linkAvengers = document.querySelector(".link-avengers");
const linkAmor = document.querySelector(".link-amor");
const cardGatitos= document.querySelector(".card-gatitos");
const cardPerritos = document.querySelector(".card-perritos");
const cardSpiderMan = document.querySelector(".card-spiderman");
const cardAvengers = document.querySelector(".card-avengers");
const cardAmor = document.querySelector(".card-amor");
const gifContador = document.getElementById("gif-contador");


//BUSCADOR

const buscarGif = () =>{
  fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=${valueInputBusqueda}`)
  .then((res) => res.json())
  .then((data) => {
  gifBuscado.innerHTML = gifAHtml (data.data)
  gifContador.innerHTML = contadorGifAHtml (data)
})
}
 
 const gifAHtml = (data) =>{
  
  const reduceAData = data.reduce ((acc,curr) =>{ 

    return acc + `
    <article class="gift-card">
    <i class="fas fa-heart" id="favoritos"></i>
    <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
    </article>
    `
  },"")
    return reduceAData;
  }

formBusquedaGif.onsubmit = (e) =>{
  e.preventDefault()
  cardGatitos.style.display = "none";
  cardPerritos.style.display = "none";
  cardSpiderMan.style.display = "none";
  cardAvengers.style.display = "none";
  cardAmor.style.display = "none";
  gifBuscado.style.display = "flex";
  valueInputBusqueda = inputBuscador.value; 
  buscarGif(valueInputBusqueda);

} 


// Contador

const contadorGifAHtml = (data) =>{

  return `<p class=" gif-count">Total de la búsqueda: ${data.pagination.total_count}</p>`;

}

//Sección Busquedas populares

cardGatitos.style.display = "none";
cardPerritos.style.display = "none";
cardSpiderMan.style.display = "none";
cardAvengers.style.display = "none";
cardAmor.style.display = "none";

//Sección gatitos

const ferchAGatitos = () =>{
  fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=gatos`)
  .then((res) => res.json())
  .then((data) => {
  console.log (data)
  
  cardGatitos.innerHTML = gatitosAHtml (data.data)
})
}
const gatitosAHtml = (data) =>{
  
  const reduceADataGatitos = data.reduce ((acc,curr) =>{ 

    return acc + `
    <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
    `
  },"")
    return reduceADataGatitos;
  }

  linkGatitos.addEventListener ('click', ()=>{
      cardGatitos.style.display = "flex";
      cardPerritos.style.display = "none";
      cardSpiderMan.style.display = "none";
      cardAvengers.style.display = "none";
      cardAmor.style.display = "none";
      gifBuscado.style.display = "none";
      gifContador.style.display = "none";
      ferchAGatitos();
    })


  //Secciòn perritos

   const ferchAPerritos = () =>{
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=perros`)
    .then((res) => res.json())
    .then((data) => {
    console.log (data)
    
    cardPerritos.innerHTML = perritosAHtml (data.data)
  })
  }
  const perritosAHtml = (data) =>{
    
    const reduceADataPerritos = data.reduce ((acc,curr) =>{ 
  
      return acc + `
  
      <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
      `
    },"")
      return reduceADataPerritos;
    }
  
    linkPerritos.addEventListener ('click', ()=>{
        cardGatitos.style.display = "none";
        cardPerritos.style.display = "flex";
        cardSpiderMan.style.display = "none";
        cardAvengers.style.display = "none";
        cardAmor.style.display = "none";
        gifBuscado.style.display = "none";
        gifContador.style.display = "none";
        ferchAPerritos();
      })

    //Secciòn Spider Man

    const ferchASpiderMan = () =>{
      fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=spiderman`)
      .then((res) => res.json())
      .then((data) => {
      console.log (data)
      
      cardSpiderMan.innerHTML = SpiderManAHtml (data.data)
    })
    }
    const SpiderManAHtml = (data) =>{
      
      const reduceADataASpiderMan = data.reduce ((acc,curr) =>{ 
    
        return acc + `
        <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
        `
      },"")
        return reduceADataASpiderMan;
      }
    
      linkSpiderMan.addEventListener ('click', ()=>{
          cardGatitos.style.display = "none";
          cardPerritos.style.display = "none";
          cardSpiderMan.style.display = "flex";
          cardAvengers.style.display = "none";
          cardAmor.style.display= "none";         
          gifBuscado.style.display = "none";
          gifContador.style.display = "none";
          ferchASpiderMan();
        })
      
    

  //Secciòn Avengers

  const ferchAAvengers = () =>{
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=avengers`)
    .then((res) => res.json())
    .then((data) => {
    console.log (data)
    
    cardAvengers.innerHTML = avengersAHtml (data.data)
  })
  }
  const avengersAHtml = (data) =>{
    
    const reduceADataAvengers = data.reduce ((acc,curr) =>{ 
  
      return acc + `
      <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
      `
    },"")
      return reduceADataAvengers;
    }
  
    linkAvengers.addEventListener ('click', ()=>{
        cardGatitos.style.display = "none";
        cardPerritos.style.display = "none";
        cardSpiderMan.style.display = "none";
        cardAvengers.style.display = "flex";
        cardAmor.style.display = "none";
        gifBuscado.style.display = "none";
        gifContador.style.display = "none";
        ferchAAvengers();
      })
    
  

  //Sección Amor

  const ferchAAmor = () =>{
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=love`)
    .then((res) => res.json())
    .then((data) => {
    console.log (data)
    
    cardAmor.innerHTML = amorAHtml (data.data)
  })
  }
  const amorAHtml = (data) =>{
    
    const reduceADataAmor = data.reduce ((acc,curr) =>{ 
  
      return acc + `
      <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
      `
    },"")
      return reduceADataAmor;
    }
  
    linkAmor.addEventListener ('click', ()=>{
        cardGatitos.style.display = "none";
        cardPerritos.style.display = "none";
        cardSpiderMan.style.display = "none";
        cardAvengers.style.display = "none";
        cardAmor.style.display = "flex";
        gifBuscado.style.display = "none";
        gifContador.style.display = "none";
        ferchAAmor();
      })
    
  






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