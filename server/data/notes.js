const noteData = [
    {
        id: 1,
        name: "Finish Web103 Assignment",
        details: [
            { task: "Create Frontend", completed: true },
            { task: "Create Backend", completed: true },
            { task: "Submit Project", completed: true }
        ],
        due_date: "2026-03-01"
    },
    {
        id: 2,
        name: "Complete AI110 Exploration Task",
        details: [
            { task: "Install tkinter", completed: true },
            { task: "Finalize completion of exploration task", completed: false }
        ],
        due_date: "2026-02-28"
    },
    {
        id: 3,
        name: "Design a full portfolio website",
        details: [
            { task: "Create Frontend", completed: false },
            { task: "Create Backend", completed: false },
            { task: "Port website to the internet", completed: false}
        ],
        due_date: "2026-05-01"
    },
    {
        id: 4,
        name: "Build a robot project",
        details: [
            { task: "Define test cases", completed: false },
            { task: "Port all information", completed: true },
            { task: "Compile using Java", completed: false},
            { task: "Write out the code", completed: false },
            { task: "Test and deploy", completed: false },
            { task: "Document process of creating the code", completed: false }
        ],
        due_date: "2026-05-01"
    }
];

export default noteData;