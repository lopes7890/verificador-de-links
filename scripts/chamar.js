async function chamar(){
  let valor = document.getElementById("valor").value
  localStorage.setItem('valor', valor)
  window.location.href = 'https://lopes7890.github.io/tcc-etec-ds/resultado.html'
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}


