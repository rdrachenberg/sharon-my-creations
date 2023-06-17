import { useState } from 'react';
import { stripe } from 'src/utils/stripe';
import ProductCard from 'src/components/ProductCard';
import { ChevronUpDownIcon, XMarkIcon, PowerIcon} from '@heroicons/react/24/solid'
import { CurrencyDollarIcon, Square2StackIcon } from '@heroicons/react/24/outline'
import { HiOutlineRefresh }  from 'react-icons/hi'
import { GiChicken, GiPaintBrush }  from 'react-icons/gi'


export default function Home({products}) {
  console.log(products)
  const [inventory, setInventory] = useState(products.sort((a, b) => (b.meta.type < a.meta.type) ? 1 : -1));
  console.log(inventory);

  // console.log(products);

  const handleArtSort = () => {
    handleReset();
    console.log(inventory)
    const filterOne = () => setInventory(inventory => inventory.filter(val => val.meta?.type === 'art'));
    // run conditional function per bool in the toggleThree var
    filterOne()
    return inventory
  }

  const handleHotChixSort = () => {
    handleReset();
    // console.log(inventory)
    const filterTwo = () => setInventory(inventory => inventory.filter(val => val.meta?.type === 'hot-chix'));
    filterTwo()

    return inventory
  }

  const handleMiscSort = () => {
    handleReset();
    const filterThree = () => setInventory(inventory => inventory.filter(val =>val.meta?.type === 'misc'));
    filterThree()

    return inventory
  }

  const handleReset = () => {
    setInventory([...products]);
    
    return inventory
  }

  return (
    <div className='container xl:max-w-screen-xl mx-auto py-1 px-6'>
      <div className='flex flex-row flex-grow mb-7 lg:place-content-end bg-gradient-to-r from-yellow-100 via-yellow-400 to-[#FCF41B] rounded pr-3 z-0 opacity-90 justify-between'>
        <div className='flex flex-row m-1 place-items-center rounded z-10'>
          <button className=' rounded-lg text-black p-1 w-26' style={{fontSize: '10px'}} onClick={handleArtSort}>
            Graphic Arts
          </button>
          <GiPaintBrush onClick={handleArtSort} className='w-6 h-6 text-black' />
        </div>
        <div className='flex flex-row m-1 place-items-center rounded z-10'>
          <button className='rounded-lg text-black p-1 w-26' style={{fontSize: '10px'}} onClick={handleHotChixSort}>
            "HotChix"
          </button>
          <GiChicken onClick={handleHotChixSort} className='w-6 h-6 text-black' />
        </div>
        <div className='flex flex-row m-1 place-items-center rounded z-10'>
          <button className=' rounded-lg text-black p-1 w-26' style={{fontSize: '10px'}} onClick={handleMiscSort}>
            Misc
          </button>
          <Square2StackIcon onClick={handleMiscSort} className='w-6 h-6 text-black' />
        </div>
        <div className='flex flex-row m-1 place-items-center rounded z-10'>
          <button className=' rounded-lg text-black p-1 w-26' style={{fontSize: '10px'}} onClick={handleReset}>
            Reset
          </button>
          <HiOutlineRefresh onClick={handleReset} className='w-6 h-6 text-black' />
        </div>
        
      </div>
      <div className='grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {inventory.map((product, index) => {
          return(<ProductCard key={product.id} product={product} index={index} description={product.description}/>)
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({
    limit: 100,
    expand: ['data.default_price']
  });
  // console.log(inventory.data);
  const products = inventory.data.map(product => {
    const price = product.default_price;
    // console.log(product)
    // console.log(price);
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0],
      description: product.description,
      meta: product.metadata,
    }
  })

  return {
    props: {
      products
    }
  }
}


  // written unneeded sort 
  // sort alphabetically 
  // const handleAtoZSort = () => {
  //   // console.log(inventory)
  //   setInventory([...products]);
  //   const newInventory = toggle ? inventory?.sort((a, b) => (b.name < a.name ? -1 : 1)) : inventory?.sort((a, b) => (b.name > a.name ? -1 : 1));
  //   setToggle(!toggle);
  //   setInventory([...newInventory]);
  // }

  // sort by dollar cost
  // const handleDollarSort = () => {
  //   setInventory([...products]);
  //   const newInventory = toggleTwo ? inventory?.sort((a, b) => (b.price < a.price ? -1 : 1)) : inventory?.sort((a, b) => (b.price > a.price ? -1 : 1));
  //   setToggleTwo(!toggleTwo);
  //   setInventory([...newInventory]);
  // }