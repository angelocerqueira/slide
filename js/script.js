import { SlideNav} from './slide.js';

const slide = new SlideNav('.slide', '.slideWrapper');
  slide.init();
  slide.addArrow('.prev','.next');
