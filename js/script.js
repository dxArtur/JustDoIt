let databasetomake =[
    {work: 'concluir este projeto'},
    {work: 'tocar violão'},
    {work: 'ler'},
];

let databasemaking =[
    {'work': 'projeto js'},
    {'work': 'é isso'},
];

let databasedone = [
    {'work': 'oi'},
];


// function for cleaning

const cleanwork = () => {
    const tomake = document.getElementById('tomake');
    while(tomake.lastChild.id !='stop'){
        tomake.removeChild(tomake.lastChild);
    }
    const making = document.getElementById('making');
    while(making.lastChild.id != 'stop'){
        making.removeChild(making.lastChild);
    }
    const done = document.getElementById('done');
    while(done.lastChild.id !='stop'){
        done.removeChild(done.lastChild);
    }
}

// refresh the column

const render = () => {
    cleanwork();
    databasetomake.forEach (item => tomakework(item.work));
    databasemaking.forEach (item => makingwork(item.work));
    databasedone.forEach (item => donework(item.work));
}


// column tomake refresh and add work

const tomakework = (work) => {
    const item = document.createElement('a');
    item.classList.add('work');
    item.innerHTML = `
    <button onclick="movemaking()" value="${work}" >${work}</button>
    `;
    document.getElementById('tomake').appendChild(item);
    
}

const makingwork = (work) => {
    const item = document.createElement('a');
    item.classList.add('work');
    item.innerHTML = `
    <button onclick="movedone()" value="${work}">${work}</button>
    `;
    document.getElementById('making').appendChild(item);
}

const donework = (work) => {
    const item = document.createElement('a');
    item.classList.add('work');
    item.innerHTML = `
    <button onclick="remove()" value="${work}">${work}</button>
    `;
    document.getElementById('done').appendChild(item);
}

const print = () => {
    for(var item in databasetomake){
        console.log(databasetomake[item]);
    }
}

//remove 
const removetomake = (object) => {
    for(var item in databasetomake)  {
        if(databasetomake[item == object]){
            delete databasetomake[item];
            render();
            print();
        }
    }
}


const addmaking = (object) => {
    databasemaking.push({'work': object});
    console.log(databasemaking);
    render();
}

const movemaking = (work) => {
    console.log("iniciando função");
    document.querySelectorAll(".work").forEach(function(buton){
        buton.addEventListener("click", function(event){

            const workselected = event.target;
            const workvalueselected = event.target.value || event.srcElement;
            const value_ = workvalueselected;
            
            console.log("value", value_);
            console.log("selected", workselected );
            console.log("passou aqui");
            addmaking(value_);
            removetomake(value_);
            
             
        });
    });

}



const adddone = (object) =>{
    databasedone.push({'work': object});
    render();
}


const movedone = (work) =>{
    console.log("iniciando função");
    document.querySelectorAll(".work").forEach(function(buton){
        buton.addEventListener("click", function(event){

            const workselected = event.target;
            const workvalueselected = event.target.value || event.srcElement;
            const value_ = workvalueselected;
            
            console.log("value", value_);
            console.log("selected", workselected );
            console.log("passou aqui");
            adddone(value_);
            

            if(workselected.parentNode){
                workselected.parentNode.removeChild(workselected);
            }
            
        });
    });

}

const test = (databasetomake) =>{
    for (var property in databasetomake){
        console.log(property + " = " + obj[property]);
      }
}


const insertwork = (evento) => {
    const tecla = evento.key;
    const text = evento.target.value;
    if (tecla === 'Enter'){
        databasetomake.push({'work': text });
        render();
        evento.target.value='';
    }
}

/*
const insertwork = (evento) =>{
    const text = evento.target.value;
    databasetomake.push({'work': });
    render();
    
}
*/

document.getElementById('newwork').addEventListener('keypress', insertwork);






render();