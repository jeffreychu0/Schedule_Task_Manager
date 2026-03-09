const renderNotes = async () => {
    const response = await fetch('/notes')
    const data = await response.json();

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(note => {
            console.log(note);
            const cardDiv = document.createElement('div')
            
            const dueDateObject = new Date(note.duedate)
            if (dueDateObject < Date.now()) {
                cardDiv.className = "card-overdue"
            } else {
                cardDiv.className = "card"
            }

            const title = document.createElement('h2')
            title.textContent = note.name
            cardDiv.appendChild(title)

            const dueDateText = document.createElement('p')
            dueDateText.textContent = `Due Date: ${note.duedate}`
            cardDiv.appendChild(dueDateText)

            const listDiv = document.createElement('div')
            listDiv.className = "list"
            note.details.forEach(detail => {
                const listElem = document.createElement('div')
                listElem.className = "list-item"
                listElem.textContent = (detail.completed ? " ✔" : "X") + " : " + detail.task
                listDiv.appendChild(listElem)
            })
            cardDiv.appendChild(listDiv)
            
            const link = document.createElement('a')
            link.textContent = "More about this task"
            link.setAttribute('role', 'button')
            link.href = `/notes/${note.id}`
            cardDiv.appendChild(link)

            mainContent.appendChild(cardDiv)
        })
    } else {
        const h2Err = document.createElement('h2')
        h2Err.textContent = "No Notes are currently added"
        mainContent.appendChild(h2Err)
    }
}
const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderNotes();
}