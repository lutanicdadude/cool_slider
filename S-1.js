// will execure when the entire page has finished loading
window.onload = function(){

    // keeps track of the index of the current displayed image
    let currentIndex = 0;   

    // selects all elements with the class "slider" ad stores them in the "slider" variable
    const slider = document.querySelectorAll(".slider");  

    // loop sets the opacity of all images with the class "slider" to 0, making them invisible
    slider.forEach(img => img.style.opacity ="0");

    // makes the first image visible by setting its opacity to 1
    slider[0].style.opacity = "1"; 


    // used to execute a block of code repeatedly at a specified interval
    setInterval(() => {

        // calculates the index of the next image to display.
        // ensures that the index wraps around to 0 after reaching the last image index.
        let nextIndex = (currentIndex + 1) % slider.length;

        //hides the currently displayed image by setting its opacity to 0
        slider[currentIndex].style.opacity = "0"; 

        // makes the next image visible by setting its opacity to 1
        slider[nextIndex].style.opacity = "1"; 

        // adds a CSS transition effect to all images, making the opacity change smoother over a duration of 1s
        slider.forEach(img => img.style.transition = "all 1s"); 

        // updates "currentIndex" to the index of the next image, ensuring that the next image will be displayed on the next iteration
        currentIndex = nextIndex; 

        //function called every 3 seconds
    }, 3000);
}
