import React from 'react'
import { useCart } from 'react-use-cart'

export default function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
    } = useCart();
    if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h2 className=" justify-content-center">cart : ({totalUniqueItems}) , total Items : ({totalItems})</h2>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {
                                items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.image} style={{ height: '6rem', width: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>quantity: ({item.quantity})</td>
                                            <td>
                                                <button className='btn btn-secondary m-1'
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)
                                                    }> - </button>
                                                <button className='btn btn-secondary m-1'
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)
                                                    }> + </button>
                                                <button className='btn btn-danger m-1'

                                                    onClick={() => removeItem(item.id)}
                                                > Remove </button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
            <div className='col-auto ms-auto'>
                <h1>Total : $ {cartTotal} </h1>
                <button className='btn btn-danger m-1'

                    onClick={() => emptyCart()}
                > Remove All</button>
                <button className='btn btn-info m-1'> BUY NOW</button>


            </div>
        </section>
    )
}
