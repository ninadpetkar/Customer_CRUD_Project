USE [master]

--Step 1 : Create DB

IF EXISTS(SELECT 1 FROM master.sys.databases WHERE name='CustomerDataBase')
BEGIN
    DROP DATABASE CustomerDataBase
	CREATE DATABASE CustomerDataBase
	PRINT 'Fresh Database created'
END
ELSE
BEGIN
	CREATE DATABASE CustomerDataBase
	PRINT 'New Database created'
END



-- Step 2: Create Table

USE [CustomerDataBase]
CREATE TABLE dbo.CustomerDetails(
	CustomerId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	FirstName VARCHAR(50) NOT NULL,
	LastName VARCHAR(50) NOT NULL,
	Email VARCHAR(50) NOT NULL,
	PhoneNumber VARCHAR(20) NOT NULL,
	IsActive bit NOT NULL DEFAULT(1),
	)



-- Step 3: Create sample data
INSERT INTO dbo.CustomerDetails (FirstName, LastName, Email, PhoneNumber, IsActive) VALUES('f1','l1','a.b@c.com', 1234, 1)
INSERT INTO dbo.CustomerDetails (FirstName, LastName, Email, PhoneNumber, IsActive) VALUES('f2','l3','a.b@c.com', 4563, 1)
INSERT INTO dbo.CustomerDetails (FirstName, LastName, Email, PhoneNumber, IsActive) VALUES('f3','l3','a.b@c.com', 7896, 0)
INSERT INTO dbo.CustomerDetails (FirstName, LastName, Email, PhoneNumber, IsActive) VALUES('f4','l4','a.b@c.com', 7896, 1)

SELECT * FROM dbo.CustomerDetails