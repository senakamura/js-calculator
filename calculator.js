/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){
  var memory = 0;
  var total = 0;

  var calculator = {
    load: validate(_load),
    getTotal: _getTotal,
    add: validate(_add),
    subtract: validate(_subtract),
    multiply: validate(_multiply),
    divide: validate(_divide),
    recall: _recall,
    save: _save,
    clear: _clear,
  };

  return calculator;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   function _load(x){
    // if (typeof x != "number"){
    //   return "error";
    // }
    total = x;
    return total;
   }

   function validate(fn){
    return function (x){
      if(typeof x != "number"){
        return "error";
      }
      return fn(x);
    };
   }
  /**
   * Return the value of `total`
   * @return { Number }
   */

   function _getTotal(){
    return total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function _add(x){
    // if (typeof x != "number"){
    // return "error";
    // }
    total += x;
    return total;
   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function _subtract(x){
    // if (typeof x != "number"){
    // return "error";
    // }
    total -= x;
    return total;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function _multiply(x){
    // if (typeof x != "number"){
    // return "error";
    // }
    total *= x;
    return total;
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function _divide(x){
    // if (typeof x != "number"){
    // return "error";
    // }
    total /= x;
    return total;
   }


  /**
   * Stores the value of `total` to `memory`
   */


   function _save(){
    memory = total;
    return memory;
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function _recall(){
    return memory;
   }


  /**
   * Clear the value stored at `memory`
   */

   function _clear(){
    memory = 0;
    return memory;
   }
}