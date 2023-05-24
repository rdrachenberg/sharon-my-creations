import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'} className='flex items-center space-x-2'>
            <Image src='/logo.png?v=1' width={52} height={52} style={{borderRadius:'10px', border: '1px solid'}} alt="Sharon My Creations logo" />
            <span className='hidden sm:inline-block font-extrabold text-3xl text-gray-700'>
                Sharon My Creations
            </span>
        </Link>
    )
}