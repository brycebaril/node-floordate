"use strict";

module.exports = floorDate

module.exports.toSecond  = function (date, offset) { return floorDate(date, "s", offset) }
module.exports.toMinute  = function (date, offset) { return floorDate(date, "m", offset) }
module.exports.toHour    = function (date, offset) { return floorDate(date, "h", offset) }
module.exports.toDay     = function (date, offset) { return floorDate(date, "d", offset) }
module.exports.toWeek    = function (date, offset) { return floorDate(date, "w", offset) }
module.exports.toMonth   = function (date, offset) { return floorDate(date, "M", offset) }
module.exports.toQuarter = function (date, offset) { return floorDate(date, "q", offset) }
module.exports.toYear    = function (date, offset) { return floorDate(date, "y", offset) }

var isNumber = require("isnumber")

var MILLIS_PER_MINUTE = 60 * 1000

function floorDate(date, threshold, tzOffset) {
  var floored = _floorDate(date, threshold)

  if (tzOffset != null) {
    if (!(isNumber(tzOffset))) {
      if (tzOffset == "UTC" || tzOffset == "utc") {
        tzOffset = 0
      }
      else {
        throw new Error("Unrecognized timezone offset " + tzOffset + " (expected minutes or 'UTC')")
      }
    }
    var offsetMillis = (floored.getTimezoneOffset() - tzOffset) * MILLIS_PER_MINUTE
    floored = new Date(floored.getTime() + offsetMillis)
  }

  return floored
}

function _floorDate(date, threshold) {
  if (isNumber(date) && !(date instanceof Date)) date = new Date(date)
  var out = date
  if (threshold == null) return date

  if (isNumber(threshold) && threshold !== 0) {
    // threshold is a number in milliseconds, truncate date
    var ts = date.getTime()
    return new Date((Math.floor(ts / threshold)) * threshold)
  }

  switch (threshold) {
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
      year = date.getFullYear()
      month = date.getMonth()
      var quarter_month = (((month)/3) | 0) * 3
      // TBD timezone issues?
      date = new Date(year, quarter_month, 1)
      break
    default:
      return new Error("Unknown/Invalid time threshold for floorDate")
  }

  return date
}
