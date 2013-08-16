var test = require("tape").test

var floorDate = require("../floordate")

test("floorDate", function (t) {
  var initialTs = 1376610629725
  var initial = new Date(initialTs)

  t.deepEquals(floorDate(initialTs), initial, "no window gets unmodified date")
  t.deepEquals(floorDate(initial), initial, "no window gets unmodified date")

  t.equals(floorDate(initial, 100).getTime(), 1376610629700, "Floor to milliseconds")
  t.equals(floorDate(initial, 90000).getTime(), 1376610570000, "Floor to millis")

  var month = initial.getMonth()
  var day = initial.getDate()
  var hour = initial.getHours()
  var minute = initial.getMinutes()
  var second = initial.getSeconds()

  t.deepEquals(floorDate(initial, "s"),
    new Date(2013, month, day, hour, minute, second), "Floor to second")

  t.deepEquals(floorDate(initial, "min"),
    new Date(2013, month, day, hour, minute), "Floor to minute")

  t.deepEquals(floorDate(initial, "hour"),
    new Date(2013, month, day, hour), "Floor to hour")

  t.deepEquals(floorDate(initial, "d"),
    new Date(2013, month, day), "Floor to day")

  t.deepEquals(floorDate(initial, "wk"),
    new Date(2013, month, 11), "Floor to week")

  t.deepEquals(floorDate(initial, "month"),
    new Date(2013, month), "Floor to month")

  t.deepEquals(floorDate(initial, "q"),
    new Date(2013, 6), "Floor to quarter")

  t.deepEquals(floorDate(initial, "years"),
    new Date(2013, 0), "Floor to year")

  t.end()
})