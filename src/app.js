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
  let quien = randomItem(who);
  let accion = randomItem(action);
  let que = randomItem(what);
  let cuando = randomItem(when);

  function excuse(a, b, c, d) {
    return a + " " + b + " " + c + " " + d;
  }
// Esta funcion me imprime la excusa
  function printExcuse() {
    document.getElementById("excuse").innerHTML = excuse(
      quien,
      accion,
      que,
      cuando
    );
  }

  printExcuse();
};
