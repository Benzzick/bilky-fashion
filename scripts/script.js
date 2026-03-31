// ============================================
// BILKY FASHION HOUSE - CENTRAL STORE & CORE
// ============================================

// --- GLOBAL DATA & STORE ---
// Explicitly attaching to window to ensure global availability across all subpages
window.productsData = [
  {
    id: 1,
    name: "Luxe Evening Gown",
    category: "womens",
    price: 299,
    originalPrice: 450,
    description:
      "Enchant in refined luxury with this stunning silk evening gown. Made from sumptuous imported Italian silk, this elegant piece captures every eye with its graceful proportions and flowing design.",
    image:
      "https://images.unsplash.com/photo-1773574488221-08b2883a1c80?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "New",
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Heritage Leather Moto Jacket",
    category: "womens",
    price: 349,
    originalPrice: 500,
    description:
      "An iconic leather jacket that merges bold attitude with refined elegance. Constructed from premium full-grain leather with impeccable attention to every detail.",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
    badge: "Sale",
    rating: 5,
    reviews: 95,
  },
  {
    id: 3,
    name: "Signature Structured Tote",
    category: "accessories",
    price: 899,
    originalPrice: 1200,
    description:
      "Redefine sophistication with this masterpiece handbag. Handcrafted from the finest leather with meticulous architectural design and timeless appeal.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    badge: "Hot",
    rating: 5,
    reviews: 203,
  },
  {
    id: 4,
    name: "Cashmere Blend Overcoat",
    category: "womens",
    price: 599,
    originalPrice: 850,
    description:
      "Wrap yourself in comfort with this artisan wool coat, ideal for your cooler season wardrobe with impeccable drape and warmth.",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    badge: "New",
    rating: 5,
    reviews: 76,
  },
  {
    id: 5,
    name: "Bespoke Power Suit",
    category: "mens",
    price: 799,
    originalPrice: 1100,
    description:
      "Command presence with this meticulously tailored suit, engineered for the distinguished professional who values precision and quality.",
    image:
      "https://images.unsplash.com/photo-1679101893304-045625840a94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG93ZWVyJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
    badge: "Sale",
    rating: 5,
    reviews: 142,
  },
  {
    id: 6,
    name: "Prestige Timepiece",
    category: "accessories",
    price: 1299,
    originalPrice: 1800,
    description:
      "Where superlative craftsmanship meets visionary design in this exclusive limited-edition chronograph for the collector.",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80",
    badge: "Hot",
    rating: 5,
    reviews: 312,
  },
  {
    id: 7,
    name: "Pure Cashmere Pullover",
    category: "womens",
    price: 249,
    originalPrice: 350,
    description:
      "Experience supreme softness with this sumptuous cashmere knit in a timeless crew silhouette, effortless luxury in every wear.",
    image:
      "https://images.unsplash.com/photo-1636146049394-0924c2b66104?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhc2htZXJlJTIwcHVsbG92ZXJ8ZW58MHx8MHx8fDA%3D",
    badge: "New",
    rating: 5,
    reviews: 88,
  },
  {
    id: 8,
    name: "Minimalist Leather Trainers",
    category: "shoes",
    price: 399,
    originalPrice: 550,
    description:
      "Refined leather trainers that seamlessly merge modern design with everyday wearability and uncompromising comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    badge: "Sale",
    rating: 5,
    reviews: 267,
  },
  {
    id: 9,
    name: "Artisan Leather Boots",
    category: "shoes",
    price: 449,
    originalPrice: 650,
    description:
      "Hand-finished leather boots with rich burgundy tones, masterfully designed for refined versatility across any occasion.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    badge: "New",
    rating: 5,
    reviews: 54,
  },
  {
    id: 10,
    name: "Midnight Velvet Blazer",
    category: "mens",
    price: 649,
    originalPrice: 800,
    description:
      "A showstopping velvet blazer that ensures presence and sophistication at formal occasions and elevated events.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    badge: "Classic",
    rating: 4,
    reviews: 89,
  },
  {
    id: 11,
    name: "Fluid Midi Skirt",
    category: "womens",
    price: 189,
    originalPrice: 280,
    description:
      "Luxurious satin with elegant pleating that gracefully flows with your movement, elevated with a refined high-rise waist.",
    image:
      "https://images.unsplash.com/photo-1629891960162-ddf7eeb58acc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1pZGklMjBza2lydHxlbnwwfHwwfHx8MA%3D%3D",
    badge: "Trend",
    rating: 5,
    reviews: 112,
  },
  {
    id: 12,
    name: "European Linen Shirt",
    category: "mens",
    price: 129,
    originalPrice: 190,
    description:
      "Lightweight European linen with relaxed tailoring, your essential piece for sun-soaked escapes and leisure wear.",
    image:
      "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGluZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    badge: "Summer",
    rating: 5,
    reviews: 45,
  },
  {
    id: 13,
    name: "Classic Aviator Shades",
    category: "accessories",
    price: 229,
    originalPrice: 320,
    description:
      "Expertly crafted frames with premium polarized optics, delivering superior UV protection and timeless aesthetic appeal.",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    badge: "Icon",
    rating: 5,
    reviews: 178,
  },
  {
    id: 14,
    name: "Couture Chiffon Ball Gown",
    category: "womens",
    price: 1200,
    originalPrice: 1500,
    description:
      "Show-stopping chiffon gown adorned with elaborate hand-embellishment and elegant cascading silhouette for iconic moments.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    badge: "Luxury",
    rating: 5,
    reviews: 32,
  },
  {
    id: 15,
    name: "Italian Wool Topcoat",
    category: "mens",
    price: 850,
    originalPrice: 1200,
    description:
      "Sophisticated double-breasted overcoat in premium Italian wool blend, delivering impeccable structure through winter months.",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    badge: "New",
    rating: 5,
    reviews: 67,
  },
  {
    id: 16,
    name: "Diamond Eternity Bracelet",
    category: "accessories",
    price: 4500,
    originalPrice: 6000,
    description:
      "Stunning 18k white gold bracelet adorned with 5 carats of responsibly sourced diamonds, a timeless treasure piece.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    badge: "Elite",
    rating: 5,
    reviews: 12,
  },
  {
    id: 17,
    name: "Quilted Leather Crossbody",
    category: "accessories",
    price: 450,
    originalPrice: 600,
    description:
      "Sophisticated quilted leather in iconic silhouette with chain strap, seamlessly transitioning from day to evening elegance.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    badge: "Sale",
    rating: 5,
    reviews: 84,
  },
  {
    id: 18,
    name: "Italian Suede Shoes",
    category: "shoes",
    price: 320,
    originalPrice: 450,
    description:
      "Refined Italian suede loafers with signature stitching detail and cushioned sole for effortless all-day comfort.",
    image:
      "https://images.unsplash.com/photo-1654945419086-bcb1c1e1b875?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1ZWRlJTIwc2xpcG9ufGVufDB8fDB8fHww",
    badge: "Classic",
    rating: 4,
    reviews: 56,
  },
  {
    id: 19,
    name: "Aline Silk Bow Shirt",
    category: "womens",
    price: 180,
    originalPrice: 250,
    description:
      "Refined silk blouse elevated by a signature bow detail, the perfect statement piece for professional and social settings.",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
    badge: "Essential",
    rating: 5,
    reviews: 92,
  },
  {
    id: 20,
    name: "Wool Heritage Wrap",
    category: "accessories",
    price: 120,
    originalPrice: 180,
    description:
      "Generously sized wool wrap in timeless plaid, your essential cold-weather accessory for style and warmth together.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    badge: "Cozy",
    rating: 5,
    reviews: 145,
  },
];

// Centralized Trustees Data
window.trusteesData = [
  {
    id: 1,
    name: "Jahbuikem Nwazue",
    role: "Founder & Creative Director",
    bio: "Visionary innovator who founded BILKY with a singular passion for luxury fashion excellence and strategic market leadership. Brings over 15 years of transformative experience in high-end fashion curation and brand vision.",
    image: "../assets/IMG-20250727-WA0457.jpg",
    quote:
      "True style is a conversation between your soul and the world around you.",
  },
  {
    id: 5,
    name: "Baridomale Clinton Popnwin",
    role: "Chief Brand Officer",
    bio: "Architect of BILKY's distinctive brand presence and market positioning. Transforms creative vision into compelling experiences through strategic partnerships and iconic event curation.",
    image: "../assets/Clinton_Baridomale_Popnwin.png",
    quote:
      "Every collection tells a story; we simply choose to tell ours with elegance.",
  },
  {
    id: 10,
    name: "Isaiah Obhiose Isaiah",
    role: "Technical Operations Manager",
    bio: "Ensures seamless execution across all technical systems and digital platforms. Critical to delivering flawless experiences that support BILKY's commitment to operational excellence and innovation.",
    image: "../assets/IMG_0824.jpg",
    quote:
      "Excellence in operations is the foundation upon which great brands are built.",
  },
];
// --- CORE UTILITIES ---

/**
 * Professional Notification System
 * Replaces standard alert() with non-blocking toast messages.
 */
window.showNotification = function (message, type = "success") {
  let container = document.querySelector(".notification-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "notification-container";
    document.body.appendChild(container);
  }

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  const icons = {
    success: "✔️",
    error: "✕",
    info: "ℹ",
  };

  notification.innerHTML = `
        <span class="notification-icon">${icons[type] || "ℹ"}</span>
        <span class="notification-message">${message}</span>
    `;

  container.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("notification-exit");
    notification.addEventListener("animationend", () => {
      notification.remove();
      if (container.children.length === 0) container.remove();
    });
  }, 4000);
};

/**
 * Modal System
 * Used for trustee profiles and other centralized viewing tasks.
 */
window.Modal = {
  open(contentHtml) {
    let overlay = document.querySelector(".modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "modal-overlay";
      overlay.innerHTML = `
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close">&times;</button>
                    <div class="modal-body"></div>
                </div>
            `;
      document.body.appendChild(overlay);

      overlay.querySelector(".modal-close").onclick = () => this.close();
      overlay.onclick = (e) => {
        if (e.target === overlay) this.close();
      };
    }

    overlay.querySelector(".modal-body").innerHTML = contentHtml;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  },
  close() {
    const overlay = document.querySelector(".modal-overlay");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  },
};

// --- DATA ACCESSORS ---

function getProductById(id) {
  return productsData.find((p) => p.id === parseInt(id));
}

function getTrusteeById(id) {
  return trusteesData.find((t) => t.id === parseInt(id));
}

// --- UI COMPONENTS ---

/**
 * Generate a reusable Product Card HTML string.
 * Handles relative path logic for root/subpage contexts.
 */
function createProductCard(product) {
  const detailPath = "#";
  const stars = "🌟".repeat(product.rating || 5);

  return `
    <div class="product-card" onclick="window.location.href='${detailPath}?id=${product.id}'">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <button class="wishlist-btn">💖</button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category.toUpperCase()}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          <span class="price-current">$${product.price}</span>
          <span class="price-original">$${product.originalPrice}</span>
        </div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <button class="btn btn-secondary quick-add-btn" style="width: 100%; margin-top: var(--space-md);">Add to Cart</button>
      </div>
    </div>
  `;
}

// --- PAGE INITIALIZERS ---

function loadFeaturedProducts() {
  const container = document.getElementById("featuredProducts");
  if (!container) return;
  const featured = productsData.slice(0, 6);
  container.innerHTML = featured.map((p) => createProductCard(p)).join("");
}

function loadProducts() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const categoryFilter = document.getElementById("categoryFilter");
  const sortFilter = document.getElementById("sortFilter");
  const searchInput = document.getElementById("searchInput");
  const productsCount = document.getElementById("productsCount");

  function filterAndSort() {
    let filtered = [...productsData];
    const category = categoryFilter?.value;
    const search = searchInput?.value.toLowerCase();
    const sort = sortFilter?.value;

    if (category) filtered = filtered.filter((p) => p.category === category);
    if (search)
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(search));

    if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
    else if (sort === "newest") filtered.reverse();

    container.innerHTML = filtered.map((p) => createProductCard(p)).join("");
    if (productsCount)
      productsCount.textContent = `Showing ${filtered.length} products`;
  }

  [categoryFilter, sortFilter, searchInput].forEach((el) =>
    el?.addEventListener("input", filterAndSort),
  );

  // Check URL parameters
  const urlCategory = new URLSearchParams(window.location.search).get(
    "category",
  );
  if (urlCategory && categoryFilter) {
    categoryFilter.value = urlCategory;
  }

  filterAndSort();
}

function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

function initNewsletter() {
  document.querySelectorAll(".newsletter-form").forEach((form) => {
    form.onsubmit = (e) => {
      e.preventDefault();
      showNotification(
        "Thank you for subscribing to our newsletter!",
        "success",
      );
      form.reset();
    };
  });
}

// Global Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initNewsletter();
  loadFeaturedProducts();
  loadProducts();
});
