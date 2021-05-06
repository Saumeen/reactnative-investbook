import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('invest.db')

const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
            resolve(results);
        },
            (error) => {
                reject(error);
            });
    });
});
//        "create table if not exists invest (id text primary key not null,amount text,type text,descrption text,paymentType text);"


export const getDataByType = async () => {
    let stock = await ExecuteQuery('SELECT sum(amount) as amount FROM invest where type=?', ['STOCK']).catch((e) => console.error(e));
    let mf = await ExecuteQuery('SELECT sum(amount) as amount  FROM invest where type=?', ['MUTUALFUND']).catch((e) => console.error(e));
    let other = await ExecuteQuery('SELECT sum(amount) as amount FROM invest where type=?', ['OTHER']).catch((e) => console.error(e));
    const data = { 'stock': stock, "mf": mf, "other": other }
    return data
}

export const getTotalAmount = async () => {
    let creditAmount = await ExecuteQuery('SELECT sum(amount) as credit FROM invest where paymentType=?', ['Income']).catch((e) => { console.error(e) });
    let debitAmount = await ExecuteQuery('SELECT sum(amount) as debit FROM invest where paymentType=?', ['Invest']).catch((e) => { console.error(e) });
    const data = { 'credit': creditAmount, 'debit': debitAmount }
    return data;
}

export const deletbyId = async (id) => {
    let deleteQuery = await ExecuteQuery('DELETE FROM invest where id = ?', [id]).catch((e) => { console.error(e) });
    console.log("delete Query ::" + JSON.stringify(deleteQuery));
}

export const removeData = async () => {
    let deleteQuery = await ExecuteQuery('DELETE FROM invest', []);
    console.log("delete Query ::" + JSON.stringify(deleteQuery));
}
export const storeData = async (value) => {

    let singleInsert = await ExecuteQuery("INSERT into invest VALUES(?,?,?,?,?,?);", [value.id, parseFloat(value.amount), value.type, value.desc, value.paytype, value.date]);
    console.log("Insert Query :: " + JSON.stringify(singleInsert));
}

export const getData = async () => {
    let selectQuery = await ExecuteQuery("SELECT * FROM invest", []).catch((e) => { console.error(e) })
    var rows = selectQuery.rows._array;
    return rows
}
