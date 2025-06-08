-- Create database Event
CREATE DATABASE Event;

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

-- Create stored procedure to insert logs
USE Event;
GO
CREATE PROCEDURE dbo.sp_InsertLog
	@SourceSystem NVARCHAR(50),
	@UserId INT = NULL,
	@Action NVARCHAR(100),
	@Description NVARCHAR(500)
AS
BEGIN
	INSERT INTO dbo.Logs (SourceSystem, UserId, Action, Description)
	VALUES (@SourceSystem, @UserId, @Action, @Description)
END;

-- Create logging at the server lever
CREATE LOGIN EventLogger WITH PASSWORD = 'event123456';

-- Create User at database lever with minimum privileges
USE Event;
CREATE USER EventLoggerUser FOR LOGIN EventLogger;

-- Give only execution permissions
GRANT EXECUTE ON dbo.sp_InsertLog TO EventLoggerUser;