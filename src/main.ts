import '@webcomponents/custom-elements/src/native-shim.js';
// Import stylesheets
import './style.css';
import {PopupComponent} from './component/popup'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';


$(document).ready {
  const appDiv: HTMLElement = document.getElementById('app');
  let mainPopup: PopupComponent = new PopupComponent();
  appDiv.appendChild(mainPopup;

}

