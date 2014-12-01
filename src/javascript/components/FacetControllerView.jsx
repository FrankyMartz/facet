/** =========================================================================
 * FacetControllerView
 *
 * CalenderView
 * CalenderHeadView
 * CalenderTableView
 * CalenderTableHeadView
 * CalenderTableBodyView
 * NoteView
 * NoteHeadView
 * NoteListView
 * NoteListItemView
 * NoteFootView
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

var React = require('react');
var Calendar = require('./CalendarView.jsx');
var Notes = require('./NoteView.jsx');

var FacetApp = React.createClass({
  render: function(){
    return (
      <div className="app">
        <Calendar />
        <Notes />
      </div>
    );
  }
});

module.exports = FacetApp;
