import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import ReactRedux from './Portfolio/React-Redux'
// import Poker from './Portfolio/Poker'
// import UserSearch from './Portfolio/UserSearch'
// import TodoList from './Portfolio/TodoList'
// import MouseMove from './Portfolio/MouseMove'
// import KFC from './Portfolio/KFC'
// import Natsumatsuri from './Portfolio/Natsumatsuri'
// import Roulette from './Portfolio/Roulette'
import Loading from './Loading'
const ReactRedux = lazy(()=>import('./Portfolio/React-Redux'))
const Poker = lazy(()=>import('./Portfolio/Poker'))
const UserSearch = lazy(()=>import('./Portfolio/UserSearch'))
const TodoList = lazy(()=>import('./Portfolio/TodoList'))
const MouseMove = lazy(()=>import('./Portfolio/MouseMove'))
const KFC = lazy(()=>import('./Portfolio/KFC'))
const Natsumatsuri = lazy(()=>import('./Portfolio/Natsumatsuri'))
const Roulette = lazy(()=>import('./Portfolio/Roulette'))
const TaiwanMap = lazy(()=>import('./Portfolio/TaiwanMap'))
const SectumSempra = lazy(()=>import('./Portfolio/SectumSempra'))
const Yilan = lazy(()=>import('./Portfolio/Yilan'))



function Main(props) {
    return (
        <div style={{width: '85vw', backgroundColor:'#3D3D3D', height:'95vh'}}>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {/* {
                        props.portfolioData.map(pObj=>{
                            return <Route key={pObj.id} path={`/portfolio/${pObj.url}`} element={<pObj.name/>}></Route>
                        })
                    } */}
                    <Route path='/portfolio/reactredux' element={<ReactRedux/>}></Route>
                    <Route path='/*' element={<Poker/>}></Route>
                    <Route path='/portfolio/usersearch' element={<UserSearch/>}></Route>
                    <Route path='/portfolio/todolist' element={<TodoList/>}></Route>
                    <Route path='/portfolio/mousemove' element={<MouseMove/>}></Route>
                    <Route path='/portfolio/kfc' element={<KFC/>}></Route>
                    <Route path='/portfolio/natsumatsuri' element={<Natsumatsuri/>}></Route>
                    <Route path='/portfolio/roulette' element={<Roulette/>}></Route>
                    <Route path='/portfolio/taiwanmap' element={<TaiwanMap />} />
                    <Route path='/portfolio/sectumsempra' element={<SectumSempra />} />
                    <Route path='/portfolio/yilan' element={<Yilan/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default connect(
    state=>({portfolioData : state})
)(Main)