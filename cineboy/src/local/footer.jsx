import logo from '@/assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="z-10 flex flex-col bg-cineblue lg:flex-row border-t-2 border-white/50 items-center justify-between w-[90%] mx-auto h-auto lg:h-[30vh]">
            <div className='w-full lg:w-2/6 flex justify-center items-center p-5 flex-col'>
                <img
                    src={logo}
                    alt="logo"
                    className="w-1/4 object-contain cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <h3 className='font-display text-3xl font-bold text-white lg:text-4xl'>cineboy.ch</h3>
                <span className='font-display text-white text-sm'>ça flingue</span>
            </div>

            <div className='w-full lg:w-2/6 h-full flex justify-center gap-5 items-start p-5 flex-col mt-5'>
                <h3 className='font-display text-2xl font-bold text-white'>Suivez moi sur</h3>
                <div className='flex flex-col items-start justify-evenly w-full h-full gap-2'>
                    <a href="#" className='text-sm text-white'>Facebook</a>
                    <a href="#" className='text-sm text-white'>Instagram</a>
                    <a href="#" className='text-sm text-white'>TikTok</a>
                </div>
            </div>

            <div className='w-full lg:w-2/6 h-full flex justify-center gap-5 items-start p-5 flex-col mt-5'>
                <h3 className='font-display text-2xl font-bold text-white'>Liens utiles</h3>
                <div className='flex flex-col items-start justify-evenly w-full h-full gap-2'>
                    <a href="#" className='text-sm text-white'>Contact</a>
                    <a href="#" className='text-sm text-white'>Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    );
}
