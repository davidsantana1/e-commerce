USE [Terranova]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 5/6/2025 10:22:45 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](225) NOT NULL,
	[SKU] [varchar](100) NULL,
	[Price] [decimal](18, 2) NOT NULL,
	[Currency] [varchar](10) NOT NULL,
	[StockQuantity] [int] NOT NULL,
	[Weight] [decimal](18, 2) NULL,
	[Dimensions] [varchar](100) NULL,
	[IsActive] [bit] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdateAt] [datetime] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Product] ADD  CONSTRAINT [DF_Product_Currency]  DEFAULT ('USD') FOR [Currency]
GO
ALTER TABLE [dbo].[Product] ADD  CONSTRAINT [DF_Product_StockQuantity]  DEFAULT ((1)) FOR [StockQuantity]
GO
ALTER TABLE [dbo].[Product] ADD  CONSTRAINT [DF_Product_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
