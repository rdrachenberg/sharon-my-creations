import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className='flex items-center space-x-2'>
        <Link href={'/'} className='flex items-center'>
            <Image src='/logo.png?v=1' width={100} height={100} style={{borderRadius:'10px', border: '1px solid'}} alt="Sharon My Creations logo" />
            <span className='hidden md:inline-block font-extrabold text-3xl text-gray-700 hover:text-gray-500'>
                Sharon My Creations
            </span>
        </Link>
        <Link href={'/about'}>
            <span className='font-semibold lg:text-1xl pl-3 mx-auto my-auto hover:text-[#257fdf] max-md:text-xs'>About Me</span>
        </Link>
    </div>
    )
}