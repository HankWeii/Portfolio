import React from 'react'
import * as Sty  from '../../../styled'
import Img from './PortfolioImg.jpg'

export default function KFC() {
    
    return (
        <Sty.PortfolioOuther>
            <Sty.Portfolioinner>
                <a href='https://hankweii.github.io/filter/' target='_blank'><Sty.PortfolioImg src={Img}></Sty.PortfolioImg></a>
            </Sty.Portfolioinner>
            <Sty.Portfolioinner>
                將你愛吃的勾選,篩選出你愛吃的套餐吧!
            </Sty.Portfolioinner>
        </Sty.PortfolioOuther>
    )
}