import { motion } from 'framer-motion';

const skills = {
    "ML/NLP": ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Hugging Face", "Transformers"],
    "Backend": ["Python", "Django", "Node.js", "PostgreSQL", "MongoDB", "ClickHouse"],
    "Frontend": ["React", "Next.js", "React Native", "Flutter", "TypeScript", "JavaScript"],
    "Other": ["n8n automation", "AWS", "LangChain", "Web3"]
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-[#00f38d]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#00f38d]/30 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-6 text-[#00f38d] font-mono border-b border-white/10 pb-2">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-md border border-white/5 hover:bg-[#00f38d]/10 hover:text-[#00f38d] hover:border-[#00f38d]/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
