import { useState  , useContext} from "react";
import { Navbar as NavbarBs, Button , Modal} from "react-bootstrap";
import {BsCart} from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

function Navbar() {
    const [showModal , setShowModal] = useState(false);
    const cart = useContext(CartContext);

    const productsCount = cart.items.reduce((sum , product) => sum + product.quantity , 0)

    const handelShow = () => {setShowModal(true)};
    const handelClose = () => {setShowModal(false)};

    return(
        <>
        <NavbarBs className="border-bottom border-secondary">
            <NavbarBs.Collapse className="justify-content-end">
                <Button onClick={handelShow} variant="btn btn-outline-secondary" className="text-white">
                ({ productsCount })<BsCart className="mx-2"></BsCart>
                سبد خرید
                </Button>
            </NavbarBs.Collapse>
        </NavbarBs>
        <Modal show={showModal} onHide={handelClose} contentClassName="card-bg" dir="rtl">
            <Modal.Header >
               
                <Modal.Body>
                    { productsCount > 0  ? (
                        <>
                        <h3 className="mb-4" >سبد خرید</h3>
                        {cart.items.map((item) => (
                            <CartProduct key={item.id} id={item.id} quantity={item.quantity}></CartProduct>
                        ))}
                        <h3>مجموع قیمت :{cart.getTotalAmount()}</h3>
                        </>
                    ) : (
                        <h3> سبد خرید خالی است </h3>
                    )}
                    <Button onClick={handelClose} variant="btn btn-outline-secondary" className="mt-4 mx-3 text-white">بستن </Button>
                </Modal.Body>
            </Modal.Header>
        </Modal>
        </>
    )
};

export default Navbar;