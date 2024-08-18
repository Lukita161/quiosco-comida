"use client"

import { useRouter } from "next/navigation"

export const GoBackButton = ()=> {
    const router = useRouter()
    return (
        <button onClick={()=> router.back()} className="w-36 text-center text-sm bg-amber-300 rounded shadow-md p-4 cursor-pointer hover:shadow-2xl hover:bg-amber-400 transition-colors">Volver</button>
    )
}