export const parseSumAsLocal = (amount) => {
    const pluralRules = new Intl.PluralRules('ru', { type: 'cardinal' });  
    const rule = pluralRules.select(amount);  

    let ending;  

    switch (rule) {  
        case 'one':  
            ending = 'рубль'; // 1, 21, 31, 41 и т.д.  
            break;  
        case 'few':  
            ending = 'рубля'; // 2, 3, 4, 22, 23, 24 и т.д.  
            break;  
        case 'many':  
        case 'other':  
            ending = 'рублей'; // 0, 5-20, 25-30 и т.д.  
            break;  
    }  

    return `${amount} ${ending}`;  
}