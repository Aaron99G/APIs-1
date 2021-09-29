const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let resBtn = document.querySelector('#button');

function btnClick() {
    console.log('Button Clicked');
}

btnClick.addEventListener('click', btnClick());

app.listen(5050, () => console.log('Server up!'))