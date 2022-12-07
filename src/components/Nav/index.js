import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div style={{width: '15vw', backgroundColor:'pink',height:'94vh'}}>
            <h3>作品集</h3>
            <hr/>
            <NavLink to='/portfolio/reactredux'>React-Redux</NavLink>
            <hr/>
            <NavLink to='/portfolio/poker'>Poker</NavLink>
            <hr/>
            <NavLink to='/portfolio/userserch'>UserSearch</NavLink>
            <hr/>
            <NavLink to='/portfolio/todolist'>TodoList</NavLink>
            <hr/>
            <NavLink to='/portfolio/mousemove'>MouseMove!</NavLink>
            <hr/>
            <NavLink to='/portfolio/kfc'>KFC優惠券快選</NavLink>
            <hr/>
            <NavLink to='/portfolio/natsumatsuri'>夏季開始!</NavLink>
            <hr/>
            <NavLink to='/portfolio/roulette'>想不到吃甚麼?</NavLink>
            <hr/>
            <NavLink>來學習50音吧!</NavLink>
        </div>
    )
}
