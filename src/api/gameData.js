const gamesData = [
  {
    id: 50,
    name: "Grand Theft Auto V",
    steam: true,
    windows: true,
    price: 29.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1620938400",
    imageBg:
      "https://wallup.net/wp-content/uploads/2016/05/27/214211-Grand_Theft_Auto_V.jpg",
    type: "TOP SELLERS",
    swiper:true,
    gameStore : "Steam",
  },
  {
    id: 51,
    name: "Forza Horizon 4",
    steam: false,
    windows: true,
    price: 59.99,
    image: "https://img.zonared.com/images/noticias/portada/64000/64013-h.jpg",
    imageBg:
      "https://th.bing.com/th/id/R.3bba79720919f082a1c1efef9e47034a?rik=ogQ%2bXu2IjI9xsQ&pid=ImgRaw&r=0",
    type: "TOP SELLERS",
    swiper:true,
    gameStore : "Steam",
  },
  {
    id: 52,
    name: "The Witcher 3: Wild Hunt",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/capsule_616x353.jpg?t=1620938400",
    imageBg:
      "https://th.bing.com/th/id/R.67147c05b89df251a0d517c04b5e9910?rik=eRCfQM7bRZpdeg&riu=http%3a%2f%2fallhdwallpapers.com%2fwp-content%2fuploads%2f2015%2f05%2fThe-Witcher-3-.-Wild-Hunt-10.jpg&ehk=6RrajXP%2bIwSInNNYHE%2fseV1Gwnoq7nzndCc4hAGjgUA%3d&risl=&pid=ImgRaw&r=0",
    type: "TOP SELLERS",
    swiper:true,
    gameStore : "Steam",
  },
  {
    id: 53,
    name: "The Elder Scrolls V: Skyrim",
    steam: true,
    windows: true,
    price: 19.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/capsule_616x353.jpg?t=1620938400",
    imageBg:
      "https://i1.wp.com/www.otakutale.com/wp-content/uploads/2014/02/The-Elder-Scrolls-V-Skyrim-Review-Screen-9.jpg?ssl=1",
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
    imageBg:
      "https://th.bing.com/th/id/R.fe2c6d091e3ba6527303f972eac94286?rik=yX6BB7B5ui4VCw&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.a93e6265242bf1fefe27f67359c97cb2?rik=pII%2bmznV3DwHMg&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.1239646645f1e59c6730e32e24c231ae?rik=IUqGIxjDtD2A8w&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/OIP.cbYo1pwV89jkYehHjQcCqAHaEK?pid=ImgDet&rs=1",
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
    imageBg:
      "https://th.bing.com/th/id/R.1dbe16694e79a4bf2b67e06bd8109571?rik=s7pCqhzeL%2fnPpg&pid=ImgRaw&r=0",
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
    imageBg:
      "https://www.teahub.io/photos/full/34-348224_dragon-ball-fighterz-vegito-ssgss-on-ps-official.jpg",
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
    imageBg:
      "https://th.bing.com/th/id/R.100ccafc354969932a1f2500857c456e?rik=jtYJeiPZNuR%2bjA&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.05062af61f10e03c72bc5f1d3e720761?rik=97OjOGzP4hdS6Q&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.3d7a1a0c342ce798df2903e1ea7f4c83?rik=s8SH0%2f1BQ7p73w&pid=ImgRaw&r=0",
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
    imageBg:
      "https://images.wallpapersden.com/image/download/hitman-3-4k_bGZnaGWUmZqaraWkpJRobWllrWdma2U.jpg",
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
    imageBg:
      "https://th.bing.com/th/id/OIP.nFZejt48MElO6Y3JiSViKwHaEK?pid=ImgDet&rs=1",
    type: "TOP DEALS",
    swiper:true,
    gameStore : "G2A",
  },
  {
    id: 65,
    name: "Borderlands 3",
    steam: true,
    windows: true,
    price: 59.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/397540/capsule_616x353.jpg?t=1620938400",
    imageBg: "https://i.redd.it/0rbwoi3mgoh31.jpg",
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
    imageBg:
      "https://assets.rockpapershotgun.com/images/2019/10/morels-the-hunt.jpg",
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
    imageBg:
      "https://staticdelivery.nexusmods.com/images/1704/4447020-1480391907.png",
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
    imageBg: "https://images.hdqwalls.com/wallpapers/outriders-2020-4k-xr.jpg",
    type: "TOP DEALS",
    swiper:true,
    gameStore : "Epic Games",
  },
  {
    id: 69,
    name: "The Binding of Isaac: Rebirth",
    steam: true,
    windows: true,
    price: 14.99,
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/capsule_616x353.jpg?t=1620938400",
    imageBg: "https://wallpapercave.com/wp/wp5699536.jpg",
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
    imageBg:
      "https://th.bing.com/th/id/R.3fc702666444384381382a746dde8fe0?rik=UCSXTg42Bq6l6g&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2f7%2f6%2ff%2f154961.jpg&ehk=8N%2fcIPASS%2f3HDwVsMbXvuIQcW34FIznUM2lDh8XT8u4%3d&risl=&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.99fdab2d1c566e86710e7216f19a5dc3?rik=Eb4SrkQvHtbazg&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2014%2f09%2f22%2fportal-2-game-high-definition_044332938_243.jpg&ehk=kOxe6huiSp5TJZSR3fUXwbJksP6XHy3sR%2bmi3divHMw%3d&risl=&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.2ffd61c1c6033bbd9c73cbd7a65c1c4c?rik=ykYwdPa%2fjK%2btqg&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2019%2f09%2fRust-Game-Desktop-Wallpaper-HD.jpg&ehk=vodJFMBpLZmRIH2vRYLKIYmcn6fP29QTE5yez%2fWr6bw%3d&risl=&pid=ImgRaw&r=0",
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
    imageBg: "https://images8.alphacoders.com/479/479278.jpg",
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
    imageBg:
      "https://th.bing.com/th/id/OIP.zE-I7ne-r1X17emVRV_9gQHaEK?pid=ImgDet&rs=1",
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
    imageBg:
      "https://images.playerone.tv/source/jeux/zombie-army-4-dead-war/zombie-army-4-dead-war-4.jpeg",
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
    imageBg:
      "https://th.bing.com/th/id/R.543a7113f5b2ac313ce686577b1e1f42?rik=BzdWpix0Ze%2bewQ&pid=ImgRaw&r=0",
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
    imageBg: "https://wallpapercave.com/wp/wp1872506.jpg",
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
    imageBg: "https://wallpaperaccess.com/full/2405161.png",
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
    imageBg: "https://wallpapercave.com/wp/wp11357391.jpg",
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
    imageBg:
      "https://nintendoeverything.com/wp-content/uploads/sites/1/nggallery/outlast-bundle-of-terror/outlast-4.jpg",
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
    imageBg:
      "https://images.hdqwalls.com/wallpapers/counter-strike-global-offensive-4k-new-af.jpg",
    type: "FREE TO PLAY",
  },
  {
    id: 82,
    name: "Overwatch 2",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://th.bing.com/th/id/OIP.2PeYVb4ZEd7Q-Xd5PW4hqAHaEZ?pid=ImgDet&rs=1",
    imageBg:
      "https://th.bing.com/th/id/R.84febdc7724a4b64114241563a8e1d6f?rik=rhGXZNyZh%2fHOHw&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2foverwatch-4k.jpg&ehk=EsPypCrx6Ty%2fdD4al%2fSeVBFlxZXaldILYZFO6oY59%2bQ%3d&risl=&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.8f5c93af1cb4690ff0ed999c157995c0?rik=V0GYzcQLyg9jqw&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.2f04e745a4080613e4d80afc24afa122?rik=CYn4CSnhHhmNDQ&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.7ea3a530ede1885d09d45e33a098f50f?rik=IFrlAUjjtxSuJQ&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.a1768b24a1ffe51422a55faa4c1b4330?rik=1qtBWZbFbu4e9w&pid=ImgRaw&r=0",
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
    imageBg:
      "https://th.bing.com/th/id/R.83d7654bc2aa7977c85d8585876cd6c8?rik=U%2bQZJ5QWgN2TuQ&pid=ImgRaw&r=0",
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
    imageBg: "https://images2.alphacoders.com/103/1039801.jpg",
    type: "FREE TO PLAY",
  },
  {
    id: 89,
    name: "God of War",
    steam: true,
    windows: true,
    price: "FREE",
    image:
      "https://attackofthefanboy.com/wp-content/uploads/2018/07/god-of-war-best-of-2018.jpg",
    imageBg:
      "https://th.bing.com/th/id/R.c745d23a81abe2feba81980616dc4a30?rik=SPErRV3FEnRjmg&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2f2018-god-of-war-4-37.jpg&ehk=NFcgxTWaem92kluVN1uJaHO6D0NkqfBVm%2bzUwCNAwp4%3d&risl=&pid=ImgRaw&r=0",
    type: "FREE TO PLAY",
  },
];

export default gamesData;
