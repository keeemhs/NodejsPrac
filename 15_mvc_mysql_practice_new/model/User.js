// const mysql = require('mysql');
import mysql from 'mysql2/promise'

//mysql 연결
const conn = mysql.createPool({
    host: 'localhost',
    user: 'news',
    password: '1234',
    database: 'kdt9',
    port: 3306,
});
// createConnection : 단일연결, 매번 연결이 필요할 떄마다 새로운 연결 생성
// 연결수가 많아지면 성능에 연향이 생김.
// createPool : 여러연결, 여러개의 연결을 미리 생성하고 관리
// 요청이 들어올때마다 생성한 연결 할당. 동시 처리 가능

export const post_signup = async (data) => {
    try {
        const query = `INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)`;
        await conn.query(query, [data.userid, data.pw, data.name])
    } catch (error) {
        console.log(error)
    }
}
export const post_signin = async (data) => {
    try {
        const query = `SELECT * FROM user WHERE userid=? AND pw=?`;
        const rows = await conn.queyr(query, [data.userid, data.pw])
    } catch (error) {
        console.log(error)
    }
}
// exports.post_signin = (data, callback) => {
//     const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signin', rows);
//         callback(rows);
//     });
// };

exports.post_profile = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' `;
    conn.query(query, (err, rows) => {
        console.log('post_profile', rows);
        callback(rows);
    });
};

exports.edit_profile = (data, callback) => {
    const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}  `;
    conn.query(query, (err, rows) => {
        callback();
    });
};

exports.delete_profile = (id, callback) => {
    const query = `DELETE FROM user WHERE id=${id}`;
    conn.query(query, (err, rows) => {
        callback();
    });
};
