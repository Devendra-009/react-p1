import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="new-collections-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
