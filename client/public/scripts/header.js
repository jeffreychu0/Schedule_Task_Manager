const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = "header-container"

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerTitle = document.createElement('h1')
headerTitle.textContent = "Schedule Task Manager"

headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerBackbutton = document.createElement('button')
headerBackbutton.textContent = "home"

headerBackbutton.addEventListener('click', (event) => {
    window.location = '/'
})

headerRight.appendChild(headerBackbutton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer);