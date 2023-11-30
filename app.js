var first = document.getElementById('first');
var second = document.getElementById('second');
var change = document.getElementById('change');
var result1 = document.getElementById('result1');


const arr1 = [];
const arr2 = [];


// For left side

function add() {
    let arrPush = arr1.push(first.value);
    result1.innerHTML = arr1.toString();
    first.value = "";
}

function popInput() {
    let arrPop = arr1.pop(first.value);
    result1.innerHTML = arr1.toString();
    first.value = "";
}

function shiftInput() {
    let arrShift = arr1.shift(first.value);
    result1.innerHTML = arr1.toString();
    first.value = "";
}

function unshiftInput() {
    let arrunShift = arr1.unshift(first.value);
    result1.innerHTML = arr1.toString();
    first.value = "";
}

function spliceInput() {
    let arrSplice = arr1.splice(second.value, change.value, first.value);
    result1.innerHTML = arr1.toString();
    first.value = "";
    second.value = "";
    change.value = "";
}

function sliceInput() {
    let arrSlice = arr1.slice(second.value, change.value);
    result1.innerHTML = arr1.toString();
    first.value = "";
    second.value = "";
    change.value = "";
}

// For right side

var rfirst = document.getElementById('rfirst');
var rsecond = document.getElementById('rsecond');
var rchange = document.getElementById('rchange');
var middle = document.getElementById('middle');
var rresult1 = document.getElementById('rresult1');


function radd() {
    let rarrPush = arr2.push(rfirst.value);
    rresult1.innerHTML = arr2.toString();
    rfirst.value = "";
}

function rpopInput() {
    let rarrPop = arr2.pop(rfirst.value);
    rresult1.innerHTML = arr2.toString();
    rfirst.value = "";
}

function rshiftInput() {
    let rarrShift = arr2.shift(rfirst.value);
    rresult1.innerHTML = arr2.toString();
    rfirst.value = "";
}

function runshiftInput() {
    let rarrunShift = arr2.unshift(rfirst.value);
    rresult1.innerHTML = arr2.toString();
    rfirst.value = "";
}

function rspliceInput() {
    let rarrSplice = arr2.splice(rsecond.value, rchange.value, rfirst.value);
    rresult1.innerHTML = arr2.toString();
    rfirst.value = "";
    rsecond.value = "";
    rchange.value = "";
}

function rsliceInput() {
    let rarrSlice = arr2.slice(rsecond.value, rchange.value);
    rresult1.innerHTML = arr2.toString();
    rfirst.value = "";
    rsecond.value = "";
    rchange.value = "";
}


// For concate side




var middle = document.getElementById('middle');
var resultConcat = document.getElementById('resultConcat');


function arrConcat() {
    let book = arr1.concat(arr2);
    resultConcat.innerHTML = book;
}

function arrJoin() {
    let middle = document.getElementById("middle").value;
    let joinResult = arr1.join(middle) + middle + arr2.join(middle);
    resultConcat.innerHTML = joinResult;
    middle.value = "";
}











