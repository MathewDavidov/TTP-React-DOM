import React, { Component } from 'react';
import TableCell from "./TableCell";

const TableRow = ({ cellColor, numColumns }) => {
    let tableColumns = [];

    for (let i = 0; i < numColumns; i++) {
        tableColumns.push(
            <TableCell 
                key={i}
                cellColor={cellColor}
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