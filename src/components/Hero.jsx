import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Globe, Mail } from 'lucide-react';

const socialBubbles = [
    {
        name: 'GitHub',
        href: 'https://github.com/Surafeljava',
        icon: Github,
        desc: 'Code'
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/surafelk/',
        icon: Linkedin,
        desc: 'Network'
    },
    {
        name: 'X',
        href: 'https://x.com/surafel_kindu',
        icon: Twitter,
        desc: 'Updates'
    },
    {
        name: 'Halt',
        href: 'https://halt-api.vercel.app/',
        logo: '/halt-logo.svg',
        desc: 'Website'
    },
    {
        name: 'Email',
        href: 'mailto:surafel.mulaw@gmail.com',
        icon: Mail,
        desc: 'Contact'
    },
    {
        name: 'Halt GitHub',
        href: 'https://github.com/surafel-kindu/halt',
        icon: Github,
        desc: 'Halt Repo'
    }
];

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center"
                >
                    <div>
                        <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full glass-subtle px-4 py-2">
                            <span className="text-sm font-mono text-gray-300">
                                Creator of
                            </span>
                            <a className="text-[#00f38d] hover:text-[#00d078] transition-colors flex flex-row items-center gap-2" 
                                href="https://halt-api.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src="/halt-logo.svg" alt="Halt logo" className=" h-5 w-5 rounded-sm object-contain" />
                                    <p>Halt Rate Limiting</p>
                                </a>
                                {/* <span className="text-sm font-mono text-gray-300">
                                Rate Limiting
                            </span> */}
                            {/* <span className="h-4 w-px bg-white/20" />
                            <a
                                href="https://halt-api.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono text-gray-300 hover:text-[#00f38d] transition-colors"
                            >
                                Website
                            </a>
                            <a
                                href="https://github.com/surafel-kindu/halt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono text-gray-300 hover:text-[#00f38d] transition-colors"
                            >
                                GitHub
                            </a> */}
                        </div>

                        <h2 className="text-[#00f38d] font-mono mb-4 tracking-widest">HELLO, I'M</h2>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight text-white">
                            SURAFEL <br />
                            <span className="text-gray-300">KINDU MULAW</span>
                        </h1>

                        <div className="max-w-2xl">
                            <h3 className="text-2xl md:text-3xl text-gray-400 mb-6">
                                Software Engineer & <span className="text-white">AI Specialist</span>
                            </h3>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 font-light">
                                specializing in <span className="text-[#00f38d]">Trustworthy AI</span>, LLM Security, and Robust NLP for low-resource languages.
                                Creating secure, human-centered AI systems and agent workflows.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#experience"
                                    className="group px-8 py-4 bg-[#00f38d] text-black font-bold flex items-center gap-2 hover:bg-[#00d078] transition-colors"
                                >
                                    View Experience
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </a>
                                <a
                                    href="/resume.pdf"
                                    className="px-8 py-4 glass-subtle hover:border-[#00f38d]/30 transition-colors text-white flex items-center gap-2"
                                >
                                    Resume
                                    <Download size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[460px] mx-auto">
                        <div className="glass-panel rounded-2xl p-4 border border-white/20">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-xs font-mono tracking-widest text-gray-400">CONNECT_GRID</span>
                                <span className="text-xs font-mono text-[#00f38d]">ONLINE</span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {socialBubbles.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group rounded-xl border border-white/15 bg-white/[0.03] p-4 transition-all hover:-translate-y-1 hover:border-[#00f38d]/50 hover:bg-[#00f38d]/10"
                                        aria-label={item.name}
                                    >
                                        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-black/20 group-hover:border-[#00f38d]/40">
                                            {item.logo ? (
                                                <img src={item.logo} alt={`${item.name} logo`} className="h-5 w-5 object-contain" />
                                            ) : (
                                                <item.icon size={18} />
                                            )}
                                        </div>
                                        <p className="text-sm font-mono text-gray-200 group-hover:text-[#00f38d]">{item.name}</p>
                                        <p className="text-[11px] font-mono text-gray-500">{item.desc}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
