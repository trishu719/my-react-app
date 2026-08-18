import React, { useContext } from 'react'
import { Button, Col, Image, Row, Table } from 'react-bootstrap'
import { WishlistContext } from '../ContextAPI/context'
import { Cart, Trash } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'


export const Wishlist = () => {

  const { wishlistState, wishlistDispatch } = useContext(WishlistContext)


  const handleRemoveFromWishlist = (item) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item, })
  }

  return (<>{
    wishlistState?.wishlistItems?.length <= 0 ? (
      <>
        <p className='text-danger text-center  fs-4 mt-5'>
          Your wishlist is empty. Please Add The Items
        </p>
        <p className='text-center mb-5'>
          <NavLink to="/products" className="text-decoration-none fs-5 fw-bold"> Add Items</NavLink>
        </p>
      </>
    ) : (
      <Table>
        <thead>
          <tr>
            <th className="ps-5 cart-product-image">Image</th>
            <th className="ps-5 cart-product-info">Title</th>
            <th className="ps-5 cart-product-price">Price</th>
            <th className="ps-5 cart-product-subtotal">Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlistState?.wishlistItems?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="ps-5 cart-product-image">
                  <NavLink to="product-details.html"><Image width={100} src={item.thumbnail} alt="#" /></NavLink>
                </td>
                <td className="ps-5 cart-product-info">
                  <h4 className=' mt-4'><NavLink to="product-details.html" className="text-decoration-none">{item.title}</NavLink></h4>
                </td>
                <td className="ps-5 cart-product-price"><p className='mt-4'>{item.price}</p></td>
                <td className="ps-5 cart-product-add-cart">
                  <div className='d-flex gap-2 mt-4'>
                    <Button variant='outline-danger' onClick={() => handleRemoveFromWishlist(item)} className='d-flex justify-content-center align-items-center'><Trash /></Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
  </>)
}