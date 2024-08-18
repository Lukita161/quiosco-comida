import { ReactNode } from "react"

export const Header = ({children}: {children: ReactNode})=> {
    return (
        <div className="m-2">
            <h1 className="text-2xl font-black last-of-type:text-orange-400">
                {children}
            </h1>
            </div>
    )
}