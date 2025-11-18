/**
 * RSS Accessories - Product Data
 * Contains all product information and configurations
 */

const PRODUCT_DATA = {
leatherPatch: {
    id: 'leatherPatch',
    title: 'Premium Leather Patches',
    category: 'Fashion Accessories',
    type: 'accessories',
    badge: 'High-End Branding',
    image: 'images/home/products/Authentic leather patch.jpeg',
    description: 'High-quality leather patches designed for premium garment branding. Crafted using genuine and synthetic leather with precision embossing, debossing, laser cutting, and multi-tone finishing. Ideal for denim, jackets, bags, uniforms, and high-end apparel labels.',
    features: [
        'Genuine & PU Leather Options',
        'Emboss/Deboss & Multi-Depth Effects',
        'Laser Cutting Precision',
        'Heat Press / Stitch-On Variants',
        'Wash-Resistant & Long-Lasting',
        'Custom Shapes & Multi-Color Finishing'
    ],
    specifications: {
        'Material': 'Genuine Leather / PU Leather / Synthetic Leather',
        'Thickness': '1.2mm to 3.0mm',
        'Branding Methods': 'Emboss, Deboss, Laser Cut, Screen Print, Foil Stamp, Edge Painting',
        'Attachment Options': 'Sew-on, Heat Seal, Velcro, Adhesive Backing',
        'Sizes': 'Fully Custom (Square, Rectangle, Oval, Freeform Shapes)',
        'Colors': 'Natural Tones / Custom Pantone Colors',
        'MOQ': '1000 pieces/design',
        'Lead Time': '12–18 Days',
        'Packaging': 'Custom Cards / Bundled Packs / Bulk'
    }
},

rubberLabel: {
    id: 'rubberLabel',
    title: 'Premium Rubber Labels',
    category: 'Fashion Accessories',
    type: 'accessories',
    badge: 'High-Durability Branding',
    image: 'images/home/products/Different type rubber label@1.jpeg',
    description: 'High-performance rubber labels crafted from premium PVC, Silicone, or TPU materials. Designed for bold, long-lasting apparel branding with vibrant colors, 2D/3D effects, and superior flexibility. Ideal for jackets, denim, bags, sportswear, and outdoor garments.',

    features: [
        'Soft & Flexible Rubber Material',
        '2D, 2.5D & 3D Multi-Layer Effects',
        'Highly Durable & Weather Resistant',
        'Vibrant Multi-Color Molding',
        'Custom Shapes & Modern Designs',
        'Waterproof, UV-Resistant & Wash-Resistant',
        'Multiple Attachment Options',
        'Ideal for Outdoor & Sportswear Branding'
    ],

    specifications: {
        'Material': 'PVC Rubber / Silicone Rubber / TPU Rubber',
        'Branding Methods': '2D Mold, 3D Mold, Emboss, Deboss, Multi-Layer Injection',
        'Attachment Options': 'Sew-On, Heat Seal, Velcro, Adhesive Backing',
        'Sizes': 'Fully Custom (Any Shape, Any Dimension)',
        'Colors': 'Single Color / Multi-Color / Pantone Color Matching',
        'Thickness': '1.0mm – 3.0mm',
        'Hardness': '50–70 Shore A (depending on material)',
        'Temperature Resistance': '-40°C to +200°C',
        'Durability': 'Waterproof, Crack-Resistant, UV Resistant, Wash-Resistant',
        'MOQ': '1000–1500 pieces per design',
        'Lead Time': '10–18 Days',
        'Packaging': 'Poly Bag / Bulk Pack / Custom Cards'
    }
},

twillTape: {
    id: 'twillTape',
    title: 'Premium Twill Tape',
    category: 'Fashion Accessories',
    type: 'accessories',
    badge: 'High-Quality Finishing',
    image: 'images/home/products/Twill tape.jpeg',
    description: 'Durable and high-quality twill tape designed for garment reinforcement, branding, binding, and decorative finishing. Produced with precision weaving to ensure consistent texture, strength, and premium appearance. Ideal for apparel, uniforms, home textiles, bags, and packaging applications.',

    features: [
        'High-Strength Twill Weave Construction',
        'Soft & Smooth Texture',
        'Available in Cotton, Polyester & Blended Materials',
        'Custom Width, Color & Printing Available',
        'Wash-Resistant & Long-Lasting',
        'Ideal for Binding, Reinforcement & Decoration',
        'Eco-Friendly Options Available'
    ],

    specifications: {
        'Material': '100% Cotton / Polyester / Cotton-Poly Blend',
        'Weave Type': 'Twill Weave (Diagonal Pattern)',
        'Width Options': '6mm, 10mm, 12mm, 15mm, 20mm, 25mm, 30mm (Custom Available)',
        'Thickness': '0.5mm – 1.2mm',
        'Color Options': 'Custom Pantone Match, Solid Colors, Natural Dye Options',
        'Printing Options': 'Screen Print, Heat Transfer Print, Woven Branding',
        'Finishing': 'Soft, Matte, Mercerized, Anti-Shrink',
        'Durability': 'Washable, Non-Fraying, Tear-Resistant',
        'Applications': 'Garments, Labels, Uniforms, Bags, Packaging, Home Textiles',
        'MOQ': '3000 meters per color/size',
        'Lead Time': '10–14 Days',
        'Packaging': 'Rolls / Spools / Custom Branding Packs'
    }
},

wovenLabel: {
    id: 'wovenLabel',
    title: 'Premium Woven Labels',
    category: 'Fashion Accessories',
    type: 'accessories',
    badge: 'High-End Branding',
    image: 'images/home/products/oven lable.jpeg',

    description: 'Premium woven labels engineered for high-quality garment branding. Manufactured using computerized looms to ensure clarity, durability, and fine detailing. Ideal for neck labels, brand labels, care labels, and decorative garment accents. Offers superior color fastness, soft edges, and customizable weaves.',

    features: [
        'High-Density Weaving Technology',
        'Ultra-Clear Text & Logo Details',
        'Soft Edges for Skin Comfort',
        'Long-Lasting Color Fastness',
        'Custom Sizes, Colors & Weave Styles',
        'Available in Satin, Damask & Taffeta',
        'Heat Cut, Ultrasonic Cut & Fold Options',
        'Eco-Friendly Yarn Options available'
    ],

    specifications: {
        'Material': 'Polyester Woven Yarn / Recycled Polyester',
        'Weave Types': 'Damask, Satin, Taffeta, High-Density Damask',
        'Cutting Methods': 'Heat Cut, Laser Cut, Ultrasonic Cut',
        'Folding Styles': 'End Fold, Center Fold, Book Fold, Manhattan Fold, Mitre Fold',
        'Color Options': 'Up to 12 Colors / Pantone Matched',
        'Size Range': 'Fully Custom (Standard: 10mm–60mm Width)',
        'Finish Options': 'Softening, Anti-Fray, Starch Finish',
        'Edges': 'Soft Edge / Woven Edge / Heat-Sealed Edge',
        'Durability': 'Wash-Resistant, Fade-Resistant, High-Stretch Tolerance',
        'Applications': 'Neck Label, Brand Label, Care Label, Decorative Patch',
        'MOQ': '3000 pieces per design',
        'Lead Time': '12–16 Days',
        'Packaging': 'Bundle Pack / Poly Bag / Custom Branding Pack'
    }
},


drawstring: {
    id: 'drawstring',
    title: 'Premium Drawstring Cords',
    category: 'Fashion Accessories',
    type: 'accessories',
    badge: 'Customizable Branding',
    image: 'images/home/products/Drawstring .jpeg',

    description: 'High-quality drawstring cords designed for hoodies, joggers, shorts, bags, and sportswear. Manufactured with premium materials and customizable options including colors, tips, patterns, and branding finishes.',

    features: [
        'High-Strength Braided or Knitted Construction',
        'Soft, Durable & Comfortable Feel',
        'Multiple Material Options',
        'Custom Color, Pattern & Printing',
        'Premium Metal/Plastic/Heat-Shrink Tips',
        'Long-Lasting & Wash-Resistant',
        'Ideal for Apparel & Bags'
    ],

    specifications: {
        'Material': 'Polyester / Cotton / Nylon / Recycled Yarn',
        'Construction Type': 'Braided / Knitted / Flat / Round',
        'Diameter Options': '4mm, 6mm, 8mm, 10mm (Custom Available)',
        'Length': 'Custom (As per requirement)',
        'Color Options': 'Pantone Matched / Solid / Mélange / Custom Pattern',
        'Tip Options': 'Metal Aglet, Plastic Aglet, Silicone Tip, Heat-Shrink',
        'Branding Options': 'Silicone Print, Screen Print, Woven Pattern, Engraved Metal Tips',
        'Durability': 'Wash-Resistant, Fade-Proof, Anti-Fray',
        'Applications': 'Hoodies, Joggers, Shorts, Bags, Shoes, Sportswear',
        'MOQ': '2000 pieces per color/design',
        'Lead Time': '10–15 Days',
        'Packaging': 'Bundle Pack / Poly Bag / Custom Cards'
    }
},

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
    factoryaddress: 'Plot #270 Midha Market, Giridhara, Fatullah, Narayanganj',
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