
interface TitleProps {
  title: string;
  subTitle: string;
  description: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, subTitle, description } = props;
  return (
    <div className='text-left lg:text-center mx-auto px-7 mb-24'>
      <h4 className='text-sm'>{subTitle}</h4>
      <h1 className='text-4xl py-2'>{title}</h1>
      <p className='text-lg text-gray-300 max-w-[100ch] mx-auto'>{description}</p>
    </div>
  );
}

export default Title;
