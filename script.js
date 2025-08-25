    // login button function
    console.log('fvfbbbgftrb');
    
document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault();

let mubileNumber=111;
let pinNumber=1234;

// get Number and pin from input fields
let enteredMubileNumber=parseInt( document.getElementById('number').value);
let enteredPinNumber=parseInt( document.getElementById('pin').value);
if(enteredMubileNumber===mubileNumber && enteredPinNumber===pinNumber){
    alert('Login Successful');
    window.location.href='home.html';

}
else{
    alert('Invalid Mubile Number or Pin');}})