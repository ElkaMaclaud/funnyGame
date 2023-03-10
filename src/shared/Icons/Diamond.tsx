import React from "react";

interface ICard {
    width?: number;
    height?: number;
}
export const Diamond = ({width=80, height=90}: ICard) => {
    const widthValue =`${width}pt`
    const heightValue =`${height}.000000pt`
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={widthValue} height={heightValue} viewBox="0 0 599.000000 597.000000"
        preserveAspectRatio="xMidYMid meet">
       
       <g transform="translate(0.000000,597.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M2905 5504 c-166 -25 -299 -67 -420 -133 -105 -56 -178 -112 -276
       -210 -187 -189 -290 -402 -319 -663 -30 -269 56 -560 255 -863 19 -27 15 -26
       -46 18 -175 124 -375 176 -629 164 -196 -10 -383 -71 -541 -177 -92 -62 -235
       -212 -297 -312 -132 -213 -191 -449 -179 -718 15 -331 130 -597 352 -815 239
       -234 557 -343 914 -314 510 41 949 356 1230 879 l51 95 0 -65 c0 -172 -36
       -446 -85 -643 -77 -310 -200 -534 -408 -745 -218 -222 -385 -318 -726 -421
       -112 -34 -202 -56 -478 -116 -17 -4 -24 -17 -33 -62 -7 -32 -15 -63 -17 -70
       -4 -11 342 -13 1807 -13 1446 0 1811 3 1807 13 -2 6 -10 38 -17 70 -10 44 -18
       58 -34 62 -12 3 -75 16 -141 30 -249 54 -497 129 -643 196 -212 96 -457 313
       -608 540 -179 269 -282 642 -300 1089 l-6 135 56 -103 c257 -473 645 -775
       1103 -858 127 -22 362 -20 478 4 453 97 789 438 886 897 26 123 35 309 20 428
       -61 484 -367 853 -798 963 -169 43 -395 43 -568 -1 -75 -19 -225 -92 -288
       -140 -26 -20 -47 -34 -47 -31 0 2 17 31 38 63 180 274 258 549 231 816 -26
       261 -129 476 -319 667 -167 169 -346 270 -570 321 -83 20 -362 34 -435 23z"/>
       </g>
       </svg>
    )
}



