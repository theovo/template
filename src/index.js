import './reset.css';
import './style.css';
import { module } from './module.js';

console.log(module);

import imagePath from './img/favicon.png';
const image = document.createElement('image');
image.src = imagePath;
document.body.append(image);