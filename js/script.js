let databasetomake =[
    {work: 'concluir este projeto'},
    {work: 'tocar violão'},
    {work: 'ler'},
    {work: 'comprar fogos p impeachment de bolsonaro'},
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
    <button onclick="remove_()" value="${work}">${work}</button>
    `;
    document.getElementById('done').appendChild(item);
}

const print = () => {
    for(var item in databasetomake){
        console.log(databasetomake[item]);
    }
}





//remove 
const remove = (array, object) => {
    console.log(object);
    console.log("iniciando função remove");
    
    array.splice(array.indexOf(object), 1);
    render();

    
}

const remove_ = (event) =>{
    const workselected = event.target;
    const workvalueselected = event.target.value || event.srcElement;
    const value_ = workvalueselected;
    remove(databasedone, value_);
}

const addmaking = (array, object) => {
    array.push({'work': object});
    remove(databasetomake, object);
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
            addmaking(databasemaking, value_);
            
            
             
        });
    });

}



const adddone = (array, object) =>{
    array.push({'work': object});
    remove(databasemaking, object);
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
            adddone(databasedone, value_);
            
        
            
        });
    });

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


const insertwork_ = (evento) => {
    const inpt = document.querySelector('#newwork');
    const text =inpt.value;
    databasetomake.push({'work': text});
    render();
    inpt.value='';
}



document.getElementById('newwork').addEventListener('keypress', insertwork);






render();