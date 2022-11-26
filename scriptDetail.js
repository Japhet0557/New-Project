import data from './data.json' assert {type: 'json'};


let jobs = [];

for (let i = 0; i < data.length; i++) {
    jobs.push(data[i]);
}


let light = document.querySelectorAll("[id='switch']");
let dark = document.body;
let card = document.querySelectorAll("[id='job-card']");
let form = document.querySelectorAll("[id='form']");
let position = document.querySelectorAll("[id='position']");
let textcolor = document.querySelectorAll("[id='text']");
let inputform = document.querySelectorAll("[id='input-form']");
let btcolor = document.querySelectorAll("[id='bt-color']");
let bttext = document.querySelectorAll("[id='bt-text']");


for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "#ffffff";
}
for (let i = 0; i < form.length; i++) {
    form[i].style.backgroundColor = "white";
}
for (let i = 0; i < position.length; i++) {
    position[i].style.color = "black";
}
for (let i = 0; i < textcolor.length; i++) {
    textcolor[i].style.color = "grey";
}
for (let i = 0; i < btcolor.length; i++) {
    btcolor[i].style.backgroundColor = "#F4F6F8";
}
for (let i = 0; i < bttext.length; i++) {
    bttext[i].style.color = "#5964E0";
}


dark.style.backgroundColor = '#F2F2F2';



//let d = card.forEach(a => {
   // a.style.backgroundColor = "white";
   // });

for (let i = 0; i < light.length; i++) {
    light[i].addEventListener('click', () => {
        
        dark.classList.toggle('bg-dark');
            
        card.forEach(a => {
            a.classList.toggle('bg-secondary');
        });
        form.forEach(a => {
            a.classList.toggle('bg-secondary');
            a.classList.toggle('text-light');
        })
        inputform.forEach(a => {
            a.classList.toggle('bg-secondary');
            a.classList.toggle('text-light');
        })
        position.forEach(a => {
            a.classList.toggle('text-light');
        })
        textcolor.forEach(a => {
            a.classList.toggle('text-success');
        })
        btcolor.forEach(a => {
            a.classList.toggle('bg-success');
        })
        bttext.forEach(a => {
            a.classList.toggle('text-light');
        })
    })

}




const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);

let param1 = urlParams.get('id');
let param2 = urlParams.get('company');

console.log(param1);
console.log(param2);

let context2 = {};
let job2 = []; 


/**for (let i = 1; i < data.length; i++) {
    if (param1 === i) {
        job2.push(data[i]);
        //context2["jobs[i]"] = jobs[i];
     }
}*/

if (jobs[param1]) {
    job2.push(jobs[param1-1]);
}
context2["job2"] = job2;

const cardElement = document.getElementById("cardHB");
const cardSource = cardElement.innerHTML;
const cardTemplate = Handlebars.compile(cardSource);
const cardCompiledHtml = cardTemplate(context2);
document.getElementById("card").innerHTML = cardCompiledHtml;


const detailElement = document.getElementById("detailHB");
const detailSource = detailElement.innerHTML;
const detailTemplate = Handlebars.compile(detailSource);
const detailCompiledHtml = detailTemplate(context2);
document.getElementById("detail").innerHTML = detailCompiledHtml;

const footerElement = document.getElementById("footerHB");
const footerSource = footerElement.innerHTML;
const footerTemplate = Handlebars.compile(footerSource);
const footerCompileHtml = footerTemplate(context2);
document.getElementById("footer").innerHTML = footerCompileHtml;

console.log(context2);
console.log(jobs);

//console.log(window.location.search);