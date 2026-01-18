const button = document.getElementById("counter");

// get saved count or start at 0
let count = localStorage.getItem("count");
count = count ? parseInt(count) : 0;

// update button text
button.value = "Count: " + count;

button.onclick = () => {
    count++;
    localStorage.setItem("count", count);
    button.value = "Count: " + count;
};
