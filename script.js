
function sayHello(){
    alert('hello!');
}

function sayBye(){
    alert('byee!');
}

var helloButton=document.getElementById('btn');
helloButton.addEventListener('click',sayHello);
helloButton.addEventListener('click',sayBye);



