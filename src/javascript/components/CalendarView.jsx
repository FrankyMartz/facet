/** =========================================================================
 * CalendarView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

var React = require('react');
var CalendarHeader = require('./CalendarHeadView.jsx');
var CalendarTable = require('./CalendarTableView.jsx');

var CalendarView = React.createClass({
  render: function(){
    return (
      <section className="cal">
        <CalendarHeader />
        <CalendarTable />
      </section>
    );
  }
});

module.exports = CalendarView;
