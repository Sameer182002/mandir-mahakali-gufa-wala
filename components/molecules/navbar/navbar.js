'use client'
import useDeviceWidth from "../../customHooks/isMobile/isMobile"
import Sidebar from "../sideBar/sideBar"
import styles from "./navbar.module.css"

export default function Navbar(){
    const deviceWidth = useDeviceWidth()
    const isMobile = deviceWidth<=768
    const navItems = [
        {title : "Home",url:''},
        {title : "About",url:''},
        {title : "Contact",url:''},
        {title : "Blog",url:''},
    ]
    return (
        <nav className={styles.mainWrapper}>
            {!isMobile && <div className={styles.itemWrapper}>
                {
                    navItems.map((item,index)=>{
                        return (
                            <p key={index}>{item.title}</p>
                        )
                    })
                }
            </div>}
            {isMobile && <Sidebar/>}
        </nav>
    )
}