import React from 'react';
import AddIcon from '@material-ui/icons/Add';

const Footer = () => {
    const button = {
        padding: "10px",
        display: "flex",
        alignItems: "center"
    }
    return (
        <div className="footer">
            <p>comming footer</p>
            <button style = {button}> <AddIcon color="red" padding="3px"/>i am button</button>

        </div>
    )
}

export default Footer
