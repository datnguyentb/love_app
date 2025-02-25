var yes_btn = document.querySelector('.yes-btn');
var no_btn = document.querySelector(".no-btn");
var main_1 = document.querySelector(".main_1")
var main_2 = document.querySelector(".main_2")
var sound = document.getElementById("sound")

var messages = ["Are you sure?", "Really sure?", "Think again!", "Last chance!"]; // Danh sách nội dung
var messageIndex = 0;


no_btn.addEventListener("click", () => {
    sound.play();

    let currentWidth = yes_btn.offsetWidth;
    let currentHeight = yes_btn.offsetHeight;
    let currentFontSize = parseFloat(window.getComputedStyle(yes_btn).fontSize);

    yes_btn.style.width = currentWidth * 2 + "px"; // Tăng gấp đôi
    yes_btn.style.height = currentHeight * 2 + "px";
    yes_btn.style.fontSize = currentFontSize * 2 + "px"; // Font size cũng tăng gấp đôi

    // Đổi nội dung nút "No"
    if (messageIndex < messages.length) {
        no_btn.textContent = messages[messageIndex];
        messageIndex++;
    }
});


yes_btn.addEventListener("click", () => {
    main_1.classList.add("no-display");
    main_2.classList.remove("no-display");
});
