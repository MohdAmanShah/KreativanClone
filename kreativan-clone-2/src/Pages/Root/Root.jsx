import Header from './components/Header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

export default function Root () {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}