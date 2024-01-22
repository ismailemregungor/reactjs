const Anchor = ({ children, href, className, ...otherProps }) => {
  return (
    <a
      className={`anchor ${className || ""}`}
      href={href}
      rel="noopener noreferrer"
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Anchor;
