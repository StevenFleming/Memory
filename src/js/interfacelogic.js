function defineCards(numberOfCardPairs) {
    let allCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let subCards = allCards.slice(0, numberOfCardPairs-1);
    let doubleCards = subCards.concat(subCards);
    return doubleCards;
}

function randomizePairs(selectionArray) {
    let newArray = [];
    let currentSelectionArrayLength = selectionArray.length;
    let initialSelectionArrayLength = currentSelectionArrayLength;

    for(let i = 0; i < initialSelectionArrayLength; i++) {
        let value = Math.floor(Math.random() * (currentSelectionArrayLength-1));
        newArray.push(selectionArray[value]);
        selectionArray = selectionArray.slice(value);
    }
    return newArray;
}
