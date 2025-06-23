import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="relative md:min-h-screen overflow-hidden font-sans">

      {/* First Row */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="md:w-1/2 p-6 md:p-12 flex flex-col mt-20 md:mt-32 md:ml-24 bg-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900 mb-4">
            What’s it like to have me as your medical consultant?
          </h2>
          <div className="w-24 md:w-48 h-1 bg-amber-700 mb-8"></div>

          <p className="leading-relaxed text-gray-700 text-base md:text-lg mb-4">
            Every patient deserves more than a cookie-cutter diagnosis — they deserve care that sees them fully. 
            My approach is personalized, thoughtful, and grounded in science. If something doesn’t align with your needs, 
            we pivot. Together, we’ll co-create a treatment plan that fits your life and goals.
          </p>

          <p className="leading-relaxed text-gray-700 text-base md:text-lg mb-4">
            I’m committed to staying informed, compassionate, and honest. As a licensed professional, I uphold the highest 
            standards of ethics, confidentiality, and clinical excellence. Your trust isn’t just valued — it’s sacred.
          </p>

          <p className="leading-relaxed text-gray-700 text-base md:text-lg mb-4">
            I’ll be more than your doctor — I’ll be your teammate, motivator, and gentle reality-check. 
            Expect encouragement, challenge, and consistent support as you grow — even through the hard parts.
          </p>

          <p className="leading-relaxed text-gray-700 text-base md:text-lg">
            Healing’s never a straight line. It’s a journey of unlearning, rebuilding, and rediscovering who you are. 
            I’ve walked that path too. With me, you’ll find a space that’s warm, collaborative, and real — where your story matters 
            and you never have to walk alone.
          </p>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 h-64 md:h-auto"
        >
          <img
            src="images/about-image.jpg"
            alt="Consultant session"
            className="w-full h-full object-cover grayscale rounded-lg shadow-xl hover:grayscale-0 transition duration-500"
          />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row w-full mt-16">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:w-[40%] h-64 md:h-auto md:ml-[10%]"
        >
          <img
            src="images/profile.png"
            alt="Psychologist"
            className="object-cover w-full h-80 md:h-[80%] rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Section */}
        <div className="md:w-1/2 p-6 md:p-12 flex flex-col mt-10 md:mt-0 md:ml-16 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
            Dr. Jasmine Osadebay, PhD
          </h2>
          <p className="italic text-sm text-gray-500 mb-4">Licensed Clinical Psychologist</p>
          <div className="w-24 md:w-48 h-1 bg-amber-700 mb-6"></div>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 space-y-2">
            <span>- M.A. & Ph.D. from The Ohio State University</span><br />
            <span>- Dean’s Fellowship recipient</span><br />
            <span>- B.A. Honors Psychology, University of Michigan</span><br />
            <span>- Published research in Journal of Social Psychology & Career Assessment</span><br />
            <span>- Internship at Carl T. Hayden Veterans Administration Medical Center</span><br />
            <span>- Postdoctoral training in Forensic Neuropsychology</span><br />
            <span>- Licensed since 2001 (AZ & CA)</span><br />
            <span>- Integrative practice: Attachment Theory & Cognitive Behavioral Therapy</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
