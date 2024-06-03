document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeList = document.getElementById('employeeList');

    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const skills = document.getElementById('skills').value;

        if (name && position && skills) {
            addEmployee(name, position, skills);
            employeeForm.reset();
        }
    });

    function addEmployee(name, position, skills) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${name}</strong> - ${position} - ${skills}</span>
            <button class="delete-btn">Delete</button>
        `;

        employeeList.appendChild(li);

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            employeeList.removeChild(li);
        });
    }
});
