document.addEventListener("DOMContentLoaded", function feedback() {
    let result = document.getElementById("result");
    let result2 = document.getElementById("result2");
    let title = document.getElementById("fb-title");
    let sad = document.querySelector(".sad");
    sad.addEventListener("click", function showSad() {
        result.innerHTML = "sad";
        result2.innerHTML =
            " &nbsp; eww... &nbsp; I promisse you I'm working hard to improve my skills!";
        title.style.visibility = "hidden";
    });

    let neutral = document.querySelector(".neutral");
    neutral.addEventListener("click", function showNeutral() {
        result.innerHTML = "neutral";
        result2.innerHTML = "";
        title.style.visibility = "hidden";
    });

    let happy = document.querySelector(".happy");
    happy.addEventListener("click", function showHappy() {
        result.innerHTML = "happy";
        result2.innerHTML = " &nbsp; yay!";
        title.style.visibility = "hidden";
    });
});

let toggleable = document.querySelector(".toggleable");

let toggleImage = (e) => {
    let icon = e
        .composedPath()
        .find((el) => el.classList.contains("toggleable"));

    if (icon.classList.contains("toggled")) {
        icon.classList.remove("toggled");
    } else {
        icon.classList.add("toggled");
    }
};

document.addEventListener("click", toggleImage);
