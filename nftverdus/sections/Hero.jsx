'use client';

import { motion } from "framer-motion";

import styles from "@/app";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1
                    variants={textVariant(1)}
                    className={`${styles.heroHeading} text-gradient`}
                >
                    NFT
                </motion.h1>
                <motion.div
                    variants={textVariant(1.1)}
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className={styles.heroHeading}>Ver</h1>
                    <div className={styles.heroDText} />
                    <h1 className={styles.heroHeading}>us</h1>
                </motion.div>
            </div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="relative w-full md:-mt-[20px] -mt-[12px]"
            >
                <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[110px] rounded-tr-[5px] z-[0] -top-[30px]" />

                <img src="/coin4.png" alt="hero-cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative" />


            </motion.div>
        </motion.div>
    </section>
)

export default Hero;