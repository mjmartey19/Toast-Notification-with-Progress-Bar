const toastBtn = document.querySelector("#toastBtn"),
toast = document.querySelector('.toast');
closeIcon = document.querySelector('.hide'),
progressBar = document.querySelector('.progress')
console.log(progressBar),

toastBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    toast.classList.add("active");

    progressBar.classList.add("active");

    timer1 = setTimeout(()=>{
        toast.classList.remove("active");
    },6000);
    
    timer2 = setTimeout(()=>{
        progressBar.classList.remove("active");
    },6300);
    
})

closeIcon.addEventListener("click",()=>{
    toast.classList.remove("active");
    setTimeout(()=>{
        progressBar.classList.remove("active");
    },300);
clearTimeout(timer1);
clearTimeout(timer2);
})


// Remove active on progress when it 5s
