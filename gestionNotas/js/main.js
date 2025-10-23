
import{gradebook,addStudents,updateGrades,calculateAverage,gradeAverageBigguer8} from "./gradebook.js";
const list = document.getElementById('list');
const formStudent = document.getElementById('formStudent');

function addLi ({name,grades,average}){
    //ELEMENTO
    average = calculateAverage(name,gradebook);
    const li = document.createElement('li');
    gradeAverageBigguer8(average,li);
    li.textContent=`Alumno: ${name} - Notas: ${grades} - Media: ${average?average:0}`;
    list.appendChild(li);
    //FORM GRADES
    const formGrades = document.createElement('form');
    const buttonGrades = document.createElement('button');
    buttonGrades.setAttribute('type','submit');
    buttonGrades.textContent='Add';
    const inputGrade = document.createElement('input');
    inputGrade.setAttribute('type','number');
    formGrades.appendChild(inputGrade);
    formGrades.appendChild(buttonGrades);
   

    const buttonForm = document.createElement('button');
    buttonForm.textContent='Add Grade';
    li.appendChild(buttonForm);
    buttonForm.addEventListener('click',()=>{
         li.appendChild(formGrades);
    })

    formGrades.addEventListener('submit',(event)=>{
        event.preventDefault();
         updateGrades(parseInt(inputGrade.value),name,gradebook);
         renderList();
    })
    
}

function renderList(){
    list.innerHTML='';
    gradebook.students.forEach(s=>{
        addLi(s);
        
    })
}

formStudent.addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    addStudents(name,gradebook)
    formStudent.reset();

    renderList();
})

renderList();