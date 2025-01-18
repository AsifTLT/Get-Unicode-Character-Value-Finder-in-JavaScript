/*
===================================================
Project Name: Get Unicode Character
Author: Md Asif
Copyright © 2025 Md Asif
License: MIT
===================================================
*/

function detectChar() {
    const input = document.getElementById("inputType").value;
  
    if (input) {
      const unicodeValue = input.charCodeAt(0);
      const result = `The Unicode value of "${input}" is ${unicodeValue}`;
      document.getElementById('result').textContent = result;
    } else {
      document.getElementById('result').textContent = "Please Enter a Character";
    }
  }