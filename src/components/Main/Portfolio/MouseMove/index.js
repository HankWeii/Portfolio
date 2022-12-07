import React from 'react'
import * as Sty  from '../../../styled'
import Img from './PortfolioImg.jpg'

export default function MouseMove() {
    
    return (
        <Sty.PortfolioOuther>
            <Sty.Portfolioinner>
                <a href='https://hankweii.github.io/scroll/' target='_blank'><Sty.PortfolioImg src={Img}></Sty.PortfolioImg></a>
            </Sty.Portfolioinner>
            <Sty.Portfolioinner>
                利用監聽事件,製作一個互動式網頁
            </Sty.Portfolioinner>
        </Sty.PortfolioOuther>
    )
}