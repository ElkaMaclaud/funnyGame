export const confetty = `<svg width="600" height="90" viewBox="0 0 600 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="42" y="0" width="6" height="10"/>
<rect x="84" y="0" width="6" height="10"/>
<rect x="126" y="0" width="5" height="13"/>
<rect x="168" y="0" width="5" height="13"/>
<rect x="210" y="0" width="6" height="10"/>
<rect x="252" y="0" width="5" height="13"/>
<rect x="294" y="0" width="6" height="10"/>
<rect x="336" y="0" width="5" height="13"/>
<rect x="378" y="0" width="5" height="13"/>
<rect x="420" y="0" width="6" height="10"/>
<rect x="462" y="0" width="6" height="10"/>
<rect x="504" y="0" width="5" height="13"/>
<rect x="546" y="0" width="6" height="10"/>

<style type="text/css">
    rect {
        opacity: 0;
    }
    rect:nth-child(1) {
        transform-origin: 45px 5px;
        transform: rotate(-145deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 88ms;
        animation-duration: 631ms;
    }
    rect:nth-child(2) {
        transform-origin: 87px 5px;
        transform: rotate(164deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 131ms;
        animation-duration: 442ms;
    }
    rect:nth-child(3) {
        transform-origin: 128px 6px;
        transform: rotate(4deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 92ms;
        animation-duration: 662ms;
    }
    rect:nth-child(4) {
        transform-origin: 170px 6px;
        transform: rotate(-175deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 17ms;
        animation-duration: 593ms;
    }
    rect:nth-child(5) {
        transform-origin: 213px 5px;
        transform: rotate(-97deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 122ms;
        animation-duration: 476ms;
    }
    rect:nth-child(6) {
        transform-origin: 255px 6px;
        transform: rotate(57deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 271ms;
        animation-duration: 381ms;
    }
    rect:nth-child(7) {
        transform-origin: 297px 5px;
        transform: rotate(-46deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 131ms;
        animation-duration: 619ms;
    }
    rect:nth-child(8) {
        transform-origin: 338px 6px;
        transform: rotate(-65deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 85ms;
        animation-duration: 668ms;
    }
    rect:nth-child(9) {
        transform-origin: 380px 6px;
        transform: rotate(13deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 128ms;
        animation-duration: 377ms;
    }
    rect:nth-child(10) {
        transform-origin: 423px 5px;
        transform: rotate(176deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 311ms;
        animation-duration: 508ms;
    }
    rect:nth-child(11) {
        transform-origin: 465px 5px;
        transform: rotate(108deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 108ms;
        animation-duration: 595ms;
    }
    rect:nth-child(12) {
        transform-origin: 506px 6px;
        transform: rotate(62deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 105ms;
        animation-duration: 375ms;
    }
    rect:nth-child(13) {
        transform-origin: 549px 5px;
        transform: rotate(16deg);
        animation: blast 700ms infinite ease-out;
        animation-delay: 149ms;
        animation-duration: 491ms;
    }
    rect:nth-child(odd) {
        fill: #65BB5C;
    }
    rect:nth-child(even) {
        z-index: 1;
        fill: #33AAFF;
    }
    rect:nth-child(4n) {
        animation-duration: 1400ms;
        fill: #F23B14;
    }
    rect:nth-child(3n) {
        animation-duration: 1750ms;
        animation-delay: 700ms;
    }
    rect:nth-child(4n-7) {
        fill: #2A2F6A;
    }
    rect:nth-child(6n) {
        fill: #FBBA23;
    }

    @keyframes blast {
        from {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        to {
            transform: translateY(90px);
        }
    }
</style>
</svg>`