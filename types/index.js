const hash = [
    ['ref_agency', 1],
    ['ref_lot', 2],
    ['ad_type', 3, getAdType],
    ['lot_type', 4, getPlotType],
    ['lot_subtype', 4, getPlotSubtype],
    ['address.zipcode', 5],
    ['address.city', 6],
    ['address.country', 7],
    ['address.street', 8],
    ['address.district', 9],
    ['price.amount', 11, getPrice],
    ['price.fees', 23],
    ['price.fees_agency', 15],
    ['title', 20],
    ['description', 21],
    ['availability.start', 22],
    ['availability.end', 195, val => val === '0' ? undefined : val],
    ['details.surface', 16],
    ['details.surface_land', 17], // 🔴
    ['details.num_rooms', 18], // 🔴
    ['details.num_bedrooms', 19], // 🔴
    ['details.floor', 24],
    ['details.num_floors', 25],
    ['details.with_furniture', 26],
    ['details.num_bathrooms', 29], // 🔴
    ['details.num_half_bathrooms', 30], // 🔴
    ['details.num_wc', 31], // 🔴
    ['details.wc_separate', 32], // 🔴
    ['details.heating_type', 33],
    ['details.kitchen_type', 34], // 🔴
    ['details.num_balconies', 39], // 🔴
    ['details.has_elevator', 41],
    ['details.has_cellar', 42], // 🔴
    ['details.num_parkings', 43], // 🔴
    ['details.num_boxes', 44], // 🔴
    ['details.digicode', 45],
    ['details.interphone', 46],
    ['details.has_concierge', 47],
    ['details.terrace', 48], // 🔴
    ['details.num_double_beds', 59],
    ['details.num_single_beds', 60],
    ['details.has_alarm', 61],
    ['details.has_tv_cable', 62],
    ['details.is_quiet', 63],
    ['details.has_climatisation', 64],
    ['details.has_swimming_pool', 65],
    ['details.handicapped_compatible', 66],
    ['details.animals_accepted', 67],
    ['details.has_fireplace', 68],
    ['details.has_freezer', 69],
    ['details.has_oven', 70],
    ['details.has_dishwasher', 71],
    ['details.has_microwave', 72],
    ['details.has_cupboards', 73],
    ['details.is_open_view', 78],
    ['details.is_duplex', 81],
    ['details.photo_panoramic', 103],
    ['details.virtual_visit_url', 104],
    ['details.photos', null, getPhotos],
    ['director.tel', 105],
    ['director.name', 106],
    ['director.email', 107],
    ['owner.ref_patrimoine', 112],
    ['owner.lastname', 114],
    ['owner.firstname', 115],
    ['owner.address', 117],
    ['owner.zipcode', 118],
    ['owner.city', 119],
    ['owner.tel', 120],
    ['owner.comment', 121]
  ]
