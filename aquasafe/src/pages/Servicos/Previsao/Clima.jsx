import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function Clima() {
    const [clima, setClima] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClima = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        lat: -8.0476, // Latitude de Recife
                        lon: -34.8770, // Longitude de Recife
                        appid: 'bd5e378503939ddaee76f12ad7a97608',  // Sua chave da API OpenWeather
                        units: 'metric',
                        lang: 'pt',
                    },
                });
                console.log('Resposta do clima:', response);
                setClima(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Erro ao carregar clima:', err);
                setError('Erro ao carregar dados do clima');
                setLoading(false);
            }
        };

        fetchClima();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="clima-container">
        <div className="clima">
            <h1>Clima - Recife</h1>
            {clima && (
                <div>
                    <h2>Temperatura: {clima.main.temp}°C</h2>
                    <p><strong>Descrição:</strong> {clima.weather[0].description}</p>
                    <p><strong>📉 Temperatura Mínima:</strong> {clima.main.temp_min}°C</p>
                    <p><strong>📈 Temperatura Máxima:</strong> {clima.main.temp_max}°C</p>
                    <p><strong>Pressão:</strong> {clima.main.pressure} hPa</p>
                    <p><strong>Umidade:</strong> {clima.main.humidity}%</p>
                    <p><strong>🕶️ Visibilidade:</strong> {clima.visibility} metros</p>
                    <p><strong>🌬️ Vento:</strong> {clima.wind.speed} m/s, direção: {clima.wind.deg}°</p>
                    <p><strong>☁️ Nuvens:</strong> {clima.clouds.all}%</p>
                    <p><strong>🏙️ Cidade:</strong> {clima.name}</p>
                    <p><strong>País:</strong> {clima.sys.country}</p>
                    <p><strong>🌅 Hora do Nascer do Sol:</strong> {new Date(clima.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p><strong>🌇 Hora do Pôr do Sol:</strong> {new Date(clima.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            )}
        </div>
        </div>
    );
}

export default Clima;
