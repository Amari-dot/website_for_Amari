
const changeT = document.getElementById('changeT');


function changeFont(event){
    event.target.style.fontFamily = 'Arial';
    event.target.style.backgroundColor = 'yellow';
};

changeT.addEventListener("click",changeFont);