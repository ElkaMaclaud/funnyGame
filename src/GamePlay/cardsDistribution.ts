import { TypeDeckItems } from "./cardsDeck"

export const cardsDistribution = (gamerCount:number, compCount:number, deck:TypeDeckItems, trump:TypeDeckItems, move:string) => {
    let localDeck = deck
    let localTrump = trump
    if (((6-compCount) > localDeck.length || (6-gamerCount) > localDeck.length) || ((6-compCount) + (6-gamerCount)) > localDeck.length) {
      localDeck.push(trump[0])
      trump.shift()
      localTrump = trump
    }
    let gamer:any[] = []
    let comp:any[] = []
    if (move==='human') { 
      const [gamerL, localG] = refill(gamerCount, localDeck, gamer)
      const [compL, localC] = refill(compCount, localG, comp)
      gamer = gamerL; localDeck = localC; comp = compL
    } 
    else if (move==='mashine') {
      const [compL, localC] = refill(compCount, localDeck, comp)
      const [gamerL, localG] = refill(gamerCount, localC, gamer)
      comp = compL; localDeck =localG; gamer = gamerL
    }
    return [localDeck, localTrump, gamer, comp]
}

const refill = (listCount:number, deck:TypeDeckItems, list:any[]) => {
  if (listCount<6 && deck.length>0) {
    while (listCount < 6 && deck.length > 0) {
      list.push(deck.shift())
      listCount++
      }      
    }
  return [list, deck]
}