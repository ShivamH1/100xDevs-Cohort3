let count = 0;

function updateCount(){
    count ++;
    console.log(count);
}

setInterval(updateCount, 1000);