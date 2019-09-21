import Slide from './slide.js';

const slide = new Slide('.slide', '.slideWrapper');
slide.init();
console.log(slide);

slide.changeSlide(1);
// slide.activeNextSlide();
slide.activePrevSlide()