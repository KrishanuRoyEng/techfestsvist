interface GlitchTitleProps {
    text?: string;
    logo?: string;
}

export default function GlitchTitle({ text, logo }: GlitchTitleProps) {
    return (
        <div className="title-wrap">
            {logo ? (
                <div className="glitch-logo-container">
                    <img src={logo} alt="Innovention" className="glitch-logo g-main" />
                    <img src={logo} alt="" className="glitch-logo g-after" />
                    <img src={logo} alt="" className="glitch-logo g-before" />
                </div>
            ) : (
                <div className="glitch-title" data-text={text}>
                    {text}
                </div>
            )}
            <div className="glitch-mask" />
        </div>
    );
}
