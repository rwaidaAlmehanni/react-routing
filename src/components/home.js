import { Link, useNavigate } from "react-router-dom";
function Home() { 
    //first way to navigate
    // 1. <a> but this way has an issue when click on a the page reload
    // 2. <Link> this one is a custom <a> so it solve reload issue just it take the new route and navigate
    // 3. <NavLink> this one exactly like <Link> but it have an active class
    const navigate = useNavigate()
    const handleNavigator = () => { 
        //4. "useNavigate" is another way to navigate
      navigate('/products')
    }
    return (<div><h1>This is the Home page.</h1>
        <p>Go to <Link to={'/products'}>Products page</Link>.</p>
        <button onClick={ handleNavigator }>Products</button>
    </div>)
}
export default Home;