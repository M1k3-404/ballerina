import * as sql from 'mssql';

const config = {
    user: 'Mike',
    password: '1234',
    server: 'MIKE\SQLEXPRESS',
    database: 'Ballerina',
};

export async function connect() {
    try {
        await sql.connect(config);
        console.log('Connected to the Database');
    } catch (err) {
        console.log('Error connecting to the database: ', err);
    }
}

export async function executeQuery(query, params = []) {
    try {
        const pool = await new sql.Request();
        params.forEach((param) => pool.input(...param));
        const result = await pool.query(query);
        return result.recordset;
    } catch (err) {
        console.log('Error executing query: ', err);
        throw err;
    }
}
