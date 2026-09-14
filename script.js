const startBtn = document.getElementById("startBtn");
const ctaBtn = document.getElementById("ctaBtn");

const dashboard = document.getElementById("dashboard");

startBtn.addEventListener("click", function () {
    dashboard.scrollIntoView({
        behavior: "smooth"
    });
});

ctaBtn.addEventListener("click", function () {
    dashboard.scrollIntoView({
        behavior: "smooth"
    });
});


// Task Progress

const tasks = document.querySelectorAll(".task input");

const progressText = document.querySelector(".overall-card h3");
const progressBar = document.querySelector(".large-progress");

const completedText =
    document.querySelector(".stats .stat-card:nth-child(1) h3");

const pendingText =
    document.querySelector(".stats .stat-card:nth-child(2) h3");


function updateProgress() {

    let completed = 0;

    tasks.forEach(function (task) {

        if (task.checked) {
            completed++;
        }

    });

    const total = tasks.length;

    const percentage = Math.round((completed / total) * 100);

    progressText.textContent = percentage + "%";

    progressBar.style.width = percentage + "%";

    completedText.textContent = completed;

    pendingText.textContent = total - completed;
}


tasks.forEach(function (task) {

    task.addEventListener("change", updateProgress);

});


updateProgress();