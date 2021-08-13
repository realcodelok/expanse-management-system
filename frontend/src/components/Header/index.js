import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import useStyles from './style';

export default function Header(props) {
    
    const classes = useStyles();
    return (
        <AppBar position="permanent" className={classes.appbar}>
            <Toolbar>
                
            </Toolbar>
        </AppBar>
    )
}
