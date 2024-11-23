// map, filter, arrow

// arrow
function sum (a, b) {
    return a + b;
}

const sum = (a, b) =>{
    return a + b;
}

const ans = sum(1,2);
console.log(ans);

// map
const input = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < input.length; i++){
    newArr.push(input[i]*2);
}
console.log(newArr);

function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);

const ans = input.map((i)=>{
    return i * 2;
});

console.log(ans);

// filter
const arr = [1, 2, 3, 4, 5];

const newArr = [];

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);

function filteringLogic(n){
    if (n % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const ans = arr.filter(filteringLogic);
console.log(ans);

const res = arr.filter((n) => {
    if (n % 2 == 0){
        return true;
    }else{
        return false;
    }
})

console.log(res);
