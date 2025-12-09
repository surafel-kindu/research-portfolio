import { motion } from 'framer-motion';

const industryExperience = [
    {
        company: 'TestSavant.AI',
        role: 'Senior Full-Stack Engineer / AI Specialist',
        period: 'May 2024 – Present',
        description: [
            'Develop and fine-tune LLM security models/scanners to protect systems against prompt injection, sensitive-data leaks, regex attacks, toxic prompts, and related threats.',
            'Built/maintained a production web platform (Django + Next.js) and improved workflow efficiency (~60% reported).',
            'Contributed to developer tooling including Python SDK and TypeScript package, and a custom n8n community package supporting AI Guard workflows.'
        ]
    },
    {
        company: 'Tefer.io (StableDuel)',
        role: 'Senior Software Engineer',
        period: 'Dec 2023 – May 2024',
        description: [
            'Built interactive web features for UK market expansion (Django/React/AWS), including live streaming and account management.',
            'Delivered promotional contest features that increased engagement (~25%) and reduced deployment time (~20%) through automation.'
        ]
    },
    {
        company: 'Auction Ethiopia',
        role: 'Mobile Application Developer',
        period: 'Nov 2022 – May 2024',
        description: [
            'Developed a cross-platform online bidding mobile app (React Native/Expo).',
            'Improved performance and retention (~15%); launched on Android/iOS with 50,000+ downloads.'
        ]
    }
];

const researchExperience = [
    {
        company: 'Addis Ababa University (AAU)',
        role: 'Co-author, FlashStage Research Project',
        period: 'Working Paper',
        description: [
            'Co-authored FlashStage, a low-cost alternative to traditional Light Stage systems for image-based relighting using only a single flashlight and a standard camera.',
            'Developed an approach to infer light direction by detecting the brightest region/pixel in each image (using RGB magnitude) and sorting unordered captures into a structured lighting sequence.',
            'Implemented a relighting pipeline that maps sorted images to HDRI grid patches and composites results to match target environmental lighting.'
        ]
    },
    {
        company: 'Addis Ababa University',
        role: 'Advisor: Automated Amharic Braille Recognition',
        period: 'Advisor: Surafel Kindu',
        description: [
            'Advised a computer-vision pipeline to automatically detect and interpret Amharic Braille characters, supporting accessibility for visually impaired Amharic readers.',
            'Guided an end-to-end approach including paper detection & masking, deskewing via homography, dot detection, and grid-based matching.',
            'Contributed to the project’s future roadmap: improved robustness to noise/skew and support for multi-line Braille documents.'
        ]
    },
    {
        company: 'AAiT, Addis Ababa University',
        role: 'Hate Speech Detection and Classification for Amharic',
        period: 'Aug 2021 – Nov 2022',
        description: [
            'Built an Amharic hate-speech detection model using transfer learning for a low-resource NLP setting.',
            'Designed a crowdsourced data annotation pipeline (Telegram bot + web platform) to collect labels and aggression ratings.',
            'Developed a web system that integrates Twitter API to map recent Amharic hateful posts geographically.'
        ]
    },
    {
        company: 'IIT Mandi, India',
        role: 'AI & Machine Learning Research Internship',
        period: 'Feb 2020 – Mar 2020',
        description: [
            'Built and trained ML/DL models in TensorFlow/PyTorch to analyze Type-2 diabetes data and generate insights.',
            'Strengthened skills in model training pipelines, evaluation, and translating results into actionable recommendations.'
        ]
    }
];

const ExperienceParams = ({ title, data }) => (
    <div className="mb-20 last:mb-0">
        <h3 className="text-2xl font-bold mb-8 text-gray-300 font-mono pl-4 md:pl-10">{title}</h3>
        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
            {data.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-16 group"
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-[#00f38d] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#00f38d]" />

                    <div className="glass-panel p-6 rounded-xl transition-all hover:border-[#00f38d]/30 hover:translate-x-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-[#00f38d] transition-colors">{exp.company}</h3>
                                <h4 className="text-lg text-gray-400 font-mono">{exp.role}</h4>
                            </div>
                            <div className="mt-2 md:mt-0 px-4 py-1 bg-white/5 rounded-full text-sm font-mono text-[#00f38d] border border-[#00f38d]/20 self-start md:self-auto">
                                {exp.period}
                            </div>
                        </div>
                        <ul className="text-gray-400 leading-relaxed list-disc list-inside space-y-2">
                            {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-[#00f38d]"></div>
                </motion.div>

                <ExperienceParams title="Industry Experience" data={industryExperience} />
                <ExperienceParams title="Research Experience" data={researchExperience} />
            </div>
        </section>
    );
};

export default Experience;
