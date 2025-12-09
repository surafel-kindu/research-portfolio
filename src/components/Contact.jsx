import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-12 rounded-3xl border-[#00f38d]/20 relative overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00f38d]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#00f38d]/20 rounded-full blur-3xl pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <a
                        href="mailto:surafel.mulaw@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#00f38d] text-black font-bold text-lg rounded-full hover:bg-[#00d078] transition-transform hover:scale-105"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <div className="flex justify-center gap-8 mt-12">
                        {[
                            { icon: Github, href: 'https://github.com/Surafeljava' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/surafelk/' },
                            { icon: Twitter, href: 'https://x.com/surafel_kindu' }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-gray-400 hover:text-[#00f38d] transition-colors p-3 hover:bg-white/5 rounded-full"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                <footer className="mt-20 text-gray-500 font-mono text-sm">
                    <p>&copy; 2025 Surafel Mulaw. Crafted with React & Tailwind.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
