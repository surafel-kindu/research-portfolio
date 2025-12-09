import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[#00f38d] font-mono mb-4 tracking-widest">HELLO, I'M</h2>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
                        SURAFEL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                            KINDU MULAW
                        </span>
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
                                className="group px-8 py-4 bg-[#00f38d] text-black font-bold flex items-center gap-2 hover:bg-[#00d078] transition-all"
                            >
                                View Experience
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                            <a
                                href="/resume.pdf"
                                className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-all text-white flex items-center gap-2"
                            >
                                Resume
                                <Download size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative large text in background */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/[0.02] pointer-events-none select-none overflow-hidden">
                DEV
            </div>
        </section>
    );
};

export default Hero;
