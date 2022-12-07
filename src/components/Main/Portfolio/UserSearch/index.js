import React from 'react'
import * as Sty  from '../../../styled'
import Img from './PortfolioImg.jpg'

export default function UserSearch() {

    return (
        <Sty.PortfolioOuther>
            <Sty.Portfolioinner>
                <a href='https://hankweii.github.io/UserSearch/' target='_blank'><Sty.PortfolioImg src={Img}></Sty.PortfolioImg></a>
            </Sty.Portfolioinner>
            <Sty.Portfolioinner>
                利用Axios發送Ajax請求,讀取用戶資料並顯示
            </Sty.Portfolioinner>
        </Sty.PortfolioOuther>
    )
}