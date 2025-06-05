//Busca um elemento no HTML e slava em uma variavel
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

//Função que vai abrir e fechar o menu
function abreFechaMenu(){

    //Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        //Abrir menu
        menu.classList.remove("menu-fechado")


        //mostra icone X
        iconeX.style.display = "inline"

        //Esconder icone Barras
        iconeBarras.style.display = "none"
    }
    //Senão
    else {
        //fechar o menu
        menu.classList.add("menu-fechado")

        //esconder icone x
        iconeX.style.display = "none"

        //mostrar icone barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-Fechado")

    //mostrar icone X
    iconeX.style.display = "inline"

    iconeBarras.style.display = "none"
}