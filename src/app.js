/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  let element = randomItem(who);
  let element2 = randomItem(action);
  let element3 = randomItem(what);
  let element4 = randomItem(when);

  function excuse(a, b, c, d) {
    return a + " " + b + " " + c + " " + d;
  }

  function printExcuse() {
    document.getElementById("excuse").innerHTML = excuse(
      element,
      element2,
      element3,
      element4
    );
  }

  printExcuse();
};
