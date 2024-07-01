
document.addEventListener("DOMContentLoaded", function () {
  // Update the current time in UTC
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    document.querySelector("[data-testid='currentTimeUTC']").textContent = utcTime;
    document.querySelector("[data-testid='currentDay']").textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
