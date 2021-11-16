import { setGame} from "./setGame";

export default function preload(){
    const lotofacilOption = document.getElementById('lotofacilOption');
    const megaOption = document.getElementById('megaOption');
    const quinaOption = document.getElementById('quinaOption');

    lotofacilOption.onclick = () => setGame('lotofacil');
    megaOption.onclick = () => setGame('mega');
    quinaOption.onclick = () => setGame('quina');

    setGame('lotofacil')

}