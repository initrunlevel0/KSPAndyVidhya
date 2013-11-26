var Sequelize = require("sequelize"); 
var sequelize = new Sequelize("ksp", "root", "root", {
	dialect: 'mysql'
});

// Executing raw query
// sequelize.query('SELECT * FROM myTable').success(function(myTableRows) {
// 	console.log(myTableRows);
// });

// Model Definition
var Anggota = sequelize.define('anggota', {
	id_anggota: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	nama_anggota: {type: Sequelize.STRING(255), allowNull: false},
	alamat_anggota: {type: Sequelize.TEXT, allowNull: false},
	pekerjaan: {type: Sequelize.STRING(255), allowNull: false},
	role: {type: Sequelize.INTEGER },
	sandi_masuk: {type: Sequelize.STRING(255)},
	saldo_tabungan: {type: Sequelize.STRING(255), defaultValue: "0" }
}, { timestamps: false, freezeTableName: true });


var Peminjaman = sequelize.define('anggota', {
	id_anggota: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	nama_anggota: {type: Sequelize.STRING(255), allowNull: false},
	alamat_anggota: {type: Sequelize.TEXT, allowNull: false},
	pekerjaan: {type: Sequelize.STRING(255), allowNull: false},
	role: {type: Sequelize.INTEGER },
	sandi_masuk: {type: Sequelize.STRING(255)},
	saldo_tabungan: {type: Sequelize.STRING(255), defaultValue: "0" }
}, { timestamps: false, freezeTableName: true });

// Test area
// Create data in table anggota
Anggota.create({
	nama_anggota: "Putu Wiramaswara Widya",
	alamat_anggota: "Surabaya",
	pekerjaan: "Mahasiswa",
	role: 0,
	sandi_masuk: "wira"

})
