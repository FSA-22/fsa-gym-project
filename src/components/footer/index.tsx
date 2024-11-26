
const Footer = () => {
  return (
    <footer className="bg-primar-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
        

        {/* logo */}
          <div className="flex items-center gap-0.5">
            <div className="text-center font-bold text-xl">FSAGYM</div>
            <div className="w-4 h-4 rounded-full bg-red-500 justify-center items-center"></div>
          </div>

          <p className="py-5">
            At FSAGYM, we're proud to have a community of millions of happy
            members who are achieving their fitness goals and transforming their
            lives. Our state-of-the-art facilities, expert trainers, and
            supportive community make it easy to get fit and feel amazing.
          </p>

          <div className="mt-16 basis-1/4 md:mt-0 ">
            <p className="my-2 text-ellipsis text-sm font-montserrat">&copy; FSAGYM {new Date().getUTCFullYear()} </p>
          </div>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Link</h4>
          <p className="my-2"> Some texts for links</p>
          <p className="my-2"> Some texts for links2</p>
          <p className="my-2"> Short links</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-2"> Location Address here</p>
          <p className="my-2"> Email: simeonstat1@gmail.com</p>
          <p> Phone number here</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
