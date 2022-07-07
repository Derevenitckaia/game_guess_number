'use strict';

const x = function() {
    console.log(23);
};

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value);
});