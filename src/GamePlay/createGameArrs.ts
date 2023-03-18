import { TypeDeck, TypeDeckItems } from "./cardsDeck"

export function createGameArrs(computerCards:TypeDeckItems, suit:string, card?:TypeDeck, move=true) {
    const valueCard:TypeDeckItems = []
    let trumpList:TypeDeckItems = []
    let suitList:any[] = card ? computerCards.filter((item) => item.suit === card.suit).
      sort((item, current) => item.value.basicMeaning - current.value.basicMeaning) : []
    if (!move && card) {
      trumpList = (card.suit !==  suit) ? getTrumpList(computerCards, suit): []   
        if (suitList.length > 0) {
          for (let i=0; i<suitList.length; i++) {
            if (suitList[i].value.basicMeaning > card.value.basicMeaning) {
              valueCard.push(suitList[i])
              break
            }
          }
        }
      }
    else if (move && !card) {
      trumpList = getTrumpList(computerCards, suit)
      suitList = computerCards.filter((item) => item.suit !== suit)
      suitList =  suitList.length>0 ? gameArr(suitList) : suitList
  }
    else if (move && card) {
      trumpList = getTrumpList(computerCards, suit)
      suitList = computerCards.filter(item => card.value.basicMeaning === item.value.basicMeaning && item.suit!==suit)
      const thereIs = trumpList.findIndex((item) => item.value.basicMeaning===card.value.basicMeaning)
      thereIs>-1 && valueCard.push(trumpList[thereIs])
    }
    return [suitList, trumpList, valueCard] 
}

// // function deepEqual(x:Array[], y:any): {
// //   const ok = Object.keys, tx = typeof x, ty = typeof y;
// //   return x && y && tx === 'object' && tx === ty ? (
// //     ok(x).length === ok(y).length &&
// //       ok(x).every(key => deepEqual(x[key], y[key]))
// //   ) : (x === y);
// // }
export const getTrumpList = (list:any[], suit:string) => {
  const trumpList = list.filter((item) => item.suit ===  suit).sort((item, current) => item.value.basicMeaning - current.value.basicMeaning)
  return trumpList
}

const gameArr = (suitList:any[]) => {
  let list = []
  for (let i=0; i<suitList.length; i++) {
    const index = list.findIndex((item) => item.length>0 && suitList[i].value.basicMeaning===item[0].value.basicMeaning)
    if (index > -1) {
      list[index].push(suitList[i])
    }
    else {
      list.push([suitList[i]])
      }
    }
  suitList = list.sort((a, b) => a[0].value.basicMeaning-b[0].value.basicMeaning)
  return suitList
}
export function  sleep(duration:number) {
  const start = new Date().getTime();
  let end = start;
  while(end < start + duration) {
    end = new Date().getTime();
  }
}
export function sortCards(list:any[], suit:string) {
  const trumpList:TypeDeckItems = getTrumpList(list, suit)
  let suitList:TypeDeckItems = list.filter((item) => item.suit !== suit).sort((item, current) => item.value.basicMeaning - current.value.basicMeaning)
    suitList = suitList.concat(trumpList.length>0 ? trumpList : [])
    return suitList
}
