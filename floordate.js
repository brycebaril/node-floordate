module.exports = floorDate

module.exports.toSecond  = function (date) { return floorDate(date, "s") }
module.exports.toMinute  = function (date) { return floorDate(date, "m") }
module.exports.toHour    = function (date) { return floorDate(date, "h") }
module.exports.toDay     = function (date) { return floorDate(date, "d") }
module.exports.toWeek    = function (date) { return floorDate(date, "w") }
module.exports.toMonth   = function (date) { return floorDate(date, "M") }
module.exports.toQuarter = function (date) { return floorDate(date, "q") }
module.exports.toYear    = function (date) { return floorDate(date, "y") }

var isNumber = require("isnumber")

function floorDate(date, window) {
  if (isNumber(date) && !(date instanceof Date)) date = new Date(date)
  if (window == null) return date

  if (isNumber(window)) {
    // window is a number in milliseconds, truncate date
    var ts = date.getTime()
    return new Date((Math.floor(ts / window)) * window)
  }

  switch (window) {
    // Fall-through on purpose
    case "y":
    case "yr":
    case "yrs":
    case "year":
    case "years":
      date.setMonth(0)
    case "M":
    case "mon":
    case "mons":
    case "month":
    case "months":
      date.setDate(1)
    case "d":
    case "day":
    case "days":
      date.setHours(0)
    case "h":
    case "hr":
    case "hrs":
    case "hour":
    case "hours":
      date.setMinutes(0)
    case "m":
    case "min":
    case "mins":
    case "minute":
    case "minutes":
      date.setSeconds(0)
    case "s":
    case "sec":
    case "secs":
    case "second":
    case "seconds":
      date.setMilliseconds(0)
      break // End fall-through
    case "w":
    case "wk":
    case "wks":
    case "week":
    case "weeks":
      // special Sun-Sat 0-6
      var year = date.getFullYear()
      var month = date.getMonth()
      var day = date.getDay()
      var new_day = date.getDate() - day
      date = new Date(year, month, new_day)
      break
    case "q":
    case "qtr":
    case "qtrs":
    case "quarter":
    case "quarters":
      var year = date.getFullYear()
      var month = date.getMonth()
      var quarter_month = (((month)/3) | 0) * 3
      // TBD timezone issues?
      date = new Date(year, quarter_month, 1)
      break
    default:
      return new Error("Unknown/Invalid time window for floorDate")
  }

  return date
}