function countBs(letter) {
    let counter = 0;
    for (let index = 0; index < letter.length; index++) {
        if (letter[index] == 'B' ) {
            counter = counter + 1;
        }
    }
    return counter;
}
console.log("Cümlede ki büyük B sayisi: " + countBs('Bu cümlede 2 tane büyük B harfi vardır.'));

function countChar(bean,beanLetter) {
    let counterBean = 0;
    for (let index = 0; index < bean.length; index++) {
        if (bean[index] == `${beanLetter}`) {
            counterBean++;
        }
    }
    return counterBean;
}
console.log(countChar("uvuvwevwevwe onyetenyevwe ugwemuhwem osas","e"));