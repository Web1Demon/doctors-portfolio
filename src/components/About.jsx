const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* First Row */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col mt-20 md:mt-40 md:ml-40 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            What is it like to have me as your doctor?
          </h2>

          <div className="w-32 md:w-64 h-0.5 bg-amber-900 mt-4 mb-6"></div>

          <p className="leading-relaxed mb-4 text-sm md:text-base">
            I believe every patient deserves care that’s personal, thoughtful, and rooted in real science —
            not a one-size-fits-all approach. If something isn’t working, we won’t force it. Together, we’ll
            explore new paths, tailor your treatment, and find what truly fits you.
          </p>

          <p className="leading-relaxed mb-4 text-sm md:text-base">
            My commitment is to stay informed, compassionate, and transparent.
            As a licensed practitioner, I hold myself to the highest standards of privacy, integrity, and evidence-based care.
          </p>

          <p className="leading-relaxed mb-4 text-sm md:text-base">
            I’ll be your advocate, your challenger, and your support. I’ll encourage you to build stronger
            boundaries, nurture your emotional resilience, and lean into growth — even when it’s uncomfortable.
          </p>

          <p className="leading-relaxed mb-4 text-sm md:text-base">
            Healing isn’t linear. Life is about evolving, rebuilding, and rising from challenges. I’ve lived
            that journey, too. With me, you’ll find a safe, collaborative space filled with warmth, humor, and
            the understanding that you are never alone in this.
          </p>
        </div>

        {/* Right Section */}
        <div className="img md:w-[60%] h-64 md:h-auto">
          <img
            src="https://drerikakao.com/assets/images/image09.jpg?v=f1750c87"
            alt="Therapy image"
            className="object-cover w-full h-full grayscale"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        {/* Left Section */}
        <div className="md:w-[40%] h-64 md:h-auto md:ml-[10%]">
          <img
            src="https://drerikakao.com/assets/images/image03.jpg?v=f1750c87"
            alt="Psychologist"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col mt-10 md:mt-0 md:ml-20 bg-white">
          <h2 className="text-2xl text-gray-800" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            Dr. Jack Bowe, PhD
          </h2>
          <p className="italic text-sm" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
            Licensed Clinical Psychologist
          </p>

          <div className="w-32 md:w-[70%] h-0.5 bg-amber-900 mt-4 mb-6"></div>

          <p className="text-left text-sm md:text-xl leading-relaxed font-medium" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            - M.A. and Ph.D. from The Ohio State University<br />
            - Awarded Dean’s Fellowship scholarship which fully funded graduate work<br />
            - B.A. in Honors Psychology cum Laude at University of Michigan<br />
            - Awarded the Multicultural Initiative Scholarship for senior year thesis<br />
            - Asian American cross-cultural psychology research published in the Journal of Social Psychology and the Journal of Career Assessment<br />
            - Internship in Health Psychology and Neuropsychology at the Carl T. Hayden Veterans Administration Medical Center<br />
            - Postdoctoral training in Forensic Neuropsychology and Behavioral Health Psychology at Maricopa Integrated Health Behavioral Health Centers<br />
            - Licensed psychologist since 2001, first in Phoenix, AZ and since 2005 in San Diego, CA<br />
            - Theoretical perspective is Integrative, with emphasis on Attachment Theory and Cognitive Behavioral Therapy
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
