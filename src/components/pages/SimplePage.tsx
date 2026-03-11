import { SimplePageData } from '@/types';

interface SimplePageProps {
    data: SimplePageData;
    isActive: boolean;
    onNavigate: (page: string) => void;
}

export default function SimplePage({ data, isActive, onNavigate }: SimplePageProps) {
    const isHtml = data.content.includes('<');

    return (
        <div
            className={`page simple-page${isActive ? ' active' : ''}`}
            id={`page-${data.id}`}
        >
            <div className="sp-title">
                {data.title} {data.title && ' '}
                <span>{data.titleHighlight}</span>
            </div>
            <div className="sp-sub">{data.subtitle}</div>
            {isHtml ? (
                <p
                    className="sp-content"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            ) : (
                <p className="sp-content">
                    {data.content.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < data.content.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </p>
            )}
            <a
                className="sp-back"
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                }}
            >
                ← Back to Home
            </a>
        </div>
    );
}
