interface GlitchTitleProps {
    text: string;
}

export default function GlitchTitle({ text }: GlitchTitleProps) {
    return (
        <div className="title-wrap">
            <div className="glitch-title" data-text={text}>
                {text}
            </div>
            <div className="glitch-mask" />
        </div>
    );
}
