const add = document.querySelector("#add");
const subjectName = document.querySelector("#new-subject");
const subjectID = document.querySelector("#new-ID");
const semester = document.querySelector("#new-semester");
const grade = document.querySelector("#new-grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table")
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");

let  gpArry = [];


add.addEventListener("click", function() {
    if( 
        subjectName.value === "" || 
        subjectID === "" || 
        semester.selectedIndex === 0 || 
        grade.selectedIndex === 0 
    ) { 
      alert("please check and try again ! JUBJUB"); 
    } else {  
        const tr  = document.createElement("tr");
        const tdSubjectName = document.createElement("td");
        const tdSubjectID = document.createElement("td");
        const tdSemester = document.createElement("td");
        const tdGrade = document.createElement("td");

        tdSubjectName.innerHTML = subjectName.value;
        tdSubjectID.innerHTML = subjectID.value;
        tdSemester.innerHTML = semester.option[semester.selectedIndex].text;
        tdGrade.innerHTML = grade.option[grade.selectedIndex].text;

        tr.appendChild(tdSubjectName);
        tr.appendChild(tdSubjectID);
        tr.appendChild(tdSemester);
        tr.appendChild(tdGrade);
        tbody.appendChild(tr);
        table.classList.remove("display-non");
        calculate.classList.remove("display-non");
        clear.classList.remove("display-non");
        gpArry.push({
            semester: semester.option[semester.selectedIndex].value,
            grade: grade.option[grade.selectedIndex].value,
        });
        
        console.log(gpArry);
        subjectName = '';
        subjectID = '';
        semester.selectedIndex = '0';
        grade.selectedIndex ='0';
    }
});

calculate.addEventListener("click", ()=>{


})