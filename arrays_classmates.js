let classMates = [
    {
        name: 'Ash',
        favFood: 'Pizza',
        favArist: 'Fleetwood Mac'
    },
    {
        name: 'Florent',
        favFood: 'Confit Duck',
        favArist: 'The Doors'
    },
    {
        name: 'Will',
        favFood: 'Pink Floyd',
        favArist: 'Toad in the hole'
    },
    {
        name: 'Milan',
        favFood: 'Plini',
        favArist: 'Pizza'
    },
    {
        name: 'Andy',
        favFood: 'Thai red curry',
        favArist: 'The National'
    },
    {
        name: 'Ivan',
        favFood: 'Fish',
        favArist: 'Lady Gaga'
    },
    {
        name: 'Abi',
        favFood: 'Chocolate',
        favArist: 'Otis Redding'
    },
    {
        name: 'Max',
        favFood: 'Steak',
        favArist: 'Odd Future'
    },
    {
        name: 'Vicky',
        favFood: 'Tacos',
        favArist: 'Chaka Khan'
    },
    {
        name: 'Shona',
        favFood: 'Dahl',
        favArist: 'Lankum'
    }
]

// FAF
classMates.forEach((classMate) => {
    console.log(`${classMate.name} likes ${classMate.favFood} and listens to ${classMate.favArist}`)
})

// // Anon
// classMates.forEach(function (classMate) {
//     console.log(`${classMate.name} likes ${classMate.favFood} and listens to ${classMate.favArist}`)
// })

// // Named
// function displayPerson(classMate) {
//     console.log(`${classMate.name} likes ${classMate.favFood} and listens to ${classMate.favArist}`)
// }

// classMates.forEach(displayPerson)

classMates.forEach((classMate) => {
    const target = document.querySelector('.output')
    target.innerHTML += `<li>${classMate.name}</li>`
    //target.innerHTML += `<li>${classMate.name} likes ${classMate.favFood} and listens to ${classMate.favArist}</li>`
})