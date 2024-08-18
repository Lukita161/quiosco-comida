import { Header } from "@/components/ui/Header"
import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <Header>No se ha encontrado el producto</Header>
            <Link className="w-36 text-center text-sm bg-amber-300 rounded shadow-md p-4 cursor-pointer hover:shadow-2xl hover:bg-amber-400 transition-colors" href={'/admin/products'}>Ir a productos</Link>
        </div>
    )
}