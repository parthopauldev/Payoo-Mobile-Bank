
// function to get number value from the form 
function getNumberValue(id) {
   
    const amountString = document.getElementById(id).value;
   
    
    const amountNumber = parseInt(amountString);
    return amountNumber;
}
// function to get string value from the form 
function getStringValue(id) {
    const amountString = document.getElementById(id).value;
    
    return amountString;
}
// function to get inner text from the element
function getinnertext(id) {
    const text = document.getElementById(id).innerText;
    
    return text;
}
// function to set inner text from the element
function setInnerText(id,text) {
   document.getElementById(id).innerText =text;
    
  
}
    
    document.getElementById('add-money-btn').addEventListener('click', function(a){
       a.preventDefault();
       
   let validPin=123;
        // get values from the forms
const bank=getStringValue('bank')
const accountNumber=getStringValue('account-number');
const addAmount=getNumberValue('add-amount');

let availableAmount=parseInt(getinnertext('available-amount'));

const pin=getNumberValue('pin');
// accountNumber check
if (accountNumber.length >11){
    alert('Invalid Account Number');
    return;
}
// pin check

if (pin !== validPin){
    alert('Invalid Pin');
    return;
    
}

let totalNewAvailableAmount= availableAmount + addAmount;

setInnerText('available-amount', totalNewAvailableAmount);



}
);
// toggling feature

// function to none all form and show the selected one
function noneAllForm(formClass,idToShow) {
    let allForm= document.getElementsByClassName(formClass);
    for (const form of allForm) {
        form.style.display='none';
        
    }
    document.getElementById(idToShow).style.display='block';
}
// function to remove bg ad border from all card and add bg and border to one selected card
function removeAndAddStyle(cardClass,cardId) {
    let allcard= document.getElementsByClassName(cardClass);
    for (const card of allcard) {
      card.classList.remove('bg-[#0874f20d]','border-[black]');
      card.classList.add('bg-[hsl(220,16%,96%)]')
        card.style.borderColor='rgba(8,8,8,0.1)';
    }
    
    document.getElementById(cardId).classList.remove('bg-[hsl(220,16%,96%)]')
   document.getElementById(cardId).style.borderColor='black';
}

// added card bg and border when it is clicked

document.getElementById('add-button').addEventListener('click', function(){
    noneAllForm('form','add-money');
   removeAndAddStyle('child','add-button');
})
document.getElementById('cashout-button').addEventListener('click', function(){
   noneAllForm('form','cashout');
  removeAndAddStyle('child','cashout-button');
})
document.getElementById('transfer-button').addEventListener('click', function(){
   noneAllForm('form','tranfer');
  removeAndAddStyle('child','transfer-button');
})
document.getElementById('bonus-button').addEventListener('click', function(){

    noneAllForm('form','bonus');
      removeAndAddStyle('child','bonus-button');
})
document.getElementById('pay-card-button').addEventListener('click',async function () {
    noneAllForm('form','pay-bill');
    removeAndAddStyle('child','pay-card-button')
    
})
// withdraw feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    let validPin=123;
let agentNumber=getStringValue('Agent-number');
let cashoutAmount=getNumberValue('cashout-amount'); 

let cashOutPin=getNumberValue('cashout-pin');
let availableAmount=parseInt( getinnertext('available-amount'));
if (agentNumber.length >11){
    alert('Invalid Agent Number');
    return;
    
}
if (validPin !== cashOutPin){
    alert('Invalid Pin');
    return;
    
}


let totalNewAvailableAmount= availableAmount - cashoutAmount;
setInnerText('available-amount', totalNewAvailableAmount);
});
// send now feature
document.getElementById('send-now-btn').addEventListener('click', function(e){
    e.preventDefault();
    let validPin=123;
   let sendAccountNumber=getStringValue('user-account-number')
    let sendPin=getNumberValue('tranfer-pin')
    if (sendAccountNumber.length >11) {
        alert('Account Number Invalid')
    }
    if (validPin !==sendPin) {
        alert('pin invalid')
    }
    let sendMoney=getNumberValue('send-money') ;
console.log(sendMoney);
   let availableAmount=parseInt( getinnertext('available-amount'));
let totalNewAvailableAmount= availableAmount - sendMoney;
setInnerText('available-amount', totalNewAvailableAmount);

})
// get bonus feature
document.getElementById('get-bonus-btn').addEventListener('click', function(e){
    e.preventDefault()
        let couponCode=1234;
let userCoponCode=getNumberValue('coupon');
if (userCoponCode !== couponCode){
    alert('Invalid Coupon Code');}else{
      alert('Congratulation! You got 100tk bonus');
        let availableAmount=parseInt( getinnertext('available-amount'));
let totalNewAvailableAmount= availableAmount + 100;
setInnerText('available-amount', totalNewAvailableAmount);
    }
    })
  


    // pay bill feature
    document.getElementById('pay-btn').addEventListener('click',function(e){
         e.preventDefault();
        let validPin=123;
        let payMethod=getStringValue('method');
        let accountNumber =getStringValue('bill-account-number') ;
        let payAmount=getNumberValue('pay-amount')
        console.log(payAmount);
       
        
        
        let pin=getNumberValue('bill-pin') ;
        
        console.log(pin);
        
        if (accountNumber.length>11) {
            alert('account number invalid')
            return
        }
        if (validPin !== pin) {
            alert('your pin invalid')
            return
        }
      let availableAmount=parseInt( getinnertext('available-amount'));
let totalNewAvailableAmount= availableAmount -payAmount;
setInnerText('available-amount', totalNewAvailableAmount);
        
    })