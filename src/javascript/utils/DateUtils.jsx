/** =========================================================================
 * DateUtils.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

/* Global --------------------------------------------------------------------*/
var DAYS_IN_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var MONTHS_IN_YEAR = ['January', 'February', 'March', 'April',
                  'May', 'June', 'July', 'August', 'September',
                  'October', 'November', 'December'];



/* Helper Functions ----------------------------------------------------------*/
function dateObject(value){
  value = value || new Date();
  return (Object.prototype.toString.call(value) === '[object Date]') ? value : new Date(value);
}


/* REACT did't like internal method access -----------------------------------*/
function getYear(value){
  var date = dateObject(value);
  return date.getFullYear();
}

function getMonth(value){
  var date = dateObject(value);
  return date.getMonth();
}

function getDay(value){
  var date = dateObject(value);
  return date.getDate();
}

function getDayOfWeek(value){
  var date = dateObject(value);
  return date.getDay();
}

function getDayString(value){
  var day = getDayOfWeek(value);
  return DAYS_IN_WEEK[day];
}

function getMonthString(value){
  var month = getMonth(value);
  return MONTHS_IN_YEAR[month];
}

/* DateUtils -----------------------------------------------------------------*/
module.exports = {
  createDateID: function(value){
    var date = dateObject(value);
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDay(date);
    var cleanDate = new Date(year, month, day);
    return (cleanDate.getTime());
  },

  getMonthStartDay: function(value){
    var date = dateObject(value);
    var year = getYear(date);
    var month = getMonth(date);
    var firstDay = new Date(year, month, 1);
    return getDayOfWeek(firstDay);
  },

  getMonthLength: function(value, shift){
    shift = shift || 0;
    var date = dateObject(value);
    var month = getMonth(date);
    if (shift) {
      date.setMonth(month + shift);
      month = getMonth(date);
    }
    var year = getYear(date);
    var monthLength;

    var isLeap = new Date(year, 1, 29).getMonth() == 1;
    if (isLeap) {
      monthLength = 29;
    } else {
      monthLength = DAYS_IN_MONTH[month];
    }

    return monthLength;
  },

  getYear: getYear,
  getMonth: getMonth,
  getDay: getDay,
  getDayOfWeek: getDayOfWeek,
  getDayString: getDayString,
  getMonthString: getMonthString

};
