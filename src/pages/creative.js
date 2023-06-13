import ReactPlayer from 'react-player/lazy';

export default function CreativeProcessPage() {
    
    return (
        <div className='container xl:max-w-screen-xl mx-auto py-12 px-6 justify-between'>
        <div className='flex flex-row '>
            <div className='text-xl font-semibold text-gray-600'>Creative Process</div> 
        </div>
        <section className='flex flex-row m-2 mb-9 justify-even flex-wrap lg:flex-nowrap'>
            <p className='flex-col p-0 mr-7 lg:max-w-[50%] xs:max-w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
            <p className='flex-col p-5 ml-9 lg:max-w-[50%] xs:max-w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    </div>
    )
}

// links
// https://youtu.be/Cpv0QpGXozA
// https://youtu.be/TQxrNtxdttQ 
