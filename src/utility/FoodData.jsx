export const FoodData = [

    {
        id: 2,
        name: 'Fried Rice',
        description: 'Transform leftover rice into a delicious fried rice delight, packed with veggies and simple spices!',
        ingredients: [
            "cup cooked rice (preferably day-old)",
            "tablespoons oil (vegetable or any cooking oil)",
            "pcs onion, chopped",
            "cloves garlic, minced",
            "pcs carrot, diced (optional)",
            "cup frozen peas (or any vegetables you have)",
            "eggs (optional)",
            "tablespoons soy sauce", "Salt and pepper to taste",
            "Green onions or herbs for garnish (optional)"],
        ingredientsValue: [
            "2", 
            "2", 
            "1", 
            "2", 
            "1", 
            "1", 
            "2", 
            "3",
            
        ],
        kalVallue: ["400", "240", "45", "10", "10", "60", "140", "30"],
        link: './images/food2.png',
        kal: '940',
        image: ['/images/recipe/friedRice1.jpg','/images/recipe/friedRice2.jpg','/images/recipe/friedRice3.jpg']
    },
    {
        id: 3,
        name: 'Vegetable Pasta',
        description: 'Pasta mixed with leftover vegetables and a simple tomato sauce for a quick meal.',
        ingredients: ["cups of cooked pasta (penne, spaghetti, or any type)",
                      "cup of leftover vegetables (zucchini, carrots, bell peppers, broccoli, etc.)",
                      "tablespoon olive oil",
                      "clove garlic, minced",
                      "cup tomato sauce (or any leftover sauce)",
                      "cup grated Parmesan cheese (optional)",
                      "Salt and pepper to taste",
                      "Fresh herbs like basil or parsley for garnish (optional)"],
        ingredientsValue: [ "2 ", 
                            "1", 
                            "1 ",
                            "1", 
                            "0.5", 
                            "0.25"],
        kalVallue : ["400",
                    "100",
                    "120",
                    "40",
                    "110"],

        htc : [
            "In a large pot, heat olive oil over medium heat.",
            "Add minced garlic and sauté for about 1 minute until fragrant.",
            "Stir in the leftover vegetables and cook for 3-5 minutes until heated through.",
            "Add the cooked pasta and tomato sauce, mixing well.",
            "Cook for an additional 2-3 minutes, allowing everything to heat evenly.",
            "Season with salt and pepper to taste.",
            "If desired, sprinkle grated Parmesan cheese on top.",
            "Garnish with fresh herbs like basil or parsley before serving.",
            "Serve warm."
        ],                    
        link: './images/food3.png',
        kal: '550',
        image: ['/images/recipe/vegetablePasta1.jpg','/images/recipe/vegetablePasta2.jpg','/images/recipe/vegetablePasta3.jpg']
    },
    {
        id: 4,
        name: 'Vegetable Soup',
        description: 'A warm and comforting soup made from leftover vegetables and broth.',
        ingredients: [
            "cups of leftover vegetables (carrots, potatoes, zucchini, spinach, bell peppers, etc.)",
            "tablespoon olive oil",
            "onion, chopped",
            "cloves garlic, minced",
            "cups vegetable broth",
            "can diced tomatoes (14.5 oz)",
            "teaspoon dried herbs (basil, thyme, or oregano)",
            "Salt and pepper to taste",
            "Fresh parsley or other herbs for garnish (optional)"
        ],
        ingredientsValue: [
            "2",
            "1",
            "1",
            "2",
            "4",
            "1",
            "1"
        ],
        kalVallue: [
            "150",
            "120",
            "45",
            "10",
            "60",
            "70",
            "0"
        ],        
        htc : ["Heat olive oil in a large pot over medium heat.",
        "Add chopped onion and minced garlic, sauté until softened.",
        "Stir in leftover vegetables and cook for a few minutes.",
        "Add vegetable broth and diced tomatoes, bring to a boil.",
        "Add dried herbs, salt, and pepper to taste. Simmer for 15-20 minutes.",
        "Serve hot, garnished with fresh parsley if desired."],
        link: './images/food4.png',
        kal: '550',
        image: ['/images/recipe/vegetableSoup1.jpg','/images/recipe/vegetableSoup2.jpg']
    },
    {
        id: 5,
        name: 'Toast',
        description: 'Toasted bread topped with leftover spreads and fresh fruits.',
        ingredients: [
            "slices of bread (whole wheat or any type)",
            "tablespoon butter or oil",
            "leftover vegetables (any type, chopped)",
            "egg (optional)",
            "slice of cheese (optional)",
            "Salt and pepper to taste"
        ],
        ingredientsValue: [
            "2",
            "1",
            "1",
            "1",
            "1",
        ],
        kalVallue: [
            "160",
            "120",
            "50",
            "70",
            "100",
            "0"
        ],        
        htc : [
            "Heat butter or oil in a skillet over medium heat.",
            "Place slices of bread in the skillet and toast until golden brown.",
            "Add leftover vegetables on top of the toasted bread.",
            "If using, crack an egg on top and cook until the egg is done.",
            "Top with cheese if desired and season with salt and pepper.",
            "Serve warm."
        ],
        link: './images/food5.png',
        kal: '550',
        image: ['/images/recipe/toast1.jpg','/images/recipe/toast2.jpg']
    },
    {
        id: 6,
        name: 'Fruit Smoothie',
        description: 'A refreshing smoothie made with leftover fruits and yogurt for a healthy treat.',
        ingredients: [
            "cup leftover fruits (bananas, berries, apples, etc.)",
            "cup yogurt (plain or flavored)",
            "cup milk (or any plant-based milk)",
            "tablespoon honey or any sweetener (optional)",
            "ice cubes (optional)"
        ],
        ingredientsValue: [
            "1",
            "0.5",
            "0.5",
            "1",
            
        ],
        kalVallue: [
            "80",
            "75",
            "60",
            "20",
            "0"
        ],        
        htc : [
            "In a blender, combine leftover fruits, yogurt, and milk.",
            "Add honey or sweetener if desired, and blend until smooth.",
            "Add ice cubes if you prefer a colder smoothie and blend again.",
            "Pour into a glass and enjoy!"
        ],
        link: './images/food6.png',
        kal: '550',
        image: ['/images/recipe/fruitSmoothie1.jpg']
    },
    {
        id: 7,
        name: 'Pancakes',
        description: 'Fluffy pancakes made with leftover ingredients, perfect for breakfast.',
        ingredients: [
            "cup leftover pancakes",
            "tablespoon butter or oil (for reheating)",
            "tablespoon maple syrup (optional)",
            "slice of fruit (banana, berries, etc., optional)",
            "tablespoon peanut butter or any spread (optional)"
        ],
        ingredientsValue: [
            "2",
            "1",
            "2",
            "1",
            "1"
        ],
        kalVallue: [
            "200",
            "120",
            "100",
            "50",
            "90"
        ],    
        htc : [
            "Reheat leftover pancakes in a skillet over medium heat with butter or oil.",
            "Serve warm with maple syrup and slices of fruit if desired.",
            "You can also spread peanut butter or any spread on top."
        ],    
        link: './images/food7.png',
        kal: '550',
        image: ['/images/recipe/pancakes1.jpg','/images/recipe/pancakes2.jpg','/images/recipe/pancakes3.jpg']
    },
    {
        id: 8,
        name: 'Stir-Fried Vegetables',
        description: 'A quick stir-fry featuring various leftover vegetables and a flavorful sauce.',
        ingredients: [
            "cups leftover vegetables (broccoli, carrots, bell peppers, etc.)",
            "tablespoon vegetable oil",
            "cloves garlic, minced",
            "tablespoons soy sauce",
            "teaspoon sesame oil (optional)",
            "Green onions or herbs for garnish (optional)"
        ],
        ingredientsValue: [
            "2",
            "1",
            "2",
            "2",
            "1",
            
        ],
        kalVallue: [
            "100",
            "120",
            "10",
            "20",
            "40",
            "5"
        ],  
        htc : [
            "Heat vegetable oil in a large pan over medium-high heat.",
            "Add minced garlic and sauté for about 30 seconds.",
            "Add leftover vegetables and stir-fry for 5-7 minutes until heated through.",
            "Stir in soy sauce and sesame oil (if using).",
            "Garnish with green onions or herbs before serving."
        ],      
        link: './images/food8.png',
        kal: '550',
        image: ['/images/recipe/stirFriedVegetables1.jpg']
    },
    // {
    //     id: 9,
    //     name: 'Rice Balls',
    //     description: 'Savory snacks made from leftover rice, shaped into balls and fried until golden.',
    //     ingredients: [
    //         "cups leftover rice (preferably day-old)",
    //         "tablespoon soy sauce",
    //         "cup leftover vegetables, chopped (optional)",
    //         "egg (optional, for binding)",
    //         "tablespoon sesame oil (for frying)",
    //         "Seaweed or sesame seeds for coating (optional)"
    //     ],
    //     ingredientsValue: [
    //         "2",
    //         "1",
    //         "0.5",
    //         "1",
    //         "1",
            
    //     ],
    //     kalVallue: [
    //         "400",
    //         "10",
    //         "50",
    //         "70",
    //         "120",
    //         "10"
    //     ],
    //     htc : [
    //         "In a bowl, mix leftover rice with soy sauce and chopped vegetables.",
    //         "If using, add an egg to bind the mixture.",
    //         "Shape the mixture into small balls.",
    //         "Heat sesame oil in a skillet and fry the rice balls until golden brown.",
    //         "Serve with seaweed or sprinkle with sesame seeds if desired."
    //     ],
    //     link: './images/food9.png',
    //     kal: '550',
    //     image: './images/about.png'
    // },
    // {
    //     id: 10,
    //     name: 'Salad',
    //     description: 'A vibrant salad combining leftover vegetables with a light dressing.',
    //     ingredients: [
    //         "cups leftover vegetables (lettuce, tomatoes, cucumbers, etc.)",
    //         "tablespoon olive oil",
    //         "tablespoon vinegar or lemon juice",
    //         "cup leftover protein (chicken, tofu, beans, etc.)",
    //         "tablespoon nuts or seeds (optional)",
    //         "Salt and pepper to taste"
    //     ],
    //     ingredientsValue: [
    //         "2",
    //         "1",
    //         "1",
    //         "0.5",
    //         "1",
            
    //     ],
    //     kalVallue: [
    //         "50",
    //         "120",
    //         "5",
    //         "100",
    //         "50",
    //         "0"
    //     ],        
    //     htc : [
    //         "In a large bowl, combine leftover vegetables and protein.",
    //         "Drizzle with olive oil and vinegar or lemon juice.",
    //         "Toss gently to mix all ingredients.",
    //         "Top with nuts or seeds if desired, and season with salt and pepper."
    //     ],
    //     link: './images/food10.png',
    //     kal: '550',
    //     image: './images/about.png'
    // },
    // {
    //     id: 11,
    //     name: 'Cake',
    //     description: 'A delightful cake made with leftover flour and sugar, perfect for dessert.',
    //     ingredients: [
    //         "slices of leftover cake",
    //         "tablespoon frosting (optional)",
    //         "cup fresh fruits (berries, bananas, etc., optional)",
    //         "whipped cream or ice cream (optional)"
    //     ],
    //     ingredientsValue: [
    //         "2",
    //         "1",
    //         "1",
    //         "1"
    //     ],
    //     kalVallue: [
    //         "200", // Average for 2 slices of cake
    //         "50",  // Average for frosting
    //         "50",  // Fresh fruits
    //         "100"  // Whipped cream or ice cream
    //     ],
        
    //     htc : [
    //         "Take slices of leftover cake and place them on a serving plate.",
    //         "If desired, spread frosting on top of each slice.",
    //         "Add fresh fruits on the side or on top of the cake slices.",
    //         "Serve with whipped cream or a scoop of ice cream if desired."
    //     ],
    //     link: './images/food11.png',
    //     kal: '550',
    //     image: './images/about.png'
    // },

]

