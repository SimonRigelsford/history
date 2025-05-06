// app.js

const quizzes = {
  "Movers and Shakers": [
    { q: "What is a “significant” person?", a: ["A person who is very funny", "A person who is important and made changes", "A person who is good at maths", "A person who owns a shop"], correct: 1 },
    { q: "What did Joseph Lister help stop in hospitals?", a: ["People getting bored", "Long waits", "Infections", "Loud noises"], correct: 2 },
    { q: "Who was the first person to walk on the Moon?", a: ["Henry VIII", "Neil Armstrong", "Elon Musk", "Christopher Columbus"], correct: 1 },
    { q: "What kind of person is an activist?", a: ["A person who builds houses", "A person who works in a bank", "A person who wants to help people or the planet", "A person who sells things"], correct: 2 },
    { q: "What did Mary Anning study?", a: ["Space", "Fossils", "Stars", "Plants"], correct: 1 },
    { q: "What did Emmeline Pankhurst stand up for?", a: ["Cars", "Shops", "Animals", "Women’s rights"], correct: 3 },
    { q: "Who was Rosa Parks?", a: ["A queen of England", "A woman who wanted equal rights for black people", "A famous singer", "A doctor"], correct: 1 },
    { q: "What did Henry VIII do in 1534?", a: ["Discovered a planet", "Wrote a book", "Formed the Church of England", "Flew a plane"], correct: 2 },
    { q: "Who discovered the Americas in 1492?", a: ["Rosa Parks", "Elon Musk", "Christopher Columbus", "Vincent van Gogh"], correct: 2 },
    { q: "What did Vincent van Gogh do?", a: ["Wrote science books", "Painted in a new style", "Wrote poems", "Built boats"], correct: 1 },
    { q: "What is a memorial?", a: ["A type of food", "A pet", "A way to remember someone important", "A magic trick"], correct: 2 },
    { q: "What is a statue?", a: ["A stone person to remember someone", "A type of toy", "A long road", "A tall hat"], correct: 0 },
    { q: "What does “discover” mean?", a: ["To hide something", "To break something", "To see or find something first", "To clean something"], correct: 2 },
    { q: "What does a scientist do?", a: ["Bakes cakes", "Discovers or invents things", "Paints pictures", "Sings songs"], correct: 1 },
    { q: "What is a plaque?", a: ["A shiny coin", "A kind of chair", "A flat stone with writing", "A basket"], correct: 2 },
    { q: "What did JK Rowling write?", a: ["Harry Potter books", "Science experiments", "Recipes", "Maps"], correct: 0 },
    { q: "What is a decade?", a: ["5 years", "10 years", "20 years", "100 years"], correct: 1 },
    { q: "What did Elon Musk try to build?", a: ["A time machine", "A rocket to go to Mars", "A giant boat", "A pyramid"], correct: 1 },
    { q: "What does a monarch do?", a: ["Sells books", "Rules a kingdom", "Plays football", "Bakes cakes"], correct: 1 },
    { q: "What kind of person is Greta Thunberg?", a: ["A queen", "A musician", "A climate change activist", "A tennis player"], correct: 2 }
  ],

  "Magnificent Monarchs": [
    { q: "What is a monarch?", a: ["A builder", "A king or queen", "A soldier", "A shopkeeper"], correct: 1 },
    { q: "What is a monarchy?", a: ["A country with no rules", "A country ruled by a king or queen", "A type of castle", "A party"], correct: 1 },
    { q: "Who is the monarch now?", a: ["Queen Elizabeth II", "King Charles III", "Queen Victoria", "King Alfred"], correct: 1 },
    { q: "What did Elizabeth II do for 70 years?", a: ["Go on holiday", "Work in a hospital", "Be queen and lead the Commonwealth", "Write books"], correct: 2 },
    { q: "Who reigned the longest before Elizabeth II?", a: ["Queen Victoria", "Queen Elizabeth I", "King Charles I", "King William"], correct: 0 },
    { q: "Where does the royal family live in London?", a: ["Buckingham Palace", "Tower Bridge", "Big Ben", "Parliament"], correct: 0 },
    { q: "What was William the Conqueror famous for?", a: ["Flying a plane", "Building castles and winning the Battle of Hastings", "Riding a bicycle", "Painting pictures"], correct: 1 },
    { q: "What kind of power did William the Conqueror have?", a: ["Tiny power", "Team power", "Absolute power", "Electric power"], correct: 2 },
    { q: "Who created the Church of England?", a: ["Elizabeth II", "Henry VIII", "Queen Victoria", "Charles I"], correct: 1 },
    { q: "How many times did Henry VIII marry?", a: ["One", "Two", "Six", "Ten"], correct: 2 },
    { q: "What did Queen Victoria support?", a: ["New toys", "New technologies and charities", "Sports and sweets", "Only music"], correct: 1 },
    { q: "Who defeated the Spanish Armada?", a: ["Queen Victoria", "Henry VIII", "Elizabeth I", "Alfred the Great"], correct: 2 },
    { q: "What was Elizabeth I known for?", a: ["Being quiet", "Being brave and ruling alone", "Having many pets", "Reading stories"], correct: 1 },
    { q: "Who united English kingdoms and created schools?", a: ["William the Conqueror", "Elizabeth II", "Alfred the Great", "Charles I"], correct: 2 },
    { q: "What is a timeline used for?", a: ["Telling jokes", "Showing events in order", "Writing letters", "Planning holidays"], correct: 1 },
    { q: "What is the name of Queen Victoria’s husband?", a: ["Charles", "William", "George", "Albert"], correct: 3 },
    { q: "What is a royal portrait?", a: ["A story", "A photo of a castle", "A picture that shows what a monarch is like", "A picture of food"], correct: 2 },
    { q: "What is a parliament?", a: ["A school", "A shop", "A group that makes laws", "A palace"], correct: 2 },
    { q: "What does it mean if someone is 'head of state'?", a: ["They are in charge of a classroom", "They represent the country", "They build houses", "They sell newspapers"], correct: 1 },
    { q: "What does a crown show?", a: ["You are rich", "You are tall", "You are royal and powerful", "You like gold"], correct: 2 }
  ],
  "Through the Ages": [
    { q: "What is prehistory?", a: ["A type of cave painting", "The time before people learned to talk", "The time before written records", "A story told by grandparents"], correct: 2 },
    { q: "What are the three main prehistoric ages called?", a: ["Old Age, Middle Age, New Age", "Stone Age, Bronze Age, Iron Age", "Cold Age, Fire Age, Water Age", "Cave Age, Stick Age, Rock Age"], correct: 1 },
    { q: "What is the main difference between the three ages?", a: ["The shape of houses", "The kind of food people ate", "The material used to make tools", "The colour of the land"], correct: 2 },
    { q: "What were tools made of in the Stone Age?", a: ["Metal", "Plastic", "Stone, wood and bone", "Clay"], correct: 2 },
    { q: "What were people in the Stone Age called?", a: ["Knight-gatherers", "Hunter-gatherers", "Builder-farmers", "Tool-makers"], correct: 1 },
    { q: "What were roundhouses?", a: ["A type of fort", "Houses shaped like circles", "Shops in the Bronze Age", "Big castles"], correct: 1 },
    { q: "Where did Iron Age people live?", a: ["In caves", "In castles", "In hillforts", "On boats"], correct: 2 },
    { q: "What is a hillfort?", a: ["A hill for planting trees", "A wall built on water", "A village on a hill with fences and ditches", "A road across the hills"], correct: 2 },
    { q: "What is a torc?", a: ["A round piece of bread", "A special kind of shield", "A necklace made of metal", "A toy from the Bronze Age"], correct: 2 },
    { q: "What was used as an offering to the gods?", a: ["Votive offering", "Bell offering", "Metal shield", "Sunstone"], correct: 0 },
    { q: "What do archaeologists study?", a: ["Animals only", "Stories from books", "Ancient objects and places", "Trees and rivers"], correct: 2 },
    { q: "What were bronze tools made from?", a: ["Gold and wood", "Tin and copper", "Stone and bone", "Iron and water"], correct: 1 },
    { q: "Who brought metalworking to Britain?", a: ["The Romans", "The Celts", "The Beaker folk", "The Vikings"], correct: 2 },
    { q: "What did Iron Age people use for farming?", a: ["Wooden tools", "Bronze only", "Iron tools", "Their hands"], correct: 2 },
    { q: "What was the name of the gold neck ring from the Iron Age?", a: ["Mold cape", "Battersea shield", "Snettisham Great torc", "Stonehenge ring"], correct: 2 },
    { q: "Where is Stonehenge?", a: ["Scotland", "London", "Wiltshire", "Ireland"], correct: 2 },
    { q: "What was found in the river Thames?", a: ["A stone circle", "The Amesbury Archer", "The Battersea shield", "A gold necklace"], correct: 2 },
    { q: "What is Skara Brae?", a: ["A type of spear", "A Neolithic stone village in Scotland", "A river used for farming", "A Bronze Age tool"], correct: 1 },
    { q: "When did the Romans invade Britain?", a: ["AD 43", "500 BC", "1000 BC", "AD 1000"], correct: 0 },
    { q: "What is a sacrifice?", a: ["A type of ancient food", "A game from the Iron Age", "An animal or person given to the gods", "A big festival"], correct: 2 }
  ],

  "Ancient Civilisations": [
    { q: "What is a civilisation?", a: ["A group of animals", "A developed society with cities, inventions and leadership", "A type of farming tool", "A building made of mud"], correct: 1 },
    { q: "What is the Fertile Crescent?", a: ["A river in Egypt", "A type of crop", "An area where the first civilisations began", "A mountain in Asia"], correct: 2 },
    { q: "Which civilisation came first?", a: ["Ancient Egypt", "Indus Valley", "Ancient Sumer", "Ancient Greece"], correct: 2 },
    { q: "What did early civilisations build near rivers?", a: ["Roads", "Cities and farms", "Mountains", "Ziggurats only"], correct: 1 },
    { q: "What were homes in ancient Sumer made from?", a: ["Wood", "Stone", "Mud bricks", "Metal"], correct: 2 },
    { q: "What did the Sumerians invent to help with farming?", a: ["Rulers", "Plough", "Candles", "Baskets"], correct: 1 },
    { q: "What is cuneiform?", a: ["A kind of food", "A type of tool", "The writing system invented by the Sumerians", "A leader of Egypt"], correct: 2 },
    { q: "Who ruled ancient Egypt?", a: ["Kings", "Pharaohs", "Scribes", "Queens only"], correct: 1 },
    { q: "What is flax used for in ancient Egypt?", a: ["To build pyramids", "To feed animals", "To make linen for clothing", "To paint walls"], correct: 2 },
    { q: "What was a shaduf used for?", a: ["Fighting enemies", "Measuring time", "Lifting water from rivers", "Writing on paper"], correct: 2 },
    { q: "Which famous pharaoh's tomb was discovered in 1922?", a: ["Akhenaten", "Ramses", "Tutankhamun", "Cleopatra"], correct: 2 },
    { q: "What were Indus Valley homes often built with?", a: ["Wood and hay", "Mud bricks", "Bamboo", "Stones and leaves"], correct: 1 },
    { q: "What is special about Indus Valley cities like Mohenjo-daro?", a: ["They were built under water", "They were very small", "They had planned streets and toilets", "They had no houses"], correct: 2 },
    { q: "What do we know about rulers in the Indus Valley?", a: ["Pharaohs ruled all of it", "They had kings in every city", "Historians are not sure how it was ruled", "Queen Cleopatra ruled it"], correct: 2 },
    { q: "What crop was grown in all three civilisations?", a: ["Olives", "Rice", "Wheat", "Apples"], correct: 2 },
    { q: "What did ancient civilisations use canals for?", a: ["Keeping fish as pets", "Playing games", "Irrigation and transport", "Making paper"], correct: 2 },
    { q: "What was a ziggurat?", a: ["A Sumerian temple tower", "A kind of fruit", "A tool for writing", "A game played by children"], correct: 0 },
    { q: "What was papyrus used for in ancient Egypt?", a: ["Food", "Weapons", "Making paper", "Building homes"], correct: 2 },
    { q: "What game piece did the Indus Valley people invent?", a: ["Dominoes", "Dice", "Marbles", "Chess"], correct: 1 },
    { q: "Which civilisation had flushing toilets and drains?", a: ["Ancient Egypt", "Ancient Sumer", "Indus Valley", "Roman Empire"], correct: 2 }
  ],
  "Dynamic Dynasties": [
    { q: "What is a dynasty?", a: ["A group of soldiers", "A kind of Chinese house", "A family that rules for a long time", "A type of government official"], correct: 2 },
    { q: "Which dynasty is the earliest with recorded history in China?", a: ["Qin", "Zhou", "Shang", "Han"], correct: 2 },
    { q: "What was the Shang Dynasty especially known for?", a: ["Making paper", "Building pyramids", "Jade carving, bronze work and silk", "Painting murals"], correct: 2 },
    { q: "What were oracle bones used for?", a: ["Writing laws", "Making jewellery", "Asking questions to the gods", "Telling stories"], correct: 2 },
    { q: "What is jade made from?", a: ["Sand", "Ice", "Nephrite", "Bronze"], correct: 2 },
    { q: "What was silk made from?", a: ["Cotton", "Bamboo", "Animal fur", "Threads from silkworms"], correct: 3 },
    { q: "Who was the king of the gods in Shang religion?", a: ["Di Xin", "Shangdi", "Confucius", "Zhou"], correct: 1 },
    { q: "What did people believe happened after death?", a: ["Nothing at all", "The soul disappeared", "The soul lived on and needed objects in the afterlife", "They became stars"], correct: 2 },
    { q: "What was the capital city of the Shang Dynasty called?", a: ["Yinxu (Yin ruins)", "Beijing", "Xian", "Great Wall"], correct: 0 },
    { q: "What helped prove the Shang Dynasty really existed?", a: ["Poems", "Oracle bones", "Paintings", "Coins"], correct: 1 },
    { q: "What is “bronze” made from?", a: ["Gold and silver", "Water and clay", "Copper, tin and lead", "Iron and salt"], correct: 2 },
    { q: "Who was Fu Hao?", a: ["A silk maker", "A philosopher", "A warrior queen and military leader", "A farmer"], correct: 2 },
    { q: "What did Shang soldiers use in battle?", a: ["Bronze weapons and chariots", "Swords made of gold", "Wooden shields only", "Slingshots and spears"], correct: 0 },
    { q: "What was a composite bow made from?", a: ["Bamboo only", "Plastic and string", "Layers of bone, tendons and wood", "Bronze and jade"], correct: 2 },
    { q: "Who was the last Shang king, known as a cruel ruler?", a: ["Wu Ding", "Shangdi", "Di Xin", "Fu Hao"], correct: 2 },
    { q: "What happened to end the Shang Dynasty?", a: ["A fire destroyed the capital", "Di Xin was overthrown by the Zhou army", "A flood ruined the land", "The people voted for a new ruler"], correct: 1 },
    { q: "Who was at the top of the Shang social hierarchy?", a: ["Peasants", "Soldiers", "Slaves", "The king"], correct: 3 },
    { q: "What kind of homes did wealthy Shang people live in?", a: ["Mud huts", "Caves", "Wattle and daub houses", "Stone castles"], correct: 2 },
    { q: "What replaced bronze during the Zhou Dynasty?", a: ["Jade", "Steel", "Plastic", "Iron"], correct: 3 },
    { q: "What long wall did the Qin Dynasty begin building?", a: ["Wall of Peace", "Imperial Border", "Great Wall of China", "Bamboo Wall"], correct: 2 }
  ],

  "Groundbreaking Greeks": [
    { q: "What was the land of ancient Greece mostly made up of?", a: ["Deserts and forests", "Mountains and sea", "Flat fields and rivers", "Jungles and lakes"], correct: 1 },
    { q: "What is a city state (polis)?", a: ["A city ruled by kings", "A city that was part of one big country", "A city and its surrounding land with its own government", "A building in the middle of a city"], correct: 2 },
    { q: "What did most ancient Greek city states build on a hill for protection?", a: ["A theatre", "A temple", "An acropolis", "A palace"], correct: 2 },
    { q: "Who was the political leader who introduced democracy in Athens?", a: ["Pericles", "Cleisthenes", "Socrates", "Alexander the Great"], correct: 1 },
    { q: "What does “democracy” mean?", a: ["Rule by a king", "Rule by soldiers", "People have a say in how things are run", "Rule by priests"], correct: 2 },
    { q: "What kind of plays and poems were popular in ancient Greece?", a: ["News stories", "Religious hymns only", "Epic poems and theatre plays", "Fairy tales"], correct: 2 },
    { q: "What were women in ancient Greece expected to do?", a: ["Vote and own land", "Fight in wars", "Stay at home and look after the family", "Work as politicians"], correct: 2 },
    { q: "What was the name of the temple built on the Acropolis in Athens?", a: ["Temple of Zeus", "Apollo’s Gate", "Parthenon", "Coliseum"], correct: 2 },
    { q: "Who was known as the “father of medicine”?", a: ["Plato", "Pythagoras", "Hippocrates", "Aristotle"], correct: 2 },
    { q: "What famous philosopher used questions to explore knowledge?", a: ["Pericles", "Socrates", "Cleisthenes", "Archimedes"], correct: 1 },
    { q: "Which famous mathematician created a way to measure triangles?", a: ["Socrates", "Pythagoras", "Alexander the Great", "Homer"], correct: 1 },
    { q: "What did Alexander the Great do?", a: ["Created the Olympic Games", "Built the Parthenon", "Expanded Greece into a huge empire", "Wrote epic poems"], correct: 2 },
    { q: "What writing system did the Minoans use?", a: ["Greek alphabet", "Linear A", "Linear B", "Latin script"], correct: 1 },
    { q: "Where did the Minoan civilisation exist?", a: ["Mainland Greece", "Northern Africa", "The island of Crete", "Athens and Sparta"], correct: 2 },
    { q: "What period came after the collapse of the Mycenaean civilisation?", a: ["Classical period", "Archaic period", "Hellenistic period", "Dark Age"], correct: 3 },
    { q: "What important event first happened in 776 BC in Olympia?", a: ["The Parthenon was built", "The first Olympic Games", "Democracy was created", "Socrates was born"], correct: 1 },
    { q: "What was the main reason city states often went to war with each other?", a: ["To stop the Olympic Games", "To control more land and power", "To spread democracy", "To punish women"], correct: 1 },
    { q: "What were metics in ancient Greek society?", a: ["Citizens with full rights", "Women who could vote", "Men who lived in the city but were not citizens", "Kings and rulers"], correct: 2 },
    { q: "What shaped much of the design and layout of ancient Greek cities?", a: ["Their rivers", "Their kings", "Their connection to the sea", "Their forests"], correct: 2 },
    { q: "What lasting idea from Greek philosophy is still used in schools today?", a: ["Memorisation", "Dictation", "Socratic method (asking questions)", "Reading from scrolls"], correct: 2 }
  ],

  "Britain at War": [
    { q: "When did the First World War end?", a: ["11th November 1918", "28th June 1914", "2nd September 1945", "6th June 1944"], correct: 0 },
    { q: "What event triggered the First World War?", a: ["Bombing of London", "Sinking of American ships", "Assassination of Archduke Franz Ferdinand", "Germany invading France"], correct: 2 },
    { q: "What was the name of the defensive line of trenches?", a: ["Eastern Front", "Berlin Wall", "Gallipoli Line", "Western Front"], correct: 3 },
    { q: "What is meant by the term 'stalemate'?", a: ["A surprise military attack", "A peace treaty", "A situation where no side can win", "A type of gas weapon"], correct: 2 },
    { q: "What caused food shortages in Britain during the war?", a: ["Bad weather", "Rationing and enemy blockades", "Farming strikes", "Too many exports"], correct: 1 },
    { q: "What were women commonly doing on the home front?", a: ["Fighting on the front line", "Running schools", "Working in factories or on the land", "Organising protests"], correct: 2 },
    { q: "Which country joined the First World War in 1917?", a: ["Italy", "United States", "Canada", "Australia"], correct: 1 },
    { q: "What was signed in 1919 that held Germany responsible?", a: ["Munich Pact", "Atlantic Charter", "Treaty of Versailles", "Armistice Act"], correct: 2 },
    { q: "What military technology was used for the first time in WW1?", a: ["Cannons", "Rocket launchers", "Poison gas", "Submarines"], correct: 2 },
    { q: "What was the aim of the Gallipoli Campaign?", a: ["To invade Germany", "To rescue soldiers in France", "To take Constantinople", "To capture Italy"], correct: 2 },
    { q: "When did the Second World War begin?", a: ["1936", "1939", "1941", "1945"], correct: 1 },
    { q: "What caused Britain and France to declare war on Germany?", a: ["Germany invaded France", "Germany invaded Poland", "The bombing of Pearl Harbor", "Hitler’s speech"], correct: 1 },
    { q: "What was the Battle of Britain mainly fought with?", a: ["Submarines", "Tanks", "Planes", "Ships"], correct: 2 },
    { q: "What does 'appeasement' mean?", a: ["Declaring war quickly", "Giving in to demands to avoid conflict", "Forming new alliances", "Recruiting soldiers"], correct: 1 },
    { q: "What new British plane was used in the Battle of Britain?", a: ["Lancaster Bomber", "Spitfire", "Hurricane", "Tornado"], correct: 1 },
    { q: "What major event brought the US into WW2?", a: ["Invasion of Poland", "Fall of France", "Attack on Pearl Harbor", "D-Day"], correct: 2 },
    { q: "What did the United States do to end the war with Japan?", a: ["Invaded Tokyo", "Dropped atomic bombs", "Sailed warships", "Captured the Emperor"], correct: 1 },
    { q: "What symbol is commonly used to mark remembrance?", a: ["Red rose", "White feather", "Poppy", "Olive branch"], correct: 2 },
    { q: "What is conscription?", a: ["Raising taxes for war", "Volunteering to fight", "Being forced by law to join the military", "Travelling abroad"], correct: 2 },
    { q: "What was created in Britain after WW2?", a: ["Red Cross", "League of Nations", "The NHS", "British Army"], correct: 2 }
  ],

  "Maafa": [
    { q: "What does the word Maafa mean?", a: ["Freedom", "Great catastrophe", "Journey", "New world"], correct: 1 },
    { q: "How many countries are there in Africa?", a: ["45", "50", "54", "60"], correct: 2 },
    { q: "What was the name of the trade system across Europe, Africa, and the Americas?", a: ["Atlantic cycle", "Slave circle", "Triangular slave trade", "Transatlantic exchange"], correct: 2 },
    { q: "What did the second journey involve?", a: ["Gold to Africa", "Guns to Europe", "Enslaved people to the Americas", "Sugar to Africa"], correct: 2 },
    { q: "Which country began transporting enslaved African people in 1441?", a: ["Spain", "France", "Portugal", "Britain"], correct: 2 },
    { q: "Which island did Columbus claim for Spain?", a: ["Jamaica", "Hispaniola", "Barbados", "St. Lucia"], correct: 1 },
    { q: "What kind of slavery treated people as property?", a: ["Domestic", "Civil", "Chattel", "Temporary"], correct: 2 },
    { q: "Which monarch gave Hawkins permission to trade enslaved people?", a: ["Henry VIII", "Elizabeth I", "James I", "Victoria"], correct: 1 },
    { q: "How many people was Britain transporting by the early 1800s?", a: ["50,000", "80,000", "100,000", "120,000"], correct: 3 },
    { q: "What happened in Britain in 1807?", a: ["Slavery ended", "Columbus honoured", "Slave Trade Act passed", "Triangular trade began"], correct: 2 },
    { q: "What was the First Maroon War?", a: ["War between African kingdoms", "Slave rebellion in the Caribbean", "Battle in Portugal", "Protest in Britain"], correct: 1 },
    { q: "What did the Kingdom of Benin trade?", a: ["Sugar and cotton", "Guns and horses", "Gold and ivory", "Tea and silk"], correct: 2 },
    { q: "What are the Benin Bronzes?", a: ["Coins", "Statues made in Europe", "Bronze plaques by brass casters", "War weapons"], correct: 2 },
    { q: "What happened at the Berlin West Africa Conference?", a: ["Slavery abolished", "African leaders gained power", "Africa divided into colonies", "Languages banned"], correct: 2 },
    { q: "What ship brought the Windrush generation?", a: ["HMS Britannia", "SS Caribbean", "HMT Empire Windrush", "MV Atlantic"], correct: 2 },
    { q: "What did the Race Relations Act 1965 aim to stop?", a: ["Wars", "Racial discrimination", "Immigration", "Economic problems"], correct: 1 },
    { q: "Who was John Blanke?", a: ["King of Benin", "Black writer", "Tudor court trumpeter", "WW1 soldier"], correct: 2 },
    { q: "What was Mary Seacole known for?", a: ["Leading a rebellion", "Writing about slavery", "Helping in the Crimean War", "Creating Equality Act"], correct: 2 },
    { q: "Who was Claudia Jones?", a: ["Poet", "Queen", "Abolitionist", "Activist and founder of Notting Hill Carnival"], correct: 3 },
    { q: "What is a plantation?", a: ["Type of ship", "Trade fort", "Farm for crops like sugar", "Place where enslaved people were freed"], correct: 2 }
  ]
};
const app = document.getElementById("app");
const mainMenu = document.getElementById("main-menu");
const quizScreen = document.getElementById("quiz-screen");
const scoreScreen = document.getElementById("score-screen");
const quizList = document.getElementById("quiz-list");
const quizTitle = document.getElementById("quiz-title");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const retakeBtn = document.getElementById("retake-btn");
const menuBtn = document.getElementById("menu-btn");

let currentQuiz = [];
let currentTitle = "";
let currentQuestion = 0;
let score = 0;

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function loadMainMenu() {
  quizList.innerHTML = "";
  for (const title of Object.keys(quizzes)) {
    const btn = document.createElement("button");
    btn.textContent = title;
    btn.setAttribute("type", "button"); // prevents accidental form behavior
    btn.addEventListener("click", () => startQuiz(title)); // this is key
    quizList.appendChild(btn);
  }
  showScreen(mainMenu);
}

function startQuiz(title) {
  currentQuiz = quizzes[title];
  currentTitle = title;
  currentQuestion = 0;
  score = 0;
  quizTitle.textContent = title;
  showScreen(quizScreen);
  showQuestion();
}

function showQuestion() {
  const question = currentQuiz[currentQuestion];
  questionText.textContent = question.q;
  answerButtons.innerHTML = "";
  feedback.classList.add("hidden");

  question.a.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answerButtons.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correctIndex = currentQuiz[currentQuestion].correct;
  feedback.classList.remove("hidden");
  if (selected === correctIndex) {
    feedback.textContent = "✅ Correct!";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! The correct answer was: ${currentQuiz[currentQuestion].a[correctIndex]}`;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
      showQuestion();
    } else {
      showFinalScore();
    }
  }, 2000);
}

function showFinalScore() {
  finalScore.textContent = `You scored ${score} out of ${currentQuiz.length}!`;
  showScreen(scoreScreen);
}

retakeBtn.onclick = () => startQuiz(currentTitle);
menuBtn.onclick = loadMainMenu;

// Start app
loadMainMenu();
