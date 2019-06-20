import {PopupComponent} from './component/popup'; 
import 'jquery';


$(document).ready( function() {
  const appDiv: HTMLElement = document.getElementById('app');
  let mainPopup: PopupComponent = new PopupComponent();
  appDiv.appendChild(mainPopup);
});

