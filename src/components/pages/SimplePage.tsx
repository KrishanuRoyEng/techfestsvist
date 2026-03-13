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
            <div className="sp-container">
                <div className="sp-header animate-in">
                    <div className="sp-title">
                        {data.title} {data.title && ' '}
                        <span>{data.titleHighlight}</span>
                    </div>
                    <div className="sp-sub">{data.subtitle}</div>
                </div>

                <div className="sp-content-wrapper gallery-scrollbar animate-in" style={{ animationDelay: '0.1s' }}>
                    {isHtml ? (
                        <div
                            className="sp-content"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    ) : (
                        <div className="sp-content">
                            {data.content.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < data.content.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </div>
                    )}

                    {data.image && (
                        <div style={{ marginTop: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                            <img 
                                src={data.image} 
                                alt={data.titleHighlight} 
                                style={{ 
                                    maxWidth: '240px', 
                                    filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.4))',
                                    borderRadius: '8px'
                                }} 
                            />
                        </div>
                    )}

                    {data.link && (
                        <div style={{ textAlign: 'center' }}>
                            <a 
                                href={data.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="sp-link-btn"
                            >
                                Visit Website
                            </a>
                        </div>
                    )}
                </div>

                <div className="sp-footer animate-in" style={{ animationDelay: '0.2s' }}>
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
            </div>
        </div>
    );
}
