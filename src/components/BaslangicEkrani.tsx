interface BaslangicEkraniProps {
    onBaslaClick: () => void;
}

export const BaslangicEkrani = ({ onBaslaClick }: BaslangicEkraniProps) => {
    return (
        <div className="start-screen">
            <h1>AI Tahmin Oyunu</h1>
            <p>
                Kurallar: Ekrana gelecek 3 görselden 1 tanesi yapay zeka
                tarafından üretilmiştir. Hangisi olduğunu bulmaya çalışın.
            </p>
            <button onClick={onBaslaClick}>
                Başla
            </button>
        </div>
    )
}