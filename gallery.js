



function changeFont(event){
    event.target.style.fontFamily = 'Times New Roman';
    event.target.style.backgroundColor = 'yellow';
    event.target.styinnerHTML = 'Thanks';
};

changeT.addEventListener("click",changeFont);