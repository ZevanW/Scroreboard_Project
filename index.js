let homeTotal = 0
let guestTotal = 0

let homeTotalEl = document.getElementById("home-total")
let guestTotalEl = document.getElementById("guest-total")



function add1(){
    homeTotal += 1
    homeTotalEl.textContent = homeTotal
}
    

function add2(){
    homeTotal += 2
    homeTotalEl.textContent = homeTotal
}

function add3(){
    homeTotal += 3
    homeTotalEl.textContent = homeTotal
}

function add4(){
    guestTotal += 1
    guestTotalEl.textContent = guestTotal
}

function add5(){
    guestTotal += 2
    guestTotalEl.textContent = guestTotal
}

function add6(){
    guestTotal += 3
    guestTotalEl.textContent = guestTotal
}