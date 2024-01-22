
const Image = ({ src, className, alt, ...otherProps }) => {
  return <img src={src} className={className} alt={alt} {...otherProps} />;
};

export default Image;
