import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import * as Sty  from './components/styled'
import './App.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Sty.Main>
        <Nav/>
        <Main/>
      </Sty.Main>
    </div>
  )
}
