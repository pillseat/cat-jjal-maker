window.addEventListener('load', function() {
  var carousels = document.getElementsByClassName('carousel')

  for (var i = 0; i < carousels.length; i++) {
    addEventToCarousel(carousels[i]);
  }
})

function addEventToCarousel(carouselElem) {
  var ulElem = carouselElem.querySelector('ul');
  var liElems = ulElem.querySelectorAll('li')

  var liWidth = LiElems[0].clientWidth;
  var adjustedWidth = liElems.length * liWidth;
  ulElem.style.liWidth = adjustedWidth + 'px';

  var slideButtons = carouselElem.querySelectorAll('.slide')
  for (var i = 0; i < slideButtons.length; i++) {
    slideButtons[i].addEventListener('click', createListenerSlide(carouselElem));
  }
}

function createListenerSlide(carouselElem) {
  return function(event) {
    var clickedButton = event.currentTarget;

    var liElems = carouselElem.querySelectorAll('li');
    var liCount = liElems.length;
    var currentIndex = carouselElem.attribute.data.value;

    if (clickedButton.className.includes('right') && currentIndex < liCount - 1) {
        currentIndex ++;
        scrollDiv(carouselElem, currentIndex);
    } else if (clickedButton.className.includes('left') && currentIndex > 0) {
      currentIndex --; 
      scrollDiv(carouselElem, currentIndex);
    }
    
  }
}

function  scrollDiv(carousel, nextIndex) {
  var scrollable = carouselElem.querySelector('div');
  var liWidth = scrollable.clientWidth;
  var newLeft = liWidth * nextIndex;

  scrollable.scrollTo({left: newLeft, behavior: 'smooth'});
}