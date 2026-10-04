import { Link, scroller } from "react-scroll";

export const scrollOptions = { smooth: true, duration: 500, offset: -64 };

export const scrollToSection = (id) => scroller.scrollTo(id, scrollOptions);

const ScrollLink = ({ to, children, ...rest }) => (
  <Link to={to} href={`#${to}`} {...scrollOptions} {...rest}>
    {children}
  </Link>
);

export default ScrollLink;
