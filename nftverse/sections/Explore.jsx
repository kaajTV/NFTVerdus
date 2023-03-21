'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "@/app";
import { exploreNfts } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/components";

const Explore = () => {
    const [active, setActive] = useState('nft-2');

    return (
        <section className={`${styles.paddings}`} id="explore">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="The NFTWorld |" textStyles="text-center" />
                <TitleText
                    title={<>Choose the NFT you want <br className="md:block hidden" /> to explore</>}
                    textStyles="text-center"
                />
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {exploreNfts.map((nft, index) => (
                        <ExploreCard
                            key={nft.id}
                            {...nft}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;