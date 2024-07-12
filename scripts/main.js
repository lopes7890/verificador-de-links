import { certificadoSSL } from "./certificadoSSL.js";
import { postApiVerificador } from "./ApiVerificador.js";
import { idadeDoSite} from "./idadeDoSite.js";
import { verificaSiteNoGoogle } from "./verificarSiteNoGoogle.js";
import { showLoading} from "./carrega.js";
import { hideLoading } from "./carrega.js";

function isValidoURL(url){
  try{
    return URL.canParse(url);
  } catch (e) {
    return false
  }
}

function exibirLink(url){

  const a = document.createElement("a");
  const h2 = document.createElement("h2");
  h2.classList.add("bebas-neue-regular", "w3-center", "link");

  a.appendChild(h2)

  a.target = "_blank"
  a.href = url

  if(url.length >= 50){
    h2.innerText = url.slice(0, 30) + '...'
  } else {
    h2.innerText = url
  }

  document.body.appendChild(a)

}


document.addEventListener("DOMContentLoaded", async function() {
    let valor = localStorage.getItem('valor');

    let vazio = document.getElementById("vazio");
    if (valor === "") {
        vazio.innerText = 'Preencha o campo de verificação!';
    } else if (!isValidoURL(valor)){
        vazio.innerText = 'URL inválida!'
    } else {
        exibirLink(valor)
        vazio.innerText = " ";
        showLoading();
        document.getElementById("botao").disabled = true

        try {
            await Promise.all([
                postApiVerificador(valor),
                idadeDoSite(valor),
                verificaSiteNoGoogle(valor),
                certificadoSSL(valor)
            ]);
        } catch (error) {
            console.error('Erro ao chamar APIs:', error);
        } finally {
            hideLoading();
        }
    }
});
