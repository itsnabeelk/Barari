const html = document.querySelector('html');
html.setAttribute('data-bs-theme', 'dark');

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  // --- Function to add and remove CSS animation classes
  function doAnimations(elems) {
    const animEndEv = 'animationend';

    elems.forEach((elem) => {
      elem.classList.add('animate__animated', 'animate__flipInX');
      elem.addEventListener(animEndEv, () => {
        elem.classList.remove('animate__animated', 'animate__flipInX');
      });
    });
  }

  // --- Variables on page load
  const carouselKenBurns = new bootstrap.Carousel(document.querySelector('#carouselKenBurns'), {
    interval: 5000, // Set the desired interval for automatic sliding (in milliseconds)
    pause: 'hover' // Pause the automatic sliding when hovering over the carousel
  });

  const firstAnimatingElems = Array.from(
    carouselKenBurns._element.querySelector('.carousel-item:first-child').querySelectorAll("[data-animation^='animated']")
  );

  // --- Animate captions in the first slide on page load
  doAnimations(firstAnimatingElems);

  // --- Other slides to be animated on carousel slide event
  carouselKenBurns._element.addEventListener('slid.bs.carousel', (e) => {
    const animatingElems = Array.from(e.target.querySelectorAll("[data-animation^='animated']"));
    doAnimations(animatingElems);
  });

  let startX; // Variable to store the starting position of the drag
  let isDragging = false; // Variable to track if dragging is in progress

  carouselKenBurns._element.addEventListener('mousedown', (e) => {
    startX = e.clientX; // Store the starting position of the drag
    isDragging = true; // Set dragging to true when mousedown event occurs
  });

  carouselKenBurns._element.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const endX = e.clientX; // Get the current position of the drag
      const threshold = 50; // Minimum distance required for a drag to be considered as a slide change

      if (startX - endX > threshold) {
        carouselKenBurns.next(); // Change to the next slide
        isDragging = false; // Reset dragging to false after slide change
      } else if (endX - startX > threshold) {
        carouselKenBurns.prev(); // Change to the previous slide
        isDragging = false; // Reset dragging to false after slide change
      }
    }
  });

  carouselKenBurns._element.addEventListener('mouseup', () => {
    isDragging = false; // Reset dragging to false when mouseup event occurs
  });

  carouselKenBurns._element.addEventListener('click', () => {
    if (!isDragging) {
      // Perform an action when the carousel is clicked (outside of dragging)
      // For example, you can open a link or display additional information
    }
  });
});