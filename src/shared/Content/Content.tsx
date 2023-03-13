import React, { useContext, useEffect, useState } from 'react';
import { cardList, TypeDeck, TypeDeckItems } from '../../GamePlay/cardsDeck';
import { cardsDistribution } from '../../GamePlay/cardsDistribution';
import { createGameArrs, getTrumpList, sortCards } from '../../GamePlay/createGameArrs';
import { adderTrump, mashineMove } from '../../GamePlay/utils';
import { userContext } from '../context/userDataContext';
import { ContentContainer } from './ContentContainer';

let first:any = null
const listCard = cardList 

export function Content() {
  const { data, setData }= useContext(userContext)
  const [modal, setModal] = useState('begin')
  const [winner, setWinner] = useState('')
  const [move, setMove] = useState('')
  const [covered, setCovered] = useState('')
  const [continued, setContinued] = useState(true)
  const [deck, setDeck] = useState(listCard.slice(0).sort(() => Math.random() - 0.5));
  const [gamerCards, setGamerCards] = useState<TypeDeckItems>([]);
  const [computerCards, setComputerCards] = useState<TypeDeckItems>([]);
  const [gameList, setGameList] = useState<TypeDeckItems>([]); 
  const [trump, setTrump] = useState<TypeDeckItems>([])
  const [temp, setTemp] = useState<TypeDeckItems>([])
  const [gamerTemp, setGamerTemp] = useState<Array<number>>([])
  const [suit, setSuit] = useState('')
 
  useEffect(() => {
    if (winner!=='' && modal==='winner') {
      setTimeout(() => gameAgain(listCard.slice(0).sort(() => Math.random() - 0.5)), 2000)
    }
    else if (modal==='winnerMove' && deck.length<36) {
      firstMove()
    }
    else if (modal==='begin' && move==='' && deck.length<36) {
      setTimeout(() => {firstMove()}, 1300)
    }
    else if ((gameList.length>0 && gameList.length%2===0) && (gamerCards.length===0 || computerCards.length===0) && trump.length===0 && deck.length===0) {
      setTimeout(() => handlClick(false), 700)
    }
    else if ((gamerCards.length===0 || computerCards.length===0) && trump.length===0 && deck.length===0 && gameList.length===0) {
      definitionWinner()
    }
    else if (modal==='lookTrump' && deck.length<36) {
      if (first===null){setModal('waiting')}
      else if (first.value.basicMeaning===6) {setTimeout(() => firstMoveMashine(), 800)}
      else {setTimeout(() => {setModal('waiting')}, 900)}
    }
    else if (move!=='' && modal==='bito' && trump.length>0) {
      setTimeout(() => plannedHandlClick(), 900)
    }
    else if (move!=='' && gameList.length===0 && (gamerCards.length<6  || computerCards.length<6) && trump.length>0 && deck.length<36 && covered!=='raise') {
      plannedHandlClick()
    }
    else if (gameList.length===0 && move==='mashine' && covered==='move' && ((gamerCards.length>=6  && computerCards.length>=6) || 
      (deck.length===0 && trump.length===0)) && temp.length===0) {
      if (modal==='firstMove') {setTimeout(() => mashineMove(moveCards, computerCards, suit, deck), 800)}
      else {mashineMove(moveCards, computerCards, suit, deck)}
    }
    else if (move==='mashine' && covered==='yes' && temp.length>0 && gamerCards.length>0) {
      moveCards()
    }
    else if(move==='mashine' && covered==='yes' && (temp.length===0 || gamerCards.length===0)) {
      endParty()
    }
    else if (move==='mashine' && covered==='raise' && temp.length===0) {
      if (computerCards.length>=6 || trump.length===0) {setCovered('move')}
      else {plannedHandlClick()}
    }  
    else if (move==='mashine' && covered==='gamerRaise') {
      setTimeout(() => {raiseCards()}, 1200)
    }
    }, [deck, trump, gameList, gamerCards, computerCards, move, modal, covered, winner])
    
  const firstMove = () => {
    if (winner!=='НИЧЬЯ' && data.count>0) {
      setModal('firstMove')
      setMove(winner)
      winner==='mashine' && setCovered('move')
    }
    else {
      const list = getTrumpList(computerCards, suit)
      first = list.length>0 ? list[0] : null
      if (first!==null) {
        setComputerCards(prevState => prevState.filter(item => item!==first))
        setGameList(prevState => [...prevState, first])
        setTimeout(() => {
          setGameList(prevState => prevState.filter(item => item!==first))
          setComputerCards(prevState => sortCards([...prevState, first], suit))
        }, 900)
      }
    }
    (winner==='' || winner==='НИЧЬЯ') && setModal('lookTrump')
  }
  function gameAgain(list:TypeDeckItems) {
    setData({...data, 
      suit: '',
      count:data.count+=1, winner:winner!=='НИЧЬЯ' ? winner==='human' ? 
      {...data.winner, human: data.winner.human+=1} : 
      {...data.winner, mashine: data.winner.mashine+=1} : {...data.winner}})
    setModal('winnerMove')
    setCovered('')
    setSuit('')
    setDeck(list)
    setContinued(true)
    setTemp(prevState => prevState.slice(0, 0))   
  }
  function firstMoveMashine() {
      setModal('firstMove')
      setMove('mashine') 
      setCovered('move')
    }
  const definitionWinner = () => {
    setMove('')
    setModal('winner')
    if (gamerCards.length===0 && computerCards.length>0) {
      setComputerCards(prevState => prevState.slice(0, 0))
      setWinner('human')
    }
    else if (computerCards.length===0 && gamerCards.length>0) {
      setGamerCards(prevState => prevState.slice(0, 0))
      setWinner('mashine')
    }
    else if (computerCards.length===0 && gamerCards.length===0) {
      setWinner('НИЧЬЯ')
    }
  }
  const raiseTemp = () => {
    if (gamerCards.length>=temp.length) {
        setTemp(prevState => prevState.filter((item) => item.suit!==suit))
        setComputerCards(prevState => prevState.filter(item => {if (!temp.includes(item)) return item})) //reduce((prev:any[], item) =>{return prev.concat(!temp.includes(item) && item)}, [])
        setGameList(oldArray => [...oldArray, ...temp])
        setTemp(prevState => prevState.slice(0, 0))
        setCovered('gamerRaise')  
      }
    else if (gamerCards.length<temp.length) {
        setTemp(prevState => prevState.filter((item) => item.suit!==suit))
        setComputerCards(prevState => prevState.filter(item => {if (!temp.includes(item)) return item})) //reduce((prev:any[], item) =>{return prev.concat(!temp.includes(item) && item)}, [])
        setGameList(oldArray => [...oldArray, ...temp])
        setTemp(prevState => prevState.slice(0, 0))
        setCovered('gamerRaise')
    }
  }
  const endParty = () => {
    setCovered('')
    setTemp(prevState => prevState.slice(0, 0))
    setGameList(oldArray => oldArray.slice(0, 0))
    setModal('bito')
    if (trump.length===0) {
      strokeTransition()
    }
  }
  function moveCards(local?:TypeDeckItems) {
    setContinued(false)
    setModal('')
    setCovered('false')
    let item:TypeDeck
    if (local) {
      if (local.length>0) item = local[0]
      local.shift()
      setTemp(local)
    }
    else {
      item = temp[0]
      setTemp(prevState => prevState.filter(current => current !== item))
    }
    setComputerCards(prevState => prevState.filter(obj => obj !== item))
    setGameList(oldArray => [...oldArray, item]);   
  } 
  const foughtBack = (value:TypeDeck) => {
    const card = gameList[gameList.length-1]
    if (((value.suit === card.suit && value.value.basicMeaning > card.value.basicMeaning) || (card.suit!==suit && value.suit === suit)) 
      || (card.suit===suit && (value.suit===suit && value.value.basicMeaning>card.value.basicMeaning))) {
      setGamerCards(prevState => prevState.filter(item => item!==value))
      setGameList(prevState => [...prevState, value])
      setCovered('yes')
      setContinued(true)
      setModal('')
      const [suitList, trumpList, valueCard] = createGameArrs(computerCards, suit, value);
      let local:TypeDeckItems = suitList.length>0 ? suitList : [];
      const list = valueCard.length>0 ? adderTrump(computerCards, deck, trumpList, valueCard, suitList) : []
      list.length>0 && local.concat(list)
      setTemp(prevState => prevState.concat(local))
    }
    else {
      setModal('false')
      setGamerCards(prevState => prevState.filter(item => item!==value))
      setGameList(prevState => [...prevState, value])
      setTimeout(() => 
        {setGamerCards(prevState => sortCards([...prevState, value], suit))
        setGameList(prevState => prevState.filter(item => item!==value))
      }, 600)
      
    }
  }
  const raiseCards = () => {
    setGamerCards(prevState => sortCards([...prevState, ...gameList], suit))
    setGameList(oldArray => oldArray.slice(0, 0)) 
    setCovered('raise')
    move==='mashine' && temp.length>0 && gamerCards.length>0 && raiseTemp() 
  } 
  const strokeTransition = () => {
    if (continued) {
      if (move==='human') {setMove('mashine'); setCovered('move')}
      else {setMove('human')}
      setContinued(false)
    }
    else {
      move==='mashine' && setCovered('move')
    }
  }
  function handlClick(flag=true) {
    setCovered('')
    setGameList(oldArray => oldArray.slice(0, 0))
    setGamerTemp(oldArray => oldArray.slice(0, 0))
    if (!flag ) {
      setComputerCards(prevState => prevState.slice(0, 0))
      setGamerCards(prevState => prevState.slice(0, 0))
      definitionWinner()
    } 
    flag && plannedHandlClick()
  }
  function plannedHandlClick() {
    data.count>0 && setWinner('')
    setModal('')
    if (trump.length>0) {
      const [localDeck, localTrump, gamer, comp] = cardsDistribution(gamerCards.length, computerCards.length, deck, trump, move)
      setTrump(localTrump)
      setGamerCards(oldArray => sortCards([...oldArray, ...gamer], suit)) 
      setComputerCards(oldArray => sortCards([...oldArray, ...comp], suit))
      setDeck(localDeck)
    }
    strokeTransition()
  } 
  const distribution = () => {
    const localDeck:TypeDeckItems = deck
    const gamer:any[] = []
    const comp:any[] = []
    for (let i=0; i<6; i++) {
      gamer.push(localDeck.shift())
      comp.push(localDeck.shift())
    }
      setDeck(localDeck)
      const lineTrump = localDeck[(Math.floor((Math.random() * (deck.length-1))) + 1)]
      setTrump([lineTrump])
      setSuit(lineTrump.suit)
      setData({...data, suit:lineTrump.suit})
      setDeck(prevState => prevState.filter(obj => obj !== lineTrump))
      setGamerCards(sortCards(gamer, lineTrump.suit));
      setComputerCards(sortCards(comp, lineTrump.suit));
    } 
  function choiceRandom() {
    const list = ['mashine', 'human', 'mashine', 'human', 'mashine', 'human']
    const line = list[Math.floor((Math.random() * (list.length-1))) + 1]
    if (line==='mashine') {
      setTimeout(() => {
        setMove('mashine')
        setCovered('move')
        setModal('firstMove')
      }, 900)  
    }
    else {
      setTimeout(() => {
        setMove('human')
        setModal('firstMove')
      }, 900) 
    }
  }
  function gamerMove(value:TypeDeck|null) {
    setModal('')
    if (move==='') {
      if (value!==null && value.suit===suit) {
        setGamerCards(prevState => prevState.filter(obj => obj !== value))
        setGameList(oldArray => [...oldArray, value])
        setTimeout(() => {
          setGamerCards(oldArray => sortCards([...oldArray, value], suit)) 
          setGameList(oldArray => oldArray.filter(obj => obj !== value))
        }, 800)
        if (first!==null) {
          if (first.value.basicMeaning<value.value.basicMeaning) {
            setTimeout(() => {
              setMove('mashine');
              setCovered('move')}, 700)
          }
          else {
            setMove('human')
          }
        }
        else {
          setMove('human')
        }
      }
      else if (first!==null && (value===null || value.suit!==suit)) {
          setMove('mashine');
          setCovered('move')
      }
      else if (first===null && (value===null || value.suit!==suit)) {
        setModal('choiseFirstMove')
        choiceRandom()
      }
      (first!==null || (value!==null && value.suit===suit)) && setModal('firstMove')
      }
    else if (move==='mashine') {value!==null && foughtBack(value)}
    else {
      if (value!==null) {
        if (covered==='raise' && gamerTemp.includes(value.value.basicMeaning)) {
          setGameList(oldArray => [...oldArray, value]);
          setGamerCards(prevState => prevState.filter(obj => obj !== value))
          setTimeout(() => {
            setComputerCards(prevState => sortCards([value, ...prevState], suit))
            setGameList(oldArray => oldArray.slice(0, 0))
          }, 600)
        }
        else if (covered==='raise' && !gamerTemp.includes(value.value.basicMeaning)) {
          setModal('false')
          setGamerCards(prevState => prevState.filter(item => item!==value))
          setGameList(prevState => [...prevState, value])
          setTimeout(() => {
            setGamerCards(prevState => sortCards([...prevState, value], suit))
            setGameList(prevState => prevState.filter(item => item!==value))
          }, 900)      
        }
        else if (covered!=='raise' && (gameList.length===0) || (gamerTemp.length>0 && gamerTemp.includes(value.value.basicMeaning))) {
          setCovered('humenMove')
          setGameList(oldArray => [...oldArray, value]);
          setGamerCards(prevState => prevState.filter(obj => obj !== value))
          gameProcess(value)
          setGamerTemp(prevState => [...prevState, value.value.basicMeaning])
        }
        else if (covered!=='raise' && (gameList.length>0) && (gamerTemp.length>0 && !gamerTemp.includes(value.value.basicMeaning))) {
          setModal('false')
          setGamerCards(prevState => prevState.filter(item => item!==value))
          setGameList(prevState => [...prevState, value])
          setTimeout(() => {
            setGamerCards(prevState => sortCards([...prevState, value], suit));
            setGameList(prevState => prevState.filter(item => item!==value)) 
          }, 900)       
          }
      }
    }
  }
  function gameProcess(card:TypeDeck) {
    const [_, trumpList, valueCard] = createGameArrs(computerCards, suit, card, false)
    if (valueCard.length > 0) {
      setComputerCards(prevState => prevState.filter(obj => obj !== valueCard[0]))
      setGameList(oldArray => [...oldArray, valueCard[0]]);
      setContinued(true)
      setGamerTemp(prevState => [...prevState, valueCard[0].value.basicMeaning])
    }
    else if (trumpList.length > 0)  {
      const line = trumpList[0]
      setGamerTemp(prevState => [...prevState, line.value.basicMeaning])
      setComputerCards(prevState => prevState.filter(obj => obj !== line))
      setGameList(oldArray => [...oldArray, line]);
      setContinued(true)
    }
    
    else {
      setTimeout(() => {
        setComputerCards(prevState => sortCards([card, ...gameList, ...prevState], suit))
        setGameList(oldArray => oldArray.slice(0, 0))
      }, 600)
      setCovered('raise')
      setContinued(false)
    }
  }
  return (
    <ContentContainer
      first = {first}
      data = {data}
      modal = {modal}
      winner = {winner}
      move = {move}
      covered = {covered}
      deck = {deck}
      gamerCards = {gamerCards}
      computerCards = {computerCards}
      gameList = {gameList}
      trump = {trump}
      distribution={distribution}
      gamerMove= {gamerMove}
      raiseCards = {raiseCards}
      handlClick = {handlClick}
    />
  );
}

