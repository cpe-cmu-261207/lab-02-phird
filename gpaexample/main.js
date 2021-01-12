const add = document.querySelector("#add");
const courseName= document.querySelector("#course-name");
const courseCode = document.querySelector("#course-code");
const semester = document.querySelector("#new-semester");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");

let gpArry = [];

add.addEventListener("click", () => {
  if (
    courseName.value === "" ||
    courseCode.value === "" ||
    semester.selectedIndex === 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Wrong Input, Please check and try again ! ");
  } else {
    const tr = document.createElement("tr");

    const tdCourseName = document.createElement("td");
    tdCourseName.innerHTML = courseName.value;
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdSemester = document.createElement("td");
    tdSemester.innerHTML = semester.options[semester.selectedIndex].text;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseName);
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdSemester);
    tr.appendChild(tdGrade);

    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      semester: semester.options[semester.selectedIndex].value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    courseCode.value = "";
    unitLoad.value = "";
    grade.selectedIndex = "0";
  }
});
calcGp.addEventListener("click", () => {
  let 
    sumOfGrade = 0 ;
    unitLoads = 0,
    productOfgrade = 0 ;
    productOfUnitLoadsAndGrades = 0,
    sumOfProductOfUnitLoadsAndGrades = 0;
    countS = 0 ;


  gpArry.forEach((result) => {
    countS = parseInt(result.count);
    sumOfGrade += parseInt(result.grade);
    productOfgrade = parseInt(result.grade) ;
  });
  const tr = document.createElement("tr");

  tdTotalSubject = document.createElement("td");
  tdTotalUnitLoad.innerHTML = `your total subject is ${count}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your GPA is ${(
    sumOfGrade / count
  ).toFixed(2)} `;

  tr.appendChild(tdTotalSubject);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  calcGp.classList.add("display-none");
  clear.classList.add("display-none");
});

