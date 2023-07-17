let ism = prompt("Isminggizni kiriting");
let yil = prompt("Hozirgi yilni kiriting");
let yosh = prompt("Tug'ilgan yilingizni kiriting");

function biograf(b, a) {
  box = 0;
  for (let i = b; i <= a; i++) {
    box = a - b;
  }
  return` ${ism} ${box} yoshda `
}
console.log(biograf(yosh, yil));