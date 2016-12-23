//array of quotes
var quotes = [
	["The whole sea for miles round ran red and gold. Some winey smell mixed with it and intoxicated her, for she felt again her own headlong desire to throw herself off the cliff and be drowned looking for a pearl brooch on a beach.", "Virginia Woolf"],
	["They reminded me that it was my fate to pursue only phantoms, creatures whose reality existed to a great extent in my imagination; for there are people - and this had been my case since youth - for whom all the things that have a fixed value, assessable by others, fortune, success, high positions, do not count; what they must have is phantoms. They sacrifice all the rest, devote all their efforts, make everything else subservient to the pursuit of some phantom. But this soon fades away; then they run after another only to return later on to the first.", "Marcel Proust"],
	["And from that time on I bathed in the Poem <br>Of the Sea, star-infused and churned into milk, <br>Devouring the green azures; where, entranced in pallid flotsam, <br>A dreaming drowned man sometimes goes down.", "Arthur Rimbaud"],
	["By day I am nothing, and by night I am I.", "Fernando Pessoa"],
	["I seek and don’t find myself. I belong to chrysanthemum hours, neatly lined up in flowerpots.", "Fernando Pessoa"],
	["I have the choice of being constantly active and happy or introspectively passive and sad. Or I can go mad by ricocheting in between.", "Sylvia Plath"],
	["We do not require great education of the mind to understand that here is no real and lasting satisfaction; that our pleasures are only vanity; that our evils are infinite; and, lastly, that death, which threatens us every moment, must infallibly place us within a few years under the dreadful necessity of being forever either annihilated or unhappy.", "Blaise Pascal"],
  ["There is nothing more real than this, nothing more terrible. Be we as heroic as we like, that is the end which awaits the world. Let us reflect on this and then say whether it is not beyond doubt that there is no good in this life but in the hope of another; that we are happy only in proportion as we draw near it; and that, as there are no more woes for those who have complete assurance of eternity, so there is no more happiness for those who have no insight into it.", "Blaise Pascal"],
  ["I know not who put me into the world, nor what the world is, nor what I myself am. I am in terrible ignorance of everything. I know not what my body is, nor my senses, nor my soul, not even that part of me which thinks what I say, which reflects on all and on itself, and knows itself no more than the rest. I see those frightful spaces of the universe which surround me, and I find myself tied to one corner of this vast expanse, without knowing why I am put in this place rather than in another, nor why the short time which is given me to live is assigned to me at this point rather than at another of the whole eternity which was before me or which shall come after me. I see nothing but infinities on all sides, which surround me as an atom and as a shadow which endures only for an instant and returns no more. All I know is that I must soon die, but what I know least is this very death which I cannot escape.", "Blaise Pascal"],
  ["When I consider the short duration of my life, swallowed up in the eternity before and after, the small space which I fill, or even can see, engulfed in the infinite immensity of spaces whereof I know nothing, and which know nothing of me, I am terrified, and wonder that I am here rather than there, for there is no reason why here rather than there, or now rather than then. Who has set me here? By whose order and design have this place and time been destined for me?", "Blaise Pascal"],
  ["How many kingdoms know nothing of us! The eternal silence of these infinite spaces frightens me.", "Blaise Pascal"],
  ["I lost a world the other day.<br>Has anybody found?<br>You’ll know it by the row of stars<br>Around its forehead bound.", "Emily Dickinson"],
  ["I’m Nobody! Who are you?<br>Are you – Nobody – too?<br>Then there’s a pair of us!<br>Don’t tell! they’d advertise – you know!<br><br>How dreary – to be – Somebody!<br>How public – like a Frog –  <br>To tell one’s name – the livelong June –  <br>To an admiring Bog!", "Emily Dickinson"],
  ["My life closed twice before its close—<br>It yet remains to see<br>If Immortality unveil<br>A third event to me<br><br>So huge, so hopeless to conceive<br>As these that twice befell.<br>Parting is all we know of heaven,<br>And all we need of hell.", "Emily Dickinson"],
  ["About here, she thought, dabbling her fingers in the water, a ship had sunk, and she muttered, dreamily half asleep, how we perished, each alone.", "Virginia Woolf"],
  ["If a little dreaming is dangerous, the cure for it is not to dream less, but to dream more, to dream all the time.", "Marcel Proust"],
  ["And in me too the wave rises. It swells; it arches its back. I am aware once more of a new desire, something rising beneath me like the proud horse whose rider first spurs and then pulls him back. What enemy do we now perceive advancing against us, you whom I ride now, as we stand pawing this stretch of pavement? It is death. Death is the enemy. It is death against whom I ride with my spear couched and my hair flying back like a young man's, like Percival's, when he galloped in India. I strike spurs into my horse. Against you I will fling myself, unvanquished and unyielding, O Death!<br>~<br><em>The waves broke on the shore.</em>", "Virginia Woolf"],
  ["How strange! This bed on which I shall lie has been slept on by more than one dying man, but today it does not repel me! Who knows what corpses have lain on it and for how long? But is a corpse any worse than I? A corpse too knows nothing of its father, mother or sisters or Titus. Nor has a corpse a sweetheart. A corpse, too, is pale, like me. A corpse is cold, just as I am cold and indifferent to everything. A corpse has ceased to live, and I too have had enough of life.... Why do we live on through this wretched life which only devours us and serves to turn us into corpses? Oh how many people have become corpses at this moment! Mothers have been torn from their children, children from their mothers - how many plans have come to nothing, how much sorrow has sprung from these depths, and how much relief!... Virtue and vice have come in the end to the same thing! It seems that to die is man's finest action - and what might be his worst? To be born, since that is the exact opposite of his best deed. It is therefore right of me to be angry that I was ever born into this world! Why was I not prevented from remaining in a world where I am utterly useless? What good can my existence bring to anyone? ... But wait, wait! What's this? Tears? How long it is since they flowed! How is this, seeing that an arid melancholy has held me for so long in its grip? How good it feels - and sorrowful. Sad but kindly tears! What a strange emotion! Sad but blessed. It is not good for one to be sad, and yet how pleasant it is.", "Frédéric Chopin"],
  ["In the end, we are self-perceiving, self-inventing, locked-in mirages that are little miracles of self-reference.", "Douglas Hofstadter"],
  ["I saw myself sitting in the crotch of this fig tree, starving to death, just because I couldn't make up my mind which of the figs I would choose. I wanted each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my feet.", "Sylvia Plath"],
  ["I thought it would be easy, lying in the tub and seeing the redness flower from my wrists, flush after flush through the clear water, till I sank to sleep under a surface gaudy as poppies. But when it came right down to it, the skin of my wrist looked so white and defenseless that I couldn’t do it. It was as if what I wanted to kill wasn’t in that skin or the thin blue pulse that jumped under my thumb, but somewhere else, deeper, more secret, and a whole lot harder to get at.", "Sylvia Plath"],
  ["My soul is impatient with itself, as with a bothersome child; its restlessness keeps growing and is forever the same. Everything interests me, but nothing holds me. I attend to everything, dreaming all the while.", "Fernando Pessoa"],
  ["I am nothing. I shall never be anything. I cannot even wish to be anything. Apart from this, I have within me all the dreams of the world.", "Fernando Pessoa"],
  ["At that vague hour between dark and dawn, the sunroof of the Amazon was deserted.<br>Quiet as a burglar in my cornflower-sprigged bathrobe, I crept to the edge of the parapet. The parapet reached almost to my shoulders, so I dragged a folding chair from the stack against the wall, opened it, and climbed onto the precarious seat.<br>A stiff breeze lifted the hair from my head.  At my feat, the city doused its lights in sleep, its buildings blackened, as if for a funeral.<br>It was my last night.<br>I grasped the bundle I carried and pulled at a pale tail.  A strapless elasticized slip which, in the course of wear, had lost its elasticity, slumped into my hand.  I waved it, like a flag of truce, once, twice…. The breeze caught it, and I let go.<br>A white snow flake floated out into the night, and began its slow descent.  I wondered on what street or rooftop it would come to rest.<br>I tugged at the bundle again.<br>The wind made an effort, but failed, and a batlike shadow sank toward the roof garden of the penthouse opposite.<br>Piece by piece, I fed my wardrobe to the night wind, and flutteringly, like a loved one’s ashes, the gray scraps were ferried off, to settle here, there, exactly where I would never know, in the dark heart of New York.", "Sylvia Plath"],
  ["Everything around me is evaporating. My whole life, my memories, my imagination and its contents, my personality - it’s all evaporating. I continuously feel that I was someone else, that I felt something else, that I thought something else. What I’m attending here is a show with another set. And the show I’m attending is myself.", "Fernando Pessoa"],
  ["Between me and life is a faint glass. No matter how sharply I see and understand life, I cannot touch it.", "Fernando Pessoa"],
  ["I am nothing. I shall never be anything. I cannot even wish to be anything. Apart from this, I have within me all the dreams of the world.", "Fernando Pessoa"],
  ["My past is everything I failed to be.", "Fernando Pessoa"],
  ["What happens to a dream deferred?<br><br>Does it dry up<br>like a raisin in the sun?<br>Or fester like a sore–<br>And then run?<br>Does it stink like rotten meat?<br>Or crust and sugar over–<br>like a syrupy sweet?<br><br>Maybe it just sags<br>like a heavy load.<br><br>Or does it explode?", "Langston Hughes"],
  ["Now I know what loneliness is, I think. Momentary loneliness, anyway. It comes from a vague core of the self — like a disease of the blood, dispersed throughout the body so that one cannot locate the matrix, the spot of contagion… Homesick is the name they give to that sick feeling which dominates me now. I am alone in my room, between two worlds.", "Sylvia Plath"],
  ["Through all he said, even through his appalling sentimentality, I was reminded of something—an elusive rhythm, a fragment of lost words, that I had heard somewhere a long time ago. For a moment a phrase tried to take shape in my mouth and my lips parted like a dumb man’s, as though there was more struggling upon them than a wisp of startled air. But they made no sound, and what I had almost remembered was uncommunicable forever.", "F.Scott Fitzgerald"],
  ["The heart of man is very much like the sea, it has its storms, it has its tides and in its depths it has its pearls too.", "Vincent Van Gogh"],
  ["People are always shouting they want to create a better future. It’s not true. The future is an apathetic void of no interest to anyone. The past is full of life, eager to irritate us, provoke and insult us, tempt us to destroy or repaint it. The only reason people want to be masters of the future is to change the past.", "Milan Kundera"],
  ["The foamy wavelets curled up to her white feet, and coiled like serpents about her ankles. She walked out. The water was chill, but she walked on. The water was deep, but she lifted her white body and reached out with a long, sweeping stroke. The touch of the sea is sensuous, enfolding the body in its soft, close embrace.<br><br>She went on and on. She remembered the night she swam far out, and recalled the terror that seized her at the fear of being unable to regain the shore. She did not look back now, but went on and on, thinking of the blue-grass meadow that she had traversed when a little child, believing that it had no beginning and no end.<br><br>Her arms and legs were growing tired.", "Kate Chopin"],
  ["When all by myself, I can think of all kinds of clever remarks, quick comebacks to what no one said, and flashes of witty sociability with nobody. But all of this vanishes when I face someone in the flesh: I lose my intelligence, I can no longer speak, and after half an hour I just feel tired. Talking to people makes me feel like sleeping. Only my ghostly and imaginary friends, only the conversations I have in my dreams, are genuinely real and substantial.", "Fernando Pessoa"], 
  ["My soul is impatient with itself, as with a bothersome child; its restlessness keeps growing and is forever the same. Everything interests me, but nothing holds me. I attend to everything, dreaming all the while", "Fernando Pessoa"],
  ["I am at a loss to know how to live life. With this malaise that is crumpling my soul. If at least I could be positively crazy! But no: always this inbetweenness, This almost, This it might be that… This.", "Fernando Pessoa"],
  ["Sadly I write in my quiet room, alone as I have always been, alone as I will always be. And I wonder if my apparently negligible voice might not embody the essence of thousands of voices, the longing for self expression of thousands of lives, the patience of millions of souls resigned like my own to their daily lot, their useless dreams, and their hopeless hopes.", "Fernando Pessoa"],
  ["The feelings that hurt most, the emotions that sting most, are those that are absurd - The longing for impossible things, precisely because they are impossible; nostalgia for what never was; the desire for what could have been; regret over not being someone else; dissatisfaction with the world’s existence. All these half-tones of the soul’s consciousness create in us a painful landscape, an eternal sunset of what we are.", "Fernando Pessoa"],
  ["The mere thought of having to enter into contact with someone else makes me nervous. A simple invitation to have dinner with a friend produces an anguish in me that’s hard to define. The idea of any social obligation whatsoever – attending a funeral, dealing with someone about an office matter, going to the station to wait for someone I know or don’t know – the very idea disturbs my thoughts for an entire day, and sometimes I even start worrying the night before, so that I sleep badly. When it takes place, the dreaded encounter is utterly insignificant, justifying none of my anxiety, but the next time is no different: I never learn to learn.", "Fernando Pessoa"],
  ["Man shouldn’t be able to see his own face – there’s nothing more sinister. Nature gave him the gift of not being able to see it, and of not being able to stare into his own eyes. Only in the water of rivers and ponds could he look at his face. And the very posture he had to assume was symbolic. He had to bend over, stoop down, to commit the ignominy of beholding himself. The inventor of the mirror poisoned the human heart.", "Fernando Pessoa"],
  ["I’m lost if I find myself; I doubt what I discover; I don’t have what I’ve obtained. I sleep as if I were taking a walk, but I’m awake. I wake up as if I’d been sleeping, and I don’t belong to me. Life, in its essence, is one big insomnia, and all that we think or do occurs in a lucid stupor." ,"Fernando Pessoa"],
  ["Today, suddenly I reached an absurd but unerring conclusion. In a moment of enlightenment, I realized that I’m nobody, absolutely nobody. If I was ever reincarnated, I must have done so without myself, without a self to reincarnate. I am the outskirts of some non-existent town, the long-winded prologue to an unwritten book. I’m nobody, nobody. I’m a character in a novel as yet unwritten, hovering in the air and undone before I’ve even existed, amongst the dreams of someone who never quite managed to breathe life into me.", "Fernando Pessoa"],
  ["The person who truly wants nothing except his own destiny no longer has others of his own kind; he stands completely alone and has only the chill of outer space around him. The person who desires nothing else but destiny no longer has either models or ideals, nothing dear to him, nothing to console him! And that is the right path to follow. People like you and me are really lonely, it’s true, but we still have one another, we have the secret satisfaction of being different, of rebelling, of desiring the unusual. That too, must fall by the wayside if a person wants to follow the path to its end. He musn’t even desire to be a revolutionary, a role model, or a martyr.", "Hermann Hesse"],
  ["Who has seen the wind?<br>Neither I nor you:<br>But when the leaves hang trembling,<br>The wind is passing through.<br><br>Who has seen the wind?<br> Neither you nor I:<br>But when the trees bow down their heads,<br>The wind is passing by.", "Christina Rosseti"],
  ["When you give someone your whole heart and he doesn’t want it, you cannot take it back. It’s gone forever.", "Sylvia Plath"],
  ["It was my first big chance, but here I was, sitting back and letting it run through my fingers like so much water.", "Sylvia Plath"],
  ["In vain do I stretch out my arms toward her when I awaken in the morning from my weary slumbers. In vain do I seek for her at night in my bed, when some innocent dream has happily deceived me, and placed her near me in the fields, when I have seized her hand and covered it with countless kisses. And when I feel for her in the half confusion of sleep, with the happy sense that she is near, tears flow from my oppressed heart; and, bereft of all comfort, I weep over my future woes.", "Goethe"],
  ["Though I am often in the depths of misery, there is still calmness, pure harmony and music inside me.", "Vincent Van Gogh"],
  ["The sadness will last forever.", "Vincent Van Gogh"],
  ["So I am not, myself, the master of my own life ; I am simply one of the threads to be woven into life’s vulgar calico! Very well, but if I don’t know how to weave, I can at least cut the thread.", "Soren Kierkegaard"],
  ["In addition to my numerous other acquaintances I have still one more intimate friend—my melancholy. In the midst of pleasure, in the midst of work, she beckons to me, calls me aside, even though I remain present bodily. My melancholy is the most faithful sweetheart I have had—no wonder that I return the love.", "Soren Kierkegaard"],
  ["I seek loneliness to spin myself into the silk of my own soul, to mask myself in my own cocoon, and wait for the metamorphosis which never fails to come.", "August Strindberg"],
  ["Am I in love? --yes, since I am waiting. The other one never waits. Sometimes I want to play the part of the one who doesn't wait; I try to busy myself elsewhere, to arrive late; but I always lose at this game. Whatever I do, I find myself there, with nothing to do, punctual, even ahead of time. The lover's fatal identity is precisely this: I am the one who waits.", "Roland Barthes"],
  ["I am bound by a chain formed of dark delusions, of disturbing dreams, of restless thoughts, of forebodings and inexplicable anxieties.", "Soren Kierkegaard"],
  ["I fixed my eyes on the largest cloud, as if, when it passed out of sight, I might have the good luck to pass with it.", "Sylvia Plath"],
  ["Time passes, they say, life is a stream; but I can’t feel it. Time stands still and I with it. When I want to spit, I spit in my own face." ,"Soren Kierkegaard"],
  ["Will my spirit forever be tongue-tied, must I always babble? What I need is a voice as piercing as the glance of Lynceus, as frightening as the groan of the giants, as persistent as a sound made by nature, as mocking as a gust of icy wind, as cruel as Echo’s taunting, ranging from the deepest bass to the most melting high notes, modulated from a solemn whisper to the energy of rage. To be able to breathe, to express what’s on my mind, to shake the depths of my anger and my sympathy.<br><br>But my voice dies away like a blessing on the lips of a mute.", "Soren Kierkegaard"],
  ["When my brother sat in the sun and his face was shadowed on the back of the chair I kissed his shadow. I kissed his shadow and this kiss did not touch him, this kiss was lost in the air and melted with the shadow. Our love of each other is like one long shadow kissing, without hope of reality.", "Anaïs Nin"],
  ["DOES ANYONE KNOW WHO I AM?<br><br>Even my voice came from other worlds. I was embalmed in my own secret vertigoes. I was suspended over the world, seeing what road I could tread without treading down even clay or grass. My step was a sentient step; the mere crepitation of gravel could arrest my walk.", "Anaïs Nin"],
  ["My soul is so heavy that no thought can sustain it any longer, no wingbeat lift it up into the aether. If it moves, it only sweeps along the ground like the low flight of birds when a thunderstorm approaches. Over my inner being broods an unease, an anxiety that senses an earthquake.", "Soren Kierkegaard"],
  ["I could not bear the passing of things. All flowing, all passing, all movement choked me with anguish.", "Anaïs Nin"],
  ["I swallow my own words. I chew and chew everything until it deteriorates. Every thought or impulse I have is chewed into nothingness. I want to capture all my thoughts at once, but they run in all directions. If I could do this I would be capturing the nimblest of minds, like a shoal of minnows. I would reveal innocence and duplicity, generosity and calculation, fear and cowardice and courage. I want to tell the whole truth, but I cannot tell the whole truth because I would have to write four pages at once, like four long columns simultaneously, four pages to the present one, and so I do not write at all. I would have to write backwards, retrace my steps constantly to catch the echoes and the overtones.", "Anaïs Nin"],
  ["My arms were taken away from me, she sang. I was punished for clinging. I clung. I clutched all those I loved; I clutched at the lovely moments of life; my hands closed upon every full hour. My arms were always tight and craving to embrace. I wanted to embrace and hold the light, the wind, the sun, the night, the whole world. I wanted to caress, to heal, to rock, to lull, to surround, to encompass. And I strained and I held so much that they broke; they broke away from me. Everything eluded me then. I was condemned not to hold.", "Anaïs Nin"],
  ["In the world of the dreamer there was solitude: all the exaltations and joys came in the moment of preparation for living. They took place in solitude. But with action came anxiety, and the sense of insuperable effort made to match the dream, and with it came weariness, discouragement, and the flight into solitude again. And then in solitude, in the opium den of remembrance, the possibility of pleasure again.", "Anaïs Nin"],
  ["I could read Plato, I could solve a trigonometrical problem or follow a chemical analysis. There was only one thing I could not do: wrest the dark, concealed goal from within myself and picture it before me, as others did — others, who knew with certainty whether they wanted to be professors, lawyers, doctors or artists, however long this would take them and whatever difficulties and advantages this decision would bear in its wake.<br>This I could not do.<br><br>Perhaps I would have to seek and seek for years on end and would make nothing of myself, would reach no end.", "Hermann Hesse"],
  ["Remember, that time you hitchhiked back to college with me after Skit Night?<br>Remember how you asked me where would I like to live best, the country or the city?<br>And I said I wanted to live in the country and in the city both?<br>And you, laughed and said I had the perfect setup of a true neurotic and that that question came from some questionnaire you’d had in psychology class that week?<br>Well, you were right. I am neurotic. I could never settle down in either the country or the city.<br>If neurotic is wanting two mutually exclusive things at one and the same time, then I’m neurotic as hell. I’ll be flying back and forth between one mutually exclusive thing and another for the rest of my days.", "Sylvia Plath"],
  ["But as always, as soon as a dream had given me hope, it wilted and faded away. I now lived within a fire of an unsatisfied longing, of a tense expectation that often drove me completely wild and mad.", "Hermann Hesse"],
  ["My story is more important to me than any novelist’s is to him–for this is my story; it is the story of a man, not of an invented, or possible, or idealized, or otherwise absent figure, but of a unique being of flesh and blood. Yet, what a real living human being is made of seems to be less understood today than at any time before, and men–each one of whom represents a unique and valuable experiment on the part of nature–are therefore shot wholesale nowadays.<br><br>If we were not something more than unique human beings, if each one of us could really be done away with once and for all by a single bullet, storytelling would lose all purpose. But every man is more than just himself; he also represents the unique, the very special and always significant and remarkable point at which the universe’s phenomena intersect, only once in this way and never again. That is why every man’s story is important, eternal, sacred; that is why every man, as long as he lives and fulfills the will of nature, is wondrous, and worthy of every consideration<br><br>I do not consider myself less ignorant than most people. I have been and still am a seeker, but I have ceased to question stars and books; I have begun to listen to the teachings my blood whispers to me. My story is not a pleasant one; it is neither sweet nor harmonious, as invented stories are; it has the taste of nonsense and chaos, of madness and dreams–like the lives of all people who stop deceiving themselves.", "Hermann Hesse"],
  ["I try in vain to clasp those female ghosts that vanish in their unattainable difference; and I try at the same time to strike myself, perhaps the other self that is about to take my place in the house or else the self most mine that I want to snatch away from that other, but which I feel pressing against me and which is only the alienness of the other, as if that other had already taken my place and any other place, and I were erased from the world.", "Italo Calvino"],
  ["I am looking from the outside at the life of an ordinary evening in an ordinary little city, and I realize I am cut off from ordinary evenings for God knows how long, and I think of thousands of cities like these, of hundreds of thousands of lighted places where at this hour people allow the evenings darkness to descend and have none of the thoughts in their head that I have in mind; maybe they have other thoughts that aren’t at all enviable, but at this moment I would be willing to trade with any one of them.", "Italo Calvino"],
  ["When I sit before my mirror I laugh at myself. I am brushing my hair. Here are a pair of eyes, two long braids, two feet. I look at them like dice in a box, wondering if I should shake them, would they still come out and be ME. I cannot tell how all these separate pieces can be ME. I do not exist. I am not a body. When I shake hands I feel that the person is so far away that he is in the other room, and that my hand is in the other room. When I blow my nose I have a fear that it might remain on the handkerchief.", "Anaïs Nin"],
  ["The allotted function of art is not, as is often assumed, to put across ideas, to propagate thoughts, to serve as an example. The aim of art is to prepare a person for death, to plough and harrow his soul, rendering it capable of turning to good.", "Andrei Tarkovsky"],
  ["A phrase began to beat in my ears with a sort of heady excitement: ‘There are only the pursued, the pursuing, the busy, and the tired.’", "F.Scott Fitzgerald"],
  ["My objective is to create my own world and these images which we create mean nothing more than the images which they are. We have forgotten how to relate emotionally to art: we treat it like editors, searching in it for that which the artist has supposedly hidden. It is actually much simpler than that, otherwise art would have no meaning. You have to be a child—incidentally children understand my pictures very well, and I haven’t met a serious critic who could stand knee-high to those children. We think that art demands special knowledge; we demand some higher meaning from an author, but the work must act directly on our hearts or it has no meaning at all.", "Andrei Tarkovsky"],
  ["Let everything that’s been planned come true. Let them believe. And let them have a laugh at their passions. Because what they call passion actually is not some emotional energy, but just the friction between their souls and the outside world. And most important, let them believe in themselves. Let them be helpless like children, because weakness is a great thing, and strength is nothing.", "Andrei Tarkovsky"],
  ["We can express our feelings regarding the world around us either by poetic or by descriptive means. I prefer to express myself metaphorically. Let me stress: metaphorically, not symbolically. A symbol contains within itself a definite meaning, certain intellectual formula, while metaphor is an image. An image possessing the same distinguishing features as the world it represents. An image — as opposed to a symbol — is indefinite in meaning. One cannot speak of the infinite world by applying tools that are definite and finite. We can analyse the formula that constitutes a symbol, while metaphor is a being-within-itself, it’s a monomial. It falls apart at any attempt of touching it.", "Andrei Tarkovsky"]
];

var random = "";
var rQuote = "";
var rAuthor = "";


//main function for retrieving quotes
function getQuote() {

	var random = Math.floor(Math.random() * quotes.length);
    var rQuote = quotes[random][0];
    var rAuthor = quotes[random][1];

//change background
    var plath = ['images/plath.jpg', 'images/plath2.jpg', 'images/plath3.jpg',];
    var dickinson = ['images/dickinson.jpg', 'images/dickinson2.jpg', 'images/dickinson3.jpg',];
    var woolf = ['images/woolf.jpg', 'images/woolf2.jpg', 'images/woolf3.jpg',];
    var pessoa = ['images/pessoa.jpg', 'images/pessoa2.jpg', 'images/pessoa3.jpg',];
    var fsfitzgerald = ['images/fsfitzgerald.jpg', 'images/fsfitzgerald2.jpg', 'images/fsfitzgerald3.jpg',];
    var vangogh = ['images/vangogh.jpg', 'images/vangogh2.jpg', 'images/vangogh3.jpg',];
    var kundera = ['images/kundera.jpg', 'images/kundera2.jpg', 'images/kundera3.jpg',];
    var kchopin = ['images/kchopin.jpg', 'images/kchopin2.jpg', 'images/kchopin3.jpg',];
    var hhesse = ['images/hesse.jpg', 'images/hesse2.jpg', 'images/hesse3.jpg',];
    var rossetti = ['images/rossetti.jpg', 'images/rossetti2.jpg', 'images/rossetti3.jpg',];
    var strindberg = ['images/strindberg.jpg', 'images/strindberg2.jpg', 'images/strindberg3.jpg',];
    var barthes = ['images/barthes.jpg', 'images/barthes2.jpg', 'images/barthes3.jpg',];
    var anaisnin = ['images/anaisnin.jpg', 'images/anaisnin2.jpg', 'images/anaisnin3.jpg', 'images/anaisnin4.jpg',];
    var calvino = ['images/calvino.jpg', 'images/calvino2.jpg', 'images/calvino3.jpg',];
    var tarkovsky = ['images/tarkovsky.jpg', 'images/tarkovsky2.jpg', 'images/tarkovsky3.jpg', 'images/tarkovsky4.jpg', 'images/tarkovsky5.jpg', 'images/tarkovsky6.jpg',];

    $(".bg").animate({
          opacity: 0
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
     

        switch (rAuthor) {
		case "Sylvia Plath":
		$('.bg').css({'background-image' : 'url('+ plath[Math.floor(Math.random() * plath.length)] + ')'});
		break;

    case "Milan Kundera":
    $('.bg').css({'background-image' : 'url('+ kundera[Math.floor(Math.random() * kundera.length)] + ')'});
    break;

    case "Kate Chopin":
    $('.bg').css({'background-image' : 'url('+ kchopin[Math.floor(Math.random() * kchopin.length)] + ')'});
    break;

    case "Hermann Hesse":
    $('.bg').css({'background-image' : 'url('+ hhesse[Math.floor(Math.random() * hhesse.length)] + ')'});
    break;

    case "Christina Rosseti":
    $('.bg').css({'background-image' : 'url('+ rossetti[Math.floor(Math.random() * rossetti.length)] + ')'});
    break;

    case "F.Scott Fitzgerald":
    $('.bg').css({'background-image' : 'url('+ fsfitzgerald[Math.floor(Math.random() * fsfitzgerald.length)] + ')'});
    break;

    case "Vincent Van Gogh":
    $('.bg').css({'background-image' : 'url('+ vangogh[Math.floor(Math.random() * vangogh.length)] + ')'});
    break;

		case "Fernando Pessoa":
		$('.bg').css({'background-image' : 'url('+ pessoa[Math.floor(Math.random() * pessoa.length)] + ')'});
		break;

		case "Virginia Woolf":
		$('.bg').css({'background-image' : 'url('+ woolf[Math.floor(Math.random() * woolf.length)] + ')'});
		break;

    case "Emily Dickinson":
    $('.bg').css({'background-image' : 'url('+ dickinson[Math.floor(Math.random() * dickinson.length)] + ')'});
    break;

    case "August Strindberg":
    $('.bg').css({'background-image' : 'url('+ strindberg[Math.floor(Math.random() * strindberg.length)] + ')'});
    break;

    case "Roland Barthes":
    $('.bg').css({'background-image' : 'url('+ barthes[Math.floor(Math.random() * barthes.length)] + ')'});
    break;

    case "Anaïs Nin":
    $('.bg').css({'background-image' : 'url('+ anaisnin[Math.floor(Math.random() * anaisnin.length)] + ')'});
    break;

    case "Italo Calvino":
    $('.bg').css({'background-image' : 'url('+ calvino[Math.floor(Math.random() * calvino.length)] + ')'});
    break;

    case "Andrei Tarkovsky":
    $('.bg').css({'background-image' : 'url('+ tarkovsky[Math.floor(Math.random() * tarkovsky.length)] + ')'});
    break;

		case "Blaise Pascal":
		$('.bg').css("background-image", "url(images/pascal.jpg)");
		break;

		case "Frédéric Chopin":
		$('.bg').css("background-image", "url(images/chopin.jpg)");
		break;

		case "Douglas Hofstadter":
		$('.bg').css("background-image", "url(images/hofstadter.jpg)");
		break;

    case "Langston Hughes":
    $('.bg').css("background-image", "url(images/langstonhughes.jpg)");
    break;

    case "Marcel Proust":
    $('.bg').css("background-image", "url(images/proust.jpg)");
    break;

    case "Arthur Rimbaud":
    $('.bg').css("background-image", "url(images/rimbaud.jpg)");
    break;

    case "Goethe":
    $('.bg').css("background-image", "url(images/goethe.jpg)");
    break;

    case "Soren Kierkegaard":
    $('.bg').css("background-image", "url(images/kierkegaard.jpg)");
    break;    

		default: 
		$('.bg').css("background-image", "url(images/default.jpg)");
	}

   });

    
//get randomized quote
   $(".quote-text").animate({
          opacity: 0
        }, 200,
        function() {
          $(this).animate({
            opacity: 1
          }, 800);
           $('#text').html(rQuote);
        });
   
   $(".quote-author").animate({
          opacity: 0
        }, 200,
        function() {
          $(this).animate({
            opacity: 1
          }, 800);
           $('#author').html(rAuthor);
        });

   $(".quote-box").animate({opacity: 0}, 200,
        function() {
          $(this).animate({
            opacity: 1
          }, 1000);
          });

//adjust font-size
window.setTimeout(changeFontSize, 200);

function changeFontSize() {
if (rQuote.length > 1500) {
   $('.quote-text').css( "font-size", "1.1em");
} else if (rQuote.length > 1250) {
  $('.quote-text').css( "font-size", "1.15em");
} else if (rQuote.length > 1000) {
  $('.quote-text').css( "font-size", "1.2em");
} else if (rQuote.length > 750) {
  $('.quote-text').css( "font-size", "1.25em");
} else if (rQuote.length > 500) {
  $('.quote-text').css( "font-size", "1.3em");
} else {  
  $('.quote-text').css( "font-size", "1.35em");
}}

//twitter button
$('#tweet-quote').attr("href", 'https://twitter.com/intent/tweet?text=' + rQuote + ' ' + '—' + rAuthor);

}


//code on load
$(document).ready(function(){

getQuote();

$('#new-quote').on('click', getQuote);

});