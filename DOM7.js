const h3 = document.createElement('h3');
const h3Text = document.createTextNode('Buy high quality organic fruits online');
h3.appendChild(h3Text);
h3.style.fontStyle = 'italic';
const header = document.getElementById('header'); header.appendChild(h3);
const para = document.createElement('p');
const paraText = document.createTextNode('Total Fruits: 4'); para.appendChild(paraText);
para.id = 'fruits-total';
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];

const fruits = document.querySelector('.fruits'); secondDiv.insertBefore(para, fruits);