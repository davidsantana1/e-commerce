-- Create table Logs
USE Event;
CREATE TABLE dbo.Logs(
	Id INT IDENTITY PRIMARY KEY,
	SourceSystem NVARCHAR(50),
	UserId INT NULL,
	Action NVARCHAR(100),
	Description NVARCHAR(500),
	CreateAt DATETIME DEFAULT GETDATE()
);