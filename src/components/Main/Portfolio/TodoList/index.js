import React from 'react'
import * as Sty  from '../../../styled'
import Img from './PortfolioImg.jpg'

export default function TodoList() {

    return (
        <Sty.PortfolioOuther>
            <Sty.Portfolioinner>
                <a href='https://hankweii.github.io/TodoList/' target='_blank'><Sty.PortfolioImg src={Img}></Sty.PortfolioImg></a>
            </Sty.Portfolioinner>
            <Sty.Portfolioinner>
                剛學會React,利用組件化的方式簡易寫出備忘清單
            </Sty.Portfolioinner>
        </Sty.PortfolioOuther>
    )
}
