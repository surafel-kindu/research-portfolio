import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '20+', label: 'Projects Completed' },
        { number: '10+', label: 'Technologies' },
        { number: '2+', label: 'Open Source Projects' },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-[#00f38d]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel p-8 rounded-2xl"
                    >
                        <p className="text-lg mb-6 leading-relaxed text-gray-300">
                            Hi! I&apos;m <span className="text-[#00f38d] font-bold">Surafel Mulaw</span>, a Software Engineer currently working at <span className="text-white font-bold">TestSavant.AI</span>, where I build security-focused AI systems, LLM protection workflows, and production web platforms.
                        </p>
                        <p className="text-lg mb-6 leading-relaxed text-gray-300">
                            I also build personal products end-to-end. Notable projects include <span className="text-white font-bold">Halt</span>, an open-source rate-limiting toolkit published to npm and PyPI, and <span className="text-white font-bold">Climate Negotiator</span>, a tool that helps climate conference participants organize and run structured negotiations.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            My work blends product thinking with strong engineering fundamentals across <span className="text-[#00f38d]">React, Next.js, Node.js, Python, and AI tooling</span>. I care about building software that is practical, secure, and easy to scale.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                                className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-[#00f38d]/50 transition-colors"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#00f38d] mb-2 font-mono">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
