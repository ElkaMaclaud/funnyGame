import { TypeDeckItems } from "./cardsDeck";
import { createGameArrs } from "./createGameArrs";

export function  sleep(duration:number) {
    const start = new Date().getTime();
    let end = start;
    while(end < start + duration) {
        end = new Date().getTime();
    }
} 
export const mashineMove = (func:(a?:TypeDeckItems)=>void, list:TypeDeckItems, suit:string, deck:TypeDeckItems) => {
  list = list.filter((item) => deck.length>10 && list.reduce((prev, item) => item.value.basicMeaning<10 ? prev++ : prev, 0)>2 
    && item.value.basicMeaning>12 ? item.value.basicMeaning<=12 : item)
  const [suitList, trumpList] = createGameArrs(list, suit)
  let local:TypeDeckItems
  if (suitList.length>0) {
    local = suitList.reduce((prev, current) => current.length>prev.length ? current : prev)
    return func(local)
  }
  else {
    local = [trumpList[0]]
    return func(local)
  }
  }

  export const adderTrump = (computerCards:TypeDeckItems, deck:TypeDeckItems, trumpList:TypeDeckItems, valueCard:TypeDeckItems, suitList:any) => {
    const local:TypeDeckItems = []
    if (valueCard.length>0) {
      if (valueCard[0].value.basicMeaning>11 && (deck.length===0 && computerCards.length<7)) {
        local.push(valueCard[0])
      }
      else if (valueCard[0].value.basicMeaning>10 && deck.length>0) {
        return local
      }
      else if(valueCard[0].value.basicMeaning<11 && trumpList.length>2) {
        local.push(valueCard[0])
      }
      else if(valueCard[0].value.basicMeaning===14 && ((deck.length===0 && computerCards.length<5 && trumpList.filter(item => item.value.basicMeaning>10).length>0) 
        || (suitList.length<=1 && deck.length===0 ))) {
          local.push(valueCard[0])
      }
      else {
        return local
      }
    }
    return local
  }