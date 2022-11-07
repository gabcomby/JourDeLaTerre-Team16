import Link from "next/link"
import Image from "next/image"
import NavElement from "./nav-element"
import styles from "../styles/nav-bar.module.css"
import logo from "../images/image.png"
import { useContext } from "react"
import AuthContext from "../stores/authContext"
import { useRouter } from "next/router";

export default function TopBar (){
    const {user, login, logout} = useContext(AuthContext)
    const router = useRouter();

    const NAV_ELEMENTS = [
        {name: "Home", href: "/"},
        {name: "Offers", href: "/offers"},
        {name: "Events", href: "/events"},
        {name: "Login/Sign Up", href: "/authpage"}
    ]

    const handleSignOut = async() =>{
        logout()
        router.push('/')
      }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <nav className={styles.main_nav}>
                        <Link href={"/"} >
                        <Image src={logo} alt="Gleanathon" width={240} height={48} className={styles.logo_2}></Image>
                        </Link>
                        <div className={styles.element_container}>
                            <NavElement name={NAV_ELEMENTS[0].name} href={NAV_ELEMENTS[0].href}></NavElement>
                            {user && <NavElement name={NAV_ELEMENTS[1].name} href={NAV_ELEMENTS[1].href}></NavElement>}
                            {user && <NavElement name={NAV_ELEMENTS[2].name} href={NAV_ELEMENTS[2].href}></NavElement>}
                            {user && <Link href="/profile" className={styles.nav__link}>{user['email']}</Link>}
                            {!user && <a onClick={login} className={styles.nav__link}>Login</a>}
                            {user && <a className={styles.nav__link} onClick={handleSignOut}>Logout</a>}

                        </div>
                    </nav>
                </header>
            </div>
            <div className={styles.offset}></div>
        </>

    )
}