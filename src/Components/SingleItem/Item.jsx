import React from 'react'

function Item(props) {
    return (
        <div className='item'>
            <img src={props.details.image} alt="Item Image" />
            <p>{props.details.title}</p>
            <h3>Ksh. {props.details.price}</h3>
            <p className={'categoryDesc'}>
                ({props.details.category})
            </p>
        </div>
    )
}

export default Item