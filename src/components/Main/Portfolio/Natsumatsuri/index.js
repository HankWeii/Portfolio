import React from 'react'
import * as Sty  from '../../../styled'
import Img from './PortfolioImg.jpg'

export default function Natsumatsuri() {
    
    return (
        <Sty.PortfolioOuther>
            <Sty.Portfolioinner>
                <a href='https://hankweii.github.io/natsumatsuri/' target='_blank'><Sty.PortfolioImg src={Img}></Sty.PortfolioImg></a>
            </Sty.Portfolioinner>
            <Sty.Portfolioinner>
                嚮往去日本嗎?
            </Sty.Portfolioinner>
        </Sty.PortfolioOuther>
    )
}