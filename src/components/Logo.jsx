export const Logo = ({size}) => {
    return (
        <>
            <div className={`${size ? size : 'size-10'} bg-logo bg-cover`}></div>
            <span
                className='text-3xl ml-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold'>KSMETIX
            </span>
        </>
    );
}