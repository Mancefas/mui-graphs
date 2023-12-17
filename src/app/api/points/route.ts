import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql';

const dbConfig = {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDBNAME,
};

export async function GET(request: NextRequest) {
    // Create a MySQL connection
    const connection = mysql.createConnection(dbConfig);

    const connectToMySQL = () =>
        new Promise<void>((resolve, reject) => {
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    // console.log('Connected to MySQL');
                    resolve();
                }
            });
        });

    const performQuery = (query: string) =>
        new Promise<any[]>((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

    try {
        // Connect to the MySQL server
        await connectToMySQL();

        // Perform the query
        const results = await performQuery('SELECT idLocation, adress, description, longitude, latitude, Sensor.active, Sensor.operational, Sensor.type, Sensor.lastMeasure FROM Location JOIN Sensor ON Sensor.fkLocation = Location.idLocation');

        // Close the connection
        connection.end();

        // Return the results as JSON
        return NextResponse.json(results);
    } catch (error) {
        console.error('Error:', error);

        // Close the connection in case of an error
        connection.end();

        // Return an error response
        return NextResponse.error();
    }

}