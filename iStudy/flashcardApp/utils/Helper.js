
export const isNoDeck = (decks) => {
    return !decks || Object.keys(decks).length === 0 || Object.keys(decks).length === 1 && Object.keys(decks)[0] === 'dateLatestAttempted';
}

export const appTheme = {
    themeBgColor:  "#3a5c7b",
    deckBgColorList: ["#5d6080", "#f6cb9d","#638068", "#e4baa8", "#446e90", "#b3cde0", "#6497b1", "#d4a540", "#03396c"],
    deckFontColor: 'black',
    deckBorderColor: "#001057",
    lineColor: '#df7285',
}

