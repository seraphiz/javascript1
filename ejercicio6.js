window.addEventListener('load',() =>{
        var arr = [1,'dos','tres',4,5,6,'siete',8,9,'diez'];
        var pares = document.getElementById('par');
        var impares = document.getElementById('impar');
        var string  = document.getElementById('string')

        function sortlist(arr) {
                for (let i = 0; i < arr.length; i++) {
                        const element = arr[i];
                        console.log(typeof(element));
                        if (element %2 === 0) {
                                var li = document.createElement('li');
                                var node = document.createTextNode(element);
                                li.appendChild(node);
                                pares.appendChild(li);
                                
                        }
                        if  (element %2 !== 0 && typeof(element) !=  typeof('string') ) {
                                var li = document.createElement('li');
                                var node = document.createTextNode(element);
                                li.appendChild(node);
                                impares.appendChild(li);
                                
                        }
                        if (typeof(element) === typeof('string')) {
                                var li = document.createElement('li');
                                var node = document.createTextNode(element);
                                li.appendChild(node);
                                string.appendChild(li);
                                
                        }
                        
                        
                }                  
                
        }
        var button  = document.getElementById('clasificar');
        button.addEventListener('click',()=>{ 
             sortlist(arr);
                

        });
});