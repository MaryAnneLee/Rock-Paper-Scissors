const choiceImgs = document.querySelectorAll('[data-selection]')

const CHOICES = [
    {
        name: 'rock',
        img: '/workspace/Rock-Paper-Scissors/assets/images/rock.png',
        beats: 'scissors'
    },
    {
        name: 'paper',
        img: '/workspace/Rock-Paper-Scissors/assets/images/paper.png',
        beats: 'rock'
    },
    {
        name: 'scissors',
        img: '/workspace/Rock-Paper-Scissors/assets/images/scissors.png',
        beats: 'paper'
    }
]

choiceImgs.forEach(choiceImg => {
    choiceImg.addEventListener('click', e => {
        const choiceName = choiceImg.dataset.selection
        const choice = CHOICES.find(selection => choice.name === choiceName)
        makeSelection(choiceName)
    })
})

function makeSelection(choice) {
    console.log(choice)
}