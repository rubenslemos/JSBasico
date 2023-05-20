const num = [1,2,3,4,5,6,7,8,9];
for (let n of num){
  if (n === 2 || n===4 || n===6 || n===8) continue;
  console.log(n);
  if (n === 8) break;
}
for (let n in num){
  if (num[n] === 2 || num[n]===4 || num[n]===6 || num[n]===8) continue;
  console.log(num[n]);
  if (num[n] === 8) break;
}
for (let n = 0; n< num.length; n++) {
  if (num[n] === 2 || num[n]===4 || num[n]===6 || num[n]===8) continue;
  console.log(num[n]);
  if (num[n] === 8) break;
}
let n = 0
while (n < num.length) {
  if (num[n] === 2 || num[n]===4 || num[n]===6 || num[n]===8) {n++; continue;}
  console.log(num[n]);
  if (num[n] === 8) {n++; break;}
  n++;
}
n = 0;
do {
  if (num[n] === 2 || num[n]===4 || num[n]===6 || num[n]===8) {n++; continue;}
  console.log(num[n]);
  if (num[n] === 8) {n++; break;}
  n++;
}while (n < num.length-1);