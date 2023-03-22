import { useState } from "react";

const Bai1 = () => {
    const [product, setProduct] = useState([{ name: 'a', code: 'a1', price: '$5' }])

    return (
        <div>
            {product.map((item) => {
                return (
                    <div>
                        <div>Name: {item.name }</div>
                        <div>Code: {item.code }</div>
                        <div>Price: {item.price }</div>
                    </div>
                )
            })}

        </div>
    );
};
export default Bai1;