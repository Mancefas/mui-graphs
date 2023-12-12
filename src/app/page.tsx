import { SensorChartSection } from '@/components/SensorChartSection/SensorChartSection';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <SensorChartSection />
        </main>
    );
}
