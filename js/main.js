/**
 * ============================================================================
 * BHANU PORTRAITS - MAIN INTERACTION SCRIPT
 * ============================================================================
 * Handles WhatsApp pre-filled redirections, email mailto generator,
 * live UI hydration from config.js, portfolio filters, and mobile drawer.
 */

document.addEventListener('DOMContentLoaded', () => {
  initDynamicConfig();
  initPlanButtons();
  initInquiryForm();
  initPortfolioFilters();
  initLightbox();
  initMobileMenu();
});

/**
 * Automatically populates all data-config elements using values from config.js
 */
function initDynamicConfig() {
  if (typeof STUDIO_CONFIG === 'undefined') {
    console.error('STUDIO_CONFIG not loaded. Check js/config.js');
    return;
  }

  // Update text placeholders
  document.querySelectorAll('[data-config-text]').forEach(el => {
    const key = el.getAttribute('data-config-text');
    if (key === 'phone') el.textContent = STUDIO_CONFIG.displayPhone;
    if (key === 'email') el.textContent = STUDIO_CONFIG.email;
    if (key === 'address') el.textContent = STUDIO_CONFIG.address;
    if (key === 'name') el.textContent = STUDIO_CONFIG.studioName;
  });

  // Update WhatsApp links
  document.querySelectorAll('[data-action="whatsapp-general"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultMsg = `Hello ${STUDIO_CONFIG.studioName}! I'm looking for wedding & event photography packages. Please share your brochure and date availability.`;
      window.open(getWhatsAppUrl(defaultMsg), '_blank');
    });
  });

  // Update Call / Email general buttons
  document.querySelectorAll('[data-action="email-general"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const subject = `Photography Inquiry - ${STUDIO_CONFIG.studioName}`;
      const body = `Hello ${STUDIO_CONFIG.studioName} Team,\n\nI would like to know more about your wedding and event coverage packages.\n\nMy Event Date:\nVenue / City:\nContact Number:\n\nLooking forward to hearing from you!`;
      window.location.href = getMailtoUrl(subject, body);
    });
  });

  // Call directly button
  document.querySelectorAll('[data-action="call-direct"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      let num = String(STUDIO_CONFIG.whatsappNumber || '').replace(/[^0-9]/g, '');
      if (num.length === 10) num = '91' + num;
      window.location.href = `tel:+${num}`;
    });
  });
}

/**
 * Attaches WhatsApp & Email booking buttons with tailored messages for each plan
 */
function initPlanButtons() {
  document.querySelectorAll('.btn-plan-wa').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan-name');
      const planPrice = btn.getAttribute('data-plan-price');
      
      const message = `Hello ${STUDIO_CONFIG.studioName}! 👋\n\nI am interested in booking the *${planName}* (${planPrice}) for my upcoming wedding/event.\n\nPlease let me know your availability for our dates and the booking process.`;
      
      window.open(getWhatsAppUrl(message), '_blank');
    });
  });

  document.querySelectorAll('.btn-plan-email').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan-name');
      const planPrice = btn.getAttribute('data-plan-price');

      const subject = `Booking Inquiry: ${planName} (${planPrice}) - ${STUDIO_CONFIG.studioName}`;
      const body = `Hello ${STUDIO_CONFIG.studioName} Team,\n\nI am interested in booking the ${planName} priced at ${planPrice}.\n\nEvent Details:\n- Tentative Event Date(s):\n- Function(s) (Nalugu, Reception, Muhurtham, etc.):\n- City / Venue:\n- My Contact Number:\n\nPlease share your availability and contract details.\n\nWarm regards,`;

      window.location.href = getMailtoUrl(subject, body);
    });
  });
}

/**
 * Handles the interactive custom quote calculator & date check form
 */
function initInquiryForm() {
  const form = document.getElementById('studioInquiryForm');
  if (!form) return;

  const waSubmitBtn = document.getElementById('submitWhatsApp');
  const emailSubmitBtn = document.getElementById('submitEmail');

  const getFormData = () => {
    const name = document.getElementById('clientName')?.value.trim() || 'Valued Client';
    const phone = document.getElementById('clientPhone')?.value.trim() || 'Not specified';
    const date = document.getElementById('eventDate')?.value.trim() || 'Dates to be decided';
    const city = document.getElementById('eventCity')?.value.trim() || 'Local';
    const plan = document.getElementById('preferredPlan')?.value || 'Diamond Photography Plan';
    const notes = document.getElementById('eventNotes')?.value.trim() || 'None';

    return { name, phone, date, city, plan, notes };
  };

  if (waSubmitBtn) {
    waSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      const message = `*Wedding Photography Inquiry - ${STUDIO_CONFIG.studioName}*\n\n` +
                      `👤 *Name:* ${data.name}\n` +
                      `📱 *Phone:* ${data.phone}\n` +
                      `📅 *Date:* ${data.date}\n` +
                      `📍 *Location:* ${data.city}\n` +
                      `💎 *Preferred Plan:* ${data.plan}\n` +
                      `📝 *Notes/Ceremonies:* ${data.notes}\n\n` +
                      `Looking forward to checking availability!`;

      window.open(getWhatsAppUrl(message), '_blank');
    });
  }

  if (emailSubmitBtn) {
    emailSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      const subject = `Wedding Date Availability Inquiry - ${data.name} (${data.date})`;
      const body = `Hello ${STUDIO_CONFIG.studioName} Team,\n\n` +
                   `I would like to check availability for our wedding / celebration:\n\n` +
                   `- Name: ${data.name}\n` +
                   `- Contact Number: ${data.phone}\n` +
                   `- Event Date: ${data.date}\n` +
                   `- Venue / City: ${data.city}\n` +
                   `- Interested Plan: ${data.plan}\n` +
                   `- Special Requests: ${data.notes}\n\n` +
                   `Please share pricing confirmation and next steps.\n\nThank you!`;

      window.location.href = getMailtoUrl(subject, body);
    });
  }
}

/**
 * Filter portfolio items by category
 */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * Lightbox modal for previewing gallery images
 */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-title')?.textContent || '';
      const tag = card.querySelector('.gallery-tag')?.textContent || '';

      if (img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<span style="color: #d4af37; font-size: 0.8rem; text-transform: uppercase;">${tag}</span><h3 style="color: #fff; margin-top: 4px;">${title}</h3>`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/**
 * Mobile drawer menu toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  });
}
