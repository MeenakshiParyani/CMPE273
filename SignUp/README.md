

# SignUp



## Usage



## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.

## Users Table Script

CREATE TABLE `users`.`users` (
  `username` VARCHAR(30) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `dob` DATE NOT NULL,
  `gender` ENUM('Male', 'Female') NOT NULL,
  PRIMARY KEY (`username`));
  
  INSERT INTO `users`.`users` (`username`, `password`, `password`, `firstname`, `lastname`, `dob`) VALUES ('meenakshi.paryani@gmail.com', 'pass', 'Meenakshi', 'Paryani', '1990-07-24');

