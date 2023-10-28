import React, { memo } from "react";
import { Field } from "../Field";
import { Diamond, OfClubs, OfHearts, OfSpades } from "../../Icons";
import { TypeDeck, TypeDeckItems } from "../../../GamePlay/cardsDeck";
import styles from "./listGenerate.css";

export const getSuitComponent = (suitMy: string) => {
  switch (suitMy) {
    case "ofHearts":
      return <OfHearts />;
    case "ofClubs":
      return <OfClubs />;
    case "ofSpades":
      return <OfSpades />;
    default:
      return <Diamond />;
  }
};
interface IListGenerate {
  ulStyle: any;
  list: TypeDeckItems;
  classStyle: any;
  funcItems?: (card?: any) => void | undefined;
  shadow?: boolean;
  cards?: boolean;
  flag?: boolean;
  gamePlay?: boolean;
  noMargin?: boolean;
  children?: React.ReactNode;
  func?: (card?: any) => void | undefined;
  childrenStyle?: any;
  childrenText?: string;
}
export const ListGenerate = memo(
  ({
    list,
    ulStyle,
    classStyle,
    funcItems,
    shadow = false,
    cards = false,
    flag = false,
    gamePlay = false,
    noMargin = false,
    children = null,
    func,
    childrenStyle,
    childrenText,
  }: IListGenerate) => {
    const len = list.length;
    const arr = Array.from({ length: 3 });
    return (
      <ul className={ulStyle}>
        {list.map((card: TypeDeck, index: number) => (
          <li
            key={Math.random().toString(36).substring(2, 15)}
            onClick={funcItems ? () => funcItems(card) : () => console.log()}
            className={classStyle}
            style={
              cards
                ? {
                    transform: !gamePlay
                      ? !noMargin
                        ? `translate(${-index / 2}px, ${-index / 2}px)`
                        : `translateX(${index * (600 / len)}%)`
                      : `translate(${index * 22}%, ${-index * 2}%) 
                rotate(${
                  len > 1
                    ? index < Math.floor(len / 2)
                      ? -len + index
                      : len + index
                    : 0
                }deg)`,
                  }
                : {}
            }
          >
            <Field
              flag={flag}
              value={list[index].value.valueMain}
              shadow={shadow}
            >
              <div
                className={
                  !flag ? styles.cardContent : styles.cardContentActive
                }
              >
                <div className={styles.value}>
                  <span className={styles.valueMain}>
                    {list[index].value.valueMain}
                  </span>
                  <div className={styles.imageSmall}>
                    {getSuitComponent(list[index].suit)}
                  </div>
                </div>
                <div className={styles.cardSuit}>
                  {list[index].value.basicMeaning > 10 ? (
                    <div className={styles.image}>
                      {getSuitComponent(list[index].suit)}
                    </div>
                  ) : (
                    <div className={styles.plentyOfImage}>
                      {arr.slice(0, 2).map(() => (
                        <div
                          key={Math.random().toString(36).substring(2, 15)}
                          className={styles.plentyOfImageSmall}
                        >
                          {arr.map(() => (
                            <div
                              key={Math.random().toString(36).substring(2, 15)}
                              className={styles.plenty}
                            >
                              {getSuitComponent(list[index].suit)}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.valueDown}>
                  <span className={styles.valueMain}>
                    {list[index].value.valueMain}
                  </span>
                  <div className={styles.imageSmall}>
                    {getSuitComponent(list[index].suit)}
                  </div>
                </div>
              </div>
            </Field>
          </li>
        ))}
        {children && (
          <button
            className={childrenStyle}
            onClick={() => {
              func && func();
            }}
          >
            {childrenText}
          </button>
        )}
      </ul>
    );
  }
);
