a = 1;
while(a <= 10)  {
    console.log(a);
    a += 1
}

for(let i = 1; i <= 20; i++) {
    if (i % 2) {
        console.log(i)
        continue;
    }
}

let arr = [1, 2, 3, 4, 5];
let i = 0;
while(arr.length > i) {
    console.log(arr[i]);
    i++;
}