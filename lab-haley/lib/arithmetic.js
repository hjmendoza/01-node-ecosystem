var arithmetic = {
  add: function(num1, num2){
    if(typeof num1  !== 'number'|| typeof num2 !== 'number') {
      return null;
    } 
    return (num1 + num2);
  },

  sub: function(num1, num2){
    if(typeof num1  !== 'number'|| typeof num2 !== 'number') {
      return null;
    } 
    return (num2 - num1);
  },
};

module.exports = arithmetic;