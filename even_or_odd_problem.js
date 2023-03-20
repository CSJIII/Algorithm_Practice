function evenOrOdd(number) {
    if (number % 2) {
      return "Odd";
    } else {
      return "Even";
    }
  }
  
  console.log(evenOrOdd(15));

/* I used the modulo operator to check if the number has a remainder because if it does, that means that it cannot be even since even numbers never have a remainder when divided! */

/*  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript */