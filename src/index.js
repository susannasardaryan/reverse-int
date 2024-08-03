module.exports = function reverse (n) {
    if(n<0) n*=-1;

  let str = n.toString();

  str = str.split('').reverse().join('');
  return +str;
}
