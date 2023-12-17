'use client';

import DynamicOpenMap from '@/components/Molecules/OpenStreetMaps';

import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <DynamicOpenMap />
        </main>
    );
}
