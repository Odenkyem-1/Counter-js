//Counter

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const value = document.getElementById("initialValue");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    value.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    value.textContent = count; 
}

resetBtn.onclick = function(){
    count = 0;
    value.textContent = count; 
}