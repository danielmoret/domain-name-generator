/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let newArray = [];
  let dominio = [".com", ".net", ".us", ".io"];

  //Utilizando for...of
  for (const element1 of pronoun) {
    for (const element2 of adj) {
      for (const element3 of noun) {
        newArray.push(
          `${element1}${element2}${element3}${
            dominio[Math.floor(Math.random() * dominio.length)]
          }`
        );
      }
    }
  }

  //Utilizando for..
  /* for (let i = 0; i < pronoun.length; i++) {
   for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
        newArray.push(
          `${pronoun[i]}${adj[j]}${noun[k]}${
            dominio[Math.floor(Math.random() * dominio.length)]
                }`
            );
        }
    }
}
*/

  //Utilizando for...in
  /*  for (const pronounKey in pronoun) {
    for (const adjKey in adj) {
        for (const nounKey in noun) {
            newArray.push(
          `${pronoun[pronounKey]}${adj[adjKey]}${noun[nounKey]}${
            dominio[Math.floor(Math.random() * dominio.length)]
          }`
        );
      }
}
} */

  console.log(newArray);
};
