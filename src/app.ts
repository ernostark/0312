/*
* File: app.ts
* Author: Stark Ernő
* Copyright: 2024, Stark Ernő
* Group: SZOFT II/2/E
* Date: 2024-11-26
* Github: https://github.com/ernostark
* Licenc: GNU GPL
*/

const doc = {
    sideInput: document.querySelector('#side')! as HTMLInputElement,
    alphaInput: document.querySelector('#alpha')! as HTMLInputElement,
    calcButton: document.querySelector('#calcButton')! as HTMLButtonElement,
    resultInput: document.querySelector('#result')! as HTMLInputElement
}

doc.calcButton.addEventListener('click', () => {
    const side = Number(doc.sideInput.value);
    const alpha = Number(doc.alphaInput.value);
    const result = 0.5 * side * Math.sin(alpha);
    doc.resultInput.value = result.toFixed(2);
});