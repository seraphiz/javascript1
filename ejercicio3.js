'use strict'
window.addEventListener('load', () =>{
var dias = [
       'lunes', 
       'martes',
       'miercoles', 
       'jueves', 
       'viernes',
]


var parent_tag = document.getElementById("dias");
dias.map(function(dia){
       var doc_element  = document.createElement('li');
       var node = document.createTextNode(dia);
       doc_element.appendChild(node);
       parent_tag.appendChild(doc_element);

        });
});

