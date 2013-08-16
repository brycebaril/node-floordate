floordate
=========

[![NPM](https://nodei.co/npm/floordate.png)](https://nodei.co/npm/floordate/)

`floordate` is a simple function for setting a date to the beginning of a standard time window. E.g. the beginning of the month, year, week, etc.

**IMPORTANT** All dates are considered to be in your locale's timezone.

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

```

API
===

`floorDate(date, window)`
----------------------

Floor a date to the beginning of the specified window.

  * date: date can be a Date or a millisecond epoch timestamp
  * window: window can be a number of milliseconds, or a time window matching the following:
    * s, sec, secs, second, seconds
    * m, min, mins, minute, minutes
    * h, hr, hrs, hour, hours
    * d, day, days
    * w, wk, wks, week, weeks
    * M, mon, mons, month, months
    * y, yr, yrs, year, years
    * q, qtr, qtrs, quarter, quarters

Aliases
-------

  * `floorDate.toSecond(date)`
  * `floorDate.toMinute(date)`
  * `floorDate.toHour(date)`
  * `floorDate.toDay(date)`
  * `floorDate.toWeek(date)`
  * `floorDate.toMonth(date)`
  * `floorDate.toQuarter(date)`
  * `floorDate.toYear(date)`

LICENSE
=======
MIT