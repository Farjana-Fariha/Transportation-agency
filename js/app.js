// go to new section
function scrolling() {
   const booking = document.getElementById('booking');
   booking.scrollIntoView({ behavior: "smooth" });
}
// 

const allSeats = document.getElementsByClassName('seat');
let seatArray = [];
for (const seat of allSeats) {
   seat.addEventListener('click', function (e) {
      // checking already included or not
      if (!seatArray.includes(seat.innerHTML) && seatArray.length < 4) {
         seatArray.push(seat.innerHTML);
         //count left seat
         const remaingSeatsStr = document.getElementById('remaing-seats');
         const remaingSeats = parseInt(remaingSeatsStr.innerText);
         const currentSeat = remaingSeats - 1;
         remaingSeatsStr.innerText = currentSeat;
         // count booked seat
         const bookedSeatStr = document.getElementById('count-seat');
         const bookedSeat = parseInt(bookedSeatStr.innerText);
         const currentBookedSeat = bookedSeat + 1;
         bookedSeatStr.innerText = currentBookedSeat;
         // add bg
         const element = document.getElementById(seat.innerHTML);
         element.style.backgroundColor = '#1DD100';
         // append data in booked list
         const listContainer = document.getElementById('add-list');
         const div = document.createElement('div');
         div.innerHTML = `
          <div class="flex justify-between py-3">
             <h6 class="text-[20px]">${seat.innerHTML}</h6>
             <h6 class="text-[20px]">Economy</h6>
             <h6 class="text-[20px]">550</h6>
           </div>
             `;
         listContainer.appendChild(div);

         // const data = document.createElement('h6');
         // data.classList('text-[20px]');
         // data.innerText = 'C';
         // div.insertBefore(data,div.firstChild())
         // div.appendChild(data);

         if (seatArray.length == 4) {
            // enable apply coupon
            const applyCoupon = document.getElementById('applyCoupon');
            applyCoupon.disabled = false;
         }
         // update total price
         const totalPriceStr = document.getElementById('totalPrice');
         const totalPrice = parseInt(totalPriceStr.innerText);
         const newTotal = totalPrice + 550;
         totalPriceStr.innerText = newTotal;
         // Update grand total
         const grandTotalStr = document.getElementById('grandTotal');
         grandTotalStr.innerText = newTotal;
      } else {
         alert("You can't Book more than 4 seats");
      }
   });
}
// Apply coupon
function checkCoupon() {
   const coupon_1 = 'NEW15';
   const coupon_2 = 'Couple 20';
   const givenCouponStr = document.getElementById('givenCoupon');
   const givenCoupon = givenCouponStr.value;
   if (givenCoupon == coupon_1) {
      // update grand giving the right coupon
      const grandTotalStr = document.getElementById('grandTotal');
      const grandTotal = parseInt(grandTotalStr.innerText);
      const newGrandTotal = grandTotal - (grandTotal * 0.15);
      grandTotalStr.innerText = newGrandTotal;
      givenCouponStr.value = '';
      // disable apply coupon 
      disableApplyCoupon()
   } else if (givenCoupon == coupon_2) {
      const grandTotalStr = document.getElementById('grandTotal');
      const grandTotal = parseInt(grandTotalStr.innerText);
      const newGrandTotal = grandTotal - (grandTotal * 0.2);
      grandTotalStr.innerText = newGrandTotal;
      givenCouponStr.value = '';
      // disable apply coupon 
      disableApplyCoupon()
   } else {
      const textContainer = document.getElementById('invalid-text');
      const div = document.createElement('div');
      div.innerHTML = `
      <p class="text-red-600 font-bold p-2">Invalid Coupon code!!</p>
      ` ;
      textContainer.appendChild(div);
   }
   }
   // Next button enable
   const phoneNumberField = document.getElementById('phoneNumber');
   phoneNumberField.addEventListener('keyup', function(){
      const phoneNumber = document.getElementById('phoneNumber').value;
      if (seatArray.length >= 1 && phoneNumber != '') {
         console.log('now', seatArray,phoneNumber);
         const nextBtn = document.getElementById('nextBtn');
         nextBtn.disabled = false;
      }
   })

   function proccessComplete() {
      
   }
