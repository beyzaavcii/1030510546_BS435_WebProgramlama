interface GorselProps {
    imageUrl: string;
    onClick: () => void;
}

export const Gorsel = ({ imageUrl, onClick }: GorselProps) => {
    return (
        <div className="gorsel-kapsayici" onClick={onClick}>
            <img src={imageUrl} alt="Oyun Görseli" className="gorsel-resim" />
        </div>
    );
}