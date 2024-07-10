var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);

}
function showDivs(n) {
    var i;
    //sebuah array berisi elemen image
    var imgList = document.getElementsByClassName("autoSlider");
    if (n > imgList.length) slideIndex = 1;
    if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);