const emailSentTotalCtx = document
  .getElementById("emailSentTotalChart")
  .getContext("2d");

const incomeAmountsCtx = document
  .getElementById("incomeAmountsChart")
  .getContext("2d");

const revenueCtx = document.getElementById("revenueChart").getContext("2d");

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  document.querySelector("aside").classList.toggle("sidebar_opened");
});

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress_bar");

  progressBars.forEach((bar) => {
    const progressValue = bar.getAttribute("data-progress");
    bar.style.setProperty("--progress", progressValue + "%");
  });
});

// CSS to handle the custom property
const style = document.createElement("style");
style.innerHTML = `
    .progress_bar::before {
      width: var(--progress);
    }
  `;
document.head.appendChild(style);

const emailSentTotalChart = new Chart(emailSentTotalCtx, {
  type: "pie",
  data: {
    labels: ["860 Send", "730 Open", "234 Spam"],
    datasets: [
      {
        data: [860, 730, 234],
        backgroundColor: ["#775DA6", "#FFB1B7", "#70B6C1"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

const myBarChart = new Chart(incomeAmountsCtx, {
  type: "bar",
  data: {
    labels: Array(12).fill(""), // Empty labels to hide them
    datasets: [
      {
        data: [3, 4, 2, 5, 6, 4, 7, 8, 5, 9, 6, 7], // Example data
        backgroundColor: "#6f42c1",
        borderRadius: {
          topLeft: 2,
          topRight: 2,
        },
        barPercentage: 1,
        categoryPercentage: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
  },
});

let myChart = new Chart(revenueCtx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset",
        data: [880, 850, 830, 750, 825, 780, 900],
        borderColor: "#6f42c1",
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 20,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});
