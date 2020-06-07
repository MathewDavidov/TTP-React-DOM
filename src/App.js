import React, { Component } from 'react';
import Table from "./components/Table";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellColor: "#FFFFFF",
      numRows: 10,
      numColumns: 10,
    }
  }

  addRow = () => {

  }

  addColumn = () => {

  }

  removeRow = () => {

  }

  removeColumn = () => {

  }

  chooseColor = (event) => {
    
  }

  handleClick = (event) => {
    
  }

  render() {
    return (
      <>
        <div className="container justify-content-center">
          <div className="jumbotron">
            <div className="row">
              <div className="col">
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-primary" onClick={this.addRow}>Add Row</button>
                    <button type="button" className="btn btn-primary" onClick={this.addColumn}>Add Column</button>
                  </div>
                  <div className="btn-group mr-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-primary" onClick={this.removeRow}>Remove Row</button>
                    <button type="button" className="btn btn-primary" onClick={this.removeColumn}>Remove Column</button>
                  </div>
                </div>
              </div>
              <div className="col">  
                <label htmlFor="colors">Choose a color:</label>

                <select name="colors" className="colors" value={this.state.cellColor} onChange={this.chooseColor}>
                  <option value="#FFFFFF">Color (White)</option>
                  <option value="#FF0000">Red</option>
                  <option value="#00FF00">Green</option>
                  <option value="#0000FF">Blue</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <Table
              cellColor={this.state.cellColor}
              numRows={this.state.numRows}
              numColumns={this.state.numColumns}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </>
    )
  }
}

export default App;
