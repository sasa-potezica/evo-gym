import Logo from '@/assets/Logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>Join our vibrant community at EvoGym, where fitness meets fun! Whether you're a beginner or a seasoned athlete, we have something for everyone. Come visit us today and start your journey to a healthier, stronger you!</p>
                <p>{currentYear} © EvoGym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='mt-5'>Instagram</p>
                <p className='mt-5'>Youtube</p>
                <p className='mt-5'>Tiktok</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='mt-5'>Don't hesitate to ask anything</p>
                <p>(333)425-6825</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer