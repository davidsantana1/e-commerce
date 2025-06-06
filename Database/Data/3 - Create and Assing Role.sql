-- Usa la base de datos Terranova
USE Terranova;

-- Crea Role
Create ROLE sistemas;

-- Asignar permisos sobre todas las tablas existentes
DECLARE @sql NVARCHAR(MAX) = '';

SELECT @sql += '
GRANT SELECT, INSERT, UPDATE, DELETE ON [' + s.name + '].[' + t.name + '] TO sistemas;'
FROM sys.tables t
JOIN sys.schemas s ON t.schema_id = s.schema_id;

EXEC sp_executesql @sql;

-- Asigna el rol al usuario
EXEC sp_addrolemember 'sistemas', 'terranova';