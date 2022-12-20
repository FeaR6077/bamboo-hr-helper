import api from "./api.js";
import helpers from "./helpers.js";

console.log("BambooHR automatic time entry");
console.log("📆 Getting past month times");
// const times = await api.getPastMonthTimes()`
// const days = helpers.parseDates(times)`
const days = ["2022-12-10", "2022-12-17", "2022-12-21"]
days.forEach(async day => {
    const { start, end } = helpers.getRandomTimes()
    console.log("⏰ Clocking in and out for " + day + " from " + start + " to " + end);
    // await api.addTimeEntry({ day, start, end })
});

console.log("🎉 all done!");