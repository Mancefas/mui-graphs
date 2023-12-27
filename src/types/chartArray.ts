export type singleItem = {
    idData: number;
    idLocation: number;
    idMeasurement: number;
    measure: string;
    name: string;
    time: string;
    value: number;
};

export type DataItem = {data: singleItem[]} | { error: string };