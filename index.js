function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += "responsive";
        
    }else{
        x.className = "topnav";
    }
}

const changingT = document.getElementById('changeT');


function changeFont(event){
    console.log(event);
    event.target.style.fontFamily = 'italic';
};
changingT.addEventListener('click',changeFont);