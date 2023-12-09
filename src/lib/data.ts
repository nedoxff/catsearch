export type CatVideo = {
    name: string,
    link: string,
    author: string,
    authorLink: string,
    tags: string[],
    warnings: string
};

export let videos: Map<string, CatVideo> = new Map<string, CatVideo>();

const add = (id: string, name: string, link: string, author: string, tags: string, warnings: string) => videos.set(id, {
    name: name,
    link: link,
    author: '@' + author,
    authorLink: 'https://twitter.com/' + author,
    tags: tags.split(' '),
    warnings: warnings
});

add('1731362188902670812', 'The original (iPhone call sound effect)', 'https://twitter.com/TheCumpound/status/1731362188902670812', 'TheCumpound', 'original iphone call sound', '');
add('1731491887503303056', 'UN Owen Was Her (Touhou)', 'https://twitter.com/FancyGames64/status/1731491887503303056', 'FancyGames64', 'UN Owen touhou project', '');
add('1732598619713245219', "At Doom's Gate (Doom)", 'https://twitter.com/yisusanimations/status/1732598619713245219', 'yisusanimations', 'doom gate', '');
add("1732912301874012604", "Rainbow Tylenol", "https://twitter.com/M0N0FL0W", "M0N0FL0W", "rainbow tylenol kistune kistune^2", "flashing lights");
add("1733206464376807766", "A cyber's world? (Deltarune)", "https://twitter.com/hexaa__/status/1733206464376807766", "hexaa__", "deltarune toby fox cyber world", "");
add("1732093671019884670", "Blue spheres (special Sonic 3 & Knuckles stage)", "https://twitter.com/IsLochlann/status/1732093671019884670", "IsLochlann", "sonic 3 blue spheres knuckles sega", "");
add("1731929315896369483", "Jumper (Geometry Dash)", "https://twitter.com/Sharkfacegi/status/1731929315896369483", "Sharkfacegi", "geometry dash jumper", "");
add("1732958567030763717", "Bury the Light (Devil May Cry 5)", "https://twitter.com/eafaaTypeB/status/1732958567030763717", "eafaaTypeB", "bury the light devil may cry 5", "");
add("1733022326680379494", "The Penis (eek!)", "https://twitter.com/Jonatha97746216/status/1733022326680379494", "Jonatha97746216", "surasshu penik eek", "");
add("1731857218260045859", "Night of nights (Touhou)", "https://twitter.com/ascpixi/status/1731857218260045859", "ascpixi", "touhou night of nights flowering nights", "slight flashing lights");
add("1732900177751531974", "FNaF 1 (The Living Tombstone)", "https://twitter.com/sugarcoatedOwO/status/1732900177751531974", "sugarcoatedOwO", "fnaf 1 the living tombstone", "");
add("1732341216027537690", "mmm yess put the tree on my pizza (Pizza Tower)", "https://twitter.com/tiidall/status/1732341216027537690", "tiidall", "pizza tower tree", "");
add("1733200919876018632", "Meltdown (project DIVA)", "https://twitter.com/RyokuuStral/status/1733200919876018632", "RyokuuStral", "project diva meltdown rin jpop kagamine", "");
add("1732069771699519972", "Boa - Duvet (Serial Experiments Lain)", "https://twitter.com/Orchestral_Hit/status/1732069771699519972", "Orchestral_Hit", "boa duvet serial experiments lain", "");
add("1732711894086287653", "Inabakumori - Lagtrain", "https://twitter.com/maple_java/status/1732711894086287653", "maple_java", "inabakumori lagtrain jpop lag train", "");
add("1731727018729889875", "Sparta Remix", "https://twitter.com/forcityyy/status/1731727018729889875", "forcityyy", "sparta remix", "flashing lights");
add("1732595536174170299", "Bad Apple (Touhou)", "https://twitter.com/qfzeeph/status/1732595536174170299", "qfzeeph", "touhou bad apple", "");
add("1732044205114142810", "The Cleveland Show", "https://twitter.com/Culex64/status/1732044205114142810", "Culex64", "the cleveland show intro", "");
add("1733157945339269574", "Now or Never (Splatoon)", "https://twitter.com/PanquecaBurrito/status/1733157945339269574", "PanquecaBurrito", "now or never splatoon", "slight flashing lights");
add("1732237055277535427", "Flying Battery Zone (Sonic and Knuckles)", "https://twitter.com/SneakyHere/status/1732237055277535427", "SneakyHere", "flying battery zone sonic knuckles", "");
add("1732284926949478743", "niki - ERROR", "https://twitter.com/the15lettername/status/1732284926949478743", "the15lettername", "niki error jpop lily", "");
add("1732458864895832196", "Bach Prelude in G Major", "https://twitter.com/el_cervinho/status/1732458864895832196", "el_cervinho", "bach prelude g major", "");
add("1732865463317676298", "Classroom of the Elite opening (Caste Room)", "https://twitter.com/justdemianagain/status/1732865463317676298", "justdemianagain", "caste room classroom elite opening", "");
add("1733387809778504167", "Megalovania (Undertale)", "https://twitter.com/SobaNoodles70/status/1733387809778504167", "SobaNoodles70", "undertale megalovania sans toby fox", "");
add("1732137404709122112", "Clubstep (Geometry Dash)", "https://twitter.com/BenjaFox2003/status/1732137404709122112", "BenjaFox2003", "clubstep geometry dash", "");
add("1732416711721422924", "God-ish (PinocchioP)", "https://twitter.com/__vl1__/status/1732416711721422924", "__vl1__", "pinocchiop god-ish god ish jpop", "");
add("1732244118217408675", "Android ringtone", "https://twitter.com/AightyII/status/1732244118217408675", "AightyII", "android ringtone", "");
add("1732999107860721788", "Unwelcome school (Blue Archive OST)", "https://twitter.com/saaal653/status/1732999107860721788", "saaal653", "unwelcome school blue archive ost mo2 mitsukiyo", "slight flashing lights");
add("1731814790706688379", "BIG SHOT (Deltarune)", "https://twitter.com/wandydoodles/status/1731814790706688379", "wandydoodles", "deltarune toby fox big shot spamton", "");
add("1732235983880421436", "Tatsh & NAOKI - RED ZONE", "https://twitter.com/hell_jpeg/status/1732235983880421436", "hell_jpeg", "red zone tatsh naoki", "");
add("1733211256683655423", "BRAIN POWER", "https://twitter.com/BoneChattering/status/1733211256683655423", "BoneChattering", "brain power", "");
add("1732472844662009930", "Gourmet Race (Super Smash Bros.)", "https://twitter.com/BoguTheSnep/status/1732472844662009930", "BoguTheSnep", "super smash bros ultimate kirby gourmet race", "");
add("1731949591677776044", "Hatmann's Youkai Girl (Touhou)", "https://twitter.com/Jam1226P/status/1731949591677776044", "Jam1226P", "touhou hatmann's youkai girl sa koishi", "");
add("1732610649514017235", "Six Trillion Years and Overnight Story", "https://twitter.com/thxdeeply/status/1732610649514017235", "thxdeeply", "six trillion years overnight story IA vocaloid jpop", "");
add("1732156070095663318", "Kitty (Nightcord at 25:00)", "https://twitter.com/aqwwa58/status/1732156070095663318", "aqwwa58", "kitty nightcord 25:00 project sekai", "");
add("1731698006519316863", "Louvre Museum Invasion (Rhythm Thief OST)", "https://twitter.com/BlackmoorVhit/status/1731698006519316863", "BlackmoorVhit", "louvre museum invasion rhythm thief", "");
add("1732019124338090434", "YO-KAI disco (Yousuke Yasui)", "https://twitter.com/gamuuut/status/1732019124338090434", "gamuuut", "yokai disco yousuke yasui", "");
add("1733124335550824798", "Ado - Usseewa", "https://twitter.com/Necroarts2077/status/1733124335550824798", "Necroarts2077", "ado usseewa jpop", "");
add("1732157237144002726", "Sparkman (Super Smash Bros.)", "https://twitter.com/Awan2407/status/1732157237144002726", "Awan2407", "super smash bros ultimate spark man sparkman", "");
add("1731921805634400704", "Monochrome (FNF song)", "https://twitter.com/YOURDEADTRAINER/status/1731921805634400704", "YOURDEADTRAINER", "monochrome pokemon fnf hypno", "slight flashing lights");
