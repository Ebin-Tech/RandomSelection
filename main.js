
let btn = document.querySelector('#Btn');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
let confettis = document.querySelector('#my-canvas');

btn.addEventListener('click', add);
function add() {
    const students =["Ebin","Neethu","Nidhi","Ashna","Nivya","Sreelakshmi","Sonu","Sonia","Athulya","Soorya","Athira","Roopak","sofy","Ronald","Robin","Rebin",];
    var random =Math.floor(16*Math.random());
    popup.classList.add('active');
    document.getElementById("demo").innerHTML = students[random] ;
}
close.addEventListener('click', remove);
function remove() {
    popup.classList.remove('active');
}








