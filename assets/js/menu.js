////Código bem mais Lógico e semântico.
(function menuToggle() {
  let show = true;

  const btn = document.querySelector(".ri-menu-line");
  const nav = document.querySelector("#menu");

  function menu() {
    document.body.style.overflow = show ? "hidden" : "initial"; // O meu overflow é igual a hidden? se sim : se não

    document.querySelector(".container").classList.toggle("show-menu");
    document.querySelector("#nav").classList.toggle("active");
    show = !show;
  }

  function linkScrool() {
    document.querySelector("#nav").classList.remove("active");
    document.querySelector(".container").classList.toggle("show-menu");
    document.body.style.overflow = "initial";
  }

  btn.addEventListener("click", () => {
    menu();
  });
  nav.addEventListener("click", () => {
    linkScrool();
  });
})();

//Código que tambem funciona, más nesse codigo eu preciso usar o toogle e criar uma classe no css.

/*const btn = document.querySelector('.ri-menu-line');

btn.addEventListener('click', () => {
    document.body.classList.toggle('overflow')

    document.querySelector('.container').classList.toggle('show-menu');
    document.querySelector('#nav').classList.toggle('active')
    show = !show
});*/
