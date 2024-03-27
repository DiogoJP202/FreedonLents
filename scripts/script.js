window.onresize = () => location.reload();

let blocoPreto = document.querySelectorAll(".fundoPreto");
let sessaoAvaliacao = document.querySelectorAll(".avaliacao");

blocoPreto[0].style.height = getComputedStyle(sessaoAvaliacao[0]).height; // getComputedStyle captura todos os estilos de um elemento.
blocoPreto[1].style.height = getComputedStyle(sessaoAvaliacao[1]).height;

