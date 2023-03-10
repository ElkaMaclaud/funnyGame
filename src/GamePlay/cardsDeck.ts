// interface TypeDeck { 
//   value: string;
//   suit: string
// }

// interface TypeDeckItems extends Array<TypeDeck>{}

// interface TypeObject { id:string, value: {valueMain:string, basicMeaning:number}, suit:TypeSuit }
// export type TypeDeckItems = TypeObject[]
// interface ISuit {
//   value: () => JSX.Element
// }
// type TypeSuit = () => JSX.Element;
// type TypeSuitArray = ISuit[]
//const suit= [{value: OfHearts}, {value: OfClubs}, {value: OfSpades}, {value:Diamond}];

interface TypeObject { value: {valueMain:string, basicMeaning:number}, suit: string }
export type TypeDeck = TypeObject
export type TypeDeckItems = TypeObject[]

const cardDeck:TypeDeckItems = [];
export const suit = ["ofHearts", "ofClubs", "ofSpades", "diamond"];
let count = 6;
let cards= ['J', 'Q', 'K', 'A']

// function div(val:number, by:number){
//   return (val - val % by) / by;
// }

function cardDeckFunc(list=cardDeck) {
  for (let i=0; i<36; i++) {
    list.push({
          value: {valueMain: count < 11 ? (count).toString() : (cards[i < 9 ?  i % 5 : (i + (Math.floor(i/9))) % 5]).toString(), basicMeaning: count},
          suit: suit[Math.floor(i/9)]  
      });
      count = (count === 14) ? 6 : count+=1;
  }
  return list
}

export const cardList = cardDeckFunc()
