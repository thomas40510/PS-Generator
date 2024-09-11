/*
PS Generator
@author: PRV
@version: 1.3.1
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {txtContent} from './App';
import * as clipboard from "clipboard-js"

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

document.getElementById("btn").addEventListener("click", gen);
document.getElementById('copyBtn').addEventListener('click', copyToClip);

function gen(){
  //let s = document.getElementById("usrinput").textContent;
  console.log(txtContent.txt);
  let s = txtContent.txt;
  console.log(s);
  const n = document.getElementById('nbrPyramids').value;
  let L = s.split('\n');
  var res = "";
  if (n === 1){
    res = pyramid(L);
  } else{
    var M = chunkify(L, n, true);
    for (const el of M){
      res += pyramid(el);
    }
  }
  console.log(res);
  //document.getElementById('txtresult').value = res.toString();
  txtContent.result = res.toString();
  console.log("result >> "+txtContent.result);
  document.getElementById('txtresult').innerHTML = res.toString().replaceAll("<p>", "").replaceAll("</p>", "<br>");
  document.getElementById('txtresult').focus();
}

function pyramid(L){
  var s = "";
  var j = L.length;
  let len = L.length;
  var P = "P";
  console.log(P, len);
  for (let i = 1; i <= len; i++){
    if (i <= Math.floor(len / 2)){
      P = "P".repeat(i);
    } else{
      P = "P".repeat(j);
    }
    console.log("i = "+i,"j = "+ j);
    let tmp = P+'S: '+L[i-1];
    s += tmp + '\n';
    j--;
  }
  return s;
}

function chunkify(L, n, balanced) {

  if (n < 2)
    return [L];

  var len = L.length,
    out = [],
    i = 0,
    size;

  if (len % n === 0) {
    size = Math.floor(len / n);
    while (i < len) {
      out.push(L.slice(i, i += size));
    }
  }

  else if (balanced) {
    while (i < len) {
      size = Math.ceil((len - i) / n--);
      out.push(L.slice(i, i += size));
    }
  }

  else {

    n--;
    size = Math.floor(len / n);
    if (len % size === 0)
      size--;
    while (i < size * n) {
      out.push(L.slice(i, i += size));
    }
    out.push(L.slice(size * n));

  }

  return out;
}

function cpText(){
  /* --DEPRECATED--
  Copies resulting text to clipboard
   */
  let txt = document.getElementById('txtresult').textContent;
  setTimeout(async()=>console.log(
    await window.navigator.clipboard.writeText(txt)), 3000)
  //navigator.clipboard.writeText(txt);
  alert("Copié !");
}

function copyToClip(){
  /*
  Fixes clipboard problem and enables copy of rich text using clipboard-js module
   */
  let str = document.getElementById('txtresult').innerHTML;
  let fallBackStr = document.getElementById('txtresult').innerText;
  clipboard.copy({
    "text/plain": fallBackStr,
    "text/html": str,
  });
  console.log('copied');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
