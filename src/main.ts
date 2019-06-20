import {PopupComponent} from './component/popup/popupcomponent'; 
import $ from 'jquery';


$(document).ready( function() {
  const appDiv: HTMLElement = document.getElementById('app');
  let mainPopup: PopupComponent = new PopupComponent();
  appDiv.appendChild(mainPopup);
  mainPopup.show();
});

