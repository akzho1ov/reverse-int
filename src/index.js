module.exports = function reverse (n) {
   let result = n.toString().split("").reverse().join("");


    if (result.endsWith("-")) {
     result = '+' + result ;
            return parseInt(result);
    }else {
        return parseInt(result)
    }
}
