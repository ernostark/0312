"use strict";
const doc = {
    sideInput: document.querySelector('#side'),
    alphaInput: document.querySelector('#alpha'),
    calcButton: document.querySelector('#calcButton'),
    resultInput: document.querySelector('#result')
};
doc.calcButton.addEventListener('click', () => {
    const side = Number(doc.sideInput.value);
    const alpha = Number(doc.alphaInput.value);
    const result = 0.5 * side * Math.sin(alpha);
    doc.resultInput.value = result.toFixed(2);
});
