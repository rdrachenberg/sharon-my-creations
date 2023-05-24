import { useState } from 'react';
import { stripe } from 'src/utils/stripe';
import ProductCard from 'src/components/ProductCard';
import { ChevronUpDownIcon, XMarkIcon, PowerIcon} from '@heroicons/react/24/solid'
import { CurrencyDollarIcon, Square2StackIcon } from '@heroicons/react/24/outline'


export default function Home({products}) {
  const [inventory, setInventory] = useState(products);
  const [tempInventory, setTempInventory] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  // console.log(products);

  const handleAtoZSort = () => {
    // console.log(inventory)
    setInventory([...products]);
    const newInventory = toggle ? inventory?.sort((a, b) => (b.name < a.name ? -1 : 1)) : inventory?.sort((a, b) => (b.name > a.name ? -1 : 1));
    setToggle(!toggle);
    setInventory([...newInventory]);
  }

  const handleDollarSort = () => {
    setInventory([...products]);
    const newInventory = toggleTwo ? inventory?.sort((a, b) => (b.price < a.price ? -1 : 1)) : inventory?.sort((a, b) => (b.price > a.price ? -1 : 1));
    setToggleTwo(!toggleTwo);
    setInventory([...newInventory]);
  }

  const handleProductTypeSort = () => {
    setTempInventory([...products]);
    handleReset();
    console.log(inventory)
    const filterOne = () => setInventory(inventory => inventory.filter(val => val.meta?.type !== 'art'));
    const filterTwo = () => setInventory(inventory => inventory.filter(val => val.meta?.type === 'art'));
    
    // run conditional function per bool in the toggleThree var
    toggleThree ? 
      filterOne()
    : 
      filterTwo()
    
    // reset tempInventory array
    setTempInventory([...products]);
    
    //toggleThree to the oposite of previous state 
    setToggleThree(!toggleThree);

    return inventory
    // handleReset();
  }

  const handleReset = () => {
    setInventory([...products]);
    // console.log(inventory);
    return inventory
  }

  return (
    <div className='container xl:max-w-screen-xl mx-auto py-3 px-6 '>
      <div className='flex flex-row flex-shrink mb-2 place-content-end'>
        <div className='flex flex-col p-1' >
          <p className='text-center' style={{fontSize: '10px'}}>AtoZ</p>
          <ChevronUpDownIcon onClick={handleAtoZSort}className='w-6 h-6' />
        </div>
        <div className='flex flex-col p-1'>
          <p className='text-center' style={{fontSize: '10px'}}>price</p>
          <CurrencyDollarIcon onClick={handleDollarSort} className='w-6 h-6'/>
        </div>
        <div className='flex flex-col p-1'>
          <p className='text-center' style={{fontSize: '10px'}}>type</p>
          <Square2StackIcon onClick={handleProductTypeSort} className='w-6 h-6'/>
        </div>
        <div className='flex flex-col p-1'>
        <p className='text-center' style={{fontSize: '10px'}}>reset</p>
          <PowerIcon onClick={handleReset} className='w-6 h-6'/>
        </div>
      </div>
      <div className='grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {inventory.map((product, index) => {
          return(<ProductCard key={product.id} product={product} index={index} />)
          
        })}
        
      </div>
    </div>
  )
}

export async function getStaticProps() {
  
  const inventory = await stripe.products.list({
    limit: 8,
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