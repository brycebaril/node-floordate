floordate
=========

[![NPM](https://nodei.co/npm/floordate.png)](https://nodei.co/npm/floordate/)

`floordate` is a simple function for setting a date to the beginning of a standard time threshold. E.g. the beginning of the month, year, week, etc.

```js
var floorDate = require("floordate")

var d = new Date()
// Thu Aug 15 2013 19:38:49 GMT-0700 (PDT)

floorDate(d, 5000) // floor to the nearest 5000 ms interval prior to now
// Thu Aug 15 2013 19:38:45 GMT-0700 (PDT)

floorDate(d, "second")
// Thu Aug 15 2013 19:38:45 GMT-0700 (PDT)
// or
floorDate.toSecond(d)
// Thu Aug 15 2013 19:38:45 GMT-0700 (PDT)

floorDate(d, "minute")
// Thu Aug 15 2013 19:38:00 GMT-0700 (PDT)

floorDate(d, "hour")
// Thu Aug 15 2013 19:00:00 GMT-0700 (PDT)

floorDate(d, "day")
// Thu Aug 15 2013 00:00:00 GMT-0700 (PDT)

floorDate(d, "week")
// Sun Aug 11 2013 00:00:00 GMT-0700 (PDT)

floorDate(d, "quarter")
// Mon Jul 01 2013 00:00:00 GMT-0700 (PDT)

floorDate(d, "year")
// Tue Jan 01 2013 00:00:00 GMT-0800 (PST)

floorDate(d, "day", "UTC")
// Thu Aug 15 2013 07:00:00 GMT-0700 (PDT)

```

API
===

`floorDate(date, threshold[, timezoneOffset])`
----------------------

Floor a date to the beginning of the specified threshold. If provided with a desired timezoneOffset, it will convert from the current **LOCALE** timezone to the offset specified.

  * date: date can be a Date or a millisecond epoch timestamp
  * threshold: threshold can be a number of milliseconds, or a time threshold matching the following:
    * s, sec, secs, second, seconds
    * m, min, mins, minute, minutes
    * h, hr, hrs, hour, hours
    * d, day, days
    * w, wk, wks, week, weeks
    * M, mon, mons, month, months
    * y, yr, yrs, year, years
    * q, qtr, qtrs, quarter, quarters
  * timezoneOffset: (in minutes, e.g. Date.getTimezoneOffset())
    * Also accepts "UTC" as an alias for offset 0

Note about DST:
---

Timezone conversion is applied on the resulting date -- e.g. it will look at the local offset of the resulting floored date, then apply the offset to return a Date object with the offset applied.

This means it is the responsibility of the user to correctly specify the desired timezone offset including DST for the **resulting** date, which may be different.

Aliases
-------

  * `floorDate.toSecond(date[, timezoneOffset])`
  * `floorDate.toMinute(date[, timezoneOffset])`
  * `floorDate.toHour(date[, timezoneOffset])`
  * `floorDate.toDay(date[, timezoneOffset])`
  * `floorDate.toWeek(date[, timezoneOffset])`
  * `floorDate.toMonth(date[, timezoneOffset])`
  * `floorDate.toQuarter(date[, timezoneOffset])`
  * `floorDate.toYear(date[, timezoneOffset])`

LICENSE
=======
MIT
