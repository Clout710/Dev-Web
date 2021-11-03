(function(){
  var element=document.getElementsByTagName('h3');
setInterval(function(){
    if((element[0].clientWidth)==380) {
      element[1].classList.add('f1');
    }
  
}, 1000)
}());




// contact page script
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});