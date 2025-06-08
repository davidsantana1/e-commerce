USE [master]
GO

/* For security reasons the login is created disabled and with a random password. */
/****** Object:  Login [terranova]    Script Date: 5/6/2025 6:58:44 p. m. ******/
CREATE LOGIN [terranova] WITH PASSWORD=N'Mc+YqgXFpTGslAKOdykBiv8E9f6iL3lfoTQlTHyqMqo=', DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english], CHECK_EXPIRATION=ON, CHECK_POLICY=ON
GO

ALTER LOGIN [terranova] DISABLE
GO


