import { ReactComponent as BrainLogo } from "./brain.svg";
// import { ReactComponent as BrainLogo } from "./brain.svg";
// import { ReactComponent as BrainLogo } from "./brain.svg";

const Logo = ({ size, type }) => {
  const logos = {
    light: <BrainLogo />,
    dark: <BrainLogo />,
    horizontal: <BrainLogo />,
   };

  return <div>{logos[type]}</div>;
};

export default Logo;
