/* =========================================
   1. DATA & CONFIGURATION
   ========================================= */

// --- CITIES DATABASE ---
const mapData = [
    // --- 1. GREATER CAIRO & RELIGIOUS COMPLEX ---
    {
        id: "cairo", type: "history", icon: "fa-gopuram",
        coords: { x: 57.6, y: 22.9 },
        content: {
            ar: { title: "القاهرة الكبرى", desc: "العاصمة، مجمع الأديان وعجائب الدنيا." },
            en: { title: "Greater Cairo", desc: "The Capital, Religious Complex & Wonders." }
        },
        sites: [
            { 
                img: "/Resources/ui/pyramids.jpg", 
                ar: { name: "أهرامات الجيزة", desc: "الأعجوبة الوحيدة الباقية من العالم القديم، ورمز الخلود المصري." }, 
                en: { name: "Giza Pyramids", desc: "The last surviving wonder of the ancient world and symbol of Egyptian eternity." },
                details: {
                    date: "2580 - 2560 ق.م (الأسرة الرابعة)",
                    gallery: [
                        "Resources/Details/Cairo/Pyramids/pyramids1.jpg", 
                        "Resources/Details/Cairo/Pyramids/pyramids2.jpg", 
                        "Resources/Details/Cairo/Pyramids/pyramids3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>عظمة البناء والتاريخ</h3>
                            <p>أهرامات الجيزة ليست مجرد مقابر، بل هي أعظم مشروع هندسي في تاريخ البشرية. تم بناء الهرم الأكبر (خوفو) ليبلغ ارتفاعه الأصلي 146 متراً، وظل أعلى مبنى في العالم لأكثر من 3800 عام. استغرق البناء حوالي 20 عاماً باستخدام أكثر من 2.3 مليون كتلة حجرية، تزن بعضها في غرف الملك إلى 80 طناً وتم جلبها من أسوان بنظام هندسي معقد.</p>
                            
                            <h3>أسرار هندسية وفلكية</h3>
                            <ul>
                                <li><strong>المحاذاة الفلكية:</strong> الأهرامات الثلاثة (خوفو، خفرع، منكاورع) تصطف بشكل مذهل مع نجوم حزام الجبار (أوريون).</li>
                                <li><strong>الدقة الجغرافية:</strong> أضلاع الهرم الأكبر تتجه نحو الاتجاهات الأصلية الأربعة (الشمال، الجنوب، الشرق، الغرب) بنسبة خطأ لا تتعدى أجزاء من الدرجة.</li>
                                <li><strong>التكييف الطبيعي:</strong> رغم حرارة الصحراء بالخارج، تظل درجة الحرارة داخل غرفة الملك ثابتة عند 20 درجة مئوية طوال العام.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل وقت لزيارة الأهرامات هو في الصباح الباكر لتجنب الزحام وحرارة الشمس، أو في وقت الغروب للاستمتاع بمنظر بانورامي ساحر. لا تفوت عرض الصوت والضوء ليلاً لسماع قصة أبو الهول.</p>
                        `,
                        en: `
                            <h3>Magnificence of Construction</h3>
                            <p>The Giza Pyramids are not just tombs; they are the greatest engineering project in human history. The Great Pyramid (Khufu) was built to an original height of 146 meters and remained the tallest man-made structure in the world for over 3,800 years. It took about 20 years to build using over 2.3 million stone blocks, with some granite stones in the King's Chamber weighing up to 80 tons, transported all the way from Aswan.</p>
                            
                            <h3>Engineering & Astronomical Secrets</h3>
                            <ul>
                                <li><strong>Astronomical Alignment:</strong> The three pyramids (Khufu, Khafre, Menkaure) perfectly align with the stars of Orion's Belt.</li>
                                <li><strong>Geographical Precision:</strong> The sides of the Great Pyramid face the four cardinal points (North, South, East, West) with an incredibly tiny margin of error.</li>
                                <li><strong>Natural AC:</strong> Despite the scorching desert heat outside, the temperature inside the King's Chamber remains a constant 20°C (68°F) year-round.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The best time to visit is early in the morning to avoid the crowds and heat, or at sunset for a magical panoramic view. Don't miss the Sound and Light Show at night to hear the Sphinx tell its story.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/sphinx.jpg", ar: { name: "أبو الهول", desc: "حارس هضبة الجيزة الأسطوري، وأقدم وأضخم منحوتة صخرية في العالم." }, 
                en: { name: "The Sphinx", desc: "The legendary guardian of the Giza Plateau, and the oldest monolithic statue in the world." },
                details: {
                    date: "2558 - 2532 ق.م (عهد خفرع)",
                    gallery: [
                        "resources/details/cairo/sphinx/sphinx1.jpg", 
                        "resources/details/cairo/sphinx/sphinx2.jpg", 
                        "resources/details/cairo/sphinx/sphinx3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>رمز القوة والحكمة</h3>
                            <p>يجمع تمثال أبو الهول بين جسد أسد متأهب (رمز القوة المفرطة) ورأس إنسان يرتدي غطاء الرأس الملكي (يُعتقد أنه الملك خفرع، رمز الحكمة). المعجزة الحقيقية هي أن هذا العملاق لم يُبنى من حجارة متراصة، بل نُحت بالكامل من صخرة كلسية ضخمة واحدة كانت موجودة في نفس مكانه.</p>
                            
                            <h3>أبعاد أسطورية</h3>
                            <p>يبلغ طول أبو الهول حوالي 73 متراً، وارتفاعه 20 متراً من القاعدة وحتى قمة الرأس. يعتبر أقدم المنحوتات الضخمة المعروفة وأكثرها شهرة في العالم.</p>
                            
                            <h3>أسرار وحكايات</h3>
                            <ul>
                                <li><strong>لوحة الحلم:</strong> توجد بين مخلبيه الأماميين لوحة جرانيتية وضعها الملك "تحتمس الرابع"، تروي قصة صعوده للعرش بعد أن وعده أبو الهول بذلك في المنام مقابل إزالة الرمال التي كانت تغطي جسده.</li>
                                <li><strong>لغز الأنف المفقود:</strong> عكس الأسطورة الشائعة بأن مدافع حملة نابليون هي من دمرت أنفه، أثبتت الرسوم التاريخية للرحالة أن الأنف كان مفقوداً قبل وصول الفرنسيين بقرون طويلة.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل مكان لالتقاط الصور هو منصة المشاهدة الجانبية للحصول على الصورة الكلاسيكية الممتعة (تقبيل أبو الهول). استمع لقصته بصوته المهيب في عرض الصوت والضوء ليلاً.</p>
                        `,
                        en: `
                            <h3>Symbol of Power and Wisdom</h3>
                            <p>The Sphinx combines the body of a resting lion (symbolizing immense power) with the head of a human wearing a royal headdress (believed to be Pharaoh Khafre, symbolizing wisdom). The true miracle is that this giant wasn't built from stacked blocks, but carved entirely from a single massive limestone bedrock.</p>
                            
                            <h3>Mythical Dimensions</h3>
                            <p>Measuring approximately 73 meters (240 ft) long and 20 meters (66 ft) high, it is the oldest known monumental sculpture in the world.</p>
                            
                            <h3>Mysteries and Tales</h3>
                            <ul>
                                <li><strong>The Dream Stele:</strong> Located between its front paws is a granite stele erected by King Thutmose IV. It tells the story of how the Sphinx promised him the throne in a dream if he cleared the sand burying its body.</li>
                                <li><strong>The Missing Nose Mystery:</strong> Contrary to the popular myth that Napoleon's troops shot off the nose with a cannon, historical sketches by travelers prove the nose was missing centuries before the French arrived.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The best spot for photography is the side viewing platform to get the classic optical illusion photo (Kissing the Sphinx). Don't miss the Sound and Light show at night, where the Sphinx acts as the narrator of history.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/gem.jpg", ar: { name: "المتحف المصري الكبير", desc: "أكبر متحف أثري في العالم مخصص لحضارة واحدة، وأيقونة مصر الحديثة للقرن الـ 21." }, 
                en: { name: "Grand Egyptian Museum", desc: "The largest archaeological museum globally dedicated to a single civilization, and a 21st-century icon." },
                details: {
                    date: "القرن الـ 21 (مرحلة الافتتاح)",
                    gallery: [
                        "resources/details/cairo/gem/gem1.jpg", 
                        "resources/details/cairo/gem/gem2.jpg", 
                        "resources/details/cairo/gem/gem3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>تحفة معمارية حديثة</h3>
                            <p>يقع المتحف على بعد كيلومترين فقط من أهرامات الجيزة. تصميمه المعماري فريد جداً، حيث تتخذ واجهته شكل مثلثات ضخمة تعكس أشعة الشمس وتتناغم مع الأهرامات الثلاثة في محاذاة بصرية مبهرة تربط بين الماضي العريق والمستقبل.</p>
                            
                            <h3>كنوز الملك الذهبي</h3>
                            <p>لأول مرة في التاريخ منذ اكتشاف مقبرته عام 1922، سيتم عرض مجموعة الملك "توت عنخ آمون" بالكامل، والتي تضم أكثر من 5000 قطعة أثرية، في قاعات ضخمة مخصصة له فقط، بدءاً من قناعه الذهبي الخالص وحتى عجلاته الحربية وأسرته.</p>
                            
                            <h3>أرقام ومعالم قياسية</h3>
                            <ul>
                                <li><strong>تمثال رمسيس الثاني:</strong> أول ما يستقبلك في البهو العظيم هو تمثال الملك رمسيس الثاني الضخم الذي يزن أكثر من 80 طناً، والذي تم نقله في موكب مهيب ليستقر في موقعه قبل بناء سقف المتحف.</li>
                                <li><strong>المسلة المعلقة:</strong> يضم المتحف أول مسلة معلقة في العالم بساحة الدخول الرئيسية، مما يتيح للزوار رؤية الخرطوش الملكي المحفور أسفل قاعدة المسلة لأول مرة.</li>
                                <li><strong>الدرج العظيم:</strong> درج ضخم يعرض تماثيل الملوك والآلهة بترتيب تصاعدي ينتهي بإطلالة بانورامية ساحرة على الأهرامات.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>هذا ليس مجرد متحف، بل مجمع ثقافي متكامل. خصص يوماً كاملاً لزيارته لتستمتع بالحدائق الشاسعة، المنطقة التجارية، والمطاعم المفتوحة. ارتدِ حذاءً مريحاً جداً لأن مساحة المشي هائلة!</p>
                        `,
                        en: `
                            <h3>A Modern Architectural Masterpiece</h3>
                            <p>Located just two kilometers from the Giza Pyramids, the GEM's architecture is truly unique. Its facade features giant translucent triangles that reflect the sun, creating a stunning visual alignment with the three pyramids, seamlessly connecting the ancient past with the future.</p>
                            
                            <h3>Treasures of the Golden King</h3>
                            <p>For the first time in history since the discovery of his tomb in 1922, the complete collection of King Tutankhamun—over 5,000 artifacts—will be displayed together in dedicated colossal halls, featuring everything from his iconic solid gold mask to his chariots and beds.</p>
                            
                            <h3>Records & Highlights</h3>
                            <ul>
                                <li><strong>Colossus of Ramses II:</strong> Upon entering the Grand Atrium, you are greeted by the colossal 80-ton statue of King Ramses II, which was moved in a majestic procession to its final location before the museum's roof was even built.</li>
                                <li><strong>The Hanging Obelisk:</strong> The entrance plaza features the world's first hanging obelisk, allowing visitors a unique perspective to see the royal cartouche carved on the bottom of its base for the first time.</li>
                                <li><strong>The Grand Staircase:</strong> A massive staircase displaying statues of kings and gods in ascending order, culminating in a breathtaking panoramic view of the Pyramids.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>This is not just a museum; it's a massive cultural complex. Dedicate a full day to your visit to enjoy the expansive gardens, commercial area, and open-air restaurants. Wear extremely comfortable shoes because the walking distances are vast!</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/hangingchurch.jpg", ar: { name: "الكنيسة المعلقة", desc: "أقدم كنائس مصر وأيقونة مجمع الأديان، بُنيت معلقة فوق أنقاض حصن روماني." }, 
                en: { name: "The Hanging Church", desc: "Egypt's oldest church and the icon of the Religious Complex, built suspended over a Roman fortress." },
                details: {
                    date: "القرن الثالث الميلادي (العصر الروماني / القبطي)",
                    gallery: [
                        "resources/details/cairo/hangingchurch/hanging1.jpg", 
                        "resources/details/cairo/hangingchurch/hanging2.jpg", 
                        "resources/details/cairo/hangingchurch/hanging3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>سر التسمية والموقع الفريد</h3>
                            <p>تُعرف رسمياً باسم كنيسة السيدة العذراء مريم، ولكن سُميت بـ "المعلقة" لأنها بُنيت بلا أساسات في الأرض! بدلاً من ذلك، تم رفعها لترتكز على برجين من الأبراج الجنوبية لـ "حصن بابليون" الروماني القديم، لتبدو وكأنها معلقة في الهواء فوق ممر الحصن.</p>
                            
                            <h3>أيقونة العمارة والفن القبطي</h3>
                            <p>عند دخولك الكنيسة، سترفع رأسك لتشاهد السقف الخشبي المذهل المصمم على شكل "سفينة نوح"، كرمز للنجاة والخلاص. الكنيسة تعتبر متحفاً للفن القبطي، حيث تضم أكثر من 110 أيقونة دينية نادرة، أقدمها يعود للقرن الثامن الميلادي، وتُعرف باسم "الموناليزا القبطية".</p>
                            
                            <h3>معالم بارزة بالداخل</h3>
                            <ul>
                                <li><strong>المنبر الرخامي (الأمبل):</strong> تحفة فنية يرتكز على 13 عموداً رخامياً تمثل السيد المسيح والتلاميذ الاثني عشر. ستلاحظ أن أحد الأعمدة لونه أسود (يرمز لخيانة يهوذا) وآخر رمادي (يرمز لشك توما).</li>
                                <li><strong>الأرضية الزجاجية:</strong> في بعض أجزاء الكنيسة، تم وضع ألواح زجاجية في الأرضية لتتمكن من رؤية عمق الحصن الروماني والأبراج التي ترتكز عليها الكنيسة من الأسفل.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>زيارة الكنيسة المعلقة هي مجرد بداية. لا تفوت استكشاف "مجمع الأديان" بالكامل سيراً على الأقدام، حيث يمكنك زيارة جامع عمرو بن العاص (أول مسجد في أفريقيا)، ومعبد بن عزرا اليهودي، وكنيسة أبي سرجة (المغارة التي احتمت بها العائلة المقدسة)، كلها في نفس المكان المجاور!</p>
                        `,
                        en: `
                            <h3>The Secret of the Name & Unique Location</h3>
                            <p>Officially named Saint Virgin Mary's Coptic Orthodox Church, it is famously known as the "Hanging Church" because it was built without traditional foundations. Instead, its nave is suspended over a passage, resting on two of the southern gate towers of the ancient Roman Fortress of Babylon.</p>
                            
                            <h3>Icon of Coptic Architecture & Art</h3>
                            <p>Upon entering, you will notice the breathtaking timber roof, designed to resemble the interior of Noah's Ark as a symbol of salvation. The church is a living museum of Coptic art, housing over 110 rare religious icons, the oldest dating back to the 8th century, often referred to as the "Coptic Mona Lisa."</p>
                            
                            <h3>Highlights Inside</h3>
                            <ul>
                                <li><strong>The Marble Pulpit (Ambon):</strong> A masterpiece resting on 13 marble pillars representing Jesus Christ and the 12 Apostles. Interestingly, one pillar is black (symbolizing Judas's betrayal) and another is grey (symbolizing Thomas's doubt).</li>
                                <li><strong>The Glass Floor:</strong> In certain sections of the church, glass panels are set into the floor, allowing you to look down into the depths of the Roman fortress to see exactly how the church is suspended.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Visiting the Hanging Church is just the beginning. Dedicate time to walk through the entire "Religious Complex" (Coptic Cairo). Within a few minutes' walk, you can visit the Mosque of Amr ibn al-Aas (the oldest in Africa), the Ben Ezra Synagogue, and the Abu Serga Church (built over the cave where the Holy Family hid)!</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/abuserga.jpg", ar: { name: "كنيسة أبي سرجة", desc: "أقدم كنائس مصر القديمة، بُنيت بالكامل فوق المغارة التي احتمت بها العائلة المقدسة." }, 
                en: { name: "Abu Serga Church", desc: "The oldest church in Coptic Cairo, built entirely over the crypt where the Holy Family took refuge." },
                details: {
                    date: "القرن الرابع الميلادي",
                    gallery: [
                        "resources/details/cairo/abuserga/abuserga1.jpg", 
                        "resources/details/cairo/abuserga/abuserga2.jpg", 
                        "resources/details/cairo/abuserga/abuserga3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>مغارة العائلة المقدسة</h3>
                            <p>تعتبر كنيسة أبي سرجة من أهم الكنائس في مصر والعالم، والسبب الرئيسي هو بناء الكنيسة بالكامل فوق المغارة (القبو) التي احتمت وعاشت فيها العائلة المقدسة (السيدة العذراء، والسيد المسيح طفلاً، ويوسف النجار) لمدة ثلاثة أشهر أثناء رحلة هروبهم إلى مصر هرباً من بطش الملك هيرودس.</p>
                            
                            <h3>عمارة تاريخية ورمزية مذهلة</h3>
                            <p>صُممت الكنيسة على الطراز البازيليكي المعتاد في العمارة القبطية المبكرة. صحن الكنيسة الداخلي يرتكز على 12 عموداً أثرياً ضخماً تم جلبها من معابد قديمة، وهي ترمز إلى تلاميذ السيد المسيح الاثني عشر. ومن المثير للاهتمام أن جميع الأعمدة تيجانها مزخرفة ومصنوعة من الرخام أو الجرانيت، عدا عمود واحد فقط مصنوع من الجرانيت الأحمر ولا يحمل تاجاً، ويُعتقد أنه يرمز إلى "يهوذا الإسخريوطي" التلميذ الخائن.</p>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>التجربة الأهم هنا هي النزول عبر الدرج الحجري الضيق إلى "المغارة المقدسة" أسفل مذبح الكنيسة. الأجواء هناك روحانية جداً وهادئة؛ يمكنك رؤية البئر الحجري القديم الذي شربت منه العائلة المقدسة، والمكان الدقيق الذي كان ينام فيه السيد المسيح طفلاً. احرص على التحدث بصوت خافت جداً احتراماً لقدسية المكان.</p>
                        `,
                        en: `
                            <h3>The Cave of the Holy Family</h3>
                            <p>Abu Serga is one of the most important churches in Egypt and the world. Its immense significance comes from being built directly over the sacred crypt (cave) where the Holy Family (Virgin Mary, Baby Jesus, and Joseph) lived for three months during their flight into Egypt to escape King Herod's persecution.</p>
                            
                            <h3>Historical Architecture & Stunning Symbolism</h3>
                            <p>The church is built in the traditional basilican style common in early Coptic architecture. The main nave rests on 12 massive antique columns repurposed from older temples, representing the 12 apostles of Jesus. Interestingly, all columns feature carved capitals and are made of white marble or granite, except for one red granite column that lacks a capital entirely—believed to symbolize Judas Iscariot, the betrayer.</p>
                            
                            <h3>Visit Tip</h3>
                            <p>The most profound experience here is descending the narrow stone stairs into the "Holy Crypt" located beneath the main altar. The atmosphere is deeply spiritual and peaceful. You can see the ancient stone well the Holy Family drank from and the exact spot where baby Jesus slept. Make sure to speak in whispers to respect the sanctity of the space.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/cavechurch.jpg", ar: { name: "دير القديس سمعان", desc: "كنيسة الكهف المحفورة في قلب جبل المقطم، وأكبر كنيسة في الشرق الأوسط." }, 
                en: { name: "Cave Church", desc: "St. Simon Monastery, carved into the Mokattam mountain, the largest church in the Middle East." },
                details: {
                    date: "1974م ",
                    gallery: [
                        "resources/details/cairo/cavechurch/cavechurch1.jpg", 
                        "resources/details/cairo/cavechurch/cavechurch2.jpg", 
                        "resources/details/cairo/cavechurch/cavechurch3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>أكبر كنيسة محفورة في الشرق الأوسط</h3>
                            <p>يُعرف دير القديس سمعان الخراز بـ "كنيسة الكهف"، وهو تحفة معمارية حديثة نسبياً مقارنة بآثار القاهرة، حيث بدأ حفرها وبناؤها عام 1974. تقع الكنيسة في حضن جبل المقطم، وتتسع المدرجات الصخرية الهائلة لأكثر من 20,000 مصلٍ، مما يجعلها الكنيسة الأكبر في الشرق الأوسط.</p>
                            
                            <h3>عمارة صخرية مذهلة</h3>
                            <ul>
                                <li><strong>المنحوتات الجبلية:</strong> جدران الجبل بالكامل مزينة بنقوش ومنحوتات يدوية بارزة ضخمة جداً تروي قصصاً من الكتاب المقدس، تم نحتها ببراعة على يد فنان بولندي أحب المكان وكرس حياته لتزيين الجدران الصخرية.</li>
                                <li><strong>المسرح المفتوح:</strong> التصميم يشبه المدرجات الرومانية المفتوحة، ولكن داخل تجويف جبلي طبيعي، مما يمنح المكان صدى صوتياً رائعاً (Acoustics) يوزع الصوت بوضوح تام في كل الأرجاء.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>للوصول إلى الدير، سيتوجب عليك المرور عبر "حي الزبالين" (حي جامعي وإعادة تدوير القمامة). قد يبدو الطريق مزدحماً وغير مألوف، لكن بمجرد اجتيازك له ودخولك بوابات الدير، ستنتقل فجأة إلى واحة مذهلة من الهدوء والجمال الصخري. يفضل زيارتها نهاراً لالتقاط أروع الصور مع إضاءة الشمس التي تضرب صخور الجبل.</p>
                        `,
                        en: `
                            <h3>The Largest Cave Church in the Middle East</h3>
                            <p>Known as the Cave Church, the Monastery of St. Simon the Tanner is a relatively modern architectural marvel, with excavation and construction starting in 1974. Nestled within the Mokattam mountain, its massive rocky amphitheater can seat over 20,000 worshippers, making it the largest church in the Middle East.</p>
                            
                            <h3>Stunning Rock Architecture</h3>
                            <ul>
                                <li><strong>Mountain Sculptures:</strong> The mountain walls are entirely decorated with colossal hand-carved reliefs depicting biblical stories. These were masterfully sculpted by a Polish artist who fell in love with the site and dedicated his life to beautifying it.</li>
                                <li><strong>The Open Amphitheater:</strong> The design resembles a Roman amphitheater built into a natural mountain cavity, providing the space with incredible natural acoustics that carry sound perfectly across the vast space.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>To reach the monastery, you must drive through "Manshiyat Naser," famously known as the Zabbaleen (Garbage Collectors) city. The route is bustling and highly unusual due to the massive recycling operations, but once you pass the monastery gates, you are instantly transported to a breathtaking oasis of peace and rocky beauty. Daytime visits are highly recommended to see the sunlight illuminating the carved mountain walls.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/citadel.jpg", ar: { name: "قلعة صلاح الدين", desc: "حصن القاهرة المنيع ومقر الحكم لأكثر من 700 عام، وتضم تاج العمارة العثمانية مسجد محمد علي." }, 
                en: { name: "Saladin Citadel", desc: "Cairo's impenetrable fortress and seat of government for over 700 years, home to the Muhammad Ali Mosque." },
                details: {
                    date: "1176 - 1183 م (العصر الأيوبي)",
                    gallery: [
                        "resources/details/cairo/citadel/citadel1.jpg", 
                        "resources/details/cairo/citadel/citadel2.jpg", 
                        "resources/details/cairo/citadel/citadel3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>حصن مصر العظيم</h3>
                            <p>شرع السلطان "صلاح الدين الأيوبي" في بناء هذه القلعة المنيعة فوق جبل المقطم لتكون نقطة دفاع قوية تحمي القاهرة من هجمات الصليبيين. وبفضل موقعها الاستراتيجي العبقري، أصبحت القلعة مقراً لحكم مصر لأكثر من 700 عام (من العصر الأيوبي وحتى عهد الخديوي إسماعيل).</p>
                            
                            <h3>معالم بارزة داخل الأسوار</h3>
                            <ul>
                                <li><strong>مسجد محمد علي (جامع المرمر):</strong> التحفة المعمارية التي تتوج القلعة وتُرى من أي مكان في القاهرة، صُمم على الطراز العثماني ومكسو بحجر الألباستر (المرمر) الناصع، ويضم برج الساعة الذي أهداه ملك فرنسا لمصر.</li>
                                <li><strong>بئر يوسف:</strong> معجزة هندسية فريدة، وهو بئر حلزوني عميق جداً نُحت في الصخر القاسي لتوفير المياه لجنود القلعة وقت الحصار.</li>
                                <li><strong>مسجد الناصر محمد بن قلاوون:</strong> الجوهرة المملوكية التي تتميز بمآذنها المكسوة بالقيشاني الأخضر (السيراميك).</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل وقت لزيارة القلعة هو قبل الغروب بقليل. قف في الساحة الخارجية لمسجد محمد علي (بانوراما القلعة) لتشاهد أروع إطلالة للقاهرة الإسلامية، حيث تعانق مآذن السلطان حسن والرفاعي سماء العاصمة، ويمكنك حتى رؤية الأهرامات في الأفق في الأيام الصافية.</p>
                        `,
                        en: `
                            <h3>Egypt's Great Fortress</h3>
                            <p>Sultan Saladin ordered the construction of this massive fortress on the Mokattam Hills to defend Cairo against Crusader attacks. Thanks to its brilliant strategic location, the Citadel served as the seat of the Egyptian government for over 700 years (from the Ayyubid dynasty until the reign of Khedive Ismail).</p>
                            
                            <h3>Highlights Within the Walls</h3>
                            <ul>
                                <li><strong>Muhammad Ali Mosque (Alabaster Mosque):</strong> The architectural crown jewel of the Citadel, visible from almost anywhere in Cairo. Built in the Ottoman style and coated in gleaming alabaster, it features a beautiful clock tower gifted by the King of France.</li>
                                <li><strong>Bir Yusuf (Joseph's Well):</strong> An engineering marvel—a massive, deep spiral well carved directly into the solid rock to provide water for soldiers during sieges.</li>
                                <li><strong>Mosque of Al-Nasir Muhammad:</strong> A stunning Mamluk gem known for its unique minarets decorated with green faience (ceramic tiles).</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The best time to visit is in the late afternoon. Stand at the viewing terrace outside the Muhammad Ali Mosque to witness the most spectacular panoramic view of Islamic Cairo. You'll see the towering minarets of Sultan Hassan and Al-Rifa'i mosques, and on a clear day, even the Pyramids on the horizon.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/moez.jpg", ar: { name: "شارع المعز", desc: "قلب القاهرة الفاطمية النابض، وأكبر متحف مفتوح للآثار الإسلامية في العالم." }, 
                en: { name: "Moez Street", desc: "The beating heart of Fatimid Cairo, and the world's largest open-air museum of Islamic monuments." },
                details: {
                    date: "969 م ",
                    gallery: [
                        "resources/details/cairo/moez/moez1.jpg", 
                        "resources/details/cairo/moez/moez2.jpg", 
                        "resources/details/cairo/moez/moez3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>أكبر متحف إسلامي مفتوح</h3>
                            <p>يمتد شارع المعز لدين الله الفاطمي بطول يزيد عن كيلومتر. أسسه الفاطميون ليكون الشارع الرئيسي للعاصمة، واليوم يضم أكبر تركيز للآثار الإسلامية المحتفظة بتفاصيلها في العالم، ليمثل رحلة معمارية حية عبر العصور الفاطمية، والأيوبية، والمملوكية، والعثمانية.</p>
                            
                            <h3>جواهر معمارية لا تفوتها</h3>
                            <ul>
                                <li><strong>مجموعة قلاوون:</strong> تحفة معمارية مذهلة تضم مسجداً ومدرسة ومستشفى (بيمارستان)، وتتميز بواجهتها الضخمة والنقوش الدقيقة التي تشبه العمارة القوطية الأوروبية.</li>
                                <li><strong>جامع الأقمر:</strong> أول مسجد في القاهرة تُبنى واجهته بشكل مزخرف متوافق مع خط الشارع بدلاً من اتجاه القبلة، وهو جوهرة حقيقية من الحجر المنحوت.</li>
                                <li><strong>جامع الحاكم بأمر الله:</strong> يقع في نهاية الشارع بجوار بوابات القاهرة القديمة (باب الفتوح)، ويتميز بمساحته الشاسعة ومآذنه الفريدة ذات القاعدة المربعة.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل وقت لزيارة شارع المعز هو في المساء (بعد غروب الشمس)، حيث تُضاء المآذن والقباب الأثرية بإضاءة ذهبية ساحرة تخطف الأنفاس. استمتع بالمشي الحر (الشارع يُغلق أمام السيارات ليلاً)، ولا تنسَ الجلوس على أحد المقاهي التاريخية لتجربة الشاي بالنعناع، ثم العبور إلى منطقة "خان الخليلي" المجاورة لاقتناء الهدايا التذكارية.</p>
                        `,
                        en: `
                            <h3>The World's Largest Open-Air Museum</h3>
                            <p>Stretching over a kilometer, Al-Moez li-Din Allah Street is the beating heart of historic Cairo. Founded by the Fatimids as the main thoroughfare of their new capital, it now holds the greatest concentration of intact Islamic monuments in the world, offering a living architectural journey through the Fatimid, Ayyubid, Mamluk, and Ottoman eras.</p>
                            
                            <h3>Architectural Gems Not to Miss</h3>
                            <ul>
                                <li><strong>Qalawun Complex:</strong> A breathtaking architectural masterpiece featuring a mosque, madrasa, and a hospital (Bimaristan), known for its massive facade and intricate carvings that rival European Gothic architecture.</li>
                                <li><strong>Al-Aqmar Mosque:</strong> The first mosque in Cairo to have a decorated facade aligned perfectly with the street rather than the Qibla (direction of prayer), making it a masterpiece of carved stone.</li>
                                <li><strong>Al-Hakim Mosque:</strong> Located at the end of the street next to the ancient gates of Cairo (Bab al-Futuh), distinguished by its vast courtyard and unique square-based minarets.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The best time to visit Al-Moez Street is in the evening (after sunset) when the ancient minarets and domes are beautifully illuminated with a magical golden light. Enjoy a leisurely walk (the street is pedestrian-only at night), sit at a historic café for some traditional mint tea, and cross over to the adjacent Khan el-Khalili bazaar for souvenir shopping.</p>
                        `
                    }
                }
            }
        ]
    },
    // --- 2. THE DELTA & ROSETTA ---
    {
        id: "alexandria", type: "sea", icon: "fa-water",
        coords: { x: 49.2, y: 15.2 },
        content: {
            ar: { title: "الإسكندرية", desc: "عروس البحر المتوسط." },
            en: { title: "Alexandria", desc: "Pearl of the Mediterranean." }
        },
        sites: [
            { img: "Resources/UI/library.jpg", ar: { name: "مكتبة الإسكندرية", desc: "منارة الثقافة والعلم، وإحياء عصري لأعظم وأشهر مكتبة في العالم القديم." }, 
                en: { name: "Bibliotheca Alexandrina", desc: "The beacon of culture and science, a modern revival of the greatest library of the ancient world." },
                details: {
                    date: "2002 م (الافتتاح الحديث)",
                    gallery: [
                        "resources/details/alexandria/library/library1.jpg", 
                        "resources/details/alexandria/library/library2.jpg", 
                        "resources/details/alexandria/library/library3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>إحياء أسطورة العالم القديم</h3>
                            <p>مكتبة الإسكندرية الجديدة ليست مجرد مبنى للقراءة، بل هي إحياء لمجد "مكتبة الإسكندرية القديمة" التي تأسست في القرن الثالث قبل الميلاد وكانت أكبر مجمع علمي في التاريخ القديم. تم افتتاح هذا الصرح المعماري الضخم في عام 2002 ليعود كمنارة للمعرفة وحوار الثقافات على شاطئ البحر المتوسط.</p>
                            
                            <h3>تصميم معماري يحمل رسالة</h3>
                            <ul>
                                <li><strong>قرص الشمس المشرق:</strong> صُمم المبنى الرئيسي للمكتبة على شكل أسطوانة مائلة تقطع الأرض لتبدو كقرص شمس يشرق من البحر المتوسط، في إشارة إلى استمرار شروق شمس المعرفة.</li>
                                <li><strong>جدار اللغات:</strong> واجهة المكتبة الخارجية المنحنية مبنية من حجر الجرانيت الأسواني ومحفور عليها أبجدية وحروف من أكثر من 120 لغة بشرية من كل عصور التاريخ.</li>
                                <li><strong>القاعة الكبرى:</strong> قاعة قراءة رئيسية مذهلة تتسع لآلاف القراء، وتتميز بسقفها الزجاجي المائل الذي يسمح بدخول ضوء الشمس غير المباشر لحماية الكتب والمخطوطات.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>المكتبة من الداخل عالم كامل يحتاج لعدة ساعات لاستكشافه. لا تكتفِ بقاعة القراءة فقط؛ تأكد من زيارة "متحف المخطوطات" لرؤية نصوص نادرة، و"متحف الآثار" الذي يضم قطعاً انتُشلت من قاع البحر الأبيض المتوسط، ولا تفوت عرض الفضاء المذهل داخل "القبة السماوية" (Planetarium) الملحقة بالمكتبة.</p>
                        `,
                        en: `
                            <h3>Reviving an Ancient Legend</h3>
                            <p>The new Bibliotheca Alexandrina is not just a building for reading; it is a monumental revival of the glory of the ancient Library of Alexandria, founded in the 3rd century BC as the greatest scientific institution of the ancient world. This massive modern complex was inaugurated in 2002 to reclaim its place as a beacon of knowledge and cultural dialogue on the shores of the Mediterranean.</p>
                            
                            <h3>Architecture with a Message</h3>
                            <ul>
                                <li><strong>The Rising Sun:</strong> The main building is designed as a tilted cylinder slicing through the ground, resembling a sun disk rising from the Mediterranean Sea, symbolizing the eternal rise of knowledge.</li>
                                <li><strong>The Wall of Languages:</strong> The curved exterior wall is made of Aswan granite and intricately carved with characters and alphabets from over 120 human languages throughout history.</li>
                                <li><strong>The Great Reading Room:</strong> A breathtaking, terraced reading space that can accommodate thousands of readers, featuring a tilted glass roof that allows indirect sunlight to illuminate the space while protecting the books and manuscripts.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The interior of the library is an entire world that requires several hours to fully explore. Don't just stop at the main reading room; make sure to visit the "Manuscript Museum" to see rare texts, the "Antiquities Museum" featuring artifacts recovered from the Mediterranean seabed, and do not miss a spectacular space show inside the adjacent spherical "Planetarium".</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/qaitbay.jpg", ar: { name: "قلعة قايتباي", desc: "حصن الإسكندرية المنيع الذي بُني على أنقاض فنار الإسكندرية (إحدى عجائب الدنيا القديمة)." }, 
                en: { name: "Qaitbay Citadel", desc: "Alexandria's impenetrable fortress built on the ruins of the ancient Lighthouse of Alexandria (one of the ancient wonders)." },
                details: {
                    date: "1477 م (العصر المملوكي)",
                    gallery: [
                        "resources/details/alexandria/qaitbay/qaitbay1.jpg", 
                        "resources/details/alexandria/qaitbay/qaitbay2.jpg", 
                        "resources/details/alexandria/qaitbay/qaitbay3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>حارسة البحر المتوسط</h3>
                            <p>بُنيت قلعة قايتباي بأمر من السلطان المملوكي "الأشرف أبو النصر قايتباي" في نفس الموقع الذي كان يوجد فيه "فنار الإسكندرية" العظيم (أحد عجائب الدنيا السبع القديمة) والذي دُمر إثر زلزال مدمر. استخدم السلطان بعض أحجار الفنار المتساقطة لبناء هذا الحصن المنيع لحماية السواحل المصرية من التهديدات البحرية المتزايدة في ذلك الوقت.</p>
                            
                            <h3>تصميم عسكري عبقري</h3>
                            <ul>
                                <li><strong>الأسوار المزدوجة:</strong> القلعة محصنة بسورين ضخمين، السور الداخلي يضم ثكنات الجند ومخازن السلاح، والسور الخارجي كان مزوداً بفتحات للمدافع لحماية السواحل بشكل مباشر.</li>
                                <li><strong>البرج الرئيسي (الطابية):</strong> مبنى مربع ضخم يتكون من ثلاثة طوابق، ويضم مسجداً يُعد من أقدم مساجد الإسكندرية، بالإضافة إلى سراديب وممرات حجرية دقيقة لتحركات الجنود أثناء الحصار.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>موقع القلعة في نهاية شبه جزيرة فاروس يجعلها نقطة مثالية لالتقاط أروع الصور مع أمواج البحر المتكسرة على صخورها. تجول في الممرات الحجرية الداخلية وصعد إلى السطح المفتوح للاستمتاع بمنظر بانورامي مذهل للبحر المتوسط وميناء الإسكندرية الشرقي بالكامل. ولا تفوت المشي على الممشى الخارجي المجاور للقلعة وقت الغروب.</p>
                        `,
                        en: `
                            <h3>Guardian of the Mediterranean</h3>
                            <p>The Qaitbay Citadel was built by the order of the Mamluk Sultan "Al-Ashraf Sayf al-Din Qa'it Bay" on the exact site of the ancient "Lighthouse of Alexandria" (one of the Seven Wonders of the Ancient World), which had been destroyed by a devastating earthquake. The Sultan utilized some of the fallen stones from the legendary lighthouse to construct this impenetrable fortress to protect Egypt's coastlines from rising naval threats.</p>
                            
                            <h3>Genius Military Design</h3>
                            <ul>
                                <li><strong>Double Walls:</strong> The citadel is heavily fortified with two massive walls. The inner wall housed the soldiers' barracks and armories, while the outer wall was equipped with embrasures for cannons to provide direct coastal defense.</li>
                                <li><strong>The Main Keep (The Tabia):</strong> A massive square building consisting of three floors. It houses a mosque, considered one of the oldest in Alexandria, along with intricate stone corridors and secret passages for troop movements during sieges.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The citadel's prime location at the tip of the Pharos peninsula makes it the perfect spot for taking stunning photos with the sea waves crashing against its rocks. Wander through the internal stone corridors and climb to the open roof for a magnificent panoramic view of the Mediterranean and the entire Eastern Harbour of Alexandria. Don't miss a stroll along the outer promenade right before sunset.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/montaza.jpg", ar: { name: "المنتزه", desc: "الحدائق الملكية الساحرة وقصور العائلة العلوية التي تعانق أمواج البحر المتوسط." }, 
                en: { name: "Montaza", desc: "The enchanting royal gardens and palaces of the Muhammad Ali dynasty, embracing the Mediterranean waves." },
                details: {
                    date: "1892 م (عهد الخديوي عباس حلمي الثاني)",
                    gallery: [
                        "resources/details/alexandria/montaza/montaza1.jpg", 
                        "resources/details/alexandria/montaza/montaza2.jpg", 
                        "resources/details/alexandria/montaza/montaza3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>جنة الخديوي على البحر</h3>
                            <p>بدأت قصة المنتزه عندما أعجب الخديوي "عباس حلمي الثاني" بهذه المنطقة المنعزلة ذات الخلجان الطبيعية الساحرة، فقرر بناء قصر ومصيف له ولعائلته. تمتد حدائق المنتزه اليوم على مساحة شاسعة تبلغ حوالي 370 فداناً، وتضم أشجاراً ونباتات نادرة بعضها تجاوز عمره المائة عام، وتطل مباشرة على خمسة شواطئ خلابة.</p>
                            
                            <h3>قصور تحكي التاريخ</h3>
                            <ul>
                                <li><strong>قصر الحرملك:</strong> الأيقونة المعمارية الأبرز في المنتزه، يتميز بتصميمه الذي يجمع بين الطراز الفلورنسي الإيطالي والزخارف الإسلامية، وبُرجِه الشهير الذي يزين سماء الإسكندرية. كان مخصصاً لإقامة العائلة الملكية.</li>
                                <li><strong>قصر السلاملك:</strong> بُني في الأصل ليكون استراحة للخديوي ومقراً لاستقبال ضيوفه من كبار الزوار، وتحول لاحقاً في العصر الحديث إلى فندق سياحي فاخر.</li>
                                <li><strong>كوبري المنتزه (الفنار):</strong> جسر أحمر كلاسيكي يربط بين حدائق المنتزه وجزيرة صغيرة يقع عليها فنار المنتزه، ويُعد من أشهر معالم التصوير في الإسكندرية.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>تعتبر حدائق المنتزه المكان الأمثل لقضاء يوم كامل من الاسترخاء والمشي وسط الطبيعة. أفضل وقت لالتقاط الصور هو وقت العصر الذهبي (Golden Hour) عند السير على كوبري المنتزه مع انعكاس أشعة الشمس على أمواج البحر وقصر الحرملك في الخلفية. يمكنك أيضاً استئجار دراجات هوائية للتجول في مساحات الحديقة الشاسعة بسهولة.</p>
                        `,
                        en: `
                            <h3>The Khedive's Paradise on the Sea</h3>
                            <p>The story of Montaza began when Khedive "Abbas Helmy II" fell in love with this secluded area and its charming natural coves, deciding to build a summer palace for himself and his family. Today, the Montaza Gardens span a massive 370 acres, featuring rare trees and plants—some over a century old—and overlooking five stunning beaches.</p>
                            
                            <h3>Palaces Telling History</h3>
                            <ul>
                                <li><strong>Al-Haramlek Palace:</strong> The most prominent architectural icon of Montaza. It features a unique design blending Italian Florentine style with Islamic motifs, and its famous tower crowns the Alexandrian skyline. It was the main residence for the royal family.</li>
                                <li><strong>Al-Salamlek Palace:</strong> Originally built as a lodge for the Khedive and a place to receive his VIP guests. In modern times, it was transformed into a luxury tourist hotel.</li>
                                <li><strong>Montaza Bridge & Lighthouse:</strong> A classic red bridge connecting the gardens to a small island that houses the Montaza lighthouse, making it one of the most famous photography spots in Alexandria.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Montaza Gardens are the perfect place to spend a full day relaxing and walking in nature. The best time for photography is during the golden hour, walking across the Montaza bridge with the sun reflecting off the waves and the Haramlek Palace in the background. You can also rent bicycles to easily explore the vast garden spaces.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "rashid", type: "history", icon: "fa-book-open",
        coords: { x: 38, y: 18 },
        content: {
            ar: { title: "رشيد", desc: "مدينة حجر رشيد والمنازل التراثية." },
            en: { title: "Rosetta (Rashid)", desc: "Rosetta Stone & Heritage Houses." }
        },
        sites: [
            { img: "Resources/UI/rashidmuseum.jpg", ar: { name: "متحف رشيد", desc: "تحفة العمارة العثمانية (منزل عرب كلي)، الشاهد على تاريخ رشيد واكتشاف حجرها الشهير." }, 
                en: { name: "Rosetta Museum", desc: "A masterpiece of Ottoman architecture (Arab Killy House), witnessing Rosetta's history and its famous stone." },
                details: {
                    date: "1740 م (النصف الأول من القرن الـ 18)",
                    gallery: [
                        "resources/details/rashid/rashidmuseum/rashidmuseum1.jpg", 
                        "resources/details/rashid/rashidmuseum/rashidmuseum2.jpg", 
                        "resources/details/rashid/rashidmuseum/rashidmuseum3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>منزل الحاكم العثماني</h3>
                            <p>يقع المتحف في واحد من أشهر وأكبر المنازل الأثرية بمدينة رشيد، وهو منزل "حسين عرب كلي" الذي كان محافظاً للمدينة في العصر العثماني. المبنى بحد ذاته تحفة معمارية إسلامية، حيث يتميز بواجهاته المبنية من الطوب "المنجور" (الطوب الأحمر والأسود بالتبادل) والمشربيات الخشبية الدقيقة التي تزين نوافذه.</p>
                            
                            <h3>حجر رشيد وبطولات المدينة</h3>
                            <ul>
                                <li><strong>اكتشاف حجر رشيد:</strong> يضم المتحف نسخة طبق الأصل من "حجر رشيد" الشهير (النسخة الأصلية في لندن)، والذي كان المفتاح العبقري لفك طلاسم اللغة المصرية القديمة ومعرفة تاريخ الفراعنة.</li>
                                <li><strong>حملة فريزر:</strong> يعرض المتحف أسلحة ووثائق ومقتنيات تحكي قصة صمود وبطولة أهالي رشيد في التصدي للحملة الإنجليزية (حملة فريزر) عام 1807 م وإلحاق الهزيمة بها.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>تجول بتمهل في طوابق المنزل الأربعة لتكتشف كيف كانت تُقسم البيوت قديماً (السلاملك لاستقبال الرجال، والحرملك لجلوس النساء). بعد الانتهاء من المتحف، خذ جولة سيراً على الأقدام في شوارع رشيد لمشاهدة باقي المنازل العثمانية الفريدة، ولا تفوت الذهاب لـ "مصب النيل" لرؤية النهر وهو يعانق البحر المتوسط.</p>
                        `,
                        en: `
                            <h3>House of the Ottoman Governor</h3>
                            <p>The museum is located in one of the most famous and largest heritage houses in Rosetta, the home of "Hussein Arab Killy", who was the city's governor during the Ottoman era. The building itself is a masterpiece of Islamic architecture, distinguished by its facades built with "Mangour" (alternating red and black) bricks and the delicate wooden Mashrabiyas adorning its windows.</p>
                            
                            <h3>The Rosetta Stone & City Heroism</h3>
                            <ul>
                                <li><strong>The Rosetta Stone Discovery:</strong> The museum houses an exact replica of the famous "Rosetta Stone" (the original is in London), which was the brilliant key to deciphering ancient Egyptian hieroglyphs and unlocking the history of the Pharaohs.</li>
                                <li><strong>The Fraser Expedition:</strong> The museum displays weapons, documents, and artifacts that tell the story of the resilience and heroism of Rosetta's people in defeating the British Fraser Expedition in 1807 AD.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Take your time exploring the house's four floors to discover how homes were divided in the past (the Salamlek for men and the Haramlek for women). After the museum, take a walking tour through the streets of Rosetta to see more of these unique Ottoman brick houses, and don't miss going to the "Nile Mouth" to see where the river embraces the Mediterranean Sea.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/nilemouth.jpg", ar: { name: "مصب النيل", desc: "النقطة الساحرة التي يعانق فيها أطول أنهار العالم أمواج البحر الأبيض المتوسط." }, 
                en: { name: "Nile Mouth", desc: "The magical point where the world's longest river embraces the waves of the Mediterranean Sea." },
                details: {
                    date: "ظاهرة طبيعية وتاريخية",
                    gallery: [
                        "resources/details/rashid/nilemouth/nilemouth1.jpg", 
                        "resources/details/rashid/nilemouth/nilemouth2.jpg", 
                        "resources/details/rashid/nilemouth/nilemouth3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>عناق النهر والبحر</h3>
                            <p>في هذه البقعة الساحرة من مدينة رشيد، يصل نهر النيل العظيم (فرع رشيد) إلى نهاية رحلته الطويلة التي قطعها عبر القارة الأفريقية ليصب مياهه العذبة في مياه البحر الأبيض المتوسط المالحة. مشهد التقاء اللونين وتلاطم الأمواج هو لوحة ربانية تخطف الأنفاس ومصدر إلهام دائم للزوار.</p>
                            
                            <h3>بوابة مصر الاستراتيجية</h3>
                            <p>لم يكن هذا المصب مجرد ظاهرة جغرافية، بل كان البوابة البحرية والجارية الرئيسية لمصر على مدار قرون طويلة. هنا رست أساطيل العالم، ونشطت التجارة، وبُنيت القلاع (مثل قلعة قايتباي برشيد أو طابية جوليان) لحماية مصر من الغزوات البحرية، وشهدت مياهه معارك بحرية حاسمة.</p>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل طريقة لاستكشاف المصب هي استئجار مركب شراعي (فلوكة) وقت الغروب. ستبحر وسط أسراب الطيور المهاجرة ومراكب الصيد الملونة ذات الطراز الرشيدي المميز، حتى تصل إلى "البوغاز" حيث يختلط النهر بالبحر. بعد الجولة، لا تنسَ تناول وجبة أسماك طازجة لا مثيل لها في أحد المطاعم المطلة على النيل مباشرة.</p>
                        `,
                        en: `
                            <h3>The Embrace of River and Sea</h3>
                            <p>At this magical spot in Rosetta, the mighty Nile River (Rosetta Branch) reaches the end of its epic journey across the African continent, pouring its fresh waters into the salty Mediterranean Sea. The sight of the two distinct waters meeting and the crashing waves is a breathtaking natural canvas that constantly inspires visitors.</p>
                            
                            <h3>Egypt's Strategic Gateway</h3>
                            <p>This estuary was not merely a geographical phenomenon; it served as Egypt's primary naval and commercial gateway for centuries. Global fleets docked here, trade flourished, and fortresses (like Fort Julien/Qaitbay of Rosetta) were built to protect Egypt from naval invasions, witnessing crucial historical sea battles.</p>
                            
                            <h3>Visit Tip</h3>
                            <p>The best way to experience the river mouth is by renting a traditional wooden sailboat (Felucca) around sunset. You will sail past flocks of migratory birds and vibrant, traditional Rosetta fishing boats until you reach the "Boughaz" (the exact meeting point of river and sea). Afterward, treat yourself to an unmatched fresh seafood meal at a riverside restaurant.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "mansoura", type: "nature", icon: "fa-notes-medical",
        coords: { x: 59.0, y: 18.0 },
        content: {
            ar: { title: "المنصورة", desc: "عروس الدلتا ودار ابن لقمان." },
            en: { title: "Mansoura", desc: "Bride of the Delta." }
        },
        sites: [
             { img: "Resources/UI/ibnloqman.jpg", ar: { name: "دار ابن لقمان", desc: "المقر الذي أُسر فيه لويس التاسع ملك فرنسا بعد هزيمته، ورمز الانتصار والصمود المصري." }, 
                en: { name: "Ibn Loqman House", desc: "The historic house where King Louis IX of France was imprisoned, symbolizing Egyptian victory." },
                details: {
                    date: "1250 م (عهد الأيوبيين)",
                    gallery: [
                        "resources/details/mansoura/ibnloqman/ibnloqman1.jpg", 
                        "resources/details/mansoura/ibnloqman/ibnloqman2.jpg", 
                        "resources/details/mansoura/ibnloqman/ibnloqman3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>مأزق ملك فرنسا</h3>
                            <p>تكتسب دار ابن لقمان شهرتها العالمية من حدث تاريخي فاصل، ففي عام 1250 م (أثناء الحملة الصليبية السابعة)، وبعد هزيمة جيوش الصليبيين في أزقة مدينة المنصورة بفضل بسالة الأهالي والجيش، تم أسر الملك "لويس التاسع" ملك فرنسا، واقتياده مقيداً ليوضع في هذا المنزل الذي كان يملكه قاضي المدينة "فخر الدين بن لقمان".</p>
                            
                            <h3>عمارة إسلامية أصيلة</h3>
                            <ul>
                                <li><strong>التصميم الداخلي:</strong> يتكون المنزل من طابقين على الطراز الإسلامي المميز، حيث خُصص الطابق الأرضي (السلاملك) لاستقبال الضيوف، بينما الطابق العلوي (الحرملك) مخصص لأهل البيت.</li>
                                <li><strong>غرفة الأسر:</strong> لا تزال الغرفة التي سُجن فيها الملك لويس محتفظة بتفاصيلها، وتتميز ببابها الخشبي القصير جداً، والذي قيل إنه صُمم خصيصاً ليجبر الملك المغرور على الانحناء في كل مرة يدخل أو يخرج منها.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>الدار اليوم تعمل كمتحف قومي لمدينة المنصورة. عند زيارتك، تأكد من مشاهدة القاعة التي تضم لوحات فنية ومجسمات رائعة (Dioramas) تجسد معركة المنصورة وأسر الملك لويس. كما يعرض المتحف ملابس وأسلحة من تلك الحقبة، لتشعر وكأنك عدت بالزمن إلى قلب المعركة.</p>
                        `,
                        en: `
                            <h3>The Captivity of a French King</h3>
                            <p>Ibn Loqman House gained its worldwide fame from a pivotal historical event. In 1250 AD, during the Seventh Crusade, the Crusader armies were defeated in the narrow streets of Mansoura thanks to the bravery of the locals and the Egyptian army. The French King, Louis IX, was captured and brought in chains to be imprisoned in this very house, which belonged to the city's judge, Fakhr al-Din ibn Loqman.</p>
                            
                            <h3>Authentic Islamic Architecture</h3>
                            <ul>
                                <li><strong>Interior Design:</strong> The house features two floors built in a distinct Islamic style. The ground floor (Salamlek) was for receiving guests, while the upper floor (Haramlek) was the family's private quarters.</li>
                                <li><strong>The Prison Room:</strong> The exact room where King Louis was held still retains its historical details. It is famous for its exceptionally low wooden door, allegedly designed this way to force the proud king to bow his head every time he entered or exited.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Today, the house serves as the Mansoura National Museum. During your visit, make sure to see the hall featuring magnificent paintings and dioramas that depict the Battle of Mansoura and the capture of King Louis. The museum also displays authentic weapons and clothing from that era, making you feel as if you've stepped back in time right into the heart of the battle.</p>
                        `
                    }
                }
            }
        ]
    },
    // --- 3. THE CANAL CITIES ---
    {
        id: "portsaid", type: "sea", icon: "fa-ship",
        coords: { x: 67.7, y: 12.9 },
        content: {
            ar: { title: "بورسعيد", desc: "المدينة الباسلة." },
            en: { title: "Port Said", desc: "The Valiant City." }
        },
        sites: [
            { img: "Resources/UI/portfauad.jpg", ar: { name: "بورفؤاد", desc: "مدينة عابرة للقارات ذات طراز معماري فرنسي فريد، وجبال من الملح تشبه جليد أوروبا." }, 
                en: { name: "Port Fouad", desc: "A transcontinental city with unique French architecture and salt mountains resembling European glaciers." },
                details: {
                    date: "1920 م (تأسيس المدينة)",
                    gallery: [
                        "resources/details/portsaid/portfouad/portfouad1.jpg", 
                        "resources/details/portsaid/portfouad/portfouad2.jpg", 
                        "resources/details/portsaid/portfouad/portfouad3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>مدينة عابرة للقارات</h3>
                            <p>تقع مدينة بورفؤاد جغرافياً في قارة آسيا (شبه جزيرة سيناء)، بينما تقع بورسعيد في قارة أفريقيا، ويفصل بينهما المجرى الملاحي لقناة السويس. رحلة الوصول إليها عبر "المعدية" المجانية هي متعة بحد ذاتها، حيث ترافقك طيور النورس طوال الرحلة القصيرة وسط السفن التجارية العملاقة.</p>
                            
                            <h3>طراز معماري فرنسي</h3>
                            <p>أُنشئت المدينة عام 1920 م لإقامة المهندسين والعاملين في شركة قناة السويس. تتميز بشوارعها الهادئة والمنظمة جداً، والفيلات ذات الطراز المعماري الفرنسي الكلاسيكي بأسقفها القرميدية الحمراء وحدائقها الواسعة، مما يمنحك شعوراً بأنك تتجول في إحدى ضواحي باريس القديمة.</p>
                            
                            <h3>جبال الملح الساحرة</h3>
                            <p>من أحدث وأشهر المعالم في بورفؤاد هي "جبال الملح" الشاهقة التابعة لشركة المكس. تراكم الملح الأبيض الناصع جعلها تبدو وكأنها جبال جليدية في قلب أوروبا، وأصبحت مقصداً رئيسياً لالتقاط أروع الصور التذكارية المبتكرة.</p>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>خذ جولة سيراً على الأقدام في الميدان الرئيسي وشوارع الفيلات لالتقاط صور كلاسيكية، ثم توجه إلى جبال الملح (يُفضل ارتداء ملابس شتوية أو ملونة لتبرز في الصور مع اللون الأبيض الخالص). ولا تنسَ إطعام طيور النورس أثناء ركوب المعدية في طريق العودة وقت الغروب.</p>
                        `,
                        en: `
                            <h3>A Transcontinental City</h3>
                            <p>Port Fouad is geographically located in Asia (the Sinai Peninsula), while Port Said lies in Africa, separated only by the Suez Canal. Reaching it via the free "Ferry" is a memorable experience, as flocks of seagulls accompany you on the short journey right alongside giant cargo ships.</p>
                            
                            <h3>French Architectural Style</h3>
                            <p>The city was established in 1920 to house the engineers and workers of the Suez Canal Company. It is distinguished by its remarkably quiet, well-organized streets and vintage French-style villas with red-tiled roofs and spacious gardens, giving you the feeling of strolling through an old Parisian suburb.</p>
                            
                            <h3>The Magical Salt Mountains</h3>
                            <p>One of the newest and most famous attractions in Port Fouad is the towering "Salt Mountains." The accumulation of pure white salt makes them look like snowy European glaciers, turning the area into a premier destination for breathtaking photography.</p>
                            
                            <h3>Visit Tip</h3>
                            <p>Take a walking tour around the main square and the villa streets for classic photos, then head to the Salt Mountains (wearing bright or winter clothing creates a great contrast against the white background for photos). Don't forget to feed the seagulls from the ferry on your way back at sunset.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "ismailia", type: "nature", icon: "fa-leaf",
        coords: { x: 67.9, y: 19.8 },
        content: {
            ar: { title: "الإسماعيلية", desc: "مدينة الحدائق." },
            en: { title: "Ismailia", desc: "City of Gardens." }
        },
        sites: [
            { img: "Resources/UI/timsah.jpg", ar: { name: "بحيرة التمساح", desc: "جوهرة الإسماعيلية المائية ونقطة التقاء المجرى الملاحي لقناة السويس بالطبيعة الساحرة." }, 
                en: { name: "Lake Timsah", desc: "Ismailia's water jewel and the meeting point of the Suez Canal with charming nature." },
                details: {
                    date: "1862 م (وصول مياه القناة)",
                    gallery: [
                        "resources/details/ismailia/timsah/timsah1.jpg", 
                        "resources/details/ismailia/timsah/timsah2.jpg", 
                        "resources/details/ismailia/timsah/timsah3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>جوهرة مدينة السحر والجمال</h3>
                            <p>تعتبر بحيرة التمساح من أجمل المعالم الطبيعية في مدينة الإسماعيلية. قبل حفر قناة السويس، كانت البحيرة عبارة عن منخفض طبيعي جاف تقريباً، ولكن مع تقدم أعمال حفر القناة عام 1862، تدفقت إليها مياه البحر الأبيض المتوسط لتمتلئ وتصبح جزءاً حيوياً ورئيسياً من المجرى الملاحي الأهم في العالم.</p>
                            
                            <h3>سر التسمية العجيبة</h3>
                            <p>هناك عدة روايات تاريخية حول سبب تسميتها بـ "بحيرة التمساح"؛ يعتقد البعض أن شكلها الجغرافي القديم كان يشبه التمساح، بينما تشير روايات أخرى أكثر دقة إلى أن التماسيح كانت تعيش فيها بالفعل قديماً عندما كانت المياه العذبة تصل إليها من نهر النيل عبر الفروع والترع القديمة قبل حفر القناة.</p>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>البحيرة هي المكان المثالي لقضاء يوم هادئ ومسترخٍ وسط الطبيعة. استمتع بالجلوس على الشواطئ والأندية المطلة عليها (مثل نادي الشراع والملاحة)، ولا تفوت أخذ جولة بحرية في قارب (لنش) وقت الغروب لمشاهدة السفن التجارية العملاقة وهي تعبر القناة في مشهد مهيب لا يُنسى.</p>
                        `,
                        en: `
                            <h3>The Jewel of the City of Charm</h3>
                            <p>Lake Timsah (Crocodile Lake) is one of the most beautiful natural landmarks in Ismailia. Before the Suez Canal was dug, the lake was mostly a dry natural depression. However, as excavation progressed in 1862, waters from the Mediterranean flowed in, filling it and making it a vital and central part of the world's most important shipping lane.</p>
                            
                            <h3>The Secret of the Strange Name</h3>
                            <p>There are several historical theories behind its name. Some believe its ancient geographical shape resembled a crocodile, while other, more accurate accounts suggest that crocodiles actually lived there in ancient times when fresh water reached the area from the Nile via old branches before the canal's construction.</p>
                            
                            <h3>Visit Tip</h3>
                            <p>The lake is the perfect place for a quiet, relaxing day in nature. Enjoy sitting on the beaches and clubs overlooking it (like the Sailing Club). Don't miss taking a boat ride at sunset to watch the giant cargo ships crossing the canal in a truly majestic and unforgettable scene.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "suez", type: "history", icon: "fa-industry",
        coords: { x: 73.6, y: 28.1 },
        content: {
            ar: { title: "السويس", desc: "مدخل القناة الجنوبي." },
            en: { title: "Suez", desc: "Canal South Entrance." }
        },
        sites: [
             { img: "Resources/UI/greenisland.jpg", ar: { name: "الجزيرة الخضراء", desc: "حصن خرساني منيع وسط البحر، وشاهد على أشرس معارك حرب الاستنزاف الباسلة." }, 
                en: { name: "Green Island", desc: "An impregnable concrete fortress in the sea, witnessing the fiercest battles of the War of Attrition." },
                details: {
                    date: "1941 م (خلال الحرب العالمية الثانية)",
                    gallery: [
                        "resources/details/suez/greenisland/greenisland1.jpg", 
                        "resources/details/suez/greenisland/greenisland2.jpg", 
                        "resources/details/suez/greenisland/greenisland3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>حصن خرساني فوق الشعاب المرجانية</h3>
                            <p>لم تكن الجزيرة الخضراء جزيرة طبيعية، بل هي قاعدة عسكرية اصطناعية شيدتها القوات البريطانية من الخرسانة المسلحة المتينة والحديد فوق شُعب مرجانية في خليج السويس عام 1941. كان الهدف من بنائها هو حماية المدخل الجنوبي لقناة السويس من الغواصات والطائرات التابعة لدول المحور خلال الحرب العالمية الثانية.</p>
                            
                            <h3>أسطورة حرب الاستنزاف</h3>
                            <p>تكمن الأهمية التاريخية الكبرى للجزيرة في دورها خلال "حرب الاستنزاف". كانت الجزيرة نقطة إنذار مبكر ورادار متقدم للقوات المصرية. في يوليو 1969، تعرضت الجزيرة لهجوم إسرائيلي شامل من البحر والجو (عُرف بعملية بولموس 6). سطر جنود الحامية المصرية ملحمة أسطورية في الدفاع عنها والقتال المتلاحم، لدرجة أن قائد الحامية طلب من المدفعية المصرية قصف الجزيرة بالكامل (على من فيها) لمنع سقوطها في يد العدو.</p>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>الجزيرة اليوم هي أطلال عسكرية صامتة تقف بشموخ وسط الأمواج كشاهد على التاريخ. لا توجد رحلات سياحية رسمية منتظمة للتجول داخلها نظراً لطبيعتها، ولكن يمكنك استئجار قارب بحري (لنش) من السويس للاقتراب منها والتقاط الصور التذكارية. كما تعتبر المياه المحيطة بها موقعاً ممتازاً لهواة الغوص نظراً لتجمع الشعاب المرجانية حول أساساتها الخرسانية.</p>
                        `,
                        en: `
                            <h3>A Concrete Fortress on Coral Reefs</h3>
                            <p>Green Island is not a natural island, but an artificial military base built entirely from reinforced concrete and steel over a coral reef in the Gulf of Suez in 1941. It was constructed by British forces during World War II to protect the southern entrance of the Suez Canal from Axis submarines and aerial attacks.</p>
                            
                            <h3>Legend of the War of Attrition</h3>
                            <p>The island's greatest historical significance lies in its role during the "War of Attrition". It served as a crucial Egyptian early-warning radar station. In July 1969, the island faced a massive amphibious and aerial assault by Israeli forces (Operation Bulmus 6). The Egyptian garrison fought a legendary hand-to-hand battle to defend it, with the garrison commander famously calling down Egyptian artillery fire directly onto their own position to prevent the island from falling to the enemy.</p>
                            
                            <h3>Visit Tip</h3>
                            <p>Today, the island stands as a silent, ruined fortress amidst the waves, serving as a monument to history. While there are no regular official tours to walk inside due to its rugged nature, you can rent a boat from Suez to sail close to it and take remarkable photos. The surrounding waters are also a popular spot for divers, as marine life and coral reefs have gathered around its submerged concrete foundations.</p>
                        `
                    }
                }
            }
        ]
    },
    // --- 4. MIDDLE EGYPT & WESTERN DESERT ---
    {
        id: "fayoum", type: "nature", icon: "fa-tree",
        coords: { x: 54.1, y: 32.1 },
        content: {
            ar: { title: "الفيوم", desc: "مصر الصغرى والشلالات." },
            en: { title: "Fayoum", desc: "Little Egypt & Waterfalls." }
        },
        sites: [
             { img: "Resources/UI/wadirayan.jpg", ar: { name: "وادي الريان", desc: "محمية طبيعية خلابة تضم الشلالات الدائمة الوحيدة في مصر وسط الكثبان الرملية." }, 
                en: { name: "Wadi El Rayan", desc: "A breathtaking nature reserve featuring Egypt's only permanent waterfalls amidst sand dunes." },
                details: {
                    date: "1973 م (تكوين البحيرات)",
                    gallery: [
                        "resources/details/fayoum/wadirayan/wadirayan1.jpg", 
                        "resources/details/fayoum/wadirayan/wadirayan2.jpg", 
                        "resources/details/fayoum/wadirayan/wadirayan3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>قصة نشأة البحيرات</h3>
                            <p>تعتبر محمية وادي الريان من أهم المعالم الطبيعية في الفيوم. ورغم طبيعتها الصحراوية، إلا أن بحيراتها وشلالاتها ليست قديمة جداً؛ فقد تكونت عام 1973 م نتيجة مشروع هندسي لتحويل مياه الصرف الزراعي الزائدة من واحة الفيوم إلى هذا المنخفض الصحراوي العميق، مما خلق بيئة طبيعية ساحرة ومفاجئة وسط الرمال.</p>
                            
                            <h3>سحر الطبيعة والشلالات</h3>
                            <ul>
                                <li><strong>شلالات وادي الريان:</strong> تتكون المحمية من بحيرتين (عليا وسفلى)، ونتيجة لفارق المنسوب بينهما، تشكلت شلالات وادي الريان الشهيرة، وهي الشلالات الدائمة الوحيدة في مصر.</li>
                                <li><strong>الحياة البرية:</strong> المنطقة غنية جداً بالحياة البرية وتعتبر محطة راحة رئيسية للآلاف من الطيور المهاجرة، بالإضافة إلى وجود بعض الحيوانات الصحراوية النادرة مثل الغزال الأبيض والثعلب الفنك.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>وادي الريان هو المكان المثالي لعشاق المغامرة. يمكنك الاستمتاع بالتزلج على الرمال (Sandboarding) على الكثبان الرملية الناعمة المحيطة بالبحيرة، أو ركوب فلوكة خشبية حول الشلالات. لا تفوت زيارة "جبل المدورة" القريب وتسلقه (وهو تسلق سهل) لمشاهدة بانوراما خيالية للبحيرة والرمال وقت الغروب.</p>
                        `,
                        en: `
                            <h3>The Story of the Lakes</h3>
                            <p>Wadi El Rayan is a protected national park and one of Fayoum's most significant natural landmarks. Despite its desert nature, its lakes and waterfalls are relatively recent. They were formed in 1973 AD as a result of an engineering project to channel excess agricultural drainage water from the Fayoum oasis into this deep desert depression, creating a magical and unexpected natural environment amidst the sands.</p>
                            
                            <h3>Magic of Nature & Waterfalls</h3>
                            <ul>
                                <li><strong>The Waterfalls:</strong> The reserve consists of two main lakes (upper and lower). Due to the difference in elevation between them, the famous Wadi El Rayan waterfalls were formed, making them the only permanent waterfalls in Egypt.</li>
                                <li><strong>Wildlife:</strong> The area is incredibly rich in wildlife and serves as a vital resting spot for thousands of migratory birds, alongside rare desert animals like the white gazelle and the fennec fox.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Wadi El Rayan is the perfect destination for adventure lovers. You can enjoy sandboarding on the soft dunes surrounding the lakes or take a wooden felucca ride near the waterfalls. Don't miss climbing the nearby "El Mudawara Mountain" (an easy hike) for a surreal panoramic view of the lakes and dunes at sunset.</p>
                        `
                    }
                }
            },
             { img: "Resources/UI/whales.jpg", ar: { name: "وادي الحيتان", desc: "متحف مفتوح لحفريات الحيتان ذات الأقدام، وأول موقع تراث طبيعي عالمي في مصر." }, 
                en: { name: "Wadi El Hitan", desc: "An open-air museum of walking whale fossils, and Egypt's first UNESCO World Natural Heritage site." },
                details: {
                    date: "40,000,000 سنة (العصر الإيوسيني)",
                    gallery: [
                        "resources/details/fayoum/wadihitan/wadihitan1.jpg", 
                        "resources/details/fayoum/wadihitan/wadihitan2.jpg", 
                        "resources/details/fayoum/wadihitan/wadihitan3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>سر المحيط المفقود</h3>
                            <p>من الصعب تصديق أن هذه الصحراء القاحلة وذات الرمال الذهبية كانت قبل 40 مليون سنة قاعاً لمحيط ضخم يُسمى "بحر تيثس". يضم الوادي مئات الحفريات والهياكل العظمية الكاملة لحيتان بدائية كانت تمتلك أقداماً خلفية، مما قدم للعالم الدليل القاطع على تطور الحيتان من ثدييات برية إلى كائنات بحرية.</p>
                            
                            <h3>متحف مفتوح وتراث عالمي</h3>
                            <ul>
                                <li><strong>هياكل الباسيلوصورس:</strong> حوت مفترس وضخم يبلغ طوله 18 متراً، يُعرض هيكله العظمي الكامل ممدداً على رمال الصحراء في نفس مكانه الأصلي الذي اكتُشف فيه.</li>
                                <li><strong>متحف الحفريات وتغير المناخ:</strong> مبنى دائري فريد مصمم ليحاكي طبيعة المكان، يعرض حفريات لكائنات بحرية أخرى عاشت في نفس الحقبة مثل "عروس البحر" (الدوجونج)، وأسماك القرش القديمة، والسلاحف العملاقة.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>يقع الوادي في عمق الصحراء، لذا يُفضل استخدام سيارة دفع رباعي (4x4) للوصول إليه براحة. المكان يُعد من أفضل بقاع مصر على الإطلاق لمراقبة النجوم (Stargazing) والتخييم ليلاً، لشدة صفاء سمائه وبُعده التام عن أي تلوث ضوئي. لا تنسَ اصطحاب كاميرتك لالتقاط صور خيالية لمجرة درب التبانة فوق هياكل الحيتان.</p>
                        `,
                        en: `
                            <h3>Secret of the Lost Ocean</h3>
                            <p>It is hard to believe that this golden, barren desert was, 40 million years ago, the bottom of a massive ocean called the "Tethys Sea." The valley contains hundreds of fully intact fossilized skeletons of primitive whales that possessed hind legs, providing the world with conclusive evidence of the evolution of whales from land-dwelling mammals to marine creatures.</p>
                            
                            <h3>Open-Air Museum & World Heritage</h3>
                            <ul>
                                <li><strong>Basilosaurus Skeletons:</strong> A massive, 18-meter-long predatory whale. Its complete skeleton is displayed stretched out on the desert sand exactly where it was discovered.</li>
                                <li><strong>Fossils & Climate Change Museum:</strong> A unique circular building designed to blend with nature, displaying fossils of other marine creatures from the same era, such as ancient dugongs (sea cows), early sharks, and giant turtles.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The valley is located deep in the desert, so a 4x4 vehicle is highly recommended for a comfortable journey. The area is arguably one of the best spots in Egypt for stargazing and overnight camping due to its exceptionally clear skies and total lack of light pollution. Bring your camera to capture surreal photos of the Milky Way over the whale skeletons.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "minya", type: "history", icon: "fa-scroll",
        coords: { x: 52.8, y: 38.4 },
        content: {
            ar: { title: "المنيا", desc: "عروس الصعيد وتل العمارنة." },
            en: { title: "Minya", desc: "Bride of Upper Egypt." }
        },
        sites: [
             { img: "Resources/UI/amarna.jpg", ar: { name: "تل العمارنة", desc: "عاصمة التوحيد الأولى في التاريخ، ومقر حكم إخناتون والملكة نفرتيتي." }, 
                en: { name: "Tell el-Amarna", desc: "The first capital of monotheism in history, and the seat of Akhenaten and Queen Nefertiti." },
                details: {
                    date: "1346 ق.م (الأسرة الـ 18)",
                    gallery: [
                        "resources/details/minya/amarna/amarna1.jpg", 
                        "resources/details/minya/amarna/amarna2.jpg", 
                        "resources/details/minya/amarna/amarna3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>عاصمة التوحيد المفقودة</h3>
                            <p>تختلف "تل العمارنة" عن أي مكان آخر في مصر، فهي المدينة التي بناها الملك المتمرد "إخناتون" (أمنحتب الرابع) وزوجته الملكة "نفرتيتي" من الصفر لتكون العاصمة الجديدة لمصر ومقراً لعبادة الإله الواحد "آتون" (قرص الشمس)، تاركين وراءهم آلهة طيبة القديمة وكهنتها.</p>
                            
                            <h3>فن وعمارة خارج الصندوق</h3>
                            <ul>
                                <li><strong>الفن العمارني:</strong> تتميز مقابر وآثار المدينة بأسلوب فني فريد ومتحرر جداً لم تعهده مصر من قبل، حيث تُصور العائلة الملكية للمرة الأولى في مشاهد يومية حميمية (يلعبون مع أطفالهم) تحت أشعة الشمس التي تنتهي بأيادي تمنح الحياة.</li>
                                <li><strong>المقابر المنحوتة:</strong> يضم الموقع مقابر لكبار رجال الدولة والكهنة منحوتة في منحدرات الجبل الشرقي، وتحتوي على نقوش رائعة لأناشيد التوحيد (أناشيد آتون الكبرى).</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>الموقع واسع جداً ومفتوح في حضن الجبل، لذا يُفضل زيارته في الصباح الباكر لتجنب حرارة الشمس. لا تفوت زيارة "المقبرة الملكية" التي تقع في وادٍ منعزل وتتميز بتصميمها المختلف تماماً عن مقابر وادي الملوك في الأقصر، وتأمل بقايا "القصر الشمالي" حيث يُعتقد أن نفرتيتي كانت تعيش.</p>
                        `,
                        en: `
                            <h3>The Lost Capital of Monotheism</h3>
                            <p>Tell el-Amarna is unlike any other place in Egypt. It is the city built from scratch by the rebel King "Akhenaten" and his wife Queen "Nefertiti" to serve as the new capital of Egypt and the center for the worship of the single god "Aten" (the sun disk), entirely abandoning the old gods of Thebes and their powerful priests.</p>
                            
                            <h3>Out-of-the-Box Art and Architecture</h3>
                            <ul>
                                <li><strong>Amarna Art:</strong> The tombs and ruins of the city feature a unique, highly liberated artistic style never before seen in Egypt. For the first time, the royal family is depicted in intimate daily scenes (playing with their children) under the sun's rays that end in life-giving hands.</li>
                                <li><strong>Rock-Cut Tombs:</strong> The site includes tombs of high officials and priests carved into the eastern mountain cliffs, containing magnificent inscriptions of the Great Hymns to Aten.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The site is vast and fully exposed to the sun in the mountain's embrace, so it is best visited early in the morning. Don't miss the "Royal Tomb" located in a secluded valley, featuring a design completely different from the Valley of the Kings, and take a moment to contemplate the ruins of the "North Palace" where Nefertiti is believed to have lived.</p>
                        `
                    }
                }
            },
             { img: "Resources/UI/beni.jpg", ar: { name: "مقابر بني حسن", desc: "مقابر منحوتة في صخر الجبل، تحتفظ بأروع جداريات الحياة اليومية والألعاب الرياضية في مصر القديمة." }, 
                en: { name: "Beni Hasan Tombs", desc: "Rock-cut tombs preserving some of the most magnificent murals of daily life and sports in ancient Egypt." },
                details: {
                    date: "2000 ق.م (الدولة الوسطى)",
                    gallery: [
                        "resources/details/minya/benihasan/benihasan1.jpg", 
                        "resources/details/minya/benihasan/benihasan2.jpg", 
                        "resources/details/minya/benihasan/benihasan3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>سجل مصور للحياة اليومية</h3>
                            <p>على عكس مقابر الملوك التي تركز على رحلة العالم الآخر، كانت "بني حسن" مخصصة لحكام الأقاليم (الأمراء) في عصر الدولة الوسطى. جدران هذه المقابر المنحوتة في قلب الجبل الشرقي تعتبر بمثابة كتاب مفتوح يسجل أدق تفاصيل الحياة اليومية للمصريين القدماء، من زراعة، وصيد، وصناعة، وحتى تفاصيل الموضة والملابس.</p>
                            
                            <h3>أول موسوعة للألعاب الرياضية</h3>
                            <ul>
                                <li><strong>جداريات المصارعة:</strong> أشهر ما يميز بني حسن هو وجود مئات المشاهد المتسلسلة التي تصور حركات وتكتيكات رياضة "المصارعة" والاشتباك بالأيدي، والتي تبدو كأنها شريط سينمائي أو كتيب تدريب عسكري حديث.</li>
                                <li><strong>الألعاب الأخرى:</strong> بجانب المصارعة، توثق الجداريات رياضات أخرى مثل رفع الأثقال، والجمباز، وألعاب الكرة التي كانت تمارسها الفتيات ببراعة مذهلة.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>للوصول إلى المقابر، سيتوجب عليك صعود درج حجري طويل ممهد على سفح الجبل. عند وصولك للأعلى، وقبل دخول المقابر، التفت خلفك لتستمتع بواحد من أروع المناظر البانورامية في مصر، حيث يعانق شريط النيل الأخضر الخصب رمال الصحراء الجافة في مشهد مهيب. تذكر أن التصوير بالداخل قد يتطلب تصريحاً خاصاً لحماية الألوان الزاهية.</p>
                        `,
                        en: `
                            <h3>A Pictorial Record of Daily Life</h3>
                            <p>Unlike royal tombs that focus on the journey to the afterlife, "Beni Hasan" was dedicated to provincial governors (nomarchs) during the Middle Kingdom. The walls of these rock-cut tombs are like an open book, recording the most precise details of ancient Egyptian daily life, including agriculture, hunting, manufacturing, and even fashion.</p>
                            
                            <h3>The First Encyclopedia of Sports</h3>
                            <ul>
                                <li><strong>Wrestling Murals:</strong> The most famous feature of Beni Hasan is the presence of hundreds of sequential scenes depicting the movements and tactics of "wrestling" and hand-to-hand combat. They look almost like a cinematic strip or a modern military training manual.</li>
                                <li><strong>Other Sports:</strong> Besides wrestling, the murals document other sports such as weightlifting, gymnastics, and ball games played by young women with astonishing skill.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>To reach the tombs, you will need to climb a long paved stone staircase up the mountain slope. Once you reach the top, and before entering the tombs, turn around to enjoy one of the most breathtaking panoramic views in Egypt, where the lush green ribbon of the Nile embraces the arid desert sands. Remember that photography inside may require a special permit to protect the vibrant colors.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "whitedesert", type: "oasis", icon: "fa-wind",
        coords: { x: 23.1, y: 28.3 },
        content: {
            ar: { title: "الصحراء البيضاء", desc: "الواحات البحرية والفرافرة." },
            en: { title: "White Desert", desc: "Bahariya & Farafra Oases." }
        },
        sites: [
             { img: "Resources/UI/mushrooms.jpg", ar: { name: "الصخور الطباشيرية", desc: "متحف طبيعي مفتوح للمنحوتات الجيرية ناصعة البياض التي تشكلت بفعل الرياح على شكل فطر (مشروم)." }, 
                en: { name: "Chalk Rocks", desc: "An open-air natural museum of dazzling white limestone sculptures carved by the wind into mushroom shapes." },
                details: {
                    date: "70,000,000 سنة (العصر الطباشيري)",
                    gallery: [
                        "resources/details/whitedesert/mushrooms/mushrooms1.jpg", 
                        "resources/details/whitedesert/mushrooms/mushrooms2.jpg", 
                        "resources/details/whitedesert/mushrooms/mushrooms3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>محيط قديم ونحت الرياح</h3>
                            <p>من الصعب تخيل أن هذه الصحراء الشاسعة كانت قديماً قاعاً لبحر عميق. بعد تراجع المياه، تخلفت رواسب جيرية وطباشيرية ناصعة البياض. وبفعل عوامل النحت والتعرية بواسطة الرياح المحملة بالرمال على مدار ملايين السنين، تآكلت الأجزاء السفلية الضعيفة من الصخور وبقيت الأجزاء العلوية الصلبة، لتتشكل هذه المنحوتات الربانية المذهلة.</p>
                            
                            <h3>أشكال خيالية ومسميات شعبية</h3>
                            <ul>
                                <li><strong>صخرة المشروم (عيش الغراب):</strong> أشهر وأيقونة التكوينات الصخرية في المحمية، حيث تتوازن صخرة ضخمة على قاعدة رفيعة جداً في مشهد يتحدى الجاذبية.</li>
                                <li><strong>صخرة الدجاجة والشجرة:</strong> بمجرد إطلاق العنان لخيالك، سترى صخوراً تتخذ أشكالاً مألوفة كأنها طيور، وحيوانات أسطورية، ووجوه بشرية تجلس في سكون وسط الصحراء.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أعظم تجربة هنا هي التخييم ليلاً (Camping) وسط هذه الصخور. عندما ينعكس ضوء القمر على الأرضية البيضاء، ستشعر وكأنك تسير حرفياً على سطح القمر. تأكد من الاستيقاظ مبكراً لالتقاط أروع الصور مع "صخرة المشروم" وقت شروق الشمس، حيث تكتسي الصخور البيضاء بلون ذهبي برتقالي ساحر يغير ملامح المكان تماماً.</p>
                        `,
                        en: `
                            <h3>An Ancient Ocean and Wind Carving</h3>
                            <p>It is hard to imagine that this vast desert was once the bottom of a deep sea. After the waters receded, they left behind dazzling white limestone and chalk deposits. Through millions of years of erosion by sand-carrying winds, the softer lower parts of the rocks eroded away while the harder upper parts remained, creating these breathtaking divine sculptures.</p>
                            
                            <h3>Fantasy Shapes and Popular Names</h3>
                            <ul>
                                <li><strong>The Mushroom Rock:</strong> The most famous icon of the reserve, where a massive boulder balances perfectly on an incredibly thin stalk, seemingly defying gravity.</li>
                                <li><strong>The Chicken and the Tree:</strong> Once you let your imagination run wild, you will see rocks taking on familiar shapes resembling giant birds, mythical beasts, and human faces sitting silently in the desert.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The greatest experience here is overnight camping among these rocks. When the moonlight reflects off the white ground, you will literally feel like you are walking on the surface of the moon. Make sure to wake up early to capture the best photos with the "Mushroom Rock" at sunrise, as the white rocks take on a magical golden-orange hue that completely transforms the landscape.</p>
                        `
                    }
                }
            },
             { img: "Resources/UI/blackdesert.jpg", ar: { name: "الصحراء السوداء", desc: "جبال بركانية تكسوها صخور البازلت الأسود وسط الرمال الذهبية، في تضاد لوني مذهل." }, 
                en: { name: "Black Desert", desc: "Volcanic mountains covered in black basalt rocks amidst golden sands, creating a stunning color contrast." },
                details: {
                    date: "180,000,000 سنة (العصر الجوراسي)",
                    gallery: [
                        "resources/details/whitedesert/blackdesert/blackdesert1.jpg", 
                        "resources/details/whitedesert/blackdesert/blackdesert2.jpg", 
                        "resources/details/whitedesert/blackdesert/blackdesert3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>لوحة فنية من التضاد اللوني</h3>
                            <p>تقع الصحراء السوداء بالقرب من الواحات البحرية، وهي عبارة عن تلال وجبال مخروطية الشكل تشبه البراكين، تكسوها طبقة من مسحوق وصخور البازلت الأسود (الدولريت). هذا الغطاء الصخري الداكن الذي يتناثر وسط الرمال الصحراوية الذهبية يخلق واحدة من أندر اللوحات الطبيعية المذهلة في العالم.</p>
                            
                            <h3>بقايا براكين غابرة</h3>
                            <ul>
                                <li><strong>النشاط البركاني:</strong> تشكلت هذه التلال نتيجة ثورات بركانية ضخمة قديماً (خلال العصر الجوراسي)، حيث قذفت الحمم البركانية التي بردت وتصلبت لتشكل هذه الصخور السوداء، والتي تناثرت لاحقاً على قمم وسفوح التلال بفعل ملايين السنين من التعرية.</li>
                                <li><strong>جبل المرصوص:</strong> من أشهر جبال الصحراء السوداء، ويتميز بقمته المستوية وصخوره المتراصة، ويعتبر نقطة توقف رئيسية لرحلات السفاري الاستكشافية.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل طريقة لاستكشاف الصحراء السوداء هي تسلق أحد تلالها المرتفعة (وتسلقها ليس صعباً). من القمة، ستحظى بإطلالة بانورامية لا تُنسى لآلاف التلال السوداء المتناثرة كالجزر وسط محيط من الرمال الصفراء. تُعتبر الصحراء السوداء البوابة الطبيعية والمحطة الأولى المثالية قبل الانطلاق للتخييم في الصحراء البيضاء المجاورة.</p>
                        `,
                        en: `
                            <h3>A Masterpiece of Color Contrast</h3>
                            <p>Located near the Bahariya Oasis, the Black Desert consists of cone-shaped hills and mountains resembling volcanoes, covered in a layer of black basalt powder and rocks (dolerite). This dark rocky cover scattered amidst the golden desert sands creates one of the rarest and most stunning natural canvases in the world.</p>
                            
                            <h3>Remnants of Ancient Volcanoes</h3>
                            <ul>
                                <li><strong>Volcanic Activity:</strong> These hills were formed by massive ancient volcanic eruptions (during the Jurassic period). The erupted lava cooled and hardened to form these black rocks, which were later scattered across the peaks and slopes by millions of years of wind erosion.</li>
                                <li><strong>Gebel El Marsous:</strong> One of the most famous mountains in the Black Desert, characterized by its flat top and stacked rocks, serving as a main stop for safari expeditions.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The best way to experience the Black Desert is to climb one of its highest peaks (the climb is relatively easy). From the top, you will be rewarded with an unforgettable panoramic view of thousands of black hills scattered like islands in an ocean of yellow sand. The Black Desert is the natural gateway and the perfect first stop before heading to camp in the nearby White Desert.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "assiut", type: "history", icon: "fa-church",
        coords: { x: 53.1, y: 45 },
        content: {
            ar: { title: "أسيوط", desc: "مسار العائلة المقدسة." },
            en: { title: "Assiut", desc: "Holy Family path." }
        },
        sites: [
            { img: "Resources/UI/durunka.jpg", ar: { name: "دير درنكة", desc: "آخر محطات العائلة المقدسة في مصر، وملاذ روحي عظيم محفور في قلب جبل أسيوط الغربي." }, 
                en: { name: "Drunka Monastery", desc: "The last station of the Holy Family in Egypt, a great spiritual sanctuary carved into Assiut's western mountain." },
                details: {
                    date: "القرن الأول الميلادي",
                    gallery: [
                        "resources/details/assiut/drunka/drunka1.jpg", 
                        "resources/details/assiut/drunka/drunka2.jpg", 
                        "resources/details/assiut/drunka/drunka3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>آخر محطات العائلة المقدسة</h3>
                            <p>يعتبر دير السيدة العذراء بجبل درنكة في محافظة أسيوط من أهم المعالم الدينية والتاريخية في مصر. تكمن أهميته العظمى في كونه آخر محطة استقرت فيها العائلة المقدسة (السيدة العذراء والسيد المسيح ويوسف النجار) في مغارة الجبل خلال رحلة هروبهم إلى مصر، ومن هذا المكان بدأت رحلة العودة إلى فلسطين.</p>
                            
                            <h3>مغارة الجبل الغربي</h3>
                            <ul>
                                <li><strong>المغارة الأثرية:</strong> يقع الدير على ارتفاع أكثر من 100 متر على سفح الجبل الغربي. النقطة المركزية للدير هي "المغارة القديمة" المنحوتة طبيعياً في صخر الجبل، والتي احتمت بها العائلة المقدسة، وتتميز بهدوئها وروحانيتها العالية ومساحتها الشاسعة.</li>
                                <li><strong>موسم الزيارة:</strong> يتحول الدير في شهر أغسطس من كل عام إلى بؤرة احتفالية كبرى (خلال صوم العذراء)، حيث يزوره ملايين الحجاج لنيل البركة والمشاركة في المواكب والاحتفالات المهيبة (الدورة).</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل وقت للزيارة هو في فترة العصر أو المساء للاستمتاع بإطلالة بانورامية رائعة لمدينة أسيوط والوادي الأخضر من أعلى الجبل. الدير مجهز بمصاعد حديثة وممرات ممهدة، مما يسهل الوصول إلى المغارة العليا. حاول زيارته خارج شهر أغسطس إذا كنت تبحث عن الهدوء والتأمل، أو خلال أغسطس إذا كنت تريد عيش أجواء الاحتفالات الشعبية الضخمة.</p>
                        `,
                        en: `
                            <h3>The Last Station of the Holy Family</h3>
                            <p>The Monastery of the Virgin Mary at Mount Drunka in Assiut is one of the most important religious and historical landmarks in Egypt. Its supreme significance lies in being the final destination where the Holy Family (the Virgin Mary, Baby Jesus, and Joseph) settled in a mountain cave during their flight into Egypt. From this very spot, their return journey to Palestine began.</p>
                            
                            <h3>The Western Mountain Cave</h3>
                            <ul>
                                <li><strong>The Ancient Cave:</strong> The monastery is situated over 100 meters high on the slope of the western mountain. Its focal point is the vast "Ancient Cave" naturally carved into the solid rock, where the Holy Family took refuge, known for its profound peace and high spirituality.</li>
                                <li><strong>Pilgrimage Season:</strong> Every August, during the Fast of the Virgin Mary, the monastery transforms into a massive celebration hub. It is visited by millions of pilgrims who come to seek blessings and participate in majestic processions and chants.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The best time to visit is in the late afternoon or evening to enjoy a magnificent panoramic view of Assiut city and the lush Nile Valley from the mountaintop. The monastery is equipped with modern elevators and paved pathways, making it easy to reach the upper cave. Visit outside of August if you seek quiet meditation, or during August to experience the vibrant, massive local festivities.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/muharraq.jpg", ar: { name: "دير المحرق", desc: "أقدس الأديرة المسيحية وأطول محطة استقرت بها العائلة المقدسة في مصر، ويُعرف بالقدس الثانية." }, 
                en: { name: "Al-Muharraq Monastery", desc: "The holiest Christian monastery and the longest resting place of the Holy Family in Egypt, known as the Second Jerusalem." },
                details: {
                    date: "القرن الـ 1 الميلادي",
                    gallery: [
                        "resources/details/assiut/muharraq/muharraq1.jpg", 
                        "resources/details/assiut/muharraq/muharraq2.jpg", 
                        "resources/details/assiut/muharraq/muharraq3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>أطول إقامة للعائلة المقدسة</h3>
                            <p>يتمتع دير المحرق (دير السيدة العذراء بجبل قسقام) بقدسية ومكانة استثنائية، فهو المكان الذي مكثت فيه العائلة المقدسة أطول فترة خلال رحلتها في مصر، والتي استمرت لـ 6 أشهر و10 أيام. ولهذا السبب، يُطلق عليه اسم "القدس الثانية"، ويُعد من أهم المزارات المسيحية في العالم أجمع.</p>
                            
                            <h3>أول كنيسة في العالم</h3>
                            <ul>
                                <li><strong>كنيسة العذراء الأثرية:</strong> تُعتبر أقدم كنيسة دُشنّت في العالم المسيحي. المذبح الموجود بداخلها هو عبارة عن حجر صخري كان يجلس وينام عليه السيد المسيح طفلاً، ويعتقد المسيحيون أن المسيح دشنه بنفسه.</li>
                                <li><strong>الحصن الأثري:</strong> يضم الدير حصناً قديماً بُني لحماية الرهبان من غارات البدو في العصور القديمة، وهو تحفة معمارية عسكرية مصغرة تقف بشموخ داخل أسوار الدير الروحاني.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>بمجرد دخولك لأسوار الدير، ستشعر بسلام وهدوء عجيب يغمر المكان. لا تفوت زيارة الكنيسة الأثرية القديمة ورؤية حجر المذبح المقدس. تذكر أن ترتدي ملابس محتشمة تناسب قدسية المكان، واستمتع بتأمل العمارة القبطية الأصيلة الممتدة عبر العصور، ولا تنسَ شراء بعض المنتجات اليدوية التي يصنعها الرهبان.</p>
                        `,
                        en: `
                            <h3>The Longest Stay of the Holy Family</h3>
                            <p>Al-Muharraq Monastery (Monastery of the Holy Virgin at Mount Qusqam) holds exceptional sanctity. It is the location where the Holy Family stayed the longest during their journey in Egypt, lasting for exactly 6 months and 10 days. Because of this, it is famously called the "Second Jerusalem" and is considered one of the most important Christian pilgrimage sites globally.</p>
                            
                            <h3>The First Church in the World</h3>
                            <ul>
                                <li><strong>The Ancient Church of the Virgin:</strong> It is considered the oldest consecrated church in the Christian world. The altar inside is the very stone where the child Jesus sat and slept, and it is believed to have been consecrated by Jesus himself.</li>
                                <li><strong>The Ancient Keep (Fortress):</strong> The monastery includes an ancient keep built to protect the monks from Bedouin raids in ancient times, standing as a miniature military architectural masterpiece within the peaceful monastery walls.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The moment you step inside the monastery's walls, you will feel an overwhelming sense of peace and tranquility. Do not miss visiting the ancient church to see the holy altar stone. Remember to wear modest clothing suitable for the sanctity of the place, enjoy contemplating the authentic Coptic architecture spanning centuries, and consider buying some of the handmade products crafted by the monks.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "sohag", type: "history", icon: "fa-place-of-worship",
        coords: { x: 65.8, y: 47.8 },
        content: {
            ar: { title: "سوهـاج", desc: "أرض المعابد (أبيدوس)." },
            en: { title: "Sohag", desc: "Land of Temples (Abydos)." }
        },
        sites: [
            { img: "Resources/UI/abydos.jpg", ar: { name: "معبد أبيدوس", desc: "العاصمة الدينية ومركز عبادة أوزوريس، يضم قائمة الملوك العظيمة والنقوش الأجمل في مصر." }, 
                en: { name: "Abydos Temple", desc: "The religious capital and cult center of Osiris, housing the great King List and Egypt's finest reliefs." },
                details: {
                    date: "1290 ق.م (الأسرة الـ 19)",
                    gallery: [
                        "resources/details/sohag/abydos/abydos1.jpg", 
                        "resources/details/sohag/abydos/abydos2.jpg", 
                        "resources/details/sohag/abydos/abydos3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>مركز الحج القديم وعقيدة الخلود</h3>
                            <p>أبيدوس لم تكن مجرد مدينة، بل كانت أقدس بقاع الأرض للمصريين القدماء. اعتقد المصريون أن رأس الإله "أوزوريس" (إله العالم الآخر) مدفونة هنا، ولذلك كان الحج إلى أبيدوس أمنية كل مصري قديم لضمان حياة أبدية سعيدة. المعبد المذهل الذي نراه اليوم شيده الملك "سيتي الأول" وأكمله ابنه "رمسيس الثاني".</p>
                            
                            <h3>أسرار أبيدوس المذهلة</h3>
                            <ul>
                                <li><strong>قائمة الملوك:</strong> جدار ضخم داخل المعبد يحمل أسماء 76 فرعوناً حكموا مصر بالترتيب التنازلي، وهي المرجع الأهم لعلماء الآثار لمعرفة تاريخ مصر. والمثير أن القائمة حذفت عمداً أسماء الملوك غير المرغوب فيهم (مثل إخناتون وحتشبسوت).</li>
                                <li><strong>لغز الأوزيريون:</strong> مبنى غامض تحت مستوى الأرض يقع خلف المعبد مباشرة، مبني من كتل جرانيتية عملاقة تشبه عمارة أهرامات الجيزة، ويُعتقد أنه قبر رمزي للإله أوزوريس.</li>
                                <li><strong>نقوش التكنولوجيا الحديثة:</strong> توجد نقوش شهيرة جداً في المعبد تبدو بوضوح وكأنها طائرة مروحية (هليكوبتر) ودبابة وغواصة! وهي في الواقع نتاج تداخل نقوش سيتي الأول مع تعديلات رمسيس الثاني وتآكل الحجر بمرور الزمن.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>معبد أبيدوس يحتفظ بأكثر النقوش البارزة (Reliefs) دقة وجمالاً واحتفاظاً بالألوان في مصر كلها. المكان هادئ جداً وغير مزدحم بالسياح مقارنة بآثار الأقصر، مما يمنحك فرصة ذهبية للتأمل في رهبة المكان براحة تامة، والتقاط صور خيالية للأعمدة والنقوش الملونة.</p>
                        `,
                        en: `
                            <h3>The Ancient Pilgrimage Center</h3>
                            <p>Abydos was not just a city; it was the holiest place on earth for ancient Egyptians. They believed that the head of the god "Osiris" (Lord of the Underworld) was buried here. Therefore, making a pilgrimage to Abydos was the ultimate dream for every ancient Egyptian to ensure a happy eternal life. The stunning temple we see today was built by King "Seti I" and completed by his son "Ramses II".</p>
                            
                            <h3>Amazing Secrets of Abydos</h3>
                            <ul>
                                <li><strong>The King List:</strong> A massive wall inside the temple listing the names of 76 pharaohs who ruled Egypt in chronological order. It is the most crucial reference for archaeologists studying Egyptian history. Interestingly, the list intentionally omitted the names of "undesirable" rulers (like Akhenaten and Hatshepsut).</li>
                                <li><strong>The Osireion Mystery:</strong> A mysterious subterranean structure located directly behind the temple, built with colossal granite blocks resembling the architecture of the Giza Pyramids, believed to be the symbolic tomb of Osiris.</li>
                                <li><strong>The Modern Technology Hieroglyphs:</strong> There are highly famous carvings in the temple that uncannily resemble a modern helicopter, a tank, and a submarine! This is actually the result of a "palimpsest"—the overlapping of Seti I's carvings with later modifications by Ramses II, combined with stone erosion over time.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Abydos Temple preserves the finest, most delicate, and beautifully colored bas-reliefs in all of Egypt. The site is incredibly peaceful and far less crowded than the monuments of Luxor, giving you a golden opportunity to meditate in the awe of the ancient space and take surreal photos of the colorful columns and carvings.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/redmonastery.jpg", ar: { name: "الدير الأحمر", desc: "أيقونة العمارة القبطية المبكرة، يشتهر ببنائه من الطوب المحروق وجدارياته الملونة النابضة بالحياة." }, 
                en: { name: "Red Monastery", desc: "An icon of early Coptic architecture, famous for its burnt-brick structure and vibrant frescoes." },
                details: {
                    date: "القرن الـ 4 الميلادي",
                    gallery: [
                        "resources/details/sohag/redmonastery/redmonastery1.jpg", 
                        "resources/details/sohag/redmonastery/redmonastery2.jpg", 
                        "resources/details/sohag/redmonastery/redmonastery3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>أيقونة العمارة القبطية المبكرة</h3>
                            <p>يقع الدير الأحمر في محافظة سوهاج، ويُعرف رسمياً باسم "دير القديس الأنبا بشاي". سُمي بالدير الأحمر بسبب بنائه بالكامل تقريباً من الطوب الأحمر المحروق، على عكس جاره "الدير الأبيض" المبني من الحجر الجيري. يُعتبر هذا الدير من أهم وأندر المعالم الباقية من العمارة القبطية في العصور القديمة.</p>
                            
                            <h3>كنز الجداريات الملونة</h3>
                            <ul>
                                <li><strong>الهيكل الأثري (الكنيسة):</strong> الجزء المتبقي والأهم من الدير هو الكنيسة القديمة، والتي تشبه في تصميمها المعماري النادر شكل زهرة البرسيم (ثلاثية الحنيات).</li>
                                <li><strong>الجداريات النابضة بالحياة:</strong> يتميز الدير من الداخل بجداريات مذهلة تغطي جدرانه وقبابه، رُسمت بألوان "التمبرا" وتصور السيد المسيح، والسيدة العذراء، والرسل. بفضل أعمال الترميم العالمية الحديثة، عادت هذه الألوان لتنبض بالحياة وكأن الفنانين انتهوا من رسمها للتو.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>الدير من الداخل هو تحفة بصرية حقيقية. عند دخولك الهيكل القديم، لا تنسَ أن ترفع رأسك لتتأمل تفاصيل الرسوم الجدارية التي تغطي كل شبر من المكان. يُفضل جداً ربط زيارتك له بزيارة "الدير الأبيض" المجاور (دير الأنبا شنودة رئيس المتوحدين) في نفس اليوم، لتكتمل لديك صورة العمارة الرهبانية العظيمة في صعيد مصر.</p>
                        `,
                        en: `
                            <h3>An Icon of Early Coptic Architecture</h3>
                            <p>The Red Monastery is located in Sohag and is officially known as the "Monastery of Saint Bishay." It earned its popular name because its exterior walls were built almost entirely of fired red brick, standing in stark contrast to its neighbor, the limestone-built "White Monastery." It is considered one of the most important and rare surviving monuments of early Coptic architecture.</p>
                            
                            <h3>A Treasure of Colorful Frescoes</h3>
                            <ul>
                                <li><strong>The Ancient Sanctuary:</strong> The most significant surviving part of the monastery is the main church (sanctuary), which is designed in a rare triconch (clover-leaf) architectural style.</li>
                                <li><strong>Vibrant Murals:</strong> The interior of the monastery is entirely covered with breathtaking tempera frescoes depicting Jesus Christ, the Virgin Mary, and the Apostles. Thanks to recent world-class restoration efforts, these vibrant colors have been brought back to life, making them look as if they were painted just yesterday.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The interior of the monastery is a true visual masterpiece. When you step into the ancient sanctuary, make sure to look up and admire the intricate details of the frescoes covering every inch of the walls and domes. It is highly recommended to combine your trip with a visit to the nearby "White Monastery" on the same day to get a complete picture of the great monastic architecture in Upper Egypt.</p>
                        `
                    }
                }
            }
        ]
    },
    // --- 5. UPPER EGYPT ---
    {
        id: "qena", type: "history", icon: "fa-gopuram",
        coords: { x: 73.3, y: 53.3 },
        content: {
            ar: { title: "قـنا", desc: "معبد دندرة الجميل." },
            en: { title: "Qena", desc: "Beautiful Dendera Temple." }
        },
        sites: [
            { img: "Resources/UI/dendera.jpg", ar: { name: "معبد دندرة", desc: "من أفضل معابد مصر حفظاً، مكرس للإلهة حتحور ويشتهر بسقفه الفلكي المذهل وسراديبه الغامضة." }, 
                en: { name: "Dendera Temple", desc: "One of Egypt's best-preserved temples, dedicated to Hathor, famous for its astronomical ceiling and mysterious crypts." },
                details: {
                    date: "54 ق.م (العصر البطلمي والروماني)",
                    gallery: [
                        "resources/details/qena/dendera/dendera1.jpg", 
                        "resources/details/qena/dendera/dendera2.jpg", 
                        "resources/details/qena/dendera/dendera3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>درة العمارة ومقر إلهة الحب</h3>
                            <p>يعتبر معبد دندرة من أكثر المعابد المصرية القديمة اكتمالاً واحتفاظاً بتفاصيله حتى اليوم. المعبد مكرس لـ "حتحور"، إلهة الحب والجمال والموسيقى والأمومة. بمجرد دخولك قاعة الأعمدة الكبرى، ستخطف أنفاسك الأعمدة الضخمة التي تنتهي بتيجان تحمل وجه الإلهة حتحور، وسقفه الذي تم تنظيفه مؤخراً ليكشف عن ألوان زرقاء زاهية لم تتأثر بمرور الزمن.</p>
                            
                            <h3>أسرار فلكية وسراديب غامضة</h3>
                            <ul>
                                <li><strong>زودياك دندرة (القبة السماوية):</strong> يضم المعبد أقدم خريطة فلكية معروفة للسماء (الأبراج الفلكية)، والتي نُحتت ببراعة على سقف إحدى الغرف العلوية (النسخة الأصلية حالياً في متحف اللوفر وتم وضع مستنسخ مكانها).</li>
                                <li><strong>مصابيح دندرة:</strong> داخل السراديب السفلية (Crypts) توجد نقوش غامضة جداً لزهرة لوتس يخرج منها ثعبان داخل فقاعة زجاجية، والتي يعتقد بعض مروجي الخيال العلمي أنها تمثل "مصابيح كهربائية" قديمة!</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>المعبد يتيح لك تجربة فريدة نادراً ما توجد في معابد أخرى، وهي إمكانية الصعود إلى سطح المعبد عبر درج حلزوني مذهل، لتستمتع بإطلالة رائعة على المعبد والمساحات الخضراء المحيطة به. لا تفوت النزول إلى السراديب السفلية المفتوحة للزوار لتعيش جو المغامرة الحقيقي وتتأمل النقوش الغامضة عن قرب.</p>
                        `,
                        en: `
                            <h3>Jewel of Architecture & Home of the Love Goddess</h3>
                            <p>Dendera Temple is considered one of the most complete and best-preserved ancient Egyptian temples today. It is dedicated to "Hathor," the goddess of love, beauty, music, and motherhood. As soon as you enter the Great Hypostyle Hall, you will be left breathless by the massive columns topped with Hathor's face and a ceiling that was recently cleaned to reveal vibrant blue colors untouched by time.</p>
                            
                            <h3>Astronomical Secrets & Mysterious Crypts</h3>
                            <ul>
                                <li><strong>The Dendera Zodiac:</strong> The temple houses the oldest known astronomical map of the sky (the Zodiac), masterfully carved on the ceiling of an upper chamber (the original is now in the Louvre, with a replica in its place).</li>
                                <li><strong>The Dendera Light:</strong> Deep inside the underground crypts, there are highly mysterious reliefs showing a lotus flower spawning a snake inside a glass-like bubble, which some sci-fi enthusiasts famously claim represents ancient "lightbulbs"!</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The temple offers a unique experience rarely found elsewhere: you can actually climb to the roof of the temple via a stunning spiral staircase for a fantastic view of the complex and surrounding greenery. Don't miss descending into the accessible underground crypts to experience a true sense of adventure and examine the mysterious reliefs up close.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "luxor", type: "history", icon: "fa-monument",
        coords: { x: 65.1, y: 59.6 },
        content: {
            ar: { title: "الأقصر", desc: "طيبة، عاصمة العالم القديم." },
            en: { title: "Luxor", desc: "Thebes, Ancient Capital." }
        },
        sites: [
            { img: "Resources/UI/karnak.jpg", ar: { name: "معبد الكرنك", desc: "أكبر مجمع ديني في العالم القديم، ومركز عبادة الإله آمون رع على مدار ألفي عام." }, 
                en: { name: "Karnak Temple", desc: "The largest religious complex in the ancient world, and the cult center of Amun-Ra for two millennia." },
                details: {
                    date: "2000 ق.م (من الدولة الوسطى حتى العصر البطلمي)",
                    gallery: [
                        "resources/details/luxor/karnak/karnak1.jpg", 
                        "resources/details/luxor/karnak/karnak2.jpg", 
                        "resources/details/luxor/karnak/karnak3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>أكبر مجمع ديني في التاريخ</h3>
                            <p>الكرنك ليس مجرد معبد واحد، بل هو مدينة معابد شاسعة استمر بناؤها وتطويرها لأكثر من 2000 عام. ساهم فيه حوالي 30 فرعوناً ليكون المركز الرئيسي لعبادة الإله "آمون رع" وزوجته "موت" وابنهما "خونسو" في العاصمة القديمة طيبة، ليعكس مجد وقوة الإمبراطورية المصرية.</p>
                            
                            <h3>غابة الأعمدة العملاقة</h3>
                            <ul>
                                <li><strong>صالة الأعمدة الكبرى:</strong> من أعظم الإنجازات المعمارية للبشرية، تضم 134 عموداً حجرياً عملاقاً على شكل زهرة البردي، بعضها يصل ارتفاعه إلى 21 متراً، ونُقشت عليها انتصارات وطقوس الفراعنة بتفاصيل مبهرة.</li>
                                <li><strong>الجعران المقدس والبحيرة:</strong> بجوار "البحيرة المقدسة" التي لا تجف مياهها أبداً، يوجد تمثال "الجعران المقدس"، والذي يعتقد الزوار (حتى اليوم) أن الطواف حوله سبع مرات يجلب الحظ ويحقق الأمنيات.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>خصص وقتاً كافياً (ساعتين على الأقل) لاستكشاف هذا المجمع الشاسع. ابدأ بزيارته في الصباح الباكر لتجنب الزحام وحرارة الشمس، ولا تفوت العودة ليلاً لحضور "عرض الصوت والضوء" الذي يسرد تاريخ طيبة العظيمة بصوت مهيب أثناء مشيك وسط الأعمدة المضاءة بشكل ساحر.</p>
                        `,
                        en: `
                            <h3>The Largest Religious Complex in History</h3>
                            <p>Karnak is not just a single temple, but a vast city of temples developed over 2,000 years. Around 30 pharaohs contributed to its construction, making it the main cult center for the god "Amun-Ra," his wife "Mut," and their son "Khonsu" in the ancient capital of Thebes, reflecting the glory and power of the Egyptian Empire.</p>
                            
                            <h3>The Forest of Giant Columns</h3>
                            <ul>
                                <li><strong>The Great Hypostyle Hall:</strong> One of humanity's greatest architectural achievements, featuring 134 colossal stone columns shaped like papyrus stalks. Some reach 21 meters in height and are intricately carved with pharaonic victories and rituals.</li>
                                <li><strong>The Sacred Scarab & Lake:</strong> Next to the "Sacred Lake," whose waters mysteriously never dry up, sits the statue of the "Sacred Scarab." Even today, visitors believe that circling it seven times brings good luck and grants wishes.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Allocate enough time (at least two hours) to explore this immense complex. Start your visit early in the morning to avoid the heat and crowds, and do not miss returning at night for the "Sound and Light Show," which narrates the history of great Thebes with a majestic voice while you walk among the magically illuminated columns.</p>
                        `
                    }
                }
            }   ,
            { img: "Resources/UI/luxortemple.jpg", ar: { name: "معبد الأقصر", desc: "تحفة معمارية بقلب المدينة، يتميز بمسلة رمسيس الثاني وطريق الكباش المهيب ومسجد أبو الحجاج." }, 
                en: { name: "Luxor Temple", desc: "An architectural masterpiece in the city center, featuring Ramses II's obelisk, the Avenue of Sphinxes, and Abu Haggag Mosque." },
                details: {
                    date: "1400 ق.م (الدولة الحديثة)",
                    gallery: [
                        "resources/details/luxor/luxortemple/luxortemple1.jpg", 
                        "resources/details/luxor/luxortemple/luxortemple2.jpg", 
                        "resources/details/luxor/luxortemple/luxortemple3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>معبد التتويج والاحتفالات</h3>
                            <p>على عكس معظم المعابد المصرية التي بُنيت لعبادة الآلهة فقط، كان معبد الأقصر (الذي أسسه أمنحتب الثالث وأكمله رمسيس الثاني) مخصصاً لتجديد شباب الملكية وتتويج الفراعنة. وكان المعبد هو النقطة المحورية لاحتفالات عيد "الأوبت" السنوي، حيث يتم إحضار تماثيل الآلهة من معبد الكرنك في موكب احتفالي ضخم عبر النيل وطريق الكباش.</p>
                            
                            <h3>تعانق الحضارات والتاريخ</h3>
                            <ul>
                                <li><strong>مسلة رمسيس الثاني:</strong> يزين مدخل المعبد صرح ضخم وتماثيل هائلة لرمسيس الثاني، وتسبقه مسلة جرانيتية وردية شاهقة (كانت هناك مسلة أخرى توأم لها، أُهديت لفرنسا وتزين الآن ميدان الكونكورد في باريس).</li>
                                <li><strong>مسجد أبو الحجاج:</strong> مشهد فريد لن تراه في أي مكان آخر؛ حيث يُطل مسجد إسلامي تاريخي (مسجد سيدي أبو الحجاج) من أعلى أعمدة المعبد الفرعوني. بُني المسجد قبل اكتشاف المعبد حينما كان مغطى بالرمال، وبقي شاهداً على طبقات التاريخ المتعاقبة.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أفضل وقت لزيارة معبد الأقصر هو قبل الغروب بقليل والبقاء حتى يحل المساء؛ حيث تُضاء الأعمدة والتماثيل بإضاءة درامية ذهبية ساحرة تمنح المكان رهبة خاصة. لا تفوت السير في بداية "طريق الكباش" المضاء والممتد أمام المعبد، والذي كان يربط قديماً بين الأقصر والكرنك بطول 2.7 كيلومتر.</p>
                        `,
                        en: `
                            <h3>The Temple of Coronation and Festivals</h3>
                            <p>Unlike most Egyptian temples built solely for the worship of gods, Luxor Temple (founded by Amenhotep III and completed by Ramses II) was dedicated to the rejuvenation of kingship and the coronation of Pharaohs. It was the focal point of the annual "Opet Festival," where the statues of the gods were brought from Karnak Temple in a grand procession via the Nile and the Avenue of Sphinxes.</p>
                            
                            <h3>An Embrace of Civilizations</h3>
                            <ul>
                                <li><strong>The Obelisk of Ramses II:</strong> The temple's entrance is adorned with a massive pylon, colossal statues of Ramses II, and a towering pink granite obelisk (its twin was gifted to France and now stands in the Place de la Concorde in Paris).</li>
                                <li><strong>Abu Haggag Mosque:</strong> A unique sight you won't find anywhere else: a historic Islamic mosque (Abu Haggag Mosque) perched right on top of the pharaonic columns. It was built before the temple was fully excavated from the sand, remaining as a living testament to layers of history.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The absolute best time to visit Luxor Temple is late afternoon, staying until nightfall. The columns and statues are illuminated with dramatic, golden lighting that gives the site a magical and awe-inspiring atmosphere. Make sure to walk the beginning of the beautifully lit "Avenue of Sphinxes" stretching out in front of the temple, which once connected Luxor to Karnak over a distance of 2.7 kilometers.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/vok.jpg", ar: { name: "وادي الملوك", desc: "مدينة الأموات السرية للفراعنة، وتضم عشرات المقابر الملكية المنحوتة في صخر الجبل، أشهرها مقبرة توت عنخ آمون." }, 
                en: { name: "Valley of the Kings", desc: "The secret city of the dead for the Pharaohs, containing dozens of royal tombs carved into the mountain rock, most famously Tutankhamun's." },
                details: {
                    date: "1539 ق.م (الدولة الحديثة)",
                    gallery: [
                        "resources/details/luxor/vok/vok1.jpg", 
                        "resources/details/luxor/vok/vok2.jpg", 
                        "resources/details/luxor/vok/vok3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>مدينة الأموات السرية</h3>
                            <p>بعد تعرض أهرامات الدولة القديمة والوسطى للسرقة المستمرة، قرر فراعنة الدولة الحديثة تغيير خطتهم تماماً. اختاروا هذا الوادي الجاف والمنعزل في البر الغربي للأقصر، والذي تعلوه قمة جبلية تشبه الهرم الطبيعي (تسمى قمة القرن)، لنحت مقابرهم سراً في عمق الصخر، بعيداً عن أعين اللصوص، لحماية مومياواتهم وكنوزهم لرحلة الخلود الأبدية.</p>
                            
                            <h3>لعنة الفراعنة والكنوز المفقودة</h3>
                            <ul>
                                <li><strong>مقبرة توت عنخ آمون (KV62):</strong> المقبرة الملكية الوحيدة التي اكتُشفت بكامل كنوزها المذهلة عام 1922 على يد هوارد كارتر، وهو الاكتشاف الذي أطلق شرارة أسطورة "لعنة الفراعنة" في جميع أنحاء العالم.</li>
                                <li><strong>ألوان تتحدى الزمن:</strong> ما يخطف الأنفاس حقاً في مقابر الوادي (مثل مقبرة رمسيس السادس أو سيتي الأول) هو احتفاظ الجداريات والأسقف بألوانها الزاهية الأصلية، والتي تصور رحلة الملك المحفوفة بالمخاطر في العالم الآخر (كتاب الموتى).</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>التذكرة الأساسية للموقع تسمح لك بدخول 3 مقابر (يتم تدوير المقابر المفتوحة دورياً للحفاظ عليها من الرطوبة). يُنصح بشدة بزيارة الوادي في الصباح الباكر جداً لتجنب الحرارة الشديدة والزحام داخل المقابر الضيقة. إذا كنت من عشاق التاريخ، لا تتردد في شراء تذكرة إضافية لمقبرة توت عنخ آمون لرؤية المومياء الأصلية للملك الشاب والتي لا تزال ترقد بداخلها حتى اليوم.</p>
                        `,
                        en: `
                            <h3>The Secret City of the Dead</h3>
                            <p>After the pyramids of the Old and Middle Kingdoms were repeatedly robbed, the pharaohs of the New Kingdom changed their strategy completely. They chose this dry, secluded valley on Luxor's West Bank, overlooked by a natural pyramid-shaped mountain peak (Al-Qurn), to secretly carve their tombs deep into the rock, far from the eyes of grave robbers, to protect their mummies and treasures for eternity.</p>
                            
                            <h3>Pharaoh's Curse and Lost Treasures</h3>
                            <ul>
                                <li><strong>Tutankhamun's Tomb (KV62):</strong> The only royal tomb discovered with its breathtaking treasures completely intact in 1922 by Howard Carter. This monumental discovery is what sparked the worldwide legend of the "Pharaoh's Curse."</li>
                                <li><strong>Colors Defying Time:</strong> What truly takes your breath away in the valley's tombs (like those of Ramses VI or Seti I) is how the murals and ceilings have retained their vibrant original colors, vividly depicting the king's perilous journey through the underworld (The Book of the Dead).</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The standard entrance ticket allows you to visit 3 tombs (open tombs are rotated periodically to protect them from humidity). It is highly recommended to visit the valley very early in the morning to avoid the intense heat and crowds inside the narrow tombs. If you are a history buff, don't hesitate to buy the extra ticket for Tutankhamun's tomb to see the actual mummy of the boy king, which still rests there today.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "edfu", type: "history", icon: "fa-horse-head",
        coords: { x: 64, y: 71 },
        content: {
            ar: { title: "إدفو وكوم أمبو", desc: "معابد النيل الأسطورية." },
            en: { title: "Edfu & Kom Ombo", desc: "Legendary Nile Temples." }
        },
        sites: [
            { img: "Resources/UI/edfu.jpg", ar: { name: "معبد إدفو", desc: "أكمل وأفضل معابد مصر حفظاً، وهو المقر الرئيسي لعبادة الإله الصقر حورس." }, 
                en: { name: "Edfu Temple", desc: "The most complete and best-preserved temple in Egypt, serving as the main cult center for the falcon god Horus." },
                details: {
                    date: "237 ق.م (العصر البطلمي)",
                    gallery: [
                        "resources/details/aswan/edfu/edfu1.jpg", 
                        "resources/details/aswan/edfu/edfu2.jpg", 
                        "resources/details/aswan/edfu/edfu3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>أسطورة الصقر والخير والشر</h3>
                            <p>يعتبر معبد إدفو (معبد حورس) ثاني أكبر معابد مصر بعد الكرنك، ولكنه يتميز بأنه "أكمل" معبد مصري قديم وصل إلينا سليماً تقريباً. السر في ذلك أنه ظل مدفوناً تحت رمال الصحراء وأنقاض المنازل لقرون طويلة حتى تم اكتشافه. المعبد مكرس بالكامل للإله "حورس" (إله السماء ذو رأس الصقر)، وهو المكان الذي يعتقد المصريون القدماء أن المعركة الأسطورية الكبرى بين حورس (الخير) وعمه ست (الشر) قد دارت فيه.</p>
                            
                            <h3>صرح عملاق وتفاصيل مذهلة</h3>
                            <ul>
                                <li><strong>الصرح العظيم (البوابة):</strong> واجهة المعبد هي واحدة من أضخم وأجمل البوابات في مصر، ويصل ارتفاعها إلى 36 متراً، وعليها نقوش بارزة للملك البطلمي وهو يقدم الأسرى كقربان للآلهة.</li>
                                <li><strong>صقر الجرانيت الأسود:</strong> في فناء المعبد، يقف تمثال مذهل ومهيب لحورس على شكل صقر مصنوع من الجرانيت الأسود كقطعة واحدة، وهو من أشهر التماثيل التي يلتقط السياح الصور بجوارها.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>رحلة الوصول لمعبد إدفو هي متعة بحد ذاتها، حيث تقع أغلب الفنادق العائمة (الكروز) على النيل بعيداً قليلاً عن المعبد، وتكون وسيلة المواصلات الأشهر للوصول إليه هي ركوب "الحنطور" (عربة تجرها الخيول) في جولة سريعة وممتعة وسط شوارع مدينة إدفو. خصص وقتاً لتأمل نقوش الجدران الداخلية التي تعتبر "مكتبة حجرية" تسجل طقوس بناء المعابد والأساطير القديمة.</p>
                        `,
                        en: `
                            <h3>The Falcon's Legend of Good vs. Evil</h3>
                            <p>Edfu Temple (Temple of Horus) is the second-largest temple in Egypt after Karnak, but it is unique because it is the most "complete" and best-preserved ancient Egyptian temple to reach us intact. The secret lies in the fact that it was buried under desert sand and rubble for centuries until its discovery. The temple is entirely dedicated to "Horus" (the falcon-headed god of the sky), and ancient Egyptians believed this exact location was where the epic, mythical battle between Horus (good) and his uncle Set (evil) took place.</p>
                            
                            <h3>A Colossal Pylon and Stunning Details</h3>
                            <ul>
                                <li><strong>The Great Pylon (Gateway):</strong> The temple's facade is one of the most massive and beautiful gateways in Egypt, reaching 36 meters in height, featuring towering reliefs of the Ptolemaic king offering captives to the gods.</li>
                                <li><strong>The Black Granite Falcon:</strong> In the temple's courtyard stands a magnificent, imposing statue of Horus as a falcon, carved from a single piece of black granite. It is one of the most famous statues tourists love to photograph.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The journey to Edfu Temple is an experience in itself. Since most Nile cruise ships dock a bit far from the temple, the most popular way to reach it is by riding a "Hantour" (a horse-drawn carriage) for a quick and enjoyable tour through the streets of Edfu city. Take time to examine the interior wall reliefs, which act as a "stone library" recording temple-building rituals and ancient myths.</p>
                        `
                    }
                }
            }   ,
            { img: "Resources/UI/komombo.jpg", ar: { name: "معبد كوم أمبو", desc: "المعبد المزدوج الفريد المخصص لإلهين معاً (سوبك وحورس)، ويضم أقدم جدارية للأدوات الجراحية." }, 
                en: { name: "Kom Ombo Temple", desc: "The unique double temple dedicated to two gods (Sobek and Horus), featuring the oldest surgical tools relief." },
                details: {
                    date: "180 ق.م (العصر البطلمي)",
                    gallery: [
                        "resources/details/aswan/komombo/komombo1.jpg", 
                        "resources/details/aswan/komombo/komombo2.jpg", 
                        "resources/details/aswan/komombo/komombo3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>المعبد المزدوج: توازن المتناقضات</h3>
                            <p>يتميز معبد كوم أمبو بتصميم معماري لا مثيل له، فهو معبد "مزدوج" مقسوم طولياً إلى جزأين متطابقين تماماً؛ الجانب الأيمن مخصص للإله "سوبك" (التمساح رمز الشر والخصوبة)، والجانب الأيسر مخصص للإله "حورس الكبير" (الصقر رمز الخير). كل ممر، وبوابة، وقدس أقداس مكرر مرتين لاحترام الإلهين معاً في مكان واحد.</p>
                            
                            <h3>أسرار الطب والتماسيح</h3>
                            <ul>
                                <li><strong>أدوات الجراحة:</strong> يضم المعبد واحدة من أهم النقوش في تاريخ العلم، وهي جدارية تصور مجموعة دقيقة من الأدوات الجراحية (مشرط، ملقط، مقص) والتي تدل على براعة المصريين القدماء في الطب منذ آلاف السنين.</li>
                                <li><strong>متحف التماسيح:</strong> بجوار المعبد يوجد متحف فريد يعرض عشرات التماسيح المحنطة التي اكتُشفت في المنطقة، والتي كان يتم تربيتها وتقديسها داخل المعبد قديماً.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>كوم أمبو هو المعبد الأجمل للزيارة ليلاً أو وقت الغروب. عندما تُضاء الأعمدة باللون الذهبي وتنعكس أضواؤها على مياه النيل المجاورة للمعبد مباشرة، ستشعر بسحر لا يوصف. بعد الانتهاء من جولة المعبد، لا تفوت زيارة متحف التماسيح (مشمول في التذكرة) لمشاهدة عظمة التحنيط المصري عن قرب.</p>
                        `,
                        en: `
                            <h3>The Double Temple: Balancing Opposites</h3>
                            <p>Kom Ombo Temple features an unparalleled architectural design; it is a "Double Temple" divided longitudinally into two perfectly identical halves. The right side is dedicated to the god "Sobek" (the crocodile), while the left side is dedicated to "Haroeris" (Horus the Elder). Every corridor, gateway, and sanctuary is duplicated twice to honor both deities equally in one space.</p>
                            
                            <h3>Secrets of Medicine and Crocodiles</h3>
                            <ul>
                                <li><strong>Surgical Tools Relief:</strong> The temple houses one of the most important inscriptions in the history of science: a relief depicting a precise set of surgical instruments (scalpels, forceps, scissors), proving the ancient Egyptians' mastery of medicine thousands of years ago.</li>
                                <li><strong>The Crocodile Museum:</strong> Adjacent to the temple is a unique museum displaying dozens of mummified crocodiles discovered in the area, which were once raised and venerated within the temple complex.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Kom Ombo is perhaps the most beautiful temple to visit at night or during sunset. As the columns are lit in golden hues and their light reflects off the Nile waters directly adjacent to the temple, you will experience an indescribable magic. After your tour, don't miss the Crocodile Museum (included in your ticket) to see the mastery of Egyptian mummification up close.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "aswan", type: "history", icon: "fa-anchor",
        coords: { x: 80.0, y: 73.1 },
        content: {
            ar: { title: "أسوان", desc: "بلاد النوبة والمعابد الصخرية." },
            en: { title: "Aswan", desc: "Nubia & Rock Temples." }
        },
        sites: [
            { img: "Resources/UI/philae.jpg", ar: { name: "معبد فيلة", desc: "لؤلؤة النيل ومقر عبادة الإلهة إيزيس، يقع على جزيرة ساحرة ويعد آخر معاقل الكتابة الهيروغليفية." }, 
                en: { name: "Philae Temple", desc: "The Pearl of the Nile and the cult center of Isis, located on a magical island and the last stronghold of hieroglyphics." },
                details: {
                    date: "380 ق.م (العصر البطلمي)",
                    gallery: [
                        "resources/details/aswan/philae/philae1.jpg", 
                        "resources/details/aswan/philae/philae2.jpg", 
                        "resources/details/aswan/philae/philae3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>لؤلؤة النيل وقصة الوفاء</h3>
                            <p>يُعد معبد فيلة من أكثر المواقع الرومانسية والأثرية سحراً في مصر. المعبد مكرس للإلهة "إيزيس"، رمز الوفاء والأمومة في الأساطير المصرية القديمة. الجدير بالذكر أن المعبد الذي نزوره اليوم ليس في مكانه الأصلي؛ فقد تم نقله بالكامل حجرًا بحجر من جزيرة "فيلة" الغارقة إلى جزيرة "أجيلكيا" المجاورة في مشروع إنقاذ عالمي ضخم برعاية اليونسكو في السبعينيات.</p>
                            
                            <h3>آخر أسرار الهيروغليفية</h3>
                            <ul>
                                <li><strong>بيت الولادة (الماميزي):</strong> يضم المعبد مبنى مخصصاً للاحتفال بميلاد الإله "حورس"، وهو مزين بنقوش غاية في الدقة والجمال تصور طقوس الميلاد الإلهي.</li>
                                <li><strong>نهاية عصر:</strong> يشتهر معبد فيلة بأنه المكان الذي كُتبت فيه "آخر نقش هيروغليفي" في مصر عام 394 ميلادياً، قبل أن تختفي المعرفة بقراءتها لقرون طويلة حتى اكتشاف حجر رشيد.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>تبدأ المتعة قبل الوصول للمعبد، حيث يتعين عليك ركوب "فلوكة" أو قارب صغير للوصول إلى الجزيرة وسط مياه النيل الصافية. يُنصح بزيارته في الصباح الباكر للاستمتاع بانعكاس المعبد على المياه، أو ليلاً لحضور عرض "الصوت والضوء" الذي يحكي أسطورة إيزيس وأوزوريس بأسلوب درامي مبهر وسط أضواء الجزيرة الساحرة.</p>
                        `,
                        en: `
                            <h3>The Pearl of the Nile & A Tale of Devotion</h3>
                            <p>Philae Temple is one of the most romantic and enchanting archaeological sites in Egypt. Dedicated to the goddess "Isis," the symbol of devotion and motherhood in ancient Egyptian mythology. Remarkably, the temple we visit today is not in its original location; the entire complex was moved stone-by-stone from the submerged Philae Island to the nearby Agilkia Island in a massive UNESCO international rescue project during the 1970s.</p>
                            
                            <h3>The Last Secrets of Hieroglyphics</h3>
                            <ul>
                                <li><strong>The Birth House (Mammisi):</strong> The temple complex includes a building dedicated to celebrating the birth of the god "Horus," adorned with exquisite reliefs depicting divine birth rituals.</li>
                                <li><strong>The End of an Era:</strong> Philae is famous for being the site of the "last hieroglyphic inscription" ever carved in Egypt, dated to 394 AD, before the knowledge of reading them was lost for centuries until the Rosetta Stone discovery.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The fun begins even before you reach the temple, as you must take a small boat or "Felucca" to reach the island amidst the crystal-clear Nile waters. It is recommended to visit early in the morning to see the temple's reflection on the water, or at night for the "Sound and Light Show," which narrates the myth of Isis and Osiris in a dramatic and dazzling way among the island's lights.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/abusimbel.jpg", ar: { name: "معبد أبو سمبل", desc: "المعجزة الهندسية المنحوتة في الجبل، حيث تتعامد الشمس على وجه رمسيس الثاني مرتين كل عام." }, 
                en: { name: "Abu Simbel Temple", desc: "The engineering marvel carved into the mountain, where the sun aligns with Ramses II's face twice a year." },
                details: {
                    date: "1264 ق.م (الدولة الحديثة)",
                    gallery: [
                        "resources/details/aswan/abusimbel/abusimbel1.jpg", 
                        "resources/details/aswan/abusimbel/abusimbel2.jpg", 
                        "resources/details/aswan/abusimbel/abusimbel3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>المعجزة المنحوتة في قلب الجبل</h3>
                            <p>يعد معبد أبو سمبل من أعظم المواقع الأثرية في العالم، أمر بنحته الملك "رمسيس الثاني" في قلب الجبل ليكون شاهداً على قوته وعظمته. يتكون الموقع من معبدين: المعبد الكبير المخصص لرمسيس الثاني وتزين واجهته 4 تماثيل ضخمة له، والمعبد الصغير المخصص لزوجته المحبوبة "نفرتاري" في لفتة حب نادرة في ذلك العصر.</p>
                            
                            <h3>معجزة تعامد الشمس وإنقاذ القرن</h3>
                            <ul>
                                <li><strong>ظاهرة تعامد الشمس:</strong> في عبقرية فلكية فريدة، تدخل أشعة الشمس لعمق المعبد لتضيء وجه تمثال الملك رمسيس الثاني مرتين فقط في العام (22 فبراير و22 أكتوبر)، وهو ما يعتقد أنه يوم ميلاده ويوم تتويجه.</li>
                                <li><strong>ملحمة الإنقاذ:</strong> كاد المعبد أن يغرق تماماً تحت مياه بحيرة ناصر بعد بناء السد العالي، ولكن العالم تكاتف في عملية إنقاذ تاريخية لنقل المعبد بالكامل ورفعه لمستوى أعلى بـ 60 متراً، مع الحفاظ على نفس زاوية تعامد الشمس بدقة مذهلة.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>تقع أبو سمبل على بعد حوالي 280 كم جنوب أسوان، لذا تتطلب الرحلة الاستيقاظ مبكراً جداً (حوالي الساعة 3 صباحاً) للتحرك مع الأفواج السياحية بالأتوبيس أو الطيران. استغل الوقت في تأمل التفاصيل الدقيقة داخل المعبد والتي تحكي قصص معركة قادش، ولا تفوت التقاط صورة بانورامية للمعبدين مع بحيرة ناصر خلفهما، فالمشهد هناك لا يُنسى.</p>
                        `,
                        en: `
                            <h3>The Marvel Carved into the Mountain</h3>
                            <p>Abu Simbel is one of the most magnificent archaeological sites in the world, carved directly into a sandstone cliff by order of "Ramses II." The site consists of two temples: the Great Temple dedicated to Ramses II with its four colossal statues, and the Small Temple dedicated to his beloved wife, Queen "Nefertari"—a rare ancient gesture of royal love.</p>
                            
                            <h3>The Sun Alignment & The Rescue of the Century</h3>
                            <ul>
                                <li><strong>The Solar Phenomenon:</strong> In a feat of ancient astronomical precision, the sun's rays penetrate the temple's dark interior to illuminate the face of King Ramses II only twice a year (February 22nd and October 22nd), marking his birth and coronation days.</li>
                                <li><strong>The Epic Rescue:</strong> The temples were threatened by the rising waters of Lake Nasser after the construction of the High Dam. In a historic international effort, the entire complex was dismantled, moved, and reassembled 60 meters higher, maintaining the exact solar alignment with incredible accuracy.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Abu Simbel is located about 280 km south of Aswan, requiring a very early start (around 3 AM) by bus convoy or a short flight. Use your time to admire the intricate interior reliefs depicting the Battle of Kadesh. Be sure to take a panoramic photo of both temples with Lake Nasser in the background; it’s a view you will never forget.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/nubian.jpg", ar: { name: "القرية النوبية", desc: "ألوان مبهجة، بيوت من التراث النوبي الأصيل، وضيافة دافئة على ضفاف نيل أسوان الساحر." }, 
                en: { name: "The Nubian Village", desc: "Vibrant colors, authentic Nubian heritage houses, and warm hospitality on the banks of the enchanting Nile." },
                details: {
                    date: "1902 م (بداية الهجرات لبناء الخزان)",
                    gallery: [
                        "resources/details/aswan/nubianvillage/nubian1.jpg", 
                        "resources/details/aswan/nubianvillage/nubian2.jpg", 
                        "resources/details/aswan/nubianvillage/nubian3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>بلاد الذهب وضحكة النيل</h3>
                            <p>تعتبر القرية النوبية في منطقة "غرب سهيل" واحدة من أجمل بقاع أسوان. نشأت هذه القرية مع بدايات القرن الـ 20 أثناء بناء خزان أسوان القديم. تتميز البيوت النوبية بتصاميمها الهندسية الفريدة (القباب) التي تعمل كمكيف هواء طبيعي، وألوانها الزاهية المستوحاة من الطبيعة المحيطة، ونقوشها التي تحكي قصصاً من التراث النوبي العريق.</p>
                            
                            <h3>الحياة في بيوت النوبة</h3>
                            <ul>
                                <li><strong>التمساح الصديق:</strong> من أغرب وأشهر التقاليد في البيوت النوبية هو تربية التماسيح الصغيرة داخل أحواض في مدخل البيت، حيث يعتبرها أهل النوبة رمزاً للقوة والبركة ووسيلة لجذب السياح لالتقاط الصور.</li>
                                <li><strong>مشغولات يدوية وأعشاب:</strong> تشتهر القرية بأسواقها الملونة التي تبيع "الحنة النوبية"، والمشغولات اليدوية من الخوص والخرز، وأجود أنواع التوابل والكركديه الأسواني الشهير.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>الوصول للقرية عن طريق "الفلوكة" في مياه النيل هو جزء لا يتجزأ من المتعة. استمتع بشرب "الجبنة" (القهوة النوبية بالجنزبيل) في أحد البيوت المطلة على النيل، ولا تفوت فرصة تجربة رسم الحنة النوبية المتميزة. أفضل وقت للزيارة هو قبل الغروب لتشاهد انعكاس الألوان الزاهية للبيوت مع زرقة مياه النيل في مشهد يبعث على الراحة النفسية.</p>
                        `,
                        en: `
                            <h3>The Land of Gold & The Nile's Smile</h3>
                            <p>The Nubian Village in "Gharb Soheil" is one of Aswan's most beautiful spots. It originated in the early 20th century during the construction of the old Aswan Dam. Nubian houses are famous for their unique architectural domes that act as natural air conditioners, their vibrant colors inspired by nature, and intricate wall paintings that tell stories of ancient Nubian heritage.</p>
                            
                            <h3>Life Inside Nubian Homes</h3>
                            <ul>
                                <li><strong>The Friendly Crocodile:</strong> One of the most famous Nubian traditions is raising baby crocodiles in basins at the house entrance, considered a symbol of strength and a popular attraction for tourists to take photos.</li>
                                <li><strong>Handicrafts & Herbs:</strong> The village is known for its colorful markets selling Nubian henna, handmade wicker and bead crafts, and the finest spices and famous Aswan hibiscus.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Reaching the village by "Felucca" boat is an essential part of the experience. Enjoy a cup of "Gabana" (Nubian ginger coffee) in a riverside house and try the traditional Nubian henna art. The best time to visit is just before sunset to witness the vibrant house colors reflecting off the Nile's blue waters—a truly soul-soothing sight.</p>
                        `
                    }
                }
            }
        ]
    },
    // --- 6. RED SEA & SINAI ---
    {
        id: "hurghada", type: "sea", icon: "fa-fish",
        coords: { x: 75, y: 44 },
        content: {
            ar: { title: "الغردقة", desc: "عاصمة البحر الأحمر." },
            en: { title: "Hurghada", desc: "Red Sea Capital." }
        },
        sites: [
            { img: "Resources/UI/giftun.jpg", ar: { name: "جزيرة جفتون", desc: "مالديف البحر الأحمر، أول محمية طبيعية في المنطقة ووجهة عشاق الغوص والرمال البيضاء." }, 
                en: { name: "Giftun Island", desc: "The Maldives of the Red Sea, the first natural protectorate in the area and a destination for diving and white sand lovers." },
                details: {
                    date: "1995 م (إعلانها محمية طبيعية)",
                    gallery: [
                        "resources/details/hurghada/giftun/giftun1.jpg", 
                        "resources/details/hurghada/giftun/giftun2.jpg", 
                        "resources/details/hurghada/giftun/giftun3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>مالديف البحر الأحمر</h3>
                            <p>تعتبر جزيرة جفتون الكبرى أول محمية طبيعية يتم إعلانها في البحر الأحمر. الجزيرة مشهورة عالمياً بشواطئها ذات الرمال البيضاء الناعمة ومياهها الفيروزية الشفافة التي تسمح لك برؤية الأسماك الملونة حتى بدون معدات غوص. تضم الجزيرة شواطئ شهيرة مثل "المحمية" و"أورانج باي"، والتي تم تصميمها لتمنح الزوار تجربة استرخاء استوائية فريدة.</p>
                            
                            <h3>كنوز تحت الماء</h3>
                            <ul>
                                <li><strong>الحياة البحرية:</strong> تحيط بالجزيرة شعاب مرجانية خلابة تعتبر موطناً لأكثر من 196 نوعاً من المرجان، وتعتبر من أفضل نقاط الغوص و"السنوركلينج" في العالم، حيث يمكنك رؤية السلاحف البحرية والدلافين في بيئتها الطبيعية.</li>
                                <li><strong>التنوع البيولوجي:</strong> الجزيرة ليست مجرد شاطئ، بل هي محمية هامة للعديد من الطيور النادرة مثل "نورس عجمة" وصقر الغروب، مما يجعلها مكاناً مثالياً لمحبي الطبيعة الخام.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>رحلة جفتون تبدأ عادة بمركب سياحي من مرسى الغردقة. استعد لليوم بواقٍ من الشمس جيد لأن الانعكاس على الرمال البيضاء قوي جداً. أفضل وقت للاستمتاع بالجزيرة هو في الصباح الباكر قبل وصول بقية الأفواج السياحية. لا تنسَ اصطحاب كاميرا مقاومة للماء (GoPro) لتصوير الشعاب المرجانية والأسماك التي ستراها بمجرد نزولك للمياه.</p>
                        `,
                        en: `
                            <h3>The Maldives of the Red Sea</h3>
                            <p>Giftun Island is the first natural protectorate declared in the Red Sea. The island is globally renowned for its soft white sandy beaches and crystal-clear turquoise waters that allow you to see vibrant fish even without diving gear. It houses famous beach clubs like "Mahmya" and "Orange Bay," designed to provide visitors with a unique tropical relaxation experience.</p>
                            
                            <h3>Underwater Treasures</h3>
                            <ul>
                                <li><strong>Marine Life:</strong> The island is surrounded by breathtaking coral reefs home to over 196 species of coral. It is considered one of the world's top diving and snorkeling spots, where you can often spot sea turtles and dolphins in their natural habitat.</li>
                                <li><strong>Biodiversity:</strong> More than just a beach, the island is a vital sanctuary for rare birds such as the White-eyed Gull and the Sooty Falcon, making it a perfect spot for raw nature lovers.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The journey to Giftun usually starts with a boat trip from the Hurghada marina. Be prepared with high-quality sunscreen as the reflection off the white sand is very intense. The best time to enjoy the island is early morning before the tourist crowds arrive. Don't forget to bring a waterproof camera (GoPro) to capture the incredible coral reefs and fish you'll encounter the moment you step into the water.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "marsaalam", type: "sea", icon: "fa-globe-africa",
        coords: { x: 88, y: 60 },
        content: {
            ar: { title: "مرسى علم", desc: "المالديف المصرية." },
            en: { title: "Marsa Alam", desc: "Egypt's Maldives." }
        },
        sites: [
            { img: "Resources/UI/nayzak.jpg", ar: { name: "شاطئ النيزك", desc: "حمام سباحة طبيعي محفور في الصخر، تقول الأسطورة إنه تشكل نتيجة اصطدام نيزك بالأرض." }, 
                en: { name: "Nayzak Beach", desc: "A natural pool carved into the rock; legend has it that it was formed by a meteorite impact." },
                details: {
                    date: "تشكيل جيولوجي طبيعي",
                    gallery: [
                        "resources/details/marsaalam/nayzak/nayzak1.jpg", 
                        "resources/details/marsaalam/nayzak/nayzak2.jpg", 
                        "resources/details/marsaalam/nayzak/nayzak3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>أسطورة من السماء</h3>
                            <p>يقع شاطئ النيزك على بعد حوالي 14 كم جنوب مرسى علم. اكتسب شهرته العالمية من الأسطورة المحلية التي تقول إن نيزكاً ضرب هذا الساحل قديماً وحفر هذه الحفرة في التكوينات الصخرية. ورغم أن الجيولوجيين يرجحون أنه تشكل بفعل عوامل النحت الطبيعية للبحر، إلا أن الاسم والأسطورة منحهما سحراً خاصاً يجذب المغامرين من كل مكان.</p>
                            
                            <h3>حمام سباحة طبيعي في قلب البحر</h3>
                            <ul>
                                <li><strong>تصميم الطبيعة:</strong> الحفرة تأخذ شكلاً يشبه "العين" أو "القلب" من الأعلى، وهي محمية تماماً من أمواج البحر العالية بفضل الساتر الصخري المحيط بها، مما يجعل السباحة فيها تجربة آمنة وهادئة تماماً.</li>
                                <li><strong>حرارة مثالية:</strong> مياه النيزك متصلة بالبحر الأحمر عبر ممرات صخرية تحت الأرض، وهي دافئة في الشتاء ومنعشة في الصيف، ونقية لدرجة تجعلك ترى القاع بوضوح مذهل.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>النيزك هو جنة لهواة التصوير، خاصة باستخدام الطائرات بدون طيار (Drones) لإظهار شكله الفريد وسط الصخر. إذا كنت تنوي السباحة، يُفضل ارتداء حذاء البحر (Sea Shoes) لأن الصخور المحيطة به قد تكون حادة أو زلقة. أفضل وقت للزيارة هو الصباح الباكر للاستمتاع بالمكان في هدوء تام قبل وصول الرحلات السياحية.</p>
                        `,
                        en: `
                            <h3>A Legend from the Sky</h3>
                            <p>Located about 14 km south of Marsa Alam, Nayzak Beach earned its global fame from a local legend claiming a meteorite struck the coast long ago, carving this perfect hole into the rocky formations. While geologists suggest it was formed by natural sea erosion, the name and legend have given it a mystical charm that attracts adventurers from all over.</p>
                            
                            <h3>A Natural Pool in the Heart of the Sea</h3>
                            <ul>
                                <li><strong>Nature's Design:</strong> The pool takes the shape of an "eye" or a "heart" from above. It is fully protected from the high sea waves by its surrounding rocky barrier, making swimming there a safe and incredibly tranquil experience.</li>
                                <li><strong>Perfect Temperature:</strong> Connected to the Red Sea via underground rocky passages, the water is warm in winter and refreshing in summer. It is so crystal clear that you can see the seabed with astonishing clarity.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The Nayzak is a paradise for photography enthusiasts, especially for drone shots that capture its unique shape amidst the rocks. If you plan to swim, wearing sea shoes is highly recommended as the surrounding rocks can be sharp or slippery. The best time to visit is early morning to enjoy the serenity before the tour groups arrive.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "sharm", type: "sea", icon: "fa-umbrella-beach",
        coords: { x: 83, y: 39 },
        content: {
            ar: { title: "شرم الشيخ", desc: "مدينة السلام." },
            en: { title: "Sharm El Sheikh", desc: "City of Peace." }
        },
        sites: [
            { img: "Resources/UI/rasmo.jpg", ar: { name: "رأس محمد", desc: "أول محمية طبيعية في مصر، ملتقى خليجي السويس والعقبة، وواحدة من أفضل وجهات الغوص عالمياً." }, 
                en: { name: "Ras Mohammed", desc: "Egypt's first national park, the meeting point of Suez and Aqaba gulfs, and a top global diving destination." },
                details: {
                    date: "1983 م (إعلانها محمية طبيعية)",
                    gallery: [
                        "resources/details/sharm/rasmohammed/rasmohammed1.jpg", 
                        "resources/details/sharm/rasmohammed/rasmohammed2.jpg", 
                        "resources/details/sharm/rasmohammed/rasmohammed3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>متحف الأحياء المائية الطبيعي</h3>
                            <p>تقع محمية رأس محمد عند التقاء خليج العقبة وخليج السويس في أقصى جنوب شبه جزيرة سيناء. تُعد المحمية موطناً لأكثر من 1000 نوع من الأسماك و220 نوعاً من الشعاب المرجانية، وهي مقصد عالمي لعشاق الغوص والسنوركلينج. تتميز المنطقة بتنوع بيولوجي فريد يجمع بين الشعاب المرجانية الشاسعة والغابات الملحية (المانجروف) والكثبان الرملية والسهول الحصوية.</p>
                            
                            <h3>معالم طبيعية تخطف الأنفاس</h3>
                            <ul>
                                <li><strong>البحيرة المسحورة:</strong> بحيرة صغيرة تتغير ألوان مياهها سبع مرات يومياً حسب ضوء الشمس، وتعتبر مكاناً مثالياً للسباحة والاستجمام بعيداً عن صخب المدينة.</li>
                                <li><strong>شق الزلزال:</strong> شق عميق وضيق في الأرض نتج عن زلزال قديم، مليء بالمياه، ويُعد شاهداً على الحركات الجيولوجية للأرض في هذه المنطقة.</li>
                                <li><strong>أشجار المانجروف:</strong> هي أشجار نادرة تنمو في المياه المالحة ولها قدرة مذهلة على طرد الملح من أوراقها، وتعتبر بيئة هامة لتكاثر العديد من الكائنات البحرية والطيور.</li>
                                <li><strong>بوابة الله:</strong> بوابة ضخمة من الصخر الطبيعي تُعد المدخل الرئيسي للمحمية ومكاناً أيقونياً لالتقاط الصور التذكارية.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>رأس محمد هي المكان الذي ستشعر فيه بعظمة الطبيعة البكر. يُنصح بالتوجه إلى "مرسى غزلاني" أو "يولاندا ريف" للاستمتاع بأفضل تجارب الغوص والسنوركلينج، حيث يمكنك رؤية السلاحف البحرية وأسراب الأسماك الملونة بوضوح مذهل. لا تنسَ إحضار معدات السباحة الخاصة بك وكاميرا تصوير تحت الماء، وتذكر دائماً الحفاظ على نظافة المكان وعدم لمس الشعاب المرجانية لحمايتها.</p>
                        `,
                        en: `
                            <h3>A Natural Underwater Museum</h3>
                            <p>Ras Mohammed National Park is situated at the southern tip of the Sinai Peninsula, where the Gulf of Aqaba and the Gulf of Suez meet. Established as Egypt's first national park, it is a global haven for divers and snorkelers, hosting over 1,000 fish species and 220 coral varieties. The park features a unique biodiversity, including vast coral reefs, mangrove forests, sand dunes, and gravel plains.</p>
                            
                            <h3>Breathtaking Natural Landmarks</h3>
                            <ul>
                                <li><strong>The Magic Lake:</strong> A small lake whose waters change color seven times a day depending on the sunlight, making it a perfect spot for swimming and relaxation.</li>
                                <li><strong>The Earthquake Crack:</strong> A deep, narrow fissure in the ground caused by an ancient earthquake, filled with water and standing as a testament to the region's geological history.</li>
                                <li><strong>Mangrove Forests:</strong> Rare trees that thrive in saltwater and have the amazing ability to excrete salt through their leaves, providing a vital habitat for marine life and birds.</li>
                                <li><strong>Allah's Gate:</strong> A massive natural rock arch that serves as the iconic main entrance to the park and a popular spot for photography.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Ras Mohammed is where you can truly experience untouched nature. Head to "Marsa Ghozlani" or "Yolanda Reef" for the best snorkeling and diving experiences, where you can see sea turtles and vibrant schools of fish with incredible clarity. Don't forget to bring your swimming gear and an underwater camera, and always remember to keep the park clean and avoid touching the coral reefs to preserve them.</p>
                        `
                    }
                }
            },
        ]
    },
    {
        id: "dahab", type: "sea", icon: "fa-swimmer",
        coords: { x: 83.3, y: 31.8 },
        content: {
            ar: { title: "دهب", desc: "جنة الغواصين والبساطة." },
            en: { title: "Dahab", desc: "Divers' Paradise." }
        },
        sites: [
            { img: "Resources/UI/bluehole.jpg", ar: { name: "الثقب الأزرق", desc: "أعمق فجوة بحرية في البحر الأحمر، وجهة الغواصين العالمية المحفوفة بالمغامرة والأساطير." }, 
                en: { name: "Blue Hole", desc: "The deepest marine sinkhole in the Red Sea, a world-class diving destination filled with adventure and legends." },
                details: {
                    date: "ظاهرة جيولوجية طبيعية",
                    gallery: [
                        "resources/details/dahab/bluehole/bluehole1.jpg", 
                        "resources/details/dahab/bluehole/bluehole2.jpg", 
                        "resources/details/dahab/bluehole/bluehole3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>ثقب في قلب المرجان</h3>
                            <p>يقع الثقب الأزرق شمال مدينة دهب، وهو عبارة عن سديم أو بئر عميق داخل مياه البحر الأحمر يصل عمقه إلى حوالي 120 متراً. يحيط بهذا الثقب جدار من الشعاب المرجانية الساحرة، مما يخلق تبايناً مذهلاً بين لون المياه الفيروزية الضحلة واللون الأزرق العميق والداكن داخل الثقب نفسه، وهو ما يمنحه سحراً ورهبة لا تُنسى.</p>
                            
                            <h3>تحدي الغواصين و"القوس"</h3>
                            <ul>
                                <li><strong>مغامرة الغوص:</strong> يشتهر المكان عالمياً بكونه من أصعب مواقع الغوص، خاصة بسبب "القوس" (The Arch)، وهو نفق تحت الماء يربط الثقب بالبحر المفتوح على عمق 52 متراً، ويعد تحدياً كبيراً لا يجتازه إلا الغواصون المحترفون جداً.</li>
                                <li><strong>حياة بحرية غنية:</strong> بعيداً عن المخاطر، المنطقة المحيطة بالثقب في الأعماق الضحلة تعتبر جنة للسنوركلينج، حيث تسبح وسط آلاف الأسماك الملونة والشعاب المرجانية النادرة التي لم تمسها يد إنسان.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>حتى لو لم تكن غواصاً محترفاً، يمكنك الاستمتاع بـ "السنوركلينج" على حواف الثقب لمشاهدة الانحدار المفاجئ للقاع. عند زيارتك، ستجد لوحات تذكارية لغواصين من كل أنحاء العالم؛ لذا يُرجى احترام المكان واتباع تعليمات السلامة بصرامة. أفضل وقت للزيارة هو الصباح الباكر للاستمتاع بصفاء المياه قبل اشتداد الرياح، ولا تفوت الجلوس في الكافيهات البدوية البسيطة المطلة على الثقب مباشرة.</p>
                        `,
                        en: `
                            <h3>A Hole in the Heart of Coral</h3>
                            <p>Located north of Dahab, the Blue Hole is a deep submarine sinkhole reaching depths of about 120 meters. Surrounded by a stunning coral reef wall, it creates a magnificent contrast between shallow turquoise waters and the dark, deep blue of the hole itself, giving the site a mystical and awe-inspiring atmosphere.</p>
                            
                            <h3>The Divers' Challenge & "The Arch"</h3>
                            <ul>
                                <li><strong>Diving Adventure:</strong> Globally famous as one of the most challenging dive sites, particularly due to "The Arch"—an underwater tunnel connecting the hole to the open sea at a depth of 52 meters. It is a feat only attempted by highly experienced technical divers.</li>
                                <li><strong>Rich Marine Life:</strong> Beyond the thrill, the shallow areas surrounding the hole are a snorkeling paradise, where you can swim among thousands of vibrant fish and rare, untouched coral formations.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Even if you are not a professional diver, you can enjoy snorkeling along the edges to witness the dramatic drop-off. During your visit, you will notice memorial plaques for divers from around the world; please respect the site and follow safety regulations strictly. The best time to visit is early morning for crystal-clear water before the wind picks up, and don't miss relaxing in the simple Bedouin-style cafes overlooking the hole.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "saint", type: "nature", icon: "fa-mountain",
        coords: { x: 77, y: 29 },
        content: {
            ar: { title: "سانت كاترين", desc: "الجبال المقدسة." },
            en: { title: "St. Catherine", desc: "Sacred Mountains." }
        },
        sites: [
            { img: "Resources/UI/monastery.jpg", ar: { name: "دير سانت كاترين", desc: "أقدم دير مأهول في العالم، يضم الشجيرة المقدسة ومكتبة نادرة من المخطوطات خلف أسوار قلعته الحصينة." }, 
                en: { name: "Saint Catherine's Monastery", desc: "The oldest inhabited monastery in the world, featuring the Burning Bush and a rare library of manuscripts within its fortress walls." },
                details: {
                    date: "548 م (القرن الـ 6 الميلادي)",
                    gallery: [
                        "resources/details/sinai/st_catherine/st_catherine1.jpg", 
                        "resources/details/sinai/st_catherine/st_catherine2.jpg", 
                        "resources/details/sinai/st_catherine/st_catherine3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>ملتقى الأديان بقلب سيناء</h3>
                            <p>يعد دير سانت كاترين، الواقع عند سفح جبل حوريب (جبل موسى)، من أهم المعالم الروحية والتاريخية في العالم. بناه الإمبراطور البيزنطي جستنيان الأول في القرن السادس الميلادي ليحيط بالكنيسة التي بنتها القديسة هيلانة في موقع "العليقة الملتهبة". الدير مسجل كأحد مواقع التراث العالمي لليونسكو ويتميز بأسواره العالية التي تشبه القلاع العسكرية.</p>
                            
                            <h3>كنوز الدير التي لا تُقدر بثمن</h3>
                            <ul>
                                <li><strong>شجيرة العليقة:</strong> وفقاً للتقاليد الدينية، هي الشجيرة التي رأى عندها النبي موسى ناراً وكلمه الله عندها، وهي النوع الوحيد من هذا النبات الذي لا ينمو في أي مكان آخر في سيناء إلا داخل الدير.</li>
                                <li><strong>المكتبة التاريخية:</strong> تضم مكتبة الدير ثاني أكبر مجموعة من المخطوطات والكتب الدينية القديمة في العالم بعد مكتبة الفاتيكان، بلغات متعددة منها اليونانية، العربية، والسريانية.</li>
                                <li><strong>كنيسة التجلي والمسجد:</strong> يضم الدير "كنيسة التجلي" الغنية بالأيقونات البيزنطية، وفي مشهد فريد للتسامح، يجاورها مسجد صغير بُني في العصر الفاطمي لحماية الدير.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>رحلة الدير عادة ما ترتبط بتسلق جبل موسى ليلاً لمشاهدة الشروق ثم النزول لزيارة الدير عند افتتاحه في الصباح. يُغلق الدير أبوابه في أيام الجمعة والأحد والأعياد الدينية، لذا تأكد من موعد زيارتك. يجب مراعاة الملابس المحتشمة والهدوء التام داخل أسوار الدير، ولا تفوت رؤية "بئر موسى" وحديقة الدير الجميلة المليئة بأشجار الزيتون والعنب.</p>
                        `,
                        en: `
                            <h3>Meeting Point of Faiths in Sinai</h3>
                            <p>Saint Catherine's Monastery, located at the foot of Mount Horeb (Mount Moses), is one of the world's most significant spiritual and historical landmarks. Built by Byzantine Emperor Justinian I in the 6th century, it encloses the chapel built by Saint Helena at the site of the "Burning Bush." A UNESCO World Heritage site, the monastery is characterized by its high, fortress-like walls.</p>
                            
                            <h3>Priceless Treasures of the Monastery</h3>
                            <ul>
                                <li><strong>The Burning Bush:</strong> According to religious tradition, this is the bush where the Prophet Moses saw the flame and was addressed by God. It is the only plant of its kind that does not grow anywhere else in Sinai except within the monastery.</li>
                                <li><strong>The Historic Library:</strong> The monastery's library houses the world's second-largest collection of ancient manuscripts and codices after the Vatican Library, in languages including Greek, Arabic, and Syriac.</li>
                                <li><strong>The Transfiguration Church & Mosque:</strong> It contains the "Church of the Transfiguration," rich with Byzantine icons. In a unique display of tolerance, a small Fatimid-era mosque stands beside it, originally built to help protect the monastery.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>A visit to the monastery is often combined with climbing Mount Moses at night to witness the sunrise before descending to visit the monastery when it opens in the morning. Note that the monastery is closed to visitors on Fridays, Sundays, and religious holidays. Modest dress and silence are required within the walls. Don't miss seeing "Moses' Well" and the monastery's beautiful garden filled with olive and grape trees.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/mousa.jpg", ar: { name: "جبل موسى", desc: "جبل المناجاة المقدس، يرتفع 2285 متراً فوق سطح البحر، ويقدم أحد أجمل مشاهد شروق الشمس في العالم." }, 
                en: { name: "Mount Moses", desc: "The holy mountain of communication, rising 2285 meters above sea level, offering one of the world's most beautiful sunrises." },
                details: {
                    date: "تكون منذ ملايين السنين (صخور جرانيتية)",
                    gallery: [
                        "resources/details/sinai/mount_moses/mount1.jpg", 
                        "resources/details/sinai/mount_moses/mount2.jpg", 
                        "resources/details/sinai/mount_moses/mount3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>قمة التجلي والمناجاة</h3>
                            <p>يُعرف جبل موسى بـ "جبل الطور"، وهو الموقع الذي يعتقد أنه المكان الذي كلم فيه الله نبيه موسى وتلقى فيه الوصايا العشر. يبلغ ارتفاع الجبل حوالي 2285 متراً فوق مستوى سطح البحر، وتحيط به سلاسل جبلية شاهقة تجعل قمتة مكاناً مثالياً للتأمل وتجربة الهدوء المطلق وسط الطبيعة الصخرية القاسية لسيناء.</p>
                            
                            <h3>طرق التسلق ومعالم القمة</h3>
                            <ul>
                                <li><strong>طريق الجمال وطريق الرهبان:</strong> يمكن تسلق الجبل عبر طريقين؛ "طريق الجمال" وهو الأسهل والأكثر استخداماً، و"طريق الرهبان" المكون من 3750 درجة حجرية منحوتة في الصخر، وهو طريق أقصر لكنه أكثر مشقة.</li>
                                <li><strong>كنيسة ومسجد القمة:</strong> في أعلى الجبل، توجد كنيسة صغيرة مكرسة للثالوث المقدس، وبجوارها مسجد صغير، في مشهد يعكس قدسية هذا المكان لكل الأديان السماوية.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>تبدأ رحلة الصعود عادة في منتصف الليل (حوالي الساعة 2 صباحاً) لتصل إلى القمة قبل الشروق. يجب أن تكون مستعداً بملابس ثقيلة جداً لأن درجة الحرارة على القمة قد تصل إلى تحت الصفر حتى في الصيف. لا تنسَ اصطحاب كشاف إضاءة قوي وحذاء مريح للتسلق. ستجد في طريقك "كافيتريات" بدوية بسيطة تقدم الشاي والأغطية (البطاطين) للتدفئة، وهي جزء ممتع من تجربة الصعود.</p>
                        `,
                        en: `
                            <h3>The Peak of Transfiguration</h3>
                            <p>Mount Moses, also known as Mount Horeb, is believed to be the place where God spoke to the Prophet Moses and where he received the Ten Commandments. Rising approximately 2,285 meters above sea level, the mountain is surrounded by towering ranges that make its summit a perfect place for meditation and experiencing absolute silence amidst Sinai's rugged rocky nature.</p>
                            
                            <h3>Climbing Routes & Summit Landmarks</h3>
                            <ul>
                                <li><strong>Camel Path & Monk's Steps:</strong> The mountain can be climbed via two routes; the "Camel Path," which is easier and more common, or the "Monk's Steps," consisting of 3,750 stone steps carved into the rock—a shorter but much steeper and more challenging path.</li>
                                <li><strong>Summit Chapel & Mosque:</strong> At the very top, there is a small chapel dedicated to the Holy Trinity, and right next to it stands a small mosque, reflecting the sanctity of this site for all monotheistic faiths.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The climb usually begins at midnight (around 2 AM) to reach the summit before sunrise. Be prepared with very warm clothing, as temperatures at the top can drop below freezing even in summer. Don't forget a strong flashlight and comfortable hiking shoes. Along the way, you'll find simple Bedouin "cafeterias" offering tea and blankets for warmth—a charming part of the climbing experience.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "taba", type: "sea", icon: "fa-campground",
        coords: { x: 85, y: 28 },
        content: {
            ar: { title: "طابا ونويبع", desc: "مخيمات على البحر وقلعة صلاح الدين." },
            en: { title: "Taba & Nuweiba", desc: "Beach camps & Saladin Castle." }
        },
        sites: [
            { img: "Resources/UI/castle.jpg", ar: { name: "قلعة صلاح الدين (طابا)", desc: "حصن جزيرة فرعون المنيع، تحفة معمارية وسط مياه خليج العقبة لتأمين طرق الحجاج والتجارة." }, 
                en: { name: "Saladin Citadel (Taba)", desc: "The formidable fortress of Pharaoh's Island, an architectural masterpiece in the Gulf of Aqaba securing pilgrimage and trade routes." },
                details: {
                    date: "1170 م (القرن الـ 12 الميلادي)",
                    gallery: [
                        "resources/details/sinai/taba_citadel/citadel1.jpg", 
                        "resources/details/sinai/taba_citadel/citadel2.jpg", 
                        "resources/details/sinai/taba_citadel/citadel3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>حصن مائي بقلب خليج العقبة</h3>
                            <p>تقع قلعة صلاح الدين على "جزيرة فرعون"، وهي جزيرة صخرية تبعد حوالي 250 متراً عن شاطئ طابا. بناها السلطان الناصر صلاح الدين الأيوبي لتكون نقطة مراكبة وحماية لطرق الحجاج القادمين من مصر والمغرب العربي وتأمين طرق التجارة في خليج العقبة ضد هجمات الصليبيين.</p>
                            
                            <h3>هندسة دفاعية عبقرية</h3>
                            <ul>
                                <li><strong>تصميم الجزيرة:</strong> القلعة مقسمة إلى تحصينات شمالية وجنوبية، وتضم أسواراً وأبراجاً دفاعية، وغرفاً للجنود، ومخازن للغلال، وحتى صهاريج مياه ضخمة منحوتة في الصخر لضمان البقاء تحت الحصار.</li>
                                <li><strong>إطلالة الدول الأربع:</strong> من أعلى أسوار القلعة، يمكنك بوضوح رؤية حدود أربع دول تلتقي عند خليج العقبة (مصر، السعودية، الأردن، وفلسطين)، مما يعكس الأهمية الاستراتيجية القصوى لهذا الموقع.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>الوصول للقلعة يكون عبر قارب صغير يأخذك في جولة سريعة من شاطئ طابا إلى الجزيرة. المنطقة المحيطة بالجزيرة غنية جداً بالشعاب المرجانية، لذا يفضل استغلال الرحلة في ممارسة السنوركلينج بجوار القلعة. لا تنسَ التقاط صورة بانورامية للقلعة من الشاطئ وقت الغروب، حيث تبدو وكأنها سفينة حجرية عملاقة تطفو فوق مياه البحر.</p>
                        `,
                        en: `
                            <h3>A Water Fortress in the Heart of Aqaba</h3>
                            <p>Saladin's Citadel is located on "Pharaoh's Island," a rocky island about 250 meters off the coast of Taba. It was built by Sultan Saladin to serve as a strategic observation and protection point for pilgrims coming from Egypt and North Africa, and to secure trade routes in the Gulf of Aqaba against Crusader attacks.</p>
                            
                            <h3>Genius Defensive Engineering</h3>
                            <ul>
                                <li><strong>Island Layout:</strong> The fortress is divided into northern and southern fortifications, featuring defensive walls and towers, soldier quarters, granaries, and even massive water cisterns carved into the rock to ensure survival during sieges.</li>
                                <li><strong>Four-Country View:</strong> From the top of the citadel walls, you can clearly see the borders of four countries meeting at the Gulf of Aqaba (Egypt, Saudi Arabia, Jordan, and Palestine), reflecting the supreme strategic importance of this site.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Access to the citadel is via a short boat ride from the Taba coast to the island. The area surrounding the island is rich in coral reefs, so it is recommended to enjoy some snorkeling next to the fortress. Don't forget to take a panoramic photo of the citadel from the shore at sunset, when it looks like a giant stone ship floating on the sea.</p>
                        `
                    }
                }
            }
        ]
    },
    // --- 7. FAR WEST & NORTH ---
    {
        id: "siwa", type: "oasis", icon: "fa-leaf",
        coords: { x: 9.5, y: 28.6 },
        content: {
            ar: { title: "واحة سيوة", desc: "غروب الشمس والتراث الأمازيغي." },
            en: { title: "Siwa Oasis", desc: "Sunsets & Berber Heritage." }
        },
        sites: [
            { img: "Resources/UI/shali.jpg", ar: { name: "قلعة شالي", desc: "مدينة سيوة القديمة المبنية من 'الكرشيف'، متاهة من الطين والملح تحكي تاريخ الواحة الصامد." }, 
                en: { name: "Shali Fortress", desc: "The ancient city of Siwa built from 'Kershef,' a labyrinth of mud and salt telling the oasis's resilient history." },
                details: {
                    date: "1203 م (القرن الـ 13 الميلادي)",
                    gallery: [
                        "resources/details/siwa/shali/shali1.jpg", 
                        "resources/details/siwa/shali/shali2.jpg", 
                        "resources/details/siwa/shali/shali3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>مدينة من الملح والطين</h3>
                            <p>تعتبر قلعة شالي هي المركز القديم لواحة سيوة، وقد بُنيت بالكامل من مادة فريدة تسمى "الكرشيف"، وهي مزيج من الطين والملح المستخرج من البحيرات الملحية المجاورة. عندما يجف الكرشيف، يصبح بصلابة الصخر، مما جعل القلعة حصناً منيعاً استوطنه السيويون لقرون طويلة.</p>
                            
                            <h3>حصن الحماية والانهيار الغريب</h3>
                            <ul>
                                <li><strong>الحماية من الغزوات:</strong> بُنيت القلعة فوق تلة مرتفعة لتكون حصناً يحمي سكان الواحة من هجمات البدو والقبائل المعادية، وكانت المدينة عبارة عن متاهة من البيوت المتراصة والشوارع الضيقة جداً.</li>
                                <li><strong>كارثة أمطار 1926:</strong> ظلت القلعة مأهولة حتى عام 1926، عندما هطلت أمطار غزيرة غير معتادة على سيوة لمدة 3 أيام، مما أدى إلى ذوبان الملح في جدران الكرشيف وانهيار أجزاء كبيرة من البيوت، فاضطر السكان لتركها وبناء بيوتهم الجديدة حولها.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>أجمل تجربة في شالي هي صعود القمة وقت الغروب؛ من هناك يمكنك رؤية الواحة بالكامل بآلاف أشجار النخيل وبحيرات الملح المتلألئة في الأفق. القلعة حالياً خضعت لعمليات ترميم مذهلة أعادت لها هيبتها، لذا استعد للسير في ممراتها الضيقة والتقاط صور تعكس عبق التاريخ والجمال البدائي للمكان.</p>
                        `,
                        en: `
                            <h3>A City of Salt and Mud</h3>
                            <p>Shali Fortress is the ancient heart of Siwa Oasis, built entirely from a unique local material called "Kershef"—a mixture of mud and salt harvested from nearby salt lakes. Once dried, Kershef becomes as hard as stone, transforming the fortress into a resilient stronghold inhabited by Siwans for centuries.</p>
                            
                            <h3>Fortress of Protection and the Strange Collapse</h3>
                            <ul>
                                <li><strong>Defense against Raids:</strong> Built atop a high hill, the fortress served as a sanctuary for the oasis inhabitants against Bedouin raids. The city was a labyrinth of clustered houses and very narrow streets designed for defense.</li>
                                <li><strong>The 1926 Rain Disaster:</strong> Shali remained inhabited until 1926, when unusual heavy rains fell for three consecutive days. The rain literally melted the salt within the Kershef walls, causing houses to crumble and forcing residents to move and build new homes around the base of the hill.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The highlight of visiting Shali is climbing to the summit at sunset. From there, you can see the entire oasis with its thousands of palm trees and the shimmering salt lakes on the horizon. The fortress has recently undergone magnificent restoration work. Be prepared to wander through its narrow alleys and capture photos that reflect the deep history and primitive beauty of the site.</p>
                        `
                    }
                }
            },
            { img: "Resources/UI/salt.jpg", ar: { name: "بحيرات الملح", desc: "واحة فيروزية وسط الملح الأبيض الناصع، تمنحك تجربة طفو فريدة تشبه البحر الميت." }, 
                en: { name: "Salt Lakes", desc: "A turquoise oasis amidst dazzling white salt, offering a unique floating experience similar to the Dead Sea." },
                details: {
                    date: "تشكيلات جيولوجية طبيعية",
                    gallery: [
                        "resources/details/siwa/saltlakes/salt1.jpg", 
                        "resources/details/siwa/saltlakes/salt2.jpg", 
                        "resources/details/siwa/saltlakes/salt3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>سحر الفيروز في قلب الصحراء</h3>
                            <p>تعد بحيرات الملح في سيوة من أغرب وأجمل الظواهر الطبيعية في مصر. هي في الأصل مناجم لاستخراج الملح، لكن مع مرور الوقت امتلأت بالمياه الجوفية لتشكل بحيرات شديدة النقاء والجمال. الملح في سيوة يُعرف بجودته العالية ونقائه الذي يجعله يُصدر لكل دول العالم، ويستخدمه السيويون أيضاً في بناء بيوتهم (الكرشيف) وصناعة الأباجورات العلاجية.</p>
                            
                            <h3>تجربة الطفو وفوائد الملح</h3>
                            <ul>
                                <li><strong>الطفو بدون مجهود:</strong> بسبب كثافة الملح العالية جداً في هذه البحيرات، يمكنك الاستلقاء على ظهرك فوق المياة وستجد نفسك تطفو تلقائياً دون أي مجهود، تماماً مثل البحر الميت، مما يجعلها تجربة مريحة جداً للأعصاب.</li>
                                <li><strong>الاستشفاء الطبيعي:</strong> المياه المالحة في سيوة معروفة بفوائدها في تنظيف البشرة، والمساعدة في علاج بعض الأمراض الجلدية، وسحب الطاقة السلبية من الجسم، مما يجعلها مقصداً للسياحة العلاجية.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>المياه هناك شديدة الملوحة، لذا حاول ألا تصل المياه لعينيك لأنها ستسبب وخزاً قوياً. من الضروري جداً اصطحاب زجاجة "مياه عذبة" معك لتشطف جسمك فور خروجك من البحيرة، لأن الملح سيتصلب على جلدك ويتحول لطبقة بيضاء بمجرد أن يجف. أفضل وقت للزيارة هو قبل الغروب للاستمتاع بانعكاس السماء على مياه البحيرة الصافية.</p>
                        `,
                        en: `
                            <h3>Turquoise Magic in the Heart of the Desert</h3>
                            <p>The Salt Lakes of Siwa are among the most peculiar and beautiful natural phenomena in Egypt. Originally salt mining sites, they gradually filled with groundwater to form incredibly clear and stunning lakes. Siwan salt is globally renowned for its high quality and purity, exported worldwide and used by locals to build houses (Kershef) and craft therapeutic salt lamps.</p>
                            
                            <h3>Floating Experience & Health Benefits</h3>
                            <ul>
                                <li><strong>Effortless Floating:</strong> Due to the extreme salt density, you can lie on your back and float effortlessly on the surface, just like the Dead Sea. It is a profoundly relaxing and gravity-defying experience.</li>
                                <li><strong>Natural Healing:</strong> The saline waters are famous for their skin-cleansing properties, helping with certain skin conditions and drawing out negative energy from the body, making it a prime destination for therapeutic tourism.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>The water is exceptionally salty; be very careful not to get it in your eyes as it will sting significantly. It is essential to bring a bottle of "fresh water" to rinse off immediately after coming out, as the salt will harden into a white crust on your skin once it dries. The best time to visit is shortly before sunset to witness the sky's reflection on the crystal-clear water.</p>
                        `
                    }
                }
            }
        ]
    },
    {
        id: "matruh", type: "sea", icon: "fa-umbrella-beach",
        coords: { x: 28.4, y: 16.8 },
        content: {
            ar: { title: "مرسى مطروح", desc: "شواطئ المالديف المصرية." },
            en: { title: "Marsa Matruh", desc: "Egypt's Maldives." }
        },
        sites: [
            { img: "Resources/UI/ageeba.jpg", ar: { name: "شاطئ عجيبة", desc: "أيقونة مرسى مطروح، حيث تعانق الصخور المرتفعة مياه البحر الفيروزية في مشهد طبيعي مهيب." }, 
                en: { name: "Agiba Beach", desc: "The icon of Marsa Matrouh, where towering rocks embrace turquoise sea waters in a majestic natural scene." },
                details: {
                    date: "تشكيلات صخرية طبيعية",
                    gallery: [
                        "resources/details/matrouh/agiba/agiba1.jpg", 
                        "resources/details/matrouh/agiba/agiba2.jpg", 
                        "resources/details/matrouh/agiba/agiba3.jpg"
                    ],
                    story: {
                        ar: `
                            <h3>لوحة ربانية على ساحل المتوسط</h3>
                            <p>يقع شاطئ عجيبة على بعد حوالي 24 كم غرب مدينة مرسى مطروح. ما يميز هذا الشاطئ هو وقوعه أسفل هضبة مرتفعة، حيث نحتت الأمواج والرياح الصخور بأشكال غريبة ومدهشة، مما خلق ممرات طبيعية وكهوفاً صغيرة تطل مباشرة على البحر الذي تتدرج ألوانه هنا بين الأبيض والفيروزي والأزرق الداكن.</p>
                            
                            <h3>سحر الصخور والمياه</h3>
                            <ul>
                                <li><strong>الهضبة والسلالم:</strong> الوصول إلى الشاطئ يتطلب النزول عبر سلالم حجرية ممهدة وسط الصخور، مما يمنحك زوايا رؤية وتصوير خيالية للمكان من الأعلى قبل الوصول للمياه.</li>
                                <li><strong>الكهوف الطبيعية:</strong> يضم الشاطئ مجموعة من التجاويف الصخرية التي توفر ظلاً طبيعياً ومكاناً رائعاً للجلوس والاستمتاع بصوت ارتطام الأمواج بالصخور في تجربة استرخاء لا تُنسى.</li>
                            </ul>
                            
                            <h3>نصيحة للزيارة</h3>
                            <p>شاطئ عجيبة ليس مخصصاً للسباحة بشكل أساسي بسبب كثرة الصخور والأمواج القوية، لكنه المكان الأفضل في مصر لالتقاط الصور والاستجمام. أفضل وقت للزيارة هو وقت الغروب، حيث تنعكس ألوان السماء على الصخور والمياه في مشهد شاعري جداً. تأكد من ارتداء حذاء مريح للمشي فوق الصخور، ولا تنسَ تذوق "لب مطروح" الشهير أثناء جلوسك فوق الهضبة.</p>
                        `,
                        en: `
                            <h3>A Divine Canvas on the Mediterranean</h3>
                            <p>Agiba Beach is located about 24 km west of Marsa Matrouh. What makes this beach unique is its position at the foot of a high plateau, where waves and winds have carved the rocks into strange and amazing shapes, creating natural passages and small caves overlooking the sea. The water colors here transition beautifully from white to turquoise and deep blue.</p>
                            
                            <h3>The Magic of Rocks and Water</h3>
                            <ul>
                                <li><strong>The Plateau and Stairs:</strong> Reaching the beach requires descending through paved stone stairs amidst the rocks, offering surreal viewing and photography angles from above before reaching the water.</li>
                                <li><strong>Natural Caves:</strong> The beach features several rocky cavities providing natural shade and a wonderful spot to sit and enjoy the sound of waves crashing against the rocks in an unforgettable relaxing experience.</li>
                            </ul>
                            
                            <h3>Visit Tip</h3>
                            <p>Agiba Beach is not primarily for swimming due to its rocky nature and strong waves, but it is the best place in Egypt for photography and relaxation. The best time to visit is during sunset, when the sky's colors reflect on the rocks and water in a very poetic scene. Make sure to wear comfortable shoes for walking on the rocks, and don't forget to try the famous "Matrouh seeds" while sitting on the plateau.</p>
                        `
                    }
                }
            }
        ]
    }
];

// --- UI TRANSLATIONS ---
const uiTrans = {
    ar: { loading: "جاري تحميل الخريطة...", sites_title: "أماكن للزيارة", visit_now: " استكشف اكثر", reset_view: "العـوده", search: "بحث عن مدينة...", logo: "مصر القديمة", back: "الرئيـسيـه", filter_title:" تصنيـف", filter_all: "الكل", filter_ancient: "آثار مصر القديمة", filter_sea: "بحار وشواطئ", filter_nature: "طبيعة وواحات", filter_religious: "سياحة دينية", filter_delta: "مدن الدلتا" },
    en: { loading: "Loading Map...", sites_title: "Places to Visit", visit_now: "Book Tour", reset_view: "Back", search: "Search city...", logo: "Ancient Egypt", back: "Home", filter_title:" Filter", filter_all: "All", filter_ancient: "Ancient Egypt", filter_sea: "Sea & Beaches", filter_nature: "Nature & Oases", filter_religious: "Religious Tourism", filter_delta: "Delta & Canal" }
};

// --- FILTER GROUPS (Corrected & Verified) ---
const filterGroups = {
    ancient: ['cairo', 'luxor', 'aswan', 'qena', 'sohag', 'minya', 'edfu', 'rashid'],
    sea: ['alexandria', 'hurghada', 'sharm', 'marsaalam', 'dahab', 'taba', 'matruh', 'portsaid', 'suez'],
    nature: ['fayoum', 'siwa', 'whitedesert', 'saint', 'ismailia', 'mansoura'],
    religious: ['cairo', 'saint', 'sohag', 'assiut', 'rashid'],
    delta: ['mansoura', 'portsaid', 'ismailia', 'suez', 'rashid']
};


/* =========================================
   2. DOM & SYSTEM CONTROLLERS
   ========================================= */
// --- System State ---
let currentLang = localStorage.getItem('preferredLang') || 'ar';
let activeCityId = null;

// --- DOM Element Cache ---
const preloader = document.getElementById('preloader');
const mapLayer = document.getElementById('mapLayer');
const pinsContainer = document.getElementById('pinsContainer');
const cityPanel = document.getElementById('cityPanel');
const sitesList = document.getElementById('sitesList');
const resetZoomBtn = document.getElementById('resetZoom');
const cpTitle = document.getElementById('cpTitle');
const cpDesc = document.getElementById('cpDesc');
const sitesTitle = document.querySelector('h3[data-lang="sites_title"]');
const siteModal = document.getElementById('siteModal');
const smTitle = document.getElementById('smTitle');
const smDesc = document.getElementById('smDesc');
const smImage = document.getElementById('smImage');
const modalBtn = document.querySelector('.modal-btn');
const closeModalBtn = document.querySelector('.close-modal');
const langAr = document.getElementById('lang-ar');
const langEn = document.getElementById('lang-en');
const filterBtns = document.querySelectorAll('.filter-btn');
const navFilterBtn = document.getElementById('navFilterBtn');
const navFilterMenu = document.getElementById('navFilterMenu');


/* =========================================
   3. INITIALIZATION
   ========================================= */
window.addEventListener('load', () => {
    setLang(currentLang); // Set initial language and render UI text + pins
    
    setTimeout(() => {
        if (preloader) preloader.style.display = 'none';
    }, 1000);

    setupEventListeners();
});

function setupEventListeners() {
    if (resetZoomBtn) {
        resetZoomBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resetMap();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => siteModal.classList.remove('active'));
    }

    if (langEn) langEn.addEventListener('click', () => setLang('en'));
    if (langAr) langAr.addEventListener('click', () => setLang('ar'));

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            applyFilter(filter);

            if (navFilterMenu) navFilterMenu.classList.remove('open');
            if (navFilterBtn) navFilterBtn.classList.remove('active');
        });
    });

    if (navFilterBtn) {
        navFilterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navFilterMenu) navFilterMenu.classList.toggle('open');
            navFilterBtn.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (navFilterMenu && navFilterMenu.classList.contains('open')) {
            if (!navFilterMenu.contains(e.target) && e.target !== navFilterBtn) {
                navFilterMenu.classList.remove('open');
                if (navFilterBtn) navFilterBtn.classList.remove('active');
            }
        }
    });
}


/* =========================================
   4. CORE MAP FUNCTIONS
   ========================================= */
function renderPins() {
    if (!pinsContainer) return;
    pinsContainer.innerHTML = '';

    mapData.forEach(city => {
        const pin = document.createElement('div');
        pin.className = 'map-pin';
        pin.setAttribute('data-id', city.id);
        pin.setAttribute('data-type', city.type);

        pin.style.left = city.coords.x + '%';
        pin.style.top = city.coords.y + '%';

        const title = currentLang === 'ar' ? city.content.ar.title : city.content.en.title;
        pin.innerHTML = `
            <div class="pin-pulse"></div>
            <div class="pin-icon"><i class="fas ${city.icon}"></i></div>
            <div class="pin-label">${title}</div>
        `;

        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            zoomToCity(city);
        });

        if (activeCityId === city.id) pin.classList.add('active');
        pinsContainer.appendChild(pin);
    });
}

function zoomToCity(city) {
    if (!mapLayer) return;
    activeCityId = city.id;
    
    const currentWidth = mapLayer.offsetWidth;
    const currentHeight = mapLayer.offsetHeight;
    
    const cityPixelX = (city.coords.x / 100) * currentWidth;
    const cityPixelY = (city.coords.y / 100) * currentHeight;
    
    const centerX = currentWidth / 2;
    const centerY = currentHeight / 2;
    
    const moveX = centerX - cityPixelX;
    const moveY = centerY - cityPixelY;
    
    const scale = 2.5;
    mapLayer.style.transform = `translate(${moveX * scale}px, ${moveY * scale}px) scale(${scale})`;
    
    document.querySelectorAll('.map-pin').forEach(p => p.classList.remove('active'));
    const activePin = document.querySelector(`.map-pin[data-id="${city.id}"]`);
    if (activePin) activePin.classList.add('active');

    openCityPanel(city);
}

function resetMap() {
    activeCityId = null;
    if (mapLayer) mapLayer.style.transform = `translate(0px, 0px) scale(1)`;
    if (cityPanel) cityPanel.classList.remove('open');
    document.querySelectorAll('.map-pin').forEach(p => p.classList.remove('active'));
}


/* =========================================
   5. UI PANELS & MODALS
   ========================================= */
function openCityPanel(city) {
    if (!cityPanel) return;
    const content = currentLang === 'ar' ? city.content.ar : city.content.en;
    
    if (cpTitle) cpTitle.innerText = content.title;
    if (cpDesc) cpDesc.innerText = content.desc;
    if (sitesTitle) sitesTitle.innerText = uiTrans[currentLang].sites_title;

   if (sitesList) {
        sitesList.innerHTML = '';
        // أضفنا index هنا لمعرفة ترتيب المكان في المصفوفة
        city.sites.forEach((site, index) => {
            const sData = currentLang === 'ar' ? site.ar : site.en;
            const item = document.createElement('div');
            item.className = 'site-item';
            item.innerHTML = `<span>${sData.name}</span> <i class="fas fa-chevron-left"></i>`;
            
            // قمنا بتمرير site و city.id و index للدالة
            item.addEventListener('click', () => openSiteModal(site, city.id, index)); 
            
            sitesList.appendChild(item);
        });
    }
    cityPanel.classList.add('open');
}

function openSiteModal(site, cityId, siteIndex) {
    if (!siteModal) return;
    const sData = currentLang === 'ar' ? site.ar : site.en;
    
    if (smTitle) smTitle.innerText = sData.name;
    if (smDesc) smDesc.innerText = sData.desc;
    if (smImage) smImage.src = site.img;
    
    if (modalBtn) {
        modalBtn.innerText = uiTrans[currentLang].visit_now;
        // هنا السحر: نقوم بتغيير رابط الزر ليأخذك لصفحة التفاصيل مع البيانات الصحيحة
        modalBtn.href = `detail.html?city=${cityId}&site=${siteIndex}`;
    }
    
    siteModal.classList.add('active');
}

/* =========================================
   6. LANGUAGE & FILTERING
   ========================================= */
function setLang(lang) {
    localStorage.setItem('preferredLang', lang);
    currentLang = lang;

    document.body.className = lang === 'en' ? 'english-mode' : '';
    document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    const nav = document.querySelector('nav');
    if (nav) nav.setAttribute('dir', 'ltr');
    
    if (lang === 'en') {
        if (langEn) langEn.classList.add('active');
        if (langAr) langAr.classList.remove('active');
    } else {
        if (langAr) langAr.classList.add('active');
        if (langEn) langEn.classList.remove('active');
    }

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if(uiTrans[lang][key]) el.innerText = uiTrans[lang][key];
    });
    
    renderPins();
    if (activeCityId) {
        const city = mapData.find(c => c.id === activeCityId);
        if(city) openCityPanel(city);
    }
}

function applyFilter(filter) {
    document.querySelectorAll('.map-pin').forEach(pin => {
        const cityId = pin.getAttribute('data-id');
        const isVisible = filter === 'all' || (filterGroups[filter] && filterGroups[filter].includes(cityId));

        if (isVisible) {
            pin.style.opacity = '1';
            pin.style.transform = 'translate(-50%, -50%) scale(1)';
            pin.style.pointerEvents = 'all';
        } else {
            pin.style.opacity = '0.1';
            pin.style.transform = 'translate(-50%, -50%) scale(0.5)';
            pin.style.pointerEvents = 'none';
        }
    });
}


/* =========================================
   7. DECORATIVE EFFECTS
   ========================================= */
// --- Golden Sand Cursor ---
const cursorContainer = document.createElement('div');
cursorContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;';
document.body.appendChild(cursorContainer);

document.addEventListener('mousemove', function(e) {
    const sand = document.createElement('div');
    sand.style.cssText = `position: absolute; left: ${e.clientX}px; top: ${e.clientY}px; width: ${Math.random() * 4 + 2}px; height: ${sand.style.width}; background: #D4AF37; border-radius: 50%; box-shadow: 0 0 6px #D4AF37; transition: all 1s ease;`;
    cursorContainer.appendChild(sand);
    setTimeout(() => {
        sand.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 30 + 30}px)`;
        sand.style.opacity = '0';
    }, 10);
    setTimeout(() => { sand.remove(); }, 1000);
});

// --- Parallax Background Effect ---
document.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.bg-container');
    const grid = document.querySelector('.tech-grid');
    if (!bg) return;
    
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    bg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
    
    if (grid) {
        grid.style.transform = `translateX(${x * 2}px) translateY(${y * 2}px)`;
    }
});
