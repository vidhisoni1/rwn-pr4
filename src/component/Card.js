import React from 'react'

const Card = (props) => {
    const { title, price, image, description } = props.product
    return (
        <>
            <div className="card bg-green-200 h-full">
                <div className="img ">
                    <img src={image} alt="" className='mx-auto'  style={{height:'200px'}}/>
                </div>
                <div className="des">
                    <h3 className='text-2xl mb-2'>{title}</h3>
                    <p>{description}</p>
                    <h5 className='text-xl font-medium'>RS {price}</h5>
                </div>
            </div>
        </>
    )
}

export default Card