export function reclameAqui(url){
    const a = document.createElement("a");
    const h2 = document.createElement("h2");
    const h2Titulo = document.createElement("h2");
    h2Titulo.classList.add("bebas-neue-regular", "w3-container", "w3-panel", "w3-center", "w3-animate-zoom");
    h2.classList.add("bebas-neue-regular", "w3-container", "w3-center", "w3-green", "w3-animate-zoom");
  
    a.appendChild(h2)
  
    a.target = "_blank"
    a.href = 'https://www.reclameaqui.com.br/busca/?q=' + url
  
    h2Titulo.innerText = 'Veja o site no ReclameAqui:'
  
    let texto = a.href
    if(texto.length >= 40){
      h2.innerText = texto.slice(0, 40) + '...'
    } else {
      h2.innerText = texto
    }
  
    document.body.appendChild(h2Titulo)
    document.body.appendChild(a)
  }