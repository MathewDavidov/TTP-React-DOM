import React, { Component } from 'react';
import TableRow from "./TableRow";

const Table = ({ cellColor, numRows, numColumns, handleClick }) => {
    let tableRows = [];

    for (let i = 0; i < numRows; i++) {
        tableRows.push(
            <TableRow 
                key={i}
                cellColor={cellColor}
                numColumns={numColumns}
                handleClick={handleClick}
            />
        )
    }

    return (
        <table className="table table-bordered">
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default Table;