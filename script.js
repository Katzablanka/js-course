// let temp = document.querySelectorAll('button');

// temp.forEach((item) => {
//   let inputLine = document.querySelector('input');
//   item.addEventListener('click', function () {
//     console.log(item.innerText);
//     if (item.innerText == '=') {
//       let equasion = inputLine.value
//         .replace('×', '*')
//         .replace('÷', '/')
//         .replace('%', '/100*');
//       let antwort = eval(equasion).toFixed(2);
//       inputLine.value = antwort;
//       console.log(antwort);
//     } else if (item.innerText == 'CE') {
//       inputLine.value = '';
//     } else if (item.innerText == 'Xʸ') {
//       inputLine.value = inputLine.value + '^';
//     } else if (item.innerText == '') {
//       inputLine.value = inputLine.value + '^';
//     } else inputLine.value = inputLine.value + item.innerText;
//   });
// });

//////////////////////////////////closure
let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();
/////////// when function is passed as a return in function it remembers the changes o the variable let
function outerScope() {
  let counter = 0;
  console.log(counter);
  function innerScope() {
    counter++;
    console.log('this is counter ' + counter);
  }
  return innerScope;
}

const fun = outerScope();
fun();
fun();
outerScope();
fun();

////////////////////////////////////currying
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 1, 1));

function curry(fnk) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fnk(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(1)(1));
//////////////////////////////////-----this-------//////////////////////////////////////

function sayMyName(name) {
  console.log(`my name is ${name}`);
}

sayMyName('Katzablancka');
////////////////////////////////implicit binding
const KATZA = {
  position: 'number one',
  zweck: function () {
    console.log(`Ich werde alles machen, um ${this.position} zu sein `);
  },
};

KATZA.zweck();

////////////////////////////////explicit binding
function SagMeinZweck() {
  console.log(`Mein Zweck ist vor allem ${this.position} zu sein`);
}

SagMeinZweck.call(KATZA);

///////////////////////////////new binding
function MeineZiele(ziel, fristen) {
  this.ziel = ziel;
  this.fristen = fristen;
}

const one = new MeineZiele('React', 'August');
const two = new MeineZiele('JS', 'Drei Wochen');

console.log(
  `Nämlich habe ich vor ${one.ziel} bis ${one.fristen} und ${two.ziel} bis ${two.fristen} zu beherrschen`
);
////////////////////////////default binding
globalThis.position = 'Nummer Eins';
SagMeinZweck();

//order off precedence ->new->explicit->implicit->default

/////////////////////////////////////////----proptotype-----///////////////////////////////////////////////

function Person(Vornahme, Nachnahme) {
  this.vor = Vornahme;
  this.nach = Nachnahme;
}

const p1 = new Person('Anna', 'Khalus');
const p2 = new Person('Katza', 'Blancka');

p1.ganzeNahme = function () {
  return this.vor + ' ' + this.nach;
};

console.log(p1.ganzeNahme());
// console.log(p2.ganzeNahme());///will not work for other objects

Person.prototype.callOut = function () {
  return (
    'Nämlich gibt es viele Nahmen für diese Person - ' +
    this.vor +
    ' ' +
    this.nach
  );
};

console.log(p1.callOut());
console.log(p2.callOut());
