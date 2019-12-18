//  counterUP will count the number and set after 3 second
$('.count').counterUp({
    delay: 10, time: 3000
})
// get scrol button 
mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction();
}
$(document).ready(function scrollFunction() {
    if (document.body.scrollTop > 30 ||
        document.documentElement > 30) {
        mybutton.style.display = "block"

    } else {
        mybutton.style.display = "none";
    }
});
function topFunction() {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // all other
}