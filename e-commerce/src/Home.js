import React from 'react'
import ItemCard from './ItemCard'
import data from './data'

export default function Home() {
    return (
        <>
            <h1 className="text-center mt-3"> All Item</h1>
            <section className='py-4 container'>
                <div className=' row justify-content-center'>
                    {

                        data.products.map((item, index) => {
                            return (
                                <ItemCard img={item.image} title={item.name}
                                    price={item.price}
                                    item={item}
                                    key={index}

                                />
                            )
                        }
                        )
                    }

                </div>
            </section>

        </>
    )
}
