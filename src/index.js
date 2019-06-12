import "./styles.css";
import {Prime, PrimeNumber, PrimeFactor} from './prime';

console.log(Prime(15));
console.log(PrimeNumber(15));
console.log(PrimeFactor(69));
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
