/**
 * ============================================================================
 * BHANU PORTRAITS - STUDIO CONFIGURATION
 * ============================================================================
 * EDIT THIS FILE TO CHANGE YOUR CONTACT DETAILS, WHATSAPP NUMBER, EMAIL, ETC.
 * All phone/email/booking buttons across the entire website will update automatically!
 */

const STUDIO_CONFIG = {
  // Studio Name & Branding
  studioName: "BHANU PORTRAITS",
  tagline: "Timeless Wedding, Candid & Cinematic Photography",
  cityState: "Hyderabad & Andhra Pradesh, India", // Change to your studio city/coverage

  // ==========================================
  // UPDATE YOUR CONTACT NUMBERS HERE
  // ==========================================
  // WhatsApp Number: Enter with Country Code (e.g. 91 for India, NO plus sign, NO spaces)
  // Example: "919876543210"
  whatsappNumber: "8978608800",

  // Display Phone Number (shown as readable text on website)
  displayPhone: "+91 89786 08800",

  // Primary Email Address
  email: "contact@bhanuportraits.com",

  // Studio Address / Location
  address: "402, Grand world Road, Tirupati, Andhra Pradesh, 517501",

  // Social Media Links (leave empty "" or replace with your actual profiles)
  social: {
    instagram: "https://instagram.com/bhanuportraits",
    youtube: "https://youtube.com/@bhanuportraits",
    facebook: "https://facebook.com/bhanuportraits"
  },

  // Official Photography Plans (from Studio Rate Sheet)
  plans: [
    {
      id: "basic",
      name: "Basic Photography Plan",
      price: 70000,
      priceFormatted: "₹70,000",
      badge: "Essential Ceremony",
      highlight: false,
      description: "Ideal for intimate and traditional celebrations covering key rituals with high quality traditional and candid couple coverage.",
      features: [
        { title: "Nalugu Coverage", items: ["Traditional Photo", "Traditional Video"] },
        { title: "Welcoming", items: ["Welcoming Photo & Video Coverage (In Hall Only)"] },
        {
          title: "Reception & Muhurtham", items: [
            "Traditional Photo at Stage (One Still Photo)",
            "Traditional Video at Stage (One Video Camera 4K)",
            "Candid Photographer for Couples"
          ]
        },
        {
          title: "Deliverables", items: [
            "WhatsApp Invitation – 1",
            "Marriage Album 02 Sheets 60",
            "Professional Video Editing"
          ]
        }
      ]
    },
    {
      id: "gold",
      name: "Gold Photography Plan",
      price: 130000,
      priceFormatted: "₹1,30,000",
      badge: "Comprehensive",
      highlight: false,
      description: "Complete celebration coverage with dual candid team, entrance & dining coverage, LED wall, and local pre/post shoot.",
      features: [
        { title: "Nalugu Coverage", items: ["Traditional Photo", "Traditional Video"] },
        { title: "Welcoming", items: ["Welcoming Photo & Video Coverage (In Hall Only)"] },
        {
          title: "Reception & Muhurtham", items: [
            "Traditional Photo at Stage (One Still Photo)",
            "Traditional Video at Stage (One Video Camera 4K)",
            "One Videographer Coverage Entrance & Dining Hall",
            "Candid Photographer for Couples",
            "Candid Videographer for Couples",
            "Promo Teaser Video"
          ]
        },
        {
          title: "Special Production", items: [
            "6×8 LED Wall",
            "Pre or Post Wedding Normal Photo Shoot (Local)"
          ]
        },
        {
          title: "Deliverables", items: [
            "WhatsApp Invitation – 1",
            "Marriage Album with Box 02 Sheets 70",
            "Pen Drive - 1 (128 GB)",
            "Photo Frame – 2",
            "Professional Video Editing"
          ]
        }
      ]
    },
    {
      id: "diamond",
      name: "Diamond Photography Plan",
      price: 180000,
      priceFormatted: "₹1,80,000",
      badge: "Most Popular",
      highlight: true,
      description: "Our signature luxury experience with Mangala Snanam candid coverage, Drone aerials, full-session LED wall, and cinematic song shoot.",
      features: [
        { title: "Mangala Snanam Coverage", items: ["Traditional Photo", "Traditional Video", "Candid Photo"] },
        { title: "Nalugu Snanam Coverage", items: ["Traditional Photo", "Traditional Video"] },
        { title: "Welcoming", items: ["Welcoming Photo & Video Coverage (In Hall Only)"] },
        {
          title: "Reception & Muhurtham", items: [
            "Traditional Photo at Stage (One Still Photo)",
            "Traditional Video at Stage (One Video Camera 4K)",
            "One Videographer Coverage Entrance & Dining Hall",
            "Candid Photographer for Couples",
            "Candid Videographer for Couples",
            "Drone Aerial Cinematography",
            "LED Wall 6×8 (Full Session)"
          ]
        },
        {
          title: "Cinematic & Special Shoots", items: [
            "Pre or Post Wedding Song Shoot Cinematic (Local)",
            "Promo (Only For Candid Video)"
          ]
        },
        {
          title: "Deliverables", items: [
            "WhatsApp Invitation – 1",
            "Marriage Album with Box 03 Sheets 80",
            "Pen Drive - 1 (64 GB)",
            "Photo Frame – 2",
            "Full Cinematic Video Editing"
          ]
        }
      ]
    },
    {
      id: "platinum",
      name: "Platinum Photography Plan",
      price: 200000,
      priceFormatted: "₹2,00,000",
      badge: "The Royal Experience",
      highlight: false,
      description: "The ultimate royal wedding documentary package with 100-sheet master album with box, 1TB hard drive archive, full drone, and complete candid coverage.",
      features: [
        {
          title: "Mangala Snanam Coverage", items: [
            "Traditional Photo",
            "Traditional Video",
            "Candid Photo",
            "Candid Video"
          ]
        },
        { title: "Welcoming", items: ["Welcoming Photo & Video Coverage"] },
        {
          title: "Reception & Muhurtham", items: [
            "Traditional Photo at Stage (One Still Photo)",
            "Traditional Video at Stage (One Video Camera 4K)",
            "One Videographer Coverage Entrance & Dining Hall",
            "Candid Photographer for Couples",
            "Candid Videographer for Couples",
            "Drone Aerial Cinematography",
            "LED Wall 6×8 (Full Session)"
          ]
        },
        {
          title: "Cinematic & Special Shoots", items: [
            "Pre or Post Wedding Song Shoot Cinematic (Local)",
            "Promo (Only For Candid Video)"
          ]
        },
        {
          title: "Deliverables", items: [
            "WhatsApp Invitation – 1",
            "Marriage Album with Box 03 Sheets 100",
            "Hard Disk - 1 (1 TB Master Storage)",
            "Photo Frame – 2",
            "Complete Cinema-Grade Video Editing"
          ]
        }
      ]
    }
  ]
};

// Helper function to build custom WhatsApp link
function getWhatsAppUrl(customMessage) {
  let num = String(STUDIO_CONFIG.whatsappNumber || '').replace(/[^0-9]/g, '');
  if (num.length === 10) num = '91' + num;
  const text = encodeURIComponent(customMessage || `Hello ${STUDIO_CONFIG.studioName}! I would like to inquire about wedding photography packages.`);
  return `https://wa.me/${num}?text=${text}`;
}

// Helper function to build custom Mailto link
function getMailtoUrl(subject, body) {
  const sub = encodeURIComponent(subject || `Wedding Photography Inquiry - ${STUDIO_CONFIG.studioName}`);
  const bod = encodeURIComponent(body || `Hello ${STUDIO_CONFIG.studioName},\n\nI am interested in discussing your wedding photography plans.\n\nRegards,`);
  return `mailto:${STUDIO_CONFIG.email}?subject=${sub}&body=${bod}`;
}
