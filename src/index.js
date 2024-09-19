// import styles
import './reset.css';
import './style.css';

// import scripts
import { module } from './module';
console.log(module);

// import images
import imagePath from './img/favicon.png';
const image = document.createElement('image');
image.src = imagePath;
document.body.append(image);