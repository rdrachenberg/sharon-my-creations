import { CheckIcon, MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { stripe } from "src/utils/stripe";
import { formatCurrencyString, useShoppingCart} from "use-shopping-cart";
import { toast } from "react-hot-toast";
import ReactImageMagnify from 'react-image-magnify'


export default function ProductPage({ product }) {  
    // console.log(product);
    const imageBaseUrl = product.image;
    console.log(imageBaseUrl);
    const sizes = [ "355","481","584","687","770","861","955","1033","1112","1192","1200"];

    const [count, setCount] = useState(1);

    const { addItem } = useShoppingCart();
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    const description = params.description;

    const srcSet = () => {
        sizes.forEach((i) => {
            return `${imageBaseUrl}/w_${i},c_scale`
        })
    }

    function onAddToCart(e) {
        e.preventDefault()
        const id = toast.loading(`Adding ${count} item${count > 1 ? "s":""}`);
        addItem(product, { count });
        toast.success(`${count} ${product.name} added`, {id})
    }
    // console.log(product);
    // <Image src={product.image} alt={product.name} fill style={{objectFit: 'contain'}} sizes='100%' priority/>
    return( 
        <div className='container lg:max-w-screen-lg mx-auto py-12 px-6 '>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12'>
                <div className='image relative w-72 h-72 sm:w-96 sm:h-96 '>
                    
                    <ReactImageMagnify 
                        {...{
                            smallImage: {
                                alt: product.name,
                                isFluidWidth: true,
                                src: product.image,
                                srcSet,
                                sizes: '(min-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                            }, 
                            largeImage: {
                                alt: product.name,
                                src: product.image,
                                width: 850,
                                height: 850
                            }, 
                            isHintEnabled: true,
                            // enlargedImageContainerClassName: 'image',
                            shouldUsePositiveSpaceLens: true,
                            enlargedImageContainerDimensions: {
                                width: '200%',
                                height: '100%'
                            },
                            isEnlargedImagePortalEnabledForTouch: false,
                            enlargedImageStyle: {
                                maxWidth: '640px',
                                objectFit:'contain'
                            }
                            // enlargedImagePortalId: 'texter'
                            
                            
                        }} className='relative w-72 h-72 sm:w-96 sm:h-96 sm:hover:flex sm:hover:absolute' style={{objectFit: 'contain'}} sizes='100%' priority
                    />

                    {/* <Image src={product.image} alt={product.name} fill style={{objectFit: 'contain'}} sizes='100%' priority/> */}
                </div>
                
                <div className='w-full flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 bg-slate-300'>
                    <h2 className='text-xl font-semibold'>{product.name}</h2>
                    <h3 className='text-sm font-semibold'>{description}</h3>
                    <p className='pt-2 flex items-center space-x-2'>
                        <CheckIcon className='text-lime-500 w-5 h-5'/>
                        <span className='font-semibold'>In stock</span>
                    </p>

                    <div className='mt-4 border-t pt-4'>
                        <p className='text-gray-500'>Price:</p>
                        <p className='text-xl font-semibold'>
                            {formatCurrencyString({
                                value: product.price,
                                currency: product.currency,
                            })}
                        </p>
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <p className='text-gray-500'>Quantity:</p>
                        <div className='mt-1 flex items-center space-x-3'>
                            <button disabled={count <= 1} onClick={() => setCount(count - 1)} className='p-1 rounded-md hover:bg-rose-100 hover:text-rose-500'>
                                <MinusSmallIcon className='w-6 h-6 flex-shrink-0'/>
                            </button>
                            <p className='font-semibold text-xl'>{count}</p>
                            <button onClick={() => setCount(count + 1)} className='p-1 rounded-md hover:bg-green-100 hover:text-green-500'>
                                <PlusSmallIcon className='w-6 h-6 flex-shrink-0' />
                            </button>
                        </div>
                        
                    </div>
                    <button onClick={onAddToCart} className='w-full mt-4 border border-lime-500 py-2 px-6 bg-lime-500 hover:bg-lime-600 hover:borderlime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white disabled:opacity-50 disable:cursor-not-allowed rounded-md '>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const inventory = await stripe.products.list();
    const paths = inventory.data.map(product => ({
        params: { id: product.id }
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({params}) {
    
    const inventory = await stripe.products.list({
        expand: ['data.default_price'],
      });
    
    const products = inventory.data.map(product => {
    const price = product.default_price;
    // console.log(price);
    return {
        currency: price.currency,
        id: product.id,
        name: product.name,
        price: price.unit_amount,
        image: product.images[0]
    };
    });
      
    const product = products.find(product => product.id === params.id);

    return {
    props: {
        product,
    },
    revalidate: 20,
    }
}