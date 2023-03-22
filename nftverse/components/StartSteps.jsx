import styles from "@/app";

const StartSteps = ({ number, text }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[18px] bg-[#7a7e88]`}>
            <p className="font-bold text-[20px] text-white">
                {number}
            </p>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32.4px]">
            {text}
        </p>
    </div>
);

export default StartSteps;