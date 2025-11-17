import { useState } from 'react';
import './App.css'
import { BaslangicEkrani } from './components/BaslangicEkrani'
import { OyunEkrani } from './components/OyunEkrani';

type EkranTipi = 'baslangic' | 'oyun' | 'sonuc';

function App() {
    // "Hangi ekrandayız?" bilgisini tutan state.
    const [aktifEkran, setAktifEkran] = useState<EkranTipi>('baslangic');
    const oyunuBaslat = () => {
        setAktifEkran('oyun'); // Aktif ekranı 'oyun' olarak değiştir
    }
    if (aktifEkran === 'baslangic') {
        return <BaslangicEkrani onBaslaClick={oyunuBaslat} />;
    }
    else if (aktifEkran === 'oyun') {
        // Görsel olmayan, sade oyun ekranını göster
        return <OyunEkrani />;
    }
    // Varsayılan olarak
    return <BaslangicEkrani onBaslaClick={oyunuBaslat} />;
}

export default App
