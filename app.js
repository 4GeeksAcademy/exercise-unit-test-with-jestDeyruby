
function fromEuroToDollar (euroValue){
    return euroValue* 1.07
}


function fromDollarToYen (dollarValue){
    return dollarValue * 156.5/1.07
}
console.log (fromDollarToYen(300))

function fromYenToPound (yenValue){
    return yenValue * 0.876/156.5
}

console.log(fromYenToPound(100))
module.exports = {fromEuroToDollar , fromDollarToYen, fromYenToPound}