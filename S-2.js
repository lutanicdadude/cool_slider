window.onload = function(){

    // variable keeps track of the index of the currently displayed image in the slider
    let currentIndex = 0;

    // selects container element that wraps all the images of the slider
    const sliderWrap = document.querySelector(".sliderWrap");

    const slider = document.querySelectorAll(".slider");

    // clones the first image element (firstElementChild) within the slider wrap
    // "true" argument ensures that all descendants of the cloned node are cloned
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);

    // append cloned image to the end of the slider wrap
    sliderWrap.appendChild(sliderClone);

    setInterval(() => { 
        currentIndex++;

        //adjust the left margin of the slider wrap
        // shifts the images horizontally
        // * 100 == moves the slider wrap by a distance equal to the width of one image
        // "%" == ensures that the movement is relative to the width if the container
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        //checks if this image is the last image
        // if it is, it resets the slider to the first image
        if(currentIndex == 3){
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex = 0; 
            }, 700);
        }
    }, 3000);
}