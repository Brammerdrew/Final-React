import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
    const [isVisible, setIsVisible] = useState(false)
    
    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <div className='fixed w-full z-10 top-0'>
            <nav className='flex  items-center justify-between flex-wrap bg-red-500 p-6 '>
                <div className='flex items-center flex-shrink-0 text-white mr-6'>
                    <Link to='/' className='font-semibold text-xl tracking-tight'>Snazzy Pups Grooming</Link>
                </div>
                <div className='block'>
                    <button onClick={dropDown} className='flex items-center px-3 py-2 text-red-200 border rounded border-red-400 hover:text-white hover:border-white'>
                        
                        <i className='fas fa-bars'></i>
                    </button>
                </div>
                { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Button className='p-3 m-5 bg-red-400 justify-center'>
                            <div>
                                <Link to='/' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                                text-red-200 hover:text-white mr-4'>
                                    Home
                                </Link>
                            </div>

                        </Button>
                        <Button className='p-3 m-5 bg-red-400 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                                text-red-200 hover:text-white mr-4'>
                                    Dashboard
                                </Link>
                            </div>

                        </Button>
                        {
                            !isAuthenticated ? 
                            <Button className='p-3 m-5 bg-red-400 justify-center'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-red-400 justify-center'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white'>
                                        Log Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
                ) : (
                <></>
                ) }
            </nav>
        </div>
    )  
}

export default Navbar