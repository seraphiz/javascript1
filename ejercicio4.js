'use strict'
window.addEventListener('load',() => {
        var timer_tag  = document.getElementById('timer');
        var timer = timer_tag.innerHTML;
        var title = document.getElementsByTagName('h1');
        title = title[(title.length -1)].innerHTML;
        console.log(title);
        timer = parseInt(timer);
      var intervalo = setInterval(function(){
                timer = timer - 1;
                timer_tag.innerHTML = timer;
                if (timer == 0) {
                        clearInterval(intervalo)
                        document.getElementsByTagName('h1')[0].innerHTML = 'boom!';
                        document.body.style.background = 'red';
                        timer_tag.innerHTML = '';
                        
                }

        },1000);
});