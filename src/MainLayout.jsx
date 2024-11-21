
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <header className='w-11/12 mx-auto my-5'><Navbar></Navbar></header>
            
            
            <Outlet></Outlet>

            


            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLayout;