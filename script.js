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

            // Coupon

        const coupon=document.getElementById("coupon");
        handleSeatClick(seatData);
      if(count>3){
          alert("You have reached the limit!");
          disableSeats(seat);
          coupon.removeAttribute("disabled");
          const discountTr=document.getElementsByClassName("discountTr");
          const applyBtn= document.getElementById("applyBtn");
          applyBtn.addEventListener("click",function(e){
              const couponValue=coupon.value;
              if (couponValue== 'NEW15'){
                  const discount15= 2200*0.15;
                  setInnerTextById("discount",discount15);
                  const finalPrice= 2200-discount15;
                  setInnerTextById("grandTotal",finalPrice);
                  coupon.classList.add("hidden");
                  applyBtn.classList.add("hidden");
                  discountTr.classList.remove("hidden");
              }
              else if(couponValue == 'Couple 20'){
                  const discount20= 2200*0.20;
                  setInnerTextById("discount",discount20);
                  const finalPrice= 2200-discount20;
                  setInnerTextById("grandTotal",finalPrice);
                  coupon.classList.add("hidden");
                  applyBtn.classList.add("hidden");
                  discountTr.classList.remove("hidden");
              }
              else{
                  alert('Wrong Coupon! Use a valid one.');
              }
          })
      }
        });
    }
}


function scrollToMainSection(){
    const mainSection = document.getElementById('main-section');
  
        // Scroll options
        const scrollOptions = {
            behavior: 'smooth',
        };
  
        // Scroll to the main section
        mainSection.scrollIntoView(scrollOptions);
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






