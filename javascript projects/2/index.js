var next = document.getElementById("next")
var prev = document.getElementById("prev")
 var step = document.getElementsByClassName("step")
 var progress = document.querySelector(".progress-front");
 var current_checked = 1;

 next.onclick = function(){
   current_checked++;
   if(current_checked > step.length){
    current_checked=step.length;
   }
  updateProgress();
   

 }
 
 prev.onclick = function(){
  current_checked--;
  if(current_checked < 1){
   current_checked=1;
  }
 updateProgress();
}
 function updateProgress(){
  var i;
  for(i=0;i<step.length;i++){
    if(i<current_checked)
    {
      step[i].classList.add("checked");
      step[i].innerHTML = `<i class="fa-solid fa-check"></i><small>${i === 0 ? "Start" : i === step.length-1 ? "Final": i}</small>`
    }

    else{
       step[i].classList.remove("checked");
      step[i].innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'

    }
  }
  var checked = document.querySelectorAll(".checked")
  progress.style.width = ((checked.length-1) / (step.length -1))*100+"%";


  if(current_checked === 1){
    prev.disabled = true ;
  }
  else if(current_checked == step.length){
    next.disabled = true;
  }
  else{
    next.disabled = false;
    next.disabled = false;
  }
 }