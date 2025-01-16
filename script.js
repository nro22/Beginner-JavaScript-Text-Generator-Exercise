const textarea = document.querySelector('[name="text"]'); //textarea element
const result = document.querySelector('.result'); //result paragraph
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]')); //array of the input radio button elements
let random;
filterInputs.forEach((input) =>
    input.addEventListener("input", myHandler)
);
function myHandler(){
    if (this.id === 'unable'){
        random = Math.ceil(Math.random() * 3);
    }
    transformText(textarea.value);
    this.style.height = 'auto';
}
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};

const filters =  {
    sarcastic: function(inputArr) {
        inputArr.forEach((elem,index) =>{
            if (!(index % 2)){
                inputArr[index] = elem.toUpperCase();
            }
        });
        // for (let i=0; i<inputArr.length ; i+=2){
        //     inputArr[i] = inputArr[i].toUpperCase();
        // }
        return inputArr;
    },
    funky: function(inputArr) {
        for (let i=0; i<inputArr.length ; i++){
            inputArr[i] = funkyLetters[inputArr[i]];
        }
        return inputArr;
    },
    unable: function(inputArr) {
        for (let i=random-1; i<inputArr.length ; i+=3){
            if (inputArr[i] === ' '){
                inputArr[i] = '...';
            }
        }
        return inputArr;
    },
}

//could pass target instead of the value and change inner html in function?
// better to use textContent to grab the actual content of the paragraph rather than the element
textarea.addEventListener('input', e => transformText(e.target.value));

function transformText(text) {
    //const filter = document.querySelector('[name="filter"]:checked').value;
    const filter = filterInputs.find(input => input.checked).id;
    // console.log(filter);
    // filters[filter];
    result.textContent = filters[filter](Array.from(text)).join('');
    // result.textContent = (filters[filter](Array.from(text))).join('');
  }