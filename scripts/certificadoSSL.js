import { updateDOM } from "./manipularDOM.js";

export async function certificadoSSL(url){
    
    try{
      let urlProtocol = new URL(url)
      if(urlProtocol.protocol === 'https:'){
        updateDOM("ssl", "O site possui certificado SSL", "green");
      } else {
        updateDOM("ssl", "O site não possui certificado SSL", "red");
      }
    } catch (e){
        updateDOM("ssl", "URL inválida", "red");
        console.error('Erro ao processar a URL:', e);
    }

  }