import "./style.css";

import Experience from "./Experience/Experience.js";

if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    const experience = new Experience(document.querySelector("canvas.webgl"));
} else {
    document.querySelector("#overlay").style.display = "block";
    document.querySelector("main").style.display = "none";
}
