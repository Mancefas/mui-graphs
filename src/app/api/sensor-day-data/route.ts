import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2';

const dbConfig = {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDBNAME,
};


export async function GET(request: NextRequest) {
    const connection = mysql.createConnection(dbConfig);
    const sensorID = request.nextUrl.searchParams.get('sensorId');

    // const query = 'SELECT idMeasurement, timestamp, value FROM `Measurement` JOIN Data ON Data.fkMeasurement = Measurement.fkSensor WHERE fkSensor = 17 AND fkParameter = 7 AND DATE(timestamp) = (SELECT MAX(DATE(timestamp)) FROM Measurement) - INTERVAL 0.5 DAY ORDER BY `Measurement`.`timestamp`';

    // const query = 'SELECT idMeasurement, timestamp, value, fkParameter FROM `Measurement` JOIN Data ON Data.fkMeasurement = Measurement.fkSensor WHERE fkSensor = 17 AND DATE(timestamp) = (SELECT MAX(DATE(timestamp)) FROM Measurement) - INTERVAL 1 DAY ORDER BY `Data`.`fkParameter`'
    // const query = 'SELECT fkParameter, GROUP_CONCAT(JSON_OBJECT("idMeasurement", idMeasurement, "timestamp", timestamp, "value", value, "fkParameter", fkParameter) ORDER BY timestamp DESC SEPARATOR ",") AS nestedData FROM Measurement JOIN Data ON Data.fkMeasurement = Measurement.fkSensor WHERE fkSensor = 17 AND DATE(timestamp) = (SELECT MAX(DATE(timestamp)) FROM Measurement) - INTERVAL 1 DAY GROUP BY fkParameter ORDER BY fkParameter;'
    
    //   SELECT * FROM `Measurement` JOIN Data ON Data.fkMeasurement = Measurement.fkSensor WHERE fkSensor = 17 AND DATE(timestamp) = (SELECT MAX(DATE(timestamp)) FROM Measurement) - INTERVAL 1 DAY 
    // GROUP BY Data.fkParameter
    // ORDER BY `Measurement`.`timestamp`
    // const query = 'SELECT idMeasurement, timestamp, value, fkParameter, name FROM `Measurement` JOIN Data ON Data.fkMeasurement = Measurement.fkSensor JOIN Parameter ON idParameter = Data.fkParameter WHERE fkSensor = 17 AND value != 0.00 AND DATE(timestamp) = (SELECT MAX(DATE(timestamp)) FROM Measurement) - INTERVAL 1 DAY ORDER BY `Data`.`fkParameter`'
    
    // NEED TO FIX THIS WITH NAME NAMED PARAMETERS, BUT WITH NAMED PARAMETER IT DOES NOT GET SORTED (ORDER)
    const query = `SELECT idMeasurement, timestamp, value, fkParameter, name FROM Measurement JOIN Data ON Data.fkMeasurement = Measurement.fkSensor JOIN Parameter ON idParameter = Data.fkParameter WHERE fkSensor = ${sensorID} AND value != 0.00 AND DATE(timestamp) = (SELECT MAX(DATE(timestamp)) FROM Measurement) - INTERVAL 1 DAY ORDER BY Data.fkParameter`

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