import { updateDOM } from "./manipularDOM.js";

export async function idadeDoSite(value){
    const apiKey = "at_87eFkGPMRHBBRxlj88ip0pt88LiLR";
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${value}&outputFormat=JSON`;
  
    return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let dataDeCriacao = new Date(data.WhoisRecord.createdDate);
      let dataAtual = new Date();
      let diferencaDeDatas = dataAtual - dataDeCriacao
      let DiasNaInternet = Math.floor(diferencaDeDatas / (1000 * 60 * 60 * 24));
  
      let mes = Math.floor(DiasNaInternet / 31)
      let ano = Math.floor(mes / 12)
      if(dataDeCriacao == 'Invalid Date'){
        updateDOM("dias", "Data de criação não fornecida!", "red");

      }
      if(mes < 12 || ano == 1){
        updateDOM("dias", `aproximadamente ${mes} meses na internet`, "red");
      }
      if(ano >= 2){
        updateDOM("dias", `mais de ${ano} anos na internet`, "green");
      }

    })
    .catch(err => {
        updateDOM("dias", "data de criação indisponível! Tente novamente.", "red");
        console.error(err)});
  }