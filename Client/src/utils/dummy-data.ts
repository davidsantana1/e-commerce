import { Product } from "@/interfaces/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 550,
    images: [
      "https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1695822877321-15ef5412b82e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1695823018812-c684c980ede6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1695822919033-f87120df28de?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1695822958645-b2b058159215?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "phones",
    isWishlisted: true,
    description:
      "The iPhone 15 Pro Max features a powerful A17 chip, pro-level camera system, and a stunning Super Retina XDR display, all wrapped in a sleek titanium design.",
  },
  {
    id: 2,
    name: "Samsung Galaxy Note 20 Ultra",
    brand: "Samsung",
    price: 500,
    images: [
      "https://images.unsplash.com/photo-1597762470488-3877b1f538c6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612453949129-628f77f1d93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612453948435-fb3f2034ee0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "phones",
    isWishlisted: false,
    description:
      "A productivity powerhouse with a vibrant 6.9” AMOLED display, S Pen support, and powerful performance for work and play.",
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: 480,
    images: [
      "https://images.unsplash.com/photo-1737280855191-406feba6110a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "phones",
    isWishlisted: false,
    description:
      "The iPhone 16 Pro delivers lightning-fast speed, enhanced AI features, and an advanced camera system in a refined, durable design.",
  },
  {
    id: 4,
    name: "Nike Air Max 90",
    brand: "Nike",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1620138546344-7b2c38516edf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "clothing",
    isWishlisted: true,
    description:
      "Classic design meets modern comfort in the Nike Air Max 90, featuring a visible Air unit and timeless streetwear style.",
  },
  {
    id: 5,
    name: "Audio-Technica ATH-M50x",
    brand: "Audio-Technica",
    price: 60,
    images: [
      "https://images.unsplash.com/photo-1713039973246-abeb431c6c42?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "music-gear",
    isWishlisted: false,
    description:
      "Renowned for their exceptional clarity and deep bass, the ATH-M50x headphones are perfect for studio monitoring and critical listening.",
  },
  {
    id: 6,
    name: "Gibson Les Paul",
    brand: "Gibson",
    price: 45,
    images: [
      "https://images.unsplash.com/photo-1616066959540-0dfbb4d7e00b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616066959475-3ece465f7025?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616066959736-5983a58b2071?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616066959781-b7edf385b829?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "music-gear",
    isWishlisted: true,
    description:
      "Iconic tone and vintage style — the Gibson Les Paul is a rock legend, favored by guitarists for its warm sustain and premium build.",
  },
  {
    id: 7,
    name: "Adidas T-Shirt",
    brand: "Adidas",
    price: 20,
    images: [
      "https://images.unsplash.com/photo-1511746315387-c4a76990fdce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511746279269-b3d5f30e6a0f?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "clothing",
    isWishlisted: true,
    description:
      "Comfortable and stylish, this Adidas T-shirt is made from soft cotton and features the iconic logo for a sporty casual look.",
  },
  {
    id: 8,
    name: "Invicta Pro Diver",
    brand: "Invicta",
    price: 60,
    images: [
      "https://cdn-lkgaj.nitrocdn.com/SPjsnjeygfuaEeQEiVXLRCQEpxWiRrbw/assets/images/optimized/rev-2e57acd/theslenderwrist.com/wp-content/uploads/Are-Invicta-Watches-Good-1920x1080.jpg",
      "https://watchesineurope.com/wp-content/uploads/2023/11/IMG_2839-900x620.jpg",
    ],
    category: "clothing",
    isWishlisted: true,
    description:
      "The Invicta Pro Diver blends luxury design with everyday functionality, offering water resistance and a bold stainless steel finish.",
  },
  {
    id: 9,
    name: "Fender Telecaster",
    brand: "Fender",
    price: 600,
    images: [
      "https://images.unsplash.com/photo-1583679670276-90aa14338851?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583679670198-85272e600ed2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583679670259-f6e7f224eb47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "music-gear",
    isWishlisted: true,
    description:
      "The Fender Telecaster delivers bluesy tone and powerful playability, perfect for serious musicians.",
  },
  {
    id: 10,
    name: "Boss Katana 50 MK1",
    brand: "Boss",
    price: 150,
    images: [
      "https://rvb-img.reverb.com/image/upload/s--43_YZHm6--/f_auto,t_large/v1572033747/xvxhyn6mox6csfvp1hkq.jpg",
    ],
    category: "music-gear",
    isWishlisted: false,
    description:
      "A compact yet powerful modeling amp, the Boss Katana 50 MK1 features five amp voicings, built-in effects, and incredible tone shaping.",
  },
  {
    id: 11,
    name: "Ernie Ball John Mayer Silver Slinky Signature",
    brand: "Ernie Ball",
    price: 60,
    images: [
      "https://www.stringsdirect.co.uk/cdn/shop/files/P03819-Angle.png?v=1728294419",
    ],
    category: "music-gear",
    isWishlisted: false,
    description:
      "Designed with John Mayer, these Silver Slinky guitar strings deliver a warm tone and smooth feel for expressive, soulful playing.",
  },
];
