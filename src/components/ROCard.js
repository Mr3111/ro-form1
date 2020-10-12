import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";
import * as data from '../ROList.json'
import './Element.css';
import {Redirect} from "react-router";


const ros=data.default;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingLeft: theme.spacing(1),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function ROCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        ros.map((ro)=>
            <div className='ro-card'>
            <Card className={classes.root}>
            <CardMedia
                // className='ro-card'
                className={classes.cover}
                image="../../public/logo512.png"
                title="Live from space album cover"
                onClick={()=>console.log('H1H1')}
            />
            <CardActionArea>
            <div className={classes.details} onClick={()=> {
                console.log('Hello')
                return <Redirect push to='/ro'/>
            }}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        RO Id - {ro.roId}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Current Status: {ro.currStatus}
                    </Typography>
                </CardContent>
            </div>
            </CardActionArea>
        </Card></div>)
    );
}
