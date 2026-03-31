// ============================================
// PRODUCTS LISTING JAVASCRIPT
// ============================================

/**
 * Handles product listing, filtering, and sorting.
 * Relies on 'productsData' from script.js.
 */

let activeProducts = [...productsData];

/**
 * Initialize the product listing page
 */
function initProductsPage() {
    const grid = document.getElementById('productsGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const searchInput = document.getElementById('searchInput');

    if (!grid) return;

    // Initial render
    renderProducts();

    // Event listeners
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            filterAndRender();
        });
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            filterAndRender();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterAndRender();
        });
    }

    // Check for category in URL
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    if (catParam && categoryFilter) {
        categoryFilter.value = catParam;
        filterAndRender();
    }
}

/**
 * Filter and Sort logic
 */
function filterAndRender() {
    const categoryValue = document.getElementById('categoryFilter').value.toLowerCase();
    const sortValue = document.getElementById('sortFilter').value;
    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    // 1. Filtering
    activeProducts = productsData.filter(product => {
        const matchesCategory = !categoryValue || product.category.toLowerCase().includes(categoryValue);
        const matchesSearch = !searchValue || 
                             product.name.toLowerCase().includes(searchValue) || 
                             product.category.toLowerCase().includes(searchValue);
        return matchesCategory && matchesSearch;
    });

    // 2. Sorting
    if (sortValue === 'price-low') {
        activeProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        activeProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'newest') {
        activeProducts.sort((a, b) => b.id - a.id);
    }

    renderProducts();
}

/**
 * Render products to DOM
 */
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const countText = document.getElementById('productsCount');

    if (!grid) return;

    if (activeProducts.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem;"><h3>No products found matching your criteria.</h3></div>';
        if (countText) countText.textContent = 'Showing 0 products';
        return;
    }

    grid.innerHTML = activeProducts.map(product => createProductCard(product)).join('');
    
    if (countText) {
        countText.textContent = `Showing ${activeProducts.length} product${activeProducts.length === 1 ? '' : 's'}`;
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initProductsPage);
