/**
 * RSS Accessories - Product Data
 * Contains all product information and configurations
 */

const PRODUCT_DATA = {
    packaging: {
        id: 'packaging',
        title: 'General Packaging',
        category: 'Packaging Solutions',
        type: 'packaging',
        badge: 'Eco-Friendly',
        image: 'images/home/products/packaging.jpg',
        description: 'Comprehensive packaging solutions designed to protect and present your products professionally with eco-friendly materials and sustainable manufacturing processes.',
        features: [
            'Premium Quality Materials',
            'Eco-Friendly & Recyclable',
            'Custom Sizes Available',
            'Durable Protection',
            'Professional Presentation',
            'Cost-Effective Solutions'
        ],
        specifications: {
            'Material': 'Recyclable Cardboard/Plastic',
            'Sizes Available': 'Custom & Standard',
            'Colors': 'Full Color Printing',
            'MOQ': '500 pieces',
            'Lead Time': '7-10 Days',
            'Certifications': 'ISO 9001, FSC Certified'
        }
    },

    threads: {
        id: 'threads',
        title: 'Premium Sewing Threads',
        category: 'Sewing Materials',
        type: 'accessories',
        badge: 'Premium Quality',
        image: 'images/home/products/s-thread.jpg',
        description: 'High-quality sewing threads engineered for durability and perfect stitching results. Available in multiple colors and materials to suit all your textile needs.',
        features: [
            'High Tensile Strength',
            'Color Fast Technology',
            '200+ Color Options',
            'Multiple Deniers Available',
            'Industrial Grade Quality',
            'Lint-Free Performance'
        ],
        specifications: {
            'Material': 'Polyester/Cotton Blend',
            'Denier': '150D to 600D',
            'Colors': '200+ Standard Colors',
            'MOQ': '100 Cones',
            'Lead Time': '5-7 Days',
            'Packaging': 'Cones/Bobbins'
        }
    },

    hangers: {
        id: 'hangers',
        title: 'Premium Hangers',
        category: 'Display Solutions',
        type: 'accessories',
        badge: 'Stylish Design',
        image: 'images/home/products/hanger.jpg',
        description: 'Stylish and durable hangers crafted from premium materials. Perfect for retail display and garment presentation with various designs and finishes.',
        features: [
            'Multiple Material Options',
            'Elegant Design',
            'Retail Display Ready',
            'Durable Construction',
            'Custom Branding Available',
            'Non-Slip Features'
        ],
        specifications: {
            'Material': 'Wood/Plastic/Metal',
            'Sizes': 'Adult & Child Sizes',
            'Colors': 'Natural/Black/White/Custom',
            'MOQ': '1000 pieces',
            'Lead Time': '10-12 Days',
            'Finish': 'Smooth/Textured'
        }
    },

    polybags: {
        id: 'polybags',
        title: 'Premium Poly Bags',
        category: 'Protective Packaging',
        type: 'packaging',
        badge: 'Versatile',
        image: 'images/home/products/poly-bag.jpg',
        description: 'High-quality poly bags designed for optimal garment protection. Available in various sizes and specifications with excellent clarity and durability.',
        features: [
            'Crystal Clear Transparency',
            'Multiple Size Options',
            'Strong Seal Strength',
            'Static Resistant',
            'Custom Printing Available',
            'Food Grade Options'
        ],
        specifications: {
            'Material': 'LDPE/HDPE',
            'Thickness': '25-100 Microns',
            'Sizes': '6"×9" to 24"×36"',
            'MOQ': '5000 pieces',
            'Lead Time': '3-5 Days',
            'Printing': 'Up to 6 Colors'
        }
    },

    buttons: {
        id: 'buttons',
        title: 'Premium Buttons',
        category: 'Fashion Accessories',
        type: 'accessories',
        badge: 'Custom Design',
        image: 'images/home/products/button.jpg',
        description: 'Exquisite buttons crafted with precision and attention to detail. Available in various materials, designs, and finishes to enhance your garment aesthetics.',
        features: [
            'Custom Design Options',
            'Multiple Materials',
            'Precision Crafted',
            'Durable Finish',
            'Fashion Forward Designs',
            'Color Matching Service'
        ],
        specifications: {
            'Material': 'Plastic/Metal/Wood/Shell',
            'Sizes': '10L to 60L',
            'Colors': 'Unlimited Custom Options',
            'MOQ': '1440 pieces/design',
            'Lead Time': '15-20 Days',
            'Packaging': 'Cards/Bulk'
        }
    }
};

// Product categories for filtering
const PRODUCT_CATEGORIES = {
    all: 'All Products',
    packaging: 'Packaging',
    accessories: 'Accessories'
};

// Company contact information

const CONTACT_INFO = {
    phone: '+8801660200966',
    email: 'rssaccessories0@gmail.com',
    whatsapp: '8801660200966',
    address: 'House# 17 (2nd Fl), Road# 3/A, Sector # 15/F, Uttara, Dhaka-1230.',
    workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM'
};


// const CONTACT_INFO = {
//     phone: '+880 1660-200966',
//     email: 'rssaccessories0@gmail.com',
//     whatsapp: '+880 1660-200966',
//     address: 'House# 17 (2nd Fl), Road# 3/A, Sector # 15/F, Uttara, Dhaka-1230.',
//     workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM'
// };

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRODUCT_DATA,
        PRODUCT_CATEGORIES,
        CONTACT_INFO
    };
}