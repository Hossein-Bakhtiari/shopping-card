import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import {getProductDate} from "../data/items";

function CartProduct({id , quantity}){
    const cart = useContext(CartContext);
    const productData = getProductDate(id);
    return(
        <>
            <p>{productData.title}</p>
            <p>تعداد:{quantity}</p>
            <p>قیمت:{quantity * productData.Price}</p>
            <Button size="sm" className="mb-5" variant="btn btn-outline-secondary" onClick={() => cart.deletFromCart(id)}>حذف </Button>
        </>
    )
}
export default CartProduct;