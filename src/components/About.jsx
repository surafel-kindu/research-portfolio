import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { number: '3+', label: 'Years Experience' },
        { number: '20+', label: 'Projects Completed' },
        { number: '10+', label: 'Technologies' },
        { number: '2', label: 'Top Tech Companies' },
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
                            Hi! I'm <span className="text-[#00f38d] font-bold">Surafel Mulaw</span>, a Software Engineer currently working at <span className="text-white font-bold">Google</span> on Ads Measurement & Insights, focusing on privacy-preserving technologies.
                        </p>
                        <p className="text-lg mb-6 leading-relaxed text-gray-300">
                            Previously, I was a Forward Deployed Software Engineer at <span className="text-white font-bold">Palantir Technologies</span>, specializing in data integration and analysis solutions for complex challenges.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            I'm passionate about full-stack development, modern dynamic web experiences, and robust backend architectures. My expertise spans <span className="text-[#00f38d]">React, Node.js, Three.js</span>, and cloud infrastructure.
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
