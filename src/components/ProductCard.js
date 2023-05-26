import Link from 'next/link'
import Image from 'next/image'
import Rating from './Rating'
import { formatCurrencyString } from 'use-shopping-cart/core'
import { useShoppingCart } from 'use-shopping-cart'
import { toast } from 'react-hot-toast'


export default function ProductCard({ product, index }) {
    // console.log('and this is here')
    // console.log(product);
    // console.log(index)
    const { addItem } = useShoppingCart();

    function onAddToCart(e) {
        e.preventDefault()
        const id = toast.loading('Adding 1 item...')
        addItem(product);
        toast.success(`${product.name} added`, {id})
    }

    return (
        <Link 
        href={{pathname: `/products/${product.id}`, query: {description: product.description}}} 
        className='border border-opacity-50  shadow-lg rounded-md group overflow-hidden  '>

        <div className='relative w-full h-64'>
            <Image src={product.image} alt={product.name} priority={index === 0} fill sizes='25%' style={{objectFit: 'cover'}}/>
        </div>

        <div className='p-6 bg-white'>
            <p className='font-semibold text-lg overflow-hidden truncate'> {product.name}</p>
            
            <div className='mt-4 flex items-center justify-between space-x-2'>
                <div>
                    <p className='text-gray-500'>Price</p>
                    <p className='text-lg font-semibold'>{formatCurrencyString({
                        currency: product.currency,
                        value: product.price
                    })}</p>
                </div>
                <button onClick={onAddToCart} className='border rounded-lg py-1 px-4 transition bg-gradient-to-r from-[#25aae1] to-[#30dd8a] text-white hover:drop-shadow-xl hover:border-yellow-500' >Add to cart</button>
            </div>
        </div>

        </Link>
    )
}