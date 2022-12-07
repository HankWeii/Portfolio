import React from 'react'
import * as Sty  from '../../../styled'
import Img from './PortfolioImg.jpg'

export default function Poker() {
    
    return (
        <Sty.PortfolioOuther>
            <Sty.Portfolioinner>
                <a href='https://hankweii.github.io/Poker/' target='_blank'><Sty.PortfolioImg src={Img}></Sty.PortfolioImg></a>
            </Sty.Portfolioinner>
            <Sty.Portfolioinner>
                利用React-Spring和Hook來實現撲克牌翻轉動畫
            </Sty.Portfolioinner>
        </Sty.PortfolioOuther>
    )
}