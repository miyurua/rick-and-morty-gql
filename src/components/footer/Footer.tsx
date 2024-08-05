import { CiGlobe } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col  gap-2 items-center justify-center p-5">
      <p>
        © 2024{" "}
        <a
          href="https://miuru.netlify.app/"
          target="_blank"
          className="underline decoration-cyan-500 hover:font-semibold duration-500"
        >
          Miuru Abeysiriwardana
        </a>
        • Colombo
      </p>
      <div className="flex flex-row gap-2 p-2">
        <a href="https://github.com/miyurua" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/miuru-abeysiriwardana-92200a197/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://miuru.netlify.app/" target="_blank">
          <CiGlobe />
        </a>
      </div>
    </div>
  );
};

export default Footer;
