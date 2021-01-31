document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.querySelector('form')
  const ul = document.querySelector('#tasks')


  myForm.addEventListener('submit', event => {
    event.preventDefault()
    const task = document.getElementById('new-task-description')
    const li = document.createElement('li')

    ul.appendChild(li)
    li.innerHTML = task.value
    task.value = "" // reset input value
  })
  

  
});
