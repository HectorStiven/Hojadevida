import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* texto y forma */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* texto */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="show"
            className="h2 text-center mb-12"
          >
            Contactame <span className="text-accent">Aqui.</span>
          </motion.h2>

          {/* forma */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input grupo */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="nombre " className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="asunto" className="input" />
            <textarea placeholder="message" className="textarea" />

            {/* <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300
               flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Contactar{" "}
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                 duration-300 absolute text-[22px]"
              />
            </button> */}

            <div className="flex gap-4">
              {/* Botón Contactar */}
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300
     flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Contactar{" "}
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                  duration-300 absolute text-[22px]"
                />
              </button>

              {/* Botón WhatsApp */}
              <a
                href="https://wa.me/573126459868"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-full bg-green-500 text-white max-w-[170px] px-6 transition-all duration-300 flex items-center justify-center
                hover:bg-green-600"
              >
                <span className="mr-2">WhatsApp</span>
                <BsArrowRight className="text-[22px]" />
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
