import { motion } from 'framer-motion';
import { Award, Globe } from 'lucide-react';

const honors = [
    {
        icon: <Award size={24} />,
        title: "IIT Mandi Machine Learning Research Internship Scholarship",
        description: "Awarded scholarship covering travel and research-related expenses for ML research internship in India."
    },
    {
        icon: <Globe size={24} />,
        title: "Scholarship to represent Ethiopia at COP26",
        description: "Showcased climate finance and food-crisis modeling/data science work in collaboration with FAO."
    }
];

const Honors = () => {
    return (
        <section id="honors" className="py-20 relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Honors & Service</h2>
                    <div className="w-20 h-1 bg-[#00f38d]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {honors.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-xl border border-white/10 flex gap-6 hover:bg-white/5 transition-all"
                        >
                            <div className="text-[#00f38d] mt-1">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Honors;
