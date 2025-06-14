USE [Terranova]
GO
/****** Object:  Table [dbo].[InvoiceItem]    Script Date: 5/6/2025 10:22:45 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoiceItem](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[InvoiceId] [int] NOT NULL,
	[ProductId] [int] NULL,
	[Quantity] [nchar](10) NULL,
	[UnitPrice] [decimal](18, 2) NULL,
	[TotalPrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_InvoiceItem] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvoiceItem]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceItem_Invoice] FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[Invoice] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[InvoiceItem] CHECK CONSTRAINT [FK_InvoiceItem_Invoice]
GO
ALTER TABLE [dbo].[InvoiceItem]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceItem_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[InvoiceItem] CHECK CONSTRAINT [FK_InvoiceItem_Product]
GO
