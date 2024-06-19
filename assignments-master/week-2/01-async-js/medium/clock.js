function updateTime(){
    const date = new Date();
    const hours12 = date.getHours() % 12;
    const hours24 = date.getHours().toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    const ampm = (date.getHours() >= 12) ? "P.M." : "A.M.";

    const time24 = `${hours24} : ${minutes} : ${seconds}`;
    const time12 = `${hours12} : ${minutes} : ${seconds} ${ampm}`;

    console.log(`Current Time (24h): ${time24}`);
    console.log(`Current Time (12h): ${time12}`);
}

updateTime();
setInterval(updateTime,1000);