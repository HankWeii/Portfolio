import React from 'react'
import * as Sty  from '../../../styled'
import Img from './PortfolioImg.jpg'

export default function Roulette() {

    return (
        <Sty.PortfolioOuther>
            <Sty.Portfolioinner>
                <a href='https://hankweii.github.io/ru-retto/' target='_blank'><Sty.PortfolioImg src={Img}></Sty.PortfolioImg></a>
            </Sty.Portfolioinner>
            <Sty.Portfolioinner>
                往往不知道要吃什麼嗎,試試看吧!
            </Sty.Portfolioinner>
        </Sty.PortfolioOuther>
    )
}
