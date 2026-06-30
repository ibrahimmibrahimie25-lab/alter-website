const DATA = {
  categories: [
    {"id":1,"name":"Printed","slug":"printed","image":"https://picsum.photos/seed/printed/600/400"},
    {"id":2,"name":"Not Printed","slug":"not-printed","image":"https://picsum.photos/seed/not-printed/600/400"}
  ],
  subcategories: [
    {"id":1,"name":"Anime","slug":"anime","category_id":1},
    {"id":2,"name":"Movies","slug":"movies","category_id":1},
    {"id":3,"name":"Music","slug":"music","category_id":1},
    {"id":4,"name":"Cars","slug":"cars","category_id":1},
    {"id":5,"name":"Religion","slug":"religion","category_id":1},
    {"id":6,"name":"Shirts","slug":"shirts","category_id":2},
    {"id":7,"name":"Pants","slug":"pants","category_id":2}
  ],
  products: [
    {"id":1,"subcategory_id":1,"name":"Anime Classic","slug":"anime-classic","description":"Bold anime-inspired design that brings your favorite characters to life.","price":29.99,"image":"https://picsum.photos/seed/product1/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"White\",\"Navy\"]"},
    {"id":2,"subcategory_id":1,"name":"Anime Premium","slug":"anime-premium","description":"Bold anime-inspired design that brings your favorite characters to life.","price":34.99,"image":"https://picsum.photos/seed/product2/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Gray\",\"Navy\",\"White\",\"Beige\",\"Black\"]"},
    {"id":3,"subcategory_id":1,"name":"Anime Essential","slug":"anime-essential","description":"Bold anime-inspired design that brings your favorite characters to life.","price":39.99,"image":"https://picsum.photos/seed/product3/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\"]"},
    {"id":4,"subcategory_id":1,"name":"Anime Signature","slug":"anime-signature","description":"Bold anime-inspired design that brings your favorite characters to life.","price":44.99,"image":"https://picsum.photos/seed/product4/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Beige\",\"Black\",\"White\"]"},
    {"id":5,"subcategory_id":2,"name":"Movies Classic","slug":"movies-classic","description":"Iconic movie graphics printed on premium fabric for cinephiles.","price":27.99,"image":"https://picsum.photos/seed/product5/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Navy\",\"White\",\"Gray\",\"Black\",\"Beige\"]"},
    {"id":6,"subcategory_id":2,"name":"Movies Premium","slug":"movies-premium","description":"Iconic movie graphics printed on premium fabric for cinephiles.","price":32.99,"image":"https://picsum.photos/seed/product6/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\",\"Navy\",\"Beige\"]"},
    {"id":7,"subcategory_id":2,"name":"Movies Essential","slug":"movies-essential","description":"Iconic movie graphics printed on premium fabric for cinephiles.","price":37.99,"image":"https://picsum.photos/seed/product7/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Beige\",\"Gray\",\"Navy\",\"White\"]"},
    {"id":8,"subcategory_id":2,"name":"Movies Signature","slug":"movies-signature","description":"Iconic movie graphics printed on premium fabric for cinephiles.","price":42.99,"image":"https://picsum.photos/seed/product8/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Gray\",\"Navy\",\"White\",\"Beige\"]"},
    {"id":9,"subcategory_id":3,"name":"Music Classic","slug":"music-classic","description":"Show your rhythm with music-themed apparel designed for true fans.","price":28.99,"image":"https://picsum.photos/seed/product9/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Gray\",\"Navy\",\"Beige\",\"White\"]"},
    {"id":10,"subcategory_id":3,"name":"Music Premium","slug":"music-premium","description":"Show your rhythm with music-themed apparel designed for true fans.","price":33.99,"image":"https://picsum.photos/seed/product10/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Beige\",\"Black\",\"White\",\"Navy\",\"Gray\"]"},
    {"id":11,"subcategory_id":3,"name":"Music Essential","slug":"music-essential","description":"Show your rhythm with music-themed apparel designed for true fans.","price":38.99,"image":"https://picsum.photos/seed/product11/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Gray\",\"Beige\",\"Navy\",\"White\",\"Black\"]"},
    {"id":12,"subcategory_id":3,"name":"Music Signature","slug":"music-signature","description":"Show your rhythm with music-themed apparel designed for true fans.","price":43.99,"image":"https://picsum.photos/seed/product12/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\"]"},
    {"id":13,"subcategory_id":4,"name":"Cars Classic","slug":"cars-classic","description":"Rev up your wardrobe with automotive-inspired prints and designs.","price":31.99,"image":"https://picsum.photos/seed/product13/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Beige\",\"Gray\",\"Navy\",\"White\",\"Black\"]"},
    {"id":14,"subcategory_id":4,"name":"Cars Premium","slug":"cars-premium","description":"Rev up your wardrobe with automotive-inspired prints and designs.","price":36.99,"image":"https://picsum.photos/seed/product14/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"Gray\",\"Navy\",\"Beige\"]"},
    {"id":15,"subcategory_id":4,"name":"Cars Essential","slug":"cars-essential","description":"Rev up your wardrobe with automotive-inspired prints and designs.","price":41.99,"image":"https://picsum.photos/seed/product15/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"White\",\"Black\",\"Gray\",\"Beige\"]"},
    {"id":16,"subcategory_id":4,"name":"Cars Signature","slug":"cars-signature","description":"Rev up your wardrobe with automotive-inspired prints and designs.","price":46.99,"image":"https://picsum.photos/seed/product16/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\",\"Navy\"]"},
    {"id":17,"subcategory_id":5,"name":"Religion Classic","slug":"religion-classic","description":"Faith-inspired apparel with meaningful symbols and elegant typography.","price":26.99,"image":"https://picsum.photos/seed/product17/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\"]"},
    {"id":18,"subcategory_id":5,"name":"Religion Premium","slug":"religion-premium","description":"Faith-inspired apparel with meaningful symbols and elegant typography.","price":31.99,"image":"https://picsum.photos/seed/product18/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\",\"Navy\",\"Gray\"]"},
    {"id":19,"subcategory_id":5,"name":"Religion Essential","slug":"religion-essential","description":"Faith-inspired apparel with meaningful symbols and elegant typography.","price":36.99,"image":"https://picsum.photos/seed/product19/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"White\",\"Black\",\"Gray\",\"Beige\"]"},
    {"id":20,"subcategory_id":5,"name":"Religion Signature","slug":"religion-signature","description":"Faith-inspired apparel with meaningful symbols and elegant typography.","price":41.99,"image":"https://picsum.photos/seed/product20/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\",\"Navy\"]"},
    {"id":21,"subcategory_id":6,"name":"Shirts Classic","slug":"shirts-classic","description":"Clean, minimalist unprinted shirt crafted from premium cotton.","price":24.99,"image":"https://picsum.photos/seed/product21/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"White\",\"Gray\",\"Beige\",\"Navy\"]"},
    {"id":22,"subcategory_id":6,"name":"Shirts Premium","slug":"shirts-premium","description":"Clean, minimalist unprinted shirt crafted from premium cotton.","price":29.99,"image":"https://picsum.photos/seed/product22/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Beige\",\"Gray\",\"Navy\",\"White\"]"},
    {"id":23,"subcategory_id":6,"name":"Shirts Essential","slug":"shirts-essential","description":"Clean, minimalist unprinted shirt crafted from premium cotton.","price":34.99,"image":"https://picsum.photos/seed/product23/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Gray\",\"Navy\",\"White\"]"},
    {"id":24,"subcategory_id":6,"name":"Shirts Signature","slug":"shirts-signature","description":"Clean, minimalist unprinted shirt crafted from premium cotton.","price":39.99,"image":"https://picsum.photos/seed/product24/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\",\"Navy\"]"},
    {"id":25,"subcategory_id":7,"name":"Pants Classic","slug":"pants-classic","description":"Comfortable, well-fitted pants with a clean unprinted finish.","price":39.99,"image":"https://picsum.photos/seed/product25/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Gray\",\"White\"]"},
    {"id":26,"subcategory_id":7,"name":"Pants Premium","slug":"pants-premium","description":"Comfortable, well-fitted pants with a clean unprinted finish.","price":44.99,"image":"https://picsum.photos/seed/product26/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Navy\",\"Black\",\"White\"]"},
    {"id":27,"subcategory_id":7,"name":"Pants Essential","slug":"pants-essential","description":"Comfortable, well-fitted pants with a clean unprinted finish.","price":49.99,"image":"https://picsum.photos/seed/product27/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\",\"Navy\",\"Gray\"]"},
    {"id":28,"subcategory_id":7,"name":"Pants Signature","slug":"pants-signature","description":"Comfortable, well-fitted pants with a clean unprinted finish.","price":54.99,"image":"https://picsum.photos/seed/product28/600/700","sizes":"[\"S\",\"M\",\"L\",\"XL\",\"XXL\"]","colors":"[\"Black\",\"White\",\"Navy\",\"Beige\"]"}
  ]
};

const API = {
  getCategories() {
    return Promise.resolve(DATA.categories);
  },
  getSubcategories(categoryId) {
    const subs = DATA.subcategories.filter(s => s.category_id == categoryId);
    return Promise.resolve(subs);
  },
  getSubcategory(id) {
    const sub = DATA.subcategories.find(s => s.id == id) || null;
    return Promise.resolve(sub);
  },
  getProducts(subcategoryId) {
    const prods = DATA.products.filter(p => p.subcategory_id == subcategoryId);
    return Promise.resolve(prods);
  },
  getProduct(productId) {
    const prod = DATA.products.find(p => p.id == productId) || null;
    return Promise.resolve(prod);
  },
  searchProducts(query) {
    const term = query.trim().toLowerCase();
    const results = DATA.products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
    return Promise.resolve(results);
  },
  placeOrder(items, total) {
    const orders = JSON.parse(localStorage.getItem('kjo_orders') || '[]');
    orders.push({ items, total, created_at: new Date().toISOString() });
    localStorage.setItem('kjo_orders', JSON.stringify(orders));
    return Promise.resolve({ success: true });
  }
};
