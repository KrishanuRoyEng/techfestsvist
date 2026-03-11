export default function DateLine() {
    return (
        <div className="date-line">
            <div className="dash" />
            <span>
                <span className="date-num">1</span>st –{' '}
                <span className="date-num">2</span>nd April
            </span>
            &nbsp;
            <span>
                <span className="date-num">2</span>–<span className="date-num">0</span>–
                <span className="date-num">2</span>–<span className="date-num">6</span>
            </span>
            <div className="dash" />
        </div>
    );
}
