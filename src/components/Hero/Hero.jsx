import React from "react"
import { getImageUrl } from "../../utils"
import styles from "../Hero/Hero.module.css"
import contactInfo from "../../data/conactInfo.json"



export const Hero = () => {
    return(
        <section className={styles.container} >
            <div className={styles.content}>
             <h1 className={styles.title}>Hi, I'm Murtaza</h1>
             <p className={styles.description}>Being a <span className={styles.se}>Software Engineer</span>, eager to leverage a strong academic background and a passion for crafting top-notch software solutions.</p>
             {/* For contact Me and View-Resume Button */}
            
            <div className={styles.anchorBtn}>
                {
                    contactInfo.map((info, id) =>{
                        return <div key={id}>
                            <a className={styles.contactBtn} href={info.email}>Contact Me</a>
                            <a className={styles.resumeBtn} href={info.resume}>View Resume</a>
                        </div>
                    })
                }
            {/* <a className={styles.contactBtn} href="mailto:murtaza.3118033.co@mhssce.ac.in">Contact Me</a>
             <a className={styles.resumeBtn} href="https://www.canva.com/design/DAF4Plmmpwo/dmDhWjiar5YMfJA_DQOHMA/view?utm_content=DAF4Plmmpwo&utm_campaign=designshare&utm_medium=link&utm_source=editor">View Resume</a> */}
            </div>

            </div>
            {/* For Image */}
            <img width="400px" className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero image of me"/>

            {/* for Background-color texture / opacity */}
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}