export default function Contact() {
  type SocialLink = {
    name: string;
    url: string;
  };

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/Gobinathank",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gobinathan-kandaswamy-60309724a/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white"
    >
      {/* Divider */}
      <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mb-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        Contact
      </h2>

      <div className="max-w-xl mx-auto text-center space-y-6">

        <p className="text-slate-400 text-lg">
          Let’s build something amazing together 🚀
        </p>

        <p className="text-lg">
          📧 <span className="font-semibold text-white">gopinathan1154@gmail.com</span>
        </p>

        <div className="flex justify-center gap-8 mt-6">
          {socialLinks.map((link: SocialLink, index: number) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-all duration-300 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}