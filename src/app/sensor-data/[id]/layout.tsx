import type { Metadata } from 'next';
import SideDrawer from '@/components/Organisms/SideDrawer/SideDrawer';

export default function SensorDataPage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <SideDrawer>{children}</SideDrawer>
            </body>
        </html>
    );
}
