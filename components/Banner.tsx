import style from "../scss/Banner.module.scss";

interface IProps {
  src: string;
}

const Banner = (props: IProps) => {
  return (
    <div className={`${style.container}`}>
      <img
        className={`${style.image}`}
        src={`/${props.src}`}
        alt="Main banner"
      />
    </div>
  );
};

export default Banner;
