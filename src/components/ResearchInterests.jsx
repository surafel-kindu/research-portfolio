import { motion } from 'framer-motion';
import { Shield, Brain, Lock, Globe, Database } from 'lucide-react';

const interests = [
    {
        icon: <Shield className="text-[#00f38d]" size={32} />,
        title: "Trustworthy AI",
        description: "Ensuring AI systems are reliable, fair, and aligned with human values."
    },
    {
        icon: <Lock className="text-[#00f38d]" size={32} />,
        title: "LLM Security",
        description: "Mitigating prompt injection, data leakage, and red teaming for robust models."
    },
    {
        icon: <Brain className="text-[#00f38d]" size={32} />,
        title: "Human-centered AI Safety",
        description: "Designing AI that prioritizes human safety and ethical considerations."
    },
    {
        icon: <Globe className="text-[#00f38d]" size={32} />,
        title: "Robust NLP",
        description: "Developing models for low-resource languages to ensure inclusive AI."
    },
    {
        icon: <Database className="text-[#00f38d]" size={32} />,
        title: "Secure Agent Workflows",
        description: "Building secure and efficient autonomous agent systems."
    }
];

const ResearchInterests = () => {
    return (
        <section id="research-interests" className="py-20 relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Research Interests</h2>
                    <div className="w-20 h-1 bg-[#00f38d]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {interests.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-[#00f38d]/30 transition-all group"
                        >
                            <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchInterests;
