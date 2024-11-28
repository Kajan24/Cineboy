import logo from '@/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { Slant as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Header() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = (url) => {
        setIsOpen(false)
        navigate({ url })
    }
    return (
        <>
            <header className="w-full pl-2 pr-2 flex items-center justify-between h-16 lg:h-28 mx-auto mt-5 sticky top-0 bg-black/70 backdrop-blur-3xl z-50 rounded-b-md">
                <div className="w-1/2 md:w-1/3 h-full flex items-center p-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="max-h-full max-w-full object-contain cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="w-1/2 md:w-1/3 h-full flex items-center justify-end">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
                </div>
            </header>

            {isOpen && (
                <div className="w-screen h-screen bg-cineblue absolute z-40 flex flex-col justify-around items-center p-14">
                    <div className="w-full h-3/4 text-white flex flex-col justify-around items-start text-xl">
                        <p className="cursor-pointer" onClick={() => handleMenuClick('/')}>Accueil</p>
                        <p className="cursor-pointer" onClick={() => handleMenuClick('/allMovies')}>Tous les films</p>
                        <p className="cursor-pointer" onClick={() => handleMenuClick('/')}>Gestion du compte</p>
                        <p className="cursor-pointer" onClick={() => handleMenuClick('/')}>Contact</p>
                        <p className="cursor-pointer" onClick={() => handleMenuClick('/')}>FAQ</p>
                        <p className="cursor-pointer" onClick={() => handleMenuClick('/')}>Politique de confidentialité</p>

                    </div>
                </div>
            )}
        </>
    );
}
