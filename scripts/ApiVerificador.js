import { updateDOM } from "./manipularDOM.js";

export async function postApiVerificador(value){
    const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-apikey': "8def2e8351060e78aa516cf5938280ff4a01ce1739195ec64ee138bf00199d31",
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({url: value})
  };
  

  return fetch('https://www.virustotal.com/api/v3/urls', options)
    .then(response => response.json())
    .then(async response => {

      const options1 = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-apikey': '8def2e8351060e78aa516cf5938280ff4a01ce1739195ec64ee138bf00199d31'
        }
    
      };
      const response1 = await fetch(response.data.links.self, options1)
      const response1_1 = await response1.json()

        console.log(response1_1)


        if (response1_1.data.attributes.stats.malicious == 0) {
            updateDOM("malicious", "malicioso: "+response1_1.data.attributes.stats.malicious, "green")
        } else {
            updateDOM("malicious", "malicioso: "+response1_1.data.attributes.stats.malicious, "red")
        }

        if (response1_1.data.attributes.stats.suspicious == 0) {
            updateDOM("suspeito", "suspeito: "+response1_1.data.attributes.stats.suspicious, "green")
        } else {
            updateDOM("suspeito", "suspeito: "+response1_1.data.attributes.stats.suspicious, "red")
        } 
    })
    .catch(err => {
        updateDOM("malicious", "malisioso: ERROR'", "red")
        updateDOM("suspeito", "suspeito: ERROR'", "red")
        console.error(err)});
  }