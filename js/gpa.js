document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#add-subject').disabled = true;
    document.querySelector('#new-subject').onkeyup = function(){
        //var subject = document.querySelector('#new-subject').value;
        //var id = document.querySelector('#add-ID').value;
        var subject = document.querySelector('#new-subject');
        var submitSubject= document.querySelector('#add-subject');

        if(subject.value === '') {
             submitSubject.disabled = true;
            }
        else{
            submitSubject.disabled = false;
        }
    };


    document.querySelector('#calculate').disabled = true ;
    document.querySelector('new')




    document.querySelector('form').onsubmit = function (){
        var gradeArea = document.querySelector('#grade-area');
        var idArea = document.querySelector('#id-area');
        var semesterArea = document.querySelector('#semester-area');
        var gotgradeArea = document.querySelector('#gotgrade-area');

        var subjectIn = document.querySelector('#new-subject');
        var idIn = document.querySelector('#new-ID');
        var semesIN = document.querySelector('#new-semester');
        var gradeIN = document.querySelector('#new-grade');
        var submitSubject = document.querySelector('#add-subject');
        
        // Create new subject
        var count = document.createElement('li');
        var gradeA = document.createElement('li');
        var gradeB = document.createElement('li');
        var gradeC = document.createElement('li');
        var gradeD = document.createElement('li');

        var subjectName = document.createElement('span');
        var subjectID = document.createElement('span');
        var semester = document.createElement('span');
        var gotgrade = document.createElement('span');
        subjectName.innerHTML = subjectIn.value;
        subjectID.innerHTML = idIn.value;
        semester.innerHTML = semesIN.value;
        gotgrade.innerHTML = gradeIN.value;
       
       
        //Create delete butt
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '\u2713';
        deleteButton.onclick = function () {
            gradeArea.removeChild(gradeA);
        };

        // Append elements to li
        gradeA.append(subjectName);
        gradeB.append(subjectID);
        gradeC.append(semester);
        gradeD.append(gotgrade);


        // Append li to ul
        gradeArea.append(gradeA);
        idArea.append(gradeB);
        semesterArea.append(gradeC);
        gotgradeArea.append(gradeD);


         // Reset input
         subjectIn.value = '' ;
         idIn.value = '';
         semesIN.value = '';
         gradeIN.value = '';

         submitSubject.disabled = true ; 
         return false;
    };
});