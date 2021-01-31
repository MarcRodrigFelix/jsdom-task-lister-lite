document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.querySelector('form')
  const ul = document.querySelector('#tasks')


  myForm.addEventListener('submit', event => {
    event.preventDefault()
    const task = document.getElementById('new-task-description')
    const li = document.createElement('li')
    let btn = document.createElement('BUTTON')
    btn.innerHTML = "X"

    ul.appendChild(li)
    li.innerHTML = task.value
    task.value = "" // reset input value
    li.appendChild(btn)

    btn.style.margin = '5px'
    btn.style.fontSize = '10px'
    btn.style.cursor = 'pointer'

    btn.addEventListener('click', () => {
      li.remove()
    })
  })
  
});
