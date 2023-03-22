// code from Web dev Simplified as specified in ReadMe 

// Select who the winner is from all the possible selections
const SELECTIONS = [
    {
        name: 'rock',
        img: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        img: 'paper.png',
        beats: 'rock'
    },
    {
        name: 'scissors',
        img: 'scissors.png',
        beats: 'paper'
    },
]


/* Selections on img-buttons with data-selections for rock, paper, scissors.
EventListner for clicking the button. Looping through the sections to find 
the selections that has the same names
*/
const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selecetion
        const selection = SELECTIONS.find(selection => selection.name === selection.Name)
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {

console.log(selection)
}


