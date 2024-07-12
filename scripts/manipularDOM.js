export async function updateDOM(id, text, color){
    let elemento = document.getElementById(id)
    elemento.style.color = color
    elemento.innerText = text
}