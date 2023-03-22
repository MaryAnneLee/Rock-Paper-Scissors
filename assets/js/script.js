const choiceImgs = document.querySelectorAll('[data-selection]')

const CHOICES = [
    {
        name: 'rock',
        img: 'rock.png',
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
    }
]

choiceImgs.forEach(choiceImg => {
    choiceImg.addEventListener('click', e => {
        const choiceName = choiceImg.dataset.selection
        const choice = CHOICES.find(choice => choice.name === choiceName)
        makeChoice(choiceName)
    })
})

function makeChoice(choice) {
    console.log(choice)
}