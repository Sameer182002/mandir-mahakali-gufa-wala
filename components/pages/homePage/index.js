import Navbar from "../../molecules/navbar/navbar";
import HeroSection from "../../sections/heroSection/heroSection";
import styles from "./homepage.module.css"
export default function HomePage(){
    return(
        <div className={styles.mainWrapper}>
            <Navbar/>
            <HeroSection/>
        </div>
    )
}