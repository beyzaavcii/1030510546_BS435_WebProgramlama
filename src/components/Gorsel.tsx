interface GorselProps {
    imageUrl: string;
    onClick: () => void;
    isSelected: boolean;
}

export const Gorsel = ({ imageUrl, onClick, isSelected }: GorselProps) => {
    return (
        // Eğer isSelected true ise, 'secili' sınıfını da ekle (Mavi çerçeve için)
        <div
            className={`gorsel-kapsayici ${isSelected ? 'secili' : ''}`}
            onClick={onClick}
        >
            <img src={imageUrl} alt="Oyun Görseli" className="gorsel-resim" />
        </div>
    );
}