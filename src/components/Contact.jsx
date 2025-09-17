import React, { useState } from "react";

// AnimatedTitle bileşeninin orijinalini kullanabilirsiniz
import AnimatedTitle from "./AnimatedTitle";

// Basit Button bileşeni, onClick fonksiyonunu destekler
const Button = ({ title, containerClass, onClick }) => (
  <button className={containerClass} onClick={onClick}>
    {title}
  </button>
);

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

// Modal bileşeni
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg max-w-4xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sol taraf: İletişim Bilgileri */}
          <div className="md:w-1/2 p-4 border-r border-gray-300">
            <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
            <p>Email: salihsemihfb@gmail.com</p>
            <p>Phone:  +90 506 030 4972</p>
            <p>Adress:  Pendik/İstanbul, Türkiye</p>
          </div>

          {/* Sağ taraf: Mesaj Gönderme Formu */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Mesajınız gönderildi!");
                onClose();
              }}
            >
              <label className="block mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-400 rounded p-2 mb-4"
              />

              <label className="block mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-400 rounded p-2 mb-4"
              />

              <label className="block mb-2" htmlFor="message">Your Message

              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full border border-gray-400 rounded p-2 mb-4"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Join AI AUTOMATİON</p>

          <AnimatedTitle
            title="Lets Talk  <br />  Hedefine Varma   <br /> Z<b>a</b>manı ."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="Contact Us"
            containerClass="mt-10 cursor-pointer bg-blue-700 px-8 py-3 rounded hover:bg-blue-800"
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Contact;
