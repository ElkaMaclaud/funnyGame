import React from "react";

interface ICard {
    width?: number;
    height?: number;
}

export const OfHearts = ({width=60, height=90}: ICard) => {
    const widthValue =`${width}pt`
    const heightValue =`${height}.000000pt`
    return (      
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={widthValue} height={heightValue} viewBox="0 0 593.000000 597.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,597.000000) scale(0.100000,-0.100000)"
        fill="#ff0000" stroke="none">
        <path d="M1626 5639 c-297 -43 -564 -213 -734 -467 -237 -356 -240 -850 -7
        -1326 121 -247 199 -361 771 -1128 683 -913 899 -1234 1078 -1597 99 -202 172
        -386 234 -588 26 -84 50 -149 53 -145 4 4 19 50 34 102 57 196 187 514 288
        700 198 370 508 821 961 1403 595 764 775 1049 906 1437 101 298 124 620 61
        841 -69 243 -233 464 -450 607 -180 118 -322 162 -556 169 -225 7 -361 -20
        -542 -109 -313 -153 -536 -433 -668 -839 -15 -46 -31 -87 -35 -92 -3 -4 -17
        23 -30 60 -119 340 -292 593 -520 762 -235 175 -550 253 -844 210z"/>
        </g>
        </svg>
    )
}





