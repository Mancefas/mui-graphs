import SensorDataCard from '@/components/Organisms/SensorDataCard/SensorDataCard';
import styles from './page.module.css';
import OpenMap from '@/components/Molecules/OpenStreetMaps';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <SensorDataCard /> */}
            <OpenMap />
        </main>
    );
}
