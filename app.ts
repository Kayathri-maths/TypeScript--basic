const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num1') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: Array<number> = [];
const textResults: string[] = [];

type NumOrstring = number | string;
type Result = {val: number; timestamp: Date};

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: NumOrstring, num2: NumOrstring){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2;
    }  else if (typeof num1 ==='string' && typeof num2 === 'string'){
        return num1+' '+ num2;
    }
    return +num1 + +num2;
}

function printResults(resultObj: ResultObj ){
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string);
    printResults({val: result as number , timestamp: new Date()})
    console.log(numResults, stringResult);
});

const myPromise = new Promise<string>( (resolve, reject) => {
      setTimeout(() => {
        resolve('It worked');
      },1000);
})

myPromise.then(result => {
    console.log(result);
})