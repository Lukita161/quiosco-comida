import { OrderWithProducts } from "@/src/types"

type LatestOrderProps = {
    order: OrderWithProducts
}

export const LatestOrderItem = ({order} : LatestOrderProps)=> {
    return (
        <div className="p-5 bg-white ">
            <p className="text-xl text-gray-700">Nombre: <span className="font-black">{order.name}</span></p>

            <ul className="divide-y divide-gray-400 border-t border-gray-400" role="list">
                {order.orderProducts.map(product => (
                    <li key={product.id}>
                        <p className="ml-4 text-sm text-gray-500 font-medium">
                            <span className="font-semibold text-gray-700"> ({product.quantity}) </span>
                            { product.product.name }
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}