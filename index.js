window.onload = function(){
    let currentIndex = 0;   
    const slider = document.querySelectorAll(".slider");  
    slider.forEach(img => img.style.opacity ="0");
    slider[0].style.opacity = "1"; 

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = "0"; 
        slider[nextIndex].style.opacity = "1"; 
        slider.forEach(img => img.style.transition = "all 1s"); 

        currentIndex = nextIndex; 
    }, 3000);
}
