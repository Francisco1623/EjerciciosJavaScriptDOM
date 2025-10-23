let gradebook = {
  students: [
    { name: "Ana", grades: [8, 7, 9], average: 0 },
    { name: "Luis", grades: [6, 8, 6], average: 0 },
    { name: "Maria", grades: [9, 10, 9], average: 0 }
  ]
};

function addStudents(name,gradebook){
  return  name?gradebook.students.push({name,grades:[]}):false;
}

function updateGrades(grade,name, gradebook){
     const student = gradebook.students.find(s=>s.name.toLocaleLowerCase()===name.toLocaleLowerCase());
    return grade<=10&&grade>=0?student.grades.push(grade):false;
}



function calculateAverage(name,gradebook){
    const student = gradebook.students.find(s=>s.name.toLocaleLowerCase()===name.toLocaleLowerCase())
    return student.grades?student.grades.reduce((acum,iter)=>acum+=iter,0)/student.grades.length:0;
}     

function gradeAverageBigguer8(average,li){
  return average>8?li.className='cambia':'';
}


export{gradebook, addStudents,updateGrades,calculateAverage,gradeAverageBigguer8};

