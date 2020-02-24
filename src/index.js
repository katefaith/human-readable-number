module.exports = function toReadable(number) {
    let readable = '';
    let str = number + '';
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let ten_to_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    switch (str.length) {
        case 1:
            readable = ones[str[0]];
            return readable;

        case 2:
            if (str[1] === '0') { // если 2-ая цифра 0
                console.log('вторая цифра 0:');
                readable = tens[str[0]];
                return readable;
            }
            if (str[0] === '1') { // если 1-ая цифра 1
                console.log('10 - 19:');
                readable = ten_to_nineteen[str[1]];
                return readable;
            } else { // первая цифра не 1
                console.log('20 - 99:');
                readable = tens[str[0]] + ' ' + ones[str[1]];
                return readable;
            }

        case 3:
            readable = ones[str[0]] + ' hundred';
            if (str[2] === '0') { // если 3-я цифра 0
                if (str[1] === '0') { // если 2-я цифра 0
                    return readable;
                }
                readable += ' ' + tens[str[1]];
                return readable;
            }
            if (str[1] === '1') { // если 2-я цифра 1
                readable += ' ' + ten_to_nineteen[str[2]];
                return readable;
            } else { // 2-я цифра не 1
                if (str[1] === '0') { // если 2-я цифра 0
                    readable += ' ' + ones[str[2]];
                    return readable;
                }
                readable += ' ' + tens[str[1]] + ' ' + ones[str[2]];
                return readable;
            }
    }
}
