import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Regular gym workouts can help you maintain a healthy weight, reduce body fat, and increase muscle mass. Exercise, combined with a balanced diet, can help you achieve and sustain weight loss. Additionally, resistance training can help build muscle, which further supports weight management.",
    image: image1,
  },
  {
    name: " Training Classes 2",
    description: " I'm not sweating, I'm just crying tears of strength. ",
    image: image2,
  },
  {
    name: " Adventure Classes 3",
    description: "Lifting weights is my therapy... and my social life.",
    image: image3,
  },
  {
    name: "Gains over brains (just kidding, you need both).",
    image: image4,
  },
  {
    name: "Yoga Classes 5",
    description: "Warning: weightlifting may cause excessive confidence.",
    image: image5,
  },
  {
    name: " Fitness Classes 6",
    description: "This weightlifting thing is a real 'lift' for my mood.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primar-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 180 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6">
          <div className="md:w-3/5">
            <Htext>Our Classes</Htext>
          </div>

          <p className="py-5">
            Gym workouts, especially resistance training and stretching
            exercises, can help improve muscular strength and flexibility.
            Regular exercise can increase muscle mass, bone density, and range
            of motion, making daily activities easier and reducing the risk of
            injury. And here are some class suggestions for FSAGYM:
          </p>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
