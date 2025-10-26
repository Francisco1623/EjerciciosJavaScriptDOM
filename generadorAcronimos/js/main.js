
import{generateAcronym,highlightPhrase,addAcronym, listAcronymsRender} from "./acronym.js";
const listAcronym = document.getElementById('listAcronym');
const formPhrase = document.getElementById('formPhrase');

function addLi (phrase){
    //ELEMENTO
    
    const li = document.createElement('li');
    const acronym = generateAcronym(phrase);
    li.textContent=acronym;
    highlightPhrase(phrase)?li.className='cambia':'';
    listAcronym.appendChild(li);
    //FORM GRADES
   
    const buttonReset = document.createElement('button');
    buttonReset.setAttribute('type','submit');
    buttonReset.textContent='Reset';
    formPhrase.appendChild(buttonReset);

    buttonReset.addEventListener('submit',function(event){
        event.preventDefault();
        listAcronymsRender = [];
        listAcronym.innerHTML='';
        renderList();

    })

   
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
    addAcronym(phrase);
    formPhrase.reset();

    renderList();
})




renderList();