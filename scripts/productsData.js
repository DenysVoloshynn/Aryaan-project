const products = [
    {
        name: "Air Jordan 1 Mid White",
        desc: "Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. Fresh color trims the clean, classic materials, imbuing modernity into a classic design.",
        price: 1250,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9609043c-e2ac-4f16-a1fa-952c26212845/air-jordan-1-mid-shoes-X5pM09.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5a839e60-727c-4410-b885-092f6914b9fb/air-jordan-1-mid-shoes-X5pM09.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d99f85b0-28a5-41d0-b454-f0b740b9b347/air-jordan-1-mid-shoes-X5pM09.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b6204ed8-ef3b-49a6-91de-a78915d832c1/air-jordan-1-mid-shoes-X5pM09.png",
        brand: "air-jordan",
        showInSlider: true,
  
    },

    {
        name: "Air Jordan 1 Retro High OG",
        desc: "3 + 1 = a whole new icon. Celebrating 35 years of the Air Jordan 3, these kicks combine the classic AJ1 silhouette with an original AJ3 colorway. Crafted to the '85 specs, it's got premium leather, a high-top collar, and the woven tongue label you know and love. Bold splashes of True Blue throughout (check out the Wings logo) stand out against layers of White and Cement Grey. And the finishing touch? Nike Air cushioning underfoot lets you keep pace, so nothing holds you back from stepping out in style.",
        price: 1800,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/09c9186d-e28e-4e46-9535-e49f09ddfdd9/air-jordan-1-retro-high-og-mens-shoes-zh4wz5.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6c389fcd-8609-4632-8eee-0f3449652b68/air-jordan-1-retro-high-og-mens-shoes-zh4wz5.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b7d9e1fb-6119-4345-8efe-747dd6bffa6a/air-jordan-1-retro-high-og-mens-shoes-zh4wz5.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aadcf4bb-c4c6-4456-bb61-50e44fc0fa1d/air-jordan-1-retro-high-og-mens-shoes-zh4wz5.png",
        brand: "air-jordan",
        showInSlider: true,
    },
    {
        name: "Air Jordan 7 Retro",
        desc: "Inspired by the shoe originally worn by MJ during the '92 season and summer of basketball, the Air Jordan 7 Retro revives its championship legacy for a new generation of sneakerheads.",
        price: 2100,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/27dccc44-1449-4372-9ad8-177a025e47f6/air-jordan-7-retro-mens-shoes-098sXt.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/253bcf7d-0ef8-4ca0-ad3a-9b661f38a817/air-jordan-7-retro-mens-shoes-098sXt.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/47d6beb2-5447-443b-bf09-6ec6084ae05b/air-jordan-7-retro-mens-shoes-098sXt.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/26f49547-0978-4c23-9ed9-b6cf29964b88/air-jordan-7-retro-mens-shoes-098sXt.png",
        brand: "air-jordan",
        showInSlider: true,
    },
    {
        name: "Air Jordan XXXVII Low",
        desc: "You've got the hops and the speed???lace up in shoes that enhance what you bring to the court. The latest AJ is all about takeoffs and landings, with multiple Air units to help get you off the ground and Formula 23 foam to ease your impact. The upper is made with strong, reinforced leno-weave fabric that'll keep you feeling contained???and leave your game uncompromised.",
        price: 1750,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea83f861-5365-4e60-9a9f-cbf2c54a4f30/air-jordan-xxxvii-low-mens-basketball-shoes-Q0x2XT.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2918a5b5-5c16-4a14-bdcf-bd9314eb4ddd/air-jordan-xxxvii-low-mens-basketball-shoes-Q0x2XT.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8df760a4-cd4a-415b-8b1f-69a92a9d0c7d/air-jordan-xxxvii-low-mens-basketball-shoes-Q0x2XT.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/12915f31-a6c1-44bd-bef1-b22b5595793b/air-jordan-xxxvii-low-mens-basketball-shoes-Q0x2XT.png",
        brand: "air-jordan",
        showInSlider: true,
    },
    {
        name: "Air Jordan 5 Retro",
        desc: "Get your piece of Jordan history and heritage with the Air Jordan 5 Retro. Based on the classic game shoe from 1990, it has all the iconic details, including the bump-out collar, lace toggle and fighter plane-inspired design lines.",
        price: 2000,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/07928b7f-9b0f-4b96-a842-86db5e9b3a6b/air-jordan-5-retro-mens-shoes-8G76FZ.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/174359d1-d3fe-44a0-9180-efc2ba7d5fa5/air-jordan-5-retro-mens-shoes-8G76FZ.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f0265ea2-1cce-48b5-ae90-0c20ff2f4a32/air-jordan-5-retro-mens-shoes-8G76FZ.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d9e11ff6-5aef-44e3-ae7f-f9e8cdca3ba0/air-jordan-5-retro-mens-shoes-8G76FZ.png",
        brand: "air-jordan",
        showInSlider: true,
    },
    {
        name: "Air Jordan 3 Retro",
        desc: "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper???with that luxurious elephant print texture???combines with visible Air in the sole to make a comfortable, everyday icon. Fire-red details burn through, giving you one hot look.",
        price: 2100,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c8c90a8-9563-41dc-8dda-464ac97e3251/air-jordan-3-retro-mens-shoes-bPRc5V.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e1e2df5-aefe-40dd-8c36-07eb2ea3c777/air-jordan-3-retro-mens-shoes-bPRc5V.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a2cead97-dcf4-42ff-a0a0-bcf304e580d5/air-jordan-3-retro-mens-shoes-bPRc5V.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/52667c5a-559c-409c-bb57-f0a5ee700690/air-jordan-3-retro-mens-shoes-bPRc5V.png",
        brand: "air-jordan",
        showInSlider: true,
    },
    {
        name: "Air Jordan 6 Retro",
        desc: "MJ's sixth signature shoe debuted during the 1990-1991 season as His Airness battled rivals in pursuit of an elusive first championship. Now, it's back in a variety of color schemes. Gear up for the 30th anniversary of the Air Jordan 6 with this timeless classic.",
        price: 2000,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7cee5620-26ec-4139-aa52-62a4bd2e1f15/air-jordan-6-retro-shoes-DKXWD3.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5ebd5af5-19b9-40d4-98a7-4b61b41cccb0/air-jordan-6-retro-shoes-DKXWD3.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d1a0ca2c-6d25-4086-9992-e9fb0e51a327/air-jordan-6-retro-big-kids-shoes-wfks32.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bef20f5d-7ba4-4550-b783-059ceabb0dfc/air-jordan-6-retro-shoes-DKXWD3.png",
        brand: "air-jordan",
        showInSlider: true,
    },







    {
        name: "Jordan Jumpman Team II",
        desc: "Originally built for the court, the Jordan Jumpman Team II takes elements of the AJ13 and turns 'em into a fly, everyday shoe. Air units in the front keep you comfortable while the upper is highlighted by iconic Jordan details like dimpled leather paneling and a Jumpman logo jewel.",
        price: 1500,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/988527ab-71a4-4255-b2ac-a9230c5877b8/jordan-jumpman-team-ii-mens-shoes-r44cLz.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/adc2f6cc-60ae-464e-a993-e1a4eb47b5f9/jordan-jumpman-team-ii-mens-shoes-r44cLz.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8fdd04ab-1c0d-44b3-8849-5890ef4ad7a6/jordan-jumpman-team-ii-mens-shoes-r44cLz.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3354d803-b845-49b0-b035-3352ba372220/jordan-jumpman-team-ii-mens-shoes-r44cLz.png",
        brand: "nike",
        showInSlider: false,
    },
    {
        name: "Nike Air Force 1 Mid React",
        desc: "Join the party and celebrate 40 years of pushing sport and fashion boundaries with the Air Force 1 React. Taking a bold step into b-ball iconography, its plush React foam and amplified outsole bring new-age comfort. Polished gold details and fresh branding that blends logos from past releases honor the fearless off-court look and pay tribute to the AF1's reign.",
        price: 1500,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f89b2b4e-a7e2-4863-a0c4-2c3133f72d1d/air-force-1-mid-react-mens-shoes-fh4rHQ.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7fdd3345-f17c-40c6-a9b3-efd69250a381/air-force-1-mid-react-mens-shoes-fh4rHQ.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8496fad-62aa-475f-a1c0-cb5b51e53587/air-force-1-mid-react-mens-shoes-fh4rHQ.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3148164-fe3c-4d29-83f9-31ff38c52ee4/air-force-1-mid-react-mens-shoes-fh4rHQ.png",
        brand: "nike",
        showInSlider: false,
    },
    {
        name: "Nike Air Flight Lite Mid",
        desc: "Take a trip down crossover lane with the '90s hoops shoe that ruled the court and the big screen. Originally one of the lightest b-ball shoes released, its perforated leather keeps it airy while the plush collar and elevated tongue rock your retro style.",
        price: 1400,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/de49f5d7-379d-460e-ae66-677849dc4efc/air-flight-lite-mid-mens-shoes-MK82PV.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/470c58dc-de03-4876-9fca-b8af0308aa11/air-flight-lite-mid-mens-shoes-MK82PV.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/880f9892-b344-43ed-b048-3fbdafd9f389/air-flight-lite-mid-mens-shoes-MK82PV.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/73c61a67-7ced-412a-8313-bf6354f0b393/air-flight-lite-mid-mens-shoes-MK82PV.png",
        brand: "nike",
        showInSlider: false,
    },


    {
        name: "Nike Air Force 1 '07 Premium",
        desc: "Step into new beginnings with a fresh pair of sneakers. We gave our legendary AF1 a new look just in time for the Lunar New Year. Soft suede and French terry add rich texture to a smooth leather upper while a subtle, tonal colors adds visual dimension. Vibrant embroidered Swoosh logos draw inspiration from swift and agile rabbits to commemorate the Year of the Rabbit along with woven tongue labels and marbled shoelace beads.",
        price: 1500,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/951c5335-78d7-40d5-94ff-ca6298dfe735/air-force-1-07-premium-mens-shoes-2x59Z3.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/00c235c0-406e-4499-a7b7-545e2d20f13a/air-force-1-07-premium-mens-shoes-2x59Z3.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f32a8931-4c05-4064-a59b-9d0003e80853/air-force-1-07-premium-mens-shoes-2x59Z3.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2e0c60d7-46db-4ecf-a57e-72f834e48e5f/air-force-1-07-premium-mens-shoes-2x59Z3.png",
        brand: "nike",
        showInSlider: false,
    },

    {
        name: "Nike Air Max 97",
        desc: "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
        price: 1750,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a47b2ef9-8239-4e82-99fd-e6159c0df489/air-max-97-mens-shoes-LJmK45.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33aea626-bb43-4091-805c-ba12cf978f2d/air-max-97-mens-shoes-LJmK45.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oihgcfk3ykelvgmwwrqu/air-max-97-mens-shoes-LJmK45.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a717540-b712-486d-8612-acd2a8905d5f/air-max-97-mens-shoes-LJmK45.png",
        brand: "nike",
        showInSlider: false,
    },
    {
        name: "Nike Air Max 90 GTX",
        desc: "Designed to keep you having fun when the rain starts, the Nike Air Max 90 GTX delivers a waterproof take on the champion running shoe that helped define the ???90s. Sure to be a coveted edition, your tried and true gets a GORE-TEX upper so you can make a splash without getting wet.",
        price: 1350,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d10c3174-fd3e-4284-84d8-f70b3d8eede3/air-max-90-gtx-mens-shoes-mCrXQm.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fdd29712-0827-4aab-bde7-fee1d6253ded/air-max-90-gtx-mens-shoes-mCrXQm.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0df31086-ca50-465a-a609-7df39c1147f6/air-max-90-gtx-mens-shoes-mCrXQm.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bc34e58a-1d32-4842-bd25-af487b3efcd8/air-max-90-gtx-mens-shoes-mCrXQm.png",
        brand: "nike",
        showInSlider: false,
    },
    {
        name: "Nike Air Max Penny",
        desc: "Paying tribute to basketball icon Penny Hardaway, the Nike Air Max Penny is a near exact replica of the hoops original. From its jeweled Swoosh to the wing piping on the sides, these original details celebrate both your retro style and a b-ball legend.",
        price: 1700,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7e902f99-9a73-4bd6-8b0f-ef06693c4356/air-max-penny-mens-shoes-gxccHq.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/efb502de-2238-473d-bb08-c85c26c5c46c/air-max-penny-mens-shoes-gxccHq.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e50a589b-7d0e-47a9-afcb-305c25b71512/air-max-penny-mens-shoes-gxccHq.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8cee1a08-c0fe-4fbb-945b-efbbe95ae887/air-max-penny-mens-shoes-gxccHq.png",
        brand: "nike",
        showInSlider: false,
    },







    {
        name: "Nike Dunk High Up",
        desc: "There???s never a wrong time to stand tall. Created for the hardwood but taken to the streets, the Nike Dunk High Up gives the '80s b-ball icon the perfect lift. With its classic high-top design, sport-like essence, and elevated midsole, it stays true to hoops DNA while letting you channel your confidence with every step.",
        price: 1250,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9e3687f6-a793-405c-9d3e-8d74a957664a/dunk-high-up-womens-shoes-3DnDtC.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c1cf020e-de58-4b31-935d-5bbbd05fad48/dunk-high-up-womens-shoes-3DnDtC.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f53e7262-1284-468b-a790-e35bdddc203e/dunk-high-up-womens-shoes-3DnDtC.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/94705aec-1fdb-464b-b330-69b577ef0be0/dunk-high-up-womens-shoes-3DnDtC.png",
        brand: "dunk",
        showInSlider: false,
    },
    {
        name: "Nike Dunk High 1985",
        desc: "Celebrate heritage with an updated version of the Dunk High, recrafted to reflect the original from 1985. Matching the shape, look and feel that started it all, it delivers true vintage style while keeping the familiar comfort you love.",
        price: 1400,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/43628f12-4603-4702-bd05-6f09bd421d45/dunk-high-1985-shoes-L05QbB.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8e2a35e5-00f4-49cb-a9b9-999a74439d9d/dunk-high-1985-shoes-L05QbB.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c746c6ac-9fad-49b3-9eeb-da710336bb66/dunk-high-1985-shoes-L05QbB.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/14981c9d-7028-462a-88d1-86c8609fd82f/dunk-high-1985-shoes-L05QbB.png",
        brand: "dunk",
        showInSlider: false,
    },
    {
        name: "Nike Dunk High Retro SE",
        desc: "Fireside style and a whole lotta freshness???this joyful take on the Dunk High is the perfect match for rosy cheeks, the first floating snowflakes and your favorite winter beverage. Plaid accents bring the warm feels, while twill and corduroy-like fabrics add a sophisticated touch to the storied basketball look. Oh, and let's not forget the seasonally appropriate colors. Don't worry???even if you've been naughty, you're gonna look nice.",
        price: 1250,
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/11920503-7b80-4ee4-bf26-ee0ff9052f0f/dunk-high-retro-se-mens-shoes-cfTsKT.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/c59408a5-c488-4882-8404-956c77a46ca2/dunk-high-retro-se-mens-shoes-cfTsKT.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/127d66fb-26f0-438d-9d9d-da89f3fe41f3/dunk-high-retro-se-mens-shoes-cfTsKT.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5,q_80/69b7d047-d8de-48fc-9941-678f584056f5/dunk-high-retro-se-mens-shoes-cfTsKT.png",
        brand: "dunk",
        showInSlider: false,
    },
    {
        name: "Nike Dunk Low Retro Premium",
        desc: "Fireside style and a whole lotta freshness???this joyful take on the Dunk Low is the perfect match for rosy cheeks, the first floating snowflakes and your favorite winter beverage. Plaid accents bring the warm feels, while cheerful colors put a seasonally appropriate bow on top of the storied basketball look. Don't worry???even if you've been naughty, you're gonna look nice.",
        price: 1200,
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/4507b3ba-1051-467d-b14e-b9325c4bc21f/dunk-low-retro-premium-mens-shoes-78Tr6v.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/91fd817c-bcc1-4047-998f-af10c8c671de/dunk-low-retro-premium-mens-shoes-78Tr6v.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/33de9463-1c1b-40c1-850b-044f6e34f230/dunk-low-retro-premium-mens-shoes-78Tr6v.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/f1f35ac6-3da7-4913-8a04-27a82e3288c3/dunk-low-retro-premium-mens-shoes-78Tr6v.png",
        brand: "dunk",
        showInSlider: false,
    },
    {
        name: "Nike Dunk Low SE",
        desc: "You???ve struck gold with these kicks! The Nike Dunk Low is back. Golden Swoosh logos draw inspiration from the light that shines within us all while durable leather and a classic silhouette keep this '80s icon fresh for a new generation.",
        price: 1000,
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/8f6c7eb1-2a44-443d-a3ba-076c962e529d/dunk-low-se-big-kids-shoes-HLWkT5.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/754866a0-936a-476d-8ec5-c4dd857805bd/dunk-low-se-big-kids-shoes-HLWkT5.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/f50343cc-4220-4f54-a90e-118d5c4cc358/dunk-low-se-big-kids-shoes-HLWkT5.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1019f00c-7f18-449e-a3d2-536a5716d952/dunk-low-se-big-kids-shoes-HLWkT5.png",
        brand: "dunk",
        showInSlider: false,
    },
    {
        name: "Nike Dunk Low",
        desc: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels '80s vintage back onto the streets while its padded, low-cut collar lets you take your game anywhere???in comfort.",
        price: 1400,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/91d81195-cdfb-4aeb-ae88-4f7f2fa5adda/dunk-low-womens-shoes-x9nRxb.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/20401fea-27d7-4985-90e6-67fecb69459c/dunk-low-womens-shoes-x9nRxb.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c8716d4f-74b6-4039-871c-b418f942629b/dunk-low-womens-shoes-x9nRxb.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b70ec5f-0a17-414d-90f3-4fa3c84fceb9/dunk-low-womens-shoes-x9nRxb.png",
        brand: "dunk",
        showInSlider: false,
    },


    {
        name: "Nike Dunk Low Next Nature",
        desc: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with classic details and throwback hoops flair. Now made with at least 20% recycled materials by weight, it lets you do good by looking good.",
        price: 1400,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d0552c8d-dc53-4003-a0e9-9511561f6e4e/dunk-low-next-nature-womens-shoes-4JcVKZ.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fba95c3b-c3ca-4dcc-9c2b-dbad0a43fd2c/dunk-low-next-nature-womens-shoes-4JcVKZ.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/371dda3a-5be3-4716-bedf-dc88704689f1/dunk-low-next-nature-womens-shoes-4JcVKZ.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/63c7d2d1-b7cb-4cdd-9441-5d21688fc8e3/dunk-low-next-nature-womens-shoes-4JcVKZ.png",
        brand: "dunk",
        showInSlider: false,
    },
    {
        name: "Nike Dunk High Up Premium",
        desc: "Created for the hardwood but taken to the streets, this refreshed b-ball icon ushers in health and wealth in celebration of the Setsubun. Stomp out the demons and step into next season in thick leather layers and an exaggerated midsole. It's an inspired take on a classic for a fresh start in the new year.",
        price: 1450,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18b75919-65bb-4fe7-a1d4-807826339d4a/dunk-high-up-premium-womens-shoes-3DnDtC.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/77ad09a6-f2c8-443f-86d2-6d05621bdead/dunk-high-up-premium-womens-shoes-3DnDtC.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/74e1e40d-aa33-4668-89e6-938d1212756d/dunk-high-up-premium-womens-shoes-3DnDtC.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d4936737-440f-482f-9b14-93cbc59808ed/dunk-high-up-premium-womens-shoes-3DnDtC.png",
        brand: "dunk",
        showInSlider: false,
    },

    {
        name: "Nike Dunk High Premium",
        desc: "No wardrobe is complete without aged and weathered leather. Bridging vintage style with hoops DNA, the '80s b-ball icon returns with premium leather that's been perfectly softened for a timeless look. Natural variations in the upper (don???t worry, they???re still ready for everyday wear) make it look like you've been styling them for years, while giving your kicks an elevated feel. Oh, and the plush, high-top collar lets you take your game anywhere???in comfort.",
        price: 1400,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/084b4798-2c1c-491d-aca1-297a180a7e28/dunk-high-premium-womens-shoes-ZhkMvb.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d94df8e4-662d-4b3d-8e21-d1332125e352/dunk-high-premium-womens-shoes-ZhkMvb.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c372602e-0f27-42a8-8468-fb5785c57d8f/dunk-high-premium-womens-shoes-ZhkMvb.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4018ea27-b6a6-4545-8336-cdc438afdbad/dunk-high-premium-womens-shoes-ZhkMvb.png",
        brand: "dunk",
        showInSlider: false,
    },






    {
        name: "Nike SB Zoom Blazer Mid",
        desc: "The Blazer Mid is an iconic hoops shoe tailored to the needs of the modern skateboarder. Durable leather is paired with tacky rubber for flexible grip and comfort that lasts.",
        price: 900,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/adf25a9a-fe15-45a1-84f9-930d17eb157e/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/70107b48-5200-45e7-b5bd-267aec8126f7/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/84c6c35b-d360-4afc-b318-67451aa7a165/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fd078dce-bade-4a38-8585-36ea33a939b5/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png",
        brand: "blazer",
        showInSlider: false,
    },
    {
        name: "Nike Blazer Mid Pro Club",
        desc: "Being rooted doesn't mean you can't step forward. Keeping the classic simplicity and comfort you love, your favorite wardrobe staple gets remastered for the modern era. Extra rubber extends from the midsole to the Swoosh for a bold twist (and a little nod to Nike innovation from the '70s). The patchwork upper adds the perfect amount of retro attitude.",
        price: 1000,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9697cfeb-58d5-4e91-8b54-072400ac58d7/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/59c0ae4f-86d7-4ef6-8503-065c303970cc/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f69e97e4-9aa1-44be-bce6-a094143a523f/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d2808c5a-8fe1-4844-b9cc-b526a6ac0857/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
        brand: "blazer",
        showInSlider: false,
    },
    {
        name: "Nike SB Zoom Blazer Mid EK",
        desc: "The Koston Blazer takes a heritage design and tailors it to the needs of the modern skateboarder. This version adds a few surf-inspired details like a stitched upper reminiscent of fish scales and metallic blue details that pay homage to ocean life.The Koston Blazer takes a heritage design and tailors it to the needs of the modern skateboarder. This version adds a few surf-inspired details like a stitched upper reminiscent of fish scales and metallic blue details that pay homage to ocean life.",
        price: 950,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/96d4630a-bd15-491b-91a1-3e3f1090d0fb/sb-zoom-blazer-mid-ek-skate-shoes-dK7nX6.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7474fdfb-e139-413f-a26c-7f9c871534ae/sb-zoom-blazer-mid-ek-skate-shoes-dK7nX6.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/51e951d2-2be6-4948-809a-d566e38972b6/sb-zoom-blazer-mid-ek-skate-shoes-dK7nX6.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/454bbafe-50b6-4b68-a6e0-7037f30f3a69/sb-zoom-blazer-mid-ek-skate-shoes-dK7nX6.png",
        brand: "blazer",
        showInSlider: false,
    },
    {
        name: "Nike SB Zoom Blazer Mid ISO",
        desc: "Styled for the ???70s. Loved in the ???80s. Classic in the ???90s. Ready for the future. The Blazer Mid delivers a timeless design that???s easy to wear. The era-echoing upper breaks in beautifully and pairs with retro branding for a premium feel. Exposed foam on the tongue and a special midsole finish make it look like you???ve just pulled them from the history books. Go ahead, perfect your outfit.",
        price: 900,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/76629f7f-8ec9-49cb-a6d2-880bb759a729/sb-zoom-blazer-mid-iso-skate-shoes-W52tx0.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dce2a6fa-6106-4d18-9f84-ad2d31701c64/sb-zoom-blazer-mid-iso-skate-shoes-W52tx0.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/555c1608-caa9-4cb6-bab1-a3a811e11e1b/sb-zoom-blazer-mid-iso-skate-shoes-W52tx0.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3feb9742-d9a5-4a22-a2c1-d72cf17666c8/sb-zoom-blazer-mid-iso-skate-shoes-W52tx0.png",
        brand: "blazer",
        showInSlider: false,
    },
    {
        name: "Nike SB Nyjah Free 2",
        desc: "",
        price: 850,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9d284f7c-8830-49bf-a9f5-fa68f7cfb9ed/sb-nyjah-free-2-skate-shoes-s4Kt9q.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0029fd6f-cae0-47e8-82ca-a857eeac1106/sb-nyjah-free-2-skate-shoes-s4Kt9q.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/480b4ebc-b590-4ff6-905d-e646cf656def/sb-nyjah-free-2-skate-shoes-s4Kt9q.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b989235a-0572-4efb-8332-1f0c5fdc8e1f/sb-nyjah-free-2-skate-shoes-s4Kt9q.png",
        brand: "blazer",
        showInSlider: false,
    },
    {
        name: "Nike SB Zoom Blazer Low Pro GT",
        desc: "",
        price: 860,
        img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/991d9920-0dc6-41cb-9bbc-dcfe22ec58d2/sb-zoom-blazer-low-pro-gt-skate-shoes-lzbVB5.png",
        imgPairSide: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/930cc6b0-bf9c-40a3-9b2e-2eed86745bdd/sb-zoom-blazer-low-pro-gt-skate-shoes-lzbVB5.png",
        imgSole: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/10af6c9a-23ce-49db-9af7-73dd81eae5ae/sb-zoom-blazer-low-pro-gt-skate-shoes-lzbVB5.png",
        imgPairAbove: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/25e1db76-1800-4d0f-93c3-3c51767b9d15/sb-zoom-blazer-low-pro-gt-skate-shoes-lzbVB5.png",
        brand: "blazer",
        showInSlider: false,
    },

]





function addID (array) {
    array.map(el => {
        const id = array.indexOf(el)
        el.id = id
    })
}
addID(products)










export default products