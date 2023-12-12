import HourlyChart from '@/components/HourlyChart/HourlyChart';
import DayBars from '@/components/DayBars/DayBars';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <HourlyChart />
            <DayBars />
        </main>
    );
}
