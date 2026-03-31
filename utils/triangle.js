/*
  File: triangle.js
  Author: Pók László,
  Copyright: 2026, Pók László
  Group: Szoft II-N
  Date: 2026-03-31
  Github: https://github.com/poklaszlo
  Licenc: MIT
*/

function calcArea(aSide,bSide,cSide){
    const s = (aSide+bSide+cSide)/2
    const area = Math.sqrt(s*(s-aSide)*(s-bSide)*(s-cSide))
    return area
}

// function calcArea({base, height}){
//     const area = (base*height)/2
//     return area
// }

// function calcArea({aSide,bSide,gammaAngle}){
//     const area = (aSide*bSide*Math.sin(gammaAngle))/2
//     return area
// }

export {calcArea}