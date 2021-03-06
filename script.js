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
    ["I’m lost if I find myself; I doubt what I discover; I don’t have what I’ve obtained. I sleep as if I were taking a walk, but I’m awake. I wake up as if I’d been sleeping, and I don’t belong to me. Life, in its essence, is one big insomnia, and all that we think or do occurs in a lucid stupor.", "Fernando Pessoa"],
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
    ["Time passes, they say, life is a stream; but I can’t feel it. Time stands still and I with it. When I want to spit, I spit in my own face.", "Soren Kierkegaard"],
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
    ["We can express our feelings regarding the world around us either by poetic or by descriptive means. I prefer to express myself metaphorically. Let me stress: metaphorically, not symbolically. A symbol contains within itself a definite meaning, certain intellectual formula, while metaphor is an image. An image possessing the same distinguishing features as the world it represents. An image — as opposed to a symbol — is indefinite in meaning. One cannot speak of the infinite world by applying tools that are definite and finite. We can analyse the formula that constitutes a symbol, while metaphor is a being-within-itself, it’s a monomial. It falls apart at any attempt of touching it.", "Andrei Tarkovsky"],
    ["You are the only person I can talk with about the shade of a cloud, about the song of a thought — and about how, when I went out to work today and looked a tall sunflower in the face, it smiled at me with all of its seeds.", "Vladimir Nabokov"],
    ["I live; I die; the sea comes over me; it’s the blue that lasts.", "Virginia Woolf"],
    ["I have dreamed of you so much that you are no longer real.<br>Is there still time for me to reach your breathing body, to kiss your mouth and make your dear voice come alive again?<br><br>I have dreamed of you so much that my arms, grown used to being crossed on my chest as I hugged your shadow, would perhaps not bend to the shape of your body.<br>For faced with the real form of what has haunted me and governed me for so many days and years, I would surely become a shadow.<br><br>O scales of feeling.<br><br>I have dreamed of you so much that surely there is no more time for me to wake up.<br>I sleep on my feet prey to all the forms of life and love, and you, the only one who counts for me today,<br>I can no more touch your face and lips than touch the lips and face of some passerby.<br><br>I have dreamed of you so much, have walked so much, talked so much, slept so much with your phantom, that perhaps the only thing left for me is to become a phantom among phantoms, a shadow a hundred times more shadow than the shadow that moves<br>and goes on moving, brightly, over the sundial of your life.", "Robert Desnos"],
    ["Without a word, they passed each other, disappearing into the crowd. Forever.", "Haruki Murakami"],
    ["If I were to say what binds me to people in the most touching way, it is these tokens of steadfastness that are sometimes, richly as they are undeservedly, given to one: the happy perenniality of a memory that apparently without any care still goes on and survives…", "Rainer Maria Rilke"],
    ["Oh quickly disappearing photograph, in my more slowly disappearing hand.", "Rainer Maria Rilke"],
    ["This is the Hour of Lead—<br>Remembered, if outlived,<br>as Freezing persons recollect the Snow—<br>First—Chill—then Stupor—then the letting go—", "Emily Dickinson"],
    ["No rose without a thorn. Yes, but many a thorn without a rose", "Arthur Schopenhauer"],
    ["I am strangely tired, not from having talked so much but at the mere thought of what I still have to say.", "Albert Camus"],
    ["Your worst sin is that you have destroyed and betrayed yourself for nothing.", "Fyodor Dostoevsky"],
    ["What does the future, that half of time, matter to the man who is infatuated with eternity?", "Emil Cioran"],
    ["Somebody sees me, and I see myself through them. Then it’s all gone, the whole world falls apart.", "Anne Sexton"],
    ["I say nothing of its being likely that nothing will exist for anyone when I am gone, and that as soon as my consciousness is extinguished the whole world will vanish too and become void like a phantom, as a mere appurtenance of my consciousness, for possibly all this world and all these people are only me myself.", "Fyodor Dostoevsky"],
    ["You, darkness from which I come, I love you more than the flame that bounds the world…", "Rainer Maria Rilke"],
    ["I was afraid when in autumn, after the first night frosts, the flies came into the rooms and revived once again in the warmth. They were singularly dried up and took fright at their own buzzing; one could see they didn’t quite know what they were doing. They sat there for hours and let themselves be, until it occurred to them that they were still alive; then they flung themselves blindly in every direction and didn’t know what to do when they got there, and one could hear them falling down again here and there and elsewhere. And finally they crawled about everywhere and slowly strewed death all over the room.", "Rainer Maria Rilke"],
    ["I seemed always on the verge of some wonderful experience; And then it never happened.", "T.S. Eliot"],
    ["Nostalgia in reverse, the longing for yet another strange land, grew especially strong in spring.", "Vladimir Nabokov"],
    ["I’m in love with everyone I’ve ever met in one way or another. I’m just a crazy, unhinged disaster of a human being.", "Edie Sedgwick"],
    ["I still find each day too short for all the thoughts I want to think, all the walks I want to take, all the books I want to read, and all the friends I want to see.", "John Burroughs"],
    ["I lay thinking, ‘I am safe. There is the corner of the bedroom door and the friendly furniture. There is the tree of life in the garden and the wall green with moss. The barrier of the cliffs and the high mountains. And the barrier of the sea. I am safe. I am safe from strangers.’", "Jean Rhys"],
    ["Everything in nature is lyrical in its ideal essence, tragic in its fate, and comic in its existence.", "George Santayana"],
    ["The passing of time is soft and unworldly and pain floats lightly in my soul.", "George Seferis"],
    ["Life being fundamentally a mental state, and all that we do or think valid to the extent we consider it valid, the valuation depends on us. The dreamer is an issuer of banknotes, and the notes he issues circulate in the city of his mind just like real notes in the world outside. Why should I care if the currency of my soul will never be convertible to gold, when there is no gold in life’s factitious alchemy? After us all comes the deluge, but only after us all.", "Fernando Pessoa"],
    ["I am a weak, ephemeral creature made of mud and dream. But I feel all the powers of the universe whirling within me.", "Nikos Kazantzakis"],
    ["What she liked was distance. A good long view towards the sunset, or at a certain soft hour at home, towards an empty intersection, and if you got a glimpse of something more it would be the way the hills blurred off into blueness beyond the last of the flashing roofs. You would feel small then, in a way she found comforting.", "David Malouf"],
    ["Have you ever sensed that our soul is immortal and never dies?", "Plato"],
    ["We cannot live in a world that is interpreted for us by others. An interpreted world is not a home. Part of the terror is to take back our own listening. To use our own voice. To see our own light.", "Hildegard Von Bingen"],
    ["How can she describe emptiness? Acres of vacancy, which she filled with whatever she could, with knowledge, with dates and facts, more and more of them, pouring them into her head to silence the echoes.", "Margaret Atwood"],
    ["You train yourself in the art of being mysterious to everyone. My dear friend! What if there were no one, who cared about guessing your riddle, what pleasure would you then take in it?", "Soren Kierkegaard"],
    ["All these things happen in one second and last forever.", "Virginia Woolf"],
    ["I withdraw and the act of withdrawing does not diminish the pain. It is delicate, it is, in my head, tragic and delicate. I withdraw and this seems to rather accentuate the importance and the strangeness of everything.", "Virginia Woolf"],
    ["And the dreamer is no more real than his dreams.", "T.S. Eliot"],
    ["I am tired of being a person. Not just tired of being the person I was, but any person at all. I like watching people, but I don’t like talking to them, dealing with them, pleasing them, or offending them. I am tired.", "Susan Sontag"],
    ["My life: a tragedy booed off stage by the gods, never getting beyond the first act.", "Fernando Pessoa"],
    ["I put my hands among the flames. Nothing burns.", "Sylvia Plath"],
    ["What am I to do with the stars if you're missing?", "Yannis Ritsos"],
    ["I think it is all a matter of love; the more you love a memory the stronger and stranger it becomes.", "Vladimir Nabokov"],
    ["We are not dreamers, but the awakening from a dream which is becoming a nightmare.", "Slavoj Zizek"],
    ["I love my mystery, I love the abstract world I live in; the delicate, profound, vague, obscure, voluptuously wordless sensations I experience.", "Anaïs Nin"],
    ["Please, consider me a dream.", "Franz Kafka"],
    ["Dreams, of course, are for those who are not strong enough for reality, and reality is for those who cannot confront their dreams.", "Slavoj Zizek"],
    ["You were looking in the wrong world.<br>It was inside you—entrance to that cavern<br>deeper than hell, more dark and lonely.<br>Didn't you feel it open at her fisrt touch?", "Gregory Orr"],
    ["I can never manage to find the phrases I used to love so much. Certain words almost make me believe that I’ve found them again, but it’s impossible.", "Marcel Proust"],
    ["You do not need to leave your room. Remain sitting at your table and listen. Do not even listen, simply wait. Do not even wait, be quite still and solitary. The world will freely offer itself to you to be unmasked, it has no choice, it will roll in ecstasy at your feet.", "Franz Kafka"],
    ["When others asked the truth of me, I was convinced it was not the truth they wanted, but an illusion they could bear to live with.", "Anaïs Nin"],
    ["Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love.", "Rainer Maria Rilke"],
    ["I dream. Sometimes I think that’s the only right thing to do.", "Haruki Murakami"],
    ["A thousand dreams within me softly burn.", "Arthur Rimbaud"],
    ["Everything is possible and yet nothing is. All is permitted and yet again, nothing. No matter which way we go, it is no better than any other. It is all the same whether you achieve something or not, have faith or not, … whether you cry or remain silent. There is an explanation for everything, and yet there is none. Everything is both real and unreal, normal and absurd, splendid and insipid. There is nothing worth more than something else, nor any idea better than another. Why grow sad from one’s sadness and delight in one’s joy? … Love your unhappiness and hate your happiness. Mix everything up. … All gain is a loss, and all loss is a gain. Why always expect a definite stance, clear ideas, meaningful words?", "Emil Cioran"],
    ["I’ve dreamed a lot. I’m tired now from dreaming but not tired of dreaming. No one tires of dreaming, because to dream is to forget, and forgetting does not weigh on us, it is a dreamless sleep throughout which we remain awake. In dreams I have achieved everything.", "Fernando Pessoa"],
    ["I see you everywhere, in the stars, deep in the river, to me you’re everything that exists; the reality of everything.", "Virginia Woolf"],
    ["My mission, should I choose to accept it, is to find peace with exactly who and what I am. To take pride in my thoughts, my appearance, my talents, my flaws, and to stop this incessant worrying that I can’t be loved as I am.", "Anaïs Nin"],
    ["I would like to sleep, in order to surrender myself to the dreamers, the way I surrender myself to those who read me with eyes wide open; in order to stop imposing, in this realm, the conscious rhythm of my thought.", "André Breton"],
    ["I can’t hold enough of you in my hands.", "Franz Kafka"],
    ["There is an artificial, miserable substitute for everything. Feverishly you contrive these substitutes, and if the fever has not already destroyed you, the hopelessness of the substitute will.", "Franz Kafka"],
    ["If you have reasons to love someone, you don’t love them.", "Slavoj Zizek"],
    ["You are the knife I turn inside myself; that is love. That, my dear, is love.", "Franz Kafka"],
    ["All you who sleep tonight<br>Far from the ones you love,<br>No hand to left or right<br>And emptiness above–<br>Know that you aren’t alone<br>The whole world shares your tears,<br>Some for two nights or one,<br>And some for all their years.", "Vikram Seth"],
    ["I don’t understand why we must do things in this world, why we must have friends and aspirations, hopes and dreams. Wouldn’t it be better to retreat to a faraway corner of the world, where all its noise and complications would be heard no more? Then we could renounce culture and ambitions; we would lose everything and gain nothing; for what is there to be gained from this world?", "Emil Cioran"],
    ["There is something at the bottom of every new human thought, every thought of genius, or even every earnest thought that springs up in any brain, which can never be communicated to others, even if one were to write volumes about it and were explaining one’s idea for thirty-five years; there’s something left which cannot be induced to emerge from your brain, and remains with you forever; and with it you will die, without communicating to anyone perhaps the most important of your ideas.", "Fyodor Dostoevsky"],
    ["I saw my life branching out before me like the green fig tree in the story. From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. One fig was a husband and a happy home and children, and another fig was a famous poet and another fig was a brilliant professor, and another fig was Ee Gee, the amazing editor, and another fig was Europe and Africa and South America, and another fig was Constantin and Socrates and Attila and a pack of other lovers with queer names and offbeat professions, and another fig was an Olympic lady crew champion, and beyond and above these figs were many more figs I couldn’t quite make out. I saw myself sitting in the crotch of this fig tree, starving to death, just because I couldn’t make up my mind which of the figs I would choose. I wanted each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my feet.", "Sylvia Plath"],
    ["How much better is silence; the coffee cup, the table. How much better to sit by myself like the solitary sea-bird that opens its wings on the stake. Let me sit here for ever with bare things, this coffee cup, this knife, this fork, things in themselves, myself being myself.", "Virginia Woolf"],
    ["I feel so intensely the delights of shutting oneself up in a little world of one’s own, with pictures and music and everything beautiful.", "Virginia Woolf"],
    ["I feel so intensely the delights of shutting oneself up in a little world of one’s own, with pictures and music and everything beautiful.", "Albert Camus"],
    ["Life is just this way, broken, and I am crazy to hope for something else.", "Miranda July"],
    [" I dream of a grave, deep and narrow, where we could clasp each other in our arms as with clamps, and I would hide my face in you and you would hide your face in me, and nobody would ever see us any more.", "Franz Kafka"],
    ["Although longing to recover, those who suffer intensely for a long time sense an irreparable loss in their improvement. If pain is part of your being, overcoming it is like a loss and causes a pang of regret. I owe to suffering the best parts of myself as well as that I have lost in life. Therefore I cannot curse it or love suffering. My feeling for it is hard to describe; it is strange, elusive and has the mysterious charm of twilight.", "Emil Cioran"],
    ["How much of life I have known: love, disillusion, madness, hatred, murderous passions. How to be honest. I see beginnings, flashes, yet how to organize them knowledgably, to finish them. I will write mad stories. But honest. I know the horror of primal feelings, obsessions.", "Sylvia Plath"],
    ["All men see fires, storms, explosions, or landscapes; but how many feel the flames, the lightnings, the whirlwinds, or the harmony? How many have an inner beauty that tinges their melancholy?", "Emil Cioran"],
    ["Melancholy is the illustrious companion of beauty; therefore I cannot conceive any beauty which does not possess sadness.", "Charles Baudelaire"],
    ["I’m not totally mad at you. I’m just sad. You’re all locked up in that little world of yours, and when I try knocking on the door, you just sort of look up for a second and go right back inside.", "Haruki Murakami"],
    ["I am constantly trying to communicate something incommunicable, to explain something inexplicable, to tell about something I only feel in my bones and which can only be experienced in those bones.", "Franz Kafka"],
    ["I have never found anybody who could stand to accept the daily demonstrative love I feel in me, and give back as good as I give.", "Sylvia Plath"],
    ["Can you understand? Someone, somewhere, can you understand me a little, love me a little? For all my despair, for all my ideals, for all that - I love life. But it is hard, and I have so much - so very much to learn.", "Sylvia Plath"],
    ["While melancholy is a state of vague dreaminess, never deep or intense, sadness is closed, serious, and painfully interiorized. One can be sad anywhere, but sadness grows in intensity in a closed space while melancholy flourishes in open spaces. Sadness almost always stems from a precise motive and is therefore concentrated, whereas there are no exterior causes for melancholy. I know why I am sad, but I do not know why I am melancholic.", "Emil Cioran"],
    ["Sometimes when I look at you, I feel I’m gazing at a distant star. It’s dazzling, but the light is from tens of thousands of years ago. Maybe the star doesn’t even exist any more. Yet sometimes that light seems more real to me than anything.", "Haruki Murakami"],
    ["If there were a map of the solar system, but instead of stars it showed people and their degrees of separation, my star would be the one you had to travel the most light-years from to get to his. You would die getting to him.", "Miranda July"],
    ["I can’t think of any greater happiness than to be with you all the time, without interruption, endlessly, even though I feel that here in this world there’s no undisturbed place for our love, neither in the village nor anywhere else; and I dream of a grave, deep and narrow, where we could clasp each other in our arms as with clamps, and I would hide my face in you and you would hide your face in me, and nobody would ever see us any more.", "Franz Kafka"],
    ["The deepest and most organic death is death in solitude, when even light becomes a principle of death. In such moments you will be severed from life, from love, smiles, friends and even from death. And you will ask yourself if there is anything besides the nothingness of the world and your own nothingness.", "Emil Cioran"],
    ["As I have no hope whatever and am nothing in your eyes, I speak openly: I see nothing but you everywhere, and all the rest is naught to me.", "Fyodor Dostoevsky"],
    ["If and when you fall in love, may you be happy with her. I don’t need to wish her anything, for she’ll be happy with you. May your sky always be clear, may your dear smile always be bright and happy, and may you be for ever blessed for that moment of bliss and happiness which you gave to another lonely and grateful heart. Isn’t such a moment sufficient for the whole of one’s life?", "Fyodor Dostoevsky"],
    ["I would love you as a bird loves flight, as meat loves salt, as a dog loves chase, as water finds its own level. Or I would not love you at all.", "Jeanette Winterson"],
    ["…and finally it was no longer anything because it was too much.", "Jean-Paul Sartre"],
    ["What is a poet? An unhappy person who conceals profound anguish in his heart but whose lips are so formed that as sighs and cries pass over them they sound like beautiful music.", "Soren Kierkegaard"],
    ["Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.", "Plato"],
    ["There is in every one of us, even those who seem to be most moderate, a type of desire that is terrible, wild, and lawless.", "Plato"],
    ["I reached the point of feeling a sort of secret, abnormal, despicable enjoyment in returning home to my corner on some disgusting Petersburg night, and being acutely conscious that that day I had again done something loathsome, that what was done could never be undone, and secretly, inwardly gnaw, gnaw at myself for it, nagging and consuming myself till at last the bitterness turned into some sort of shameful accursed sweetness, and finally into a real positive enjoyment.", "Fyodor Dostoevsky"],
    ["One can experience loneliness in two ways: by feeling lonely in the world or by feeling the loneliness of the world.", "Emil Cioran"],
    ["I live in my dreams — that’s what you sense. Other people live in dreams but not in their own. That’s the difference.", "Hermann Hesse"],
    ["Reality is what I make it. That is what I have said I believed. Then I look at the hell I am wallowing in, nerves paralyzed, action nullified - fear, envy, hate: all the corrosive emotions of insecurity biting away at my sensitive guts. Time, experience: the colossal wave, sweeping tidal over me, drowning, drowning. How can I ever find that permanence, that continuity with past and future, that communication with other human beings that I crave? Can I ever honestly accept an artificial imposed solution? How can I justify, how can I rationalize the rest of my life away?", "Sylvia Plath"],
    ["I lay and cried, and began to feel again, to admit I was human, vulnerable, sensitive. I began to remember how it had been before; how there was that germ of positive creativeness. Character is fate; and damn, I’d better work on my character. I had been withdrawing into a retreat of numbness: it is so much safer not to feel, not to let the world touch one. But my honest self revolted at this, hated me for doing this. Sick with conflict, destructive negative emotions, frozen into disintegration I was, refusing to articulate, to spew forth these emotions - they festered in me, growing big, distorted, like pus-bloated sores. Small problems, mentions of someone else’s felicity, evidence of someone else’s talents, frightened me, making me react hollowly, fighting jealousy, envy, hate. Feeling myself fall apart, decay, rot, and the laurels wither and fall away, and my past sins and omissions strike me with full punishment and import. All this, all this foul, gangrenous, sludge ate away at my insides. Silent, insidious.", "Sylvia Plath"],
    ["I sometimes have moments of such despair, such despair … Because in those moments I start to think that I will never be capable of beginning to live a real life; because I have already begun to think that I have lost all sense of proportion, all sense of the real and the actual; because, what is more, I have cursed myself; because my nights of fantasy are followed by hideous moments of sobering! And all the time one hears the human crowd swirling and thundering around one in the whirlwind of life, one hears, one sees how people live—that they live in reality, that for them life is not something forbidden, that their lives are not scattered for the winds like dreams or visions but are forever in the process of renewal, forever young, and that no two moments in them are ever the same; while how dreary and monotonous to the point of being vulgar is timorous fantasy, the slave of shadow, of the idea…", "Fyodor Dostoevsky"],
    ["My desire’s to stay alive and be no larger than a sliver lodged in my own heart.<br>And if the heart’s a rock I’ll whack it with this tin cup and eat the sparks, always screaming, always screaming for more.", "Gregory Orr"],
    ["Things are not as easily understood nor as expressible as people usually would like us to believe. Most happenings are beyond expression; they exist where a word has never intruded.", "Rainer Maria Rilke"],
    ["So let me wallow in my wounds, in heavy air and sea; tormented by watery silence and murderous air; tortures that jeer at me, atrociously, in stormy silence.", "Arthur Rimbaud"],
    ["So many people are shut up tight inside themselves like boxes, yet they would open up, unfolding quite wonderfully, if only you were interested in them.", "Sylvia Plath"],
    ["Already I realize certain feelings I was not aware of, like the fear of being hurt.<br>I despise my own hypersensitiveness, which requires so much reassurance. It is certainly abnormal to crave so much to be loved and understood.", "Anaïs Nin"],
    ["The light of memory, or rather the light that memory lends to things, is the palest light of all … I am not quite sure whether I am dreaming or remembering, whether I have lived my life or dreamed it. Just as dreams do, memory makes me profoundly aware of the unreality, the evanescence of the world, a fleeting image in the moving water.", "Eugène Ionesco"],
    ["The people I find irresistible are those in whom the child was not killed. The qualities of openness, trust, inquisitiveness, tenderness, eagerness, enthusiasm, others undefinable, come from the child in us and are the source of charm. The laughter and the smile that do not calculate, the spontaneity that is not arrested. I cannot remember “adult” charm or whether it even exists.", "Anaïs Nin"],
    ["And sometimes I have kept my feelings to myself, because I could find no language to describe them in.", "Jane Austen"],
    ["I have the most conflicting opinions, the most divergent beliefs. For it’s never I who thinks, speaks or acts. It’s always one of my dreams, which I momentarily embody, that thinks, speaks and acts for me. I open my mouth, but it’s I-another who speaks. The only thing I feel to be really mine is a huge incapacity, a vast emptiness, an incompetence for everything that is life. I don’t know the gestures for any real act…<br>I never learned how to exist.", "Fernando Pessoa"],
    ["I wanted to withdraw from all the painful reminders of vitality - to hide away alone in a peaceful stagnant pool, and not be like a crippled stick entangled near the bank of a jubilantly roaring river, torn at continually by the noisy current.", "Sylvia Plath"],
    ["My thought is me: that’s why I can’t stop. I exist because I think… and I can’t stop myself from thinking. At this very moment - it’s frightful - if I exist, it is because I am horrified at existing. I am the one who pulls myself from the nothingness to which I aspire.", "Jean-Paul Sartre"],
    ["I am nothing. I’m like someone who’s been thrown into the ocean at night, floating all alone. I reach out, but no one is there. I call out, but no one answers. I have no connection to anything.", "Haruki Murakami"],
    ["But what seems like a reasonable distance to one person might feel too far to somebody else.", "Haruki Murakami"],
    ["The body shuts down when it has too much to bear; goes its own way quietly inside, waiting for a better time, leaving you numb and half alive.", "Jeanette Winterson"],
    ["We sometimes encounter people, even perfect strangers, who begin to interest us at first sight, somehow suddenly, all at once, before a word has been spoken.", "Fyodor Dostoevsky"],
    ["May your sky be clear, may your sweet smile be bright and untroubled, and may you be blessed for that moment of blissful happiness which you gave to another, lonely and grateful heart!<br>My God, a whole moment of happiness ! Is that too little for the whole of a man’s life?", "Fyodor Dostoevsky"],
    ["Sometimes I muse about how wonderful it would be if I could string all my dreams together into one continuous life, a life consisting of entire days full of imaginary companions and created people.", "Fernando Pessoa"],
    ["Is not everything final? What is the anxiety of nothingness if not the perverse joy of our final sadness, our exalted love for the eternity of nothingness and the transience of existence? Can it really be that for us existence means exile, and nothingness, home?", "Emil Cioran"],
    ["…there was the sea between us again.", "Sylvia Plath"],
    ["Freedom is the possibility of isolation. You are free if you can withdraw from people, not having to seek them out for the sake of money, company, love, glory or curiosity, none of which can thrive in silence and solitude. If you can’t live alone, you were born a slave.", "Fernando Pessoa"],
    ["There I sat, probably looking so dreadful that nothing had the courage to stand by me; not even the candle, which I had just done the service of lighting it, would have anything to do with me. It burned away there by itself, as in an empty room. My last hope was always the window. I imagined that outside there, there still might be something that belonged to me, even now, even in this sudden poverty of dying. But scarcely had I looked thither when I wished the window had been barricaded, blocked up, like the wall. For now I knew that things were going on out there in the same indifferent way, that out there, too, there was nothing but my loneliness. The loneliness I had brought upon myself and to the greatness of which my heart no longer stood in any sort of proportion. People came to my mind whom I had once left, and I did not understand how one could forsake people.", "Rainer Maria Rilke"],
    ["How Distant Everything Is!<br>I don’t understand why we must do things in this world, why we must have friends and aspirations, hopes and dreams. Wouldn’t it be better to retreat to a faraway corner of the world, where all its noise and complications would be heard no more? Then we could renounce culture and ambitions; we would lose everything and gain nothing; for what is there to be gained from this world? There are people tho whom gain is unimportant, who are hopelessly unhappy and lonely. We are so closed to one another! And yet, were we to be totally open to each other, reading into the depths of our souls, how much of our destiny would we see? We are so lonely in life that we must ask ourselves if the loneliness of dying is not a symbol of our human existence. Can there be any consolation at the last moment? This willingness to live and die in society is a mark of great deficiency. It is a thousand times preferable to die somewhere alone and abandoned so that you can die without melodramatic posturing, unseen by anyone. I despise people who on their deathbed master themselves and adopt a pose in order to impress. Tears do not burn except in solitude. Those who ask to be surrounded by friends when they die do so out of fear and inability to live their final moments alone. They want to forget death at the moment of death. They lack inifinite heroism. Why don’t they lock their door and suffer those maddening sensations with a lucidity and a fear beyond all limits?<br>We are so isolated from everything! But isn’t everything equally inaccessible to us? The deepest and most organic death is death in solitude, when even light becomes a principle of death. In such moments you will be severed from life, from love, smiles, friends and even from death. And you will ask yourself if there is anything besides the nothingness of the world and your own nothingness.", "Emil Cioran"],
    ["Sometimes fate is like a small sandstorm that keeps changing directions. You change direction but the sandstorm chases you. You turn again, but the storm adjusts. Over and over you play this out, like some ominous dance with death just before dawn.", "Haruki Murakami"],
    ["I am a forest, and a night of dark trees: but he who is not afraid of my darkness, will find banks full of roses under my cypresses.", "Friedrich Nietzsche"],
    ["Having never discovered qualities in myself that might attract someone else, I could never believe that anyone felt attracted to me. This opinion of myself would be stupidly modest, if facts on facts – those unexpected facts I expected – didn’t always confirm it.", "Fernando Pessoa"],
    ["Suddenly I’m all alone in the world. I see all this from the summit of a mental rooftop. I’m alone in the world. To see is to be distant. To see clearly is to halt. To analyze is to be foreign. No one who passes by touches me. Around me there is only air. I’m so isolated I can feel the distance between me and my suit. I’m a child in a nightshirt carrying a dimly lit candle and traversing a huge empty house.", "Fernando Pessoa"],
    ["Words do not express thoughts very well. They always become a little different immediately after they are expressed, a little distorted, a little foolish.", "Hermann Hesse"],
    ["I was full of letters I hadn’t sent you.", "Anne Sexton"],
    ["To be silent; to be alone. All the being and the doing, expansive, glittering, vocal, evaporated; and one shrunk, with a sense of solemnity, to being oneself, a wedge-shaped core of darkness, something invisible to others.", "Virginia Woolf"],
    ["Being with you or without you is how I measure my time.", "Jorge Luis Borges"],
    ["My whole life has been walking by the side of a bottomless chasm, jumping from stone to stone. Sometimes I try to leave my narrow path and join the swirling mainstream of life, but I always find myself drawn inexorably back to the chasm’s edge, and there I shall walk until I finally fall into the abyss.", "Edvard Munch"],
    ["Suddenly she realized that what she was regretting was not the lost past but the lost future, not what had not been but what would never be.", "F.Scott Fitzgerald"],
    ["Killing myself was a matter of such indifference to me that I felt like waiting for a moment when it would make some difference.", "Fyodor Dostoevsky"],
    ["I have spent my life trying to understand the function of remembering, which is not the opposite of forgetting, but rather its inner lining. We don’t remember. We write memory much as history is rewritten.", "Chris Marker"],
    ["I have such a fear of finding another like myself, and such a desire to find one! I am so utterly lonely, but I also have such a fear that my isolation be broken through, and I no longer be the head and ruler of my universe.", "Anaïs Nin"],
    ["And the aura of you remains, remains, remains…", "Anne Sexton"],
    ["Most of the dandelions had changed from suns into moons.", "Vladimir Nabokov"],
    ["All women become like their mothers. That is their tragedy. No man does, and that is his.", "Oscar Wilde"],
    ["Perhaps my life is nothing but an image of this kind; perhaps I am doomed to retrace my steps under the illusion that I am exploring, doomed to try and learn what I simply should recognize, learning a mere fraction of what i have forgotten.", "André Breton"],
    ["All I know is that this substitution of persons stops with you, because nothing can be substituted for you, and because for me it was for all eternity that this succession of terrible and charming enigmas was to come to an end at your feet. You are not an enigma for me.I say that you have turned me from enigmas forever.", "André Breton"],
    ["Man is a mystery. It needs to be unravelled, and if you spend your whole life unravelling it, don’t say that you’ve wasted time. I am studying that mystery because I want to be a human being.", "Fyodor Dostoevsky"],
    ["Men are never convinced of your reasons, of your sincerity, of the seriousness of your sufferings, except by your death. So long as you are alive, your case is doubtful; you have a right only to their skepticism.", "Albert Camus"],
    ["Every act of rebellion expresses a nostalgia for innocence and an appeal to the essence of being.", "Albert Camus"],
    ["The sun is a thief: she lures the sea<br>and robs it. The moon is a thief:<br>he steals his silvery light from the sun.<br>The sea is a thief: it dissolves the moon.", "Vladimir Nabokov"],
    ["Dreams have only one owner at a time. That’s why dreamers are lonely.", "William Faulkner"],
    ["In dreams you don’t need to make any distinctions between things. Not at all. Boundaries don’t exist. So in dreams there are hardly ever collisions. Even if there are, they don’t hurt. Reality is different. Reality bites. Reality, reality.", "Haruki Murakami"],
    ["If a person continues to see only giants, it means he is still looking at the world through the eyes of a child.", "Anaïs Nin"],
    ["For now she need not think of anybody. She could be herself, by herself. And that was what now she often felt the need of - to think; well not even to think. To be silent; to be alone. All the being and the doing, expansive, glittering, vocal, evaporated; and one shrunk, with a sense of solemnity, to being oneself, a wedge-shaped core of darkness, something invisible to others… and this self having shed its attachments was free for the strangest adventures.", "Virginia Woolf"],
    ["I can only note that the past is beautiful because one never realises an emotion at the time. It expands later, and thus we don’t have complete emotions about the present, only about the past.", "Virginia Woolf"],
    ["All bad poetry springs from genuine feeling. To be natural is to be obvious, and to be obvious is to be inartistic.", "Oscar Wilde"],
    ["I’m lost. And it’s my own fault. It’s about time I figured out that I can’t ask people to keep me found.", "Anne Sexton"],
    ["For I have always been a seeker, a dreamer, and a ponderer on seeking and dreaming…", "H.P. Lovecraft"],
    ["All life is only a set of pictures in the brain, among which there is no difference betwixt those born of real things and those born of inward dreamings, and no cause to value the one above the other.", "H.P. Lovecraft"],
    ["For I have always been a seeker, a dreamer, and a ponderer on seeking and dreaming…", "Pablo Neruda"],
    ["I have had to experience so much stupidity, so many vices, so much error, so much nausea, disillusionment and sorrow, just in order to become a child again and begin anew. I had to experience despair, I had to sink to the greatest mental depths, to thoughts of suicide, in order to experience grace.", "Hermann Hesse"],
    ["Science can never reach a final goal or give a satisfactory explanation. It never aims at the inmost nature of the world; it can never get beyond the conscious representation; on the contrary, it really tells us nothing more than the relation of one representation to another.", "Arthur Schopenhauer"],
    ["My real self wanders elsewhere, far away, wanders on and on invisibly and has nothing to do with my life.", "Hermann Hesse"],
    ["It is not worth the bother of killing yourself, since you always kill yourself too late.", "Emil Cioran"],
    ["I am pleasantly located in the deep sea, but love will row you out, if her hands are strong…", "Emily Dickinson"],
    ["Now I have expanded my life to accommodate my thoughts about you, and there is hardly a quarter of an hour of my waking time when I haven’t thought about you, and many quarter-hours when I do nothing else.", "Franz Kafka"],
    ["I am an absolute sceptic and materialist, and regard the universe as a wholly purposeless and essentially temporary incident in the ceaseless and boundless rearrangements of electrons, atoms, and molecules which constitute the blind but regular mechanical patterns of cosmic activity. Nothing really matters, and the only thing for a person to do is to take the artificial and traditional values he finds around him and pretend they are real; in order to retain that illusion of significance in life which gives to human events their apparent motivation and semblance of interest.", "H.P. Lovecraft"],
    ["Memories and possibilities are even more hideous than realities.", "H.P. Lovecraft"],
    ["Life’s true face is the skull.", "Nikos Kazantzakis"],
    ["I felt it shelter to speak to you.", "Emily Dickinson"],
    ["And I would hide my face in you and you would hide your face in me, and nobody would ever see us any more.", "Franz Kafka"],
    ["Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.", "Carl Sagan"],
    ["We think there are beings like ourselves around us and instead there is nothing but ice and stones speaking a strange language; we are on the point of greeting a friend but our arm falls inert, the smile dies away because we are completely alone.", "Dino Buzzati"],
    ["What a strange machine man is! You fill him with bread, wine, fish, radishes, and out of him come sighs, laughter and dreams.", "Nikos Kazantzakis"],
    ["The real meaning of enlightenment is to gaze with undimmed eyes on all darkness.", "Nikos Kazantzakis"],
    ["My soul comes from better worlds and I have an incurable homesickness of the stars.", "Nikos Kazantzakis"],
    ["…By being too sensitive I have wasted my life.", "Arthur Rimbaud"],
    ["I want you always to remember me. Will you remember that I existed, and that I stood next to you here like this?", "Haruki Murakami"],
    ["I am a dreamer. I know so little of real life that I just can’t help re-living such moments as these in my dreams, for such moments are something I have very rarely experienced. I am going to dream about you the whole night, the whole week, the whole year", "Fyodor Dostoevsky"],
    ["What a weary time those years were — to have the desire and the need to live but not the ability.", "Charles Bukowski"],
    ["I am not well; I could have built the Pyramids with the effort it takes me to cling on to life and reason.", "Franz Kafka"],
    ["You say I resemble a flower; I partly agree; My brain is governed by black petals of burnt daisies.", "Anne Sexton"],
    ["I don’t want to know that you are fond of me. If I did, how could I, fool that I am, go on sitting in my office, or here at home, instead of leaping onto a train with my eyes shut and opening them only when I am with you.", "Franz Kafka"],
    ["I have endured so long<br>That I have forgotten everything;<br>Fear and suffering <br>Have flown to the skies.<br>And morbid thirst<br>Darkens my veins.", "Arthur Rimbaud"],
    ["4 December. To die would mean nothing else than to surrender a nothing to the nothing, but that would be impossible to conceive, for how could a person, even only as a nothing, consciously surrender himself to the nothing, and not merely to an empty nothing but rather to a roaring nothing whose nothingness consists only in its incomprehensibility.", "Franz Kafka"],
    ["To pity those that know her not<br>Is helped by the regret<br>That those who know her, know her less<br>The nearer her they get.", "Emily Dickinson"],
    ["I inhabit the wax image of myself, a doll’s body.<br>Sickness begins here: I am the dartboard for witches.<br>Only the devil can eat the devil out.<br>In the month of red leaves I climb to a bed of fire.", "Sylvia Plath"],
    ["And the night smells like snow. Walking home for a moment you almost believe you could start again. And an intense love rushes to your heart, and hope. It’s unendurable, unendurable.", "Franz Wright"],
    ["Once one has understood, it would be best to drop dead on the spot. What is to understand? What we have really grasped cannot be expressed in any way at all, and cannot be transmitted to anyone else, not even to oneself, so that we die without knowing the exact nature of our own secret.", "Emil Cioran"],
    ["Now the sirens have a still more fatal weapon than their song, namely their silence. Someone might have escaped from their singing; but from their silence, certainly never.", "Franz Kafka"],
    ["I am the sort of man who has changed completely under the effect of suffering, even though this transformation may simply be the intensification of elements already there. Thus amplified, they gave an entirely new perspective on life. I believe frenetically and fanatically, in the virtues of suffering and of anxiety, and I believe in them especially since, though I’ve suffered greatly and despaired much, I nevertheless acquired through them a sense of my own destiny, a sort of weird enthusiasm for my mission. On the heights of the most terrifying despair, I experience the joy of having a destiny, of living a life of successive deaths and transfigurations, of turning every moment into a cross-road. And I am proud that my life begins with death, unlike the majority of people, who end with death. I feel as if my death were in the past, and the future looks to me like a sort of personal illumination.", "Emil Cioran"],
    ["You who suffer because you love, love still more. To die of love, is to live by it.", "Victor Hugo"],
    ["I suffer cruelly. Misunderstandings and worry hurt me instantly like the stab of a knife.", "Antoine de Saint-Exupéry"],
    ["The greatest lesson the depressive learns: Nothing in the world is inherently compelling… Nothing is either good or bad, desirable or undesirable, or anything else except that it is made so by laboratories inside us producing the emotions on which we live. And to live on our emotions is to live arbitrarily, inaccurately – imparting meaning to what has none of its own. Yet what other way is there to live?", "Thomas Ligotti"],
    ["During last night’s insomnia, as these thoughts came and went between my aching temples, I realised once again, what I had almost forgotten in this recent period of relative calm, that I tread a terribly tenuous, indeed almost non-existent soil spread over a pit full of shadows, whence the powers of darkness emerge at will to destroy my life…", "Franz Kafka"],
    ["So that’s when it hit me. These guys are fakes. All they’ve got on their minds is impressing the new girls with the big words they’re so proud of, while sticking their hands up their skirts. And when they graduate, they cut their hair short and march off to work for Mitsubishi or IBM or Fuji Bank. They marry pretty wives who’ve never read Marx and have kids they give fancy new names to that are enough to make you puke. Smash what educational-industrial complex? Don’t make me laugh!", "Haruki Murakami"],
    ["‘I love humanity,’ he said, ‘but I wonder at myself. The more I love humanity in general, the less I love man in particular. In my dreams,’ he said, 'I have often come to making enthusiastic schemes for the service of humanity, and perhaps I might actually have faced crucifixion if it has been suddenly necessary; and yet I am incapable of living in the same room with anyone for two days together, as I know by experience. As soon as anyone is near me, his personality disturbs my self-complacency and restricts my freedom. In twenty-four hours I begin to hate the best of men: one because he’s too long over his dinner; another because he has a cold and keeps on blowing his nose. I become hostile to people the moment they come close to my. But it has always happened that the more I detest men individually the more ardent becomes my love for humanity.", "Fyodor Dostoevsky"],
    ["I have spent all my life resisting the desire to end it.", "Franz Kafka"],
    ["No other life forms know they are alive, and neither do they know they will die. This is our curse alone.", "Thomas Ligotti"],
    ["Not even the human<br>imagination satisfies<br>the endless emptiness of the soul.", "Allen Ginsberg"],
    ["I am alone, I thought, and they are everybody.", "Fyodor Dostoevsky"],
    ["My thoughts are crabbed and sallow,<br>My tears like vinegar,<br>Or the bitter blinking yellow<br>Of an acetic star.", "Sylvia Plath"],
    ["There is no reality except the one contained within us. That is why so many people live such an unreal life. They take the images outside of them for reality and never allow the world within to assert itself.", "Hermann Hesse"],
    ["If time is not real, then the dividing line between this world and eternity, between suffering and bliss, between good and evil, is also an illusion.", "Hermann Hesse"],
    ["I have this vision: That I would finally come and find you. Scattered pieces of distance would not stand in my way. Not needing words; the barest of glimpses would suffice for you and me.", "Franz Kafka"],
    ["I do know that for the sympathy of one living being, I would make peace with all. I have love in me the likes of which you can scarcely imagine and rage the likes of which you would not believe. If I cannot satisfy the one, I will indulge the other.", "Mary Shelley"],
    ["How dangerous is the acquirement of knowledge and how much happier that man is who believes his native town to be the world, than he who aspires to be greater than his nature will allow.", "Mary Shelley"],
    ["My life does not run or flow, but crawls along.", "Anton Chekhov"],
    ["I feel more and more every day, as my imagination strengthens, that I do not live in this world alone but in a thousand worlds.", "John Keats"],
    ["The truth is that human beings have neither kindness, nor faith, nor charity beyond what serves to increase the pleasure of the moment. They hunt in packs. Their packs scour the desert and vanish screaming into the wilderness.", "Virginia Woolf"],
    ["What is the meaning of life? That was all—a simple question; one that tended to close in on one with years. The great revelation had never come. The great revelation perhaps never did come. Instead there were little daily miracles, illuminations, matches struck unexpectedly in the dark.", "Virginia Woolf"],
    ["Each had his past shut in him like the leaves of a book known to him by heart; and his friends could only read the title.", "Virginia Woolf"],
    ["You’re sorry that the ephemeral beauty has faded so rapidly, so irretrievably, that it flashed so deceptively and pointlessly before your eyes—you’re sorry, for you didn’t even have time to fall in love.", "Fyodor Dostoevsky"],
    ["How can I begin anything new with all of yesterday in me?", "Leonard Cohen"],
    ["I can love only what I can place so high above me that I cannot reach it.", "Franz Kafka"],
    ["I suppose like others<br>I have come through fire and sword,<br>love gone wrong,<br>head-on crashes, drunk at sea,<br>and I have listened to the simple sound of water running<br>in tubs<br>and wished to drown", "Charles Bukowski"],
    ["In One of the Earth’s Attics: “I have dreamed of distant springs, of a sun shining on nothing but seafoam and the oblivion of my birth, of a sun opposed to the earth and to this disease of finding nothing anywhere but the desire to be somewhere else. The earthly fate – who has inflicted it upon us, who has chained us to this morose matter, a petrified tear against which – born of time – our tears shatter, whereas it has fallen, immemorial, from God’s first shudder?<br>I have loathed the planet’s noons and midnights, I have longed for a world without weather, without hours and the fear that swells them, I have hated the sighs of mortals under the weight of ages. Where is the moment without end and without desire, and that primal vacancy insensitive to the presentiments of disaster and of life? I have sought for the geography of Nothingness, of unknown seas and another sun – pure of the scandal of life-bearing rays – I have sought for the rocking of a skeptical ocean in which islands and axioms are drowned, the vast liquid narcotic, tepid and sweet and tired of knowledge…<br>This earth – sin of the Creator! But I no longer want to expiate others’ sins. I want to be cured of my begetting in an agony outside the continents, in some fluid desert, in an impersonal shipwreck.", "Emil Cioran"],
    ["The pessimist’s credo, or one of them, is that nonexistence never hurts anyone and existence hurts everyone. Although our selves may be illusory creations of consciousness, our pain is nonetheless real.", "Thomas Ligotti"],
    ["I feel as if I had been in the world a thousand years, and I trail my life behind me like an endless scarf. Often I have no desire to live at all.", "Anton Chekhov"],
    ["I was settled into nothingness; a kind of non-being, and I accepted it. It didn’t make for an interesting person. I didn’t want to be interesting, it was too hard. What I really wanted was only a soft, hazy space to live in, and to be left alone.", "Charles Bukowski"],
    ["I don’t want to see anyone. I lie in the bedroom with the curtains drawn and nothingness washing over me like a sluggish wave. Whatever is happening to me is my own fault. I have done something wrong, something so huge I can’t even see it, something that’s drowning me. I am inadequate and stupid, without worth. I might as well be dead.", "Margaret Atwood"],
    ["My presence in this world will disturb a few tranquil lives and will unsettle the unconscious and pleasant naiveté of others. Although I feel that my tragedy is the greatest in history—greater than the fall of empires—I am nevertheless aware of my total insignificance. I am absolutely persuaded that I am nothing in this universe; yet I feel that mine is the only real existence.", "Emil Cioran"],
    ["Two souls don’t find each other by simple accident.", "Jorge Luis Borges"],
    ["How did I get into the world? Why was I not asked about it and why was I not informed of the rules and regulations but just thrust into the ranks as if I had been bought by a peddling shanghaier of human beings? How did I get involved in this big enterprise called actuality? Why should I be involved? Isn’t it a matter of choice? And if I am compelled to be involved, where is the manager—I have something to say about this. Is there no manager? To whom shall I make my complaint?", "Soren Kierkegaard"],
    ["I’m a ghost that everyone can see", "Franz Wright"],
    ["I can’t think of any greater happiness than to be with you all the time, without interruption, endlessly, even though I feel that here in this world there’s no undisturbed place for our love, neither in the village nor anywhere else; and I dream of a grave, deep and narrow, where we could clasp each other in our arms as with clamps, and I would hide my face in you and you would hide your face in me, and nobody would ever see us any more.", "Franz Kafka"],
    ["He’s more myself than I am. Whatever our souls are made of, his and mine are the same.", "Emily Brontë"],
    ["I will no longer mutilate and destroy myself in order to find a secret behind the ruins.", "Hermann Hesse"],
    ["Do all people have that? A face, a phrase, a landscape, an air bubble from the past suddenly floating up as if released by the head warden’s child from a cell in the brain while the mind is at work on some totally different matter? Something of the sort also occurs just before falling asleep when what you think you are thinking is not at all what you think. Or two parallel passenger trains of thought, one overtaking the other.", "Vladimir Nabokov"],
    ["The beauty of flames lies in their strange play, beyond all proportion and harmony. Their diaphanous flare symbolizes at once grace and tragedy, innocence and despair, sadness and voluptuousness. The burning transcendence has something of the lightness of great purifications. I wish the fiery transcendence would carry me up and throw me into a sea of flames, where, consumed by their delicate and insidious tongues, I would die an ecstatic death. The beauty of flames creates the illusion of a pure, sublime death similar to the light of dawn. Immaterial, death in flames is like a burning of light, graceful wings. Do only butterflies die in flames? What about those devoured by the flames within them?", "Emil Cioran"],
    ["The distance between the crowd, between the others and me, grows wider … I feel the distance like a wound.", "Anaïs Nin"],
    ["I was made of delicate substance, mysterious time.<br>Perhaps the source is within me.<br>Perhaps the days emerge,<br>fatal and illusory,<br>from my shadow", "Jorge Luis Borges"],
    ["Give me that dark moment I will carry it everywhere like a mouthful of rain.", "Rainer Maria Rilke"],
    ["Solitude is indeed dangerous for a working intelligence. We need to have around us people who think and speak. When we are alone for a long time we people the void with phantoms.", "Guy De Maupassant"],
    ["To change one’s life:<br>1. Start immediately.<br>2. Do it flamboyantly.<br>3. No exceptions.", "William James"],
    ["The cradle rocks above an abyss, and common sense tells us that our existence is but a brief crack of light between two eternities of darkness. Although the two are identical twins, man, as a rule, views the prenatal abyss with more calm than the one he is heading for (at some forty-five hundred heartbeats an hour). I know, however, of a young chronophobiac who experienced something like panic when looking for the first time at homemade movies that had been taken a few weeks before his birth. He saw a world that was practically unchanged-the same house, the same people- and then realized that he did not exist there at all and that nobody mourned his absence. He caught a glimpse of his mother waving from an upstairs window, and that unfamiliar gesture disturbed him, as if it were some mysterious farewell. But what particularly frightened him was the sight of a brand-new baby carriage standing there on the porch, with the smug, encroaching air of a coffin; even that was empty, as if, in the reverse course of events, his very bones had disintegrated.", "Vladimir Nabokov"],
    ["I don’t want to be present in the events that I participate in. I try to become invisible. I perceive myself as someone who shouldn’t exist", "Slavoj Zizek"],
    ["Perhaps we don't like what we see: our hips, our loss of hair, our shoe size, our dimples, our knuckles too big, our eating habits, our disposition. We have disclosed these things in secret, likes and dislikes, behind doors with locks, our lonely rooms, our messy desks, our empty hearts, our sudden bursts of energy, our sudden bouts of depression. Don’t worry. Put away your mirrors and your beauty magazines and your books on tape. There is someone right here who knows you more than you do, who is making room on the couch, who is fixing a meal, who is putting on your favorite record, who is listening intently to what you have to say, who is standing there with you, face to face, hand to hand, eye to eye, mouth to mouth. There is no space left uncovered. This is where you belong.", "Sufjan Stevens"],
    ["Sometimes I feel like a caretaker of a museum — a huge, empty museum where no one ever comes, and I’m watching over it for no one but myself.", "Haruki Murakami"],
    ["My head is a hive of words that won’t settle.", "Virginia Woolf"],
    ["There is an aching void in my heart which I am convinced the world can never fill.", "Emily Dickinson"],
    ["What matters is precisely this; the unspoken at the edge of the spoken.", "Virginia Woolf"],
    ["He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.", "Leo Tolstoy"],
    ["Give me the flame no dampness dulls,<br>The passion of the instinctive pulse,<br>Love steadfast as a fixed star,<br>Tender as doves with nestlings are,<br>More large than time, more strong than death", "Christina Rosseti"],
    ["At night, my dreams rhyme, and all day I have an aftertaste of insomnia.", "Vladimir Nabokov"],
    ["I’ll give you the secret of secrets. Mirrors are the doors through which Death comes and goes. Look at yourself in a mirror all your life… and you’ll see Death at work like bees in a hive of glass.", "Jean Cocteau"],
    ["A small yellow tongue flickers.<br>The candle drips and drips.<br>This is how you and I live—<br>Our souls flare, flesh disappears.", "Arseny Tarkovsky"],
    ["People who live in society have learnt how to see themselves, in mirrors, as they appear to their friends. I have no friends: is that why my flesh is so naked?", "Jean-Paul Sartre"],
    ["Remember, remember, this is now, and now, and now. Live it, feel it, cling to it. I want to become acutely aware of all I’ve taken for granted.", "Sylvia Plath"],
    ["Where am I when I’m not in reality or in my imagination?", "Andrei Tarkovsky"],
    ["A small yellow tongue flickers.<br>The candle drips and drips.<br>This is how you and I live—<br>our souls flare, flesh disappears.", "Arseny Tarkovsky"]
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
    var plath = ['images/plath.jpg', 'images/plath2.jpg', 'images/plath3.jpg', 'images/plath4.jpg', 'images/plath5.jpg', 'images/plath6.jpg', 'images/plath7.jpg', ];
    var dickinson = ['images/dickinson.jpg', 'images/dickinson2.jpg', 'images/dickinson3.jpg', ];
    var woolf = ['images/woolf.jpg', 'images/woolf2.jpg', 'images/woolf3.jpg', ];
    var pessoa = ['images/pessoa.jpg', 'images/pessoa2.jpg', 'images/pessoa3.jpg', ];
    var fsfitzgerald = ['images/fsfitzgerald.jpg', 'images/fsfitzgerald2.jpg', 'images/fsfitzgerald3.jpg', ];
    var vangogh = ['images/vangogh.jpg', 'images/vangogh2.jpg', 'images/vangogh3.jpg', ];
    var kundera = ['images/kundera.jpg', 'images/kundera2.jpg', 'images/kundera3.jpg', ];
    var kchopin = ['images/kchopin.jpg', 'images/kchopin2.jpg', 'images/kchopin3.jpg', ];
    var hhesse = ['images/hesse.jpg', 'images/hesse2.jpg', 'images/hesse3.jpg', ];
    var rossetti = ['images/rossetti.jpg', 'images/rossetti2.jpg', 'images/rossetti3.jpg', ];
    var strindberg = ['images/strindberg.jpg', 'images/strindberg2.jpg', 'images/strindberg3.jpg', ];
    var barthes = ['images/barthes.jpg', 'images/barthes2.jpg', 'images/barthes3.jpg', ];
    var anaisnin = ['images/anaisnin.jpg', 'images/anaisnin2.jpg', 'images/anaisnin3.jpg', 'images/anaisnin4.jpg', ];
    var calvino = ['images/calvino.jpg', 'images/calvino2.jpg', 'images/calvino3.jpg', ];
    var tarkovsky = ['images/tarkovsky.jpg', 'images/tarkovsky2.jpg', 'images/tarkovsky3.jpg', 'images/tarkovsky4.jpg', 'images/tarkovsky5.jpg', 'images/tarkovsky6.jpg', ];
    var nabokov = ['images/nabokov.jpg', 'images/nabokov2.jpg', 'images/nabokov3.jpg', ];
    var desnos = ['images/desnos.jpg', 'images/desnos2.jpg', 'images/desnos3.jpg', ];
    var murakami = ['images/murakami.jpg', 'images/murakami2.jpg', 'images/murakami3.jpg', 'images/murakami4.jpg', 'images/murakami5.jpg', 'images/murakami6.jpg', ];
    var rilke = ['images/rilke.jpg', 'images/rilke2.jpg', 'images/rilke3.jpg', 'images/rilke4.jpg', 'images/rilke5.jpg', ];
    var pascal = ['images/pascal.jpg', 'images/pascal2.jpg', 'images/pascal3.jpg', ];
    var schopenhauer = ['images/schopenhauer.jpg', 'images/schopenhauer2.jpg', 'images/schopenhauer3.jpg', ];
    var proust = ['images/proust.jpg', 'images/proust2.jpg', 'images/proust3.jpg', ];
    var rimbaud = ['images/rimbaud.jpg', 'images/rimbaud2.jpg', 'images/rimbaud3.jpg', ];
    var camus = ['images/camus.jpg', 'images/camus2.jpg', 'images/camus3.jpg', ];
    var dostoevsky = ['images/dostoevsky.jpg', 'images/dostoevsky2.jpg', 'images/dostoevsky3.jpg', ];
    var cioran = ['images/cioran.jpg', 'images/cioran2.jpg', 'images/cioran3.jpg', ];
    var sexton = ['images/sexton.jpg', 'images/sexton2.jpg', 'images/sexton3.jpg', ];
    var tseliot = ['images/tseliot.jpg', 'images/tseliot2.jpg', 'images/tseliot3.jpg', 'images/tseliot4.jpg', ];
    var sedgwick = ['images/sedgwick.jpg', 'images/sedgwick2.jpg', 'images/sedgwick3.jpg', ];
    var jburroughs = ['images/jburroughs.jpg', 'images/jburroughs2.jpg', 'images/jburroughs3.jpg', ];
    var jeanrhys = ['images/jeanrhys1.jpg', 'images/jeanrhys2.jpg', ];
    var santayana = ['images/santayana.jpg', 'images/santayana2.jpg', ];
    var kazantzakis = ['images/kazantzakis.jpg', 'images/kazantzakis2.jpg', 'images/kazantzakis3.jpg', ];
    var malouf = ['images/malouf.jpg', 'images/malouf2.jpg', ];
    var plato = ['images/plato.jpg', 'images/plato2.jpg', 'images/plato3.jpg', ];
    var atwood = ['images/atwood.jpg', 'images/atwood2.jpg', 'images/atwood3.jpg', 'images/atwood4.jpg', 'images/atwood5.jpg', ];
    var sontag = ['images/sontag.jpg', 'images/sontag2.jpg', 'images/sontag3.jpg', 'images/sontag4.jpg', ];
    var zizek = ['images/zizek.jpg', 'images/zizek2.jpg', 'images/zizek3.jpg', ];
    var kafka = ['images/kafka.jpg', 'images/kafka2.jpg', 'images/kafka3.jpg', ];
    var orr = ['images/orr.jpg', 'images/orr2.jpg', ];
    var breton = ['images/breton.jpg', 'images/breton2.jpg', 'images/breton3.jpg', ];
    var vikram = ['images/vikram.jpg', 'images/vikram2.jpg', 'images/vikram3.jpg', ];
    var mjuly = ['images/mjuly.jpg', 'images/mjuly2.jpg', 'images/mjuly3.jpg', 'images/mjuly4.jpg', 'images/mjuly5.jpg', 'images/mjuly6.jpg', ];
    var baudelaire = ['images/baudelaire.jpg', 'images/baudelaire2.jpg', 'images/baudelaire3.jpg', 'images/baudelaire4.jpg', ];
    var sartre = ['images/sartre.jpg', 'images/sartre2.jpg', 'images/sartre3.jpg', ];
    var ionesco = ['images/ionesco.jpg', 'images/ionesco2.jpg', 'images/ionesco3.jpg', ];
    var austen = ['images/austen.jpg', 'images/austen2.jpg', 'images/austen3.jpg', ];
    var nietzsche = ['images/nietzsche.jpg', 'images/nietzsche2.jpg', 'images/nietzsche3.jpg', ];
    var borges = ['images/borges.jpg', 'images/borges2.jpg', 'images/borges3.jpg', ];
    var cmarker = ['images/cmarker.jpg', 'images/cmarker2.jpg', ];
    var wilde = ['images/wilde.jpg', 'images/wilde2.jpg', 'images/wilde3.jpg', ];
    var faulkner = ['images/faulkner.jpg', 'images/faulkner2.jpg', 'images/faulkner3.jpg', ];
    var lovecraft = ['images/lovecraft.jpg', 'images/lovecraft2.jpg', 'images/lovecraft3.jpg', ];
    var neruda = ['images/neruda.jpg', 'images/neruda2.jpg', 'images/neruda3.jpg', ];
    var sagan = ['images/sagan.jpg', 'images/sagan2.jpg', 'images/sagan3.jpg', 'images/sagan4.jpg', 'images/sagan5.jpg', 'images/sagan6.jpg', ];
    var buzzati = ['images/buzzati.jpg', 'images/buzzati2.jpg', 'images/buzzati3.jpg', ];
    var bukowski = ['images/bukowski.jpg', 'images/bukowski2.jpg', 'images/bukowski3.jpg', ];
    var fwright = ['images/fwright.jpg', 'images/fwright2.jpg', ];
    var vhugo = ['images/vhugo.jpg', 'images/vhugo2.jpg', 'images/vhugo3.jpg', ];
    var exupery = ['images/exupery.jpg', 'images/exupery2.jpg', 'images/exupery3.jpg', ];
    var ligotti = ['images/ligotti.jpg', 'images/ligotti2.jpg', ];
    var ginsberg = ['images/ginsberg.jpg', 'images/ginsberg2.jpg', 'images/ginsberg3.jpg', ];
    var shelley = ['images/shelley.jpg', 'images/shelley2.jpg', ];
    var chekhov = ['images/chekhov.jpg', 'images/chekhov2.jpg', 'images/chekhov3.jpg', ];
    var lcohen = ['images/lcohen.jpg', 'images/lcohen2.jpg', 'images/lcohen3.jpg', 'images/lcohen4.jpg', ];
    var ebronte = ['images/ebronte.jpg', 'images/ebronte2.jpg', 'images/ebronte3.jpg', ];
    var maupassant = ['images/maupassant.jpg', 'images/maupassant2.jpg', ];
    var wjames = ['images/wjames.jpg', 'images/wjames2.jpg', 'images/wjames3.jpg', ];
    var soof = ['images/soof.jpg', 'images/soof2.jpg', 'images/soof3.jpg', 'images/soof4.jpg', ];
    var tolstoy = ['images/tolstoy.jpg', 'images/tolstoy2.jpg', 'images/tolstoy3.jpg', 'images/tolstoy4.jpg', ];
    var cocteau = ['images/cocteau.jpg', 'images/cocteau2.jpg', 'images/cocteau3.jpg', ];
    var arsenytarkov = ['images/arsenytarkov.jpg', 'images/arsenytarkov2.jpg', ];

    $(".bg").animate({
            opacity: 0
        }, 100,
        function() {
            $(this).animate({
                opacity: 1
            }, 1000);


            switch (rAuthor) {
                case "Sylvia Plath":
                    $('.bg').css({ 'background-image': 'url(' + plath[Math.floor(Math.random() * plath.length)] + ')' });
                    break;

                case "Milan Kundera":
                    $('.bg').css({ 'background-image': 'url(' + kundera[Math.floor(Math.random() * kundera.length)] + ')' });
                    break;

                case "Kate Chopin":
                    $('.bg').css({ 'background-image': 'url(' + kchopin[Math.floor(Math.random() * kchopin.length)] + ')' });
                    break;

                case "Hermann Hesse":
                    $('.bg').css({ 'background-image': 'url(' + hhesse[Math.floor(Math.random() * hhesse.length)] + ')' });
                    break;

                case "Christina Rosseti":
                    $('.bg').css({ 'background-image': 'url(' + rossetti[Math.floor(Math.random() * rossetti.length)] + ')' });
                    break;

                case "F.Scott Fitzgerald":
                    $('.bg').css({ 'background-image': 'url(' + fsfitzgerald[Math.floor(Math.random() * fsfitzgerald.length)] + ')' });
                    break;

                case "Vincent Van Gogh":
                    $('.bg').css({ 'background-image': 'url(' + vangogh[Math.floor(Math.random() * vangogh.length)] + ')' });
                    break;

                case "Fernando Pessoa":
                    $('.bg').css({ 'background-image': 'url(' + pessoa[Math.floor(Math.random() * pessoa.length)] + ')' });
                    break;

                case "Mary Shelley":
                    $('.bg').css({ 'background-image': 'url(' + shelley[Math.floor(Math.random() * shelley.length)] + ')' });
                    break;

                case "Virginia Woolf":
                    $('.bg').css({ 'background-image': 'url(' + woolf[Math.floor(Math.random() * woolf.length)] + ')' });
                    break;

                case "Antoine de Saint-Exupéry":
                    $('.bg').css({ 'background-image': 'url(' + exupery[Math.floor(Math.random() * exupery.length)] + ')' });
                    break;

                case "Emily Dickinson":
                    $('.bg').css({ 'background-image': 'url(' + dickinson[Math.floor(Math.random() * dickinson.length)] + ')' });
                    break;

                case "Charles Bukowski":
                    $('.bg').css({ 'background-image': 'url(' + bukowski[Math.floor(Math.random() * bukowski.length)] + ')' });
                    break;

                case "Anton Chekhov":
                    $('.bg').css({ 'background-image': 'url(' + bukowski[Math.floor(Math.random() * bukowski.length)] + ')' });
                    break;

                case "August Strindberg":
                    $('.bg').css({ 'background-image': 'url(' + strindberg[Math.floor(Math.random() * strindberg.length)] + ')' });
                    break;

                case "Emily Brontë":
                    $('.bg').css({ 'background-image': 'url(' + ebronte[Math.floor(Math.random() * ebronte.length)] + ')' });
                    break;

                case "William Faulkner":
                    $('.bg').css({ 'background-image': 'url(' + faulkner[Math.floor(Math.random() * faulkner.length)] + ')' });
                    break;

                case "Roland Barthes":
                    $('.bg').css({ 'background-image': 'url(' + barthes[Math.floor(Math.random() * barthes.length)] + ')' });
                    break;

                case "Allen Ginsberg":
                    $('.bg').css({ 'background-image': 'url(' + ginsberg[Math.floor(Math.random() * ginsberg.length)] + ')' });
                    break;

                case "Leonard Cohen":
                    $('.bg').css({ 'background-image': 'url(' + lcohen[Math.floor(Math.random() * lcohen.length)] + ')' });
                    break;

                case "Victor Hugo":
                    $('.bg').css({ 'background-image': 'url(' + vhugo[Math.floor(Math.random() * vhugo.length)] + ')' });
                    break;

                case "Anaïs Nin":
                    $('.bg').css({ 'background-image': 'url(' + anaisnin[Math.floor(Math.random() * anaisnin.length)] + ')' });
                    break;

                case "Thomas Ligotti":
                    $('.bg').css({ 'background-image': 'url(' + ligotti[Math.floor(Math.random() * ligotti.length)] + ')' });
                    break;

                case "Italo Calvino":
                    $('.bg').css({ 'background-image': 'url(' + calvino[Math.floor(Math.random() * calvino.length)] + ')' });
                    break;

                case "Andrei Tarkovsky":
                    $('.bg').css({ 'background-image': 'url(' + tarkovsky[Math.floor(Math.random() * tarkovsky.length)] + ')' });
                    break;

                case "Franz Wright":
                    $('.bg').css({ 'background-image': 'url(' + fwright[Math.floor(Math.random() * fwright.length)] + ')' });
                    break;

                case "Vladimir Nabokov":
                    $('.bg').css({ 'background-image': 'url(' + nabokov[Math.floor(Math.random() * nabokov.length)] + ')' });
                    break;

                case "Robert Desnos":
                    $('.bg').css({ 'background-image': 'url(' + desnos[Math.floor(Math.random() * desnos.length)] + ')' });
                    break;

                case "Haruki Murakami":
                    $('.bg').css({ 'background-image': 'url(' + murakami[Math.floor(Math.random() * murakami.length)] + ')' });
                    break;

                case "H.P. Lovecraft":
                    $('.bg').css({ 'background-image': 'url(' + lovecraft[Math.floor(Math.random() * lovecraft.length)] + ')' });
                    break;

                case "Rainer Maria Rilke":
                    $('.bg').css({ 'background-image': 'url(' + rilke[Math.floor(Math.random() * rilke.length)] + ')' });
                    break;

                case "Blaise Pascal":
                    $('.bg').css({ 'background-image': 'url(' + pascal[Math.floor(Math.random() * pascal.length)] + ')' });
                    break;

                case "Arthur Schopenhauer":
                    $('.bg').css({ 'background-image': 'url(' + schopenhauer[Math.floor(Math.random() * schopenhauer.length)] + ')' });
                    break;

                case "Marcel Proust":
                    $('.bg').css({ 'background-image': 'url(' + proust[Math.floor(Math.random() * proust.length)] + ')' });
                    break;

                case "Arthur Rimbaud":
                    $('.bg').css({ 'background-image': 'url(' + rimbaud[Math.floor(Math.random() * rimbaud.length)] + ')' });
                    break;

                case "Dino Buzzati":
                    $('.bg').css({ 'background-image': 'url(' + buzzati[Math.floor(Math.random() * buzzati.length)] + ')' });
                    break;

                case "Pablo Neruda":
                    $('.bg').css({ 'background-image': 'url(' + neruda[Math.floor(Math.random() * neruda.length)] + ')' });
                    break;

                case "Albert Camus":
                    $('.bg').css({ 'background-image': 'url(' + camus[Math.floor(Math.random() * camus.length)] + ')' });
                    break;

                case "Fyodor Dostoevsky":
                    $('.bg').css({ 'background-image': 'url(' + dostoevsky[Math.floor(Math.random() * dostoevsky.length)] + ')' });
                    break;

                case "Emil Cioran":
                    $('.bg').css({ 'background-image': 'url(' + cioran[Math.floor(Math.random() * cioran.length)] + ')' });
                    break;

                case "Anne Sexton":
                    $('.bg').css({ 'background-image': 'url(' + sexton[Math.floor(Math.random() * sexton.length)] + ')' });
                    break;

                case "Carl Sagan":
                    $('.bg').css({ 'background-image': 'url(' + sagan[Math.floor(Math.random() * sagan.length)] + ')' });
                    break;

                case "T.S. Eliot":
                    $('.bg').css({ 'background-image': 'url(' + tseliot[Math.floor(Math.random() * tseliot.length)] + ')' });
                    break;

                case "Edie Sedgwick":
                    $('.bg').css({ 'background-image': 'url(' + sedgwick[Math.floor(Math.random() * sedgwick.length)] + ')' });
                    break;

                case "Jean Rhys":
                    $('.bg').css({ 'background-image': 'url(' + jeanrhys[Math.floor(Math.random() * jeanrhys.length)] + ')' });
                    break;

                case "John Burroughs":
                    $('.bg').css({ 'background-image': 'url(' + jburroughs[Math.floor(Math.random() * jburroughs.length)] + ')' });
                    break;

                case "George Santayana":
                    $('.bg').css({ 'background-image': 'url(' + santayana[Math.floor(Math.random() * santayana.length)] + ')' });
                    break;

                case "Nikos Kazantzakis":
                    $('.bg').css({ 'background-image': 'url(' + kazantzakis[Math.floor(Math.random() * kazantzakis.length)] + ')' });
                    break;

                case "David Malouf":
                    $('.bg').css({ 'background-image': 'url(' + malouf[Math.floor(Math.random() * malouf.length)] + ')' });
                    break;

                case "Chris Marker":
                    $('.bg').css({ 'background-image': 'url(' + cmarker[Math.floor(Math.random() * cmarker.length)] + ')' });
                    break;

                case "Oscar Wilde":
                    $('.bg').css({ 'background-image': 'url(' + wilde[Math.floor(Math.random() * wilde.length)] + ')' });
                    break;

                case "Plato":
                    $('.bg').css({ 'background-image': 'url(' + plato[Math.floor(Math.random() * plato.length)] + ')' });
                    break;

                case "Margaret Atwood":
                    $('.bg').css({ 'background-image': 'url(' + atwood[Math.floor(Math.random() * atwood.length)] + ')' });
                    break;

                case "Susan Sontag":
                    $('.bg').css({ 'background-image': 'url(' + sontag[Math.floor(Math.random() * sontag.length)] + ')' });
                    break;

                case "Slavoj Zizek":
                    $('.bg').css({ 'background-image': 'url(' + zizek[Math.floor(Math.random() * zizek.length)] + ')' });
                    break;

                case "Franz Kafka":
                    $('.bg').css({ 'background-image': 'url(' + kafka[Math.floor(Math.random() * kafka.length)] + ')' });
                    break;

                case "Gregory Orr":
                    $('.bg').css({ 'background-image': 'url(' + orr[Math.floor(Math.random() * orr.length)] + ')' });
                    break;

                case "André Breton":
                    $('.bg').css({ 'background-image': 'url(' + breton[Math.floor(Math.random() * breton.length)] + ')' });
                    break;

                case "Vikram Seth":
                    $('.bg').css({ 'background-image': 'url(' + vikram[Math.floor(Math.random() * vikram.length)] + ')' });
                    break;

                case "Miranda July":
                    $('.bg').css({ 'background-image': 'url(' + mjuly[Math.floor(Math.random() * mjuly.length)] + ')' });
                    break;

                case "Charles Baudelaire":
                    $('.bg').css({ 'background-image': 'url(' + baudelaire[Math.floor(Math.random() * baudelaire.length)] + ')' });
                    break;

                case "Jean-Paul Sartre":
                    $('.bg').css({ 'background-image': 'url(' + sartre[Math.floor(Math.random() * sartre.length)] + ')' });
                    break;

                case "Eugène Ionesco":
                    $('.bg').css({ 'background-image': 'url(' + ionesco[Math.floor(Math.random() * ionesco.length)] + ')' });
                    break;

                case "Jane Austen":
                    $('.bg').css({ 'background-image': 'url(' + austen[Math.floor(Math.random() * austen.length)] + ')' });
                    break;

                case "Friedrich Nietzsche":
                    $('.bg').css({ 'background-image': 'url(' + nietzsche[Math.floor(Math.random() * nietzsche.length)] + ')' });
                    break;

                case "Guy De Maupassant":
                    $('.bg').css({ 'background-image': 'url(' + maupassant[Math.floor(Math.random() * maupassant.length)] + ')' });
                    break;

                case "Jorge Luis Borges":
                    $('.bg').css({ 'background-image': 'url(' + borges[Math.floor(Math.random() * borges.length)] + ')' });
                    break;

                case "William James":
                    $('.bg').css({ 'background-image': 'url(' + wjames[Math.floor(Math.random() * wjames.length)] + ')' });
                    break;

                case "Sufjan Stevens":
                    $('.bg').css({ 'background-image': 'url(' + soof[Math.floor(Math.random() * soof.length)] + ')' });
                    break;

                case "Leo Tolstoy":
                    $('.bg').css({ 'background-image': 'url(' + tolstoy[Math.floor(Math.random() * tolstoy.length)] + ')' });
                    break;

                case "Jean Cocteau":
                    $('.bg').css({ 'background-image': 'url(' + cocteau[Math.floor(Math.random() * cocteau.length)] + ')' });
                    break;

                case "Arseny Tarkovsky":
                    $('.bg').css({ 'background-image': 'url(' + arsenytarkov[Math.floor(Math.random() * arsenytarkov.length)] + ')' });
                    break;

                case "Frédéric Chopin":
                    $('.bg').css("background-image", "url(images/chopin.jpg)");
                    break;

                case "Jeanette Winterson":
                    $('.bg').css("background-image", "url(images/winterson.jpg)");
                    break;

                case "Hildegard Von Bingen":
                    $('.bg').css("background-image", "url(images/hildegard.jpg)");
                    break;

                case "George Seferis":
                    $('.bg').css("background-image", "url(images/seferis.jpg)");
                    break;

                case "John Keats":
                    $('.bg').css("background-image", "url(images/keats.jpg)");
                    break;

                case "Yannis Ritsos":
                    $('.bg').css("background-image", "url(images/ritsos.jpg)");
                    break;

                case "Douglas Hofstadter":
                    $('.bg').css("background-image", "url(images/hofstadter.jpg)");
                    break;

                case "Edvard Munch":
                    $('.bg').css("background-image", "url(images/munch.jpg)");
                    break;

                case "Langston Hughes":
                    $('.bg').css("background-image", "url(images/langstonhughes.jpg)");
                    break;

                case "Goethe":
                    $('.bg').css("background-image", "url(images/goethe.jpg)");
                    break;

                case "Soren Kierkegaard":
                    $('.bg').css("background-image", "url(images/kierkegaard.jpg)");
                    break;

                case "Arseny Tarkovsky":
                    $('.bg').css("background-image", "url(images/tarkovsky-arseny.jpg)");
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

    $(".quote-box").animate({ opacity: 0 }, 200,
        function() {
            $(this).animate({
                opacity: 1
            }, 1000);
        });

    //adjust font-size
    window.setTimeout(changeFontSize, 200);

    function changeFontSize() {
        if (rQuote.length > 1500) {
            $('.quote-text').css("font-size", "1.05em");
        } else if (rQuote.length > 1250) {
            $('.quote-text').css("font-size", "1.1em");
        } else if (rQuote.length > 1000) {
            $('.quote-text').css("font-size", "1.15em");
        } else if (rQuote.length > 750) {
            $('.quote-text').css("font-size", "1.2em");
        } else if (rQuote.length > 500) {
            $('.quote-text').css("font-size", "1.25em");
        } else if (rQuote.length > 250) {
            $('.quote-text').css("font-size", "1.3em");
        } else {
            $('.quote-text').css("font-size", "1.35em");
        }
    }

    //twitter button
    $('#tweet-quote').attr("href", 'https://twitter.com/intent/tweet?text=' + rQuote + ' ' + '—' + rAuthor);

}


//code on load
$(document).ready(function() {

    getQuote();

    $('#new-quote').on('click', getQuote);
    $('#new-quote').focus();


});