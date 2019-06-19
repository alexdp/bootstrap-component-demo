import '@webcomponents/custom-elements/src/native-shim.js';
// Import stylesheets
import './style.css';
import {SampleFormComponent} from './component/sampleform/sampleform-component'; 


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let mainComponent : SampleFormComponent = new SampleFormComponent();
appDiv.appendChild(mainComponent);