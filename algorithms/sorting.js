let arraySize = document.querySelector('#arr_size');
let array = [];

// create new array when visit website 1st time
createNewArray();

function createNewArray(noOfBars = 50) {
    deleteChild();

    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }

    const bars = document.querySelector("#bars");
    // creating bars
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Disables sorting buttons when a algorithm is selected
function disableEverything(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".heapSort").disabled = true;
    arraySize.disabled = true;
    document.querySelector(".newArray").disabled = true;
}

// Enables sorting buttons after sorting is complete
function enableEverything(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".heapSort").disabled = false;
    arraySize.disabled = false;
    document.querySelector(".newArray").disabled = false;
}

// Adding delay for animation
function wait(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)) 
}

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log("size : " + arraySize.value);
    createNewArray(arraySize.value);
});

// Default delay
let delay = 260;

let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - delayElement.value;
    console.log("Delay : " + delay + " ms");
});

// delete all bars
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// function for newArray button
const newArray = document.querySelector(".newArray");

newArray.addEventListener("click", function(){
    console.log("array size: " + arraySize.value + ", speed: " + delay + " ms");
    createNewArray(arraySize.value);
});
