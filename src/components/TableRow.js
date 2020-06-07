import React, { Component } from 'react';
import TableCell from "./TableCell";

const TableRow = ({ cellColor, numColumns, handleClick }) => {
    let tableColumns = [];

    for (let i = 0; i < numColumns; i++) {
        tableColumns.push(
            <TableCell 
                key={i}
                cellColor={cellColor}
                handleClick={handleClick}
            />
        )
    }

    return (
        <tr>
            {tableColumns}
        </tr>
    )
}

export default TableRow;