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
        dueElem.textContent = "Due Date: " + note.duedate
        detailsDiv.appendChild(dueElem)

        // optional list of individual todo items from details
        const tasksDiv = document.createElement('div')
        tasksDiv.className = 'tasks'

        const taskDivTitle = document.createElement('h3')
        taskDivTitle.textContent = "ToDo"
        tasksDiv.appendChild(taskDivTitle)
        note.details.forEach((d) => {
            const task = document.createElement('p')
            task.textContent = "- " + d.task
            if (d.completed) {
                task.className = 'completed'
            }
            tasksDiv.appendChild(task)
        })

        noteContent.appendChild(detailsDiv)
        noteContent.appendChild(tasksDiv)
    }
    else {
        const noNote = document.createElement('h2')
        noNote.textContent = "Error: No note avaiable"
        noteContent.appendChild(noNote)
    }
}

renderNote()