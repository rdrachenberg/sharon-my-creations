import ReactPlayer from 'react-player';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className='container xl:max-w-screen-xl mx-auto lg:py-12 lg:px-6 justify-between sm:py-6 sm:px-3'>
            <section className='flex flex-row m-2 mb-9 lg:justify-start justify-center sm:justify-center flex-wrap lg:flex-nowrap'>
                <div className='overflow-hidden flex-col '>
                    <Image 
                        src='/sharon.png'
                        alt='sharons profile pic'
                        width={185}
                        height={185}
                        className='border rounded-lg shadow-xl'
                    />    
                </div>
                <p className='flex-col p-0 ml-3 lg:max-w-[50%] xs:max-w-[100%]'>I have always been intrigued by bright colors and love to doodle. Recently I had one of my sun drawings aired twice on CBS Sunday Morning Show with Jane Pauley. It was quite an honor. I hope that you enjoy my creations as much as I enjoy creating them.</p>
                
            </section>
            <div className='flex flex-row '>
                <div className='text-xl font-semibold text-gray-600'>Creative Process</div> 
            </div>
        
            <section className='flex flex-row m-2 mb-9 justify-even flex-wrap lg:flex-nowrap'>
                <p className='flex-col p-0 mr-7 lg:max-w-[50%] xs:max-w-[100%]'>When people first see my artwork, they usually ask me two questions. First, “how did you come up with this idea”? This painting of a turtle began while I was at my beach condo drinking my morning coffee. Sounds simple.... well sometimes it is exactly that. My view faces west and overlooks a freshwater lake which is home to many varieties of birds, fish and of course turtles. The water was extremely clear, and the turtles kept sticking their heads in and out of the water. The sun was just breaking out on a new day and the light was shining perfectly on the water giving various shades of greens, blues and oranges. I quickly grabbed my sketch pad and started drawing away.</p>
                <div className='overflow-hidden'>
                    <ReactPlayer 
                        width='530px' 
                        height='300px'
                        url='https://www.youtube.com/embed/TQxrNtxdttQ?autoplay=1'
                        loop={true}
                        muted={true}
                        playing={true}
                        
                    />
                </div>
            </section>
            <section className='flex flex-row-reverse justify-even p-4 flex-wrap lg:flex-nowrap'>
                <p className='flex-col p-5 ml-9 lg:max-w-[50%] xs:max-w-[100%]'>The second question is “how long did it take you to finish it”? I have honestly tried to write down on the back of the drawing what time I started it and when I stopped for the day. Unfortunately, this usually only lasts for about a day or two at the most and then I am just back to drawing. One of the methods I enjoy using is called “Zentangle” which is basically a form of doodling. It gives you a “Zen” feeling and consists of free flowing and relaxing patterns which can be lines, dots, and simple curves. You can see on the turtles shell the different patterns of circles, lines and various squiggles. The funky sea life and plants are just from my imagination. We all have busy lives, and our brains need time to rest. Pick up a pen and just start to doodle, you will find yourself slowing down and relaxing.</p>
                <div className='overflow-hidden'>
                    <ReactPlayer 
                        width='530px' 
                        height='300px'
                        url='https://www.youtube.com/embed/Cpv0QpGXozA?autoplay=1'
                        loop={true}
                        muted={true}
                        playing={true}
                    />
                </div>
            </section>
            <div className='text-xl font-semibold text-gray-600 sm:flex-row pl-5'>
                Hot Chix
            </div>
            <section className='flex flex-row m-2 lg:justify-start justify-center sm:justify-center flex-wrap lg:flex-nowrap'>
            
                <p className='flex-col p-5 lg:max-w-[50%] xs:max-w-[100%]'>Hi, we are Hot Chix and we are created by artist Sharon Watson, owner of “Sharon My Creations”. Each one of us takes approximately 20 hours to create. Sharon makes us all by hand beginning with forming us from clay and wire. Then she puts us in a kiln where we sunbathe for over 8 hours. Don’t worry, we us a very high SPF so that we don’t burn. Once that is completed, she paints us, adds a hairdo, and accessorizes us and makes each one of us special. We all have names that fit our personalities and just like people, we are unique and one of a kind. We are also numbered, signed and can vary in size from approximately 4” to 6” tall (including our funky hair), 2” wide and 1” deep.</p>
                <div className='overflow-hidden flex-col '>
                    <Image 
                    src='/hot-chix.png' 
                    alt='hot chixs example'
                    width={200}
                    height={185}
                    className='border rounded-lg shadow-xl sm:ml-20 mb-2'
                    />
                </div>
            </section>
            <section>
                <h4 className='text-black font-semibold flex-col p-5'>We are works of art and not meant to be a toy. Please keep us safe and away from children. We have many small pieces, and Sharon and all of us would not want anyone to choke on them. Please display us up high where everyone can enjoy us, however not touch us. We are delicate “Hot Chix”.</h4>
            </section>
        </div>
    )
}

// <p className='flex-col p-0 ml-3 lg:max-w-[50%] xs:max-w-[100%]'>Hello, I{`'`}m Sharon. I am now retired and finally doing what I love - my Artwork. When I’m not holding a martini, I’m holding a paintbrush. Sharon My Creations is a collection of my original artwork of paintings, sculptures and more.</p>