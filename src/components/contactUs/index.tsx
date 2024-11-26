import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from "@/shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles =
    " mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-10 pb-20">
      <motion.div>
        <motion.div
          className="md:3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -150 },
            visible: { opacity: 1, y: 0 },
          }}
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
          <Htext>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </Htext>

          <p className="my-5">
            "I was hesitant to join a gym, but FSAGYM has been a game-changer
            for me. The atmosphere is welcoming and motivating, and I love the
            variety of classes and equipment." - Sarah K.
          </p>

          <div className="mb-1 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -150 },
                visible: { opacity: 1, x: 0 },
              }}>
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/ae96b3e49ac6f3e873da6e9abf81753e">
                <input
                  className={`${inputStyles}`}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />

                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLenght" &&
                      "100 Character lenght required."}
                  </p>
                )}

                <input
                  className={`${inputStyles}`}
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />

                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "pattern" && "Invalid email address."}
                  </p>
                )}

                <textarea
                  className={`${inputStyles}`}
                  placeholder="MESSAGE"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                  rows={4}
                  cols={60}
                />

                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLenght" &&
                      "2000 char is max, Character lenght exeeded."}
                  </p>
                )}

                <button
                  type="submit"
                  className="m-5 rounded-lg bg-secondary-500 px-20 py-3 duration-500 hover:text-white ">
                  Submit
                </button>
              </form>
            </motion.div>

            <motion.div
              className="relative  mt-5 basis-2/5 md:mt-o"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 150 },
                visible: { opacity: 1, x: 0 },
              }}>
              <div className="before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img
                  className="w-full"
                  src={ContactUsPageGraphic}
                  alt="contact-us-page-graphic"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
