import SponsorTag from '@/components/home/SponsorTag';
import GlitchTitle from '@/components/home/GlitchTitle';
import TitleSponsor from '@/components/home/TitleSponsor';
import DateLine from '@/components/home/DateLine';
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
            <GlitchTitle logo="/Innovention.svg" />
            <TitleSponsor />
            <DateLine />
            <Countdown />
            <HeroButtons onNavigate={onNavigate} />
        </div>
    );
}
