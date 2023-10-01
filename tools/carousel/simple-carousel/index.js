'use strict';
const imagesTheme = ['snow', 'bridge', 'beach', 'desert'];

const carousel = document.getElementsByClassName('carousel')[0];
const carouselDots =
  document.getElementsByClassName('carouselDots')[0];

imagesTheme.forEach((item, i) => {
  const carouselItem = document.createElement('div');
  carouselItem.className = 'carouselItem';
  const carouselImage = document.createElement('img');
  carouselImage.src = `https://source.unsplash.com/random?landscape,${item}`;
  carouselImage.alt = `image of a ${item}`;
  carouselItem.appendChild(carouselImage);
  carousel.appendChild(carouselItem);

  const carouselDot = document.createElement('div');
  carouselDot.className =
    i === 0 ? 'carouselActivedDot' : 'carouselDot';
  carouselDots.appendChild(carouselDot);
});

const carouselItems = document.querySelectorAll('.carouselItem');

carouselItems.forEach((item, i) => {
  item.style.transform = `translateX(${i * 100}%)`;
});

const nextItem = document.querySelector('.btn-next');

let curItem = 0;
let maxItems = carouselItems.length - 1;

nextItem.addEventListener('click', function () {
  if (curItem === maxItems) {
    curItem = 0;
  } else {
    curItem++;
  }

  handleActiveDot();

  carouselItems.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - curItem)}%)`;
  });
});

const prevItem = document.querySelector('.btn-prev');

prevItem.addEventListener('click', function () {
  if (curItem === 0) {
    curItem = maxItems;
  } else {
    curItem--;
  }

  handleActiveDot();

  carouselItems.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - curItem)}%)`;
  });
});

function handleActiveDot() {
  const activeDot = document.getElementsByClassName(
    'carouselActivedDot'
  )[0];
  const dots = document.getElementsByClassName('carouselDot');

  activeDot.className = 'carouselDot';
  dots[curItem].className = 'carouselActivedDot';
}
