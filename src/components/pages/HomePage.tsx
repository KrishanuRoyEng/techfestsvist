import SponsorTag from '@/components/home/SponsorTag';
import GlitchTitle from '@/components/home/GlitchTitle';
import DateLine from '@/components/home/DateLine';
import Tagline from '@/components/home/Tagline';
import Countdown from '@/components/home/Countdown';
import HeroButtons from '@/components/home/HeroButtons';

interface HomePageProps {
    isActive: boolean;
    onNavigate: (page: string) => void;
}

export default function HomePage({ isActive, onNavigate }: HomePageProps) {
    return (
        <div
            className={`page${isActive ? ' active' : ''}`}
            id="page-home"
        >
            <SponsorTag />
            <GlitchTitle text="Innovation" />
            <DateLine />
            <Tagline />
            <Countdown />
            <HeroButtons onNavigate={onNavigate} />
        </div>
    );
}
