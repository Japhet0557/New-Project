import data from './data.json' assert {type: 'json'};

let context = {};
let jobs = [];

for (let i = 0; i < data.length; i++) {
    jobs.push(data[i]);
}

context["jobs"] = jobs;

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById("information").innerHTML = compiledHtml;



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

