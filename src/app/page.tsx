import SensorDataCard from '@/components/Organisms/SensorDataCard/SensorDataCard';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <SensorDataCard />
        </main>
    );
}
