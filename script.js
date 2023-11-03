//created an array of objects
//each emoji is an object with emoji and name
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

//retrieving the div in html
const outputGrid = document.getElementById('outputGrid');

//created for loop to output emoji arrary
for (let i = 0; i < emojiArray.length; i++) {
    //created each emoji item
    const element = document.createElement('div');
    element.classList.add('grid-item');

    //adds the emoji
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    emojiElement.innerHTML = emojiArray[i].emoji;

    //adds the name
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = emojiArray[i].name;

    element.appendChild(emojiElement);
    element.appendChild(nameElement);

    outputGrid.appendChild(element);
}