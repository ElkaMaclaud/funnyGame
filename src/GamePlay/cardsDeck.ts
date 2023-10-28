interface TypeObject { value: {valueMain:string, basicMeaning:number}, suit: string }
export type TypeDeck = TypeObject
export type TypeDeckItems = TypeObject[]

const cardDeck:TypeDeckItems = [];
export const suit = ["ofHearts", "ofClubs", "ofSpades", "diamond"];
let count = 6;
let cards = ['J', 'Q', 'K', 'A']

function cardDeckFunc(list=cardDeck) {
  for (let i=0; i<36; i++) {
    list.push({
          value: {valueMain: count < 11 ? (count).toString() : (cards[count - 11]), basicMeaning: count},
          suit: suit[Math.floor(i/9)]  
      });
      count = (count === 14) ? 6 : count+=1;
  }
  return list
}

export const cardList = cardDeckFunc()
