const messyArr = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

function cleaningUp(arr) {
  return arr.filter((el) => typeof el == "string")
    .map(e => `${e.toUpperCase()}!`)
}

console.log(cleaningUp(messyArr));