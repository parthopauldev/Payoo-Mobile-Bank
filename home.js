
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