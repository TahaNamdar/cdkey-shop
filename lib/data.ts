import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "taha",
      email: "tahanamdar30@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],

  products: [
    {
      name: "Call of Duty: Modern Warfare",
      slug: "call-of-duty-modern-warfare",
      image:
        "https://www.gameshub.com/wp-content/uploads/sites/5/2021/12/call-of-duty.jpeg",
      banner: "https://example.com/cod-modern-warfare_banner.jpg",
      price: 59.99,
      brand: "Activision",
      description:
        "Experience the ultimate online playground with classic multiplayer, or squad-up and play cooperatively in a collection of elite operations accessible to all skill levels.",
      category: "First-Person Shooter",
      rating: "4.8",
      numReviews: "250",
      countInStock: "100",
      color: ["Red", "Blue"],
      size: ["PS4", "Xbox One", "PC"],
    },
    {
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "legend-of-zelda-breath-of-the-wild",
      image:
        "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
      banner: "https://example.com/zelda-botw_banner.jpg",
      price: 49.99,
      brand: "Nintendo",
      description:
        "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.",
      category: "Action-Adventure",
      rating: "4.9",
      numReviews: "300",
      countInStock: "80",
      color: ["Green"],
      size: ["Nintendo Switch"],
    },
    {
      name: "FIFA 22",
      slug: "fifa-22",
      image:
        "https://www.fifa-infinity.com/wp-content/uploads/2021/10/FIFA-22-1.jpg",
      banner: "https://example.com/fifa22_banner.jpg",
      price: 69.99,
      brand: "EA Sports",
      description:
        "Powered by Football, FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.",
      category: "Sports",
      rating: "4.7",
      numReviews: "200",
      countInStock: "120",
      color: ["White"],
      size: ["PS5", "Xbox Series X", "PC"],
    },
    // Add more entries here as needed
    {
      name: "Assassin's Creed Valhalla",
      slug: "assassins-creed-valhalla",
      image:
        "https://www.cnet.com/a/img/resize/98a043645db12442cc11c318d051d715910cb916/hub/2020/11/09/380a69c4-d862-4477-9615-8a491faa4baf/1588874727-assassin39s-creed-valhalla-breaks-into-xbox-series-x-first-trailer.jpg?auto=webp&fit=crop&height=675&width=1200",
      banner: "https://example.com/assassins-creed-valhalla_banner.jpg",
      price: 49.99,
      brand: "Ubisoft",
      description:
        "Become Eivor, a legendary Viking warrior raised on tales of battle and glory. Explore England's Dark Ages as you raid your enemies, grow your settlement, and build your political power.",
      category: "Action-Adventure",
      rating: "4.6",
      numReviews: "180",
      countInStock: "90",
      color: ["Black", "Silver"],
      size: ["PS4", "PS5", "Xbox One", "Xbox Series X", "PC"],
    },
    {
      name: " ",
      slug: "cyberpunk-2077",
      image:
        "https://assetsio.gnwcdn.com/Cyberpunk-2077_DrkcULI.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      banner: "https://example.com/cyberpunk-2077_banner.jpg",
      price: 59.99,
      brand: "CD Projekt",
      description:
        "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
      category: "Role-Playing",
      rating: "4.2",
      numReviews: "350",
      countInStock: "70",
      color: ["Black", "Blue", "Yellow"],
      size: ["PS4", "PS5", "Xbox One", "Xbox Series X", "PC"],
    },
  ],
};
