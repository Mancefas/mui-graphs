import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2';

const dbConfig = {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDBNAME,
};

// export async function GET(request: NextRequest) {
//     // Create a MySQL connection
//     const connection = mysql.createConnection(dbConfig);

//     const connectToMySQL = () =>
//         new Promise<void>((resolve, reject) => {
//             connection.connect((err) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     // console.log('Connected to MySQL');
//                     resolve();
//                 }
//             });
//         });

//     const performQuery = (query: string) =>
//         new Promise<any[] | any>((resolve, reject) => {
//             connection.query(query, (err, results) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });

//         // Connect to the MySQL server
//         await connectToMySQL();

//         // Perform the query
//         const results = await performQuery('SELECT idLocation, adress, description, longitude, latitude, Sensor.active, Sensor.operational, Sensor.type, Sensor.lastMeasure FROM Location JOIN Sensor ON Sensor.fkLocation = Location.idLocation');

//         // Close the connection
//         connection.end();

//         // Return the results as JSON
//         return NextResponse.json(results);

// }

export async function GET(request: NextRequest) {
    const connection = mysql.createConnection(dbConfig);
    const query = 'SELECT idLocation, adress, description, longitude, latitude, Sensor.active, Sensor.operational, Sensor.type, Sensor.lastMeasure, Sensor.idSensor FROM Location JOIN Sensor ON Sensor.fkLocation = Location.idLocation';

    try {

        const results = await new Promise<any[] | any>((resolve, reject) => {
            connection.query(query, (error, results) => {
              if (error) {
                console.error(error);
                reject(error);
              } else {
                resolve(results);
              }
            });
          });
      
          connection.end();      
    
        return NextResponse.json(results, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error with MySql' }, { status: 500 });
    
    }
}