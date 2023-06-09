import styles from "@/app";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-full bg-[#7a7e88]`}>
            <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
        </div>
        <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
            {title}
        </h1>
        <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32.24px]">
            {subtitle}
        </p>
    </div>
);

export default NewFeatures;