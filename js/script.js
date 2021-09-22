let databasetomake =[
    {'work': 'concluir este projeto'},
    {'work': 'tocar violão'},
    {'work': 'ler'},
];

let databasemaking =[
    {'work': 'projeto js'},
    {'work': 'é isso'},
];

let databasefineshed = [

];


const cleanwork = () => {
    const tomake = document.getElementById('tomake');
    while(tomake.lastChild.id !='stop'){
        tomake.removeChild(tomake.lastChild);
    }
    const making = document.getElementById('making');
    while(making.lastChild.id != 'stop'){
        making.removeChild(making.lastChild);
    }
}


const render = () => {
    cleanwork();
    databasetomake.forEach (item => tomakework(item.work));
    databasemaking.forEach (item => makingwork(item.work));
    databasefineshed.forEach (item => creatework(item.work));
}



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
    <button onclick="fineshed()" value="${work}">${work}</button>
    `;
    document.getElementById('making').appendChild(item);
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
            makingwork(value_);

            if(workselected.parentNode){
                workselected.parentNode.removeChild(workselected);
            }
            
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


document.getElementById('newwork').addEventListener('keypress', insertwork);






render();