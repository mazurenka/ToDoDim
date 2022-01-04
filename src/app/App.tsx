import React from "react";
import './App.css'
import {AppBar, Button, Container, IconButton, LinearProgress, Toolbar, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackBar} from "../components/ErrorSnackBar/ErrorSnackBar";
import {useSelector} from "react-redux";

import {RequestStatusType} from "./app-reducer";
import {AppRootStateType} from "./store";

function App() {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    return (
        <div className="App">
            <ErrorSnackBar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <TodolistsList/>
            </Container>
        </div>
    )
}

export default App
