let todoList = [
    {
        name: 'Doing the washing up',
        number: 1
    }, 
    {   name: 'Mowing the lawn',
        number: 2
    }, 

    {   name: 'Doing the shopping',
        number: 3
    }
]

// console.log(todoList[0])
// console.log(todoList[2])


// todoList.forEach(function(action) {
//     console.log(`Actions todo: ${action.name} priority ${action.number}`)
// })

// todoList.forEach(function(action) {
//     const target = document.querySelector('.output')
//     target.innerHTML += `<li>${action.name} and its priority is ${action.number}</li>`

// })

fetch('practicingActionsArray.json').then (function (res) {
    return res.json()
}).then(function (data) {
const target = document.querySelector('.output')
data.todo.forEach( function (activity) {
    console.log(activity)
   
    target.innerHTML += `<div> 
    <li>${activity.action} ${activity.activity}</li>
    </div>`
    
});
})