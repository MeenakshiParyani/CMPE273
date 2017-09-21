/**
 * http://usejsdoc.org/
 */

var ejs = require("ejs");
var mysql = require('./mysql');
var window = require('window');

function displaySignup(req,res){
	ejs.renderFile('./views/signUp.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
}


function signin(req,res) {

	ejs.renderFile('./views/signin.ejs',function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
}

function signup(req,res){
	
	var insertUser="INSERT INTO `users` (`username`, `password`, `firstname`, `lastname`, `dob`, `gender`)" +
			" VALUES ('"+ req.param("inputUsername") + "', '" + req.param("inputPassword") + "', ' " +
			req.param("inputFirstName") + "', ' " + req.param("inputLastName") + "', ' " 
			+ req.param("inputDOB") + "', '" + req.param("inputGender") +"');"
	console.log("Query is:"+ insertUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			ejs.renderFile('./views/signin.ejs', function(err, result){
				// render on success
				if (!err) {
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}  
	},insertUser);
}


function afterSignIn(req,res)
{
	// check user already exists
	var getUser="select * from `users` where username='"+req.param("inputUsername")+"' and password='" + req.param("inputPassword") +"'";
	console.log("Query is:"+getUser);

	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				console.log("valid Login");
				ejs.renderFile('./views/successLogin.ejs', { data: results } , function(err, result) {
					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						res.end('An error occurred');
						console.log(err);
					}
				});
			}
			else {    
				console.log("Invalid Login");
				ejs.renderFile('./views/failLogin.ejs',function(err, result) {
					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						invalid = true;
						res.end('Invalid Credentials !! Press back to go back to Login!!');
						console.log(err);
						res.render('signin');
					}
				});
			}
		}  
	},getUser);
}

function getAllUsers(req,res)
{
	var getAllUsers = "select * from users";
	console.log("Query is:"+getAllUsers);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){

				var rows = results;
				var jsonString = JSON.stringify(results);
				var jsonParse = JSON.parse(jsonString);

				console.log("Results Type: "+(typeof results));
				console.log("Result Element Type:"+(typeof rows[0].emailid));
				console.log("Results Stringify Type:"+(typeof jsonString));
				console.log("Results Parse Type:"+(typeof jsString));

				console.log("Results: "+(results));
				console.log("Result Element:"+(rows[0].emailid));
				console.log("Results Stringify:"+(jsonString));
				console.log("Results Parse:"+(jsonParse));

				ejs.renderFile('./views/successLogin.ejs',{data:jsonParse},function(err, result) {
					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						res.end('An error occurred');
						console.log(err);
					}
				});
			}
			else {    

				console.log("No users found in database");
				ejs.renderFile('./views/failLogin.ejs',function(err, result) {
					// render on success
					if (!err) {
						res.end(result);
					}
					// render or error
					else {
						res.end('An error occurred');
						console.log(err);
					}
				});
			}
		}  
	},getAllUsers);
}

exports.signin=signin;
exports.afterSignIn=afterSignIn;
exports.getAllUsers=getAllUsers;
exports.signup=signup;
exports.displaySignup=displaySignup;
