// ============================================
// TRUSTEES PAGE JAVASCRIPT
// ============================================

/**
 * Initializes the Board of Trustees page.
 * Maps data from 'trusteesData' in script.js to the grid.
 */
function initTrusteesGrid() {
    const grid = document.getElementById('trusteesGrid');
    if (!grid) return;

    if (!window.trusteesData) {
        console.error('trusteesData not found! Make sure script.js is loaded.');
        return;
    }

    grid.innerHTML = window.trusteesData.map(trustee => `
        <div class="trustee-card">
            <div class="trustee-image">
                <img src="${trustee.image}" alt="${trustee.name}">
            </div>
            <div class="trustee-info">
                <h3 class="trustee-name">${trustee.name}</h3>
                <p class="trustee-role">${trustee.role}</p>
                <p class="trustee-bio" style="margin-top: var(--space-sm); opacity: 0.8; font-size: 0.9rem;">${trustee.bio.substring(0, 100)}...</p>
                <div style="margin-top: var(--space-md); text-align: center;">
                    <button class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.8rem; width: 100%; text-transform: uppercase; letter-spacing: 1px;" onclick="window.viewTrusteeProfile(${trustee.id})">View Full Profile</button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Opens a detailed profile modal for a trustee.
 * Attached to window to ensure accessibility from HTML onclick handlers.
 */
window.viewTrusteeProfile = function(id) {
    if (!window.trusteesData) return;
    const trustee = window.trusteesData.find(t => t.id === id);
    if (!trustee || !window.Modal) return;

    const content = `
        <div class="trustee-profile-detail">
            <div class="profile-header" style="display: grid; grid-template-columns: 200px 1fr; gap: var(--space-xl); align-items: center; margin-bottom: var(--space-xl);">
                <div class="profile-image" style="border-radius: var(--radius-lg); overflow: hidden; aspect-ratio: 1; box-shadow: 0 10px 25px rgba(0,0,0,0.1); background: var(--color-bg);">
                    <img src="${trustee.image}" alt="${trustee.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="profile-title">
                    <h2 style="font-family: var(--font-display); font-size: 2.5rem; color: var(--color-text); line-height: 1.1; margin: 0;">${trustee.name}</h2>
                    <div style="color: var(--color-primary); font-weight: 700; font-size: 0.9rem; letter-spacing: 2.5px; text-transform: uppercase; margin-top: var(--space-sm); opacity: 0.8;">
                        ${trustee.role}
                    </div>
                </div>
            </div>

            <div class="profile-body" style="padding-top: var(--space-md);">
                <div style="margin-bottom: var(--space-2xl);">
                    <h3 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: var(--space-md); color: var(--color-primary); font-weight: 800;">Biography</h3>
                    <p style="color: var(--color-text); line-height: 1.9; font-size: 1.1rem; opacity: 0.9;">
                        ${trustee.bio}
                    </p>
                </div>

                ${trustee.quote ? `
                <div class="profile-quote" style="background: rgba(168, 85, 247, 0.05); padding: var(--space-xl) var(--space-2xl); border-radius: 20px; border-left: 6px solid var(--color-primary); font-style: italic; margin-bottom: var(--space-2xl); position: relative;">
                    <p style="color: var(--color-text); font-size: 1.25rem; line-height: 1.6; margin: 0; position: relative; z-index: 1;">
                        <span style="font-family: serif; font-size: 4rem; color: var(--color-primary); opacity: 0.15; position: absolute; left: -20px; top: -30px;">"</span>
                        ${trustee.quote}
                    </p>
                </div>
                ` : ''}

                <div class="profile-footer" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: var(--space-xl);">
                    <div style="display: flex; gap: var(--space-md);">
                        <a href="#" class="social-icon-btn" aria-label="LinkedIn">💼</a>
                        <a href="#" class="social-icon-btn" aria-label="Twitter">🐦</a>
                    </div>
                    <button class="btn btn-secondary" onclick="window.Modal.close()" style="padding: 1rem 2.5rem; font-weight: 700; border-radius: 50px;">Return to Board</button>
                </div>
            </div>
        </div>
    `;

    window.Modal.open(content);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initTrusteesGrid);
