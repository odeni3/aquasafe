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
                        lat: -8.0476,
                        lon: -34.8770,
                        appid: 'bd5e378503939ddaee76f12ad7a97608',
                        units: 'metric',
                        lang: 'pt',
                    },
                });
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

    if (loading) return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Carregando informações do clima...</p>
        </div>
    );
    
    if (error) return (
        <div className="error-container">
            <h2>😕 Ops!</h2>
            <p>{error}</p>
        </div>
    );

    return (
        <div className="clima-container">
            <div className="clima-card">
                <div className="clima-header">
                    <h1>Clima em Recife</h1>
                    <p className="clima-location">
                        <span className="location-icon">📍</span>
                        {clima.name}, {clima.sys.country}
                    </p>
                </div>

                {clima && (
                    <>
                        <div className="temperatura-principal">
                            <div className="temp-atual">
                                <span className="temp-numero">{Math.round(clima.main.temp)}°</span>
                                <span className="temp-unidade">C</span>
                            </div>
                            <div className="temp-descricao">
                                <img 
                                    src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
                                    alt={clima.weather[0].description}
                                />
                                <p>{clima.weather[0].description}</p>
                            </div>
                        </div>

                        <div className="clima-detalhes">
                            <div className="detalhe-item">
                                <span className="detalhe-icon">🌡️</span>
                                <div className="detalhe-info">
                                    <span className="detalhe-label">Mín/Máx</span>
                                    <span className="detalhe-valor">
                                        {Math.round(clima.main.temp_min)}° / {Math.round(clima.main.temp_max)}°
                                    </span>
                                </div>
                            </div>

                            <div className="detalhe-item">
                                <span className="detalhe-icon">💧</span>
                                <div className="detalhe-info">
                                    <span className="detalhe-label">Umidade</span>
                                    <span className="detalhe-valor">{clima.main.humidity}%</span>
                                </div>
                            </div>

                            <div className="detalhe-item">
                                <span className="detalhe-icon">🌪️</span>
                                <div className="detalhe-info">
                                    <span className="detalhe-label">Vento</span>
                                    <span className="detalhe-valor">{Math.round(clima.wind.speed * 3.6)} km/h</span>
                                </div>
                            </div>

                            <div className="detalhe-item">
                                <span className="detalhe-icon">👁️</span>
                                <div className="detalhe-info">
                                    <span className="detalhe-label">Visibilidade</span>
                                    <span className="detalhe-valor">{(clima.visibility / 1000).toFixed(1)} km</span>
                                </div>
                            </div>
                        </div>

                        <div className="sol-info">
                            <div className="sol-item">
                                <span className="sol-icon">🌅</span>
                                <div className="sol-dados">
                                    <span className="sol-label">Nascer do Sol</span>
                                    <span className="sol-hora">
                                        {new Date(clima.sys.sunrise * 1000).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </span>
                                </div>
                            </div>

                            <div className="sol-item">
                                <span className="sol-icon">🌇</span>
                                <div className="sol-dados">
                                    <span className="sol-label">Pôr do Sol</span>
                                    <span className="sol-hora">
                                        {new Date(clima.sys.sunset * 1000).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Clima;
