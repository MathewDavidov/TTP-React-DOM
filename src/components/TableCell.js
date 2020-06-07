import React, { Component } from 'react';

const TableCell = ({ cellColor, handleClick }) => {
    /* cellColor would be used for other features */
    return (
        <td style={{ backgroundColor: "white", textAlign: "center" }} onClick={handleClick}>
            $
        </td>
    )
}

export default TableCell;