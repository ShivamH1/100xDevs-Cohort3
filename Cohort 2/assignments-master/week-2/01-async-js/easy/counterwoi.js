let count = 0;

function updateCount(){
    count ++;
    console.log(count);
    setTimeout(()=>updateCount(), 1000);
}

updateCount();