import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorFortune.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" id="home">
      {/* Hero -- Image and Main Header */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* Header */}
        <div className=" z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-evolvetext">
                <div>
                  <h1 className="text-9xl font-extrabold">FSAGYM</h1>
                  <p className="text-start text-4xl tracking-xl">
                    evolutionary fitness
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studio to Get The Shapes That you Dream of.. Get Your Dream Body
              Now
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>

            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}>
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex basis-3/5 justify-center md:z-10
                        md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </motion.div>
      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreens && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          className="h-[150px] w-full bg-primar-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-ful items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
              <div className="text-3xl text-red-500 font-extrabold">
                MoniePoint
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
