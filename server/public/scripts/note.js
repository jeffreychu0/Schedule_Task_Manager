const renderNote = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/notes')
    const data = await response.json()

    const noteContent = document.getElementById('note-content')

    let note;

    note = data.find(note => note.id === requestedID)

    if (note) {
        // wrapper mirroring the HTML structure shown earlier
        const detailsDiv = document.createElement('div')
        detailsDiv.className = 'note-details'

        const titleElem = document.createElement('h1')
        titleElem.className = 'title'
        titleElem.textContent = note.name
        detailsDiv.appendChild(titleElem)

        const dueElem = document.createElement('p')
        dueElem.className = 'dueDate'
        dueElem.textContent = "Due Date: " + note.dueDate
        detailsDiv.appendChild(dueElem)

        // optional list of individual todo items from details
        const tasksList = document.createElement('ul')
        tasksList.className = 'tasks'
        note.details.forEach((d, idx) => {
            const li = document.createElement('li')
            li.textContent = d.task
            if (d.completed) {
                li.className = 'completed'
            }
            tasksList.appendChild(li)
        })

        noteContent.appendChild(detailsDiv)
        noteContent.appendChild(tasksList)
    }
    else {
        const noNote = document.createElement('h2')
        noNote.textContent = "Error: No note avaiable"
        noteContent.appendChild(noNote)
    }
}

renderNote()