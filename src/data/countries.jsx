import { info } from "autoprefixer";




export const countries = [
    {
        id: 1,
        name: "Japan",
        description: "A fascinating blend of ancient traditions and cutting-edge technology, Japan offers a unique travel experience.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        currency: "Japanese Yen (¥)",
        language: "Japanese",
        timezone: "UTC+9",
        continent: "Asia",
        bestTimeToVisit: "March to May and September to November for mild weather and beautiful scenery.",
        visaRequirements: "Visa requirements vary by nationality. Many countries receive 90-day visa-free entry.",
        gettingAround: "Efficient public transportation including bullet trains, subways, and buses.",
        tags: ["Culture", "Technology", "Food", "Nature", "History"],
        cities: [
            {
                id: "tokyo",
                name: "Tokyo",
                description: "A vibrant metropolis where the ultramodern and the traditional coexist.",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
                temperature: "15°C - 30°C",
                places: [
                    {
                        id: "tokyo-tower",
                        name: "Tokyo Tower",
                        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Iconic communications tower offering panoramic views of Tokyo.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Landmark",
                        about: "Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan. At 333 meters, it is the second-tallest structure in Japan. The structure is an Eiffel Tower-inspired lattice tower that is painted white and international orange to comply with air safety regulations.",
                        history: "Built in 1958, Tokyo Tower was the tallest structure in Japan until 2012 when it was surpassed by the Tokyo Skytree. It was originally built to serve as a communications tower for broadcasting television and radio signals across the Kanto region.",
                        features: [
                            "Main Deck observation deck at 150 meters",
                            "Top Deck observation deck at 250 meters",
                            "Foot Town shopping and entertainment complex",
                            "One Piece Tower theme park",
                            "Illumination displays at night"
                        ],
                        bestTimeToVisit: "Early morning or sunset for the best views",
                        openingHours: "9:00 AM - 11:00 PM (Main Deck), 10:00 AM - 10:30 PM (Top Deck)",
                        entryFee: "¥3,000 (Main Deck), ¥4,000 (Top Deck)",
                        visitorTips: [
                            "Visit during sunset for spectacular city views",
                            "Book tickets online to avoid queues",
                            "Check the weather before visiting",
                            "Visit the One Piece Tower if you're a fan",
                            "Try the glass floor on the Main Deck",
                            "Take photos from the outdoor observation deck",
                            "Visit the Foot Town for shopping and dining",
                            "Watch the tower's illumination at night",
                            "Combine with nearby Zojo-ji Temple visit",
                            "Bring a camera for panoramic shots"
                        ],
                        
                    },
                    {
                        id: "sensoji-temple",
                        name: "Sensoji Temple",
                        image: "https://www.touristinjapan.com/wp-content/uploads/2018/06/39574872171_e8020cece7_k.jpg",
                        description: "Tokyo's oldest and most significant Buddhist temple.",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Religious Site",
                        about: "Sensoji Temple is Tokyo's oldest and most significant Buddhist temple. Located in Asakusa, it is the center of Tokyo's largest and most popular temple complex. The temple is dedicated to Kannon, the Buddhist goddess of mercy.",
                        history: "Founded in 628 AD, the temple was built after two fishermen found a statue of Kannon in the Sumida River. The temple was destroyed during World War II but was rebuilt as a symbol of rebirth and peace.",
                        features: [
                            "Kaminarimon (Thunder Gate)",
                            "Nakamise shopping street",
                            "Five-story pagoda",
                            "Main hall with Kannon statue",
                            "Traditional Japanese garden"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon to avoid crowds",
                        openingHours: "6:00 AM - 5:00 PM (Main hall)",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning for fewer crowds",
                            "Try traditional snacks on Nakamise Street",
                            "Participate in the incense ritual",
                            "Get your fortune (omikuji)",
                            "Respect the temple's rules and customs",
                            "Take photos respectfully",
                            "Visit during festivals for special experiences",
                            "Try the local restaurants in the area",
                            "Check the weather before visiting",
                            "Wear comfortable walking shoes"
                        ],
                        
                    },
                    {
                        id: "shibuya-crossing",
                        name: "Shibuya Crossing",
                        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "World's busiest pedestrian crossing and symbol of modern Tokyo.",
                        rating: 4.6,
                        duration: "30 mins",
                        type: "Landmark",
                        about: "Shibuya Crossing is the world's busiest pedestrian crossing, located in front of Shibuya Station. It's a symbol of modern Tokyo and represents the city's vibrant, fast-paced lifestyle.",
                        history: "The crossing became famous in the 1970s when Shibuya developed into a major commercial and entertainment district. It gained international recognition through movies and media, becoming an iconic symbol of Tokyo.",
                        features: [
                            "Massive video screens on surrounding buildings",
                            "Hachiko statue meeting point",
                            "Shibuya Station access",
                            "Shopping centers and department stores",
                            "Restaurants and cafes with crossing views"
                        ],
                        bestTimeToVisit: "Evening rush hour or night for the full experience",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit during rush hour for the full experience",
                            "Watch from Starbucks or Shibuya Sky for aerial views",
                            "Take photos from the Hachiko statue area",
                            "Visit at night for the neon lights",
                            "Try the crossing multiple times",
                            "Explore the surrounding shopping areas",
                            "Visit during rain for unique photo opportunities",
                            "Check out the nearby restaurants",
                            "Watch the crossing from different angles",
                            "Visit during special events or holidays"
                        ],
                        tripInfo: {
                            overview: "Shibuya Crossing is an iconic symbol of Tokyo's modern urban culture, where thousands of pedestrians cross simultaneously in all directions. It's surrounded by massive video screens and neon signs, creating a quintessential Tokyo experience.",
                            gettingThere: "Take the JR Yamanote Line, Tokyo Metro Ginza Line, or other lines to Shibuya Station. The crossing is directly in front of the station's Hachiko exit.",
                            bestTimeToVisit: "Evening rush hour (5-7 PM) or night time for the most dramatic experience. Weekends and holidays are particularly busy.",
                            whatToBring: "Camera, comfortable walking shoes, and an umbrella if it's raining. Consider bringing a tripod for night photography.",
                            localCustoms: "Follow the crossing signals, be mindful of others, and don't stop in the middle of the crossing for photos. Be aware of your surroundings as it can get very crowded."
                        }
                    },
                    {
                        id: "tsukiji-market",
                        name: "Tsukiji Outer Market",
                        image: "https://thecreativeadventurer.com/wp-content/uploads/2017/09/img_5e17ee0dd47e5-1500x1000-1.jpg",
                        description: "Famous outer market area with fresh seafood and traditional food stalls.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Market",
                        about: "Tsukiji Outer Market is a vibrant area filled with shops and restaurants selling fresh seafood, produce, and traditional Japanese food items. It's a paradise for food lovers and offers an authentic taste of Tokyo's culinary culture.",
                        history: "The market was established in 1935 and became the world's largest fish market. While the inner wholesale market moved to Toyosu in 2018, the outer market remains a bustling hub of culinary activity, preserving the traditional market atmosphere.",
                        features: [
                            "Fresh seafood shops",
                            "Traditional food stalls",
                            "Kitchen equipment stores",
                            "Sushi restaurants",
                            "Local produce vendors"
                        ],
                        bestTimeToVisit: "Early morning (5:00 AM - 9:00 AM) for the freshest seafood",
                        openingHours: "5:00 AM - 2:00 PM (most shops)",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning for the freshest seafood",
                            "Try the famous tuna auction (if available)",
                            "Sample fresh sushi at the restaurants",
                            "Bring cash for purchases",
                            "Wear comfortable walking shoes",
                            "Try the street food stalls",
                            "Visit the kitchen equipment shops",
                            "Take photos respectfully",
                            "Try the local specialties",
                            "Check the weather before visiting"
                        ],
                        tripInfo: {
                            overview: "Tsukiji Outer Market is a food lover's paradise, offering an authentic taste of Tokyo's culinary culture. The market features numerous shops selling fresh seafood, produce, and traditional Japanese food items, along with restaurants serving some of the freshest sushi in Tokyo.",
                            gettingThere: "Take the Tokyo Metro Hibiya Line to Tsukiji Station (5-minute walk) or the Toei Oedo Line to Tsukijishijo Station (2-minute walk).",
                            bestTimeToVisit: "Early morning (5:00 AM - 9:00 AM) for the freshest seafood and least crowds. Avoid weekends if possible.",
                            whatToBring: "Cash (many vendors don't accept cards), comfortable walking shoes, and an appetite. Consider bringing a small bag for purchases.",
                            localCustoms: "Be respectful of the vendors and their space. Don't touch the seafood unless invited to do so. Follow the market's rules and regulations, and be mindful of the busy working environment."
                        }
                    }
                ]
            },
            {
                id: "kyoto",
                name: "Kyoto",
                description: "Japan's cultural heart with over 1,600 Buddhist temples and 400 Shinto shrines.",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 35°C",
                places: [
                    {
                        id: "fushimi-inari",
                        name: "Fushimi Inari Shrine",
                        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Shrine dedicated to Inari, the Shinto god of rice",
                        rating: 4.7,
                        type: "Religious Site",
                        about: "Fushimi Inari Shrine is the head shrine of over 30,000 Inari shrines across Japan. It's famous for its thousands of vermilion torii gates, which create a network of trails behind the shrine's main buildings.",
                        history: "Founded in 711 AD, the shrine has been a place of worship for over 1,300 years. The torii gates were donated by individuals and companies, with their names inscribed on the back of each gate.",
                        features: [
                            "Thousands of vermilion torii gates",
                            "Main shrine buildings",
                            "Mountain trails with scenic views",
                            "Fox statues (messengers of Inari)",
                            "Traditional shrine architecture"
                        ],
                        bestTimeToVisit: "Early morning (7:00 AM) or late afternoon to avoid crowds",
                        openingHours: "24/7 (Main shrine), 8:30 AM - 4:30 PM (Mountain trails)",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Wear comfortable walking shoes",
                            "Bring water for the mountain trail",
                            "Take photos of the torii gates",
                            "Visit the fox statues",
                            "Try the local food stalls",
                            "Get a fortune (omikuji)",
                            "Respect the shrine's rules",
                            "Visit during festivals",
                            "Check the weather before hiking"
                        ],
                        tripInfo: {
                            overview: "Fushimi Inari Shrine is one of Japan's most iconic Shinto shrines, famous for its thousands of vermilion torii gates that create a mesmerizing tunnel-like path up the mountain. The shrine is dedicated to Inari, the Shinto god of rice and sake.",
                            gettingThere: "Take the JR Nara Line to Inari Station (5-minute walk) or the Keihan Line to Fushimi-Inari Station (7-minute walk).",
                            bestTimeToVisit: "Early morning (7:00 AM) for the best photos and fewer crowds. The shrine is open 24/7, but the mountain trails are best visited during daylight hours.",
                            whatToBring: "Comfortable walking shoes, water, camera, and appropriate clothing for a religious site. Consider bringing a small offering for the shrine.",
                            localCustoms: "Be respectful of worshippers, follow the proper shrine etiquette, and don't touch the torii gates. Take photos respectfully and be mindful of others."
                        }
                    },
                    {
                        id: "kinkaku-ji",
                        name: "Kinkaku-ji (Golden Pavilion)",
                        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Zen temple covered in gold leaf, surrounded by beautiful gardens.",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Temple",
                        about: "Kinkaku-ji, or the Golden Pavilion, is a Zen temple whose top two floors are completely covered in gold leaf. It is set in a beautiful garden with a large pond, creating a stunning reflection of the pavilion.",
                        history: "Originally built in 1397 as a retirement villa for Shogun Ashikaga Yoshimitsu, it was converted into a Zen temple after his death. The current structure is a reconstruction from 1955 after the original was burned down.",
                        features: [
                            "Three-story golden pavilion",
                            "Mirror-like pond",
                            "Traditional Japanese garden",
                            "Stone garden",
                            "Tea house"
                        ],
                        bestTimeToVisit: "Early morning (9:00 AM) or late afternoon for the best lighting",
                        openingHours: "9:00 AM - 5:00 PM",
                        entryFee: "¥500",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Take photos from different angles",
                            "Visit during different seasons",
                            "Try the tea house",
                            "Walk the garden path",
                            "Check the weather before visiting",
                            "Bring a camera",
                            "Visit during cherry blossom season",
                            "Respect the temple's rules",
                            "Combine with nearby temples"
                        ],
                        tripInfo: {
                            overview: "Kinkaku-ji, or the Golden Pavilion, is one of Kyoto's most famous landmarks. The three-story pavilion is covered in gold leaf and set in a beautiful garden with a large pond, creating a stunning reflection that changes with the seasons.",
                            gettingThere: "Take the Kyoto City Bus #101 or #205 to Kinkaku-ji-michi stop (10-minute walk) or take the Karasuma Line to Kitaoji Station and transfer to bus #101, #102, #204, or #205.",
                            bestTimeToVisit: "Early morning (9:00 AM) for fewer crowds and better photos. The temple is particularly beautiful during cherry blossom season and autumn.",
                            whatToBring: "Camera, comfortable walking shoes, and cash for the entrance fee. Consider bringing a guidebook to learn about the temple's history.",
                            localCustoms: "Be respectful of the temple grounds, follow the designated path, and don't touch the buildings. Take photos from the designated areas only."
                        }
                    },
                    {
                        id: "kiyomizu-dera",
                        name: "Kiyomizu-dera Temple",
                        image: "https://a.cdn-hotels.com/gdcs/production188/d1098/f58c71c1-3e16-4bbd-840b-676482ccbfd5.jpg",
                        description: "Historic temple with a wooden stage and panoramic views of Kyoto.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Temple",
                        about: "Kiyomizu-dera is a historic temple in Kyoto, famous for its wooden stage that juts out from the main hall, offering spectacular views of the city. The temple is a UNESCO World Heritage site and one of Kyoto's most celebrated landmarks.",
                        history: "Founded in 778, the temple was built during the early Heian period. The current buildings were constructed in 1633 without using a single nail. The temple's name means 'Pure Water Temple' and comes from the waterfall within the complex.",
                        features: [
                            "Wooden stage (Kiyomizu Stage)",
                            "Otowa Waterfall",
                            "Jishu Shrine",
                            "Three-story pagoda",
                            "Night illuminations"
                        ],
                        bestTimeToVisit: "Early morning (6:00 AM) or during special night illuminations",
                        openingHours: "6:00 AM - 6:00 PM (varies by season)",
                        entryFee: "¥400",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Try the Otowa Waterfall ritual",
                            "Visit during cherry blossom season",
                            "Check the night illumination schedule",
                            "Wear comfortable walking shoes",
                            "Visit the Jishu Shrine",
                            "Take photos from the wooden stage",
                            "Try the local sweets",
                            "Visit during autumn colors",
                            "Combine with nearby temples"
                        ],
                       
                    },
                    {
                        id: "arashiyama",
                        name: "Arashiyama Bamboo Grove",
                        image: "https://mykyotophoto.com/wp-content/uploads/2016/01/150824_Kyoto-Arashiyama-Bamboo-Grove-810373.jpg",
                        description: "Magical bamboo forest path and scenic mountain area.",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Nature",
                        about: "Arashiyama Bamboo Grove is a mesmerizing natural wonder in Kyoto, featuring a path lined with towering bamboo stalks that create a unique atmosphere as they sway in the wind and filter the sunlight.",
                        history: "The bamboo grove has been a part of Arashiyama's landscape for centuries, originally planted for its practical uses in construction and crafts. It has become one of Kyoto's most photographed locations.",
                        features: [
                            "Bamboo forest path",
                            "Tenryu-ji Temple",
                            "Monkey Park",
                            "Togetsukyo Bridge",
                            "Traditional craft shops"
                        ],
                        bestTimeToVisit: "Early morning (7:00 AM) or late afternoon for fewer crowds",
                        openingHours: "24/7 (Bamboo Grove), 8:30 AM - 5:00 PM (Monkey Park)",
                        entryFee: "Free (Bamboo Grove), ¥550 (Monkey Park)",
                        visitorTips: [
                            "Visit early morning for the best photos",
                            "Wear comfortable walking shoes",
                            "Visit during different seasons",
                            "Combine with Tenryu-ji Temple",
                            "Try the monkey park",
                            "Walk across Togetsukyo Bridge",
                            "Visit the craft shops",
                            "Take photos from different angles",
                            "Visit during cherry blossom season",
                            "Try the local restaurants"
                        ],
                        
                           
                    },
                    {
                        id: "tenryu-ji",
                        name: "Tenryu-ji Temple",
                        image: "https://cdn.britannica.com/38/122138-050-B556649B/Antoni-Gaudi-Temple-Expiatori-de-la-Sagrada-Familia-Barcelona-Spain.jpg",
                        description: "Zen temple with a wooden stage and panoramic views of Kyoto.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Temple",
                        about: "Tenryu-ji Temple is a Zen temple located in Arashiyama, Kyoto. The temple is known for its beautiful wooden stage that juts out from the main hall, offering spectacular views of the surrounding mountains and the city.",
                        history: "The temple was founded in 798 AD by the monk Dōgen, who was inspired by the scenery of the area. The wooden stage was built in the 13th century, and the temple has been expanded and renovated over the centuries.",
                        features: [
                            "Wooden stage",
                            "Panoramic views",
                            "Zen garden",
                            "Shrine",
                            "Pagoda"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Wear comfortable walking shoes",
                            "Bring water for the mountain trail",
                            "Take photos of the wooden stage",
                            "Visit the Zen garden",
                            "Try the local food stalls",
                            "Get a fortune (omikuji)",
                            "Respect the temple's rules",
                            "Visit during festivals",
                            "Check the weather before hiking"
                        ],
                        
                    }
                ]
            },
            {
                id: "osaka",
                name: "Osaka",
                description: "Japan's kitchen and entertainment capital, known for its food and nightlife.",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "15°C - 35°C",
                places: [
                    {
                        id: "osaka-castle",
                        name: "Osaka Castle",
                        image: "https://i.pinimg.com/originals/17/3d/1f/173d1f141dd11a9374c3927dad4c9e03.jpg",
                        description: "Historic castle with a museum and beautiful gardens.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Castle",
                        about: "Osaka Castle is one of Japan's most famous landmarks, with a rich history dating back to the 16th century. The castle tower houses a museum with historical artifacts and offers panoramic views of Osaka.",
                        history: "Built in 1583 by Toyotomi Hideyoshi, the castle was destroyed and rebuilt several times. The current structure was reconstructed in 1931 and renovated in 1997. It played a crucial role in the unification of Japan during the Azuchi-Momoyama period.",
                        features: [
                            "Castle tower museum",
                            "Observation deck",
                            "Historical artifacts",
                            "Castle gardens",
                            "Night illumination"
                        ],
                        bestTimeToVisit: "Early morning or during cherry blossom season",
                        openingHours: "9:00 AM - 5:00 PM (Castle), 24/7 (Gardens)",
                        entryFee: "¥600 (Castle), Free (Gardens)",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Check the cherry blossom schedule",
                            "Visit the observation deck",
                            "Explore the castle gardens",
                            "Try the local food stalls",
                            "Visit during night illumination",
                            "Take photos from different angles",
                            "Learn about the castle's history",
                            "Visit the museum exhibits",
                            "Combine with nearby attractions"
                        ],
                        
                    },
                    {
                        id: "dotonbori",
                        name: "Dotonbori",
                        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Vibrant entertainment district known for its neon signs and food culture.",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Entertainment",
                        about: "Dotonbori is Osaka's most famous entertainment district, known for its bright neon signs, street food, and vibrant nightlife. The area is a paradise for food lovers and offers a unique glimpse into Osaka's modern culture.",
                        history: "Originally a theater district in the 17th century, Dotonbori evolved into a major entertainment area. The famous neon signs and food culture developed after World War II, making it a symbol of Osaka's post-war revival.",
                        features: [
                            "Neon signs and billboards",
                            "Street food stalls",
                            "Shopping arcades",
                            "Entertainment venues",
                            "Restaurants and bars"
                        ],
                        bestTimeToVisit: "Evening for the full neon experience",
                        openingHours: "24/7 (Area), Varies by establishment",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit during evening for neon lights",
                            "Try the local street food",
                            "Take photos of the neon signs",
                            "Visit the shopping arcades",
                            "Try the famous restaurants",
                            "Watch the Glico running man",
                            "Visit during festivals",
                            "Explore the side streets",
                            "Try the local specialties",
                            "Visit the nearby attractions"
                        ],
                       
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "France",
        description: "A country of art, fashion, and culinary excellence.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        currency: "Euro (€)",
        language: "French",
        timezone: "CET (UTC+1)",
        continent: "Europe",
        bestTimeToVisit: "April to June and September to November for pleasant weather and fewer crowds.",
        visaRequirements: "Schengen visa required for many nationalities. EU citizens can travel freely.",
        gettingAround: "Excellent train network (TGV), domestic flights, and regional buses available.",
        tags: ["Culture", "Food", "History", "Art", "Architecture"],
        cities: [
            {
                id: "paris",
                name: "Paris",
                description: "The City of Light is known for its iconic Eiffel Tower, world-class museums, and exquisite cuisine.",
                image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "eiffel-tower",
                        name: "Eiffel Tower",
                        image: "http://wallsdesk.com/wp-content/uploads/2016/11/Eiffel-Tower-Wallpapers.jpg",
                        description: "Iconic iron lattice tower on the Champ de Mars in Paris.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Landmark",
                        about: "The Eiffel Tower is Paris's most iconic landmark and one of the most recognizable structures in the world. Standing at 324 meters tall, it offers breathtaking views of the city from its three observation decks. The tower's intricate iron lattice design is a masterpiece of engineering and architecture.",
                        history: "Built for the 1889 World's Fair, the Eiffel Tower was initially controversial but has become a beloved symbol of Paris. Designed by Gustave Eiffel, it was the tallest man-made structure in the world until 1930. Originally intended to be temporary, it was saved due to its value as a radio transmission tower.",
                        features: [
                            "Three observation decks",
                            "Restaurants and shops",
                            "Glass floor on first level",
                            "Evening light show",
                            "Historical exhibits"
                        ],
                        bestTimeToVisit: "Early morning or evening to avoid crowds",
                        openingHours: "9:00 AM - 12:45 AM (last entry at 11:45 PM)",
                        entryFee: "Varies by level (€10.40 - €26.10)",
                        visitorTips: [
                            "Book tickets online to avoid long queues",
                            "Visit at sunset for magical views",
                            "Take the stairs to the second level for a unique experience",
                            "Check the weather before visiting",
                            "Consider visiting during the light show"
                        ]
                    },
                    {
                        id: "louvre-museum",
                        name: "Louvre Museum",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460806/louvre-museum_hd7ehk.png",
                        description: "World's largest art museum and historic monument.",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Museum",
                        about: "The Louvre Museum is the world's largest art museum and a historic monument in Paris. It houses over 38,000 objects from prehistory to the 21st century, including the famous Mona Lisa and Venus de Milo. The museum's glass pyramid entrance has become an iconic symbol of modern Paris.",
                        history: "Originally built as a fortress in the late 12th century, the Louvre was transformed into a royal palace in the 16th century. It became a public museum during the French Revolution in 1793. The glass pyramid, designed by I.M. Pei, was added in 1989 as part of a major renovation project.",
                        features: [
                            "Mona Lisa painting",
                            "Venus de Milo sculpture",
                            "Napoleon's apartments",
                            "Egyptian antiquities",
                            "Islamic art collection"
                        ],
                        bestTimeToVisit: "Wednesday or Friday evenings (less crowded)",
                        openingHours: "9:00 AM - 6:00 PM (closed on Tuesdays)",
                        entryFee: "€17 (free for visitors under 18)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Start with the most famous works",
                            "Use the museum's free app for navigation",
                            "Visit the less crowded wings",
                            "Take advantage of free admission on first Sunday of each month"
                        ]
                    }
                ]
            },
            {
                id: "nice",
                name: "Nice",
                image: "https://www.bestofcinqueterre.com/photos/nice-promenade-des-anglais-from-viewpoint-of-castle-hill-2.jpg",
                description: "Beautiful coastal city on the French Riviera known for its beaches and promenade.",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "promenade-des-anglais",
                        name: "Promenade des Anglais",
                        image: "https://www.laterlite.com/wp-content/uploads/2021/02/promenade-nizza-latermix-cem-classic-6.jpg",
                        description: "Famous seafront promenade in Nice.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark",
                        about: "The Promenade des Anglais is a 7-kilometer-long promenade along the Mediterranean coast in Nice. It's famous for its beautiful views, palm trees, and the iconic blue chairs where visitors can relax and enjoy the sea breeze. The promenade is a perfect blend of natural beauty and urban elegance.",
                        history: "The promenade was built in 1820 when English aristocrats wintering in Nice funded the construction of a walkway along the coast. It was expanded several times and became a symbol of the French Riviera's golden age of tourism in the late 19th century.",
                        features: [
                            "Seaside walking path",
                            "Historic hotels",
                            "Beach access points",
                            "Cycling path",
                            "Public art installations"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "Open 24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Rent a bike to explore the full length",
                            "Visit during sunrise for beautiful photos",
                            "Try the local restaurants along the promenade",
                            "Bring comfortable walking shoes",
                            "Check out the nearby Old Town"
                        ]
                    },
                    {
                        id: "basilique-notre-dame",
                        name: "Basilique Notre-Dame",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460740/Basilique_qeuurj.png",
                        description: "Beautiful neo-Gothic basilica in Nice.",
                        rating: 4.6,
                        duration: "1 hour",
                        type: "Religious Site",
                        about: "The Basilique Notre-Dame is the largest church in Nice, built in the neo-Gothic style. Its twin towers and rose window make it a distinctive landmark in the city. The interior features beautiful stained glass windows and religious artwork.",
                        history: "Constructed between 1864 and 1868, the basilica was designed by French architect Louis Lenormand. It was built to serve the growing population of Nice and to provide a place of worship for the city's Catholic community.",
                        features: [
                            "Neo-Gothic architecture",
                            "Stained glass windows",
                            "Twin bell towers",
                            "Religious artwork",
                            "Organ concerts"
                        ],
                        bestTimeToVisit: "Morning or during mass times",
                        openingHours: "8:30 AM - 12:00 PM, 2:30 PM - 7:00 PM",
                        entryFee: "Free",
                        visitorTips: [
                            "Dress modestly when visiting",
                            "Check mass times if you want to attend",
                            "Visit during organ concerts if possible",
                            "Take time to admire the stained glass",
                            "Combine with nearby attractions"
                        ]
                    }
                ]
            },
            {
                id: "bordeaux",
                name: "Bordeaux",
                image: "https://img.fotocommunity.com/bordeaux-place-de-la-bourse-7dcaf55d-3593-4e0b-aa69-e532a3b4f82a.jpg?height=1080",
                description: "Port city famous for its wine, elegant architecture, and vibrant waterfront.",
                temperature: "5°C - 28°C",
                places: [
                    {
                        id: "place-de-la-bourse",
                        name: "Place de la Bourse",
                        image: "https://img.fotocommunity.com/bordeaux-place-de-la-bourse-7dcaf55d-3593-4e0b-aa69-e532a3b4f82a.jpg?height=1080",
                        description: "Historic square with the Miroir d'Eau in Bordeaux.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark",
                        about: "Place de la Bourse is one of Bordeaux's most iconic squares, featuring elegant 18th-century architecture and the famous Miroir d'Eau (Water Mirror), the world's largest reflecting pool. The square is a perfect example of French classical architecture.",
                        history: "Built between 1730 and 1775, the square was designed by architect Ange-Jacques Gabriel. The Miroir d'Eau was added in 2006, creating a modern contrast with the historic buildings. The square was originally named Place Royale.",
                        features: [
                            "Miroir d'Eau reflecting pool",
                            "18th-century architecture",
                            "Fountain of the Three Graces",
                            "Riverside views",
                            "Evening light shows"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "Miroir d'Eau: 10:00 AM - 10:00 PM",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit during the water mirror's active hours",
                            "Take photos during golden hour",
                            "Combine with a river cruise",
                            "Visit nearby wine bars",
                            "Check the light show schedule"
                        ]
                    },
                    {
                        id: "cite-du-vin",
                        name: "Cité du Vin",
                        image: "https://images.sudouest.fr/2015/12/10/57e0ffc366a4bde778c5d4d4/default/le-projet-beneficiera-d-un-tout-nouveau-site-internet-en-debut-d-annee-2016.jpg",
                        description: "Modern wine museum in Bordeaux.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Museum",
                        about: "The Cité du Vin is a unique cultural center dedicated to wine, featuring interactive exhibits, wine tastings, and panoramic views of Bordeaux. The building's architecture, inspired by wine swirling in a glass, has become a modern symbol of the city.",
                        history: "Opened in 2016, the Cité du Vin was designed to celebrate Bordeaux's wine heritage and promote wine culture worldwide. The building was designed by architects Anouk Legendre and Nicolas Desmazières of XTU Architects.",
                        features: [
                            "Interactive wine exhibits",
                            "Wine tasting sessions",
                            "Observation deck",
                            "Restaurant and wine bar",
                            "Temporary exhibitions"
                        ],
                        bestTimeToVisit: "Weekday mornings",
                        openingHours: "10:00 AM - 7:00 PM",
                        entryFee: "€20 (includes wine tasting)",
                        visitorTips: [
                            "Book tickets in advance",
                            "Take the wine tasting class",
                            "Visit the observation deck",
                            "Try the restaurant's wine pairing menu",
                            "Check for special events"
                        ]
                    }
                ]
            },
            {
                id: "mont-saint-michel",
                name: "Mont Saint-Michel",
                image: "https://www.catholicnewsagency.com/images/shutterstock-1466597783.jpg?jpg",
                description: "Medieval abbey on a tidal island.",
                        rating: 4.9,
                duration: "4-5 hours",
                type: "Historic Site",
                about: "Mont Saint-Michel is a UNESCO World Heritage site featuring a stunning medieval abbey built on a rocky tidal island. The abbey's architecture represents a unique blend of Norman and Gothic styles, and the site is famous for its dramatic tides that surround the island.",
                history: "The first monastery was built in the 8th century, and the current abbey was constructed between the 11th and 16th centuries. It served as a major pilgrimage site during the Middle Ages and was later used as a prison during the French Revolution.",
                features: [
                    "Medieval abbey",
                    "Gothic architecture",
                    "Tidal island views",
                    "Pilgrimage path",
                    "Museum of history"
                ],
                bestTimeToVisit: "Early morning or late afternoon",
                openingHours: "9:00 AM - 7:00 PM (May-August), 9:30 AM - 6:00 PM (September-April)",
                entryFee: "€11 (abbey only)",
                visitorTips: [
                    "Check tide times before visiting",
                    "Wear comfortable walking shoes",
                    "Book accommodation in advance",
                    "Visit during off-peak season",
                    "Take a guided tour"
                ]
            },
            {
                id: "medieval-village-mont-saint-michel",
                name: "Medieval Village",
                image: "https://photos.smugmug.com/Normandie-Lovers/Mont-saint-michel/Remparts/i-HB4dmhP/0/101b0ec9/L/remparts_mont_saint_michel-31-L.jpg",
                description: "Historic village surrounding the abbey.",
                rating: 4.7,
                duration: "1-2 hours",
                type: "Historic Site",
                about: "The medieval village of Mont Saint-Michel is a charming settlement that grew around the abbey, featuring narrow streets, historic houses, and traditional shops. The village has maintained its medieval character while adapting to modern tourism.",
                history: "The village developed naturally around the abbey as it became a major pilgrimage site. The houses and shops were built to accommodate pilgrims and provide services to the monastery. Many buildings date from the 15th to 17th centuries.",
                features: [
                    "Historic houses",
                    "Traditional shops",
                    "Restaurants and cafes",
                    "Defensive walls",
                    "Pilgrimage path"
                ],
                bestTimeToVisit: "Early morning or evening",
                openingHours: "Varies by shop/restaurant",
                entryFee: "Free (village only)",
                visitorTips: [
                    "Try the local omelette",
                    "Shop for souvenirs early",
                    "Walk the ramparts",
                    "Visit the small museums",
                    "Stay overnight for the atmosphere"
                ]
            },
            {
                id: "lavender-fields-valensole",
                name: "Lavender Fields",
                image: "https://bucketlistbri.com/wp-content/uploads/2020/04/DSC06116-min-1080x675.jpg",
                description: "Beautiful lavender fields in Provence.",
                        rating: 4.8,
                        duration: "2-3 hours",
                type: "Natural Site",
                about: "The lavender fields of Valensole are one of Provence's most iconic landscapes, featuring endless rows of purple lavender plants. The fields create a stunning visual spectacle and are famous for their beautiful colors and fragrant aroma.",
                history: "Lavender has been cultivated in Provence since the Middle Ages, originally for its medicinal properties. The fields in Valensole became particularly famous in the 20th century as tourism in Provence grew, and the area became known for its picturesque landscapes.",
                features: [
                    "Lavender fields",
                    "Photography spots",
                    "Local lavender products",
                    "Scenic viewpoints",
                    "Walking paths"
                ],
                bestTimeToVisit: "Late June to early August",
                openingHours: "Open 24/7",
                entryFee: "Free",
                visitorTips: [
                    "Visit early morning for best photos",
                    "Bring sunscreen and water",
                    "Respect private property",
                    "Buy local lavender products",
                    "Combine with nearby villages"
                ]
                    },
                    {
                id: "aix-en-provence",
                name: "Aix-en-Provence",
                image: "https://images.ctfassets.net/bth3mlrehms2/19bDzytF4BAVAFlg1aKZso/008f0f9ddef3996f3d3d0356d21da869/iStock-612255330.jpg?w=3680&h=2456&fl=progressive&q=50&fm=jpg",
                description: "Elegant city known for its fountains and markets.",
                        rating: 4.7,
                duration: "Full day",
                type: "City",
                about: "Aix-en-Provence is a charming city known for its elegant architecture, numerous fountains, and vibrant markets. The city combines historic charm with modern amenities, offering a perfect blend of culture, history, and Provençal lifestyle.",
                history: "Founded by the Romans in 123 BC, Aix-en-Provence became the capital of Provence in the Middle Ages. The city flourished during the Renaissance and became known for its artistic and intellectual life. It was the birthplace of painter Paul Cézanne.",
                features: [
                    "Historic fountains",
                    "Local markets",
                    "Cours Mirabeau",
                    "Cathedral of Saint-Sauveur",
                    "Cézanne's studio"
                ],
                bestTimeToVisit: "April to October",
                openingHours: "Varies by attraction",
                entryFee: "Free (city center)",
                visitorTips: [
                    "Visit the morning markets",
                    "Walk the Cours Mirabeau",
                    "Tour Cézanne's studio",
                    "Try local pastries",
                    "Attend the summer festival"
                ]
            }
        ]
    },
    {
        id: 9,
        name: "United States",
        description: "Diverse landscapes, iconic cities, and cultural experiences.",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "US Dollar ($)",
        language: "English",
        timezone: "UTC-12 to UTC+12",
        continent: "North America",
        bestTimeToVisit: "April to October for most regions.",
        visaRequirements: "ESTA or visa required for most nationalities.",
        gettingAround: "Domestic flights, rental cars, and public transportation in cities.",
        tags: ["Nature", "Cities", "Culture", "Entertainment", "Shopping"],
        cities: [
            {
                id: "new-york",
                name: "New York City",
                description: "The city that never sleeps, known for its iconic skyline and cultural diversity.",
                image: "https://media.architecturaldigest.com/photos/5cdadfa704c41e74349a8438/16:9/w_2560%2Cc_limit/GettyImages-931933966.jpg",
                temperature: "-5°C - 35°C",
                places: [
                    {
                        id: "statue-of-liberty",
                        name: "Statue of Liberty",
                        image: "https://media.architecturaldigest.com/photos/5cdadfa704c41e74349a8438/16:9/w_2560%2Cc_limit/GettyImages-931933966.jpg",
                        description: "Iconic symbol of freedom and democracy.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Monument",
                        about: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor. A gift from France to the United States, it has become an enduring symbol of freedom and democracy. The statue represents Libertas, the Roman goddess of freedom.",
                        history: "Designed by French sculptor Frédéric Auguste Bartholdi and built by Gustave Eiffel, the statue was dedicated on October 28, 1886. It was a gift from the French people to commemorate the American Declaration of Independence and the friendship between the two nations.",
                        features: [
                            "Crown observation deck",
                            "Pedestal museum",
                            "Liberty Island",
                            "Ellis Island",
                            "Statue of Liberty Museum"
                        ],
                        bestTimeToVisit: "Early morning",
                        openingHours: "8:30 AM - 4:00 PM",
                        entryFee: "From $24.50 (includes ferry)",
                        visitorTips: [
                            "Book tickets in advance",
                            "Arrive early",
                            "Take the audio tour",
                            "Visit the museum",
                            "Climb to the crown",
                            "Check weather forecast",
                            "Bring water and snacks",
                            "Take the ferry",
                            "Visit Ellis Island",
                            "Take photos"
                        ]
                    },
                    {
                        id: "central-park",
                        name: "Central Park",
                        image: "https://a.cdn-hotels.com/gdcs/staging142/d271/46af3f13-1f67-4a1d-807d-0c38d64c6548.jpg",
                        description: "Urban oasis in the heart of Manhattan.",
                        rating: 4.9,
                        duration: "2-4 hours",
                        type: "Park",
                        about: "Central Park is an urban oasis in the heart of Manhattan, spanning 843 acres. Designed by Frederick Law Olmsted and Calvert Vaux, it features lakes, meadows, and wooded areas, offering a natural escape from the city's hustle and bustle.",
                        history: "Opened in 1857, Central Park was the first landscaped public park in the United States. It was designed to provide a naturalistic landscape in the heart of the city and has since become one of the most visited urban parks in the world.",
                        features: [
                            "Bethesda Fountain",
                            "Bow Bridge",
                            "Central Park Zoo",
                            "Conservatory Garden",
                            "Great Lawn"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "6:00 AM - 10:00 PM",
                        entryFee: "Free (some attractions charge)",
                        visitorTips: [
                            "Rent a bike",
                            "Take a guided tour",
                            "Visit the zoo",
                            "Have a picnic",
                            "Check event calendar",
                            "Visit the gardens",
                            "Take a boat ride",
                            "See the fountains",
                            "Watch street performers",
                            "Visit in different seasons"
                        ]
                    },
                    {
                        id: "times-square",
                        name: "Times Square",
                        image: "http://wallsdesk.com/wp-content/uploads/2016/12/Times-Square-Wallpapers.jpg",
                        description: "Iconic commercial intersection and entertainment hub.",
                        rating: 4.5,
                        duration: "1-2 hours",
                        type: "Entertainment",
                        about: "Times Square is a major commercial intersection and entertainment hub in Midtown Manhattan. Known for its bright billboards and digital displays, it's often called 'The Crossroads of the World' and is one of the world's most visited tourist attractions.",
                        history: "Named after The New York Times, which moved its headquarters there in 1904, Times Square has evolved from a horse-trading district to a center of entertainment and commerce. The annual New Year's Eve ball drop has been a tradition since 1907.",
                        features: [
                            "Digital billboards",
                            "Broadway theaters",
                            "Red Steps",
                            "New Year's Eve ball",
                            "Shopping and dining"
                        ],
                        bestTimeToVisit: "Evening",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit at night",
                            "Watch a Broadway show",
                            "Take photos",
                            "Shop at stores",
                            "Try local restaurants",
                            "Visit the red steps",
                            "Check for events",
                            "Watch street performers",
                            "Visit nearby attractions",
                            "Be aware of crowds"
                        ]
                    }
                ]
            },
            {
                id: "los-angeles",
                name: "Los Angeles",
                description: "Entertainment capital with beaches, Hollywood, and diverse neighborhoods.",
                image: "https://ivctechnologies.com/wp-content/uploads/2019/03/AdobeStock_80216620.jpeg",
                temperature: "10°C - 35°C",
                places: [
                    {
                        id: "hollywood-sign",
                        name: "Hollywood Sign",
                        image: "https://i.pinimg.com/originals/ab/5f/28/ab5f283bf40aebbc8f8b9986f227ceec.jpg",
                        description: "Iconic landmark overlooking Hollywood.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark",
                        about: "The Hollywood Sign is an iconic landmark and American cultural symbol located on Mount Lee in the Hollywood Hills. The 45-foot-tall white letters spell out 'HOLLYWOOD' and are visible from many parts of Los Angeles, representing the entertainment industry and the glamour of Hollywood.",
                        history: "Originally erected in 1923 as 'HOLLYWOODLAND' to advertise a real estate development, the sign was shortened to 'HOLLYWOOD' in 1949. It has undergone several restorations and is now a protected landmark, maintained by the Hollywood Sign Trust.",
                        features: [
                            "Viewing platforms",
                            "Hiking trails",
                            "Griffith Observatory view",
                            "Sunset viewing",
                            "Photo opportunities"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Take the hiking trail",
                            "Visit Griffith Observatory",
                            "Best photos at sunset",
                            "Check weather conditions",
                            "Wear comfortable shoes",
                            "Bring water",
                            "Use viewing platforms",
                            "Respect the landmark",
                            "Take the shuttle",
                            "Combine with other attractions"
                        ]
                    },
                    {
                        id: "santa-monica-pier",
                        name: "Santa Monica Pier",
                        image: "https://govisity.com/wp-content/uploads/2018/10/Santa-Monica-Pier-Los-Angeles-California-Visit-in-USA.jpg",
                        description: "Historic pier with amusement park and ocean views.",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Entertainment",
                        about: "The Santa Monica Pier is a historic landmark featuring an amusement park, restaurants, and entertainment venues. It's one of the most popular destinations in Los Angeles, offering stunning ocean views, the famous Pacific Park, and the historic carousel.",
                        history: "Built in 1909, the Santa Monica Pier was originally constructed to carry sewage away from the shore. It has evolved into a major tourist attraction, featuring the first solar-powered Ferris wheel in the world and maintaining its historic charm while offering modern entertainment.",
                        features: [
                            "Pacific Park",
                            "Ferris wheel",
                            "Historic carousel",
                            "Restaurants",
                            "Fishing deck"
                        ],
                        bestTimeToVisit: "Late afternoon",
                        openingHours: "24/7 (attractions have individual hours)",
                        entryFee: "Free (attractions charge separately)",
                        visitorTips: [
                            "Ride the Ferris wheel",
                            "Try the restaurants",
                            "Watch the sunset",
                            "Visit Pacific Park",
                            "Take photos",
                            "Check event calendar",
                            "Try the carousel",
                            "Walk the pier",
                            "Visit the aquarium",
                            "Enjoy street performers"
                        ]
                    }
                ]
            },
            {
                id: "chicago",
                name: "Chicago",
                description: "Architectural marvels, deep-dish pizza, and lakefront beauty.",
                image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "-15°C - 35°C",
                places: [
                    {
                        id: "millennium-park",
                        name: "Millennium Park",
                        image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Modern urban park with iconic art installations.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Park",
                        about: "Millennium Park is a modern urban park in downtown Chicago, known for its innovative architecture, landscape design, and art installations. The park features the famous Cloud Gate sculpture (The Bean), the Crown Fountain, and the Jay Pritzker Pavilion, making it one of Chicago's most popular attractions.",
                        history: "Opened in 2004, Millennium Park was built on top of a parking garage and railroad tracks. The park was part of a larger plan to transform the area into a cultural center. Despite initial delays and budget overruns, it has become one of Chicago's most successful public spaces.",
                        features: [
                            "Cloud Gate (The Bean)",
                            "Crown Fountain",
                            "Jay Pritzker Pavilion",
                            "Lurie Garden",
                            "BP Bridge"
                        ],
                        bestTimeToVisit: "Morning or early evening",
                        openingHours: "6:00 AM - 11:00 PM",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit Cloud Gate early",
                            "See the Crown Fountain",
                            "Check for concerts",
                            "Walk the BP Bridge",
                            "Visit Lurie Garden",
                            "Take photos",
                            "Attend summer events",
                            "Visit the art installations",
                            "Enjoy the architecture",
                            "Combine with other attractions"
                        ]
                    },
                    {
                        id: "willis-tower",
                        name: "Willis Tower",
                        image: "https://i.pinimg.com/originals/47/7f/f1/477ff166e5be9241d729524d98cd5493.jpg",
                        description: "Iconic skyscraper with observation deck.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark",
                        about: "The Willis Tower (formerly Sears Tower) is a 110-story skyscraper in Chicago. It was the tallest building in the world from 1973 to 1998 and remains one of the tallest buildings in the Western Hemisphere. The Skydeck on the 103rd floor offers breathtaking views of Chicago and beyond.",
                        history: "Completed in 1973, the Willis Tower was built as the headquarters for Sears, Roebuck and Company. The building's innovative bundled-tube design was revolutionary at the time. In 2009, it was renamed Willis Tower after the Willis Group Holdings.",
                        features: [
                            "Skydeck",
                            "The Ledge",
                            "103rd floor views",
                            "Interactive exhibits",
                            "Gift shop"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "9:00 AM - 10:00 PM",
                        entryFee: "From $30.00",
                        visitorTips: [
                            "Book tickets online",
                            "Visit at sunset",
                            "Try The Ledge",
                            "Check weather forecast",
                            "Avoid peak hours",
                            "Take photos",
                            "Visit the gift shop",
                            "See the exhibits",
                            "Combine with other attractions",
                            "Allow time for security"
                        ]
                    }
                ]
            },
            {
                id: "las-vegas",
                name: "Las Vegas",
                description: "Entertainment capital with casinos, shows, and nightlife.",
                image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "5°C - 45°C",
                places: [
                    {
                        id: "strip",
                        name: "The Strip",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461551/strip_bq2bzw.jpg",
                        description: "Famous 4-mile stretch of Las Vegas Boulevard.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Entertainment",
                        about: "The Las Vegas Strip is a 4.2-mile stretch of Las Vegas Boulevard known for its concentration of resort hotels and casinos. It's the heart of Las Vegas entertainment, featuring world-famous hotels, casinos, restaurants, and shows. The Strip is home to some of the most iconic landmarks in Las Vegas.",
                        history: "The Strip began developing in the 1940s when the first casino resorts were built outside the city limits. It has evolved from a simple road with a few hotels to one of the world's most famous entertainment districts, with constantly evolving architecture and attractions.",
                        features: [
                            "Bellagio Fountains",
                            "Luxor Pyramid",
                            "Venetian Resort",
                            "High Roller",
                            "Mirage Volcano"
                        ],
                        bestTimeToVisit: "Evening",
                        openingHours: "24/7",
                        entryFee: "Free (attractions charge separately)",
                        visitorTips: [
                            "Watch the fountains",
                            "Visit the hotels",
                            "See the shows",
                            "Try the restaurants",
                            "Take the monorail",
                            "Visit the casinos",
                            "See the attractions",
                            "Take photos",
                            "Watch the volcano",
                            "Enjoy the nightlife"
                        ]
                    },
                    {
                        id: "fremont-street",
                        name: "Fremont Street",
                        image: "https://media.gettyimages.com/id/599622377/photo/neon-sign-for-fremont-at-night-downtown-las-vegas-nevada-usa.jpg?s=612x612&w=0&k=20&c=7NsoJOdMFBZFCApTDhUPFq_Z1aLFOM2AB-0N4ZvtE_c=",
                        description: "Historic downtown area with light shows and casinos.",
                        rating: 4.6,
                        duration: "3-4 hours",
                        type: "Entertainment",
                        about: "Fremont Street is the historic heart of Las Vegas, featuring the Fremont Street Experience - a pedestrian mall covered by a massive LED canopy. It's known for its vintage casinos, light shows, street performers, and the world's largest video screen.",
                        history: "Fremont Street was the original gambling district of Las Vegas, dating back to the early 1900s. The Fremont Street Experience was created in 1995 to revitalize the area, adding the famous canopy and transforming it into a modern entertainment destination while preserving its historic character.",
                        features: [
                            "Fremont Street Experience",
                            "Vintage casinos",
                            "Zip line",
                            "Light shows",
                            "Street performers"
                        ],
                        bestTimeToVisit: "Evening",
                        openingHours: "24/7",
                        entryFee: "Free (attractions charge separately)",
                        visitorTips: [
                            "Watch the light show",
                            "Try the zip line",
                            "Visit the casinos",
                            "See street performers",
                            "Take photos",
                            "Try the restaurants",
                            "Visit the bars",
                            "Check for events",
                            "See the neon signs",
                            "Enjoy the atmosphere"
                        ]
                    }
                ]
            },
            {
                id: "miami",
                name: "Miami",
                description: "Tropical paradise with beaches, art deco architecture, and vibrant culture.",
                image: "https://www.tripsavvy.com/thmb/iIuadVB5VqfQnXmee3DyK5HcGuk=/2121x1414/filters:fill(auto,1)/miami-skyline--florida-717173477-634a7f9c2192419eb1234e109a27c8fc.jpg",
                temperature: "15°C - 35°C",
                places: [
                    {
                        id: "south-beach",
                        name: "South Beach",
                        image: "https://media.gettyimages.com/id/1299120919/photo/sun-beds-at-miami-beach-on-a-sunny-day-florida-usa.jpg?s=612x612&w=0&k=20&c=nV7I_7yyds1nfSg-FRv1zVAyoobChwuSz9CC8WAhRvk=",
                        description: "Famous beach with art deco architecture and nightlife.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Beach",
                        about: "South Beach is a vibrant neighborhood known for its beautiful beaches, Art Deco architecture, and lively atmosphere. The area features iconic pastel-colored buildings, trendy restaurants, and a famous beachfront that attracts visitors from around the world.",
                        history: "South Beach's Art Deco District was developed in the 1920s and 1930s, featuring the largest collection of Art Deco architecture in the world. The area was revitalized in the 1980s and has since become one of Miami's most popular destinations.",
                        features: [
                            "Art Deco District",
                            "Ocean Drive",
                            "Lummus Park Beach",
                            "Lifeguard Towers",
                            "Lincoln Road Mall"
                        ],
                        bestTimeToVisit: "Morning or late afternoon",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit the beach early",
                            "See Art Deco buildings",
                            "Walk Ocean Drive",
                            "Try the restaurants",
                            "Visit Lincoln Road",
                            "Take photos",
                            "Rent a bike",
                            "Watch the sunset",
                            "Visit the shops",
                            "Enjoy the nightlife"
                        ]
                    },
                    {
                        id: "little-havana",
                        name: "Little Havana",
                        image: "https://i.ytimg.com/vi/7A8-TxfohQg/maxresdefault.jpg",
                        description: "Cuban cultural district with restaurants and music.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Cultural",
                        about: "Little Havana is Miami's Cuban cultural heart, featuring authentic Cuban restaurants, cigar shops, and cultural venues. The neighborhood is known for its vibrant street life, colorful murals, and the famous Calle Ocho (8th Street), which hosts the annual Calle Ocho Festival.",
                        history: "Little Havana developed in the 1960s as Cuban immigrants settled in the area after the Cuban Revolution. It has maintained its Cuban character while becoming a popular tourist destination, offering an authentic taste of Cuban culture in Miami.",
                        features: [
                            "Calle Ocho",
                            "Domino Park",
                            "Cuban restaurants",
                            "Cigar shops",
                            "Cultural Center"
                        ],
                        bestTimeToVisit: "Late morning or early afternoon",
                        openingHours: "24/7 (businesses have individual hours)",
                        entryFee: "Free",
                        visitorTips: [
                            "Try Cuban food",
                            "Visit Domino Park",
                            "Shop for cigars",
                            "See the murals",
                            "Try Cuban coffee",
                            "Take photos",
                            "Visit the markets",
                            "Check for events",
                            "Try the bakeries",
                            "Enjoy the music"
                        ]
                    }
                ]
            },
            {
                id: "san-francisco",
                name: "San Francisco",
                description: "Hilly city known for the Golden Gate Bridge and cable cars.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 25°C",
                places: [
                    {
                        id: "golden-gate-bridge",
                        name: "Golden Gate Bridge",
                        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Iconic suspension bridge spanning the Golden Gate strait.",
                        rating: 4.9,
                        duration: "1-2 hours",
                        type: "Landmark",
                        about: "The Golden Gate Bridge is an iconic suspension bridge spanning the Golden Gate strait, connecting San Francisco to Marin County. Known for its distinctive orange-red color and Art Deco styling, it's one of the most photographed bridges in the world and a symbol of San Francisco.",
                        history: "Completed in 1937, the Golden Gate Bridge was the longest suspension bridge in the world at the time. It was designed by Joseph Strauss and took four years to build. The bridge's distinctive color, called 'International Orange', was chosen to complement the natural surroundings and provide visibility in San Francisco's frequent fog.",
                        features: [
                            "Pedestrian walkway",
                            "Visitor center",
                            "Vista points",
                            "Bridge exhibits",
                            "Gift shop"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "24/7",
                        entryFee: "Free (toll for vehicles)",
                        visitorTips: [
                            "Walk the bridge",
                            "Visit the visitor center",
                            "Take photos",
                            "Check weather forecast",
                            "Watch for fog",
                            "Visit vista points",
                            "See the exhibits",
                            "Visit the gift shop",
                            "Combine with other attractions",
                            "Watch the sunset"
                        ]
                    },
                    {
                        id: "alcatraz",
                        name: "Alcatraz",
                        image: "https://www.gannett-cdn.com/media/2018/08/17/USATODAY/USATODAY/636701422865855661-GettyImages-632216604.jpg",
                        description: "Historic island prison with guided tours.",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Historic Site",
                        about: "Alcatraz Island is a historic site in San Francisco Bay, best known for its federal prison that operated from 1934 to 1963. The island features the prison, a lighthouse, military fortifications, and natural features. It's now part of the Golden Gate National Recreation Area.",
                        history: "Originally a military fortification, Alcatraz became a federal prison in 1934, housing notorious criminals like Al Capone. The prison closed in 1963, and the island was occupied by Native American activists in 1969-1971. It became a national park in 1972 and is now one of San Francisco's most popular attractions.",
                        features: [
                            "Cell house",
                            "Audio tour",
                            "Gardens",
                            "Lighthouse",
                            "Exhibits"
                        ],
                        bestTimeToVisit: "Morning",
                        openingHours: "9:00 AM - 6:00 PM",
                        entryFee: "From $45.00 (includes ferry)",
                        visitorTips: [
                            "Book tickets early",
                            "Take the audio tour",
                            "Visit the cell house",
                            "See the gardens",
                            "Check ferry schedule",
                            "Take photos",
                            "Visit the exhibits",
                            "Bring water",
                            "Wear comfortable shoes",
                            "Check weather forecast"
                        ]
                    }
                ]
            }
        ]
    },
    
    {
        id: 3,
        name: "United Arab Emirates",
        description: "Modern desert nation known for luxury shopping, ultramodern architecture, and lively nightlife.",
        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460783/United-arab_qzwscj.avif",
        currency: "UAE Dirham (AED)",
        language: "Arabic",
        timezone: "UTC+4",
        continent: "Asia",
        bestTimeToVisit: "November to March when temperatures are cooler.",
        visaRequirements: "Visa requirements vary by nationality. Many Western countries receive visa on arrival.",
        gettingAround: "Metro in Dubai, taxis, and ride-sharing services are widely available.",
        tags: ["Luxury", "Architecture", "Shopping", "Desert", "Beaches"],
        cities: [
            {
                id: "dubai",
                name: "Dubai",
                description: "Ultra-modern city known for luxury shopping, futuristic architecture, and vibrant nightlife.",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "20°C - 45°C",
                places: [
                    {
                        id: "burj-khalifa",
                        name: "Burj Khalifa",
                        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        description: "World's tallest building and architectural marvel.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Landmark",
                        about: "Burj Khalifa is the world's tallest building, standing at 828 meters. It's a symbol of Dubai's modern architecture and ambition. The building features the world's highest outdoor observation deck, luxury residences, and the Armani Hotel. Its design was inspired by the geometry of a desert flower.",
                        history: "Construction began in 2004 and was completed in 2010. The building was originally named Burj Dubai but was renamed Burj Khalifa in honor of Sheikh Khalifa bin Zayed Al Nahyan, the president of the UAE. It broke numerous world records during its construction.",
                        features: [
                            "Observation decks (Level 124 and 148)",
                            "Armani Hotel",
                            "Luxury residences",
                            "Restaurants and lounges",
                            "Fountain shows"
                        ],
                        bestTimeToVisit: "Sunset (4:30 PM - 6:30 PM)",
                        openingHours: "9:00 AM - 11:00 PM",
                        entryFee: "From AED 149 (Level 124), AED 378 (Level 148)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Visit during sunset for best views",
                            "Combine with Dubai Mall visit",
                            "Watch the fountain show from the observation deck",
                            "Dress appropriately for the weather"
                        ]
                    },
                    {
                        id: "palm-jumeirah",
                        name: "Palm Jumeirah",
                        image: "https://media.radissonhotels.net/image/radisson-beach-resort-palm-jumeirah-dubai/beach/16256-147704-f75263259_3xl.jpg?impolicy=HomeHero",
                        description: "Man-made palm-shaped island with luxury resorts.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Landmark",
                        about: "Palm Jumeirah is the world's largest man-made island, shaped like a palm tree. It's home to luxury hotels, residential villas, and upscale restaurants. The island features a 2km-long boardwalk with stunning views of the Dubai skyline and the Arabian Gulf.",
                        history: "Construction began in 2001 and was completed in 2006. The island was created using land reclamation, with sand being dredged from the Persian Gulf. It was the first of three planned palm islands, though only Palm Jumeirah was completed.",
                        features: [
                            "Luxury hotels and resorts",
                            "Private beaches",
                            "Waterfront restaurants",
                            "Shopping centers",
                            "Marina and yacht clubs"
                        ],
                        bestTimeToVisit: "October to April",
                        openingHours: "Open 24/7",
                        entryFee: "Free (public areas)",
                        visitorTips: [
                            "Visit the boardwalk at sunset",
                            "Book a hotel stay for beach access",
                            "Try water sports activities",
                            "Visit the Atlantis Aquaventure",
                            "Take a monorail ride for views"
                        ]
                    },
                    {
                        id: "dubai-mall",
                        name: "Dubai Mall",
                        image: "https://www.telegraph.co.uk/content/dam/Travel/hotels/middle-east/united-arab-emirates/dubai/dubai-shopping-guide-lead.jpg",
                        description: "World's largest shopping mall by total area.",
                        rating: 4.7,
                        duration: "4-5 hours",
                        type: "Shopping",
                        about: "The Dubai Mall is the world's largest shopping mall by total area, featuring over 1,200 retail stores, 200 restaurants, and numerous entertainment attractions. It's home to the Dubai Aquarium, an Olympic-sized ice rink, and the world's largest indoor gold souk.",
                        history: "Opened in 2008, the mall was part of the Downtown Dubai development. It was designed to be more than just a shopping center, incorporating entertainment, leisure, and dining options to create a complete destination experience.",
                        features: [
                            "Dubai Aquarium",
                            "Ice rink",
                            "KidZania",
                            "VR Park",
                            "Fashion Avenue"
                        ],
                        bestTimeToVisit: "Weekday mornings",
                        openingHours: "10:00 AM - 12:00 AM",
                        entryFee: "Free (attractions have separate fees)",
                        visitorTips: [
                            "Download the mall map app",
                            "Visit during weekdays to avoid crowds",
                            "Book attractions in advance",
                            "Use the valet parking service",
                            "Combine with Burj Khalifa visit"
                        ]
                    }
                ]
            },
            {                                                                               
                id: "abu-dhabi",
                name: "Abu Dhabi",                                                          
                image: "https://media.istockphoto.com/id/494812908/photo/sea-and-skyscrapers-in-abu-dhabi.jpg?s=612x612&w=0&k=20&c=RDbSQ7Ps2I2opsOho2n6F9aZBrhbLhWU1jyPAZeIT_I=",
                description: "The capital city with a blend of modern skyscrapers, traditional buildings, and cultural attractions.",
                temperature: "20°C - 45°C",
                places: [
                    {
                        id: "sheikh-zayed-mosque",
                        name: "Sheikh Zayed Mosque",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460752/SheikhGrandMosque_zlgz9d.jpg",
                        description: "Largest mosque in the UAE with stunning architecture.",
                        rating: 4.9,
                        duration: "1-2 hours",
                        type: "Religious Site",
                        about: "The Sheikh Zayed Grand Mosque is the largest mosque in the UAE, known for its stunning white marble architecture and intricate Islamic design. It can accommodate over 40,000 worshippers and features the world's largest hand-knotted carpet and chandelier.",
                        history: "Construction began in 1996 and was completed in 2007. The mosque was built to honor the late Sheikh Zayed bin Sultan Al Nahyan, the founding father of the UAE. It combines various Islamic architectural styles from around the world.",
                        features: [
                            "Marble courtyards",
                            "Reflecting pools",
                            "Hand-knotted carpet",
                            "Crystal chandeliers",
                            "Calligraphy art"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "9:00 AM - 10:00 PM (closed during prayer times)",
                        entryFee: "Free",
                        visitorTips: [
                            "Dress modestly (abayas provided)",
                            "Visit during weekdays",
                            "Take a guided tour",
                            "Photography allowed in designated areas",
                            "Check prayer times before visiting"
                        ]
                    },
                    {
                        id: "louvre-abu-dhabi",
                        name: "Louvre Abu Dhabi",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460739/louvre-abu-dhabi_caqvsh.jpg",
                        description: "Art and civilization museum with works from around the world.",
                        bestTimeToVisit: "All year",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Museum"
                    },
                    {
                        id: "ferrari-world",
                        name: "Ferrari World",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460735/ferrari-world_s1utrm.jpg",
                        description: "Indoor Ferrari theme park with thrilling rides.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Theme Park",
                        about: "Ferrari World is the world's first Ferrari-branded theme park, featuring the world's fastest roller coaster and numerous Ferrari-inspired attractions. The park is housed under the world's largest space frame structure, designed to look like a Ferrari GT car.",
                        history: "Opened in 2010, the park was built to celebrate Ferrari's heritage and passion for racing. It was part of Yas Island's development as a major entertainment destination in Abu Dhabi.",
                        features: [
                            "Formula Rossa roller coaster",
                            "Ferrari driving experience",
                            "Racing simulators",
                            "Ferrari factory tour",
                            "Kids' attractions"
                        ],
                        bestTimeToVisit: "Weekday mornings",
                        openingHours: "11:00 AM - 8:00 PM",
                        entryFee: "From AED 295",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Visit during weekdays",
                            "Start with popular rides early",
                            "Try the driving experience",
                            "Check height restrictions for rides"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Italy",
        description: "A country rich in art, history, and culture, from ancient Rome to Renaissance Florence.",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "Euro (€)",
        language: "Italian",
        timezone: "UTC+1",
        continent: "Europe",
        bestTimeToVisit: "April to June and September to October for pleasant weather and fewer crowds.",
        visaRequirements: "Schengen visa required for many nationalities.",
        gettingAround: "Efficient train network and well-connected cities.",
        tags: ["History", "Art", "Food", "Architecture", "Culture"],
        cities: [
            {
                id: "rome",
                name: "Rome",
                description: "The Eternal City, home to ancient ruins and Renaissance art.",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "colosseum",
                        name: "Colosseum",
                        image: "https://cdn1.matadornetwork.com/blogs/1/2023/02/Colosseum-Rome-arena-inside.jpg",
                        description: "Ancient Roman amphitheater and iconic symbol of Rome.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Historic Site",
                        about: "The Colosseum is the largest ancient amphitheater ever built, and a symbol of Imperial Rome. This architectural marvel could hold up to 80,000 spectators and hosted gladiatorial contests, animal hunts, and dramatic performances. Its innovative design and engineering continue to influence modern stadium architecture.",
                        history: "Construction began in 72 AD under Emperor Vespasian and was completed in 80 AD under his successor Titus. The Colosseum was in active use for over 400 years, hosting various events until the 6th century. It has survived earthquakes, fires, and stone robbers to become one of Rome's most iconic landmarks.",
                        features: [
                            "Underground chambers (hypogeum)",
                            "Architectural arches",
                            "Gladiator arena",
                            "Emperor's box",
                            "Historical exhibits"
                        ],
                        bestTimeToVisit: "Early morning (8:30 AM) or late afternoon",
                        openingHours: "8:30 AM - 4:30 PM (varies by season)",
                        entryFee: "€16 (includes Roman Forum and Palatine Hill)",
                        visitorTips: [
                            "Book tickets online to avoid long queues",
                            "Take a guided tour for better understanding",
                            "Visit the underground chambers",
                            "Combine with Roman Forum visit",
                            "Wear comfortable walking shoes"
                        ]
                    },
                    {
                        id: "vatican-museums",
                        name: "Vatican Museums",
                        image: "https://i.pinimg.com/originals/d6/2c/70/d62c70632eaec730b36b1c03a7145f33.jpg",
                        description: "Extensive collection of art and historical artifacts.",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Museum",
                        about: "The Vatican Museums house one of the world's largest and most important art collections, accumulated by the Catholic Church over centuries. The museums include the famous Sistine Chapel, Raphael Rooms, and numerous galleries showcasing classical sculptures, Renaissance art, and modern religious works.",
                        history: "The museums were founded by Pope Julius II in the early 16th century. Over the centuries, successive popes have expanded the collection, adding new buildings and galleries. The Sistine Chapel, painted by Michelangelo between 1508 and 1512, is the crown jewel of the museums.",
                        features: [
                            "Sistine Chapel",
                            "Raphael Rooms",
                            "Borgia Apartments",
                            "Egyptian Museum",
                            "Pio-Clementino Museum"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "9:00 AM - 6:00 PM (closed Sundays)",
                        entryFee: "€17 (€8 for students)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Dress appropriately (covered shoulders and knees)",
                            "Take a guided tour",
                            "Visit the Sistine Chapel first",
                            "Avoid visiting on free Sundays"
                        ]
                    },
                    {
                        id: "trevi-fountain",
                        name: "Trevi Fountain",
                        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Rome's most famous Baroque fountain.",
                        rating: 4.7,
                        duration: "30 minutes",
                        type: "Historic Site",
                        about: "The Trevi Fountain is Rome's largest and most famous Baroque fountain. Designed by Nicola Salvi and completed by Giuseppe Pannini in 1762, it features a magnificent sculpture of Oceanus riding a chariot pulled by sea horses, surrounded by tritons and other mythological figures.",
                        history: "The fountain was built at the end of an ancient aqueduct that brought water to Rome. The current Baroque design replaced an earlier, simpler fountain in the 18th century. The tradition of throwing coins into the fountain (with your back to it) dates back to the 1954 film 'Three Coins in the Fountain'.",
                        features: [
                            "Baroque architecture",
                            "Oceanus sculpture",
                            "Triton figures",
                            "Coin throwing tradition",
                            "Night illumination"
                        ],
                        bestTimeToVisit: "Early morning or late evening",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Throw coins with your back to the fountain",
                            "Be aware of pickpockets",
                            "Visit at night for beautiful lighting",
                            "Combine with nearby attractions"
                        ]
                    }
                ]
            },
            {
                id: "venice",
                name: "Venice",
                description: "The floating city of canals, bridges, and historic architecture.",
                image: "https://images.unsplash.com/photo-1534113416831-3497d2f1c0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "5°C - 28°C",
                places: [
                    {
                        id: "grand-canal",
                        name: "Grand Canal",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460942/grandcanal_aywl6c.jpg",
                        description: "Venice's main waterway and the city's most famous canal.",
                        rating: 4.9,
                        duration: "1-2 hours",
                        type: "Historic Site",
                        about: "The Grand Canal is Venice's main waterway, forming a large S-shape through the heart of the city. It is lined with more than 170 buildings, most of which date from the 13th to the 18th century, showcasing the wealth and art of the Republic of Venice.",
                        history: "The Grand Canal has been the main thoroughfare of Venice since the city's founding. The palaces along its banks were built by wealthy Venetian families to demonstrate their power and influence. The canal has been the center of Venetian life for centuries, serving as the main transportation route and commercial hub.",
                        features: [
                            "Historic palaces and buildings",
                            "Rialto Bridge",
                            "Gondola rides",
                            "Vaporetto (water bus) service",
                            "Historic churches"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "24/7",
                        entryFee: "Free (Vaporetto tickets required for public transport)",
                        visitorTips: [
                            "Take a vaporetto ride for the best views",
                            "Consider a gondola ride for a romantic experience",
                            "Visit during the early morning for fewer crowds",
                            "Take photos from the Rialto Bridge",
                            "Watch the sunset from the water"
                        ]
                    },
                    {
                        id: "st-marks-square",
                        name: "St. Mark's Square",
                        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Venice's main public square and the heart of the city.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic Site",
                        about: "St. Mark's Square (Piazza San Marco) is Venice's principal public square and one of the most famous squares in the world. It is surrounded by historic buildings including St. Mark's Basilica, the Doge's Palace, and the Campanile. The square has been the center of Venetian life for centuries.",
                        history: "The square was originally established in the 9th century as a small area in front of St. Mark's Basilica. It was expanded to its current size in the 12th century and has been the site of important political, religious, and social events throughout Venice's history. The square has been called 'the drawing room of Europe' by Napoleon.",
                        features: [
                            "St. Mark's Basilica",
                            "Doge's Palace",
                            "Campanile (bell tower)",
                            "Procuratie buildings",
                            "Café Florian"
                        ],
                        bestTimeToVisit: "Early morning or late evening",
                        openingHours: "24/7 (individual attractions have specific hours)",
                        entryFee: "Free (individual attractions have separate fees)",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Dress appropriately for St. Mark's Basilica",
                            "Enjoy coffee at historic Café Florian",
                            "Climb the Campanile for panoramic views",
                            "Watch the sunset over the square"
                        ]
                    }
                ]
            },
            {
                id: "florence",
                name: "Florence",
                image: "https://images.unsplash.com/photo-1541370976291-dec1f7826c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                description: "Birthplace of the Renaissance, home to world-famous art and architecture.",
                temperature: "8°C - 32°C",
                places: [
                    {
                        id: "uffizi-gallery",
                        name: "Uffizi Gallery",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460936/uffizi_dj1teq.jpg",
                        description: "World-renowned art museum housing Renaissance masterpieces.",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Museum",
                        about: "The Uffizi Gallery is one of the world's most important art museums, housing an extensive collection of Italian Renaissance art. The museum's architecture, designed by Giorgio Vasari, is itself a masterpiece, with its long corridors and stunning views of the Arno River.",
                        history: "The gallery was originally built in 1560 as offices for the Florentine magistrates. The Medici family began displaying their art collection here in 1581, and it was opened to the public in 1765. The building's architecture and the art collection reflect Florence's central role in the Renaissance.",
                        features: [
                            "Botticelli's 'Birth of Venus'",
                            "Michelangelo's 'Doni Tondo'",
                            "Raphael's portraits",
                            "Caravaggio's works",
                            "Vasari Corridor"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "8:15 AM - 6:50 PM (closed Mondays)",
                        entryFee: "€20 (€2 for EU citizens 18-25)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Visit the rooftop café",
                            "Take a guided tour",
                            "Start from the top floor",
                            "Allow at least 3 hours"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Spain",
        description: "Vibrant culture, stunning architecture, and beautiful beaches.",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "Euro (€)",
        language: "Spanish",
        timezone: "UTC+1",
        continent: "Europe",
        bestTimeToVisit: "April to June and September to October for pleasant weather and fewer crowds.",
        visaRequirements: "Schengen visa required for many nationalities. EU citizens can travel freely.",
        gettingAround: "Extensive train network, domestic flights, and regional buses available.",
        tags: ["Culture", "Beaches", "Food", "Architecture", "History"],
        cities: [
            {
                id: "barcelona",
                name: "Barcelona",
                description: "Artistic city with unique architecture and Mediterranean charm.",
                image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "sagrada-familia",
                        name: "Sagrada Familia",
                        image: "https://cdn.britannica.com/38/122138-050-B556649B/Antoni-Gaudi-Temple-Expiatori-de-la-Sagrada-Familia-Barcelona-Spain.jpg",
                        description: "Gaudí's iconic basilica and UNESCO World Heritage site in Barcelona.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Religious Site",
                        about: "The Sagrada Familia is a world-famous basilica designed by Antoni Gaudí. Its unique architecture, intricate facades, and stunning interiors make it one of the most visited monuments in Spain.",
                        history: "Construction began in 1882 and continues to this day. Gaudí devoted the last years of his life to the project, and it is expected to be completed in the coming decades.",
                        features: [
                            "Nativity and Passion facades",
                            "Towering spires",
                            "Stained glass windows",
                            "Museum and crypt",
                            "Panoramic city views"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "9:00 AM - 8:00 PM",
                        entryFee: "€26 (basic), €36 (with tower access)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Visit early to avoid crowds",
                            "Dress modestly for entry",
                            "Take the elevator to the towers",
                            "Allow time for the museum"
                        ],
                        images: [
                            "https://4.bp.blogspot.com/-ML-dXdisX-o/VsDiSdkE3WI/AAAAAAAAXgI/5BIyn8qEgsM/s1600/BARCELONA-SAGRADA-FAMILIA-NAU-PRINCIPAL.jpg",
                            "https://cdn.britannica.com/38/122138-050-B556649B/Antoni-Gaudi-Temple-Expiatori-de-la-Sagrada-Familia-Barcelona-Spain.jpg",
                            "http://www.barcelonacheckin.com/img/stored_images/barcelona/articles_images/Inside.jpg",
                            "https://cdn.citywonders.com/media/16601/gaudi-sagrada-familia-barcelona.jpg"
                        ]
                    },
                    {
                        id: "park-guell",
                        name: "Park Güell",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460745/ParkG%C3%BCell_jza4bd.jpg",
                        description: "Colorful public park designed by Antoni Gaudí in Barcelona.",
                        rating: 4.8,
                        duration: "2 hours",
                        type: "Park",
                        about: "Park Güell is a public park system composed of gardens and architectonic elements located on Carmel Hill. Designed by Antoni Gaudí, it is known for its vibrant mosaics, whimsical buildings, and panoramic views of Barcelona.",
                        history: "Built between 1900 and 1914, Park Güell was originally intended as a residential project but became a public park in 1926.",
                        features: [
                            "Colorful mosaic benches",
                            "Gaudí House Museum",
                            "Lizard sculpture (El Drac)",
                            "Hypostyle Room",
                            "Panoramic viewpoints"
                        ],
                        bestTimeToVisit: "Morning or late afternoon",
                        openingHours: "9:30 AM - 7:30 PM",
                        entryFee: "€10",
                        visitorTips: [
                            "Book tickets in advance",
                            "Wear comfortable shoes",
                            "Bring water in summer",
                            "Explore the free-access areas",
                            "Visit the Gaudí House Museum"
                        ],
                        images: [
                            "https://www.reisroutes.be/userfiles/fotos/park-g-252-ell_1784_xl.jpg",
                            "https://www.magicdreamsbarcelona.com/wp-content/uploads/2022/01/guell-park-g7f7320d6d_1920-copia.jpg",
                            "https://a.cdn-hotels.com/gdcs/production192/d1884/c260d3fd-142b-445d-9e39-72a3dc0442a4.jpg",
                            "https://i.pinimg.com/originals/a3/57/c6/a357c68bfe4e771813bf6d5dd72563d4.jpg"
                        ]
                    },
                    {
                        id: "casa-batllo",
                        name: "Casa Batlló",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460739/CasaBatllo_kh7kl7.jpg",
                        description: "Gaudí's modernist masterpiece with a colorful facade in Barcelona.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Museum",
                        about: "Casa Batlló is a renowned building restored by Antoni Gaudí, featuring a colorful mosaic facade, unique balconies, and a fantastical interior. It is a UNESCO World Heritage site and a highlight of Barcelona's modernist architecture.",
                        history: "Originally built in 1877, the house was remodeled by Gaudí in 1904-1906 for the Batlló family.",
                        features: [
                            "Colorful mosaic facade",
                            "Wavy balconies",
                            "Dragon-back roof",
                            "Noble Floor museum",
                            "Rooftop terrace"
                        ],
                        bestTimeToVisit: "Late afternoon",
                        openingHours: "9:00 AM - 9:00 PM",
                        entryFee: "€25",
                        visitorTips: [
                            "Book tickets online",
                            "Use the SmartGuide app",
                            "Visit the rooftop at sunset",
                            "Check for special exhibitions",
                            "Allow time for the museum"
                        ],
                        images: [
                            "https://www.femturisme.cat/_fotos/establiments/general/12116-02-Casa-Batllo-Barcelona-Antoni-Gaudi.jpg",
                            "https://randomtrip.net/wp-content/uploads/2023/08/z-portada-patio-de-luces-casa-batllo-1-2.jpg",
                            "https://barcelona-home.com/blog/wp-content/upload/2013/09/casa_batllo_21.jpg",
                            "https://www.bcn.travel/wp-content/uploads/casa-batllo-facade.jpg"
                        ]
                    },
                    {
                        id: "la-rambla",
                        name: "La Rambla",
                        image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/09/plaza-de-catalunya.jpg",
                        description: "Barcelona's most famous pedestrian street, lined with shops and cafes.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Street",
                        about: "La Rambla is a bustling tree-lined pedestrian street in central Barcelona, stretching from Plaça de Catalunya to the Christopher Columbus Monument at Port Vell. It's famous for its lively atmosphere, street performers, and historic sites.",
                        history: "La Rambla was originally a dry riverbed and became a central promenade in the 18th century. It has long been a hub of social and commercial activity in Barcelona.",
                        features: [
                            "Street performers",
                            "Boqueria Market",
                            "Historic theaters",
                            "Flower stalls",
                            "Plaça Reial"
                        ],
                        bestTimeToVisit: "Morning or evening",
                        openingHours: "Open 24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Watch for pickpockets",
                            "Try local snacks at Boqueria Market",
                            "Visit in the evening for nightlife",
                            "Explore side streets",
                            "Take photos at Plaça Reial"
                        ],
                        images: [
                            "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/09/plaza-de-catalunya.jpg",
                            "https://cdn.getyourguide.com/img/tour/5cebb18a05387.jpeg/145.jpg",
                            "https://cdn-imgix.headout.com/microbrands-content-image/image/ce2c18a54e0228f9cf4fdbcccf41f74a-la%20rambla.jpg",
                            "https://guidetourism.net/wp-content/uploads/2023/03/0The-La-Rambla-most-famous-street-in-Barcelona.jpg"
                        ]
                    }
                ]
            },
            {
                id: "madrid",
                name: "Madrid",
                description: "Spain's capital with rich art and cultural heritage.",
                image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "5°C - 35°C",
                places: [
                    {
                        id: "prado-museum",
                        name: "Prado Museum",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460753/padromuseum_v3unwr.jpg",
                        description: "One of the world's finest art museums, home to masterpieces by Velázquez, Goya, and El Greco",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Museum",
                        about: "The Prado Museum is Spain's main national art museum, housing one of the world's finest collections of European art from the 12th to the early 20th century. The museum's collection includes masterpieces by Velázquez, Goya, El Greco, and other renowned artists.",
                        history: "Founded in 1819, the museum was originally intended to showcase the Spanish royal collection. Over the years, it has expanded to include works from various European schools, making it one of the most comprehensive art museums in the world.",
                        features: [
                            "Velázquez's Las Meninas",
                            "Goya's Black Paintings",
                            "El Greco's works",
                            "Flemish and Italian art",
                            "Temporary exhibitions"
                        ],
                        bestTimeToVisit: "Weekday mornings or free hours (6-8 PM)",
                        openingHours: "10:00 AM - 8:00 PM (closed Mondays)",
                        entryFee: "€15 (free for students and under 18)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Visit during free hours (6-8 PM)",
                            "Start with the most famous works",
                            "Use the museum's free app for navigation",
                            "Take a guided tour for better understanding"
                        ],
                        images: [
                            "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460753/padromuseum_v3unwr.jpg",
                            "https://www.museodelprado.es/assets/img/header/header.jpg",
                            "https://www.museodelprado.es/assets/img/header/header-2.jpg",
                            "https://www.museodelprado.es/assets/img/header/header-3.jpg"
                        ]
                    },
                    {
                        id: "retiro-park",
                        name: "Retiro Park",
                        image: "https://i.pinimg.com/originals/62/f5/b9/62f5b90952d839b0834ee2dcf0ed21fa.jpg",
                        description: "Beautiful park with Crystal Palace and boating lake.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Park",
                        about: "Retiro Park (Parque del Retiro) is Madrid's most famous park and a UNESCO World Heritage site. This 125-hectare green space features beautiful gardens, a large lake, and numerous monuments. It's a perfect place to relax, enjoy outdoor activities, and experience local culture.",
                        history: "Originally created as a royal garden in the 17th century for Philip IV, the park was opened to the public in the 19th century. It has since become a beloved public space and a symbol of Madrid's cultural heritage.",
                        features: [
                            "Crystal Palace (Palacio de Cristal)",
                            "Retiro Lake with rowboats",
                            "Rose Garden (La Rosaleda)",
                            "Monument to Alfonso XII",
                            "Velázquez Palace",
                            "Outdoor cafes and restaurants",
                            "Street performers and artists"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon, especially in spring and fall",
                        openingHours: "6:00 AM - 10:00 PM (varies by season)",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning for a peaceful experience",
                            "Rent a rowboat on the lake (€6 for 45 minutes)",
                            "Explore the Crystal Palace and its exhibitions",
                            "Bring a picnic to enjoy in the gardens",
                            "Check for outdoor events and performances",
                            "Visit the Rose Garden in spring",
                            "Take photos at sunset from the lake"
                        ],
                        images: [
                            "https://i.pinimg.com/originals/62/f5/b9/62f5b90952d839b0834ee2dcf0ed21fa.jpg",
                            "https://www.madrid-tourist-guide.com/images/attractions/parque-del-retiro/palacio-de-cristal-retiro.jpg",
                            "https://www.madrid-tourist-guide.com/images/attractions/parque-del-retiro/estanque-retiro.jpg",
                            "https://www.madrid-tourist-guide.com/images/attractions/parque-del-retiro/rosaleda-retiro.jpg"
                        ]
                    },
                    {
                        id: "plaza-mayor",
                        name: "Plaza Mayor",
                        image: "http://studentweb.cortland.edu/Christine.Murphy/miniproj1/PlazaMayorSalamanca.jpg",
                        description: "Historic square with beautiful architecture and outdoor cafes.",
                        rating: 4.7,
                        duration: "1 hour",
                        type: "Square",
                        about: "Plaza Mayor is a grand arcaded square in the heart of Madrid, known for its impressive architecture, lively atmosphere, and historic significance.",
                        history: "Built in the early 17th century during the reign of Philip III, the square has hosted markets, bullfights, and public events for centuries.",
                        features: [
                            "Statue of Philip III",
                            "Historic arcades",
                            "Outdoor cafes",
                            "Street performers",
                            "Seasonal markets"
                        ],
                        bestTimeToVisit: "Evening",
                        openingHours: "Open 24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Enjoy coffee at a terrace cafe",
                            "Visit during Christmas market",
                            "Watch street performers",
                            "Take photos at sunset",
                            "Explore nearby streets"
                        ],
                        images: [
                            "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                            "https://www.tripsavvy.com/thmb/Ell2hp1DNZaHLelpv0n_dN0caqw=/5525x0/filters:no_upscale():max_bytes(150000):strip_icc()/Madrid-PlazaMayor-1-b337c8860dee4a30a4165096ac059c45.jpg",
                            "https://www.10posti.it/photos/spain-madrid-main-square-plaza-mayor-2.jpg",
                            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/ca/e4/d7/caption.jpg?w=1400&h=-1&s=1"
                        ]
                    },
                    {
                        id: "manchester-art-gallery",
                        name: "Manchester Art Gallery",
                        image: "https://i2-prod.manchestereveningnews.co.uk/incoming/article8373569.ece/ALTERNATES/s1227b/JS50586251.jpg",
                        description: "A major art museum in the city center featuring Pre-Raphaelite masterpieces, contemporary art, and decorative arts. The gallery houses one of the finest collections of Victorian art in the UK, including works by Ford Madox Brown, Dante Gabriel Rossetti, and Edward Burne-Jones.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Museum",
                        features: [
                            "Pre-Raphaelite collection",
                            "Contemporary art exhibitions",
                            "Victorian architecture",
                            "Café and gift shop",
                            "Free entry"
                        ],
                        history: "Founded in 1824, the Manchester Art Gallery is one of the country's most significant art institutions. The building combines Victorian architecture with modern extensions, creating a unique space that bridges historical and contemporary art.",
                        bestTimeToVisit: "Weekday mornings for smaller crowds",
                        openingHours: "Mon-Sun: 10:00 - 17:00",
                        entryFee: "Free",
                        visitorTips: [
                            "Check for special exhibitions",
                            "Join a guided tour",
                            "Visit the cafe",
                            "Allow time for the shop",
                            "Explore the decorative arts section"
                        ],
                        images: [
                            "https://i2-prod.manchestereveningnews.co.uk/incoming/article8373569.ece/ALTERNATES/s1227b/JS50586251.jpg",
                            "https://www.reisroutes.be/userfiles/fotos/manchester-art-gallery-bezoeken-manchester_39276_xl.jpg",
                            "https://www.mancunianmatters.co.uk/wp-content/uploads/2021/08/Uncertain-Futures-installation-in-Manchester-Art-Gallery-Photo-Andrew-Brooks_12-970x605.jpg",
                            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjurfwuzkV2dvJkHx8Qw9V3ERMDsdtcg2CvkX2pCv9k0CppR2I7ovGguF3sqpXgoD-4sPWjkCHZ-y-rrnnhwwjuuW3BbiKwmNmc48rv6xu7Na01WVPRe298iWJrqKwXx_5FUEXOTTOSJufMR6PJMlq-CSynHNyhe-W4L433jSACRN1GG1BIkeSlGeyo-A/s1400/Dandy_Style_Decorated_Dandy_Exhibition.jpg"
                        ]
                    }
                ]
            },
            {
                id: "seville",
                name: "Seville",
                description: "Andalusian city known for flamenco, tapas, and Moorish architecture.",
                image: "https://tse4.mm.bing.net/th?id=OIP.5IA4-kPiXhKtgqAECiBeKgHaEK&pid=Api&P=0&h=180",
                temperature: "10°C - 40°C",
                places: [
                    {
                        id: "alcazar",
                        name: "Real Alcázar",
                        image: "https://s.inyourpocket.com/gallery/seville/2019/09/real-alcazar-patio-doncellas-sevilla-59184254-istock.jpg",
                        description: "Royal palace with stunning Moorish architecture and gardens.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Palace",
                        about: "The Real Alcázar of Seville is a royal palace that combines Islamic and Christian architectural styles. This UNESCO World Heritage site features stunning Mudéjar architecture, beautiful gardens, and centuries of history. It's still used by the Spanish royal family as their official residence in Seville.",
                        history: "Originally built as a Moorish fort in the 10th century, the palace was expanded and renovated by various Spanish monarchs. The current structure dates mainly from the 14th century, with additions made in subsequent centuries. It represents a unique blend of Islamic and Christian architectural traditions.",
                        features: [
                            "Patio de las Doncellas (Courtyard of the Maidens)",
                            "Salón de Embajadores (Ambassadors' Hall)",
                            "Baths of María de Padilla",
                            "Gardens of the Alcázar",
                            "Mudéjar architecture",
                            "Gothic and Renaissance elements",
                            "Royal apartments"
                        ],
                        bestTimeToVisit: "Early morning (9:30 AM) or late afternoon to avoid crowds",
                        openingHours: "9:30 AM - 5:00 PM (varies by season)",
                        entryFee: "€13.50 (includes audio guide)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Visit early morning to avoid crowds",
                            "Take the audio guide tour",
                            "Allow time to explore the gardens",
                            "Dress appropriately (covered shoulders and knees)",
                            "Visit the upper floors for panoramic views",
                            "Check for special evening visits in summer"
                        ],
                        images: [
                            "https://s.inyourpocket.com/gallery/seville/2019/09/real-alcazar-patio-doncellas-sevilla-59184254-istock.jpg",
                            "https://www.alcazarsevilla.org/wp-content/uploads/2019/12/patio-de-las-doncellas.jpg",
                            "https://www.alcazarsevilla.org/wp-content/uploads/2019/12/salon-de-embajadores.jpg",
                            "https://www.alcazarsevilla.org/wp-content/uploads/2019/12/jardines-del-alcazar.jpg"
                        ]
                    },
                    {
                        id: "seville-cathedral",
                        name: "Seville Cathedral",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461276/SevilleCathedral_skkjda.avif",
                        description: "Largest Gothic cathedral in the world and home to Christopher Columbus's tomb.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Religious Site",
                        about: "The Cathedral of Saint Mary of the See, better known as Seville Cathedral, is the largest Gothic cathedral in the world and a UNESCO World Heritage site. It was built on the site of a former mosque and combines Gothic, Renaissance, and Baroque architectural styles. The cathedral houses numerous works of art and the tomb of Christopher Columbus.",
                        history: "Construction began in 1401 and took over a century to complete. The cathedral was built to demonstrate Seville's wealth and power after the Reconquista. It incorporates elements from the original mosque, including the Giralda tower, which was converted from the mosque's minaret.",
                        features: [
                            "Giralda Tower (former minaret)",
                            "Christopher Columbus's tomb",
                            "Main altarpiece (largest in the world)",
                            "Royal Chapel",
                            "Sacristy with religious art",
                            "Patio de los Naranjos (Orange Tree Courtyard)",
                            "Treasury with precious artifacts"
                        ],
                        bestTimeToVisit: "Early morning (9:30 AM) or late afternoon to avoid crowds",
                        openingHours: "Monday to Saturday: 10:45 AM - 5:00 PM, Sunday: 2:30 PM - 6:00 PM",
                        entryFee: "€12 (includes audio guide)",
                        visitorTips: [
                            "Book tickets online in advance",
                            "Visit early morning to avoid crowds",
                            "Take the audio guide tour",
                            "Climb the Giralda tower for panoramic views",
                            "Dress appropriately (covered shoulders and knees)",
                            "Allow time to explore the treasury",
                            "Visit the Patio de los Naranjos"
                        ],
                        
                    }
                ]
            },
            {
                id: "granada",
                name: "Granada",
                description: "Historic city with stunning Alhambra palace and Moorish influence.",
                image: "https://tse4.mm.bing.net/th?id=OIP.Vmwj9AyO5o1e3-89DF6z2wHaE7&pid=Api&P=0&h=180",
                temperature: "5°C - 35°C",
                places: [
                    {
                        id: "alhambra",
                        name: "Alhambra",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461276/Alhambra_fi6lxe.jpg",
                        description: "A stunning palace and fortress complex from the Nasrid dynasty, showcasing Islamic architecture and art.",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Historical Site",
                        about: "The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain. It was originally constructed as a small fortress in 889 CE and was largely ignored until its ruins were renovated and rebuilt in the mid-11th century by the Moorish emir Mohammed ben Al-Ahmar of the Emirate of Granada, who built its current palace and walls. It was converted into a royal palace in 1333 by Yusuf I, Sultan of Granada.",
                        history: "The Alhambra's Islamic palaces were built for the last Muslim emirs in Spain and its court, of the Nasrid dynasty. After the Reconquista by the Reyes Católicos (Catholic Monarchs) in 1492, some portions were used by the Christian rulers. The Alhambra is a UNESCO World Heritage Site and the inspiration for many songs and stories.",
                        features: [
                            "Nasrid Palaces",
                            "Generalife Gardens",
                            "Palace of Charles V",
                            "Alcazaba (fortress)",
                            "Court of the Lions",
                            "Hall of the Ambassadors",
                            "Patio de los Arrayanes (Myrtles Courtyard)",
                            "Tower of Comares"
                        ],
                        bestTimeToVisit: "Early morning (8:30 AM) or late afternoon to avoid crowds",
                        openingHours: "April to October: 8:30 AM - 8:00 PM, November to March: 8:30 AM - 6:00 PM",
                        entryFee: "€19 (includes Nasrid Palaces)",
                        visitorTips: [
                            "Book tickets online at least 3 months in advance",
                            "Visit early morning to avoid crowds",
                            "Wear comfortable walking shoes",
                            "Bring water and snacks",
                            "Allow at least 3-4 hours for the full visit",
                            "Don't miss the Nasrid Palaces (requires timed entry)",
                            "Visit the Generalife Gardens",
                            "Take a guided tour for better understanding",
                            "Photography is allowed but no flash in palaces"
                        ],
                        
                    },
                    {
                        id: "albaicin",
                        name: "Albaicín",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461277/Albaic%C3%ADn_eyxzh0.jpg",
                        description: "The Albaicín is Granada's historic Moorish quarter, a UNESCO World Heritage site known for its narrow, winding streets, white-washed houses, and stunning views of the Alhambra. This ancient neighborhood preserves the medieval Islamic urban fabric with its characteristic 'cármenes' (houses with gardens), traditional water channels, and numerous viewpoints offering panoramic vistas. The area is home to historic churches, ancient Arab baths, and the famous Mirador de San Nicolás, where visitors can enjoy one of the best views of the Alhambra, especially at sunset. The neighborhood's authentic atmosphere, traditional tea houses, and local craft shops make it a must-visit destination for those seeking to experience Granada's rich cultural heritage.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Historic District",
                        about: "Visit early morning or late afternoon to avoid crowds. Book tickets in advance during peak season. Wear comfortable shoes for walking.",
                        history: "The Albaicín dates back to the Nasrid period (13th-15th centuries) and was the main residential area of Granada during the Islamic rule. After the Christian conquest in 1492, the neighborhood maintained its Moorish character while incorporating new Christian elements. The area's unique urban layout and architecture have been preserved through centuries, making it one of the best-preserved examples of medieval Islamic urban planning in Europe.",
                        features: [
                            "Medieval Islamic urban layout with narrow, winding streets",
                            "Traditional cármenes (Moorish houses with gardens)",
                            "Ancient water channels and cisterns",
                            "Historic churches built on former mosque sites",
                            "Panoramic viewpoints of the Alhambra",
                            "Traditional Arab baths",
                            "Local craft shops and tea houses"
                        ]
                    }
                ]
            },
            {
                id: "ibiza",
                name: "Ibiza",
                description: "Famous party island with beautiful beaches and historic old town.",
                image: "https://tse3.mm.bing.net/th?id=OIP.7kDOM8zkw3gyVg6iEjGmrwHaE3&pid=Api&P=0&h=180",
                temperature: "15°C - 35°C",
                places: [
                    {
                        id: "dalt-vila",
                        name: "Dalt Vila",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461274/DaltVila_ezvntj.jpg",
                        description: "Historic fortified old town of Ibiza, a UNESCO World Heritage site.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historical Site",
                        about: "Dalt Vila is the historic fortified old town of Ibiza, perched on a hill overlooking the harbor. This UNESCO World Heritage site features Renaissance walls, narrow cobbled streets, and stunning views of the Mediterranean. The site has been inhabited since the Phoenician period and showcases various architectural influences from different periods of its history.",
                        history: "The current fortifications were built in the 16th century by the Italian military engineer Giovanni Battista Calvi, commissioned by King Philip II of Spain to protect the island from Ottoman attacks. The walls incorporate elements from earlier periods, including Phoenician, Roman, and Moorish structures.",
                        features: [
                            "Renaissance walls and bastions",
                            "Cathedral of Santa Maria",
                            "Archaeological Museum",
                            "Plaza de Vila (main square)",
                            "Castle of Ibiza",
                            "Defensive towers",
                            "Historic gates",
                            "Panoramic viewpoints"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon to avoid heat and crowds",
                        openingHours: "Open 24/7 (some attractions have specific hours)",
                        entryFee: "Free (some museums and attractions may charge)",
                        visitorTips: [
                            "Wear comfortable walking shoes for the steep streets",
                            "Bring water, especially in summer",
                            "Visit the Cathedral of Santa Maria",
                            "Explore the Archaeological Museum",
                            "Walk the entire wall circuit for best views",
                            "Visit the main square (Plaza de Vila)",
                            "Take photos from the bastions",
                            "Visit during sunset for magical lighting",
                            "Check opening hours of museums in advance",
                            "Combine with a visit to the harbor area"
                        ]
                    },
                    {
                        id: "cala-comte",
                        name: "Cala Comte",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461273/CalaComte_lem6qv.jpg",
                        description: "One of Ibiza's most beautiful beaches with crystal-clear turquoise waters and stunning sunsets.",
                        rating: 4.9,
                        duration: "Half day",
                        type: "Beach",
                        about: "Cala Comte (also known as Cala Conta) is one of Ibiza's most famous beaches, renowned for its crystal-clear turquoise waters, white sand, and spectacular sunsets. The beach is divided into several small coves, each offering a unique perspective of the Mediterranean Sea and the nearby islands of Conillera and Bosc.",
                        history: "Originally a quiet fishing cove, Cala Comte gained popularity in the 1960s and 1970s as part of Ibiza's transformation into a world-famous tourist destination. Today, it's considered one of the island's most beautiful natural attractions while maintaining its pristine environment.",
                        features: [
                            "Multiple small coves",
                            "Crystal-clear turquoise waters",
                            "White sand beaches",
                            "Sunset viewpoints",
                            "Beach restaurants and bars",
                            "Water sports facilities",
                            "Island views",
                            "Natural rock formations"
                        ],
                        bestTimeToVisit: "Late afternoon for sunset views, or early morning for peaceful swimming",
                        openingHours: "Open 24/7 (restaurants and bars have specific hours)",
                        entryFee: "Free",
                        visitorTips: [
                            "Arrive early to secure a good spot",
                            "Bring water and snacks",
                            "Stay for the famous sunset",
                            "Try the beach restaurants",
                            "Bring snorkeling gear",
                            "Park in the main parking area",
                            "Visit during weekdays to avoid crowds",
                            "Bring cash for beach bars",
                            "Check weather conditions before visiting",
                            "Combine with a visit to nearby Cala Bassa"
                        ],
                        images: [
                            "/src/assets/spain/CalaComte.jpg",
                            "/src/assets/spain/CalaComte2.jpg",
                            "/src/assets/spain/CalaComte3.jpg",
                            "/src/assets/spain/CalaComte4.jpg"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Thailand",
        description: "A tropical paradise known for its beaches, temples, and vibrant street life.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        currency: "Thai Baht (฿)",
        language: "Thai",
        timezone: "UTC+7",
        continent: "Asia",
        bestTimeToVisit: "November to early April for the best weather and minimal rainfall.",
        visaRequirements: "Many countries receive 30-day visa exemption. Check specific requirements based on nationality.",
        gettingAround: "Domestic flights, trains, buses, and tuk-tuks. Bangkok has an efficient BTS and MRT system.",
        tags: ["Beaches", "Culture", "Food", "Temples", "Nature"],
        cities: [
            {
                id: "bangkok",
                name: "Bangkok",
                description: "Thailand's vibrant capital city, known for its street life, cultural landmarks, and shopping.",
                image: "https://tse4.mm.bing.net/th?id=OIP.Pyi5AcmaDQGCLRI8sA4N-wHaE8&pid=Api&P=0&h=180",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "grand-palace",
                        name: "Grand Palace",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461549/grandpalace_d2wm8k.avif",
                        description: "Former royal residence and one of Thailand's most sacred sites.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historical Site",
                        about: "The Grand Palace is a complex of buildings at the heart of Bangkok, Thailand. The palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. The king, his court, and his royal government were based on the grounds of the palace until 1925.",
                        history: "Built in 1782, the Grand Palace was the official residence of the Thai King for 150 years. The palace complex includes the famous Temple of the Emerald Buddha (Wat Phra Kaew), which houses the most sacred Buddha image in Thailand.",
                        features: [
                            "Temple of the Emerald Buddha",
                            "Royal Reception Halls",
                            "Royal Pantheon",
                            "Chakri Maha Prasat",
                            "Borom Phiman Mansion"
                        ],
                        bestTimeToVisit: "Early morning (8:00 AM - 10:00 AM)",
                        openingHours: "8:30 AM - 3:30 PM daily",
                        entryFee: "฿500",
                        visitorTips: [
                            "Dress modestly (covered shoulders and knees)",
                            "Arrive early to avoid crowds",
                            "Hire a guide for historical context",
                            "No photography inside temples",
                            "Bring water and sunscreen",
                            "Visit the Temple of the Emerald Buddha first",
                            "Respect local customs and traditions",
                            "Wear comfortable walking shoes",
                            "Check the weather forecast",
                            "Visit the nearby Wat Arun after"
                        ]
                    },
                    {
                        id: "wat-arun",
                        name: "Wat Arun",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461557/Watarun_e6ex8w.jpg",
                        description: "Temple of Dawn with stunning riverside views",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Temple",
                        about: "Wat Arun, also known as the Temple of Dawn, is one of Bangkok's most iconic landmarks. The temple is known for its distinctive spires decorated with colorful porcelain and seashells, creating a stunning sight especially at sunrise and sunset.",
                        history: "Built in the 17th century, Wat Arun was named after Aruna, the Indian god of dawn. The temple was restored during the reign of King Rama IV and has become one of Thailand's most recognizable symbols.",
                        features: [
                            "Central prang (tower)",
                            "Porcelain decorations",
                            "Riverside location",
                            "Buddha images",
                            "Viewing platforms"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "8:00 AM - 6:00 PM daily",
                        entryFee: "฿100",
                        visitorTips: [
                            "Visit at sunrise or sunset for best photos",
                            "Take a boat ride from Tha Tien pier",
                            "Climb the steep steps carefully",
                            "Dress modestly",
                            "Bring water and sunscreen",
                            "Check the tide schedule",
                            "Visit nearby temples",
                            "Take a guided tour",
                            "Respect temple rules",
                            "Enjoy the riverside views"
                        ]
                    },
                    {
                        id: "chatuchak-market",
                        name: "Chatuchak Weekend Market",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461550/Cha-tu-chak-market_mw8qoq.webp",
                        description: "World's largest weekend market with over 15,000 stalls",
                        rating: 4.6,
                        duration: "3-4 hours",
                        type: "Market",
                        about: "Chatuchak Weekend Market is one of the world's largest weekend markets, featuring over 15,000 stalls selling everything from antiques and clothing to food and pets. The market is a paradise for shoppers and offers a unique insight into Thai culture.",
                        history: "The market started in the 1940s as a small market for local vendors. It has grown into a massive complex attracting both locals and tourists, becoming one of Bangkok's most popular attractions.",
                        features: [
                            "Over 15,000 stalls",
                            "27 sections",
                            "Food court",
                            "Art galleries",
                            "Pet section"
                        ],
                        bestTimeToVisit: "Early morning (6:00 AM - 9:00 AM)",
                        openingHours: "Saturday and Sunday, 6:00 AM - 6:00 PM",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early to avoid crowds",
                            "Wear comfortable shoes",
                            "Bring cash and small bills",
                            "Stay hydrated",
                            "Use the market map",
                            "Bargain politely",
                            "Watch your belongings",
                            "Try local street food",
                            "Visit the food court",
                            "Take breaks in air-conditioned areas"
                        ]
                    }
                ]
            },
            {
                id: "phuket",
                name: "Phuket",
                description: "Thailand's largest island with beaches and nightlife.",
                image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                temperature: "25°C - 32°C",
                places: [
                    {
                        id: "patong-beach",
                        name: "Patong Beach",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461550/Patongbeach_gyeuqk.jpg",
                        description: "Popular beach with vibrant nightlife and water activities",
                        rating: 4.5,
                        duration: "Full day",
                        type: "Beach",
                        about: "Patong Beach is Phuket's most famous beach, known for its vibrant atmosphere, water sports, and nightlife. The 3.5-kilometer beach offers a perfect blend of relaxation and entertainment, with numerous restaurants, bars, and shops along the beachfront.",
                        history: "Once a quiet fishing village, Patong Beach transformed into a major tourist destination in the 1980s. It has since become the heart of Phuket's tourism industry, offering a mix of traditional Thai culture and modern entertainment.",
                        features: [
                            "3.5 km white sand beach",
                            "Water sports activities",
                            "Beachfront restaurants",
                            "Shopping areas",
                            "Nightlife venues"
                        ],
                        bestTimeToVisit: "November to April (dry season)",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning for peaceful beach time",
                            "Rent a beach umbrella and chair",
                            "Try water sports like jet skiing",
                            "Stay for sunset views",
                            "Explore Bangla Road at night",
                            "Bargain for water activities",
                            "Watch out for jellyfish",
                            "Use reef-safe sunscreen",
                            "Keep valuables secure",
                            "Try local seafood restaurants"
                        ]
                    },
                    {
                        id: "big-buddha",
                        name: "Big Buddha",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461545/BigBuddha_rchfkn.jpg",
                        description: "45-meter tall white marble statue with panoramic views",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark",
                        about: "The Big Buddha is a 45-meter tall white marble statue located on the Nakkerd Hills between Chalong and Kata. The statue offers panoramic views of the island and is one of Phuket's most important landmarks. The site also includes a smaller bronze Buddha and several other religious structures.",
                        history: "Construction of the Big Buddha began in 2004 and was completed in 2018. The project was funded by donations from locals and tourists, making it a true community effort. The statue is made of white Burmese marble and is visible from most of the island's south.",
                        features: [
                            "45-meter tall Buddha statue",
                            "Panoramic viewpoints",
                            "Smaller bronze Buddha",
                            "Bell for making wishes",
                            "Gift shop and cafe"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "8:00 AM - 7:30 PM daily",
                        entryFee: "Free (donations welcome)",
                        visitorTips: [
                            "Dress modestly (covered shoulders and knees)",
                            "Visit early to avoid crowds",
                            "Bring water and sunscreen",
                            "Donate to support maintenance",
                            "Ring the bell for good luck",
                            "Take photos respectfully",
                            "Enjoy the panoramic views",
                            "Visit the smaller Buddha",
                            "Check the weather forecast",
                            "Combine with nearby attractions"
                        ]
                    }
                ]
            },
            {
                id: "chiang-mai",
                name: "Chiang Mai",
                description: "Cultural heart of Northern Thailand with ancient temples and mountain scenery.",
                image: "https://tse4.mm.bing.net/th?id=OIP.Pyi5AcmaDQGCLRI8sA4N-wHaE8&pid=Api&P=0&h=180",
                temperature: "20°C - 35°C",
                places: [
                    {
                        id: "wat-phra-singh",
                        name: "Wat Phra Singh",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461568/WatPhraSingh_nr6z2o.jpg",
                        description: "Most revered temple in Chiang Mai with beautiful Lanna architecture",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Temple",
                        about: "Wat Phra Singh is the most revered temple in Chiang Mai, known for housing the famous Phra Singh Buddha image. The temple complex features classic Lanna architecture and beautiful murals depicting local life and customs.",
                        history: "Built in 1345, the temple was originally called Wat Li Chiang Phra. It was renamed after the Phra Singh Buddha image was brought here in 1367. The temple has been renovated several times throughout its history.",
                        features: [
                            "Phra Singh Buddha image",
                            "Viharn Lai Kham",
                            "Golden Chedi",
                            "Ubosot (Ordination Hall)",
                            "Library building"
                        ],
                        bestTimeToVisit: "Early morning (6:00 AM - 8:00 AM)",
                        openingHours: "6:00 AM - 5:00 PM daily",
                        entryFee: "฿40",
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Dress modestly",
                            "Remove shoes before entering buildings",
                            "Respect local customs",
                            "Take time to admire the murals",
                            "Visit during Buddhist holidays",
                            "Bring water and sunscreen",
                            "Check temple rules",
                            "Wear comfortable shoes",
                            "Visit nearby temples"
                        ]
                    },
                    {
                        id: "doi-suthep",
                        name: "Doi Suthep",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461548/DoiSuthep_hbpojk.jpg",
                        description: "Sacred temple on the mountain with panoramic views",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Temple",
                        about: "Wat Phra That Doi Suthep is one of Thailand's most sacred temples, located on Doi Suthep mountain. The temple offers panoramic views of Chiang Mai and features a golden chedi containing relics of the Buddha.",
                        history: "According to legend, the temple was built in 1383 after a white elephant carrying a Buddha relic climbed Doi Suthep and died. The temple has been expanded over the centuries and remains an important pilgrimage site.",
                        features: [
                            "Golden Chedi",
                            "Naga staircase",
                            "Viewpoint of Chiang Mai",
                            "Temple museum",
                            "Monk's quarters"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "6:00 AM - 6:00 PM daily",
                        entryFee: "฿50",
                        visitorTips: [
                            "Take the red songthaew from the university",
                            "Visit early to avoid crowds",
                            "Dress modestly",
                            "Climb the 306 steps or take the cable car",
                            "Bring water and sunscreen",
                            "Check the weather forecast",
                            "Visit the viewpoint",
                            "Respect temple rules",
                            "Wear comfortable shoes",
                            "Combine with Doi Pui visit"
                        ]
                    }
                ]
            },
            {
                id: "krabi",
                name: "Krabi",
                description: "Stunning coastal province with limestone cliffs and crystal-clear waters.",
                image: "https://tse1.mm.bing.net/th?id=OIP.6ZNp6CZJ4wghoXgXcRME-QHaE8&pid=Api&P=0&h=180",
                temperature: "25°C - 33°C",
                places: [
                    {
                        id: "railay-beach",
                        name: "Railay Beach",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461550/RailayBeach_xewn7q.jpg",
                        description: "Secluded beach accessible only by boat, famous for rock climbing",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Beach",
                        about: "Railay Beach is a stunning peninsula accessible only by boat, surrounded by limestone cliffs and crystal-clear waters. The area is famous for rock climbing, beautiful beaches, and a laid-back atmosphere.",
                        history: "Once a quiet fishing area, Railay became popular in the 1980s when rock climbers discovered its limestone cliffs. It has since developed into a world-renowned climbing destination while maintaining its natural beauty.",
                        features: [
                            "Four main beaches",
                            "Rock climbing routes",
                            "Cave systems",
                            "Viewpoints",
                            "Resorts and restaurants"
                        ],
                        bestTimeToVisit: "November to April (dry season)",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Take a longtail boat from Ao Nang",
                            "Book accommodation in advance",
                            "Bring climbing gear if interested",
                            "Check tide schedules",
                            "Visit the caves",
                            "Try rock climbing",
                            "Watch the sunset",
                            "Bring cash (limited ATMs)",
                            "Pack light for boat transfer",
                            "Respect the environment"
                        ]
                    },
                    {
                        id: "tiger-cave-temple",
                        name: "Tiger Cave Temple",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461566/TigerCaveTemple_t92dcw.jpg",
                        description: "Buddhist temple with 1,237 steps to the summit",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Temple",
                        about: "Wat Tham Sua (Tiger Cave Temple) is a Buddhist temple complex featuring a challenging climb of 1,237 steps to reach a golden Buddha statue and panoramic views. The temple is known for its meditation caves and resident tigers.",
                        history: "The temple was established in 1975 when a monk discovered tiger paw prints in a cave. The main chedi was built in 2004, and the temple has become a significant meditation center and tourist attraction.",
                        features: [
                            "1,237 steps to summit",
                            "Golden Buddha statue",
                            "Meditation caves",
                            "Tiger paw prints",
                            "Viewpoint of Krabi"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "7:00 AM - 5:00 PM daily",
                        entryFee: "Free (donations welcome)",
                        visitorTips: [
                            "Start early to avoid heat",
                            "Bring plenty of water",
                            "Wear comfortable shoes",
                            "Take breaks during climb",
                            "Dress modestly",
                            "Check weather conditions",
                            "Visit the caves",
                            "Donate to support maintenance",
                            "Enjoy the views",
                            "Respect temple rules"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Australia",
        description: "Diverse landscapes from beaches to outback adventures.",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "Australian Dollar (A$)",
        language: "English",
        timezone: "UTC+8 to UTC+10",
        continent: "Oceania",
        bestTimeToVisit: "September to November and March to May for pleasant weather.",
        visaRequirements: "ETA or visa required for most nationalities.",
        gettingAround: "Domestic flights, rental cars, and public transportation in cities.",
        tags: ["Nature", "Beaches", "Wildlife", "Adventure", "Culture"],
        cities: [
            {
                id: "sydney",
                name: "Sydney",
                description: "Australia's largest city, known for its iconic Opera House and harbor.",
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "sydney-opera-house",
                        name: "Sydney Opera House",
                        image: "https://assets.atdw-online.com.au/images/082abec166a817adfae646daff53ad70.jpeg?rect=0%2C0%2C2048%2C1536&w=2048&h=1536&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjIzYzkyZDVmMTU2NTA0NWQ4MTBkMiIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9",
                        description: "Iconic performing arts center and architectural masterpiece.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Architecture",
                        about: "The Sydney Opera House is one of the world's most distinctive buildings and a masterpiece of 20th-century architecture. The complex hosts over 1,500 performances annually and is home to multiple performance venues.",
                        history: "Designed by Danish architect Jørn Utzon, construction began in 1959 and was completed in 1973. The building was officially opened by Queen Elizabeth II in 1973 and was designated a UNESCO World Heritage site in 2007.",
                        features: [
                            "Multiple performance venues",
                            "Concert Hall",
                            "Opera Theatre",
                            "Drama Theatre",
                            "Playhouse"
                        ],
                        bestTimeToVisit: "Early morning for photos, evening for performances",
                        openingHours: "9:00 AM - 5:00 PM daily",
                        entryFee: "Free (guided tours available)",
                        visitorTips: [
                            "Book tickets for performances in advance",
                            "Take a guided tour",
                            "Visit the box office for last-minute tickets",
                            "Enjoy the harbor views",
                            "Dine at the Opera Bar",
                            "Check the performance schedule",
                            "Take photos from different angles",
                            "Visit the gift shop",
                            "Attend a free outdoor concert",
                            "Combine with Harbour Bridge visit"
                        ]
                    },
                    {
                        id: "bondi-beach",
                        name: "Bondi Beach",
                        image: "https://www.travoh.com/wp-content/uploads/2020/12/01-Bondi-Beach-Exploring-10-of-the-Top-Beaches-in-Sydney-Australia.jpg",
                        description: "Famous beach with great surfing and coastal walks.",
                        rating: 4.8,
                        duration: "Half day",
                        type: "Beach",
                        about: "Bondi Beach is Australia's most famous beach, known for its golden sand, great surf, and vibrant atmosphere. The beach is surrounded by cafes, restaurants, and shops, making it a popular destination for both locals and tourists.",
                        history: "The name 'Bondi' comes from the Aboriginal word 'boondi' meaning 'water breaking over rocks'. The beach became popular in the early 1900s and was the site of Australia's first surf lifesaving club in 1907.",
                        features: [
                            "1 km golden sand beach",
                            "Surf breaks",
                            "Coastal walk",
                            "Icebergs pool",
                            "Beachfront cafes"
                        ],
                        bestTimeToVisit: "October to April (summer)",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Swim between the flags",
                            "Take the coastal walk to Coogee",
                            "Visit the Sunday markets",
                            "Try surfing lessons",
                            "Enjoy beachfront dining",
                            "Watch the sunrise",
                            "Visit the Bondi Pavilion",
                            "Check surf conditions",
                            "Use public transport",
                            "Respect beach rules"
                        ]
                    },
                    {
                        id: "harbour-bridge",
                        name: "Sydney Harbour Bridge",
                        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474772-Australia.jpg",
                        description: "Iconic bridge offering climbing experiences and stunning views.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Landmark",
                        about: "The Sydney Harbour Bridge is one of Australia's most iconic landmarks. The steel arch bridge connects Sydney's central business district with the North Shore and offers spectacular views of the harbor and city.",
                        history: "Construction began in 1923 and was completed in 1932. The bridge was opened during the Great Depression and became a symbol of hope and progress. It remains the world's largest steel arch bridge.",
                        features: [
                            "Bridge climb experience",
                            "Pylon Lookout",
                            "Pedestrian walkway",
                            "Bicycle path",
                            "Harbor views"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "24/7 (Bridge Climb: 7:00 AM - 7:00 PM)",
                        entryFee: "Free (Bridge Climb: from $268)",
                        visitorTips: [
                            "Book Bridge Climb in advance",
                            "Visit the Pylon Lookout",
                            "Walk across the bridge",
                            "Take photos from different angles",
                            "Watch the sunset",
                            "Check weather conditions",
                            "Wear comfortable shoes",
                            "Bring a camera",
                            "Visit during Vivid Sydney",
                            "Combine with Opera House visit"
                        ]
                    }
                ]
            },
            {
                id: "melbourne",
                name: "Melbourne",
                description: "Cultural capital known for its arts, coffee culture, and sporting events.",
                image: "https://wallpaperaccess.com/full/1287723.jpg",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "federation-square",
                        name: "Federation Square",
                        image: "https://www.ytravelblog.com/wp-content/uploads/2014/03/melbourne-5-050.jpg",
                        description: "Cultural precinct with museums, galleries, and restaurants.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Cultural Center",
                        about: "Federation Square is Melbourne's central meeting place and cultural precinct. The modern architectural complex houses major cultural institutions, restaurants, bars, and public spaces, making it a vibrant hub for locals and tourists.",
                        history: "Opened in 2002, Federation Square was built to commemorate 100 years of Australian federation. The complex's distinctive architecture, designed by Lab Architecture Studio, has become an iconic part of Melbourne's cityscape.",
                        features: [
                            "Australian Centre for the Moving Image",
                            "National Gallery of Victoria",
                            "Public spaces",
                            "Restaurants and cafes",
                            "Events and exhibitions"
                        ],
                        bestTimeToVisit: "Weekday mornings or evenings",
                        openingHours: "24/7 (venues have specific hours)",
                        entryFee: "Free (some exhibitions have fees)",
                        visitorTips: [
                            "Check event calendar",
                            "Visit during weekdays",
                            "Explore the galleries",
                            "Enjoy outdoor dining",
                            "Watch street performers",
                            "Take photos of architecture",
                            "Visit during festivals",
                            "Use public transport",
                            "Check exhibition times",
                            "Combine with nearby attractions"
                        ]
                    },
                    {
                        id: "great-ocean-road",
                        name: "Great Ocean Road",
                        image: "https://www.pommietravels.com/wp-content/uploads/2011/03/Great-Ocean-Road-Australia.jpg",
                        description: "Scenic coastal drive with the Twelve Apostles rock formations.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Scenic Drive",
                        about: "The Great Ocean Road is one of the world's most scenic coastal drives, stretching 243 kilometers along Victoria's southwest coast. The road offers breathtaking views of the Southern Ocean, dramatic cliffs, and iconic rock formations like the Twelve Apostles.",
                        history: "Built by returned soldiers between 1919 and 1932, the Great Ocean Road is the world's largest war memorial. It was constructed to provide employment for returned servicemen and to connect isolated settlements along the coast.",
                        features: [
                            "Twelve Apostles",
                            "Loch Ard Gorge",
                            "London Bridge",
                            "Scenic lookouts",
                            "Beaches and surf spots"
                        ],
                        bestTimeToVisit: "October to April (summer)",
                        openingHours: "24/7",
                        entryFee: "Free (some attractions have fees)",
                        visitorTips: [
                            "Start early to avoid crowds",
                            "Check weather conditions",
                            "Book accommodation in advance",
                            "Take the scenic route",
                            "Visit the Twelve Apostles at sunset",
                            "Stop at lookouts",
                            "Bring a camera",
                            "Pack snacks and water",
                            "Check road conditions",
                            "Allow extra time for stops"
                        ]
                    }
                ]
            },
            {
                id: "gold-coast",
                name: "Gold Coast",
                description: "Sunny coastal city known for its beaches, theme parks, and nightlife.",
                image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460742/goldcoast_zofx5n.png",
                temperature: "20°C - 30°C",
                places: [
                    {
                        id: "surfers-paradise",
                        name: "Surfers Paradise",
                        image: "https://www.aquaduck.com.au/wp-content/uploads/2020/07/PNR_SURFERS-PARADISE-ALLIANCE_2019-1-large.jpg",
                        description: "Famous beach and entertainment district with high-rise buildings.",
                        rating: 4.7,
                        duration: "Full day",
                        type: "Beach",
                        about: "Surfers Paradise is the heart of the Gold Coast, known for its golden beaches, iconic skyline, and vibrant atmosphere. The area offers world-class surfing, shopping, dining, and entertainment options.",
                        history: "Originally a small beachside community, Surfers Paradise developed into a major tourist destination in the 1950s. The iconic high-rise buildings began appearing in the 1970s, transforming it into the modern entertainment hub it is today.",
                        features: [
                            "Surfing beaches",
                            "Shopping precinct",
                            "Nightlife district",
                            "Cavill Avenue",
                            "Beachfront markets"
                        ],
                        bestTimeToVisit: "September to May (spring and summer)",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Learn to surf",
                            "Visit the markets",
                            "Enjoy beachfront dining",
                            "Shop at Cavill Mall",
                            "Watch the sunset",
                            "Try water sports",
                            "Visit the observation deck",
                            "Enjoy nightlife",
                            "Take a river cruise",
                            "Check surf conditions"
                        ]
                    },
                    {
                        id: "dreamworld",
                        name: "Dreamworld",
                        image: "https://www.holidayholiday.com.au/wp-content/uploads/Theme-Parks-Gold-Coast-Dreamworld.jpg",
                        description: "Popular theme park with rides and wildlife attractions.",
                        rating: 4.5,
                        duration: "Full day",
                        type: "Theme Park",
                        about: "Dreamworld is Australia's largest theme park, featuring thrilling rides, wildlife experiences, and family entertainment. The park combines adrenaline-pumping attractions with educational wildlife encounters.",
                        history: "Opened in 1981, Dreamworld has grown from a small theme park into one of Australia's premier tourist attractions. It has continuously evolved with new rides and attractions while maintaining its focus on family entertainment.",
                        features: [
                            "Thrill rides",
                            "Wildlife park",
                            "Water park",
                            "Kids' attractions",
                            "Live shows"
                        ],
                        bestTimeToVisit: "Weekdays during school term",
                        openingHours: "10:00 AM - 5:00 PM",
                        entryFee: "From $99 (adult)",
                        visitorTips: [
                            "Buy tickets online",
                            "Arrive early",
                            "Plan your route",
                            "Check height restrictions",
                            "Bring sunscreen",
                            "Wear comfortable shoes",
                            "Visit during weekdays",
                            "Check show times",
                            "Use the app",
                            "Stay hydrated"
                        ]
                    }
                ]
            },
            {
                id: "perth",
                name: "Perth",
                description: "Sunny capital of Western Australia with beautiful beaches and parks.",
                image: "https://mummyfique.com/wp-content/uploads/2017/10/Travel-Perth-06.jpg",
                temperature: "15°C - 35°C",
                places: [
                    {
                        id: "kings-park",
                        name: "Kings Park",
                        image: "http://images.trvl-media.com/media/content/shared/images/travelguides/destination/180013/Kings-Park-And-Botanic-Garden-40092.jpg",
                        description: "Large park with panoramic views of Perth and the Swan River.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Park",
                        about: "Kings Park is one of the world's largest inner-city parks, offering stunning views of Perth's skyline and the Swan River. The park features native bushland, botanical gardens, and walking trails.",
                        history: "Established in 1872, Kings Park was originally known as Perth Park. It was renamed in 1901 to honor King Edward VII. The park has been a significant cultural and recreational space for Perth residents for over a century.",
                        features: [
                            "Botanical Gardens",
                            "DNA Tower",
                            "State War Memorial",
                            "Lotterywest Federation Walkway",
                            "Scenic lookouts"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit the wildflower display",
                            "Take the Federation Walkway",
                            "Enjoy a picnic",
                            "Watch the sunset",
                            "Visit the war memorial",
                            "Explore the botanic gardens",
                            "Take photos of the city view",
                            "Join a guided walk",
                            "Visit the gift shop",
                            "Check event calendar"
                        ]
                    },
                    {
                        id: "rottnest-island",
                        name: "Rottnest Island",
                        image: "https://springtime.se/wp-content/uploads/2016/01/Perth-Rottnest-Island.jpg",
                        description: "Island paradise known for quokkas and beautiful beaches.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Island",
                        about: "Rottnest Island is a car-free island paradise off the coast of Perth, famous for its resident quokkas, pristine beaches, and crystal-clear waters. The island offers a perfect blend of natural beauty and historical sites.",
                        history: "Discovered by Dutch explorer Willem de Vlamingh in 1696, the island was named 'Rottnest' (meaning 'rat's nest') due to the quokkas being mistaken for large rats. The island has served as a prison, military base, and now a popular tourist destination.",
                        features: [
                            "Quokka encounters",
                            "Beaches and bays",
                            "Historic buildings",
                            "Bike trails",
                            "Snorkeling spots"
                        ],
                        bestTimeToVisit: "September to April",
                        openingHours: "24/7 (ferry services have specific times)",
                        entryFee: "Free (ferry ticket required)",
                        visitorTips: [
                            "Book ferry tickets early",
                            "Rent a bicycle",
                            "Take a quokka selfie",
                            "Visit the beaches",
                            "Go snorkeling",
                            "Explore historic sites",
                            "Pack sunscreen",
                            "Bring water",
                            "Check ferry schedule",
                            "Book accommodation early"
                        ]
                    }
                ]
            },
            {
                id: "cairns",
                name: "Cairns",
                description: "Gateway to the Great Barrier Reef and Daintree Rainforest.",
                image: "https://artoftravel.tips/wp-content/uploads/2016/09/449259-Cairns-Esplanade-Landscape.jpg",
                temperature: "20°C - 35°C",
                places: [
                    {
                        id: "great-barrier-reef",
                        name: "Great Barrier Reef",
                        image: "https://www.diversden.com.au/wp-content/uploads/2020/01/Snorkelling-Trip-from-Cairns-120-1.jpg",
                        description: "World's largest coral reef system with diverse marine life.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Natural Wonder",
                        about: "The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 kilometers along the Queensland coast. It's home to thousands of species of marine life and is one of the most biodiverse ecosystems on Earth.",
                        history: "The reef has been forming for over 20 million years. It was first discovered by European explorers in 1770 by Captain James Cook. In 1981, it was declared a World Heritage Site and is now one of the Seven Natural Wonders of the World.",
                        features: [
                            "Coral reefs",
                            "Marine life",
                            "Snorkeling spots",
                            "Diving sites",
                            "Island resorts"
                        ],
                        bestTimeToVisit: "June to October",
                        openingHours: "24/7 (tour times vary)",
                        entryFee: "Free (tour costs vary)",
                        visitorTips: [
                            "Book tours in advance",
                            "Choose the right season",
                            "Bring reef-safe sunscreen",
                            "Take a diving course",
                            "Visit the outer reef",
                            "Check weather conditions",
                            "Book accommodation early",
                            "Pack swimwear",
                            "Consider a liveaboard",
                            "Respect marine life"
                        ]
                    },
                    {
                        id: "daintree-rainforest",
                        name: "Daintree Rainforest",
                        image: "https://www.citysider.com.au/site/wp-content/uploads/img/daintree-rainforest-cairns-port-douglas-1.jpg",
                        description: "Ancient rainforest with unique wildlife and plants.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Rainforest",
                        about: "The Daintree Rainforest is one of the oldest rainforests in the world, dating back over 180 million years. It's home to unique wildlife, ancient plants, and the world's oldest continuously surviving tropical rainforest.",
                        history: "Named after Richard Daintree, a geologist and photographer, the rainforest has been home to the Kuku Yalanji Aboriginal people for thousands of years. It was declared a World Heritage Site in 1988.",
                        features: [
                            "Ancient trees",
                            "Wildlife spotting",
                            "Walking trails",
                            "Cape Tribulation",
                            "Mossman Gorge"
                        ],
                        bestTimeToVisit: "May to September",
                        openingHours: "24/7",
                        entryFee: "Free (some attractions have fees)",
                        visitorTips: [
                            "Take a guided tour",
                            "Visit Mossman Gorge",
                            "Spot wildlife",
                            "Walk the trails",
                            "Learn about Aboriginal culture",
                            "Bring insect repellent",
                            "Wear appropriate footwear",
                            "Check weather conditions",
                            "Book accommodation early",
                            "Respect the environment"
                        ]
                    }
                ]
            },
            {
                id: "uluru",
                name: "Uluru",
                description: "Sacred site and natural wonder in the heart of Australia.",
                image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749460822/uluru_gplv3c.png",
                temperature: "5°C - 35°C",
                places: [
                    {
                        id: "ayers-rock",
                        name: "Ayers Rock",
                        image: "https://img.fotocommunity.com/uluru-bzw-ayers-rock-australien-cc186717-32d7-47da-a021-0ab041be96e2.jpg?height=1080",
                        description: "Iconic sandstone monolith and sacred Aboriginal site.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Natural Wonder",
                        about: "Uluru (Ayers Rock) is a massive sandstone monolith in the heart of Australia's Red Centre. It's one of the world's most iconic natural landmarks and holds deep spiritual significance for the local Anangu people.",
                        history: "Formed over 550 million years ago, Uluru has been a sacred site for the Anangu people for tens of thousands of years. It was named Ayers Rock by European explorer William Gosse in 1873, but is now officially known by its traditional name, Uluru.",
                        features: [
                            "Sunrise viewing",
                            "Sunset viewing",
                            "Base walk",
                            "Cultural center",
                            "Aboriginal art"
                        ],
                        bestTimeToVisit: "May to September",
                        openingHours: "24/7",
                        entryFee: "$38 (3-day pass)",
                        visitorTips: [
                            "Watch sunrise and sunset",
                            "Take the base walk",
                            "Visit the cultural center",
                            "Learn about Aboriginal culture",
                            "Book accommodation early",
                            "Bring plenty of water",
                            "Wear appropriate footwear",
                            "Check weather conditions",
                            "Respect cultural sites",
                            "Take guided tours"
                        ]
                    },
                    {
                        id: "kata-tjuta",
                        name: "Kata Tjuta",
                        image: "https://cdn.audleytravel.com/-/-/79/165782-kata-tjuta-central-australia.jpg",
                        description: "Group of large domed rock formations near Uluru.",
                        rating: 4.8,
                        duration: "Half day",
                        type: "Natural Wonder",
                        about: "Kata Tjuta (The Olgas) is a group of 36 domed rock formations located about 30 kilometers from Uluru. Like Uluru, it holds great spiritual significance for the Anangu people and offers spectacular hiking opportunities.",
                        history: "Formed around the same time as Uluru, Kata Tjuta has been a sacred site for the Anangu people for thousands of years. The name means 'many heads' in the local Pitjantjatjara language.",
                        features: [
                            "Valley of the Winds walk",
                            "Walpa Gorge walk",
                            "Sunrise viewing",
                            "Sunset viewing",
                            "Wildlife spotting"
                        ],
                        bestTimeToVisit: "May to September",
                        openingHours: "24/7",
                        entryFee: "Included in Uluru pass",
                        visitorTips: [
                            "Start walks early",
                            "Bring plenty of water",
                            "Wear sturdy shoes",
                            "Check weather conditions",
                            "Watch sunrise/sunset",
                            "Take guided tours",
                            "Learn about the area",
                            "Respect cultural sites",
                            "Stay on marked trails",
                            "Book accommodation early"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "United Kingdom",
        description: "Historic landmarks, royal palaces, and cultural diversity.",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        currency: "British Pound (£)",
        language: "English",
        timezone: "UTC+0",
        continent: "Europe",
        bestTimeToVisit: "April to September for pleasant weather.",
        visaRequirements: "Visa required for most non-EU nationals.",
        gettingAround: "Extensive public transport network including the Underground.",
        tags: ["History", "Culture", "Architecture", "Royalty", "Museums"],
        cities: [
            {
                id: "london",
                name: "London",
                description: "Capital city with iconic landmarks and rich history.",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "buckingham-palace",
                        name: "Buckingham Palace",
                        image: "https://media.timeout.com/images/100686093/image.jpg",
                        description: "Official residence of the British monarch.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Royal Palace",
                        about: "Buckingham Palace is the official London residence of the British monarch. The palace serves as both a working royal residence and a symbol of the British monarchy, hosting numerous state occasions and royal events.",
                        history: "Originally built in 1703 as a townhouse, it was acquired by King George III in 1761. Queen Victoria was the first monarch to make it the official royal residence in 1837. The palace has undergone numerous renovations and expansions over the centuries.",
                        features: [
                            "State Rooms",
                            "Royal Mews",
                            "Changing of the Guard",
                            "Queen's Gallery",
                            "Palace Gardens"
                        ],
                        bestTimeToVisit: "July to September (summer opening)",
                        openingHours: "9:30 AM - 7:30 PM (summer)",
                        entryFee: "From £30",
                        visitorTips: [
                            "Watch Changing of the Guard",
                            "Book tickets in advance",
                            "Visit the State Rooms",
                            "See the Royal Mews",
                            "Check opening times",
                            "Arrive early",
                            "Take a guided tour",
                            "Visit the gift shop",
                            "Photograph the facade",
                            "Check special events"
                        ]
                    },
                    {
                        id: "tower-of-london",
                        name: "Tower of London",
                        image: "https://i.ytimg.com/vi/_CqWuphG1iE/maxresdefault.jpg",
                        description: "Historic castle and fortress on the north bank of the River Thames.",
                        rating: 4.7,
                        duration: "3-4 hours",
                        type: "Historic Site",
                        about: "The Tower of London is a historic castle and fortress on the north bank of the River Thames. It has served as a royal palace, prison, armory, and treasury throughout its 900-year history.",
                        history: "Built by William the Conqueror in 1066, the Tower has been a symbol of royal power and a place of imprisonment and execution. It houses the Crown Jewels and is guarded by the famous Beefeaters.",
                        features: [
                            "Crown Jewels",
                            "White Tower",
                            "Beefeaters",
                            "Ravens",
                            "Medieval Palace"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "9:00 AM - 5:30 PM",
                        entryFee: "From £29.90",
                        visitorTips: [
                            "See the Crown Jewels first",
                            "Take a Beefeater tour",
                            "Visit the White Tower",
                            "Meet the ravens",
                            "Book online",
                            "Arrive early",
                            "Allow 3-4 hours",
                            "Check special events",
                            "Visit the gift shop",
                            "Take photos"
                        ]
                    },
                    {
                        id: "british-museum",
                        name: "British Museum",
                        image: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/the-British-Museum.jpg",
                        description: "World-famous museum of human history and culture.",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Museum",
                        about: "The British Museum is one of the world's largest and most comprehensive museums, housing a vast collection of art and artifacts from human history and culture. Its collection spans over two million years of history.",
                        history: "Founded in 1753, the museum was the first national public museum in the world. It was established based on the collections of Sir Hans Sloane and has grown to include artifacts from every continent.",
                        features: [
                            "Rosetta Stone",
                            "Parthenon Marbles",
                            "Egyptian Mummies",
                            "Great Court",
                            "Reading Room"
                        ],
                        bestTimeToVisit: "Weekday mornings",
                        openingHours: "10:00 AM - 5:30 PM",
                        entryFee: "Free (special exhibitions have fees)",
                        visitorTips: [
                            "Plan your route",
                            "Visit popular exhibits early",
                            "Take a guided tour",
                            "Use the audio guide",
                            "Check special exhibitions",
                            "Visit the Great Court",
                            "Use the cloakroom",
                            "Download the app",
                            "Visit the shop",
                            "Take breaks"
                        ]
                    },
                    {
                        id: "london-eye",
                        name: "London Eye",
                        image: "https://images.hdqwalls.com/download/dawn-at-the-london-eye-4k-7f-1920x1080.jpg",
                        description: "Giant observation wheel on the South Bank of the River Thames.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Attraction",
                        about: "The London Eye is Europe's tallest cantilevered observation wheel, offering panoramic views of London's skyline. Each rotation takes about 30 minutes, providing visitors with a unique perspective of the city.",
                        history: "Opened in 2000 to celebrate the new millennium, the London Eye was originally intended to be a temporary attraction. Due to its popularity, it became a permanent fixture and is now one of London's most iconic landmarks.",
                        features: [
                            "Observation capsules",
                            "4D Experience",
                            "River cruise",
                            "Champagne experience",
                            "Sunset views"
                        ],
                        bestTimeToVisit: "Early morning or sunset",
                        openingHours: "10:00 AM - 8:30 PM",
                        entryFee: "From £27",
                        visitorTips: [
                            "Book online",
                            "Visit at sunset",
                            "Choose clear weather",
                            "Take the 4D experience",
                            "Combine with river cruise",
                            "Book fast track",
                            "Check weather forecast",
                            "Visit early morning",
                            "Take photos",
                            "Book in advance"
                        ]
                    }
                ]
            },
            {
                id: "edinburgh",
                name: "Edinburgh",
                description: "Scotland's capital with medieval architecture and cultural festivals.",
                image: "https://a.cdn-hotels.com/gdcs/production139/d484/ef175ad9-0f5b-440d-92e8-c54de869827c.jpg",
                temperature: "0°C - 20°C",
                places: [
                    {
                        id: "edinburgh-castle",
                        name: "Edinburgh Castle",
                        image: "https://www.webbaviation.co.uk/aerial/_data/i/galleries/z_Scotland/Edinburgh/Edinburgh_Castle_db58673-me.jpg",
                        description: "Historic fortress dominating the city's skyline.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Castle",
                        about: "Edinburgh Castle is a historic fortress that dominates the skyline of Edinburgh, Scotland. It stands on Castle Rock, which has been occupied by humans since at least the Iron Age. The castle has served as a royal residence, military garrison, and prison throughout its long history.",
                        history: "The castle's history dates back to the 12th century, though the site has been occupied since the Iron Age. It has witnessed numerous sieges and battles, including the Wars of Scottish Independence. The castle has been a royal residence, military garrison, and prison, with its most famous prisoner being Mary, Queen of Scots.",
                        features: [
                            "Crown Jewels of Scotland",
                            "Stone of Destiny",
                            "Great Hall",
                            "St. Margaret's Chapel",
                            "One O'Clock Gun"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "9:30 AM - 6:00 PM (summer), 9:30 AM - 5:00 PM (winter)",
                        entryFee: "From £18.00",
                        visitorTips: [
                            "Arrive early to avoid crowds",
                            "Watch the One O'Clock Gun",
                            "See the Crown Jewels first",
                            "Take a guided tour",
                            "Visit St. Margaret's Chapel",
                            "Check the weather forecast",
                            "Book tickets online",
                            "Allow 2-3 hours",
                            "Visit the gift shop",
                            "Take photos from the ramparts"
                        ]
                    },
                    {
                        id: "royal-mile",
                        name: "Royal Mile",
                        image: "https://a.cdn-hotels.com/gdcs/production163/d1461/07c0b027-66a3-4574-9b26-40c228ee5f29.jpg",
                        description: "Historic street connecting Edinburgh Castle to Holyrood Palace.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Historic Street",
                        about: "The Royal Mile is Edinburgh's most famous street, running through the heart of the Old Town. It connects Edinburgh Castle at the top with the Palace of Holyroodhouse at the bottom. The street is lined with historic buildings, shops, restaurants, and attractions that showcase Edinburgh's rich history.",
                        history: "The Royal Mile has been the main street of Edinburgh since the city's founding. It developed as the principal street of the Old Town during the Middle Ages and has been the scene of many significant historical events, including royal processions, public executions, and the annual Edinburgh Festival.",
                        features: [
                            "Historic closes and wynds",
                            "St. Giles' Cathedral",
                            "Museums and galleries",
                            "Traditional shops",
                            "Whisky tasting venues"
                        ],
                        bestTimeToVisit: "Morning or early evening",
                        openingHours: "24/7 (shops typically 9:00 AM - 6:00 PM)",
                        entryFee: "Free (individual attractions may charge)",
                        visitorTips: [
                            "Explore the hidden closes",
                            "Visit St. Giles' Cathedral",
                            "Try local whisky",
                            "Shop for souvenirs",
                            "Take a guided tour",
                            "Visit during festivals",
                            "Check out the museums",
                            "Try local food",
                            "Take photos",
                            "Visit the Camera Obscura"
                        ]
                    }
                ]
            },
            {
                id: "manchester",
                name: "Manchester",
                description: "Vibrant city known for its music scene and football culture.",
                image: "https://www.thehotelguru.com/_images/9e/62/9e62e0d7f7e7b798490021eab1cfff11/manchester-s1180x560.jpg",
                temperature: "5°C - 22°C",
                places: [
                    {
                        id: "old-trafford",
                        name: "Old Trafford",
                        image: "https://www.webbaviation.co.uk/aerial/galleries/Lancashire/Manchester/ManchesterStadiumAerial-cb18263.jpg",
                        description: "Home of Manchester United Football Club.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Sports Venue",
                        about: "Old Trafford, known as 'The Theatre of Dreams', is the iconic home stadium of Manchester United Football Club. With a capacity of over 74,000, it is the largest club football stadium in the United Kingdom. The stadium combines historic significance with modern facilities, making it a must-visit destination for football fans worldwide.",
                        history: "Opened in 1910, Old Trafford has been the home of Manchester United for over a century. The stadium has undergone several renovations and expansions, including rebuilding after World War II damage. It has hosted numerous significant matches, including FA Cup finals, Champions League matches, and World Cup games.",
                        features: [
                            "Manchester United Museum",
                            "Stadium Tour",
                            "Megastore",
                            "Sir Alex Ferguson Stand",
                            "Stretford End"
                        ],
                        bestTimeToVisit: "Match days or weekday mornings for tours",
                        openingHours: "9:00 AM - 5:00 PM (tours), Match times vary",
                        entryFee: "From £25 (tour), Match tickets vary",
                        visitorTips: [
                            "Book stadium tour in advance",
                            "Visit the museum",
                            "Shop at the megastore",
                            "Take photos outside",
                            "Check match schedule",
                            "Arrive early for tours",
                            "Wear comfortable shoes",
                            "Visit the Red Cafe",
                            "See the Munich Tunnel",
                            "Check for special events"
                        ]
                    },
                    {
                        id: "manchester-art-gallery",
                        name: "Manchester Art Gallery",
                        image: "https://i2-prod.manchestereveningnews.co.uk/incoming/article8373569.ece/ALTERNATES/s1227b/JS50586251.jpg",
                        description: "A major art museum in the city center featuring Pre-Raphaelite masterpieces, contemporary art, and decorative arts. The gallery houses one of the finest collections of Victorian art in the UK, including works by Ford Madox Brown, Dante Gabriel Rossetti, and Edward Burne-Jones.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Museum",
                        features: [
                            "Pre-Raphaelite collection",
                            "Contemporary art exhibitions",
                            "Victorian architecture",
                            "Café and gift shop",
                            "Free entry"
                        ],
                        history: "Founded in 1824, the Manchester Art Gallery is one of the country's most significant art institutions. The building combines Victorian architecture with modern extensions, creating a unique space that bridges historical and contemporary art.",
                        bestTimeToVisit: "Weekday mornings for smaller crowds",
                        openingHours: "Mon-Sun: 10:00 - 17:00",
                        entryFee: "Free",
                        visitorTips: [
                            "Check for special exhibitions",
                            "Join a guided tour",
                            "Visit the cafe",
                            "Allow time for the shop",
                            "Explore the decorative arts section"
                        ],
                        images: [
                            "https://i2-prod.manchestereveningnews.co.uk/incoming/article8373569.ece/ALTERNATES/s1227b/JS50586251.jpg",
                            "https://www.reisroutes.be/userfiles/fotos/manchester-art-gallery-bezoeken-manchester_39276_xl.jpg",
                            "https://www.mancunianmatters.co.uk/wp-content/uploads/2021/08/Uncertain-Futures-installation-in-Manchester-Art-Gallery-Photo-Andrew-Brooks_12-970x605.jpg",
                            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjurfwuzkV2dvJkHx8Qw9V3ERMDsdtcg2CvkX2pCv9k0CppR2I7ovGguF3sqpXgoD-4sPWjkCHZ-y-rrnnhwwjuuW3BbiKwmNmc48rv6xu7Na01WVPRe298iWJrqKwXx_5FUEXOTTOSJufMR6PJMlq-CSynHNyhe-W4L433jSACRN1GG1BIkeSlGeyo-A/s1400/Dandy_Style_Decorated_Dandy_Exhibition.jpg"
                        ]
                    }
                ]
            },
            {
                id: "liverpool",
                name: "Liverpool",
                description: "Famous for The Beatles and maritime history.",
                image: "https://www.signatureliving.co.uk/wp-content/uploads/2016/05/Liverpool-waterfront-1024x682.jpg",
                temperature: "5°C - 22°C",
                places: [
                    {
                        id: "beatles-story",
                        name: "The Beatles Story",
                        image: "https://i.pinimg.com/originals/76/fb/9d/76fb9d3aa7b4ac8f8eb58170fdfbb21d.jpg",
                        description: "Museum dedicated to The Beatles' story and music.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Museum",
                        about: "The Beatles Story is an immersive museum that tells the story of the world's most famous band, from their early days in Liverpool to global stardom. The museum features authentic memorabilia, interactive exhibits, and recreations of key locations in The Beatles' history.",
                        history: "Opened in 1990, The Beatles Story was created to preserve and celebrate the legacy of The Beatles in their hometown. The museum has grown to become one of Liverpool's most popular attractions, attracting fans from around the world to experience the band's journey.",
                        features: [
                            "Replica of The Cavern Club",
                            "Yellow Submarine experience",
                            "John Lennon's white piano",
                            "Interactive audio guides",
                            "Gift shop with memorabilia"
                        ],
                        bestTimeToVisit: "Weekday mornings",
                        openingHours: "10:00 AM - 6:00 PM",
                        entryFee: "From £16.95",
                        visitorTips: [
                            "Book tickets online",
                            "Use the audio guide",
                            "Visit the gift shop",
                            "Take photos",
                            "Allow 2-3 hours",
                            "Check for special events",
                            "Visit the Cavern Club after",
                            "Explore the interactive exhibits",
                            "Listen to the music",
                            "Read the information panels"
                        ]
                    },
                    {
                        id: "albert-dock",
                        name: "Albert Dock",
                        image: "https://a.cdn-hotels.com/gdcs/production37/d719/8b3d057d-cb1f-4e10-8882-32262111d6cb.jpg",
                        description: "Historic dock complex with museums and restaurants.",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Historic Site",
                        about: "Albert Dock is a historic dock complex and UNESCO World Heritage site in Liverpool. The dock has been transformed into a vibrant waterfront destination featuring museums, restaurants, shops, and hotels, while preserving its historic architecture and maritime heritage.",
                        history: "Built in 1846, Albert Dock was one of the first structures in Britain to be built from cast iron, brick, and stone. After falling into disuse, it was restored in the 1980s and has become a symbol of Liverpool's regeneration. The dock played a crucial role in the city's maritime history.",
                        features: [
                            "Tate Liverpool",
                            "Merseyside Maritime Museum",
                            "The Beatles Story",
                            "Restaurants and bars",
                            "Historic warehouses"
                        ],
                        bestTimeToVisit: "Late morning or early evening",
                        openingHours: "24/7 (attractions have individual hours)",
                        entryFee: "Free (individual attractions may charge)",
                        visitorTips: [
                            "Visit the museums",
                            "Try the restaurants",
                            "Take a boat tour",
                            "Enjoy the waterfront",
                            "Check opening times",
                            "Visit at sunset",
                            "Take photos",
                            "Explore the shops",
                            "Visit the bars",
                            "Check for events"
                        ]
                    }
                ]
            },
            {
                id: "bath",
                name: "Bath",
                description: "Roman-built spa town with Georgian architecture.",
                image: "https://www.tripsavvy.com/thmb/txK0HMw-_51zxx8hZgpOHfgfiqk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-463211139-59ee253b685fbe00112d0c8f.jpg",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "roman-baths",
                        name: "Roman Baths",
                        image: "https://www.westend61.de/images/0001414455pw/the-roman-baths-and-bath-abbey-illuminated-at-dusk-unesco-world-heritage-site-bath-somerset-england-united-kingdom-europe-RHPLF15612.jpg",
                        description: "Well-preserved Roman public bathing complex.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic Site",
                        about: "The Roman Baths is one of the best-preserved Roman remains in the world. The site includes the Sacred Spring, Roman Temple, Roman Bath House, and a museum containing artifacts from Aquae Sulis, the Roman town that developed around the baths.",
                        history: "Built in 70 AD, the Roman Baths were a place for public bathing and socializing. The site was discovered in the 19th century and has been preserved as a museum. The natural hot springs that feed the baths have been used for over 2,000 years.",
                        features: [
                            "Great Bath",
                            "Sacred Spring",
                            "Roman Temple",
                            "Museum collection",
                            "Pump Room"
                        ],
                        bestTimeToVisit: "Early morning or late afternoon",
                        openingHours: "9:00 AM - 5:00 PM (summer), 9:30 AM - 5:00 PM (winter)",
                        entryFee: "From £26.00",
                        visitorTips: [
                            "Book tickets online",
                            "Take the audio guide",
                            "Visit the Pump Room",
                            "Try the spa water",
                            "Allow 2-3 hours",
                            "Check for special events",
                            "Visit the museum",
                            "Take photos",
                            "Visit the gift shop",
                            "Combine with Bath Abbey"
                        ]
                    },
                    {
                        id: "bath-abbey",
                        name: "Bath Abbey",
                        image: "https://cdn.sanity.io/images/kcbf19oh/aquae-sulis/bac0a1585aa402a7fc624285b67fca6d244606ed-2048x1365.jpg",
                        description: "Gothic abbey church in the city center.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Church",
                        about: "Bath Abbey is a stunning example of Perpendicular Gothic architecture. The current building dates from the 16th century, though a church has stood on this site since the 7th century. The abbey is known for its magnificent fan vaulting and beautiful stained glass windows.",
                        history: "Founded in 675 AD, the abbey has been rebuilt several times. The current building was started in 1499 and completed in 1611. It was restored in the 1860s and continues to be an active place of worship and a major tourist attraction.",
                        features: [
                            "Fan vaulting ceiling",
                            "Stained glass windows",
                            "Tower tours",
                            "Heritage Vaults",
                            "Memorials and monuments"
                        ],
                        bestTimeToVisit: "Morning or early afternoon",
                        openingHours: "9:00 AM - 5:00 PM (Mon-Sat), 1:00 PM - 5:00 PM (Sun)",
                        entryFee: "Free (donations welcome)",
                        visitorTips: [
                            "Take a tower tour",
                            "Visit the Heritage Vaults",
                            "Attend a service",
                            "Admire the architecture",
                            "Check opening times",
                            "Take photos",
                            "Light a candle",
                            "Visit the gift shop",
                            "Combine with Roman Baths",
                            "Check for concerts"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Switzerland",
        description: "A land of stunning Alpine landscapes, pristine lakes, and charming cities.",
        image: "https://www.ubi-interactive.com/wp-content/uploads/2022/10/bern-switzerland-shutterstock_1845136612.jpg_ecb4c93750.jpg",
        currency: "Swiss Franc (CHF)",
        language: "German, French, Italian, Romansh",
        timezone: "UTC+1",
        continent: "Europe",
        bestTimeToVisit: "June to September for hiking and outdoor activities, December to March for skiing.",
        visaRequirements: "Schengen visa required for many nationalities. EU citizens can travel freely.",
        gettingAround: "Excellent train network, cable cars, and scenic mountain railways.",
        tags: ["Mountains", "Lakes", "Skiing", "Hiking", "Culture"],
        cities: [
            {
                id: "zurich",
                name: "Zurich",
                description: "Switzerland's largest city, known for its banking, shopping, and cultural attractions.",
                image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "0°C - 25°C",
                places: [
                    {
                        id: "old-town",
                        name: "Old Town (Altstadt)",
                        image: "https://travel.usnews.com/static-travel/images/destinations/83/altstadt_zurich.jpg",
                        description: "Historic center with medieval buildings, churches, and charming streets.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic District",
                        about: "Zurich's Old Town (Altstadt) is a charming medieval district with narrow cobblestone streets, historic buildings, and cultural landmarks. The area is divided into two parts by the Limmat River and features well-preserved architecture from different periods, including Roman, medieval, and Renaissance styles.",
                        history: "The Old Town has been the heart of Zurich since Roman times. It developed around the Lindenhof hill, which was the site of a Roman fort. The area flourished during the Middle Ages and became a center of trade and culture. Many of its historic buildings have been preserved, making it one of the best-preserved medieval city centers in Europe.",
                        features: [
                            "Grossmünster Church",
                            "Fraumünster Church",
                            "Lindenhof Hill",
                            "Niederdorf District",
                            "Historic Guild Houses"
                        ],
                        bestTimeToVisit: "Morning or late afternoon",
                        openingHours: "24/7 (attractions have individual hours)",
                        entryFee: "Free (attractions may charge)",
                        visitorTips: [
                            "Walk the streets",
                            "Visit the churches",
                            "Climb Lindenhof",
                            "Shop in Niederdorf",
                            "Try local cafes",
                            "Take photos",
                            "Visit the museums",
                            "See the guild houses",
                            "Walk along the river",
                            "Check for events"
                        ]
                    },
                    {
                        id: "lake-zurich",
                        name: "Lake Zurich",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461549/lakezurich_wde2du.jpg",
                        description: "Beautiful lake offering boat tours and waterfront activities.",
                        bestTimeToVisit: "May to September",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Natural Attraction",
                        about: "Lake Zurich is a beautiful lake stretching from Zurich to Rapperswil, offering stunning views of the Swiss Alps and surrounding countryside. The lake is a popular destination for swimming, boating, and hiking, with numerous parks and promenades along its shores.",
                        history: "The lake was formed during the last ice age and has been an important waterway for centuries. It played a crucial role in Zurich's development as a trading city. Today, it's a major recreational area and a symbol of Zurich's natural beauty.",
                        features: [
                            "Boat cruises",
                            "Swimming areas",
                            "Hiking trails",
                            "Parks and gardens",
                            "Alpine views"
                        ],
                        openingHours: "24/7",
                        entryFee: "Free (activities charge separately)",
                        visitorTips: [
                            "Take a boat cruise",
                            "Swim in the lake",
                            "Walk the promenade",
                            "Visit the parks",
                            "Try water sports",
                            "Take photos",
                            "Have a picnic",
                            "Watch the sunset",
                            "Visit the islands",
                            "Check the weather"
                        ]
                    },
                    
                    
                ]
            },
            {
                id: "geneva",
                name: "Geneva",
                description: "International city known for diplomacy, luxury shopping, and Lake Geneva.",
                image: "https://www.roadaffair.com/wp-content/uploads/2017/10/aerial-view-geneva-switzerland-shutterstock_418408996.jpg",
                temperature: "0°C - 28°C",
                places: [
                    {
                        id: "jet-deau",
                        name: "Jet d'Eau",
                        image: "https://www.geneve.com/fileadmin/_processed_/0/1/csm_Jetee-Jet-d-Eau_2be9f224c2.webp",
                        description: "Famous water fountain in Lake Geneva.",
                        bestTimeToVisit: "All year",
                        rating: 4.8,
                        duration: "1 hour",
                        type: "Landmark",
                        about: "The Jet d'Eau is Geneva's most famous landmark, a massive water fountain that shoots water 140 meters into the air. Located in Lake Geneva, it's visible from many parts of the city and has become a symbol of Geneva's elegance and engineering prowess.",
                        history: "Originally built in 1886 as a safety valve for a hydraulic power network, the Jet d'Eau was moved to its current location in 1891. It was initially only 30 meters high, but was increased to its current height in 1951. Today, it pumps 500 liters of water per second.",
                        features: [
                            "140-meter water jet",
                            "Lake Geneva views",
                            "Night illumination",
                            "Promenade access",
                            "Photo opportunities"
                        ],
                        openingHours: "24/7 (illuminated at night)",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit at sunset",
                            "Take photos",
                            "Walk the promenade",
                            "See the night lights",
                            "Combine with lake cruise",
                            "Check weather conditions",
                            "Visit nearby attractions",
                            "Enjoy the view",
                            "Watch from different angles",
                            "Visit in different seasons"
                        ]
                    },
                    {
                        id: "un-palace",
                        name: "Palace of Nations",
                        image: "https://i.redd.it/0e3p5yo1kyfz.jpg",
                        description: "European headquarters of the United Nations.",
                        bestTimeToVisit: "All year",
                        rating: 4.6,
                        duration: "2 hours",
                        type: "Historic Site",
                        about: "The Palace of Nations is the European headquarters of the United Nations, housed in a magnificent building in Geneva's Ariana Park. It's the largest UN office outside of New York and hosts numerous international conferences and diplomatic meetings.",
                        history: "Built between 1929 and 1938, the Palace of Nations was originally the headquarters of the League of Nations. After World War II, it became the European headquarters of the United Nations. The building combines classical and modern architectural styles.",
                        features: [
                            "Assembly Hall",
                            "Council Chamber",
                            "Library",
                            "Ariana Park",
                            "Art collection"
                        ],
                        openingHours: "Monday to Friday, 10:00 AM - 4:00 PM",
                        entryFee: "CHF 15 (guided tour)",
                        visitorTips: [
                            "Book guided tour",
                            "Bring ID",
                            "Check security rules",
                            "Visit the park",
                            "See the art collection",
                            "Take photos",
                            "Learn about UN history",
                            "Visit the library",
                            "Check for events",
                            "Combine with other attractions"
                        ]
                    },
                   
                    
                ]
            },
            {
                id: "interlaken",
                name: "Interlaken",
                description: "Adventure capital between two lakes, gateway to the Jungfrau region.",
                image: "https://wallpaperaccess.com/full/2134019.jpg",
                temperature: "-5°C - 25°C",
                places: [
                    {
                        id: "jungfraujoch",
                        name: "Jungfraujoch",
                        image: "https://www.touristsecrets.com/wp-content/uploads/2023/09/a-journey-to-jungfraujoch-and-the-beautiful-town-of-interlaken-switzerland-1695275852.jpg",
                        description: "Highest railway station in Europe with stunning Alpine views.",
                        bestTimeToVisit: "June to September",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Mountain",
                        about: "Jungfraujoch, known as the 'Top of Europe', is a UNESCO World Heritage site and one of Switzerland's most popular tourist destinations. At 3,454 meters above sea level, it offers breathtaking views of the Aletsch Glacier and surrounding Alpine peaks.",
                        history: "The Jungfraujoch railway was completed in 1912 after 16 years of construction. It was a remarkable engineering feat, with the railway line reaching the highest railway station in Europe. The Sphinx Observatory was added in 1937 for scientific research.",
                        features: [
                            "Sphinx Observatory",
                            "Ice Palace",
                            "Alpine Sensation",
                            "Snow Fun Park",
                            "Panorama Views",
                            "Lindt Swiss Chocolate Heaven",
                            "Restaurant Crystal",
                            "Hiking Trails"
                        ],
                        openingHours: "Daily 7:30 AM - 4:30 PM",
                        entryFee: "CHF 210 (round trip from Interlaken)",
                        visitorTips: [
                            "Book tickets in advance",
                            "Check weather conditions",
                            "Bring warm clothing",
                            "Wear sunglasses",
                            "Take altitude sickness precautions",
                            "Visit early morning for best views",
                            "Allow full day for visit",
                            "Try the ice palace",
                            "Visit the chocolate shop",
                            "Take the hiking trails"
                        ]
                    },
                    {
                        id: "harder-kulm",
                        name: "Harder Kulm",
                        image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/56086/2000x2000-0-70-efb9151dc29a56d502e5fa9f77f533d1.jpg",
                        description: "Viewpoint offering panoramic views of Interlaken and surrounding mountains.",
                        bestTimeToVisit: "April to October",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Viewpoint",
                        about: "Harder Kulm is Interlaken's local mountain, offering spectacular panoramic views of the Jungfrau region. The viewing platform, known as the 'Two Lakes Bridge', provides a unique perspective of Lake Thun and Lake Brienz.",
                        history: "The first funicular railway to Harder Kulm was built in 1908. The current modern funicular was installed in 2008, and the Two Lakes Bridge viewing platform was added in 2014, making it one of the most popular viewpoints in the region.",
                        features: [
                            "Two Lakes Bridge viewing platform",
                            "Panoramic restaurant",
                            "Hiking trails",
                            "Wildlife observation",
                            "Photography spots",
                            "Sunset viewing",
                            "Mountain restaurant",
                            "Gift shop"
                        ],
                        openingHours: "Daily 9:00 AM - 9:30 PM (summer), 10:00 AM - 5:00 PM (winter)",
                        entryFee: "CHF 34 (round trip)",
                        visitorTips: [
                            "Visit during sunset for best views",
                            "Book tickets online",
                            "Check weather forecast",
                            "Bring camera",
                            "Wear comfortable shoes",
                            "Allow time for hiking",
                            "Visit restaurant",
                            "Check operating hours",
                            "Combine with other activities",
                            "Take the funicular"
                        ]
                    },
                   
                    
                ]
            },
            {
                id: "lucerne",
                name: "Lucerne",
                description: "Medieval city with a beautiful lake and mountain backdrop.",
                image: "https://wallpaperaccess.com/full/3845030.jpg",
                temperature: "0°C - 25°C",
                places: [
                    {
                        id: "chapel-bridge",
                        name: "Chapel Bridge",
                        image: "https://res.cloudinary.com/deyfj1idh/image/upload/v1749461548/chapel-bridge-lucerne_wy4mqo.jpg",
                        description: "Historic wooden bridge with painted interior panels.",
                        rating: 4.8,
                        duration: "1 hour",
                        type: "Historic Site",
                        about: "The Chapel Bridge (Kapellbrücke) is a covered wooden footbridge spanning the River Reuss in Lucerne. Built in 1333, it is the oldest wooden covered bridge in Europe and features a series of paintings from the 17th century depicting scenes from Swiss and Lucerne history.",
                        history: "The bridge was built in 1333 as part of Lucerne's fortifications. In 1993, a fire destroyed most of the bridge and its paintings. It was rebuilt the following year, and the surviving paintings were restored. The bridge is named after St. Peter's Chapel, which is located nearby.",
                        features: [
                            "Historic wooden bridge",
                            "17th-century paintings",
                            "Water Tower",
                            "River views",
                            "Photography spots",
                            "Evening lighting",
                            "Historic architecture",
                            "City center location"
                        ],
                        openingHours: "Open 24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning for photos",
                            "See the evening lighting",
                            "Learn about the paintings",
                            "Visit the Water Tower",
                            "Combine with city tour",
                            "Check weather conditions",
                            "Visit nearby attractions",
                            "Take guided tour",
                            "Photograph from different angles",
                            "Learn about restoration"
                        ]
                    },
                    {
                        id: "mount-pilatus",
                        name: "Mount Pilatus",
                        image: "https://switzerland-tour.com/storage/media/Mt.%20Pilatus/Mt-Pilatus-Lucerne-in-Switzerland.jpg",
                        description: "Mountain with the world's steepest cogwheel railway.",
                        rating: 4.9,
                        duration: "Half day",
                        type: "Mountain",
                        about: "Mount Pilatus is a mountain massif overlooking Lucerne. It offers spectacular views of the Swiss Alps and Lake Lucerne. The mountain is accessible via the world's steepest cogwheel railway, cable car, or hiking trails.",
                        history: "The first cogwheel railway was built in 1889, making it the world's steepest. The mountain has been a popular tourist destination since the 19th century, and the current modern cable car system was installed in the 20th century.",
                        features: [
                            "Cogwheel railway",
                            "Cable car",
                            "Hiking trails",
                            "Panorama views",
                            "Restaurant",
                            "Hotel",
                            "Rope park",
                            "Toboggan run"
                        ],
                        openingHours: "Daily 8:30 AM - 5:30 PM (summer), 8:30 AM - 4:30 PM (winter)",
                        entryFee: "CHF 72 (round trip)",
                        visitorTips: [
                            "Book tickets in advance",
                            "Check weather forecast",
                            "Bring warm clothing",
                            "Wear hiking shoes",
                            "Take the cogwheel railway",
                            "Visit the restaurant",
                            "Try the toboggan run",
                            "Take photos at sunset",
                            "Combine with lake cruise",
                            "Check operating hours"
                        ]
                    },
                    {
                        id: "lake-lucerne",
                        name: "Lake Lucerne",
                        image: "https://content.r9cdn.net/rimg/dimg/4c/4e/8b951263-city-4394-16493694a54.jpg?width=1750&height=1000&xhint=1500&yhint=1039&crop=true",
                        description: "Beautiful lake surrounded by mountains and historic towns.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Natural Wonder",
                        about: "Lake Lucerne (Vierwaldstättersee) is a beautiful lake in central Switzerland, surrounded by mountains and historic towns. It's known for its crystal-clear waters, scenic boat cruises, and stunning views of the Swiss Alps.",
                        history: "The lake has been an important transportation route since Roman times. It played a significant role in Swiss history, particularly during the formation of the Swiss Confederation. The first steamboat service began in 1837.",
                        features: [
                            "Boat cruises",
                            "Swimming spots",
                            "Water sports",
                            "Hiking trails",
                            "Beach areas",
                            "Fishing spots",
                            "Scenic views",
                            "Historic towns"
                        ],
                        openingHours: "Boat services: Daily 7:00 AM - 7:00 PM (summer), 8:00 AM - 5:00 PM (winter)",
                        entryFee: "Boat tickets from CHF 30",
                        visitorTips: [
                            "Take a boat cruise",
                            "Visit historic towns",
                            "Try water sports",
                            "Go swimming",
                            "Take photos",
                            "Visit in different seasons",
                            "Combine with mountain visits",
                            "Check boat schedules",
                            "Book tickets in advance",
                            "Bring swimwear"
                        ]
                    },
// ... existing code ...
            
                ]
            },
            {
                id: "zermatt",
                name: "Zermatt",
                description: "Car-free mountain resort with the iconic Matterhorn.",
                image: "https://st2.depositphotos.com/1402808/6601/i/950/depositphotos_66016431-stock-photo-aerial-view-on-zermatt-valley.jpg",
                temperature: "-10°C - 20°C",
                places: [
                    {
                        id: "matterhorn",
                        name: "Matterhorn",
                        image: "https://s1.1zoom.me/big0/434/426849-Kycb.jpg",
                        description: "Iconic pyramid-shaped mountain and symbol of Switzerland.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Mountain",
                        about: "The Matterhorn is one of the most famous mountains in the world, standing at 4,478 meters (14,692 feet). Its distinctive pyramid shape makes it an iconic symbol of Switzerland and the Alps. The mountain is located on the border between Switzerland and Italy, offering spectacular views from both countries.",
                        history: "The Matterhorn was first successfully climbed in 1865 by a team led by Edward Whymper. The climb ended in tragedy when four members of the team fell to their deaths during the descent. Today, the mountain is a popular destination for climbers and tourists, with the first cable car to the summit being installed in 1979.",
                        features: [
                            "Matterhorn Glacier Paradise",
                            "Klein Matterhorn cable car",
                            "Gornergrat Railway",
                            "Hiking trails",
                            "Skiing areas",
                            "Mountain restaurants",
                            "Photography spots",
                            "Climbing routes"
                        ],
                        openingHours: "Cable cars: Daily 8:30 AM - 4:30 PM (summer), 8:30 AM - 3:30 PM (winter)",
                        entryFee: "CHF 95 (round trip to Matterhorn Glacier Paradise)",
                        visitorTips: [
                            "Book tickets in advance",
                            "Check weather conditions",
                            "Bring warm clothing",
                            "Wear proper hiking shoes",
                            "Take the cable car",
                            "Visit the glacier paradise",
                            "Take photos at sunrise",
                            "Try the restaurants",
                            "Check altitude sickness",
                            "Combine with other activities"
                        ]
                    },
                    
                    
            
                ]
            },
            {
                id: "montreux",
                name: "Montreux",
                description: "Elegant resort town on Lake Geneva with a mild climate.",
                image: "https://cdn.getyourguide.com/img/location/5f9157f1a60ac.jpeg/88.jpg",
                temperature: "5°C - 30°C",
                places: [
                    {
                        id: "chillon-castle",
                        name: "Chillon Castle",
                        image: "http://www.kenkoskela.com/images/xl/Chillon-Castle-Sunset.jpg",
                        description: "Historic castle on Lake Geneva with medieval architecture.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic Site",
                        about: "Chillon Castle is a medieval fortress located on the shores of Lake Geneva. It's one of the most visited historic buildings in Switzerland, known for its beautiful architecture, rich history, and stunning lakeside location. The castle features well-preserved rooms, courtyards, and dungeons.",
                        history: "The castle's history dates back to the 12th century, though the site has been occupied since the Bronze Age. It served as a strategic location for controlling the passage between northern and southern Europe. The castle was made famous by Lord Byron's poem 'The Prisoner of Chillon' in 1816.",
                        features: [
                            "Medieval architecture",
                            "Great halls",
                            "Dungeons",
                            "Chapel",
                            "Courtyards",
                            "Lake views",
                            "Historic rooms",
                            "Gift shop"
                        ],
                        openingHours: "Daily 9:00 AM - 6:00 PM (summer), 10:00 AM - 5:00 PM (winter)",
                        entryFee: "CHF 13.50 (adults), CHF 7 (children)",
                        visitorTips: [
                            "Book tickets online",
                            "Take guided tour",
                            "Visit early morning",
                            "Explore all levels",
                            "See the dungeons",
                            "Take photos",
                            "Visit the chapel",
                            "Check opening hours",
                            "Combine with lake cruise",
                            "Learn about history"
                        ]
                    },
                    {
                        id: "rochers-de-naye",
                        name: "Rochers-de-Naye",
                        image: "https://1.bp.blogspot.com/-oXvMD3mdcRQ/XQ5-U0J7rWI/AAAAAAAAymg/ARia_I8QO6AjVDZeV-oZT_Odbd8lJYObQCLcBGAs/s1600/rochers_de_naye_2014_panorama_2000x992_72dpi_42592.jpg",
                        description: "Mountain peak with panoramic views of Lake Geneva and the Alps.",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Mountain",
                        about: "Rochers-de-Naye is a mountain peak in the Swiss Alps, offering spectacular panoramic views of Lake Geneva, the surrounding mountains, and on clear days, views extending to Mont Blanc. The summit is accessible by cogwheel railway from Montreux.",
                        history: "The cogwheel railway to Rochers-de-Naye was completed in 1892, making it one of the oldest mountain railways in Switzerland. The summit has been a popular tourist destination since the late 19th century, offering visitors a unique perspective of the Lake Geneva region.",
                        features: [
                            "Panoramic views",
                            "Cogwheel railway",
                            "Hiking trails",
                            "Restaurant",
                            "Marmot's Paradise",
                            "Photography spots",
                            "Sunset viewing",
                            "Wildlife observation"
                        ],
                        openingHours: "Daily 8:30 AM - 5:30 PM (summer), 9:00 AM - 4:30 PM (winter)",
                        entryFee: "CHF 42 (round trip from Montreux)",
                        visitorTips: [
                            "Check weather forecast",
                            "Book tickets in advance",
                            "Bring warm clothing",
                            "Wear hiking shoes",
                            "Take the cogwheel railway",
                            "Visit the restaurant",
                            "See the marmots",
                            "Take photos",
                            "Watch sunset",
                            "Combine with other activities"
                        ]
                    },
// ... existing code ...
            
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Singapore",
        description: "Modern city-state with perfect blend of nature and urban life.",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "Singapore Dollar (S$)",
        language: "English",
        timezone: "UTC+8",
        continent: "Asia",
        bestTimeToVisit: "February to April for pleasant weather and fewer crowds.",
        visaRequirements: "Visa requirements vary by nationality.",
        gettingAround: "Efficient public transportation including MRT and buses.",
        tags: ["Modern", "Food", "Shopping", "Nature", "Culture"],
        cities: [
            {
                id: "singapore",
                name: "Singapore",
                description: "A bustling city-state known for its multiculturalism and modern architecture.",
                image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "marina-bay-sands",
                        name: "Marina Bay Sands",
                        image: "https://www.jomjalan.com/wp-content/uploads/2019/03/marina-sands.jpg",
                        description: "Iconic hotel with three towers and a rooftop infinity pool.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Architecture",
                        about: "Marina Bay Sands is an iconic integrated resort in Singapore, featuring a luxury hotel, high-end shopping mall, world-class restaurants, and the famous infinity pool on the 57th floor. The resort's distinctive architecture, with three towers connected by a sky park, has become a symbol of modern Singapore.",
                        history: "Opened in 2010, Marina Bay Sands was designed by architect Moshe Safdie. The project cost approximately S$8 billion and has since become one of Singapore's most recognizable landmarks. The infinity pool, spanning 150 meters, is the world's largest rooftop pool.",
                        features: [
                            "Infinity Pool",
                            "Shopping Mall",
                            "Casino",
                            "Restaurants",
                            "Museum",
                            "Theater",
                            "Convention Center",
                            "Sky Park"
                        ],
                        openingHours: "24/7 (various facilities have different hours)",
                        entryFee: "SkyPark Observation Deck: S$26 (adults), S$20 (children)",
                        visitorTips: [
                            "Book hotel in advance",
                            "Visit SkyPark at sunset",
                            "Try the infinity pool",
                            "Explore the shopping mall",
                            "Dine at celebrity restaurants",
                            "Watch the light show",
                            "Visit the museum",
                            "Take photos from different angles",
                            "Check facility hours",
                            "Book restaurant reservations"
                        ]
                    },
                    {
                        id: "gardens-by-the-bay",
                        name: "Gardens by the Bay",
                        image: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gardens-by-the-Bay.jpg",
                        description: "Futuristic nature park with Supertree Grove and Cloud Forest.",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Nature",
                        about: "Gardens by the Bay is a nature park spanning 101 hectares in central Singapore. It features the iconic Supertrees, two climate-controlled conservatories (Flower Dome and Cloud Forest), and various themed gardens. The park showcases sustainable practices and innovative architecture.",
                        history: "Opened in 2012, Gardens by the Bay was part of Singapore's plan to transform the city into a 'City in a Garden'. The project cost S$1 billion and has won numerous architectural and environmental awards. The Supertrees, ranging from 25 to 50 meters in height, are vertical gardens that generate solar power.",
                        features: [
                            "Supertree Grove",
                            "Flower Dome",
                            "Cloud Forest",
                            "OCBC Skyway",
                            "Dragonfly Lake",
                            "Heritage Gardens",
                            "Children's Garden",
                            "Light Shows"
                        ],
                        openingHours: "Daily 5:00 AM - 2:00 AM (Outdoor Gardens), 9:00 AM - 9:00 PM (Conservatories)",
                        entryFee: "S$28 (adults), S$15 (children) for Conservatories",
                        visitorTips: [
                            "Visit early morning",
                            "See the light show",
                            "Walk the OCBC Skyway",
                            "Explore both conservatories",
                            "Take photos at sunset",
                            "Visit the children's garden",
                            "Check weather forecast",
                            "Book tickets online",
                            "Wear comfortable shoes",
                            "Bring water and sunscreen"
                        ]
                    },
                    {
                        id: "merlion-park",
                        name: "Merlion Park",
                        image: "https://static.vecteezy.com/system/resources/previews/002/010/691/large_2x/merlion-statue-fountain-in-merlion-park-in-singapore-2018-free-photo.JPG",
                        description: "Famous statue of Singapore's national symbol.",
                        rating: 4.6,
                        duration: "1 hour",
                        type: "Landmark",
                        about: "Merlion Park is home to Singapore's iconic Merlion statue, a mythical creature with a lion's head and a fish's body. The park offers stunning views of Marina Bay Sands and the Singapore skyline. The Merlion, standing at 8.6 meters tall, is one of Singapore's most recognizable symbols.",
                        history: "The Merlion was designed by Fraser Brunner in 1964 as the logo for the Singapore Tourism Board. The original Merlion statue was installed in 1972 at the mouth of the Singapore River. In 2002, it was moved to its current location at Merlion Park to make way for the Esplanade Bridge.",
                        features: [
                            "Merlion Statue",
                            "Viewing Platform",
                            "Marina Bay Views",
                            "Photography Spots",
                            "Waterfront Walk",
                            "Sculpture Garden",
                            "Public Art",
                            "Night Lighting"
                        ],
                        openingHours: "24/7",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit early morning",
                            "Take photos at sunset",
                            "See the light show",
                            "Walk along the waterfront",
                            "Visit nearby attractions",
                            "Check tide times",
                            "Bring camera",
                            "Visit at night",
                            "Combine with other sites",
                            "Watch the water spout"
                        ]
                    }
                    
                ]
            },
            {
                id: "sentosa",
                name: "Sentosa",
                description: "Island resort with beaches, theme parks, and entertainment.",
                image: "https://i.ytimg.com/vi/MQMGKExZvQA/maxresdefault.jpg",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "universal-studios",
                        name: "Universal Studios Singapore",
                        image: "https://cdn-imgix.headout.com/mircobrands-content/image/90afaf4e18364b724fee6c453b32c9cf-AdobeStock_296166296_Editorial_Use_Only.jpeg",
                        description: "Movie-themed amusement park with thrilling rides.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Theme Park",
                        about: "Universal Studios Singapore is Southeast Asia's first and only Universal Studios theme park. Located on Sentosa Island, it features 28 rides, shows, and attractions across seven themed zones, including Hollywood, New York, Sci-Fi City, Ancient Egypt, Lost World, Far Far Away, and Madagascar.",
                        history: "Opened in 2010, Universal Studios Singapore was the first Universal Studios theme park in Southeast Asia. The park was developed by Resorts World Sentosa at a cost of S$4.5 billion. It has since become one of Singapore's most popular tourist attractions.",
                        features: [
                            "Transformers: The Ride",
                            "Battlestar Galactica",
                            "Revenge of the Mummy",
                            "Jurassic Park Rapids Adventure",
                            "Shrek 4-D Adventure",
                            "WaterWorld Show",
                            "Sesame Street Spaghetti Space Chase",
                            "Madagascar: A Crate Adventure"
                        ],
                        openingHours: "10:00 AM - 7:00 PM (hours may vary)",
                        entryFee: "S$82 (adults), S$62 (children)",
                        visitorTips: [
                            "Arrive early to beat crowds",
                            "Download the Universal Studios app",
                            "Use Express Pass for popular rides",
                            "Check show schedules",
                            "Visit on weekdays",
                            "Bring sunscreen and water",
                            "Wear comfortable shoes",
                            "Book tickets online",
                            "Start with popular rides",
                            "Stay for the evening show"
                        ]
                    },
                    {
                        id: "siloso-beach",
                        name: "Siloso Beach",
                        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/ab/7a.jpg",
                        description: "Popular beach with water sports and beach bars.",
                        rating: 4.5,
                        duration: "3-4 hours",
                        type: "Beach",
                        about: "Siloso Beach is one of three beaches on Sentosa Island, known for its vibrant atmosphere, water sports activities, and beachfront bars. The beach offers a perfect blend of relaxation and entertainment, with various activities available for visitors of all ages.",
                        history: "Siloso Beach was developed as part of Sentosa's transformation into a resort island. The beach was named after the Siloso Fort, a historical fortification built in the 1880s to protect Singapore's harbor. Today, it's one of Singapore's most popular beach destinations.",
                        features: [
                            "Water Sports",
                            "Beach Volleyball",
                            "Beach Bars",
                            "Restaurants",
                            "Showers and Lockers",
                            "Beach Umbrellas",
                            "Water Activities",
                            "Sunset Views"
                        ],
                        openingHours: "24/7 (facilities have varying hours)",
                        entryFee: "Free (Sentosa Island entry fee applies)",
                        visitorTips: [
                            "Visit during weekdays",
                            "Try water sports",
                            "Stay for sunset",
                            "Book activities in advance",
                            "Bring beach essentials",
                            "Check weather forecast",
                            "Use sunscreen",
                            "Visit beach bars",
                            "Try beach volleyball",
                            "Combine with other Sentosa attractions"
                        ]
                    }
                ]
            },
            {
                id: "chinatown",
                name: "Chinatown",
                description: "Historic district with traditional Chinese culture and cuisine.",
                image: "https://tours.vangalderbus.com/Images/chinatown23262_gate_2836.jpeg",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "buddha-tooth-relic",
                        name: "Buddha Tooth Relic Temple",
                        image: "https://img.freepik.com/premium-photo/buddha-tooth-relic-temple-is-buddhist-temple-located-chinatown-district-singapore_78361-6370.jpg",
                        description: "Beautiful Buddhist temple with cultural artifacts.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Religious Site",
                        about: "The Buddha Tooth Relic Temple and Museum is a four-story temple in Singapore's Chinatown. Built in 2007, it houses what is believed to be the left canine tooth of Buddha, recovered from his funeral pyre in Kushinagar, India. The temple combines traditional Buddhist architecture with modern design elements, featuring intricate carvings, gold-plated statues, and a magnificent prayer hall.",
                        history: "The temple was built in 2007 by Venerable Shi Fa Zhao, the abbot of the temple. The Buddha tooth relic was discovered in 1980 in a collapsed stupa in Myanmar. The temple was designed to house this sacred relic and serve as a center for Buddhist culture and education in Singapore. The architecture follows the Tang Dynasty style, reflecting the temple's Chinese Buddhist heritage.",
                        features: [
                            "Sacred Buddha Tooth Relic",
                            "Prayer Hall",
                            "Buddhist Culture Museum",
                            "Roof Garden",
                            "Tea House",
                            "Gift Shop",
                            "Meditation Hall",
                            "Cultural Performances"
                        ],
                        bestTimeToVisit: "Early morning (7:00 AM - 9:00 AM)",
                        openingHours: "7:00 AM - 5:00 PM daily",
                        entryFee: "Free (donations welcome)",
                        visitorTips: [
                            "Dress modestly",
                            "Remove shoes before entering",
                            "Maintain silence in prayer halls",
                            "Visit during morning prayers",
                            "Check cultural event schedule",
                            "Photography allowed in certain areas",
                            "Join guided tours",
                            "Visit the roof garden",
                            "Try the tea house",
                            "Respect religious customs"
                        ],
                        overview: {
                            architecture: "The temple features Tang Dynasty-style architecture with modern elements. The four-story building includes a prayer hall, museum, and roof garden. The exterior is adorned with intricate carvings and gold-plated decorations.",
                            culturalSignificance: "The temple is one of Singapore's most important Buddhist sites, housing the sacred Buddha tooth relic. It serves as both a place of worship and a center for Buddhist culture and education.",
                            highlights: [
                                "Sacred Buddha tooth relic chamber",
                                "Magnificent prayer hall with gold-plated Buddha statue",
                                "Buddhist Culture Museum with ancient artifacts",
                                "Peaceful roof garden with pagoda",
                                "Traditional tea house experience"
                            ]
                        },
                        tips: {
                            bestTimeToVisit: "Early morning (7:00 AM - 9:00 AM) for a peaceful experience and to witness morning prayers",
                            dressCode: "Modest clothing covering shoulders and knees. Sarongs are available for rent if needed",
                            photography: "Allowed in most areas except the relic chamber. Flash photography is prohibited",
                            facilities: [
                                "Shoe storage area",
                                "Restrooms",
                                "Gift shop",
                                "Tea house",
                                "Meditation hall",
                                "Information center"
                            ],
                            nearbyAttractions: [
                                "Chinatown Heritage Centre",
                                "Sri Mariamman Temple",
                                "Maxwell Food Centre",
                                "Chinatown Complex",
                                "Buddha Tooth Relic Temple Museum"
                            ]
                        }
                    },
                   
                ]
            },
            {
                id: "little-india",
                name: "Little India",
                description: "Vibrant district showcasing Indian culture and heritage.",
                image: "https://www.roots.gov.sg/-/media/Roots/Images/landmarks/little-india-heritage-trail/sri-veeramakaliamman-temple/98-veeramakaliamman-temple-3.ashx",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "sri-veeramakaliamman",
                        name: "Sri Veeramakaliamman Temple",
                        image: "https://www.roots.gov.sg/-/media/Roots/Images/landmarks/little-india-heritage-trail/sri-veeramakaliamman-temple/98-veeramakaliamman-temple-3.ashx",
                        description: "Ancient Hindu temple with intricate architecture.",
                        rating: 4.6,
                        duration: "1 hour",
                        type: "Religious Site",
                        about: "Sri Veeramakaliamman Temple is one of Singapore's oldest Hindu temples, dedicated to the goddess Kali. Built in 1881, it features a magnificent gopuram (tower) adorned with colorful sculptures of Hindu deities. The temple is a significant religious and cultural landmark in Little India.",
                        history: "The temple was built in 1881 by Indian laborers who worked in the nearby racecourse. It was originally a simple structure that was later expanded and renovated. The temple's name 'Veeramakaliamman' means 'Kali the Courageous', and it serves as a place of worship for the Hindu community in Singapore.",
                        features: [
                            "Colorful Gopuram",
                            "Main Prayer Hall",
                            "Deity Statues",
                            "Temple Tank",
                            "Cultural Center",
                            "Gift Shop",
                            "Prayer Services",
                            "Festival Celebrations"
                        ],
                        bestTimeToVisit: "Early morning (6:00 AM - 8:00 AM)",
                        openingHours: "5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM daily",
                        entryFee: "Free (donations welcome)",
                        visitorTips: [
                            "Dress modestly",
                            "Remove shoes before entering",
                            "Maintain silence",
                            "Visit during morning prayers",
                            "Check festival calendar",
                            "Photography allowed in certain areas",
                            "Respect religious customs",
                            "Join guided tours",
                            "Visit during Diwali",
                            "Try prasad (blessed food)"
                        ],
                        overview: {
                            architecture: "The temple features Dravidian architecture with a colorful gopuram (tower) adorned with sculptures of Hindu deities. The main prayer hall houses the deity statues, and the temple complex includes a cultural center and gift shop.",
                            culturalSignificance: "Sri Veeramakaliamman Temple is one of Singapore's oldest Hindu temples and serves as an important religious and cultural center for the Hindu community. It hosts various festivals and cultural events throughout the year.",
                            highlights: [
                                "Magnificent gopuram with colorful sculptures",
                                "Main prayer hall with deity statues",
                                "Temple tank for ritual purposes",
                                "Cultural center for events and activities",
                                "Festival celebrations and cultural programs"
                            ]
                        },
                        tips: {
                            bestTimeToVisit: "Early morning (6:00 AM - 8:00 AM) for a peaceful experience and to witness morning prayers",
                            dressCode: "Modest clothing covering shoulders and knees. Sarongs are available for rent if needed",
                            photography: "Allowed in most areas except the main prayer hall. Flash photography is prohibited",
                            facilities: [
                                "Shoe storage area",
                                "Restrooms",
                                "Gift shop",
                                "Cultural center",
                                "Prayer hall",
                                "Information center"
                            ],
                            nearbyAttractions: [
                                "Little India Arcade",
                                "Mustafa Centre",
                                "Tekka Centre",
                                "Abdul Gafoor Mosque",
                                "Indian Heritage Centre"
                            ]
                        }
                    },
// ... existing code ...
            
                ]
            },
            {
                id: "orchard-road",
                name: "Orchard Road",
                description: "Singapore's premier shopping and entertainment district.",
                image: "https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2018/07/Ion-Orchard-night-900x550.jpg",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "ion-orchard",
                        name: "ION Orchard",
                        image: "https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2018/07/Ion-Orchard-night-900x550.jpg",
                        description: "Luxury shopping mall with high-end brands.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Shopping",
                        about: "ION Orchard is a premier shopping destination in Singapore's Orchard Road, featuring over 300 retail, dining, and entertainment options. The mall is known for its distinctive architecture, luxury brands, and the ION Sky observation deck offering panoramic views of the city.",
                        history: "ION Orchard opened in 2009 and is owned by Orchard Turn Developments, a joint venture between CapitaLand and Sun Hung Kai Properties. The mall's name 'ION' represents 'Ion Orchard Network', symbolizing its role as a hub of activity and connection in Singapore's premier shopping district.",
                        features: [
                            "Luxury Retail Brands",
                            "ION Sky Observation Deck",
                            "Food Court",
                            "Art Installations",
                            "Underground Shopping",
                            "Dining Options",
                            "Entertainment Venues",
                            "Specialty Stores"
                        ],
                        bestTimeToVisit: "Weekday mornings (10:00 AM - 12:00 PM)",
                        openingHours: "10:00 AM - 10:00 PM daily",
                        entryFee: "Free (ION Sky observation deck charges apply)",
                        visitorTips: [
                            "Visit ION Sky for city views",
                            "Check for seasonal sales",
                            "Explore underground levels",
                            "Try local food at food court",
                            "Visit during weekdays",
                            "Use MRT for easy access",
                            "Check event calendar",
                            "Visit during Christmas",
                            "Explore art installations",
                            "Shop during Great Singapore Sale"
                        ],
                        overview: {
                            architecture: "ION Orchard features a modern glass facade with a distinctive curved design. The mall spans eight levels above ground and four levels below, with a unique architectural feature being the ION Sky observation deck on the 56th floor.",
                            culturalSignificance: "As one of Singapore's premier shopping destinations, ION Orchard represents the city's status as a global shopping hub. It hosts various cultural events, art installations, and seasonal celebrations throughout the year.",
                            highlights: [
                                "ION Sky observation deck with panoramic views",
                                "Luxury brand boutiques and flagship stores",
                                "Underground shopping levels",
                                "Art installations and exhibitions",
                                "Diverse dining options from casual to fine dining"
                            ]
                        },
                        tips: {
                            bestTimeToVisit: "Weekday mornings (10:00 AM - 12:00 PM) for a less crowded shopping experience",
                            dressCode: "Smart casual attire recommended for upscale dining venues",
                            photography: "Allowed throughout the mall, including ION Sky (ticket required)",
                            facilities: [
                                "Information counter",
                                "Wheelchair access",
                                "Baby changing rooms",
                                "Prayer rooms",
                                "Free WiFi",
                                "Currency exchange",
                                "Tourist services",
                                "Lost and found"
                            ],
                            nearbyAttractions: [
                                "Orchard Road",
                                "Takashimaya Shopping Centre",
                                "Ngee Ann City",
                                "Wisma Atria",
                                "Somerset 313"
                            ]
                        }
                    },
                    
                ]
            }
        ]
    },
    {
        id: 12,
        name: "Germany",
        description: "A country rich in history, culture, and natural beauty.",
        image: "https://images.alphacoders.com/552/552457.jpg",
        currency: "Euro (€)",
        language: "German",
        timezone: "UTC+1",
        continent: "Europe",
        bestTimeToVisit: "May to September for pleasant weather.",
        visaRequirements: "Schengen visa required for many nationalities.",
        gettingAround: "Efficient public transportation and autobahn network.",
        tags: ["History", "Culture", "Nature", "Architecture", "Beer"],
        cities: [
            {
                id: "berlin",
                name: "Berlin",
                description: "Germany's capital, known for its art, history, and vibrant culture.",
                image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "-2°C - 25°C",
                places: [
                    {
                        id: "brandenburg-gate",
                        name: "Brandenburg Gate",
                        image: "https://wallpapercave.com/wp/wp4196995.jpg",
                        description: "Iconic neoclassical monument and symbol of German unity.",
                        rating: 4.8,
                        duration: "1 hour",
                        type: "Historic Site",
                        about: "The Brandenburg Gate is Berlin's most famous landmark and a symbol of German unity. Built in the 18th century, this neoclassical triumphal arch has witnessed significant historical events and now stands as a powerful symbol of peace and unity.",
                        history: "Constructed between 1788 and 1791 by King Frederick William II of Prussia, the Brandenburg Gate was designed by Carl Gotthard Langhans. It was inspired by the Propylaea in Athens and features the famous Quadriga statue on top. The gate has witnessed Napoleon's march, World War II, and the fall of the Berlin Wall.",
                        features: [
                            "Neoclassical Architecture",
                            "Quadriga Statue",
                            "Doric Columns",
                            "Historical Plaques",
                            "Memorial Site",
                            "Photo Opportunities",
                            "Night Illumination",
                            "Surrounding Parks"
                        ],
                        bestTimeToVisit: "Early morning or evening for fewer crowds",
                        openingHours: "Open 24/7 (exterior), Interior access during special events",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit at night for beautiful illumination",
                            "Take photos from Pariser Platz",
                            "Learn about the historical significance",
                            "Visit during special events",
                            "Combine with nearby attractions",
                            "Check for guided tours",
                            "Visit the information center",
                            "Explore surrounding monuments",
                            "Attend cultural events",
                            "Visit during Christmas market"
                        ],
                        overview: {
                            architecture: "The Brandenburg Gate features a neoclassical design with 12 Doric columns forming five passageways. The central passage was reserved for royalty. The gate is topped by the Quadriga, a chariot drawn by four horses, representing the goddess of peace.",
                            culturalSignificance: "The Brandenburg Gate is a powerful symbol of German unity and peace. It has witnessed key historical events and now serves as a venue for major celebrations and cultural events. It's considered one of Europe's most significant landmarks.",
                            highlights: [
                                "The Quadriga statue",
                                "Neoclassical architecture",
                                "Historical significance",
                                "Night illumination",
                                "Surrounding monuments"
                            ]
                        },
                        tips: {
                            bestTimeToVisit: "Early morning (7:00 AM - 9:00 AM) or evening (6:00 PM - 8:00 PM) for fewer crowds and better photos",
                            dressCode: "Casual attire suitable for weather conditions",
                            photography: "Allowed and encouraged, especially at night",
                            facilities: [
                                "Information center",
                                "Public restrooms",
                                "Gift shop",
                                "Tourist information",
                                "Wheelchair access",
                                "Guided tour meeting point"
                            ],
                            nearbyAttractions: [
                                "Reichstag Building",
                                "Tiergarten Park",
                                "Holocaust Memorial",
                                "Unter den Linden",
                                "Parisier Platz"
                            ]
                        }
                    },
                    {
                        id: "berlin-wall",
                        name: "Berlin Wall Memorial",
                        image: "https://us.images.westend61.de/0001912636pw/view-of-section-of-the-wall-at-the-berlin-wall-memorial-memorial-park-bernauer-strasse-berlin-germany-europe-RHPLF28923.jpg",
                        description: "Historic site commemorating the division of Berlin.",
                        rating: 4.7,
                        duration: "2 hours",
                        type: "Historic Site",
                        about: "The Berlin Wall Memorial is a comprehensive memorial site that preserves a section of the Berlin Wall and the border strip. It serves as a reminder of the city's division and the victims of the Wall, while also documenting the history of the Wall's construction and fall.",
                        history: "The Berlin Wall was built in 1961 and stood until 1989, dividing East and West Berlin. The memorial site was established in 1998 and includes the last complete section of the Wall's border fortifications. It preserves the memory of the division and honors those who lost their lives trying to cross the Wall.",
                        features: [
                            "Preserved Wall Sections",
                            "Documentation Center",
                            "Chapel of Reconciliation",
                            "Memorial Grounds",
                            "Border Strip",
                            "Viewing Platform",
                            "Information Panels",
                            "Historical Exhibits"
                        ],
                        bestTimeToVisit: "Weekday mornings for smaller crowds",
                        openingHours: "Outdoor area: 24/7, Documentation Center: 10:00 AM - 6:00 PM (Closed Mondays)",
                        entryFee: "Free",
                        visitorTips: [
                            "Visit the Documentation Center",
                            "Take a guided tour",
                            "Read the information panels",
                            "Visit the Chapel of Reconciliation",
                            "Climb the viewing platform",
                            "Attend memorial services",
                            "Visit during weekdays",
                            "Check for special exhibitions",
                            "Take time to reflect",
                            "Visit nearby memorial sites"
                        ],
                        
                        tips: {
                            bestTimeToVisit: "Weekday mornings (10:00 AM - 12:00 PM) for a more contemplative experience",
                            dressCode: "Respectful attire suitable for a memorial site",
                            photography: "Allowed, but be respectful of the site's significance",
                            facilities: [
                                "Documentation Center",
                                "Information desk",
                                "Restrooms",
                                "Gift shop",
                                "Wheelchair access",
                                "Guided tour meeting point"
                            ],
                            nearbyAttractions: [
                                "Mauerpark",
                                "Nordbahnhof",
                                "Invalidenfriedhof",
                                "Natural History Museum",
                                "Humboldt University"
                            ]
                        }
                    },

            
                ]
            },
            {
                id: "munich",
                name: "Munich",
                description: "Bavaria's capital, famous for Oktoberfest and rich culture.",
                image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/23/13/munich-alamy.jpg",
                temperature: "-5°C - 30°C",
                places: [
                    {
                        id: "marienplatz",
                        name: "Marienplatz",
                        image: "https://themunichguide.de/wp-content/uploads/2020/01/new-town-hall-marienplatz-munich2.jpg",
                        description: "The central square of Munich, home to the famous Glockenspiel and New Town Hall.",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Historic Square",
                        about: "Marienplatz is Munich's main square and the heart of the city since 1158. It's surrounded by historic buildings, shops, and restaurants, making it a perfect starting point for exploring Munich.",
                        history: "The square was named after the Mariensäule (Mary's Column) erected in 1638 to celebrate the end of Swedish occupation. The New Town Hall was built between 1867 and 1909 in a neo-gothic style.",
                        features: [
                            "Glockenspiel show",
                            "New Town Hall",
                            "Old Town Hall",
                            "Mariensäule",
                            "Shopping streets",
                            "Restaurants and cafes"
                        ],
                        bestTimeToVisit:"Early morning or late afternoon to avoid crowds",
                        openingHours: "24/7 (Glockenspiel shows at 11 AM and 12 PM daily, additional show at 5 PM from March to October)",
                        howToGetThere: "Take the U-Bahn (U3 or U6) or S-Bahn to Marienplatz station",
                            entryFee: "Free",
                        visitorTips: [
                            "Visit at 11 AM or 12 PM to see the Glockenspiel show",
                            "Best time to visit is early morning to avoid crowds",
                            "Combine with a visit to the nearby Viktualienmarkt",
                            "Take time to explore the surrounding shopping streets",
                            "Visit during Christmas for the famous Christmas market"
                        ],

                        
                    },
                    {
                        id: "neuschwanstein",
                        name: "Neuschwanstein Castle",
                        image: "https://tourscanner.com/blog/wp-content/uploads/2020/02/Neuschwanstein-Castle-tours-from-Munich.jpg?x58227",
                        description: "The fairy-tale castle that inspired Disney's Sleeping Beauty Castle.",
                        rating: 4.9,
                        duration: "4-5 hours",
                        type: "Castle",
                        about: "Neuschwanstein Castle is a 19th-century Romanesque Revival palace built by King Ludwig II of Bavaria. Perched on a rugged hill above the village of Hohenschwangau, it offers breathtaking views of the surrounding Alps.",
                        history: "Construction began in 1869 but was never fully completed. King Ludwig II lived in the castle for only 172 days before his mysterious death in 1886. The castle was opened to the public shortly after his death.",
                        features: [
                            "Throne Room",
                            "King's Bedroom",
                            "Singers' Hall",
                            "Grotto",
                            "Marienbrücke (Mary's Bridge)",
                            "Castle Gardens"
                        ],
                        visitorTips: [
                            "Book tickets online in advance to avoid long queues",
                            "Visit early morning or late afternoon for fewer crowds",
                            "Take the bus up to the castle to save energy",
                            "Don't miss the view from Marienbrücke",
                            "Combine with a visit to Hohenschwangau Castle",
                            "Allow plenty of time for the visit and transportation"
                        ],
                            address: "Neuschwansteinstraße 20, 87645 Schwangau, Germany",
                            openingHours: "April to October: 9 AM - 6 PM, October to March: 10 AM - 4 PM",
                            bestTimeToVisit: "Early morning or late afternoon, avoid weekends and holidays",
                            howToGetThere: "Take a train to Füssen, then bus 73 or 78 to Hohenschwangau",
                            entryFee: "€15 for adults, €14 for seniors, free for children under 18",
                        
                    }
                ]
            },
            {
                id: "cologne",
                name: "Cologne",
                description: "Historic city known for its magnificent cathedral and vibrant culture.",
                image: "https://cdn.britannica.com/18/70118-050-934B6C18/passenger-boat-Cologne-Cathedral-Rhine-River-North.jpg",
                temperature: "0°C - 25°C",
                places: [
                    {
                        id: "cologne-cathedral",
                        name: "Cologne Cathedral",
                        image: "https://www.tripsavvy.com/thmb/Ov8lWKb8tAXkOlt5aGnjJ3xzVqU=/1945x1542/filters:no_upscale():max_bytes(150000):strip_icc()/colognecathedralGettyImages-181964026JorgGreuel-5a02c27e4e4f7d001a0dea0c.jpg",
                        description: "Gothic masterpiece and UNESCO World Heritage site.",
                        rating: 4.8,
                        duration: "2 hours",
                        type: "Religious Site",
                        about: "Cologne Cathedral is Germany's most visited landmark and the largest Gothic church in Northern Europe. Its twin spires dominate the city's skyline, and it houses the Shrine of the Three Kings, making it one of the most important pilgrimage sites in Europe.",
                        history: "Construction began in 1248 and took over 600 years to complete. The cathedral was heavily damaged during World War II but was restored to its original glory. It was designated a UNESCO World Heritage site in 1996.",
                        features: [
                            "Twin Spires",
                            "Shrine of the Three Kings",
                            "Stained Glass Windows",
                            "Treasury",
                            "Bell Tower",
                            "Organ",
                            "Crypt",
                            "Viewing Platform"
                        ],
                        visitorTips: [
                            "Visit early morning to avoid crowds",
                            "Climb the tower for panoramic views",
                            "Don't miss the treasury and crypt",
                            "Attend a mass or organ concert",
                            "Visit during Christmas for the market",
                            "Take a guided tour for detailed history",
                            "Check the website for special events",
                            "Visit the rooftop for city views"
                        ],
                        
                            address: "Domkloster 4, 50667 Köln, Germany",
                            openingHours: "November to April: 6 AM - 7:30 PM, May to October: 6 AM - 9 PM",
                            bestTimeToVisit: "Early morning (8 AM - 10 AM) or late afternoon",
                            howToGetThere: "Take the U-Bahn to Dom/Hauptbahnhof station",
                            entryFee: "Free (Tower climb: €5, Treasury: €6)",
                        
                        
                    },
                    {
                        id: "rhine-river",
                        name: "Rhine River Cruise",
                        image: "https://i.pinimg.com/originals/0e/37/f5/0e37f544fb2555388d5d57c9c6d06505.jpg",
                        description: "Scenic boat tours along the historic Rhine River.",
                        rating: 4.7,
                        duration: "3-4 hours",
                        type: "Natural Attraction",
                        about: "The Rhine River Cruise offers breathtaking views of Cologne's skyline, historic castles, and picturesque villages. The cruise takes you through the heart of the city and beyond, showcasing the region's natural beauty and cultural heritage.",
                        history: "The Rhine has been a vital waterway for trade and transportation for centuries. Today, it serves as both a commercial route and a popular tourist attraction, offering visitors a unique perspective of the region's history and landscape.",
                        features: [
                            "Panoramic City Views",
                            "Historic Castles",
                            "Vineyard-covered Hills",
                            "Medieval Towns",
                            "Lorelei Rock",
                            "Deck Seating",
                            "Restaurant Service",
                            "Guided Commentary"
                        ],
                        
                        visitorTips: [
                            "Book tickets in advance during peak season",
                            "Choose a sunny day for the best views",
                            "Bring a camera for scenic photos",
                            "Consider a sunset cruise for romantic views",
                            "Wear comfortable shoes and weather-appropriate clothing",
                            "Check the schedule for special themed cruises",
                            "Arrive early to get good seats",
                            "Bring snacks and water for longer cruises"
                        ],
                        
                        
                            address: "Frankenwerft 35, 50667 Köln, Germany",
                            openingHours: "Varies by season, typically 10 AM - 6 PM",
                            bestTimeToVisit: "April to October for best weather",
                        
                        
                            howToGetThere: "Take the U-Bahn to Heumarkt station",
                            entryFee: "Starting from €15 for basic cruises",
                       
                        
                    }
                        ]
                    }
                ]
            },
    
                            
   
    
];