import { Link, NavLink, Outlet } from 'react-router-dom'
function MainNavigation() { 
    return (<div>
        <main>
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive})=>(isActive ? 'active' : undefined)} end>Home</NavLink></li>
                <li><NavLink to="/products" className={({isActive})=>(isActive ? 'active' : undefined)}>Products</NavLink></li>
            </ul>
        </nav>
            <Outlet />
         </main>
    </div>)
}
export default MainNavigation