/*
left = 37
up = 38
right = 39
down = 40
*/

function moveDodgerLeft() {
   var dodger = document.getElementById("dodger")
   var leftNumbers = dodger.style.left.replace('px', '')
   var left = parseInt(leftNumbers, 10)
   if (left > 0) {
     dodger.style.left = `${left - 1}px`
   }
 }

 function moveDodgerRight() {
   var dodger = document.getElementById("dodger")
   var leftNumbers = dodger.style.left.replace('px', '')
   var left = parseInt(leftNumbers, 10)
   if (left < 360) {
     dodger.style.left = `${left + 1}px`
   }
 }

 document.addEventListener('keydown', function(e) {
   if (e.which === 37) {
     moveDodgerLeft()
   }

   if (e.which === 39) {
     moveDodgerRight()
   }
 })
