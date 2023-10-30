function noClick() {
    const box = document.getElementsByClassName("box-4");
    const box1 = document.getElementsByClassName("box-1");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    setTimeout(() => {
        startFinalProcess();
    }, 2000);
}
var totalTime = 155;
var isAddedScript = false;

function startFinalProcess(isYes) {
    const timer = document.getElementsByClassName("timer");
    timer[isYes ? 0 : 1].classList.remove("d-none");
    const box = document.getElementsByClassName(isYes ? "box-2" : "box-3");
    const box1 = document.getElementsByClassName("box-4");
    box[0].classList.remove("d-none");
    box1[0].classList.add("d-none");
    const interval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(interval);
            const box = document.getElementsByClassName("end-time-text");
            const box1 = document.getElementsByClassName("starting-time-text");
            box[isYes ? 0 : 1].classList.remove("d-none");
            box1[isYes ? 0 : 1].classList.add("d-none");
        }
        let minutes = Math.floor(totalTime / 60);
        let extraSeconds = totalTime % 60;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        const ele = document.getElementsByClassName("timing-sec")[isYes ? 0 : 1];
        ele.innerText = minutes + ":" + extraSeconds;
        totalTime--;

    }, 1000);
}