export let text = "Welcome to My Country";

export function setText(txt) {
    text = txt;
}

//create function in module to find sum
export let sum = (a,b) =>{
    sum = a+b;
    return sum;
}

//create a function to find product 
export let prod = (x,y)=>{
    prod = x*y;
    return prod;
}

//to create function to calculate the binary number to decimal 
let  binDec = (bindec)=>{
    binDec = parseInt((bindec + '').replace(/[^01]/gi, ''),2);
    return binDec;
}
export {binDec as binaryToDecimal};