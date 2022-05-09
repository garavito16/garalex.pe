
function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}

let imagenes_maximizar = document.getElementsByClassName('img_maximizar');

Array.prototype.forEach.call(imagenes_maximizar,function(el){
    el.onmouseover = function(){
        scale(this,1.2);
    };
    el.onmouseleave = function(){
        scale(this,1);
    };
});

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj = animacion.getBoundingClientRect().top;

    let animacion2 = document.getElementById('animado2');
    let posicionObj2 = animacion2.getBoundingClientRect().top;

    let animacion3 = document.getElementById('animado3');
    let posicionObj3 = animacion3.getBoundingClientRect().top;

    let animacion4 = document.getElementById('animado4');
    let posicionObj4 = animacion4.getBoundingClientRect().top;

    let animacion5 = document.getElementById('animado5');
    let posicionObj5 = animacion5.getBoundingClientRect().top;

    let animacion6 = document.getElementById('animado6');
    let posicionObj6 = animacion6.getBoundingClientRect().top;

    let animacion7 = document.getElementById('animado7');
    let posicionObj7 = animacion7.getBoundingClientRect().top;

    let animacion8 = document.getElementById('animado8');
    let posicionObj8 = animacion8.getBoundingClientRect().top;
    
    let animacion9 = document.getElementById('animado9');
    let posicionObj9 = animacion9.getBoundingClientRect().top;

    let animacion10 = document.getElementById('animado10');
    let posicionObj10 = animacion10.getBoundingClientRect().top;
    
    let animacion11 = document.getElementById('animado11');
    let posicionObj11 = animacion11.getBoundingClientRect().top;

    let animacion12 = document.getElementById('animado12');
    let posicionObj12 = animacion12.getBoundingClientRect().top;

    let animacion13 = document.getElementById('animado13');
    let posicionObj13 = animacion13.getBoundingClientRect().top;

    let animacion14 = document.getElementById('animado14');
    let posicionObj14 = animacion14.getBoundingClientRect().top;

    let animacion15 = document.getElementById('animado15');
    let posicionObj15 = animacion15.getBoundingClientRect().top;

    let animacion16 = document.getElementById('animado16');
    let posicionObj16 = animacion16.getBoundingClientRect().top;

    let animacion17 = document.getElementById('animado17');
    let posicionObj17 = animacion17.getBoundingClientRect().top;

    let animacion18 = document.getElementById('animado18');
    let posicionObj18 = animacion18.getBoundingClientRect().top;

    let animacion19 = document.getElementById('animado19');
    let posicionObj19 = animacion19.getBoundingClientRect().top;

    let animacion20 = document.getElementById('animado20');
    let posicionObj20 = animacion20.getBoundingClientRect().top;

    let animacion21 = document.getElementById('animado21');
    let posicionObj21 = animacion21.getBoundingClientRect().top;

    let animacion22 = document.getElementById('animado22');
    let posicionObj22 = animacion22.getBoundingClientRect().top;

    let tamañoDePantalla = window.innerHeight;

    if(posicionObj < tamañoDePantalla) {
        animacion.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj2 < tamañoDePantalla) {
        animacion2.style.animation = 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both';
    }

    if(posicionObj3 < tamañoDePantalla) {
        animacion3.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both';
    }

    if(posicionObj4 < tamañoDePantalla) {
        animacion4.style.animation = 'slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both';
    }

    if(posicionObj5 < tamañoDePantalla) {
        animacion5.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both';
    }

    if(posicionObj6 < tamañoDePantalla) {
        animacion6.style.animation = 'slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both';
    }

    if(posicionObj7 < tamañoDePantalla) {
        animacion7.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj8 < tamañoDePantalla) {
        animacion8.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj9 < tamañoDePantalla) {
        animacion9.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj10 < tamañoDePantalla) {
        animacion10.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj11 < tamañoDePantalla) {
        animacion11.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }
    
    if(posicionObj12 < tamañoDePantalla) {
        animacion12.style.animation = 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj13 < tamañoDePantalla) {
        animacion13.style.animation = 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj14 < tamañoDePantalla) {
        animacion14.style.animation = 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj15 < tamañoDePantalla) {
        animacion15.style.animation = 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj16 < tamañoDePantalla) {
        animacion16.style.animation = 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    if(posicionObj17 < tamañoDePantalla) {
        animacion17.style.animation = 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both, fadein2 2s';
    }

    /** Movimientos de contactame */
    if(posicionObj18 < tamañoDePantalla) {
        animacion18.style.animation = 'fadein 4s';
    }

    if(posicionObj19 < tamañoDePantalla) {
        animacion19.style.animation = 'fadein 4s';
    }

    if(posicionObj20 < tamañoDePantalla) {
        animacion20.style.animation = 'fadein 4s';
    }

    if(posicionObj21 < tamañoDePantalla) {
        animacion21.style.animation = 'fadein 4s';
    }

    if(posicionObj22 < tamañoDePantalla) {
        animacion22.style.animation = 'fadein 4s';
    }


})