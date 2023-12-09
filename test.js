const {fromEuroToDollar , fromDollarToYen, fromYenToPound} = require("./app.js");

test ("One euro should be 1.07 dollars", function(){
    

    
   
    expect(fromEuroToDollar(3.5)).toBe(3.745)
});


test ("One dollar should be 146.261682243 japan yen", function(){
    

    
   
    expect(fromDollarToYen(300)).toBe(43878.504672897194)
});


test ("One yen should be 0.0055974441 british pound", function(){
    
 
    expect(fromYenToPound(100)).toBe(0.5597444089456869)
});