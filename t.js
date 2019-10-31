const on_off_switch = document.querySelector("#myswitch");
on_off_switch.addEventListener("click", changeSrc);

let softpen_image = document.querySelector("#mysoftpen");

function changeSrc() {
    console.log("function to change image.src");
    if (softpen_image.getAttribute('src') == "softpen_stopped.gif") {
        softpen_image.src = "softpen_active.gif";
        on_off_switch.textContent="Turn it off!";
    } else {
        softpen_image.src = "softpen_stopped.gif";
        on_off_switch.textContent="Turn the gif on";
    }
}
