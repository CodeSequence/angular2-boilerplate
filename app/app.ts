import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

const firstValueInput = document.querySelector('.firstValue');
const secondValueInput = document.querySelector('.secondValue');
const operatorInput = document.querySelector('.operator');
const resultDisplay = document.querySelector('.result');



const createValueObservable = input => Observable.of(input.value)
  .concat(
    Observable.fromEvent(input, 'input')
      .map<string>(() => input.value)
  )
  .map(value => {
    if (input.type === 'number') {
      return parseInt(value, 10);
    }

    return value;
  });


const firstValue$ = createValueObservable(firstValueInput);
const secondValue$ = createValueObservable(secondValueInput);
const operator$ = createValueObservable(operatorInput);



Observable.combineLatest(firstValue$, secondValue$, operator$)
  .map(([ first, second, operator ]) => {
    if (operator === 'add') {
      return first + second;
    }
    if (operator === 'subtract') {
      return first - second;
    }
  })
  .do(result => console.log(result))
  .subscribe(result => resultDisplay.textContent = `${result}`)
