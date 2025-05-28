let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let adicionarCarrinhoColor = document.querySelector(".adicionarCarrinho") 

function mudarVisual(cor, imagem){
    
    tenis.classList.add("troca-efeito")

    body.style.background = cor
    adicionarCarrinhoColor.style.background = cor

    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")

    }, 500)
        
    
    
}