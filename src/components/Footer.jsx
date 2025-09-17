import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Lettore 2025 . Tüm Haklar Saklıdır.
        </p>



      </div>
    </footer>
  );
};

export default Footer;
