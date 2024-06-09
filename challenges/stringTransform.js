function stringTransfrom(str) {
    const length = str.length;

    if (length % 15 === 0) {
       
        str = str.split('').reverse().join('');
        str = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
       
        str = str.split('').reverse().join('');
    } else if (length % 5 === 0) {
       
        str = str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return str;
}


console.log(stringTransfrom("Hamburger")); 
console.log(stringTransfrom("Pizza")); 
console.log(stringTransfrom("Chocolate Chip Cookie")); 
