import { Gorsel } from './Gorsel';
import { useState } from 'react';

const OYUN_VERISI = [
    {
        id: 1,
        url: "https://placehold.co/300x300/FF5733/FFFFFF?text=Gercek+1",
        isAi: false
    },
    {
        id: 2,
        url: "https://placehold.co/300x300/33FF57/FFFFFF?text=AI+Uretimi",
        isAi: true
    },
    {
        id: 3,
        url: "https://placehold.co/300x300/3357FF/FFFFFF?text=Gercek+2",
        isAi: false
    }
];

export const OyunEkrani = () => {
    // Hangi görselin seçildiğini takip eden State
    const [secilenId, setSecilenId] = useState<number | null>(null);

    // Görsele tıklanınca çalışacak fonksiyon
    const gorselSec = (id: number) => {
        setSecilenId(id);
        console.log("Seçilen ID:", id);
    };

    return (
        <div className="oyun-ekrani">
            <h2>Tahminini Yap!</h2>
            <p>Buradaki görsellerden biri yapay zeka ürünü. Sence hangisi?</p>

            <div className="gorsel-alani">
                {/* Burada 'map' fonksiyonu kullanıyoruz.
            Yani 3 kere elle gorsel yazmak yerine, listeyi döngüye sokuyoruz.
        */}
                {OYUN_VERISI.map((gorsel) => (
                    <Gorsel
                        key={gorsel.id}
                        imageUrl={gorsel.url}
                        isSelected={secilenId === gorsel.id} // Eğer tıklanan ID bu ise çerçeve yak
                        onClick={() => gorselSec(gorsel.id)}
                    />
                ))}
            </div>

            {/* Seçim yapıldıysa altta yazsın */}
            {secilenId !== null && (
                <div style={{ marginTop: '20px', color: '#333' }}>
                    Seçilen Görsel ID: <strong>{secilenId}</strong>
                </div>
            )}
        </div>
    );
}