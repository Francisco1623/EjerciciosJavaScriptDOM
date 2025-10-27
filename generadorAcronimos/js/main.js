
import{addAcronym, listAcronymsRender} from "./acronym.js";
const listAcronym = document.getElementById('listAcronym');
const formPhrase = document.getElementById('formPhrase');

function addLi (phrase){
    //ELEMENTO
    
    const li = document.createElement('li');
    li.textContent=phrase;
    phrase.length>3?li.className='cambia':'';
    listAcronym.appendChild(li);
    
   
    
   
}

function renderList(){
    listAcronym.innerHTML='';
    listAcronymsRender.forEach(a=>{
        addLi(a);
        
    })
}

formPhrase.addEventListener('submit',function(event){
    event.preventDefault();
    const phrase = document.getElementById('phrase').value;
    if(phrase){
        addAcronym(phrase);
        formPhrase.reset();

    }

    renderList();
})

const buttonReset = document.createElement('button');
    buttonReset.textContent='Reset';
    formPhrase.appendChild(buttonReset);

    buttonReset.addEventListener('click',()=>{
        listAcronymsRender.length = 0;
        renderList();

    })



renderList();