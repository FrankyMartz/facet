/** =========================================================================
 * Facet Controller View
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

var React = require('react');
var Calendar = require('./Calendar.react.jsx');

var Facet = React.createClass({
  render: function(){
    return (
      <Calendar />
    );
  }
});

module.exports = Facet;
