import { updateDOM } from "./manipularDOM.js";

export async function verificaSiteNoGoogle(siteUrl) {
  let site = new URL(siteUrl);
  const apiKey = "AIzaSyDDjWhmONdQnz2QtmotMpwSsvsdKCVkT6g";
  const cx = '15763c71d10744c08';
  const query = site.hostname;
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    
  async function verifica(res) {
    let listaHosts = []
    let cont = 0
    for (let i = 0; i < res.items.length; i++) {
      let host = new URL(res.items[i].link)
      listaHosts.push(host.hostname);
      if (res.items[i].link.includes(siteUrl)) {
        return true;
      }
    }

    for(let n = 0; n < listaHosts.length; n++){
        if(listaHosts[n] == query){
          cont++
          console.log(cont)
          if(cont > 1){
            return true
          }
        }
    }
    
    return false;
  }
    
  try {
    const response = await fetch(url);
    const data = await response.json();
    const found = await verifica(data);
    
      if (found) {
        updateDOM("pesquisa", "O site aparece nos resultados do Google.", "green");
      } else {
        updateDOM("pesquisa", "O site não aparece nos resultados do Google.", "red");
      }
  } catch (err) {
      updateDOM("pesquisa", "Não foi possível verificar se o site aparece no Google! Tente novamente", "red");
  }
}
    