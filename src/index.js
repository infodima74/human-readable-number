module.exports = function toReadable (number) {
  let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
let numberString = number.toString();
  if (number < 0) 
  throw new Error('undefined');
  if (number === 0) 
  return 'zero';
   //от 1 - 20
   if (number < 20) {
    return a[number];
  }
  //от 21 - 99
  if (numberString.length === 2) {
    return b[numberString[0]] + ' ' + a[numberString[1]];
  }
 //oт 100-999
 if (numberString.length === 3) {
  if (numberString[1] === '0' && numberString[2] === '0')
      return a[numberString[0]] + ' hundred';
    else
      return a[numberString[0]] + ' hundred' + ' ' +  b[numberString[1]]+ ' ' +  a[numberString[2]];

  }
}
  
