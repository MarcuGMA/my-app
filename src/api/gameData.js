const gamesData = [
  {
    id: 50,
    name: "Grand Theft Auto V",
    steam: true,
    windows: true,
    price: 29.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 51,
    name: "Forza Horizon 4",
    steam: false,
    windows: true,
    price: 59.99,
    image: "https://img.zonared.com/images/noticias/portada/64000/64013-h.jpg",
    type: "TOP SELLERS",
  },
  {
    id: 52,
    name: "The Witcher 3: Wild Hunt",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 53,
    name: "The Elder Scrolls V: Skyrim",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 54,
    name: "Cyberpunk 2077",
    steam: false,
    windows: true,
    price: 45.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 55,
    name: "Red Dead Redemption 2",
    steam: false,
    windows: true,
    price: 59.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 56,
    name: "Hades",
    steam: true,
    windows: true,
    price: 4.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 57,
    name: "Dead by Daylight",
    steam: true,
    windows: true,
    price: 1.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 58,
    name: "Dead Cells",
    steam: true,
    windows: true,
    price: 4.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 59,
    name: "Dragon Ball FighterZ",
    steam: true,
    windows: true,
    price: 59.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/678950/capsule_616x353.jpg?t=1620938400",
    type: "TOP SELLERS",
  },
  {
    id: 60,
    name: "Assassin's Creed Odyssey",
    steam: false,
    windows: true,
    price: 59.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 61,
    name: "Stray",
    steam: false,
    windows: true,
    price: 8.99,
    image:
      "https://th.bing.com/th/id/OIP.lu5Q1h5SpW_XD5hvZvrx1wHaEK?pid=ImgDet&rs=1",
    type: "TOP DEALS",
  },
  {
    id: 62,
    name: "Naruto to Boruto: Shinobi Striker",
    steam: true,
    windows: true,
    price: 49.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/633230/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 63,
    name: "HitMan 3",
    steam: false,
    windows: true,
    price: 9.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1234560/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 64,
    name: "Call of Duty: Black Ops Cold War",
    steam: false,
    windows: true,
    price: 59.99,
    image:
      "https://th.bing.com/th/id/R.9c565e8ede3c30494ee98dc98925622b?rik=%2fxrXRII9Zd90yQ&pid=ImgRaw&r=0",
    type: "TOP DEALS",
  },
  {
    id: 65,
    name: "Borderlands 3",
    steam: true,
    windows: true,
    price: 59.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/397540/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 66,
    name: "Morels: The Hunt",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1120750/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 67,
    name: "The Forest",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 68,
    name: "Outriders",
    steam: false,
    windows: true,
    price: 59.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/680420/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 69,
    name: "The Binding of Isaac: Rebirth",
    steam: true,
    windows: true,
    price: 14.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/capsule_616x353.jpg?t=1620938400",
    type: "TOP DEALS",
  },
  {
    id: 70,
    name: "The Binding of Isaac: Afterbirth",
    steam: true,
    windows: true,
    price: 9.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/401920/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 71,
    name: "Portal 2",
    steam: true,
    windows: true,
    price: 9.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/620/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 72,
    name: "Rust",
    steam: true,
    windows: true,
    price: 2.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 73,
    name: "Kingdom Come: Deliverance",
    steam: true,
    windows: true,
    price: 7.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/379430/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 74,
    name: "The Elder Scrolls V: Skyrim",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 75,
    name: "Zombie Army 4: Dead War",
    steam: true,
    windows: true,
    price: 49.99,
    image:
      "https://th.bing.com/th/id/OIP.VK1FLPs5XPtOXCs-L-uzNgHaEK?pid=ImgDet&rs=1",
    type: "NEW RELEASES",
  },
  {
    id: 76,
    name: "Final Fantasy XIV Online",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/39210/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 77,
    name: "Outlast",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238320/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 78,
    name: "Outlast 2",
    steam: true,
    windows: true,
    price: 29.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/414700/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 79,
    name: "Outlast: Whistleblower",
    steam: true,
    windows: true,
    price: 8.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/273300/capsule_616x353.jpg?t=1620938400",
    type: "NEW RELEASES",
  },
  {
    id: 80,
    name: "Outlast: Bundle of Terror",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://th.bing.com/th/id/OIP.SjCaSz6-_2_9jAMO6KuTSAAAAA?pid=ImgDet&rs=1",
    type: "FREE TO PLAY",
  },
  {
    id: 81,
    name: "Counter-Strike: Global Offensive",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 82,
    name: "Dota 2",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 83,
    name: "Team Fortress 2",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/440/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 84,
    name: "Warframe",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 85,
    name: "Path of Exile",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 86,
    name: "Destiny 2",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 87,
    name: "Brawlhalla",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/291550/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 88,
    name: "Paladins",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/444090/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
  {
    id: 89,
    name: "Realm of the Mad God Exalt",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/200210/capsule_616x353.jpg?t=1620938400",
    type: "FREE TO PLAY",
  },
];

export default gamesData;
