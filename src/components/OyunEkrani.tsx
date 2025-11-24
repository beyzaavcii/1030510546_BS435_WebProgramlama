import { Gorsel } from './Gorsel';
export const OyunEkrani = () => {

    // Şimdilik test amaçlı rastgele resim linkleri
    const resim1 = "https://placehold.co/200x200/FF5733/FFFFFF?text=Resim+1";
    const resim2 = "https://placehold.co/200x200/33FF57/FFFFFF?text=AI+Resmi";
    const resim3 = "https://placehold.co/200x200/3357FF/FFFFFF?text=Resim+2";

    return (
        <div className="oyun-ekrani">
            <h2>Tahminini Yap!</h2>
            <p>Görsellerden biri yapay zeka ürünü. Sence hangisi?</p>

            {/* Görsellerin yan yana duracağı alan */}
            <div className="gorsel-alani">
                <Gorsel imageUrl={resim1} onClick={() => console.log("1. Resim seçildi")} />
                <Gorsel imageUrl={resim2} onClick={() => console.log("2. Resim seçildi")} />
                <Gorsel imageUrl={resim3} onClick={() => console.log("3. Resim seçildi")} />
            </div>
        </div>
    );
}