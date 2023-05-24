import { useState, useEffect } from "react";


export default function Footer() {
    const [dateYear, setDateYear] = useState(2022)

    useEffect(() => {
        const date =  new Date().getFullYear();
        setDateYear(date);
    }, [])

    return (
        <footer className='border-t border-gray-100 py-10 text-center'>
            <p className='text-sm text-gray-500'>
                @ {dateYear} Any Store. All rights reserved 
            </p>
        </footer>
    )
}