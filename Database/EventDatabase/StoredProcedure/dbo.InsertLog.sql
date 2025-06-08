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