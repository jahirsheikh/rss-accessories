/**
 * RSS Accessories - Main JavaScript
 * Handles all interactive functionality
 */

class RSSWebsite {
    constructor() {
        this.currentProduct = null;
        this.init();
    }

    init() {
        $(document).ready(() => {
            this.initSlider();
            this.loadProducts();
            this.bindEvents();
            this.initAnimations();
        });
    }

    // Initialize hero slider
    initSlider() {
        $('#heroSlider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true,
            fade: true,
            speed: 1200,
            pauseOnHover: false,
            pauseOnFocus: false,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
        });
    }

    // Load and display products
    loadProducts() {
        this.displayProducts('all');
    }

    displayProducts(category) {
        const allGrid = $('#allProductsGrid');
        const packagingGrid = $('#packagingGrid');
        const accessoriesGrid = $('#accessoriesGrid');

        // Clear existing content
        allGrid.empty();
        packagingGrid.empty();
        accessoriesGrid.empty();

        Object.values(PRODUCT_DATA).forEach(product => {
            const productHTML = this.createProductHTML(product);
            
            // Add to all products
            allGrid.append(productHTML);
            
            // Add to category-specific grids
            if (product.type === 'packaging') {
                packagingGrid.append(productHTML);
            } else if (product.type === 'accessories') {
                accessoriesGrid.append(productHTML);
            }
        });

        // Trigger fade-in animations
        setTimeout(() => {
            this.checkFadeIn();
        }, 100);
    }

    createProductHTML(product) {
        return `
            <div class="product-item" data-category="${product.type}">
                <div class="product-card fade-in">
                    <div class="product-image-wrapper">
                        <img src="${product.image}" alt="${product.title}" loading="lazy">
                        <div class="product-overlay">
                            <div class="product-actions">
                                <button class="btn-action" data-product="${product.id}" title="View Details">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="btn-action btn-wishlist" title="Add to Wishlist">
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div class="product-badge">${product.badge}</div>
                    </div>
                    <div class="product-content">
                        <div class="product-category">${product.category}</div>
                        <h5>${product.title}</h5>
                        <p>${product.description}</p>
                        <div class="product-features">
                            ${product.features.slice(0, 2).map(feature => 
                                `<span class="feature-tag">${feature.split(' ')[0]}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Bind all event listeners
    bindEvents() {
        // Product view button
        $(document).on('click', '.btn-action[data-product]', (e) => {
            e.preventDefault();
            const productId = $(e.currentTarget).data('product');
            this.openProductModal(productId);
        });

        // Wishlist button
        $(document).on('click', '.btn-wishlist', (e) => {
            e.preventDefault();
            this.toggleWishlist($(e.currentTarget));
        });

        // Smooth scrolling
        $('a[href^="#"]').on('click', (e) => {
            e.preventDefault();
            const target = $($(e.currentTarget).attr('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 800, 'swing');
            }
        });

        // Scroll events
        $(window).scroll(() => {
            this.handleScroll();
        });

        // Contact form submission
        $('#contactForm').on('submit', (e) => {
            e.preventDefault();
            this.handleContactForm();
        });

        // Tab switching animations
        $('#productTabs button[data-bs-toggle="pill"]').on('shown.bs.tab', (e) => {
            this.animateTabSwitch();
        });

        // Scroll to top button
        $('#scrollTop').click(() => {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }

    // Open product modal with dynamic content
    openProductModal(productId) {
        const product = PRODUCT_DATA[productId];
        if (!product) return;

        this.currentProduct = product;

        // Update modal content
        $('#modalProductBadge').text(product.badge);
        $('#modalProductCategory').text(product.category);
        $('#modalProductTitle').text(product.title);
        $('#modalProductDescription').text(product.description);
        $('#modalProductImage').attr('src', product.image).attr('alt', product.title);

        // Update features list
        const featuresList = $('#modalProductFeatures');
        featuresList.empty();
        product.features.forEach(feature => {
            featuresList.append(`
                <li><i class="fas fa-star text-warning me-2"></i>${feature}</li>
            `);
        });

        // Show modal
        $('#productModal').modal('show');

        // Track event
        this.trackEvent('Product Viewed', {
            product_id: productId,
            product_name: product.title
        });
    }

    // Handle wishlist toggle
    toggleWishlist(button) {
        const heartIcon = button.find('.fa-heart');
        const isAdded = heartIcon.hasClass('fas');

        if (isAdded) {
            heartIcon.removeClass('fas').addClass('far');
            button.removeClass('btn-liked');
            this.showNotification('Removed from wishlist', 'info');
        } else {
            heartIcon.removeClass('far').addClass('fas');
            button.addClass('btn-liked');
            this.showNotification('Added to wishlist!', 'success');
        }
    }

    // Initialize animations
    initAnimations() {
        // Initial fade-in check
        this.checkFadeIn();

        // Set up intersection observer for better performance
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        $(entry.target).addClass('show');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });

            $('.fade-in').each(function() {
                observer.observe(this);
            });
        }
    }

    // Check and trigger fade-in animations
    checkFadeIn() {
        $('.fade-in').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('show');
            }
        });
    }

    // Handle scroll events
    handleScroll() {
        const scrollTop = $(window).scrollTop();

        // Show/hide scroll to top button
        if (scrollTop > 100) {
            $('#scrollTop').fadeIn().css('display', 'flex');
        } else {
            $('#scrollTop').fadeOut();
        }

        // Update active navigation
        this.updateActiveNavigation();

        // Check fade-in animations
        this.checkFadeIn();

        // Add navbar background on scroll
        if (scrollTop > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    }

    // Update active navigation item
    updateActiveNavigation() {
        const scrollDistance = $(window).scrollTop();
        
        $('section').each((i, section) => {
            const sectionTop = $(section).offset().top - 100;
            const sectionBottom = sectionTop + $(section).outerHeight();
            
            if (scrollDistance >= sectionTop && scrollDistance < sectionBottom) {
                const sectionId = $(section).attr('id');
                $('.navbar-nav .nav-link').removeClass('active');
                $(`.navbar-nav .nav-link[href="#${sectionId}"]`).addClass('active');
            }
        });
    }

    // Animate tab switching
    animateTabSwitch() {
        $('.product-item').addClass('filtering');
        setTimeout(() => {
            $('.product-item').removeClass('filtering');
            this.checkFadeIn();
        }, 300);
    }

    // Handle contact form
    handleContactForm() {
        const form = document.getElementById('contactForm');
        
        if (form.checkValidity()) {
            const formData = this.getFormData();
            this.submitContactForm(formData);
        } else {
            form.classList.add('was-validated');
            this.showNotification('Please fill in all required fields correctly.', 'error');
        }
    }

    // Get form data
    getFormData() {
        return {
            name: $('#contactName').val(),
            email: $('#contactEmail').val(),
            phone: $('#contactPhone').val(),
            company: $('#contactCompany').val(),
            message: $('#contactMessage').val(),
            product: this.currentProduct ? this.currentProduct.title : 'General Inquiry',
            timestamp: new Date().toISOString()
        };
    }

    // Submit contact form
    submitContactForm(formData) {
        // Simulate form submission
        this.showNotification('Your quote request has been submitted successfully!', 'success');
        
        // Reset form
        const form = document.getElementById('contactForm');
        form.reset();
        form.classList.remove('was-validated');
        $('#contactModal').modal('hide');

        // Track event
        this.trackEvent('Quote Requested', {
            product_name: formData.product,
            contact_method: 'form'
        });

        // In production, you would send data to server:
        // this.sendToServer(formData);
    }

    // Show notification
    showNotification(message, type = 'info') {
        $('.custom-notification').remove();
        
        const icons = {
            'success': 'fas fa-check-circle',
            'error': 'fas fa-exclamation-circle',
            'warning': 'fas fa-exclamation-triangle',
            'info': 'fas fa-info-circle'
        };

        const classes = {
            'success': 'alert-success',
            'error': 'alert-danger',
            'warning': 'alert-warning',
            'info': 'alert-info'
        };
        
        const notification = $(`
            <div class="custom-notification alert ${classes[type]} alert-dismissible fade show" 
                 style="position: fixed; top: 20px; right: 20px; z-index: 9999; min-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <i class="${icons[type]} me-2"></i>
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `);
        
        $('body').append(notification);
        
        setTimeout(() => {
            notification.alert('close');
        }, 5000);
    }

    // Track events (placeholder for analytics)
    trackEvent(eventName, properties = {}) {
        console.log('Event tracked:', eventName, properties);
        
        // In production, integrate with your analytics service:
        // gtag('event', eventName, properties);
        // or analytics.track(eventName, properties);
    }

    // Error handling for images
    handleImageError(img) {
        $(img).attr('src', 'https://via.placeholder.com/400x250/f0f0f0/666?text=Image+Not+Available');
    }
}

// Modal action functions (global scope for onclick handlers)
window.openContactForm = function() {
    $('#productModal').modal('hide');
    setTimeout(() => {
        $('#contactModal').modal('show');
    }, 300);
};

window.contactWhatsApp = function() {
    const website = window.rssWebsite;
    const productName = website.currentProduct ? website.currentProduct.title : 'RSS Accessories';
    const message = `Hi! I'm interested in your ${productName}. Could you please provide more details and pricing?`;
    const whatsappURL = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    website.trackEvent('WhatsApp Contact', {
        product_name: productName,
        contact_method: 'whatsapp'
    });
};

window.submitContactForm = function() {
    window.rssWebsite.handleContactForm();
};

// Handle image loading errors
$(document).on('error', 'img', function() {
    window.rssWebsite.handleImageError(this);
});

// Initialize website
window.rssWebsite = new RSSWebsite();