import React from 'react'
import ReactDOM from 'react-dom'
 
var HelloBox = React.createClass({
 
  render: function() {
    return (
      <div className="helloTag">
            <h1>Electron React</h1>
      </div>
    );
  }
});
 
ReactDOM.render(<HelloBox/>, document.getElementById('root'));