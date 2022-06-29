module.exports = function reverse (n) {
    n = n + "";
    return  Number( n.split("").reverse().join(""));
});
  
}
