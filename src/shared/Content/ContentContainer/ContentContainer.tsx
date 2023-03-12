import React from 'react';
import styles from './contentcontainer.css';
import { ListGenerate } from '../ListGenerate';
import { Modal } from '../Modal';
import { TypeDeckItems } from '../../../GamePlay/cardsDeck';

interface IContentProps {
  first: any
  data: any 
  modal: string
  winner: string
  move: string
  covered: string
  deck: TypeDeckItems
  gamerCards: TypeDeckItems
  computerCards: TypeDeckItems
  gameList: TypeDeckItems
  trump: TypeDeckItems
  distribution: () => void
  gamerMove: (a?:any) => void
  raiseCards: () => void
  handlClick: () => void
}
export function ContentContainer(
  { first, data, modal, winner, move, covered, deck, gamerCards, computerCards, gameList, trump, distribution, gamerMove, raiseCards, handlClick }
    : IContentProps) {
  return (
    <div className={styles.content}>
    {(computerCards.length>0 && computerCards.length<7) && <ListGenerate ulStyle={styles.gamers} list={computerCards} classStyle={styles.cards} />}
    {(computerCards.length>0 && computerCards.length>=7) && <ListGenerate ulStyle={styles.gamersNoMargin} list={computerCards} 
      classStyle={styles.cards} shadow={true} cards={true} noMargin={true}  />} 
    <div className={styles.contentGame}>
      {deck.length<36 && modal==='begin' && <Modal text={`ОПРЕДЕЛЯЕМ ПЕРВЕНСТВО ХОДА, \n СНАЧАЛА Я ПОКАЖУ СВОЙ НАИМЕНЬШИЙ КОЗЫРЬ, ЕСЛИ ОН У МЕНЯ ЕСТЬ`} 
        timer={1300} height={90}/>}
      {modal==='choiseFirstMove' && <Modal text={`ВЫБИРАЮ ПЕРВОГО ИГРОКА РАНДОМНО!`} timer={900} height={50}/>}
      {(move==='' && modal==='waiting') && <Modal text={`${first===null ? 'У МЕНЯ НЕТ КОЗЫРЕЙ(' : 
        `У МЕНЯ ${first.value.valueMain}`} ЖДЁМ ТОЛЬКО ТЕБЯ! \n НУ ДАВАЙ ПОКАЗЫВАЙ ЧЕ ТАМ У ТЕБЯ?!`} timer={900} height={60} />}
      {move==='human' &&  covered==='raise' && <Modal text={`ДА, ПОФИГ... ЗАБЕРУ!`} timer={600}  height={40} />}
      {modal==='false' &&  <Modal text={`ПЫТАЕШЬСЯ ОБМАНУТЬ \n МЕНЯ?!`} timer={600}  height={40} />}
      {covered==='gamerRaise' && <Modal text={`И ЭТО ТОЖЕ ЗАБИРАЙ ВПРИДАЧУ!`} timer={900}  height={40} />}
      {modal==='winner' && winner==='human' && <Modal 
        text={`${data.name ? `${data.name},` : ''} ТЫ - ПОБЕДИТЕЛЬ${data.gender==='F' ? 'НИЦА' : ''}!!!!! \t\n А я остался ДУРАКОМ!!!` }  
        timer={3000} height={60} />}
      {modal==='winner' && winner==='mashine' && <Modal 
        text={`Я - ПОБЕДИТЕЛЬ!!!! \t\n А ТЫ${data.name ? `, ${data.name}` : ''} - ${data.gender==='F' ? 'ДУРОЧКА' : 'ДУРАК'} , ха-ха-ха)))))`} 
        timer={3000} height={60} />}
      {modal==='winner' && winner==='НИЧЬЯ' && <Modal 
        text={`НИЧЬЯ!!!`} timer={3000} height={30} />}
      {deck.length===36 ? 
              data.count>0 ? 
              <div>
                <p className={styles.text}>НУ ЧТО, МОЙ ДРУГ!!! ПРОДОЛЖИМ ИГРУ?</p>
                  <ListGenerate ulStyle={styles.deckCardLibre} list={deck} classStyle={styles.card} cards={true} children childrenStyle={styles.button2} 
                    func={distribution} childrenText={'ДА! ПРОДОЛЖИМ! ЧЁ НЕТ-ТО?! РАЗДАТЬ КАРТЫ!'}/>
                  </div> :
              <ListGenerate ulStyle={styles.deckCardLibre} list={deck} classStyle={styles.card} cards={true} children childrenStyle={styles.button} 
                func={distribution} childrenText={'РАЗДАТЬ КАРТЫ!'}/>
                : 
          <div className={styles.gameField}>
            {(move==='mashine' && (modal==='firstMove' || modal==='waiting') && gamerCards.length===6 && computerCards.length===6 && deck.length===23) && 
              <Modal text={`${(data.count>0 && winner==='mashine') ? "Я ВЫИГРАЛ - " : ""} ${(first!==null && first.value.basicMeaning===6) 
                ? `У МЕНЯ КОЗЫРНАЯ 6\n` : ''} Я ХОЖУ ПЕРВЫМ!`} 
              timer={800} height={40} />}
            {(move==='human' && (modal==='firstMove' || modal==='waiting')  && gamerCards.length===6 && computerCards.length===6 && deck.length===23) && 
              <Modal text={`${(data.count>0 && winner==='human') ? `ТЫ ВЫИГРАЛ${data.gender==='F' ? 'A' : ''} - ` : 
              `${data.name ? `${data.name},` : ''} ТЕБЕ НЕСКАЗАННО ПОВЕЗЛО!`} \n ТЫ ХОДИШЬ ПЕРВ${data.gender==='F' ? 'ОЙ!' : 'ЫМ!'}`} 
                timer={700} height={50} />}
                 {(modal==='waiting' && move==='') && 
                <button className={styles.nonCards} onClick={() => gamerMove(null)}>
                    {`У МЕНЯ НЕТ КОЗЫРЕЙ(((`} 
                </button>}
            <div className={styles.fieldGame}>
            {(modal==='bito' && gameList.length%2===0 && covered==='') && 
              <Modal text={`БИТО! \n ТЫ ХОДИШЬ!`} timer={700} height={30} /> }
              {(move==='mashine' && gameList.length%2>0 && modal!=='firstMove' && covered==="gamerRaise") && 
                <ListGenerate ulStyle={styles.deckCardGame} list={gameList} classStyle={styles.card2} 
                cards={true} flag={true} gamePlay={true} />}
              {(move==='mashine' && gameList.length%2>0 && modal!=='firstMove' && covered!=="gamerRaise") && 
                <ListGenerate ulStyle={styles.deckCardGame} list={gameList} classStyle={styles.card2} 
                cards={true} flag={true} gamePlay={true}
                children childrenStyle={styles.buttonGame} 
                func={raiseCards} childrenText={'ЗАБЕРУ!'} />}
              {((move==='human' || move==='') && gameList.length>0 && gameList.length%2!==0) &&
                <ListGenerate ulStyle={styles.deckCardGame} list={gameList} classStyle={styles.card2} cards={true} flag={true} gamePlay={true}/>}
              {(move==='human' && gameList.length>0 && gameList.length%2===0) &&
                <ListGenerate ulStyle={styles.deckCardGame} list={gameList} classStyle={styles.card2} cards={true} flag={true} gamePlay={true}
                children childrenStyle={styles.buttonGame} func={handlClick} childrenText={'БИТО!'} />}
              {(move==='human' && covered==='raise' && gameList.length===0 && gamerCards.length>0) && 
                <ListGenerate ulStyle={styles.deckCardGame} list={gameList} classStyle={styles.card2} cards={true} flag={true} gamePlay={true}
                children childrenStyle={styles.buttonGameFin} func={handlClick} 
                childrenText={`${ (trump.length>0 && gamerCards.length<6) ? 'ВСЁ! МНЕ КАРТЫ НУЖНЫ' : 'ПОКА ВСЁ! ПОЕХАЛИ ДАЛЬШЕ ТЕБЯ ТОПИТЬ!'}`} />}
            </div>                
                {(trump.length>0 && deck.length) ? 
                  <ListGenerate ulStyle={styles.deckCardTrump} list={trump} classStyle={styles.trump} flag={true}/>
                  : 
                  <ListGenerate ulStyle={styles.deckCard} list={trump} classStyle={styles.card} flag={true}/>}  
                {deck.length>0 && <ListGenerate ulStyle={styles.deckCard} list={deck} classStyle={styles.card} cards={true}/>}
          </div> 
    }
    </div> 
        {gamerCards.length>0 && <ListGenerate ulStyle={styles.gamers} list={gamerCards} 
        classStyle={styles.cards} funcItems={gamerMove} 
            flag={true} />} 
</div>
  );
}
