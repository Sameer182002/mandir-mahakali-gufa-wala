'use client'
import Image from "next/image"
import styles from "./heroSection.module.css"
import temple from "../../../public/images/temple.jpeg"

export default function HeroSection(){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.leftSide}>
                <h1>मंदिर श्री महाकाली गुफा वाला</h1>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.imageFrame}>
                    <picture className={styles.image}>
                        <Image
                            src={temple}
                            className={styles.image}
                            alt="temple"
                            placeholder="blur"
                        />
                    </picture>
                </div>
            </div>
        </div>
    )
}