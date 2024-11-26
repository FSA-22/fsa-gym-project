import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HomeIcon,
  UserCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Facilities",
    description: `
Regular gym workouts can help you maintain a healthy weight, reduce body fat, and increase muscle mass.
 Exercise, combined with a balanced diet, can help you achieve and sustain weight loss. Additionally,
 resistance training can help build muscle, which further supports weight management.`,
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes ",
    description: `
- Description: High-intensity cardio workout that combines running, jumping, and strength training exercises to get your heart rate up and burn calories.
- Duration: 45 minutes
- Level: Intermediate to Advanced
- Equipment: Treadmill, Stationary Bike, Free Weights`,
  },
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: " Achieve and have fun",
    description: `Exercise is a natural mood booster and can help reduce stress and anxiety
Gym workouts can release endorphins, also known as  which can improve your overall mental well-being. Regular exercise 
can also help improve sleep quality, concentration, and self-esteem`,
  },
  // {
  //   icon: <UserCircleIcon className="h-6 w-6" />,
  //   title: "Expert and Pro Trainers",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit soluta dolorum dolor nobis recusandae officiis doloremque ullam ratione? Vel id qui, exercitationem impedit repellendus suscipit dolor sequi tempora nisi!",
  // },
  // {
  //   icon: <AcademicCapIcon className="h-6 w-6" />,
  //   title: "World Wide Recognition",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit soluta dolorum dolor nobis recusandae officiis doloremque ullam ratione? Vel id qui, exercitationem impedit repellendus suscipit dolor sequi tempora nisi!",
  // },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-y md:w-3/5">
          <Htext>MORE THAN JUST A GYM.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness Equipment, trainers and classes to
            get you to your ultimate fitness goals with ease, we provide true
            care into each and every member.
          </p>
        </motion.div>

        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}>
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
              title={benefit.title}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <motion.div
            className="mx-auto w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, rotate: -50 },
              visible: { opacity: 1, rotate: 0 },
            }}>
            <img src={BenefitsPageGraphic} alt="Benefits-page-graphic" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div className="relative">
              <motion.div
                className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 90 },
                  visible: { opacity: 1, x: 0 },
                }}>
                <div>
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </Htext>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="my-5 ">
                At FSAGYM, we're proud to have a community of millions of happy
                members who are achieving their fitness goals and transforming
                their lives. Our state-of-the-art facilities, expert trainers,
                and supportive community make it easy to get fit and feel
                amazing.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mb-5">
                Whether you're a fitness enthusiast or just starting out, we
                have a wide range of programs and services designed to help you
                reach your goals. From weight loss and strength training to
                cardio and flexibility exercises, our expert trainers will guide
                and motivate you every step of the way.
              </motion.p>
            </div>

            <div className="relative mt-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -200 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
