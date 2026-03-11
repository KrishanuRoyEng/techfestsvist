import Image from 'next/image';

interface GlitchTitleProps {
    text?: string;
    logo?: string;
}

export default function GlitchTitle({ text, logo }: GlitchTitleProps) {
    return (
        <div className="title-wrap">
            {logo ? (
                <div className="glitch-logo-container">
                    <div className="glitch-logo-inner">
                        <Image 
                            src={logo} 
                            alt="Innovention" 
                            className="glitch-logo g-main" 
                            width={600} 
                            height={160} 
                            priority 
                            unoptimized={logo.endsWith('.svg')}
                        />
                        <Image 
                            src={logo} 
                            alt="" 
                            className="glitch-logo g-after" 
                            width={600} 
                            height={160} 
                            aria-hidden="true" 
                            unoptimized={logo.endsWith('.svg')}
                        />
                        <Image 
                            src={logo} 
                            alt="" 
                            className="glitch-logo g-before" 
                            width={600} 
                            height={160} 
                            aria-hidden="true" 
                            unoptimized={logo.endsWith('.svg')}
                        />
                    </div>
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
