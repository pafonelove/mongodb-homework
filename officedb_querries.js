// Запросы, которые были использованы при выполнении контрольной работы.


// 1.
db.officedb.find({"interests.0": "футбол"} , {name: 1, surname: 1, position: 1});

// 2.
db.officedb.find({}, {surname: 1, name: 1, _id: 0}).sort({surname: 1});

// 3.
db.officedb.find({"items.computer": "Intel"}, {_id: 0, name: 1, surname: 1, personal_number: 1, "items.computer": 1});

// 4.
db.officedb.aggregate([{$group: {_id: "Least_Apartment", apartment: {$min: "$address.apartment"}}}]);
db.officedb.find({"address.apartment": 12}, {_id: 0, name: 1, surname: 1, position: 1, address: 1});

// 5.
db.officedb.aggregate([{$group: {_id: "Employees", total_salary: {$sum: "$salary"}}}]);

// 6.
db.officedb.aggregate([{$group: {_id: "Employees", avg_age: {$avg: "$age"}}}]);

// 7.
db.officedb.aggregate([{$group: {_id: "Employees", lst_salary: {$min: "$salary"}}}]);

// 8.
db.officedb.aggregate([{$group: {_id: "Employees", lst_salary: {$max: "$salary"}}}]);