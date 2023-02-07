import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/actions/portfolio'

function Nav(props) {
    return (
        <div style={{width: '15vw', backgroundColor:'pink',height:'95vh'}}>
            <h3>作品集</h3>
            {
                props.portfolioDate.map((pObj)=>{
                    return(
                        <div key={pObj.id}>
                            <hr/>
                            <NavLink to={`/portfolio/${pObj.url}`}>{pObj.title}</NavLink> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect(
    state=> ({portfolioDate : state}),
    {
        increment: createIncrementAction
    }
)(Nav)