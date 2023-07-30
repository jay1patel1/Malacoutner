let japcount = document.getElementById("japCountText");
let totalmala = document.getElementById("totalMalaText");

let count = 0;
let malacount = 0;

function jap() {
    count += 1;
    malacount = count/108;
    let a = Math.floor(malacount);
    japcount.innerText = count
    totalmala.innerText = a;
}

function reset1() {
    count = 0;
    malacount = 0;
    japcount.innerText = count
    totalmala.innerText = malacount;
}