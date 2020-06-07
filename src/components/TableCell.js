import React, { Component } from 'react';

const TableCell = ({ cellColor }) => {
    return (
        <td style={{backgroundColor: cellColor}}>
            $
        </td>
    )
}

export default TableCell;