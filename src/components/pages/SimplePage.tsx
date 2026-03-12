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
            
            {data.image && (
                <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                    <img src={data.image} alt={data.titleHighlight} style={{ maxWidth: '200px', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))' }} />
                </div>
            )}
            
            {data.link && (
                <a 
                    href={data.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="sp-link-btn"
                    style={{ margin: '1rem 0 2.5rem 0', display: 'inline-block', padding: '0.8rem 1.5rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid var(--cyan)', color: 'var(--cyan)', textDecoration: 'none', fontFamily: 'var(--font-orbitron)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', transition: 'all 0.3s' }}
                >
                    Visit Website
                </a>
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
