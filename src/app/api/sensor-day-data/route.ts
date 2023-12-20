'use server'

import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2';
import { singleItem } from '@/types/chartArray';

const dbConfig = {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDBNAME,
};


export async function GET(request: NextRequest) {
    const connection = mysql.createConnection(dbConfig);
    const sensorID = request.nextUrl.searchParams.get('sensorId');
    const cleanedSensorId = sensorID?.replace(/"';/g, '');

    
    // NEED TO FIX THIS WITH NAME NAMED PARAMETERS, BUT WITH NAMED PARAMETER IT DOES NOT GET SORTED (ORDER)
    // const query = `SELECT idMeasurement, timestamp, value, fkParameter, name FROM Measurement 
    // JOIN Data ON Data.fkMeasurement = Measurement.fkSensor 
    // JOIN Parameter ON idParameter = Data.fkParameter 
    // WHERE fkSensor = ${cleanedSensorId} AND value != 0.00 
    // AND DATE(timestamp) = (SELECT MAX(DATE(timestamp)) FROM Measurement) - INTERVAL 1 DAY ORDER BY Data.fkParameter`

    const query = `SELECT DISTINCT idLocation, idMeasurement, idData, timestamp, value, name, measure FROM Location 
    JOIN Sensor ON Sensor.fkLocation = Location.idLocation 
    JOIN Measurement ON Measurement.fkLocation = Location.idLocation 
    JOIN Data ON  Data.fkMeasurement = Measurement.idMeasurement 
    JOIN Parameter ON Parameter.idParameter = Data.fkParameter 
    WHERE Location.idLocation = ${cleanedSensorId} AND DATE(timestamp) = '2021-01-23' 
    ORDER BY Data.fkParameter, timestamp`

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
  
      // Transform the results
      const measurementsParameters = new Set(
          results.map((item: singleItem) => item.name)
      );
      const uniquefkParameter = Array.from(measurementsParameters);
  
      const uniqueArrays = [];
  
      for (const uniqueParameter of uniquefkParameter) {
          const filteredArray = results.filter(
              (item: singleItem) => item.name === uniqueParameter
          );
          uniqueArrays.push(filteredArray);
      }
  
      return NextResponse.json(uniqueArrays, { status: 200 });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error with MySql' }, { status: 500 });
  }


}