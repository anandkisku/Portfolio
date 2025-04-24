import { useEffect, useState } from "react";

function ResumeSection({Resume}) {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById("resume");
      if (resumeSection) {
        const rect = resumeSection.getBoundingClientRect();
        console.log("window.innerHeight : ", window.innerHeight , " and rect.top : ", rect.top )
        if (rect.top < window.innerHeight) {
          setShowIframe(true);
          window.removeEventListener("scroll", handleScroll); // Load only once
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately in case it's already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(showIframe)

  return (
    <section id="resume" className="p-6 md:p-12 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Resume</h2>
      <div className="flex justify-center mb-6">
        {showIframe ? (
          <iframe
            src={Resume}
            title="Resume PDF"
            width="100%"
            height="100%"
            className="w-full md:w-3/4 border-2 border-pink-500 rounded-xl shadow-lg min-h-[800px]"
          ></iframe>
        ) : (
          <p className="text-center text-lg">Scroll down to load resume...</p>
        )}
      </div>
      <div className="flex justify-center">
        <a
          href={Resume}
          download
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold hover:from-yellow-400 hover:to-pink-500 px-6 py-3 rounded-full shadow-lg transition-all duration-500"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
export default ResumeSection;