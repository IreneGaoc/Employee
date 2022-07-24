DROP TABLE IF EXISTS Mydatabase.Employees;
CREATE TABLE Mydatabase.Employees (
  EmployeeId int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  FirstName varchar(45) NOT NULL,
  LastName varchar(45) NOT NULL,
  Salary int NOT NULL,
  PRIMARY KEY (EmployeeId)
);
INSERT INTO Mydatabase.Employees (FirstName, LastName, Salary) VALUES ('Lewis', 'Burson', 40700);
INSERT INTO Mydatabase.Employees (FirstName, LastName, Salary) VALUES ('Ian', 'Malcolm', 70000);
INSERT INTO Mydatabase.Employees (FirstName, LastName, Salary) VALUES ('Ellie', 'Sattler', 102000);
INSERT INTO Mydatabase.Employees (FirstName, LastName, Salary) VALUES ('Dennis', 'Nedry', 52000);
INSERT INTO Mydatabase.Employees (FirstName, LastName, Salary) VALUES ('John', 'Hammond', 89600);
INSERT INTO Mydatabase.Employees (FirstName, LastName, Salary) VALUES ('Ray', 'Arnold', 45000);
INSERT INTO Mydatabase.Employees (FirstName, LastName, Salary) VALUES ('Laura', 'Burnett', 80000);
SELECT * FROM Mydatabase.Employees;