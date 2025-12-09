import { useEffect, useRef } from 'react';

const BackgroundGrid = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const updateMousePosition = (e) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            containerRef.current.style.setProperty('--x', `${clientX}px`);
            containerRef.current.style.setProperty('--y', `${clientY}px`);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
            style={{
                background: 'var(--bg-color)',
                '--x': '50%',
                '--y': '50%'
            }}
        >
            {/* Base Grid (Dim) */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                           linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Highlighted Grid (Revealed by Mask) */}
            <div
                className="absolute inset-0 opacity-[0.3]"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--accent-color) 1px, transparent 1px),
                           linear-gradient(to bottom, var(--accent-color) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle 300px at var(--x) var(--y), black, transparent)',
                    WebkitMaskImage: 'radial-gradient(circle 300px at var(--x) var(--y), black, transparent)'
                }}
            />

            {/* Moving Blocks / Floating Elements */}
            {/* We can add a few floating squares for the 'moving blocks' feel */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 animate-pulse" />
                <div className="absolute top-3/4 left-2/3 w-48 h-48 border border-white/10 animate-pulse delay-700" />
            </div>
        </div>
    );
};

export default BackgroundGrid;
