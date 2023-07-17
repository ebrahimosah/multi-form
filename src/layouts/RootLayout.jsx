import {  NavLink, Outlet } from "react-router-dom"
import Options from "../components/Options"
import Form from "../components/Form"

export default function RootLayout() {
  return (
    <div className="home">
        <main>
            <Options/>
            <div>
                <Outlet/>
            </div>
        </main>
    </div>
  )
}
