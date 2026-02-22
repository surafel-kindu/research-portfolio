const BackgroundGrid = () => {
    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
            style={{
                background: 'var(--bg-color)',
            }}
        >
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                           linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};

export default BackgroundGrid;
