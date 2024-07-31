import { Link, useParams } from "react-router-dom"

function ProductDetails({ title }) { 
    //useParams is a hook from reat-router-dom to return all dynamic parts of the route
    // to={..} this one by default looking to route so it will
    // remove 2 segments from the route but when we change it to relative = { 'path'} 
    // it will look just to path and remove just one segement
    const params = useParams()
    return <div>
        <p>title: {title}</p><span>id: {params.productId}</span>
        <Link to={'..'} relative={ 'path'}>Back</Link>
    </div>
}
export default ProductDetails