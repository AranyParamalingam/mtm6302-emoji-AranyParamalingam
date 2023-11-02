const emojiArray = [
    {
        emoji: '&#129409',
        name: '129409'
    },
    {
        emoji: '&#129398',
        name: '129398'
    },
    {
        emoji: '&#129396',
        name: '129396'
    },
    {
        emoji: '&#129393',
        name: '129393'
    },
    {
        emoji: '&#129402',
        name: '129402'
    },
    {
        emoji: '&#128586',
        name: '128586'
    },
    {
        emoji: '&#128128',
        name: '128128'
    },
    {
        emoji: '&#128561',
        name: '128561'
    },
    {
        emoji: '&#128563',
        name: '128563'
    },
    {
        emoji: '&#128536',
        name: '128536'
    },
    {
        emoji: '&#128512',
        name: '128512'
    },
    {
        emoji: '&#128539',
        name: '128539'
    },
];

const outputGrid = document.getElementById('outputGrid');

for (let i = 0; i < emojiArray.length; i++) {
    const element = document.createElement('div');
    element.classList.add('grid-item');
    element.innerHTML = emojiArray[i];
    outputGrid.appendChild(element);
}

/*const emojiArray = [
    '&#129409',
    '&#129398',
    '&#129396',
    '&#129393',
    '&#129402',
    '&#128586',
    '&#128128',
    '&#128561',
    '&#128563',
    '&#128536',
    '&#128512',
    '&#128539',
];

const outputGrid = document.getElementById('outputGrid');

for (let i = 0; i < emojiArray.length; i++) {
    const element = document.createElement('div');
    element.classList.add('grid-item');
    element.innerHTML = emojiArray[i];
    outputGrid.appendChild(element);
}*/