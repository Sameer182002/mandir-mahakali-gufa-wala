'use client'
import { useEffect, useState } from "react"
import styles from "./sidebar.module.css"

export default function Sidebar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    useEffect(()=>{
        if (window !== undefined) {
            document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto'
        }
    }, [isSidebarOpen])

    function handleClick() {
        if(window!== undefined) {
            setIsSidebarOpen(prevState => !prevState)
        }
    }

    return (
        <div>
            {!isSidebarOpen && 
                <div className={styles.hamburerIcon} onClick={handleClick}>
                    <p>&#8801;</p>
                </div>
            }
            
            <div className={`${styles.sideBar} ${isSidebarOpen ? styles.open : ''}`}>
                {isSidebarOpen && <div className={styles.sideBarContent}>
                    <p className={styles.closeIcon} onClick={handleClick}>&#x2715;</p>
                    <div className={styles.menuItems}>
                        <p>Home</p>
                        <p>About</p>
                        <p>Blog</p>
                    </div>
                    <div className={styles.contactBtnWrapper}>
                        <p className={styles.contactBtn}>Contact Us</p>
                    </div>
                </div>}
                
            </div>
        </div>
    )
}
