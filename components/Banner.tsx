import Image from "next/image";
import style from "../scss/Banner.module.scss";

interface IProps {
  src: string;
}

const Banner = (props: IProps) => {
  return (
    <div className={`${style.container}`}>
      <Image
        src={`/${props.src}`}
        alt="Picture of the author"
        layout="fill"
        priority={true}
        objectFit="cover"
        objectPosition="bottom center"
      />
    </div>
  );
};

export default Banner;
