USE [Terranova]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 5/6/2025 10:22:45 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[ShippingAddressId] [int] NULL,
	[Currency] [varchar](10) NOT NULL,
	[TotalAmount] [decimal](18, 2) NOT NULL,
	[TaxAmount] [decimal](18, 2) NOT NULL,
	[DiscountAmount] [decimal](18, 2) NOT NULL,
	[ShippingAmount] [decimal](18, 2) NOT NULL,
	[OrderStatus] [varchar](50) NOT NULL,
	[PaymentMethod] [varchar](50) NOT NULL,
	[OrderDate] [datetime] NOT NULL,
	[DueDate] [datetime] NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Order] ADD  CONSTRAINT [DF_Order_Currency]  DEFAULT ('USD') FOR [Currency]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_ShippingAddress] FOREIGN KEY([ShippingAddressId])
REFERENCES [dbo].[ShippingAddress] ([Id])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_ShippingAddress]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_User]
GO
