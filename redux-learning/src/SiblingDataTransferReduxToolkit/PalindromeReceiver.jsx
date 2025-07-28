import React from 'react';
import { useSelector } from 'react-redux';

const PalindromeReceiver = () => {
  const text = useSelector((state) => state.palindrome.inputString);

  const isPalindrome = (str) => {
    const pureText = str.toLowerCase().split('').filter(c => /[a-z0-9]/.test(c)).join('');
    return pureText === pureText.split('').reverse().join('');
  };

  return (
     <div className="receiver-container">
      <h2 className="title">Palindrome Receiver</h2>
      <p><strong>Input:</strong> {text || '—'}</p>
      {text && (
        <p className="result" style={{ color: isPalindrome(text) ? 'green' : 'red' }}>
          {isPalindrome(text) ? ' Palindrome!' : ' Not a palindrome'}
        </p>
      )}
    </div>
  );
};

export default PalindromeReceiver;
