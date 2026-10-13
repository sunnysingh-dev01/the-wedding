/* All wedding page copy and image paths.
   Included by index.html as: <script src="./wedding-data.js"></script>
   Usage in the page: wedding.couple.brideName, wedding.hero.tagline, wedding.gallery.images, …
   Keep this object in sync with wedding-data.json */
const wedding = {
  "meta": {
    "title": "Anita & Sunny — A Royal Punjabi Wedding"
  },
  "couple": {
    "brideName": "Anita",
    "groomName": "Sunny",
    "brideNameCaps": "ANITA",
    "groomNameCaps": "SUNNY",
    "monogram": "S & A",
    "loaderNames": "Sunny & Anita",
    "together": "Sunny & Anita",
    "togetherHeart": "Sunny ❤ Anita",
    "heart": "❤",
    "brideImage": "./assets/bride.png",
    "groomImage": "./assets/groom.png",
    "brideAlt": "Anita, the bride",
    "groomAlt": "Sunny, the groom"
  },
  "nav": {
    "links": [
      { "href": "#story", "label": "Story" },
      { "href": "#events", "label": "Events" },
      { "href": "#gallery", "label": "Gallery" },
      { "href": "#rsvp", "label": "RSVP" }
    ]
  },
  "music": {
    "ariaOn": "Turn music on",
    "ariaOff": "Turn music off",
    "title": "Music On/Off",
    "titleOn": "Music On",
    "titleOff": "Music Off"
  },
  "hero": {
    "palaceImage": "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    "tagline": "Two hearts. One destiny. Together with our families, we invite you to celebrate our wedding.",
    "weekday": "Saturday",
    "date": "November 27, 2026",
    "scrollCue": "Begin Our Story"
  },
  "story": {
    "eyebrow": "Chapter One",
    "title": "Our Love Story",
    "subtitle": "in six small moments",
    "prevAria": "Previous moment",
    "nextAria": "Next moment",
    "moments": [
      {
        "num": "01",
        "image": "./assets/wp-chatting.png",
        "alt": "WhatsApp chatting",
        "bubble": "followed back!",
        "title": "The First Follow",
        "text": "A double-tap on a sunset photo. Neither of us thought a follow request would become forever."
      },
      {
        "num": "02",
        "image": "./assets/punjabi-dialgoue-weeding.jpg",
        "alt": "Punjabi Dialogue",
        "title": "The First Hello",
        "text": "A mutual friend's birthday. Guru's nervous Punjabi greeting made Simran laugh before he'd even finished his sentence."
      },
      {
        "num": "03",
        "image": "./assets/insta-chatting.png",
        "alt": "Instagram Chatting",
        "heart": "♥",
        "title": "Late Night Conversations",
        "text": "What started as \"goodnight\" texts turned into calls that lasted till 3am, about everything and nothing."
      },
      {
        "num": "04",
        "image": "./assets/coffee-date.png",
        "alt": "Coffee Date",
        "title": "The First Coffee Date",
        "text": "A tiny Amritsar café, two cups gone cold, and a conversation neither of them wanted to end."
      },
      {
        "num": "05",
        "image": "./assets/punjbai-weeding-chapters.jpg",
        "alt": "Punjabi wedding chapters",
        "title": "Falling In Love",
        "text": "Somewhere between road trips, family dinners, and inside jokes — they stopped noticing the falling, and just landed."
      },
      {
        "num": "06",
        "image": "./assets/the-purposal.png",
        "alt": "The proposal",
        "title": "The Proposal",
        "text": "Under a sky full of stars, Guru asked the only question left to ask. Simran said yes before he finished it."
      }
    ]
  },
  "journey": {
    "eyebrow": "Chapter Two",
    "title": "The Journey Here",
    "subtitle": "from strangers to soulmates",
    "familyImage": "./assets/family-meetings.png",
    "familyAlt": "Family meeting",
    "quote": "\"When two families meet with open hearts, a wedding becomes a homecoming.\"",
    "milestones": [
      { "year": "2026", "title": "July - First Meeting" },
      { "year": "2026", "title": "August - Engaged" },
      { "year": "2026", "title": "October - Friends" },
      { "year": "2026", "title": "November - Soulmates" }
    ]
  },
  "path": {
    "eyebrow": "Event One",
    "title": "Sukhmani Sahib Path",
    "background": "https://images.pexels.com/photos/28496968/pexels-photo-28496968.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "details": [
      { "label": "Date", "value": "26 November 2026" },
      { "label": "Time", "value": "9:00 AM" },
      { "label": "Venue", "value": "At Our Residence" }
    ]
  },
  "jaggo": {
    "eyebrow": "Event Two",
    "title": "Jaggo Night",
    "background": "https://images.pexels.com/photos/757919/pexels-photo-757919.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "details": [
      { "label": "Date", "value": "26 February 2026" },
      { "label": "Time", "value": "7:00 PM" },
      { "label": "Venue", "value": "At Our Residence" }
    ]
  },
  "anandKaraj": {
    "eyebrow": "Event Three",
    "title": "Anand Karaj",
    "lede": "In the presence of Guru Granth Sahib Ji, two souls become one.",
    "image": "./assets/bride-weeding-groom.jpg",
    "imageAlt": "Anand Karaj — exchanging garlands",
    "blessing": "With the blessings of both families, we humbly invite you to witness our union in this sacred ceremony.",
    "details": [
      { "label": "Date", "value": "27 November 2026" },
      { "label": "Time", "value": "10:00 AM" },
      { "label": "Venue", "value": "Swagat Palace And Recreation Centre (Taraori)" }
    ]
  },
  "menu": {
    "eyebrow": "A Taste of Punjab",
    "title": "Lunch & Dinner",
    "subtitle": "hover a card to see its story",
    "items": [
      {
        "num": "01",
        "name": "Butter Chicken",
        "image": "https://images.pexels.com/photos/29685054/pexels-photo-29685054.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Simmered all night in a velvet tomato gravy — Guru's favourite since childhood."
      },
      {
        "num": "02",
        "name": "Dal Makhani",
        "image": "https://images.pexels.com/photos/28674561/pexels-photo-28674561.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Slow-cooked black lentils, finished with cream — the soul of every Punjabi table."
      },
      {
        "num": "03",
        "name": "Paneer Lababdar",
        "image": "https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Soft paneer in a rich onion-tomato curry, spiced just the way Simran's nani makes it."
      },
      {
        "num": "04",
        "name": "Amritsari Kulcha",
        "image": "https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Stuffed, golden, and straight from the tandoor — best torn by hand."
      },
      {
        "num": "05",
        "name": "Tandoori Roti",
        "image": "https://images.pexels.com/photos/5589943/pexels-photo-5589943.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Smoky, char-kissed bread, served hot off the clay oven all night long."
      },
      {
        "num": "06",
        "name": "Jalebi",
        "image": "https://images.pexels.com/photos/18488314/pexels-photo-18488314.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Crisp, syrup-soaked spirals — because every Punjabi wedding needs something sweet and golden."
      },
      {
        "num": "07",
        "name": "Rabri",
        "image": "https://images.pexels.com/photos/18488314/pexels-photo-18488314.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Thickened sweet milk, slow-reduced for hours, topped with pistachio slivers."
      },
      {
        "num": "08",
        "name": "Lassi",
        "image": "https://images.pexels.com/photos/6808666/pexels-photo-6808666.jpeg?auto=compress&cs=tinysrgb&w=800",
        "story": "Cool, frothy, and unapologetically generous — the way every Punjabi summer should taste."
      }
    ]
  },
  "timeline": {
    "eyebrow": "The Big Day",
    "title": "Wedding Day Timeline",
    "subtitle": "November 27, 2026",
    "items": [
      {
        "icon": "🚍",
        "when": "At 06:00 AM",
        "title": "Barat",
        "text": "Kakowal Road, Bawa Colony, Punjab 141007, India"
      },
      {
        "icon": "🌅",
        "when": "Morning",
        "title": "Anand Karaj",
        "text": "The sacred wedding ceremony at Gurdwara in Taraori"
      },
      {
        "icon": "🍽️",
        "when": "Afternoon",
        "title": "Lunch",
        "text": "A traditional Punjabi feast shared with all our loved ones."
      },
      {
        "icon": "📍",
        "when": "Venue",
        "title": "At Swagat Palace And Recreation Centre",
        "link": "https://maps.app.goo.gl/hJ1aeYRKsSS7FfDu5",
        "text": "Get Location"
      }
    ]
  },
  "location": {
    "eyebrow": "Find Us",
    "title": "Reception & Directions",
    "cardEyebrow": "Reception Venue",
    "timeline": "28 November 2026, 2:00 PM",
    "name": "Major Dharamshala",
    "address": "Punjab, India",
    "mapEmbed": "https://maps.google.com/maps?q=Major%20Dharamshala%20Punjab%20India&t=&z=12&ie=UTF8&iwloc=&output=embed",
    "directionsUrl": "https://maps.google.com/maps?q=Major%20Dharamshala%20Punjab%20India",
    "directionsLabel": "Get Directions",
    "phone": "tel:+919855710005",
    "callLabel": "Call Venue"
  },
  "gallery": {
    "eyebrow": "Memories",
    "title": "Photo Gallery",
    "altPrefix": "Wedding memory",
    "images": [
      "./assets/bride.png",
      "./assets/groom.png",
      "./assets/bride-weeding-groom.jpg",
      "./assets/family-meetings.png",
      "./assets/punjbai-weeding-chapters.jpg",
      "./assets/punjabi-dialgoue-weeding.jpg",
      "./assets/the-purposal.png",
      "./assets/coffee-date.png",
      "./assets/wp-chatting.png",
      "./assets/insta-chatting.png",
      "./assets/mandir.png",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
      "https://images.pexels.com/photos/28496968/pexels-photo-28496968.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/757919/pexels-photo-757919.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/29685054/pexels-photo-29685054.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/28674561/pexels-photo-28674561.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/28125427/pexels-photo-28125427.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5589943/pexels-photo-5589943.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6808666/pexels-photo-6808666.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  "rsvp": {
    "eyebrow": "Will You Join Us?",
    "title": "RSVP",
    "subtitle": "we'd be honoured to have you",
    "submit": "Reserve Your Seat",
    "successTitle": "You're Confirmed!",
    "successText": "Thank you — we can't wait to celebrate with you.",
    "fields": [
      { "label": "Full Name", "type": "text", "placeholder": "Your name", "required": true },
      { "label": "Number of Guests", "type": "number", "placeholder": "e.g. 2", "required": true, "min": "1" },
      { "label": "Phone Number", "type": "tel", "placeholder": "+91", "required": true },
      { "label": "Message for the Couple", "type": "textarea", "placeholder": "Your wishes for Simran & Guru" }
    ]
  },
  "download": {
    "eyebrow": "Keep It Forever",
    "title": "Your Invitation Card",
    "subtitle": "a small keepsake — yours to download and cherish",
    "previewDate": "28 · 11 · 2026",
    "ikonkar": "ੴ",
    "mandirImage": "./assets/mandir.png",
    "pngButton": "Download Invitation Card",
    "pdfButton": "Download as PDF",
    "note": "Saves as a high-resolution PNG or PDF, ready to share or print.",
    "preparingPng": "Preparing your card…",
    "preparingPdf": "Preparing PDF…",
    "done": "Downloaded ✓",
    "error": "Could not download — try again",
    "filePng": "SunnyAnita.png",
    "filePdf": "SunnyAnita.pdf"
  },
  "invite": {
    "ikonkar": "ੴ",
    "greeting": "Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh",
    "gurdwaraImage": "./assets/bride.png",
    "gurdwaraAlt": "Gurdwara",
    "eyebrow": "Together With Our Families",
    "portraitLeft": "./assets/groom.png",
    "portraitRight": "./assets/groom.png",
    "names": "Sunny & Anita",
    "script": "Two hearts, one destiny. We joyfully invite you to celebrate our wedding and share in our happiness.",
    "dayFlowHtml": "<b>Morning</b> Anand Karaj &nbsp;·&nbsp; <b>Afternoon</b> Lunch &nbsp;·&nbsp; <b>Evening</b> Reception &nbsp;·&nbsp; <b>Night</b> Dinner &amp; Celebration",
    "venueLine": "Venue: Major Dharamshala, Punjab, India",
    "familyDivider": "&",
    "rsvpBy": "RSVP by 27 November 2026",
    "rsvpContact": "+91 95921 29555  ·  +91 95922 29555",
    "footer": "With the grace of Waheguru Ji, two souls unite as one.",
    "footerBlessing": "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
    "events": [
      {
        "icon": "🌼",
        "title": "Path",
        "metaHtml": "26 Nov 2026<br>9:00 AM<b>At Our Residence</b>"
      },
      {
        "icon": "🎶",
        "title": "Jaggo Night",
        "metaHtml": "26 Nov 2026<br>7:00 PM<b>At Our Residence</b>"
      },
      {
        "icon": "🪔",
        "title": "Anand Karaj",
        "metaHtml": "27 Nov 2026<br>10:00 AM<b>Taraori</b>"
      }
    ],
    "families": [
      { "label": "Son of", "name": "Mr. Kashmir Singh & Mrs. Neelam" },
      { "label": "Daughter of", "name": "Mr. Sukhdev Raj & Mrs. Salwinder Kaur" }
    ]
  },
  "thankYou": {
    "title": "Thank You",
    "subtitle": "for being part of our love story"
  },
  "footer": {
    "text": "Made with love for Sunny & Anita — November 27, 2026"
  }
}
;
