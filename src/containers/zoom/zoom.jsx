import React, { useState } from 'react';
import './zoom.css';
import { Button } from '@mui/material';
import { getSignature } from '../../services/services';

const Zoom = () => {
    const [errorText, setErrorText] = useState("");
    function startMeetingClicked(e) {
        e.preventDefault();

        getSignature('123456789', 0, 'React', '', '', '').catch(error => {
            debugger
            setErrorText("Whoops...something went wrong.");
        });
    }

    return <div className="zoom-container">
        <div id="meetingSDKElement">
            {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
        <div className="button-container">
            <Button onClick={startMeetingClicked}>Join Meeting</Button>
        </div>
        <div id="ZoomError"><p>{errorText}</p></div>
    </div>
}

export default Zoom;