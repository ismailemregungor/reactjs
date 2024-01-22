import cn from "classnames";

const Header = ({ children, className }) => {
  return (
    <header className={cn("header", className, { red: 5 > 3 })}>
      {children}
    </header>
  );
};

export default Header;
