const products = [
  // Offer
  { id: 1, name: "Wireless Mouse", price: 12.99, inStock: true, image: "../Image/img1.png", category: "offer" },
  { id: 2, name: "USB Hub", price: 9.99, inStock: true, image: "../Image/img2.png", category: "offer" },
  { id: 3, name: "Bluetooth Earbuds", price: 29.99, inStock: true, image: "../Image/img3.png", category: "offer" },
  { id: 4, name: "HDMI Cable", price: 6.99, inStock: true, image: "../Image/img4.png", category: "offer" },
  { id: 5, name: "Gaming Mousepad", price: 11.49, inStock: true, image: "../Image/img5.png", category: "offer" },
  { id: 6, name: "USB-C Charger", price: 14.89, inStock: true, image: "../Image/img6.png", category: "offer" },
  { id: 7, name: "Portable SSD 500GB", price: 49.99, inStock: true, image: "../Image/img7.png", category: "offer" },
  { id: 8, name: "Phone Stand", price: 5.99, inStock: true, image: "../Image/img8.png", category: "offer" },
  { id: 9, name: "Laptop Sleeve", price: 17.99, inStock: true, image: "../Image/img9.png", category: "offer" },
  { id: 10, name: "Stylus Pen", price: 13.49, inStock: true, image: "../Image/img10.png", category: "offer" },

  // Top Sold
  { id: 11, name: "Logitech Keyboard", price: 25.99, inStock: true, image: "../Image/img11.png", category: "topSold" },
  { id: 12, name: "Noise Cancelling Headphones", price: 59.99, inStock: true, image: "../Image/img12.png", category: "topSold" },
  { id: 13, name: "1080p Webcam", price: 34.99, inStock: true, image: "../Image/img13.png", category: "topSold" },
  { id: 14, name: "Gaming Chair", price: 149.99, inStock: true, image: "../Image/img14.png", category: "topSold" },
  { id: 15, name: "RGB Keyboard", price: 45.99, inStock: true, image: "../Image/img15.png", category: "topSold" },
  { id: 16, name: "Wireless Router", price: 39.99, inStock: true, image: "../Image/img16.png", category: "topSold" },
  { id: 17, name: "Laptop Cooling Pad", price: 19.99, inStock: true, image: "../Image/img17.png", category: "topSold" },
  { id: 18, name: "Smartwatch", price: 79.99, inStock: true, image: "../Image/img18.png", category: "topSold" },
  { id: 19, name: "External HDD 1TB", price: 54.99, inStock: true, image: "../Image/img19.png", category: "topSold" },
  { id: 20, name: "Wireless Speaker", price: 29.99, inStock: true, image: "../Image/img20.png", category: "topSold" },

  // Laptops
  { id: 21, name: "Dell Inspiron 15", price: 499.99, inStock: true, image: "../Image/img21.png", category: "laptops" },
  { id: 22, name: "HP Pavilion 14", price: 529.99, inStock: true, image: "../Image/img22.png", category: "laptops" },
  { id: 23, name: "MacBook Air M1", price: 899.99, inStock: true, image: "../Image/img23.png", category: "laptops" },
  { id: 24, name: "ASUS ZenBook", price: 749.99, inStock: true, image: "../Image/img24.png", category: "laptops" },
  { id: 25, name: "Lenovo IdeaPad", price: 599.99, inStock: true, image: "../Image/img25.png", category: "laptops" },
  { id: 26, name: "Acer Aspire 5", price: 459.99, inStock: true, image: "../Image/img26.png", category: "laptops" },
  { id: 27, name: "MSI Modern 14", price: 689.99, inStock: true, image: "../Image/img27.png", category: "laptops" },
  { id: 28, name: "Razer Blade 15", price: 1499.99, inStock: true, image: "../Image/img28.png", category: "laptops" },
  { id: 29, name: "Samsung Galaxy Book", price: 649.99, inStock: true, image: "../Image/img29.png", category: "laptops" },
  { id: 30, name: "LG Gram 16", price: 1299.99, inStock: true, image: "../Image/img30.png", category: "laptops" },

  // Computers
  { id: 31, name: "Intel Core i5 Desktop", price: 549.99, inStock: true, image: "../Image/img31.png", category: "computers" },
  { id: 32, name: "Gaming PC Ryzen 5", price: 799.99, inStock: true, image: "../Image/img32.png", category: "computers" },
  { id: 33, name: "Mini PC Celeron", price: 299.99, inStock: true, image: "../Image/img33.png", category: "computers" },
  { id: 34, name: "HP EliteDesk", price: 649.99, inStock: true, image: "../Image/img34.png", category: "computers" },
  { id: 35, name: "Acer Veriton", price: 499.99, inStock: true, image: "../Image/img35.png", category: "computers" },
  { id: 36, name: "Lenovo ThinkCentre", price: 589.99, inStock: true, image: "../Image/img36.png", category: "computers" },
  { id: 37, name: "iMac 24-inch", price: 1299.99, inStock: true, image: "../Image/img37.png", category: "computers" },
  { id: 38, name: "ASUS ExpertCenter", price: 699.99, inStock: true, image: "../Image/img38.png", category: "computers" },
  { id: 39, name: "Dell OptiPlex", price: 499.99, inStock: true, image: "../Image/img39.png", category: "computers" },
  { id: 40, name: "MSI Cubi N", price: 429.99, inStock: true, image: "../Image/img40.png", category: "computers" },

  // Accessories
  { id: 41, name: "Mechanical Keyboard", price: 39.99, inStock: true, image: "../Image/img41.png", category: "accessories" },
  { id: 42, name: "USB Flash Drive 64GB", price: 8.99, inStock: true, image: "../Image/img42.png", category: "accessories" },
  { id: 43, name: "Laptop Stand", price: 24.99, inStock: true, image: "../Image/img43.png", category: "accessories" },
  { id: 44, name: "Webcam Cover", price: 3.99, inStock: true, image: "../Image/img44.png", category: "accessories" },
  { id: 45, name: "Mouse Bungee", price: 14.99, inStock: true, image: "../Image/img45.png", category: "accessories" },
  { id: 46, name: "Laptop Lock", price: 19.99, inStock: true, image: "../Image/img46.png", category: "accessories" },
  { id: 47, name: "Audio Jack Splitter", price: 6.49, inStock: true, image: "../Image/img47.png", category: "accessories" },
  { id: 48, name: "Cable Organizer", price: 7.99, inStock: true, image: "../Image/img48.png", category: "accessories" },
  { id: 49, name: "LED Desk Lamp", price: 21.99, inStock: true, image: "../Image/img49.png", category: "accessories" },
  { id: 50, name: "Screen Cleaning Kit", price: 10.99, inStock: true, image: "../Image/img50.png", category: "accessories" }
];
