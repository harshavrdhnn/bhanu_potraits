# BHANU PORTRAITS — Luxury Photography Studio Website

A luxury, mobile-first responsive website designed for **BHANU PORTRAITS** photography studio, specializing in traditional wedding rituals, Nalugu, Mangala Snanam, Reception & Muhurtham coverage, 4K UHD video, candid photography, drone aerials, and handcrafted master albums.

---

## 🌟 Key Features

1. **Mobile-First & PC Compatible**:
   - Touch-friendly interface with a sticky mobile bottom action bar (Instant WhatsApp & Direct Call).
   - Fast and smooth rendering with zero bulky framework dependencies.
   - High-end dark onyx and warm gold aesthetic with `Playfair Display`, `Cinzel`, and `Plus Jakarta Sans` typography.

2. **Official Photography Plans (as specified in Studio Rate Sheet)**:
   - **Basic Photography Plan** — ₹80,000
   - **Gold Photography Plan** — ₹1,40,000
   - **Diamond Photography Plan** — ₹1,90,000 *(Most Popular)*
   - **Platinum Photography Plan** — ₹2,00,000 *(VIP Royal Experience)*
   - Full feature comparison matrix and deliverables breakdown.

3. **1-Click WhatsApp & Email Redirections**:
   - Clicking **"Book On WhatsApp"** on any plan automatically opens WhatsApp with a tailored inquiry pre-filled with that plan's name and price.
   - Includes an interactive **Date Availability & Quote Checker** form that constructs full WhatsApp and Email booking messages.

4. **Studio Deliverables Showcase**:
   - 60 to 100-sheet albums with presentation boxes
   - 64GB / 128GB Pen drives & 1TB Master Hard Disks
   - Set of 2 designer photo frames
   - 6×8 Stage LED wall & Drone aerial cinematography

---

## ✏️ How To Update Contact Details, Phone & Email

All studio details are centralized in **[`js/config.js`](file:///b:/Projects/New%20folder/Bhanu_Potraits/js/config.js)**:

```javascript
const STUDIO_CONFIG = {
  studioName: "BHANU PORTRAITS",
  whatsappNumber: "919876543210", // Your WhatsApp number with country code (no + or spaces)
  displayPhone: "+91 98765 43210", // Formatted phone number shown on the site
  email: "contact@bhanuportraits.com", // Your official email address
  address: "Your Studio Address, City, State - PIN",
  // ...
};
```
Whenever you edit `config.js`, all WhatsApp links, phone numbers, email links, and address fields across the entire website will automatically update!

---

## 🚀 How To Preview / Host

### Local Preview:
Simply double-click `index.html` in your browser, or run a local web server:
```bash
# Python
python -m http.server 3000

# or Node.js
npx serve .
```

### Free Web Hosting Options:
You can host this site for free on:
- **GitHub Pages** (Settings > Pages > Deploy from main branch)
- **Vercel** (`vercel deploy`)
- **Netlify** (drag & drop the folder)

---

## 📁 Project Structure

```
Bhanu_Potraits/
├── index.html              # Main webpage with SEO and accessibility
├── README.md               # Documentation & setup guide
├── .gitignore              # Git ignore rules
├── css/
│   └── style.css           # Luxury design system, responsiveness & animations
├── js/
│   ├── config.js           # Central configuration for phone, WhatsApp & email
│   └── main.js             # Interactions, filters, modals & message builders
└── assets/
    └── images/             # Studio visual assets
        ├── hero_wedding.jpg
        ├── nalugu_snanam.jpg
        ├── reception_stage.jpg
        ├── candid_couple.jpg
        ├── cinematic_shoot.jpg
        └── album_deliverables.jpg
```
