const data = [
    {
        package_name: 'super saver 1',
        image_link: 'https://i.ibb.co/HC0SZYY/irina-HP9-d-GIQEik-unsplash.jpg',
        description: 'very attractive to look at',
        price: 450,
        categories: 'flower'

    }
    ,
    {
        package_name: 'super saver 2',
        image_link: 'https://i.ibb.co/kG4YJSK/viviana-rishe-y-Rz-Kmpto-TL0-unsplash.jpg',
        description: 'aesthetic in vibe ',
        price: 350,
        categories: 'flower'

    }
    ,
    {
        package_name: 'super saver 3',
        image_link: 'https://i.ibb.co/j8dN1gr/raychan-z-IAGCx-JDpx-E-unsplash.jpg',
        description: 'superb in look ',
        price: 250,
        categories: 'flower'

    }
    ,
    {
        package_name: 'super saver 4',
        image_link: 'https://i.ibb.co/t3VZvP9/chaewon-lee-Df4b-Io-LSJCs-unsplash.jpg',
        description: 'excellent in look',
        price: 150,
        categories: 'flower'

    }
    ,
    {
        package_name: 'super saver 5',
        image_link: 'https://i.ibb.co/XJC2XmK/kaitlyn-chow-BKNFx3n-UHQo-unsplash.jpg',
        description: 'very classy indeed',
        price: 650,
        categories: 'flower'

    }
    ,
    {
        package_name: 'super saver 6',
        image_link: 'https://i.ibb.co/pdJzc89/annie-spratt-01-Wa3t-Po-QQ8-unsplash-1.jpg',
        description: 'mind blowing in sense',
        price: 950,
        categories: 'flower'
    },


    {
        package_name: 'food pack 1',
        image_link: 'https://i.ibb.co/WGWMD4K/brooke-lark-V4-MBq8kue3-U-unsplash.jpg',
        description: 'Chicken Portobello - Portobello Mushrooms, Caramelized Onions, and topped with Provolone Cheese Chicken Frances, Stuffed with Italian Sausage, Mozzarella Cheese, and Spinach then covered with a Pink Sauce Smothered Chicken - Topped with Mushrooms, Sauteed Onions, Green Peppers and topped with Provolone Cheese Blackberry Key Lime Chicken - Lightly dusted with Flour, sauteed in Olive Oil with a Blackberry Key Lime Sauce on the side Stuffed Chicken Marsala - Stuffed with Mushrooms and Mozzarella Cheese and topped with a Marsala Wine Sauce',
        price: 450,
        categories: 'catering'

    },
    {
        package_name: 'food pack 2',
        image_link: 'https://i.ibb.co/XzWnZWK/helena-lopes-THFYBp9-Pbe-Q-unsplash.jpg',
        description: 'Mutton Katchi BiryaniMarinated meat, Basmoti/Chinigrua Rice & Secret Spices with Saffron.Chicken Roast Cooked Chicken mixed with gravy, fried onion,tomato, catch-up with secret spices. Jali Kebab Beef/Chicken mint mixed with coriander leaf, mint leaf & eggs, deep fried with fresh oil. Shahi Jorda (with baby sweets) Chinigura Rice, Sugar, Ghee, Raisin, Almond, Pesta Chow with Saffron Flavor.   Shahi Borhani/Soft Drinks Mixed Yoghurt, Cane Sugar, Green Chili, Black Salt & Others secret Spices.Alu Bukhara Chatni Mixed Cheery prune, Tamarind, Cane Sugar, Raisin & Other Secret Spices.Salad (Mixed/Piece)Pieces of Cucumbe Tomato, Carrot, Onion, Green Chili & Lemon.Mineral Water',
        price: 450,
        categories: 'catering'

    },
    {
        package_name: 'food pack 3',
        image_link: 'https://i.ibb.co/nRywLSV/dan-gold-4-jh-DO54-BYg-unsplash.jpg',
        description: 'Chinigura Rice with mixed boiled green peace, Cardamom, Cinnamon & Fresh oil.Chicken Roast Cooked Chicken mixed with gravy, fried onion, tomato, catch-up with secret spices. Mutton Bhuna Mutton with Onion fried, Ginger, Garlic, Chili & secret spices. Fish Fry Pieces of Fish, Ginger, Garlic, Turmeric & deep fried with Fresh oil.Shahi Jorda (with baby sweets) Chinigura Rice, Sugar, Ghee, Raisin, Almond, Pesta Chow with Saffron Flavor.',
        price: 950,
        categories: 'catering'

    },
    {
        package_name: 'food pack 4',
        image_link: 'https://i.ibb.co/Zx4MC0N/tim-meyer-GZz-QAQyx-ACw-unsplash.jpg',
        description: 'Whole mutton cooked with tomato soach, alu bukhara & other secret spice. Whole Chicken Roast (4pcs) Whole chicken mixed with gravy, fried onion tomato catch-up & other secret spice. Whole Fish Smoked (1pcs) Whole Fish with Ginger, Garlic, mixed with coriander leaf, mint leaf with secret spices & Cooked by charcoal or oven. Nargis kebab (10pcs) Beef/Chicken mint mixed with coriander leaf, mint leaf & whole boiled eggs, deep fried with fresh oil. Chicken Shaslik (20pcs)Small pieces of Chicken (Boneless), mixed Secret Spice and Deep Fried with Fresh Oil.',
        price: 450,
        categories: 'catering'

    },
    {
        package_name: 'food pack 5',
        image_link: 'https://i.ibb.co/tHLMwzq/asiya-kiev-Siwrp-Bnx-Dww-unsplash.jpg',
        description: 'Mutton Katchi BiryaniMarinated meat, Basmoti/Chinigrua Rice & Secret Spices with Saffron.Chicken Roast Cooked Chicken mixed with gravy, fried onion,tomato, catch-up with secret spices. Jali Kebab Beef/Chicken mint mixed with coriander leaf, mint leaf & eggs, deep fried with fresh oil. Shahi Jorda (with baby sweets) Chinigura Rice, Sugar, Ghee, Raisin, Almond, Pesta Chow with Saffron Flavor.   Shahi Borhani/Soft Drinks Mixed Yoghurt, Cane Sugar, Green Chili, Black Salt & Others secret Spices.Alu Bukhara Chatni Mixed Cheery prune, Tamarind, Cane Sugar, Raisin & Other Secret Spices.Salad (Mixed/Piece)Pieces of Cucumbe Tomato, Carrot, Onion, Green Chili & Lemon.Mineral Water',
        price: 350,
        categories: 'catering'

    },
    {
        package_name: 'food pack 6',
        image_link: 'https://i.ibb.co/2FGHKYx/yukiko-kanada-Ou4-CQo6jzv-U-unsplash.jpg',
        description: 'Whole mutton cooked with tomato soach, alu bukhara & other secret spice. Whole Chicken Roast (4pcs) Whole chicken mixed with gravy, fried onion tomato catch-up & other secret spice. Whole Fish Smoked (1pcs) Whole Fish with Ginger, Garlic, mixed with coriander leaf, mint leaf with secret spices & Cooked by charcoal or oven. Nargis kebab (10pcs) Beef/Chicken mint mixed with coriander leaf, mint leaf & whole boiled eggs, deep fried with fresh oil. Chicken Shaslik (20pcs)Small pieces of Chicken (Boneless), mixed Secret Spice and Deep Fried with Fresh Oil.',
        price: 750,
        categories: 'catering'

    },
    {
        package_name: 'Classic Photo & Video',
        image_link: 'https://image.freepik.com/free-photo/couple-photo-shoot-wedding-day_7502-4935.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 500,
        categories: 'photography'

    },
    {
        package_name: 'Exclusive Photo & Video',
        image_link: 'https://image.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'photography'

    },
    {
        package_name: 'Storytelling Photo & Video',
        image_link: 'https://image.freepik.com/free-photo/young-couple-marriage-photo-session-outside_1303-16667.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 300,
        categories: 'photography'

    },
    {
        package_name: 'Digital Express',
        image_link: 'https://image.freepik.com/free-vector/save-date-card-with-photo_23-2148303208.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 1500,
        categories: 'photography'

    },
    {
        package_name: 'Cinematic Video',
        image_link: 'https://image.freepik.com/free-photo/wedding-bands-hands-bride-groom-with-beautiful-wedding-bouquet-made-greenery-white-flowers_8353-11212.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 2000,
        categories: 'photography'

    },
    {
        package_name: 'Photo Session',
        image_link: 'https://image.freepik.com/free-photo/beautiful-caucasian-bride-with-wedding-bouquet-is-standing-dry-grass-near-tree-warm-autumn-day_8353-11153.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'photography'

    },
    {
        package_name: 'WEDDING PLANNERS',
        image_link: 'https://rentmywedding.com/Images/Gobo/Monogram-On-Dance-Floor.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'lighting'

    },
    {
        package_name: 'DISC JOCKEY',
        image_link: 'https://rentmywedding.com/Images/Uplighting/purple-uplighting.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'lighting'

    },
    {
        package_name: 'SMALL',
        image_link: 'https://image.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'lighting'

    },
    {
        package_name: 'STANDARD',
        image_link: 'https://image.freepik.com/free-photo/blurred-picture-lights-hanging-arch_8353-8960.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'lighting'

    },
    {
        package_name: 'MIDSIZE',
        image_link: 'https://image.freepik.com/free-photo/abstract-blur-wedding-hall_1203-8780.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'lighting'

    },
    {
        package_name: 'LARGE ',
        image_link: 'https://image.freepik.com/free-photo/abstract-blur-wedding-hall_74190-5227.jpg',
        description: 'A Certified Photographer for 4 Hours Video Coverage for 4 Hours, 30 Page, 10X10 Wedding Photo Album  Private Online Photo Gallery ,A 5-10 Minute Edited HD Highlight Film,Unlimited Coverage Locations Unlimited Photos & Video Captured',
        price: 750,
        categories: 'lighting'

    },

]
