import Link from "next/link"
import Logo from "./Logo"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from "use-shopping-cart"


export default function Header() {

    const { formattedTotalPrice, cartCount} = useShoppingCart();

    return (
        <header className='sticky top-0 bg-white z-10 shadow'> 
            <div className='container mx-auto p-2 flex justify-between'>
                <Logo />
                <Link href='/cart' className='flex items-center space-x-1 text-gray-700 hover:text-gray-900'>
                    <div className='relative'>
                        <ShoppingCartIcon className='w-4 h-4 flex shrink-0 lg:w-7 lg:h-7 md:w-5 md:h-5 sm:shrink' />
                    </div>
                    <p className='lg:text-lg sm:text-xs'>
                        {formattedTotalPrice}{'  '}
                    </p>
                    <span className='lg:text-lg sm:text-xs text-gray-500'>({cartCount})</span>
                </Link>
            </div>
        </header>
    )
}