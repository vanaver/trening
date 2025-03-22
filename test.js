const lists = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('input');

// Функция для сохранения задач в localStorage
function saveTasks() {
    const tasks = [];
    lists.querySelectorAll('li').forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Функция для загрузки задач из localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(taskText => {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            lists.appendChild(newTask);

            newTask.addEventListener('click', function(){
                newTask.style.backgroundColor = 'blueviolet';
                newTask.style.opacity = "0";
                newTask.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    newTask.remove();
                    saveTasks()
                }, 500)
    
            })
        });
    }
}

// Добавление новой задачи
btn.addEventListener('click', function() {
    const textInside = input.value.trim();
    if (textInside) {
        let newTask = document.createElement('li');
        newTask.textContent = textInside;

        newTask.addEventListener('click', function(){
            newTask.style.backgroundColor = 'blueviolet';
                newTask.style.opacity = "0";
                newTask.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    newTask.remove();
                    saveTasks()
                }, 500)
        })

        lists.appendChild(newTask);
        newTask.scrollIntoView({ behavior: 'smooth' });
        input.value = '';
        saveTasks();
    }
});

// Обработка нажатия Enter в поле ввода
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        btn.click();
    }
});

// Загрузка задач при загрузке страницы
window.addEventListener('load', loadTasks);

const tasochki = lists.querySelectorAll('li')
console.log(tasochki)