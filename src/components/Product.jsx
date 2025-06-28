import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product() {
    return (
        <div className="product">
            <span> ID: 0000</span>
            <img src="https://picsum.photos/250/200" alt=""/>
            <h3>I'm a product!</h3>
            <div className="price-section">
                <div className="prices">
                    <labe>$total</labe>
                    <label>$price</label>
                </div>
                <div>
                    <QuantityPicker/>
                </div> 
            </div>
            <div>
                <button className="btn btn-sm btn-success">Add</button>
            </div>
        </div>
    );
}

export default Product;