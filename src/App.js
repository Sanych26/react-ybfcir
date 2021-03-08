let num = prompt("Введіть число в десятичній формі: ");

function toBIN(num) {
  let out = "",
    bit = 1;
  while (num >= bit) {
    out = (num & bit ? 1 : 0) + out;
    bit <<= 1;
  }
  return out || "0";
}
document.write("<pre>Число в десятичній формі: " + num + "\n</pre>");
document.write("<pre>Число в двоїчній формі: " + toBIN(num) + "\n</pre>");
const lgnum = num => {
  let res = "";
  const numStr = num;
  numStr.startsWith("-") ? (res += "1") : (res += "0");
  let n = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "1") n++;
  }
  res += `.${n}`;
  if (n !== 0) {
    const ind = numStr.indexOf(".");
    if (ind !== -1) {
      for (let i = 0; i < ind; i++) {
        if (numStr[i] === "1") res += `.${ind - i}`;
      }
      for (let i = ind + 1; i < numStr.length; i++) {
        if (numStr[i] === "1") res += `.-${i - ind}`;
      }
    } else {
      for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === "1") res += `.${numStr.length - i}`;
      }
    }
  }
  return res;
};
