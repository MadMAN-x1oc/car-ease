import { SignIn } from '@clerk/nextjs';
import Image from 'next/image'; // Correcting the import statement

export default function Page() {
    return (
        <>
            <div>
                <Image 
                    src='/banner.jpeg' 
                    width={900} 
                    height={1000} 
                    className="object-contain h-full w-full" 
                    alt="Banner" // Added alt attribute for accessibility
                />
                <div className="absolute top-20 right-3">
                    <SignIn />
                </div>
            </div>
        </>
    );
}