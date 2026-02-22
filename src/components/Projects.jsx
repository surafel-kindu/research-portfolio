import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Package, X, BookOpen } from 'lucide-react';

const projects = [
    {
        title: 'Halt (Open Source Rate Limiting)',
        description: 'A modern rate-limiting toolkit for Python and TypeScript APIs with framework adapters, multiple algorithms, and production-ready storage options.',
        tags: ['TypeScript', 'Python', 'Express', 'FastAPI', 'Open Source'],
        logo: '/halt-logo.svg',
        links: {
            live: 'https://halt-api.vercel.app/',
            github: 'https://github.com/surafel-kindu/halt',
            npm: 'https://www.npmjs.com/package/halt-rate',
            pypi: 'https://pypi.org/project/halt-rate/',
            blog: 'https://halt-api.vercel.app/blog/introducing-halt'
        },
        details: [
            'Built as a cross-ecosystem package so teams can keep one rate-limiting model across Python and TypeScript services.',
            'Supports token bucket, fixed window, sliding window, and leaky bucket with storage backends including in-memory, Redis, PostgreSQL, MongoDB, DynamoDB, and Memcached.',
            'Published to both npm and PyPI to make adoption easy for backend teams regardless of language stack.',
            'Designed for SaaS workloads with plan-based policies, quotas, penalties, and observability hooks.',
            'Actively improved through open-source contributions, issues, and community feedback.'
        ]
    },
    {
        title: 'Climate Negotiator',
        description: 'A negotiation assistant designed for climate conference participants to prepare positions, organize arguments, and run structured simulation rooms.',
        tags: ['Next.js', 'TypeScript', 'Climate Policy', 'AI Assistant'],
        links: {
            live: '#'
        },
        details: [
            'Built to help negotiators organize country positions, goals, and strategy before and during climate talks.',
            'Includes dedicated negotiation rooms with session history, setup workflows, and context-driven assistance.',
            'Supports topic-focused guidance for areas like mitigation, adaptation, loss & damage, and climate finance.',
            'Designed for practical conference use: structured prompts, policy drafting support, and reusable negotiation context.',
            'Improves clarity and consistency so participants can focus on outcomes instead of managing fragmented notes.'
        ]
    },
    {
        title: 'Climate Simulation',
        description: 'Interactive 3D climate simulation using Three.js featuring dynamic globe visualization, tree cover mapping, and population density indicators.',
        tags: ['Three.js', 'WebGL', 'JavaScript'],
        links: {
            live: '#',
            github: '#'
        },
        details: [
            'Built an interactive 3D globe to visualize climate parameters and environmental indicators.',
            'Focused on performant rendering for smooth interactions and data overlays.',
            'Used modular scene architecture to support additional datasets and future simulations.'
        ]
    },
    {
        title: '3D Aviator Game',
        description: 'Immersive 3D betting game with React Three Fiber featuring dynamic flight paths, realistic physics, and engaging sound effects.',
        tags: ['React', 'R3F', 'Three.js'],
        links: {
            live: '#',
            github: '#'
        },
        details: [
            'Implemented real-time game loops and dynamic path generation for engaging gameplay.',
            'Integrated interaction and feedback systems to improve user retention.',
            'Optimized frame performance for web-based 3D environments.'
        ]
    },
    {
        title: 'Indoor Drone Navigation',
        description: '3D indoor environment simulation for drone navigation with collision detection, dynamic camera following, and realistic physics.',
        tags: ['Three.js', 'Physics', 'WebGL'],
        links: {
            live: '#',
            github: '#'
        },
        details: [
            'Created collision-aware movement simulation for constrained indoor spaces.',
            'Added camera tracking and navigation controls for scenario testing.',
            'Used physics-informed interactions for more realistic behavior.'
        ]
    },
    {
        title: 'Africrowds Platform',
        description: 'Fundraising platform for African startups built with React.js and Material UI, achieving 30% increase in user engagement.',
        tags: ['React', 'Material UI', 'Node.js'],
        links: {
            live: '#',
            github: '#'
        },
        details: [
            'Developed user-facing features for campaigns, donations, and startup discovery.',
            'Improved experience and responsiveness resulting in higher engagement.',
            'Worked on frontend architecture and integration with backend services.'
        ]
    },
    {
        title: 'Lomi Funds App',
        description: 'Cross-platform financial services application using React Native and Node.js, supporting millions of secure transactions.',
        tags: ['React Native', 'Node.js', 'REST API'],
        links: {
            live: 'http://lomifunds.org/',
            github: '#'
        },
        details: [
            'Delivered mobile features for core financial operations on Android and iOS.',
            'Focused on secure API interactions and resilient transaction flows.',
            'Contributed to performance and UX improvements for high-traffic usage.'
        ]
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const closeModal = () => setSelectedProject(null);

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
                            className="glass-panel p-8 rounded-2xl flex flex-col group hover:border-[#00f38d]/30 transition-all duration-200"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#00f38d]/50 transition-colors">
                                    {project.logo ? (
                                        <img src={project.logo} alt={`${project.title} logo`} className="h-8 w-8 object-contain" />
                                    ) : (
                                        <span className="text-2xl">⚡</span>
                                    )}
                                </div>
                                <div className="flex gap-4">
                                    {project.links?.live && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00f38d] transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.links?.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00f38d] transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00f38d] transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto mb-5">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-mono bg-[#00f38d]/10 text-[#00f38d] rounded-full border border-[#00f38d]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => setSelectedProject(project)}
                                className="mt-auto inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-gray-200 hover:border-[#00f38d]/40 hover:text-[#00f38d] transition-colors"
                            >
                                View details
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-md"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="glass-panel max-h-[85vh] w-full max-w-3xl overflow-auto rounded-2xl p-6 md:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    {selectedProject.logo && (
                                        <img src={selectedProject.logo} alt={`${selectedProject.title} logo`} className="h-10 w-10 rounded-md object-contain" />
                                    )}
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                                        <p className="text-sm text-gray-400">{selectedProject.description}</p>
                                    </div>
                                </div>
                                <button onClick={closeModal} className="rounded-md border border-white/15 p-2 text-gray-300 hover:text-[#00f38d]">
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-mono bg-[#00f38d]/10 text-[#00f38d] rounded-full border border-[#00f38d]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-300">
                                {selectedProject.details?.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>

                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                                {selectedProject.links?.github && (
                                    <a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:border-[#00f38d]/40 hover:text-[#00f38d]"
                                    >
                                        <Github size={20} />
                                        GitHub
                                    </a>
                                )}
                                {selectedProject.links?.live && (
                                    <a
                                        href={selectedProject.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:border-[#00f38d]/40 hover:text-[#00f38d]"
                                    >
                                        <ExternalLink size={16} />
                                        Live
                                    </a>
                                )}
                                {selectedProject.links?.npm && (
                                    <a
                                        href={selectedProject.links.npm}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:border-[#00f38d]/40 hover:text-[#00f38d]"
                                    >
                                        <Package size={16} />
                                        npm
                                    </a>
                                )}
                                {selectedProject.links?.pypi && (
                                    <a
                                        href={selectedProject.links.pypi}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:border-[#00f38d]/40 hover:text-[#00f38d]"
                                    >
                                        <Package size={16} />
                                        PyPI
                                    </a>
                                )}
                                {selectedProject.links?.blog && (
                                    <a
                                        href={selectedProject.links.blog}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:border-[#00f38d]/40 hover:text-[#00f38d]"
                                    >
                                        <BookOpen size={16} />
                                        Blog
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
