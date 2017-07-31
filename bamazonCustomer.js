//REMINDER***Look at Great Bay and TwoTabels examples***


var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Captof#6',
	database: 'bamazon2_db'
});

connection.connect(function(err){
	if(err){
		console.log(err);
	}
	displayTable();
});

// console.log('this connection is successful')
// Display all of the items available for sale. Include the ids, names, and prices of products for sale
function displayTable (){
	var query = 'SELECT * FROM bamazon2_db.products';
		connection.query(query, function(err,res){
			for( var i = 0; i < res.length; i++){
				console.log(
					res[i].id +
					'||' + res[i].product_name +
					'||' + res[i].department_name +
					'||' + res[i].price +
					'||' + res[i].stock_quantity
				);
			}
			if(err){
				console.log(err);
			}
// Prompt users with two messages.
		promptUser();
		});
};
// console.log('this connection is also successful');
function promptUser(err, res){
	inquirer.prompt([{
		name: 'action',
		type: 'input',
		message: 'What would you like to view?'
	}]).then(function(answer){
		var product_name = answer.input
		for(var i = 0; i < answer.length;i++){
			if(res[i].product_name){
				return true;
			}
			return false;
		}
		inquirer.prompt([{
			name:'quantity',
			type: 'input',
			message:'How many units would you like to buy?'
		}]).then(function(answer){
			 console.log(answer);
        	var query = connection.query(
            	"SELECT PRICE, STOCK_QUANTITY FROM PRODUCTS WHERE ?",
            	[
                	{
                    	Item: answer.id
                	}
            	],
	            function (err, res) {
	                if (err) {
	                    throw err;
	                }
	                if (answer.quantity > res[0].stock_quantity) {
	                    console.log("Insufficient Quantity");

	                } else {
	                    var newQuantity = res[0].stock_quantity - answer.quantity;
	                    console.log(newQuantity);
	                    updateStockQuantity(answer.id, newQuantity);

	                    var price = res[0].price;
	                    var total = answer.quantity * price;
	                    console.log("Your total purchase price is: " + total);

                }
            }
        );
    });
})
		
};

