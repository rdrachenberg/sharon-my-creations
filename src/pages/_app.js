import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'
import { CartProvider } from 'use-shopping-cart'

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }) {
  const isInMaintenance = true;
  const MainatenancePage = () => { 
    return(
      <div className='flex justify-center bg-slate-200 min-h-screen'>
      
      <div className='justify-center p-5 rounded-lg'> 
        <Image src={'/coming-soon.jpg'} width={500} height={500} alt='coming soon' className='rounded-lg'/>
        <div className='text-3xl text-center pt-10'>Check back shortly  . . .</div>
      </div>
      
      
      </div>)}
  return (
    <CartProvider stripe={stripeKey} cartMode='checkout-session' currency='USD'>
      <AppLayout>
        {isInMaintenance ? <MainatenancePage /> : <Component {...pageProps} />}
        <Toaster />
      </AppLayout>
    </CartProvider>
    )
  }