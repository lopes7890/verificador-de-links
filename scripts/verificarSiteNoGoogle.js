import { updateDOM } from "./manipularDOM.js";

export async function verificaSiteNoGoogle(siteUrl) {
    const apiKey = config.google;
    const cx = '15763c71d10744c08';
    const query = `site:${siteUrl}`;
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    return fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response)

      if (response.items && response.items.length > 0) {
        updateDOM("pesquisa", "O site aparece nos resultados do Google.", "green")
  
      } else if(response.items == null && response.error == null) {
        updateDOM("pesquisa", "O site não aparece nos resultados do Google.", "red")

      } else {
        updateDOM("pesquisa", "Não foi possível verificar se o site aparece no Google! Tente novamente", "red")
      }

    })
}