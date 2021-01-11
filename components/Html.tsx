interface IProps {
  html: string;
}

const Html = (props: IProps) => {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
};

export default Html;
