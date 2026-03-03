interface HeroButtonsProps {
    onNavigate: (page: string) => void;
}

export default function HeroButtons({ onNavigate }: HeroButtonsProps) {
    return (
        <div className="hero-btns">
            <a
                href="#"
                className="btn btn-glow"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate('events');
                }}
            >
                View Events
            </a>
            <a
                href="#"
                className="btn btn-pink"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                }}
            >
                Register Now
            </a>
        </div>
    );
}
