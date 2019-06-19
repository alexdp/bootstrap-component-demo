// Import stylesheets
import './style.css';
import {SampleFormComponent} from './component/sampleform/sampleform-component'; 

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
new SampleFormComponent(appDiv);