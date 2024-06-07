function ajouterTache() {
    const task = document.getElementById('task');

    if (task.value) {
        const taskList = document.getElementById('taskList'); // liste en cours
        const newItem = document.createElement('li');
        const taskListDone = document.getElementById('taskListDone'); // liste terminé
        
        newItem.innerHTML = task.value;

        $(newItem).on('swiperight', function () {

            if (this.parentElement.id === 'taskList') {
                taskListDone.appendChild(this);
            } else {
                taskList.appendChild(this);
            }

            updateDoneSectionVisibility();
        });

        

        $(newItem).on('swipeleft', function () {
            $(this).hide('slow', function () {
                $(this).remove();
            });
        });

        taskList.appendChild(newItem);
        $(taskList).listview('refresh');
        task.select();

        
    }
}

function reinitialiser() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');

    taskList.innerHTML = '';
    task.value = '';
    task.focus();
}


 function updateDoneSectionVisibility() {
    const taskListDone = document.getElementById('taskListDone');
    const doneSection = document.getElementById('doneSection');
    doneSection.classList.toggle('hidden', taskListDone.children.length === 0);
}

document.addEventListener('DOMContentLoaded', function() {
    updateDoneSectionVisibility();
});