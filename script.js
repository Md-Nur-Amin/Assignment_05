const buttn = document.getElementsByClassName('button')
for( const btn of buttn){

    let count = 0;
    let tk = 0;
    let available = 32 ;
    let buttonsClicked = {};
    
    const buttons = document.getElementsByClassName('button');
    for (const btn of buttons) {
        btn.addEventListener('click', function() {
            // Check if button has already been clicked and count is less than 4
            if (!buttonsClicked[btn.innerText] && count < 4) {
                count = count + 1;
                tk = count * 550;
                available = available - 1;
                document.getElementById('cnt').innerText = count;
                document.getElementById('tk').innerText = tk;
                document.getElementById('grand-total').innerText = tk ; 
                document.getElementById('available').innerText = available;
                document.getElementById('available-2').innerText = available;
                btn.style.backgroundColor = "green";

                buttonsClicked[btn.innerText] = true; // Mark button as clicked
            }
        });
    }
}

const buttons = document.querySelectorAll('.button');
const seatHistory = document.getElementById('new-p');
let lastClickedButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (lastClickedButton !== button) {
      if (seatHistory.children.length < 4) {
        const paragraph = document.createElement('p');
        paragraph.textContent = button.textContent.trim() + "_______________Economy" + "_______________500";
        seatHistory.appendChild(paragraph);
      } else {
        alert('You have reached the maximum number of selections.');
      }
    }
    lastClickedButton = button;
  });
});

// document.getElementById('coupon').addEventListener('keyup', function(event){
//     const text = event.target.value
//     const dlt = document.getElementById('btn-apply')
//     if(text == '15% OFF'){
//         dlt.removeAttribute('disabled')
//         const offTk = tk * 0.8
        
//     }
//     else{
//         dlt.setAttribute('disabled', true)
//     }
// })

// document.getElementById('btn-apply').addEventListener('click', function(){
//     const grandTotal = document.getElementById('grand-total')
    
//     secret.style.display = 'none'
// })






