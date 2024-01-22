import cn from "classnames";

import "./index.scss";

const Button = ({ className, children, ...props }) => {
  return (
    <button className={cn("btn", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
