



function changeFont(event){
    event.target.style.fontFamily = 'Times New Roman';
    event.target.style.backgroundColor = 'yellow';
    event.target.innerHTML = 'Thanks';
};

changeT.addEventListener("click",changeFont);