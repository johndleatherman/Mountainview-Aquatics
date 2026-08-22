document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('product-grid');
  if (!grid) return;

  // Fallback data embedded for file:// protocol where fetch is blocked
  var FALLBACK_PRODUCTS = [
  {
    "id": "red-cherry-shrimp",
    "name": "Red Cherry Shrimp",
    "scientificName": "Neocaridina davidi",
    "price": "$8.99",
    "priceNote": "per specimen",
    "image": "images/redCherry.webp",
    "category": "Invertebrate",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Invertebrate",
        "class": "bg-secondary-fixed text-on-secondary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Classic bright red shrimp. Hardy, prolific, and perfect for beginners.",
    "descriptionLong": "The Red Cherry Shrimp is the most popular freshwater shrimp for beginners. Vibrant red coloration, active algae grazing, and easy breeding make it ideal for planted nano tanks and community setups.",
    "detailedDescription": "Selectively bred from wild Neocaridina davidi, the Red Cherry strain is renowned for its hardiness and adaptability. Unlike sensitive Caridina species, cherries tolerate a wide range of parameters and breed readily in stable freshwater aquariums.",
    "bullets": [
      "Extremely hardy and adaptable; thrives in 65-80F, pH 6.5-8.0.",
      "Excellent algae and biofilm grazer - keep in colonies of 10+ for best color and behavior."
    ],
    "link": "product.html?id=red-cherry-shrimp",
    "cardButtonText": "View Details",
    "cardButtonType": "link",
    "detailBadges": [
      {
        "text": "Beginner Friendly",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Neocaridina",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "65-80°F",
      "ph": "6.5-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Invertebrates",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "blue-cherry-shrimp",
    "name": "Blue Cherry Shrimp",
    "scientificName": "Neocaridina davidi",
    "price": "$9.99",
    "priceNote": "per specimen",
    "image": "images/blueCherry.jpg",
    "category": "Invertebrate",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Invertebrate",
        "class": "bg-secondary-fixed text-on-secondary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Rich velvety blue morph. Stunning contrast against green mosses and driftwood.",
    "descriptionLong": "Blue Cherry Shrimp (Blue Velvet) offers a deep, translucent cobalt color that pops in planted aquariums. As hardy as red cherries, they add a rare blue palette to any shrimp colony.",
    "detailedDescription": "A line-bred blue morph of Neocaridina davidi, Blue Velvets display color ranging from light sky blue to deep sapphire. Color intensity improves with dark substrate and high-quality biofilm-rich environments.",
    "bullets": [
      "Same hardy care as Red Cherry; stable parameters prevent color fading.",
      "Dark substrate and green plants enhance blue contrast dramatically."
    ],
    "link": "product.html?id=blue-cherry-shrimp",
    "cardButtonText": "View Details",
    "cardButtonType": "link",
    "detailBadges": [
      {
        "text": "Blue Velvet",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Neocaridina",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "65-80°F",
      "ph": "6.5-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Invertebrates",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "orange-cherry-shrimp",
    "name": "Orange Cherry Shrimp",
    "scientificName": "Neocaridina davidi",
    "price": "$9.99",
    "priceNote": "per specimen",
    "image": "images/orangeCherry.jpg",
    "category": "Invertebrate",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Invertebrate",
        "class": "bg-secondary-fixed text-on-secondary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Vibrant tangerine orange. Energetic grazers that brighten any aquascape.",
    "descriptionLong": "Orange Cherry Shrimp brings a warm tangerine glow to colonies. Hardy and prolific, they are ideal for breeders wanting a bright alternative to red and blue morphs.",
    "detailedDescription": "The Orange Sakura lineage was selectively bred for solid, opaque tangerine coloration with no translucency. They are vigorous breeders and retain color well across generations when kept on mixed colonies separated by color.",
    "bullets": [
      "Do not mix colors if you want to maintain pure orange offspring.",
      "Feed mineral-rich shrimp foods to maintain exoskeleton vibrancy."
    ],
    "link": "product.html?id=orange-cherry-shrimp",
    "cardButtonText": "View Details",
    "cardButtonType": "link",
    "detailBadges": [
      {
        "text": "Tangerine Line",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Neocaridina",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "65-80°F",
      "ph": "6.5-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Invertebrates",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "maui-mosaic-guppies",
    "name": "Maui Mosaic Guppies",
    "scientificName": "Poecilia reticulata",
    "price": "$22.99",
    "priceNote": "per pair",
    "image": "images/MosaicGuppy.jpg",
    "category": "Pair",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Pair",
        "class": "bg-primary-fixed text-on-primary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Sunset mosaics of orange, red, and blue. High-fin show guppies with flowing tails.",
    "descriptionLong": "Maui Mosaic Guppies display intricate mosaic tail patterns blending Hawaiian sunset hues. High-quality lines with large dorsal fins and consistent patterning make them a showpiece pair.",
    "detailedDescription": "Developed from mosaic tail lines, Mauis combine metallic bodies with intricate reticulated tail patterns. Males show the most color; females are larger and golden-hued, producing large drop of fry monthly.",
    "bullets": [
      "Ideal for livebearer breeders; provide floating plants for fry cover.",
      "Hardy across wide parameters; 72-82F, pH 7.0-8.0 recommended."
    ],
    "link": "product.html?id=maui-mosaic-guppies",
    "cardButtonText": "View Details",
    "cardButtonType": "button",
    "detailBadges": [
      {
        "text": "Mosaic Tail",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "High Fin",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "72-82°F",
      "ph": "7.0-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Tropical Fish",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "koi-angelfish",
    "name": "Koi Angelfish",
    "scientificName": "Pterophyllum scalare",
    "price": "$18.99",
    "priceNote": "per specimen",
    "image": "images/koiangel.webp",
    "category": "Cichlid",
    "difficulty": "Moderate",
    "badges": [
      {
        "text": "Cichlid",
        "class": "bg-secondary-fixed text-on-secondary-fixed"
      },
      {
        "text": "Moderate",
        "class": "bg-tertiary-fixed text-on-tertiary-fixed"
      }
    ],
    "description": "Elegant orange, black, and white koi pattern. Graceful centerpiece angelfish.",
    "descriptionLong": "Koi Angelfish are prized for their vivid orange, white, and black marbling reminiscent of koi carp. Tall, graceful fins and calm demeanor make them the centerpiece of community and planted aquariums.",
    "detailedDescription": "A domestic strain of Pterophyllum scalare, Koi Angelfish were selectively bred for koi-like blotching. They grow to 6 inches tall and pair bond strongly, exhibiting attentive parental care when spawning on vertical surfaces.",
    "bullets": [
      "Provide tall tanks 20+ gallons and vertical driftwood or Amazon swords.",
      "Peaceful for a cichlid but territorial when breeding; keep with tetras and corys."
    ],
    "link": "product.html?id=koi-angelfish",
    "cardButtonText": "View Details",
    "cardButtonType": "link",
    "detailBadges": [
      {
        "text": "Koi Strain",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Centerpiece",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "76-84°F",
      "ph": "6.5-7.5",
      "care": "Moderate"
    },
    "breadcrumbCategory": "Cichlids",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "yozakura-gold-medaka",
    "name": "Yozakura Gold Medaka",
    "scientificName": "Oryzias latipes",
    "price": "$14.99",
    "priceNote": "per specimen",
    "image": "images/Yozakura.jpg",
    "category": "Medaka",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Medaka",
        "class": "bg-primary-fixed text-on-primary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Luminous gold with cherry blossom sheen. Cold-hardy Japanese ricefish.",
    "descriptionLong": "Yozakura Gold Medaka glows with metallic gold and soft pink highlights, evoking cherry blossoms at night. Extremely hardy, they thrive indoors or in outdoor patio ponds year-round.",
    "detailedDescription": "Yozakura is a premium Japanese medaka variety selected for intense gold luster. Medaka tolerate wide temperature swings and are ideal for outdoor tubs, nano tanks, and beginner breeders due to their egg-scattering ease.",
    "bullets": [
      "Tolerates 50-85F; perfect for unheated tanks and outdoor ponds.",
      "Scatter eggs daily among mops or mosses; fry grow quickly on infusoria."
    ],
    "link": "product.html?id=yozakura-gold-medaka",
    "cardButtonText": "View Details",
    "cardButtonType": "button",
    "detailBadges": [
      {
        "text": "Yozakura Line",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Cold Hardy",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "60-80°F",
      "ph": "7.0-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Medaka",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "sapphire-medaka",
    "name": "Sapphire Medaka",
    "scientificName": "Oryzias latipes",
    "price": "$14.99",
    "priceNote": "per specimen",
    "image": "images/BlueMedaka.webp",
    "category": "Medaka",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Medaka",
        "class": "bg-primary-fixed text-on-primary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Deep metallic blue sheen. Rare sapphire medaka for collectors.",
    "descriptionLong": "Sapphire Medaka showcases a striking metallic blue dorsal sheen that flashes under sunlight. A rare collector strain that remains hardy and adaptable like all Japanese ricefish.",
    "detailedDescription": "Bred for intense blue iridescence, Sapphire Medaka retains the species' legendary hardiness. Their blue sheen intensifies under natural sunlight, making them favorites for outdoor patio ponds and window aquariums.",
    "bullets": [
      "Keep in groups of 6+; peaceful and active near the surface.",
      "Outdoor sunlight enhances sapphire iridescence; provide floating plants for shade."
    ],
    "link": "product.html?id=sapphire-medaka",
    "cardButtonText": "View Details",
    "cardButtonType": "button",
    "detailBadges": [
      {
        "text": "Collector Strain",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Sapphire Sheen",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "60-80°F",
      "ph": "7.0-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Medaka",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "assorted-medaka",
    "name": "Assorted Medaka",
    "scientificName": "Oryzias latipes",
    "price": "$39.99",
    "priceNote": "per 6pk",
    "image": "images/assortedRicefish.webp",
    "category": "School (6pk)",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "School (6pk)",
        "class": "bg-secondary-fixed text-on-secondary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Mix of gold, sapphire, and orange medaka. Vibrant variety pack for ponds.",
    "descriptionLong": "Assorted Medaka 6-pack includes a vibrant mix of gold, white, orange, and sapphire ricefish. Perfect for starting a diverse medaka colony quickly with maximum genetic variety.",
    "detailedDescription": "Ideal starter colony, this assorted pack combines multiple premium medaka color morphs. All are Japanese ricefish hardy to cold and heat, easy to breed, and excellent for outdoor tubs, biotope tanks, and educational setups.",
    "bullets": [
      "Great value starter colony; expect mixed fry colors in next generation.",
      "Hardy to 50-85F; thrives in ponds, tubs, or unfiltered nano tanks with plants."
    ],
    "link": "product.html?id=assorted-medaka",
    "cardButtonText": "View Details",
    "cardButtonType": "button",
    "detailBadges": [
      {
        "text": "Variety Pack",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Colony Starter",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "60-80°F",
      "ph": "7.0-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Medaka",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "fancy-sunrise-high-fin-platy",
    "name": "Fancy Sunrise High Fin Platy",
    "scientificName": "Xiphophorus maculatus",
    "price": "$12.99",
    "priceNote": "per pair",
    "image": "images/sunrisePlaty.webp",
    "category": "Pair",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Pair",
        "class": "bg-primary-fixed text-on-primary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Gradient sunrise orange to yellow with elegant high dorsal fin.",
    "descriptionLong": "Fancy Sunrise High Fin Platy features a warm sunrise gradient and dramatically extended dorsal fin. Peaceful, prolific, and hardy, they are a top pick for community tanks and livebearer lovers.",
    "detailedDescription": "High Fin is a dominant trait selectively bred to produce a sail-like dorsal. Combined with the Sunrise sunset gradient, these platies offer constant color and activity while being famously easy to keep and breed.",
    "bullets": [
      "Livebearer; provide dense plants for fry and expect monthly drops.",
      "Peaceful community fish; keeps 70-82F, pH 7.0-8.2."
    ],
    "link": "product.html?id=fancy-sunrise-high-fin-platy",
    "cardButtonText": "View Details",
    "cardButtonType": "button",
    "detailBadges": [
      {
        "text": "High Fin",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Sunrise Gradient",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "70-82°F",
      "ph": "7.0-8.2",
      "care": "Easy"
    },
    "breadcrumbCategory": "Tropical Fish",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "santa-maria-endler",
    "name": "Santa Maria Endler",
    "scientificName": "Poecilia wingei",
    "price": "$15.99",
    "priceNote": "per pair",
    "image": "images/Santa-Maria-Endler_1200x.webp",
    "category": "Pair",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Pair",
        "class": "bg-primary-fixed text-on-primary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Intense red and black swordtail pattern. Pure Santa Maria bleeding heart Endler.",
    "descriptionLong": "Santa Maria Endlers are synonymous with bleeding-heart red chests and neon green accents. Pure N-class line, tiny and hyperactive with unparalleled color for nano tanks.",
    "detailedDescription": "P. wingei Santa Maria is a historic pure Endler strain prized for its blood-red chest and double swordtail. Less than half the size of guppies, they are perfect nano fish that will not hybridize concerns if kept species-only.",
    "bullets": [
      "Nano gem; keep in species-only or with shrimp to maintain pure line.",
      "Prolific livebearer; males display constantly to females."
    ],
    "link": "product.html?id=santa-maria-endler",
    "cardButtonText": "View Details",
    "cardButtonType": "button",
    "detailBadges": [
      {
        "text": "N-Class Pure",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Bleeding Heart",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "72-82°F",
      "ph": "7.0-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Tropical Fish",
    "breadcrumbCategoryLink": "index.html#featured"
  },
  {
    "id": "blonde-koi-guppy",
    "name": "Blonde Koi Guppy",
    "scientificName": "Poecilia reticulata",
    "price": "$18.99",
    "priceNote": "per pair",
    "image": "images/BlondeKoiGuppy.jpg",
    "category": "Pair",
    "difficulty": "Easy",
    "badges": [
      {
        "text": "Pair",
        "class": "bg-primary-fixed text-on-primary-fixed"
      },
      {
        "text": "Easy",
        "class": "bg-green-100 text-green-800"
      }
    ],
    "description": "Blonde base with vivid koi red cap and fins. Show-quality koi guppy.",
    "descriptionLong": "Blonde Koi Guppies contrast a pale blonde body with brilliant koi red caps, fins, and tails. A show line with stable koi patterning and energetic display.",
    "detailedDescription": "Blonde is a recessive base that lightens the body, allowing koi red to dominate the head and fins. This line is selected for clean blonde bases without spotting and dense, opaque red coverage in males.",
    "bullets": [
      "Keep blonde base pure; cull dark-bodied offspring to maintain line.",
      "Hardy and active; ideal for breeding racks and display tanks alike."
    ],
    "link": "product.html?id=blonde-koi-guppy",
    "cardButtonText": "View Details",
    "cardButtonType": "button",
    "detailBadges": [
      {
        "text": "Koi Line",
        "class": "bg-secondary text-on-secondary"
      },
      {
        "text": "Blonde Base",
        "class": "bg-surface/80 backdrop-blur-sm text-primary"
      }
    ],
    "stockStatus": "In Stock & Ready to Ship",
    "specs": {
      "temp": "72-82°F",
      "ph": "7.0-8.0",
      "care": "Easy"
    },
    "breadcrumbCategory": "Tropical Fish",
    "breadcrumbCategoryLink": "index.html#featured"
  }
];

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  function escapeAttr(str) {
    return escapeHtml(str).replace(/`/g, '&#96;');
  }

  function renderProducts(products) {
    if (!Array.isArray(products) || products.length === 0) {
      grid.innerHTML = '<p class="text-on-surface-variant text-body-md col-span-full text-center py-8">No products available.</p>';
      return;
    }
    grid.innerHTML = products.map(function (p) {
      var badgesHtml = (p.badges || []).map(function (b) {
        return '<span class="' + b.class + ' px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">' + escapeHtml(b.text) + '</span>';
      }).join('');

      var quickViewLink = p.link || ('product.html?id=' + encodeURIComponent(p.id));
      var titleLink = quickViewLink;
      var buttonText = 'View Details';
      var zoomOutIds = ['orange-cherry-shrimp', 'yozakura-gold-medaka', 'sapphire-medaka', 'fancy-sunrise-high-fin-platy'];
      var isZoomOut = zoomOutIds.indexOf(p.id) !== -1;
      var imgClass = isZoomOut ? 'w-full h-full object-contain p-2 bg-black transition-transform duration-700 group-hover:scale-105' : 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110';

      return '' +
        '<div class="product-card group relative flex flex-col h-full bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">' +
          '<div class="relative overflow-hidden aspect-square">' +
            '<a href="' + escapeAttr(titleLink) + '"><img class="' + imgClass + '" src="' + escapeAttr(p.image) + '" alt="' + escapeAttr(p.name) + '"></a>' +
            '<div class="absolute top-4 left-4 flex gap-2">' + badgesHtml + '</div>' +
          '</div>' +
          '<div class="p-6 flex flex-col flex-1">' +
            '<div class="flex justify-between items-start mb-2">' +
              '<a href="' + escapeAttr(titleLink) + '" class="font-headline-md text-headline-md text-on-surface hover:text-secondary transition-colors">' + escapeHtml(p.name) + '</a>' +
              '<span class="text-secondary font-bold text-headline-md">' + escapeHtml(p.price) + '</span>' +
            '</div>' +
            '<p class="text-on-surface-variant text-body-md line-clamp-2 mb-6 flex-1">' + escapeHtml(p.description) + '</p>' +
            '<a href="' + escapeAttr(quickViewLink) + '" class="w-full py-3 mt-auto border border-primary text-primary rounded-lg font-label-md hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center text-center min-h-[48px]">' + escapeHtml(buttonText) + '</a>' +
          '</div>' +
        '</div>';
    }).join('');
  }

  function showError(err) {
    console.error(err);
    if (FALLBACK_PRODUCTS && FALLBACK_PRODUCTS.length) {
      console.warn('Fetch failed (likely file:// protocol), rendering fallback products.');
      renderProducts(FALLBACK_PRODUCTS);
      return;
    }
    grid.innerHTML = '<p class="text-error text-body-md col-span-full text-center py-8">Failed to load products. Please try again later.</p>';
  }

  grid.innerHTML = '<p class="text-on-surface-variant text-body-md col-span-full text-center py-8">Loading products...</p>';

  fetch('products.json', { cache: 'no-store' })
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to load products.json: ' + res.status);
      return res.json();
    })
    .then(function (products) {
      renderProducts(products);
    })
    .catch(function (err) {
      if (window.location.protocol === 'file:') {
        showError(err);
        return;
      }
      fetch('./products.json', { cache: 'no-store' })
        .then(function (r2) {
          if (!r2.ok) throw new Error('Retry failed: ' + r2.status);
          return r2.json();
        })
        .then(function (products2) { renderProducts(products2); })
        .catch(function (err2) { showError(err2); });
    });
});
