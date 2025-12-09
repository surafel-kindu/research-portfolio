import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Climate Simulation',
        description: 'Interactive 3D climate simulation using Three.js featuring dynamic globe visualization, tree cover mapping, and population density indicators.',
        tags: ['Three.js', 'WebGL', 'JavaScript'],
        link: '#'
    },
    {
        title: '3D Aviator Game',
        description: 'Immersive 3D betting game with React Three Fiber featuring dynamic flight paths, realistic physics, and engaging sound effects.',
        tags: ['React', 'R3F', 'Three.js'],
        link: '#'
    },
    {
        title: 'Indoor Drone Navigation',
        description: '3D indoor environment simulation for drone navigation with collision detection, dynamic camera following, and realistic physics.',
        tags: ['Three.js', 'Physics', 'WebGL'],
        link: '#'
    },
    {
        title: 'Africrowds Platform',
        description: 'Fundraising platform for African startups built with React.js and Material UI, achieving 30% increase in user engagement.',
        tags: ['React', 'Material UI', 'Node.js'],
        link: '#'
    },
    {
        title: 'Lomi Funds App',
        description: 'Cross-platform financial services application using React Native and Node.js, supporting millions of secure transactions.',
        tags: ['React Native', 'Node.js', 'REST API'],
        link: 'http://lomifunds.org/'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-[#00f38d]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl flex flex-col group hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#00f38d]/50 transition-colors">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.link} className="text-gray-400 hover:text-[#00f38d] transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-[#00f38d] transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00f38d] transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-mono bg-[#00f38d]/10 text-[#00f38d] rounded-full border border-[#00f38d]/20">
                                        {tag}
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

export default Projects;
