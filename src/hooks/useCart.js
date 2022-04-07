import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storeCart = getStoredCart();
        const saveCart = [];
        for (const id in storeCart){
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quentity = storeCart[id];
                addedProduct.quentity = quentity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[products])
    return [cart, setCart];
}
export default useCart;