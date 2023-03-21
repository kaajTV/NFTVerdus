'use client';

import { motion } from "framer-motion";
import { TypingText } from "@/components";

import styles from "@/app";
import { fadeIn, staggerContainer } from "@/utils/motion";

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title="About NFTVersus |" textStyles="text-center" />

            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
            >
                <span className="font-extrabold text-white">NFTVerse</span> is a new thing in the crypto world, where you can safely buy and transfer crypto coins, with a really big community to discuss everything about crypto, because this is really the{' '}
                <span className="font-extrabold text-white">
                    greatness of the NFTVerse
                </span>{' '}
                <span className="font-extrabold text-white">explore</span> all the greatness of the NFTVerse by scrolling down
            </motion.p>

            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[18px] h-[28px] object-contain mt-[28px]"
            />
        </motion.div>
    </section>
);

export default About;