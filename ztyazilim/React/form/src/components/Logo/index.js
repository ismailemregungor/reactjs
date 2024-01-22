import cn from "classnames";

import { LogoSvg } from "../../assets/images/svg";
import "./index.scss";

const Logo = ({ className, ...props }) => {
  return (
    <span className={cn("logo", className)} {...props}>
      <LogoSvg />
    </span>
  );
};

export default Logo;
