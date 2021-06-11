$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let vol = document.querySelector(".fa-volume-up")
vol.addEventListener("click", function(){
    if(this.classList.contains("fa-volume-up")){
        this.classList.remove("fa-volume-up")
        this.classList.add("fa-volume-mute")
    } else {
        this.classList.add("fa-volume-up")
        this.classList.remove("fa-volume-mute")
    }
})

let pesquisa = document.querySelector(".fa-search")
pesquisa.addEventListener("click", function(){
        this.innerHTML = "<input type='text' placeholder='Títulos, gente e Genêros' class='pesquisar'>"
})