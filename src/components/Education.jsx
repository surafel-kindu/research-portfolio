import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-[#00f38d]"></div>
                </motion.div>

                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-xl border border-white/10 flex items-start gap-6 group hover:border-[#00f38d]/30 transition-all"
                    >
                        <div className="bg-white/5 p-4 rounded-full text-[#00f38d] group-hover:scale-110 transition-transform">
                            <GraduationCap size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">BSc in Software Engineering</h3>
                            <h4 className="text-xl text-[#00f38d] mb-2">Addis Ababa University, Addis Ababa Institute of Technology (AAiT)</h4>
                            <p className="text-gray-400 font-mono mb-4">Addis Ababa, Ethiopia</p>
                            <div className="inline-block px-4 py-2 bg-[#00f38d]/10 text-[#00f38d] rounded-lg font-mono font-bold">
                                GPA: 3.67 / 4.00
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
