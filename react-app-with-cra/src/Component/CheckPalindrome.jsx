import React from 'react';

const CheckPalindrome = ({ number }) => {
  const isPalindrome = (num) => {
    let originalNumber = num;
    let reversed = 0;
    while (num > 0) {
      let rem = num % 10;
      reversed = reversed * 10 + rem;
      num = (num / 10);
    }
    return originalNumber === reversed;
  };

  return (
    <div>
      {isPalindrome(number) ? (
        <p> palindrome</p>
      ) : (
        <p> not a palindrome</p>
      )}
    </div>
  );
};

export default CheckPalindrome;
