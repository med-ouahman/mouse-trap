const trap = document.getElementById("trap");
const curosr = document.getElementsByClassName("cursor")[0];

document.addEventListener("mousemove", (e) => {
    curosr.style.left = e.pageX + "px";
    curosr.style.top = e.pageY + "px";
});

trap.addEventListener("mouseenter", (e) => {
    const rect = trap.getBoundingClientRect();
    const newCursor = document.createElement("div");

    newCursor.className = "cursor";
    newCursor.style.left = curosr.style.left;
    newCursor.style.top = curosr.style.top;
    curosr.style.left = (e.clientX - rect.x) + "px";
    curosr.style.top = (e.clientY - rect.y) + "px";
    trap.appendChild(newCursor);
});

