import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        margin: "20px 0",
    },
    fullscreen: {
        position: "absolute",
        right: "30px",
        top: "60px",
    },
    video: {
        border: "1px solid black",
        padding: "5px",
        backgroundColor: "white",
    },
}));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            {stream && (
                <div>
                    <p style={{
                        textAlign: "center",
                        padding: "10px",
                        backgroundColor: "white",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        border: "1px solid black"
                    }}>{name || 'Name'}</p>
                    <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                </div>
            )}
            {callAccepted && !callEnded && (
                <div style={{ position: "relative" }}>
                    <p style={{
                        textAlign: "center",
                        padding: "10px",
                        backgroundColor: "white",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        border: "1px solid black"
                    }}>{call.name || 'Name'}</p>
                    <video playsInline ref={userVideo} autoPlay className={classes.video} />
                    <button className={classes.fullscreen}>Full Screen</button>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;