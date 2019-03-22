'use strict'

window.addEventListener('load',() =>{

        var asdf = [{
                "completed":false,
                "id":1,
                "title":"Delectus aut autem",
                },
                {
                "completed":false,
                "id":2,
                "title":"Quis ut nam facilis et officia qui",
                },
                {
                "completed":false,
                "id":3,
                "title":"Fugiat veniam minus",
                },
                {
                "completed":true,
                "id":4,
                "title":"Et porro tempora",
                },
                {
                "completed":false,
                "id":5,
                "title":"Laboriosam mollitia et enim quasi adipisci quia provident illum",
                },
                {
                "completed":false,
                "id":6,
                "title":"Qui ullam ratione quibusdam voluptatem quia omnis",
                },
                {
                "completed":false,
                "id":7,
                "title":"Illo expedita consequatur quia in",
                "userId":1
                },
                {
                "completed":true,
                "id":8,
                "title":"Quo adipisci enim quam ut ab",
                },
                {
                "completed":false,
                "id":9,
                "title":"Molestiae perspiciatis ipsa",
                },
                {
                "completed":true,
                "id":10,
                "title":"Illo est ratione doloremque quia maiores aut",
                }];
        var done = document.getElementById('done');
        var todo = document.getElementById('todo');

        function completeTask(asdf) {
                for (let i = 0; i < asdf.length; i++) {
                        const element = asdf[i].completed;
                        if (element) {
                                var li  = document.createElement('li');
                                var nodo = document.createTextNode(asdf[i].title);
                                li.appendChild(nodo);
                                done.appendChild(li);
                                
                        }

                        else {
                                var li  = document.createElement('li');
                                var button = document.createElement('button');
                                var nodo = document.createTextNode(asdf[i].title);
                                var nodeButton = document.createTextNode('completado');
                                li.appendChild(nodo);
                                todo.appendChild(li).id = asdf[i].id;
                                button.appendChild(nodeButton);
                                todo.appendChild(button).value = asdf[i].id; 
                               
                                        
                                }

                                
                        }
                         
                        var buttons = document.getElementsByTagName('button');
                        for (let j = 0; j < buttons.length; j++) {
                                buttons[j].addEventListener('click',() =>{
                                       
                                       asdf[parseInt(buttons[j].value)].completed = true;
                                       var elemento =  document.getElementById(buttons[j].value);
                                       done.appendChild(elemento);
                                       buttons[j].style.display = 'none';

                                });
                                
                        }

                           
                }
        
                completeTask(asdf);
                
});