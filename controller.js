'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data buku
exports.tampilsemuabuku = function(req, res){
    connection.query('SELECT * FROM buku', function(error, rows, fields){
        if(error){
            console.log(error);

        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data buku berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM buku WHERE id_buku = ?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menambahkan data buku
exports.tambahBuku = function(req, res){
    var tahun_buku = req.body.tahun_buku;
    var judul_buku = req.body.judul_buku;
    var pengarang = req.body.pengarang;

    connection.query('INSERT INTO buku (tahun_buku,judul_buku,pengarang) VALUES(?,?,?)',
        [tahun_buku, judul_buku, pengarang],
        function (error, rows, fields){
            if(error) {
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data!",res)
            }  
        });
};

//mengubah data berdasarkan id
exports.ubahBuku = function(req,res){
    var id = req.body.id_buku;
    var tahun_buku = req.body.tahun_buku;
    var judul_buku = req.body.judul_buku;
    var pengarang = req.body.pengarang;

    connection.query('UPDATE buku SET tahun_buku=?, judul_buku=?, pengarang=? WHERE id_buku=?', [tahun_buku,judul_buku,pengarang,id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil ubah data",res)
        }
    });
};

//Menghapus data berdasarkan id
exports.hapusBuku = function (req, res) {
    var id = req.body.id_buku;
 
     connection.query('DELETE FROM buku WHERE id_buku=?',[id],
         function (error, rows, fields) {
             if (error) {
                 console.log(error);
             } else {
                 response.ok("Berhasil hapus data",res)
             }
         });
 };

