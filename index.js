const container = document.getElementById("container");
const formBusquedaGif = document.getElementById ("form-busqueda-gif")
const API_KEY = "766uz6yWVGCfNJT8GXBCq9q7N4q96tms";
const inputBuscador = document.getElementById ("input-buscador");
const buscador = document.getElementById ("buscador");
let valueInputBusqueda = "";
const giftBuscado = document.getElementById("gif-buscado");
const linkGatitos = document.querySelector(".link-gatitos");
const linkPerritos = document.querySelector(".link-perritos");
const linkSpiderMan = document.querySelector(".link-spiderman");
const linkAvengers = document.querySelector(".link-avengers");
const linkAmor = document.querySelector(".link-amor");
const cardGatitos= document.querySelector(".card-gatitos");
const cardPerritos = document.querySelector(".card- perritos");
const cardSpiderMan = document.querySelector(".card-spiderman");
const cardAvengers = document.querySelector(".card-avengers");
const cardAmor = document.querySelector(".card-amor");



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

//Sección Busquedas populares
/* 
cardGatitos.style.display = "none";
cardPerritos.style.display = "none";
cardSpiderMan.style.display = "none";
cardAvengers.style.display = "none";
cardAmor.style.display = "none";
 */
//Sección gatitos

const ferchAGatitos = () =>{
  fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=gatos`)
  .then((res) => res.json())
  .then((data) => {
  console.log (data)
  
  linkGatitos.innerHTML = gatitosAHtml (data.data)
})
}
const gatitosAHtml = (data) =>{
  
  const reduceADataGatitos = data.reduce ((acc,curr) =>{ 

    return acc + `
    <article class="card-gatitos">
    <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
    </article>
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
    })


  //Secciòn perritos

 /*  const ferchAPerritos = () =>{
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=perros`)
    .then((res) => res.json())
    .then((data) => {
    console.log (data)
    
    linkPerritos.innerHTML = perritosAHtml (data.data)
  })
  }
  const perritosAHtml = (data) =>{
    
    const reduceADataPerritos = data.reduce ((acc,curr) =>{ 
  
      return acc + `
      <article class="card-perritos">
      <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
      </article>
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
      })

    //Secciòn Spider Man

    const ferchASpiderMan = () =>{
      fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=spiderman`)
      .then((res) => res.json())
      .then((data) => {
      console.log (data)
      
      linkSpiderMan.innerHTML = SpiderManAHtml (data.data)
    })
    }
    const SpiderManAHtml = (data) =>{
      
      const reduceADataASpiderMan = data.reduce ((acc,curr) =>{ 
    
        return acc + `
        <article class="card-spiderman">
        <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
        </article>
        `
      },"")
        return reduceADataASpiderMan;
      }
    
      linkSpiderMan.addEventListener ('click', ()=>{
          cardGatitos.style.display = "none";
          cardPerritos.style.display = "none";
          cardSpiderMan.style.display = "flex";
          cardAvengers.style.display = "none";
          cardAmor.style.display = "none";
        })
      
    

  //Secciòn Avengers

  const ferchAAvengers = () =>{
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=avengers`)
    .then((res) => res.json())
    .then((data) => {
    console.log (data)
    
    linkAvengers.innerHTML = avengersAHtml (data.data)
  })
  }
  const AvengersAHtml = (data) =>{
    
    const reduceADataAvengers = data.reduce ((acc,curr) =>{ 
  
      return acc + `
      <article class="card-avengers">
      <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
      </article>
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
      })
    
  

  //Secciòn Amor

  const ferchAAmor = () =>{
    fetch (`https://api.giphy.com/v1/gifs/search?api_key=766uz6yWVGCfNJT8GXBCq9q7N4q96tms&q=gatos`)
    .then((res) => res.json())
    .then((data) => {
    console.log (data)
    
    linkAmor.innerHTML = amorAHtml (data.data)
  })
  }
  const amorAHtml = (data) =>{
    
    const reduceADataAmor = data.reduce ((acc,curr) =>{ 
  
      return acc + `
      <article class="card-amor">
      <img class="img-gift" src="${curr.images.fixed_height.url}" alt="Resultado de la busqueda">
      </article>
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
      })
    
  




 */

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