
function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}

// document.getElementById('boton').onmouseover = function(){
//     scale(this,1.5);
// };

// document.getElementById('boton').onmouseleave = function(){
//     scale(this,1);
// };

let imagenes_maximizar = document.getElementsByClassName('img_maximizar');

Array.prototype.forEach.call(imagenes_maximizar,function(el){
    el.onmouseover = function(){
        scale(this,1.2);
    };
    el.onmouseleave = function(){
        scale(this,1);
    };
});

// document.getElementById('boton').onclick = function() {
//     document.getElementById('perfil').style.top = 0;
// }