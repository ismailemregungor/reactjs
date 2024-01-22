import cn from "classnames";
import "./index.scss";

const NotificationButton = ({ children, className, count }) => {
  return (
    <button className={cn("notificationButton", className)}>
      {count > 0 && <span className="notificationButton-count">{count}</span>}
      {children}
    </button>
  );
};

export default NotificationButton;
