function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  console.log(textoArray)
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}

function timeContent(){
  setTimeout(() => {
    typeWriter(document.querySelector(".my-name"));
  }, 1000);
  
  setTimeout(() => {
    typeWriter(document.querySelector(".pTitle"));
  }, 2300);
}

const titulo = document.querySelector(".first-title");
typeWriter(document.querySelector(".first-title"));
timeContent()




