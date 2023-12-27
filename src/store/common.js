export const temperatureColor = '#FF8C78';
export const humidityColor = '#6F8FA3';
export const co2Color = '#749C73';

export const chartColor = (name) => {
    switch (name) {
        case 'CO':
            return '#9370DB';
        case 'NO₂':
            return '#006400';
        case 'O₃':
            return '#98FB98';
        case 'SO₂':
            return '#FFDAB9';
        case 'KD₂.₅':
            return '#FFB6C1';
        case 'KD₁₀':
            return '#4682B4';
        case 'Temperatūra':
            return '#F08080';
        case 'Drėgnumas':
            return '#00BFFF';
        default:
            return 'green';
    }
};
