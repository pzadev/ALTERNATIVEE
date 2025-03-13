const UFData = [
  {
    name: "MacBook",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145618000",
    country: "USA",
    category: ["Laptop"],
    alternative: ["Framework Laptop 🇨🇦"],
  },
  {
    name: "iPhone",
    image: "https://m.media-amazon.com/images/I/618Bb+QzCmL.jpg",
    country: "USA",
    category: ["Smartphone"],
    alternative: ["Fairphone 🇳🇱", "Nothing Phone 🇬🇧"],
  },
  {
    name: "Windows",
    image:
      "https://www.digitaltrends.com/wp-content/uploads/2018/06/cropped-windows-7-wallpaper.jpg?p=1",
    country: "USA",
    category: ["Operating System"],
    alternative: ["Linux Ubuntu 🇬🇧", "Zorin OS 🇮🇪"],
  },
  {
    name: "macOS",
    image: "https://camranger.com/wp-content/uploads/2018/08/macOS.jpg",
    country: "USA",
    category: ["Operating System"],
    alternative: ["Linux Mint 🇮🇪", "EndeavourOS 🇪🇺"],
  },
  {
    name: "Microsoft Office",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/1200px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png",
    country: "USA",
    category: ["Productivity"],
    alternative: ["LibreOffice 🇩🇪", "ONLYOFFICE 🇱🇻"],
  },
  {
    name: "Google Docs",
    image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Google_Docs.png",
    country: "USA",
    category: ["Productivity"],
    alternative: ["ONLYOFFICE 🇱🇻", "CryptPad 🇫🇷", "Collabora Online 🇬🇧"],
  },
  {
    name: "Google Chrome",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png",
    country: "USA",
    category: ["Web Browser"],
    alternative: ["Vivaldi 🇳🇴"],
  },
  {
    name: "Google Search",
    image:
      "https://searchengineland.com/wp-content/seloads/2024/09/Google-Search-on-a-mobile-device.png.webp",
    country: "USA",
    category: ["Search Engine"],
    alternative: ["Ecosia 🇩🇪", "Qwant 🇫🇷"],
  },
  {
    name: "Google Drive",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png",
    country: "USA",
    category: ["Cloud Storage"],
    alternative: ["pCloud 🇨🇭", "Nextcloud 🇩🇪", "Tresorit 🇨🇭"],
  },
  {
    name: "Microsoft OneDrive",
    image:
      "https://i.pcmag.com/imagery/reviews/065LBaNWT3jlc8HjQsR6vXE-93..v1734031075.png",
    country: "USA",
    category: ["Cloud Storage"],
    alternative: ["Sync.com 🇨🇦", "Internxt 🇪🇸"],
  },
  {
    name: "YouTube",
    image:
      "https://yt3.googleusercontent.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s900-c-k-c0x00ffffff-no-rj",
    country: "USA",
    category: ["Video Streaming"],
    alternative: ["PeerTube 🇫🇷", "Dailymotion 🇫🇷"],
  },
  {
    name: "Zoom",
    image:
      "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBfLf9EetALaWlLDJdgfp14F2gxWLHu8c1AB4HfXCyepM4oTvqzDrKUbZXNUrIpbhPczIgIFFqcK0eqhgKQLtsuc-&format=source",
    country: "USA",
    category: ["Video Conferencing"],
    alternative: ["Jitsi Meet 🇪🇺", "Whereby 🇳🇴", "BigBlueButton 🇨🇦"],
  },
  {
    name: "WhatsApp",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    country: "USA",
    category: ["Messaging"],
    alternative: ["Element 🇬🇧"],
  },
  {
    name: "Gmail",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
    country: "USA",
    category: ["Email"],
    alternative: ["ProtonMail 🇨🇭", "Tutanota 🇩🇪", "Mailfence 🇧🇪"],
  },

  {
    name: "Adobe Photoshop",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
    country: "USA",
    category: ["Editing"],
    alternative: ["Affinity Photo 🇬🇧", "GIMP 🇩🇪"],
  },
  {
    name: "Adobe Premiere Pro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYHHwdRgN5BgsSjZKGQ_Ij5zpseo2DXl7OQ&s",
    country: "USA",
    category: ["Editing"],
    alternative: ["DaVinci Resolve 🇦🇺", "Shotcut 🇪🇺"],
  },
  {
    name: "Apple Watch",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Apple_Watch_Logo.svg",
    country: "USA",
    category: ["Smartwatch"],
    alternative: ["Withings🇫🇷", "Suunto🇫🇮", "Polar🇫🇮"],
  },
  {
    name: "Fitbit",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Fitbit_logo.svg",
    country: "USA",
    category: ["Smartwatch"],
    alternative: ["Suunto🇫🇮", "Polar🇫🇮"],
  },
  {
    name: "Tesla",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Tesla_Model_3_rear_view.jpg",
    country: "USA",
    category: ["Electric Car"],
    alternative: ["BMW i3 🇩🇪", "Audi e-tron 🇩🇪"],
  },
  {
    name: "Spotify",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_Logo_2015.svg",
    country: "Sweden",
    category: ["Music Streaming"],
    alternative: ["Deezer 🇫🇷"],
  },
  {
    name: "Netflix",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_logo.svg",
    country: "USA",
    category: ["Video Streaming"],
    alternative: ["N/A"],
  },
  {
    name: "Instagram",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    country: "USA",
    category: ["Social Media"],
    alternative: ["Vero 🇮🇹", "Mastodon 🇩🇪"],
  },
  {
    name: "Slack",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Slack_icon_2019.svg",
    country: "USA",
    category: ["Productivity"],
    alternative: ["Rocket.Chat 🇧🇷"],
  },
  {
    name: "X",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg",
    country: "USA",
    category: ["Social Media"],
    alternative: ["Mastodon 🇩🇪", "Diaspora 🇩🇪"],
  },
  {
    name: "Dropbox",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Dropbox_logo_2015.svg",
    country: "USA",
    category: ["Cloud Storage"],
    alternative: ["pCloud 🇨🇭", "Sync.com 🇨🇦"],
  },
  {
    name: "Discord",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Discord_logo_2015.svg",
    country: "USA",
    category: ["Voice & Text Chat"],
    alternative: ["Mumble 🇩🇪", "TeamSpeak 🇩🇪"],
  },
  {
    name: "Twitch",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Twitch_Logo_2011.svg",
    country: "USA",
    category: ["Streaming Platform"],
    alternative: ["Trovo 🇨🇦"],
  },
];

export default UFData;
