import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ReactRedux from './Portfolio/React-Redux'
import Poker from './Portfolio/Poker'
import UserSearch from './Portfolio/UserSearch'
import TodoList from './Portfolio/TodoList'
import MouseMove from './Portfolio/MouseMove'
import KFC from './Portfolio/KFC'
import Natsumatsuri from './Portfolio/Natsumatsuri'
import Roulette from './Portfolio/Roulette'

export default function Main() {
    return (
        <div style={{width: '85vw', backgroundColor:'#3D3D3D', height:'94vh'}}>
            <Routes>
                <Route path='/portfolio/reactredux' element={<ReactRedux/>}></Route>
                <Route path='/*' element={<Poker/>}></Route>
                <Route path='/portfolio/userserch' element={<UserSearch/>}></Route>
                <Route path='/portfolio/todolist' element={<TodoList/>}></Route>
                <Route path='/portfolio/mousemove' element={<MouseMove/>}></Route>
                <Route path='/portfolio/kfc' element={<KFC/>}></Route>
                <Route path='/portfolio/natsumatsuri' element={<Natsumatsuri/>}></Route>
                <Route path='/portfolio/roulette' element={<Roulette/>}></Route>
            </Routes>
        </div>
    )
}
