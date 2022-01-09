module.exports = function toReadable (number) {
  let a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  let numberString = number.toString();

  if (number < 0) 
      return 'undefined';

  if (number === 0) 
      return 'zero';

  // от 1 - 20
  if (number < 20){
      return a[number];
  } else if (number >= 20 && number <= 99){
      // от 21 - 99
      if (numberString[1] === '0') {
          return b[numberString[0]];
      } else {
          return b[numberString[0]] + ' ' + a[numberString[1]];
      }
  } else {
      //oт 100-999
      let ret = '';
      let decade = parseInt(numberString[1]+numberString[2]);
      ret += a[numberString[0]] + ' hundred';

      if (decade < 20 && decade > 0) {
          ret += ' ' + a[parseInt(numberString[1]+numberString[2])];
      } else if (decade >= 20){
          // от 21 - 99
          if (numberString[2] === '0') {
              ret += ' ' + b[numberString[1]];
          } else {
              ret += ' ' + b[numberString[1]] + ' ' + a[numberString[2]];
          }
      }
      
      return ret;
  }

}

