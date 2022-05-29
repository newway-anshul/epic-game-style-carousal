// Import stylesheets
import './style.css';
const bigImg: HTMLElement = document.querySelector('div.bigImge');
const simags = document.querySelectorAll('div.s-img');
const activeDiv = document.createElement('div');
activeDiv.classList.add('active');

simags.forEach((simg: HTMLElement, index) => {
  if (index == 0) {
    simg.prepend(activeDiv);
  }
  simg.addEventListener('click', (e) => {
    let bg = getComputedStyle(e.currentTarget as any).backgroundColor;
    bigImg.style.backgroundColor = bg;
    (e.target as HTMLElement).prepend(activeDiv);
  });
});
activeDiv.addEventListener('animationend', () => {
  let currentPraent = activeDiv.parentElement;
  if (currentPraent.nextElementSibling) {
    currentPraent.nextElementSibling.prepend(activeDiv);
    let bg = getComputedStyle(
      currentPraent.nextElementSibling as any
    ).backgroundColor;
    bigImg.style.backgroundColor = bg;
  } else {
    simags[0].prepend(activeDiv);
    let bg = getComputedStyle(simags[0]).backgroundColor;
    bigImg.style.backgroundColor = bg;
  }
});
