import React, { useEffect, useState } from 'react'
import Card from './Card'
import data from './data'

const Pegination = () => {
  const [products, setProducts] = useState(data)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const start = (page - 1) * 3
    const end = start + 3
    const newData = data.slice(start, end)
    setProducts(newData)
  }, [page])
  
  const totalPages = Math.ceil(data.length/3)

  return (
    <>
      <div className='py-12'>
        <button disabled={page === 1 ? true : false} onClick={() => setPage(page - 1)} className='bg-yellow-500 p-2 px-5 mx-2 disabled:bg-yellow-200 disabled:cursor-not-allowed'>Prev</button>
        <button disabled={page === totalPages?true:false} onClick={() => setPage(page + 1)} className='bg-yellow-500 p-2 px-5 mx-2 disabled:bg-yellow-200 disabled:cursor-not-allowed'>Next</button>
        <div className="flex flex-wrap mt-5">
          {
            products.map((product) => {
              return (
                <div className="w-1/3 px-3 my-2">
                  <Card product={product} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Pegination