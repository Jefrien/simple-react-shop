import { useContext } from "react";
// eslint-disable-next-line
import AppContext from "../context/AppContext";

const Order = () => {

    const { state, toggleOrder, removeFromCart } = useContext(AppContext);    
    
    const sumTotal = () => {
        const reducer = (acc, current) => acc + current.price        
        return state.cart.reduce(reducer, 0)
    }

    return (
        <div className={"fixed right-0 top-0 w-96 h-screen bg-white text-black shadow-lg shadow-black/20 border-l border-black/10 p-4 transition-transform " + (state.orderShow ? null : 'translate-x-full')}>
            <span onClick={() => toggleOrder()} className="absolute right-4 top-4 inline-block w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-all">X</span>
            <h2 className="text-2xl text-center mb-4">Order</h2>
            {state.cart.map((item) => (
                <div className="p-4 mb-2 bg-black/5" key={item.id} onClick={() => removeFromCart(item)}>
                    <h4>{item.title}
                        <span className=" float-right inline-block w-6 h-6 bg-black/20 text-white rounded-full flex items-center justify-center hover:bg-red-700 cursor-pointer transition-all">X</span>
                    </h4>
                    <div className="mt-2 mb-2 text-lg font-bold">
                        Price: ${item.price}
                    </div>
                </div>
            ))}

            <div className="p-4 mb-2 bg-black/5">
                TOTAL: <span className=" font-bold ">${sumTotal()}</span>
            </div>

        </div>
    )
}

export default Order