// let name = 'Alex'
// let money = 10000
// let account = 7777

let name = prompt('What is your name?').toLowerCase().trim()
if(name === 'alex'){
    alert('welcome mr.' + name)
} else {
    alert('user has not been found')
}

let account = prompt('please, your account number?').toLowerCase().trim()
if (account === '7777'){
    alert('continue')
} else {
    alert('error')
}

let money = prompt('how much do you want to do cash?').toLowerCase().trim()
if(money <= 10000){
    alert('it is being converted')
} else {
    alert('shortage of money')
} 