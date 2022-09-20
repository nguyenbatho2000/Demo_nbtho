
let click_like = document.querySelector(".icon-like");
let num_like = document.getElementById("num-like");
let icon_like = document.getElementById("like");
console.log(num_like);
let clicked = false;
click_like.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        icon_like.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
        num_like.textContent++;
    }
    else {

        clicked = false;
        icon_like.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
        num_like.textContent--;

    }
});


