import React from 'react'
import { Paper, Card, Typography, makeStyles, Button, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme:Theme) => ({
   
    root: {
        backgroundColor: '#fdfdff',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    pageHeader:{
        padding:theme.spacing(1),
        display:'flex',
    },
    pageIcon:{
        padding:theme.spacing(1),
        color:'#00b4ff'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        display: "flex",
        justifyContent:"center",
        flexDirection:"column"
    },
}))

export const PageHeader = (props: { title: any; icon:any;}) => {
    const classes = useStyles();
    const {title, icon} = props;
    return (
        <Paper elevation={2} className={classes.root}>
        <div className={classes.pageHeader}>
            <Card className={classes.pageIcon}>
                {icon}
            </Card>
            <div className={classes.pageTitle}>
                <Typography
                    variant = "h3"
                    component="div">
                    {title}</Typography>
            </div>
        </div>
    </Paper>
    )
}
