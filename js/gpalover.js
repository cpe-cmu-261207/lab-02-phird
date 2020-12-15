document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#submit-subject').disabled = true;
    document.querySelector('#new-subject').onkeyup = function () {
        var subjectInput = document.querySelector('#new-subject');
        var subjectIdInput = document.querySelector('#new-subjectID');
        var submitSubject = document.querySelector('#submit-subject');
        if (subjectInput.value.length  === 0) {
            submitSubject.disabled = true;
        }
        else {
            submitSubject.disabled = false;
        }
    };
    document.querySelector('form').onsubmit = function () {
        var todos = document.querySelector('#subject-table');
        var todoInput = document.querySelector('#new-subject');
        var todoInputs = document.querySelector('#new-subjectID');
        var submitSubject = document.querySelector('#submit-subject');
        // Create new todo
        var todo = document.createElement('li');
        var todoTopic = document.createElement('span');
        var todoTopics = document.createElement('span');
        todoTopic.innerHTML = todoInput.value;
        todoTopics.innerHTML = todoInputs.value;
        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '\u2713';
        deleteButton.onclick = function () {
            todos.removeChild(todo);
        };
        // Append elements to li
        todo.append(todoTopic);
        todo.append(todoTopics);
       
        todo.append(deleteButton);
        // Append li to ul
        todos.append(todo);
        // Reset input
        todoInput.value = '';
        todoInputs.value = '';

        submitSubject.disabled = true;
        return false;
    };
});