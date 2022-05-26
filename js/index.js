const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.main-menu');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    mainMenu.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
    });

    document.querySelectorAll('.nav').forEach((link)=>{
    link.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    logo.classList.remove('active');
    overlay.classList.remove('active');

});
});

let coaches=[
    {
        name:"Agasha Bornittah",
        title:"Senior software Engineer, CEO Empeiha Co. Ltd",
        profile:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
        photo:"./images/user1.png"

    },
    {
        name:"Brennah A",
        title:"Co founder Digital Emergency",
        profile:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
        photo:"./images/user1.png"

    },
    {
        name:"Grace N",
        title:"CEO Softtech",
        profile:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
        photo:"./images/user1.png"

    },
    {
        name:"Blair N",
        title:"Therapist, Incharge Kabwohe Referal Hosp.",
        profile:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
        photo:"./images/user1.png"

    }
];

let str='';
let arr=[];
for(let person of coaches){
    str=`<div class="card">
            <div class="card-header">
                <img src="./images/bg-5.jpg" alt="user" class="bg-image">
                <img src=${person.photo} alt="user" class="user-image">
            </div>
            <div class="card-body">
                <div  class="card-title">
                    <h4>${person.name}</h4>
                    <p class="orange">${person.title}</p>
                    <hr>
                </div>
                <div class="card-description">
                    <p>
                    ${person.profile}.
                    </p>
                </div>
            </div>
        </div>`;
        arr.push(str);
}
window.onload=()=>{
    document.querySelector('.coaches').innerHTML=arr.join(" ");
    if(screen.width <= 768){
        document.querySelector('.coaches').innerHTML=arr.slice(0,2);
        
    let moreBtn = document.querySelector('.more-btn');
    moreBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.coaches').innerHTML=arr.join("");
    document.querySelector('.more').style.display='none';
    document.querySelector('.less').style.display='block';
});
    }
}







