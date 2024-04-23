// Sample temperature data for a week (in degrees Celsius)
//https://fastforex.readme.io/reference/get_time-series
const temperatures = [20, 22, 25, 23, 21, 24, 26];

// Labels for the days of the week
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Get the canvas element
const canvas = document.getElementById("myChart");
const ctx = canvas.getContext("2d");

// Create the chart
new Chart(ctx, {
  type: "line",
  data: {
    labels: daysOfWeek,
    datasets: [{
      label: "Temperature (°C)",
      data: temperatures,
      fill: false, // Do not fill the area under the line
      borderColor: "rgba(54, 162, 235, 0.2)", // Line color
      tension: 0.1 // Line tension (0 for straight lines)
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true // Start the y-axis at zero
      }
    }
  }
});
