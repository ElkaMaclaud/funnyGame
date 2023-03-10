import React from "react";

interface ICard {
    width?: number;
    height?: number;
}

export const OfClubs = ({width=60, height=90}: ICard) => {
    const widthValue =`${width}pt`
    const heightValue =`${height}.000000pt`
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={widthValue} height={heightValue} viewBox="0 0 495.000000 589.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,589.000000) scale(0.100000,-0.100000)"
            fill="#ff0000" stroke="none">
            <path d="M2271 5407 c-473 -764 -1079 -1590 -1708 -2329 -73 -86 -133 -159
            -133 -162 0 -3 31 -41 68 -83 221 -252 618 -745 857 -1063 314 -418 652 -912
            890 -1302 l120 -197 16 27 c528 871 1127 1694 1819 2497 48 55 90 106 94 113
            5 8 -41 69 -127 170 -627 737 -1205 1524 -1682 2288 -65 104 -118 190 -119
            191 -1 1 -43 -67 -95 -150z"/>
            </g>
            </svg>
    )
}

