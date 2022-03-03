// nunca usas esta variable
const container = document.getElementById("container");
const formBusquedaGif = document.getElementById ("form-busqueda-gif")
// nunca usas esta variable. deberia ir al final de las variables del dom. 
const API_KEY = "766uz6yWVGCfNJT8GXBCq9q7N4q96tms";
const inputBuscador = document.getElementById ("input-buscador");
// nunca usas esta variable
const buscador = document.getElementById ("buscador");
// esta tendria que ir debajo de todas las variables del dom
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
    // ojo con el tabulado, el codigo siguiente deberia estar a la misma altura que mi comentario
  gifBuscado.innerHTML = gifAHtml (data.data)
  gifContador.innerHTML = contadorGifAHtml (data)
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
  cardGatitos.style.display = "none";
  cardPerritos.style.display = "none";
  cardSpiderMan.style.display = "none";
  cardAvengers.style.display = "none";
  cardAmor.style.display = "none";
  gifBuscado.style.display = "flex";
  valueInputBusqueda = inputBuscador.value; 
  // envias el parametro, pero la funcion buscarGif no lo esta recibiendo
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
// fetch, no ferch. estos errores son detalles cuando trabajas sola pero pueden confundir mucho a 
// tus compañeros de equipo
   const ferchAPerritos = () =>{
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=perros`)
    .then((res) => res.json())
    .then((data) => {
    
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
  // ojo con el tabulado!!
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
    
  

// Seria ideal que pudieramos hacer una sola funcion que se ocupe de todos los fetch recomendados, 
// No voy a dejartela escrita pero si darte algunas puntas para encararla, y te lo dejo como desafio
// Empezamos por los onclick, que van a llamar todos a la misma funcion: 
// linkGatitos.addEventListener('click', () => {
//   fetchRecomendados("gatos");
// })
// linkGatitos.addEventListener('click', () => {
//   fetchRecomendados("perros");
// })
// linkGatitos.addEventListener('click', () => {
//   fetchRecomendados("avengers");
// })
// linkGatitos.addEventListener('click', () => {
//   fetchRecomendados("spiderman");
// })
// linkGatitos.addEventListener('click', () => {
//   fetchRecomendados("love");
// })
// La funcion "fetchRecomendados" va a recibir ese parametro e interpolarlo en el fetch, despues de la "q="
// Despues de recibir la data y hacer el html, haces un if para decidir de acuerdo al parametro, que secciones mostrar. ç
