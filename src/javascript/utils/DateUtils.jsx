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

function getYear(value){
  var date = dateObject(value);
  return date.getUTCFullYear();
}

function getMonth(value){
  var date = dateObject(value);
  return date.getUTCMonth();
}

function getDay(value){
  var date = dateObject(value);
  return date.getUTCDate();
}

function getDayOfWeek(value){
  var date = dateObject(value);
  return date.getUTCDay();
}

/* DateUtils -----------------------------------------------------------------*/
module.exports = {
  createDateID: function(value){
    var date = dateObject(value);
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDay(date);
    return Date.UTC(year, month, day);
  },

  getYear: getYear,

  getMonth: getMonth,

  getDay: getDay,

  getDayOfWeek: getDayOfWeek,

  getMonthStartDay: function(value){
    var date = dateObject(value);
    var year = getYear(date);
    var month = getMonth(date);
    var firstDay = new Date(year, month, 1);
    return getDayOfWeek(firstDay);
  },

  getMonthLength: function(year, month){
    var monthLength;
    if (month === 1) { // February only!
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        monthLength = 29;
      }
    } else {
      monthLength = DAYS_IN_MONTH[month];
    }
    return monthLength;
  },

  getDayString: function(day){
    return DAYS_IN_WEEK[day];
  },

  getMonthString: function(month){
    return MONTHS_IN_YEAR[month];
  }

};
