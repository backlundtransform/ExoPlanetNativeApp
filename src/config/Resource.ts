
import LocalizedStrings from 'react-native-localization';


 export let resource = new LocalizedStrings({
  "en-US":this.en
  ,en:{
    message:"ExoPlanetHunter",
    planetlist:"Planetlist",
    habplanets: "Earth-like planet",
    con: "Constellations",
    starmap: "Starmap",
    from: "parsec from earth",
    hotJovian: "Hot jovian",
    superEarth: "Superterran",
    at:"is located at a distance of",
    PlanetInfo:"StarInfo",
    orange:"Orange Dwarf",
    red:"Red Dwarf",
    habmenu: ["Habitable Planets","Cold(–50-0°C)", "Normal Temperature(0–50°C)", "Hot(50–100°C)", "Earth similarity index", "Suitability for vegetation","Candidate for habitable moon"],
    const:["Ursa Major"],
    sensorstart: "Starting Sensor..",
    sensorstop: "Deactivating Sensor",
    search: "Search",
    dashboard: "Dashboard",
    number:"Confirmed planets",
    sortsearch:["Sort","Distance","Habitable","Mass","Discovery year"],
    masssearch:["Jovian","Neptunian","Super-Earth","Earth","Mercurian"],
    masstitle:"Mass Klass",
 
    comptitle:"Composition",
    compsearch:["Composition","Gas","Gas-water","Rocky-water","Rocky-iron","Iron"],
    atmostitle:"Atmosphere",
    atmossearch:["Hydrogen-rich","Metal-rich","None"],
    tempsearch:["Temperature zon","Hot","Varm","Cold"],
    discsearch:["Discovery-method","Radial velocity","Transiting","Micro lensing","Astrometry","Pulsar timing","Imaging"],
    lightyearsearch:["Distance","less than  20 light years","less than  200 light years","less than  2000 light years","less than  20000 light years"],

    planetname:["The planet is called", "and is orbiting the star","that is located in the constellation" ],
    decFormatdist:["at a distance of ", "lightyears from Earth." ],
        massInfo :[
          "The planet is of the type Jovian, which means that the planet is a giant like Jupiter or Saturn. ",
          "The planet is of the type Neptunian, which means that it has a similar mass like our solar systems smaller gas giants Uranus and Neptune.",
          "The planet is of the type Super-terrestrial, which means that its mass is larger than Earth, but is considerably smaller than our solar systems smaller gas giants Uranus and Neptune.",
          "The planet is of the type terrestrial, which means that it has a similar mass like our solar systems inner planets Mars, Venus and Earth.",

          "The planet is of the type Mercurian, which means that it has a similar mass like our solar systems smallests planets e.g Mercury.",

],

compInfo :["The planet consists of gas.","The planet is composed mostly of gaseous or liquid matter.","The planet has a solid stone surface, where even liquid water may be present.","The planet has a solid stone surface, which is rich in iron.","The planet surface is solid and the core is made of iron."],


orbit:["It takes", "days for the planet to complete an entire revolution around its star."],
decMean:["The planet is located at a distance from it star that correspond to ", "times the distance between our Earth and Sun."],

hzd:["The planet is within the its solar system habitable zone, where alien could exist.","The planet is too close to its sun, no alien could exist here.", "The planet is too far away from its sun, no alien could exist here."],
hza:["The planet has an atmosphere that could be suitable for life.","The planet has no atmosphere.", "The planet has an atmosphere, but it is not suitable for life."],

atmosinfo:["The planet has a hydrogen-rich atmosphere.","The planet has a metal-rich atmosphere.",  ""],

meantemp:["The mean temperature of the planet is", "A hot day at", "the mean temperature is","C and on a cold day at it is" ],


moon:"It is possible that the planet can have a habitable moon.",
disc:"Discovered year ",
discinfo:["It was first detected by radial velocity, that is done by recording variations in the color of light from the host star.","It was first detected by the transit method, that is based on the observation of a stars small drop in brightness, that occurs when the planet orbit the star","It was first detected by microlensing, that is based on the observation of the bending of light due to the gravitational field.","It was first detected by astrometry, that involves precise measurements of the positions and movements of stars.","The planet is orbiting a neutron star and was detected by pulsar timing.","It was first detected by a telescope."],
iratings:"Earth similarity index:",
sphratings:"Suitability for vegetation",
planetinfo:["Mass","Radius","Density","Gravity","Surface pressure","Escape velocity"],
earth:"Earth"

  },sv:{
    message:"PlanetJägaren",
    planetlist:"Planetlista",
    habplanets: "Jordlika planeter",
    con: "Stjärnbilder",
    starmap: "Stjärnkarta",
    from: "parsec från Jorden",
    hotJovian: "Het jovian",


    superEarth: "Super-terrestisk",
    at:"ligger på ett avstånd av",
    PlanetInfo:"Planet Info",
    StarInfo:"Star Info",
    orange:"Orange dvärg",
    red:"Röd dvärg",
    habmenu: ["Beboliga Planeter","Kallt (-50-0°C)", "Normal Temperatur(0–50°C)", "Varmt(50–100°C)", "Liknar Jorden (ESI index)", "Lämpad för växlighet (SPH index)","Kandidater för beboliga månar"],
    const:["Stora björnen"],
    sensorstart: "Väntar på sensor",
    sensorstop: "Stänger av sensor",
    search: "Sök",
    dashboard: "Statistik",
    number:"Hittade planeter",
    sortsearch:["Sortera efter","Avstånd (från jorden)","Beboelighet","Massa","Upptäckts år"],
    masstitle:"Mass Klass",
    masssearch:["Jovian (Gasjätte)","Neptunian","Super-jord","Jord","Mercurian"],

    comptitle:"Sammansättning",
    compsearch:["Gas","Gas-vatten","Sten-vatten","Sten-järn","Järn"],
    atmostitle:"Atmosfär",
    atmossearch:["Väterik","Metallrik","Ingen"],
    tempsearch:["Temperatur zon","Varm","Beboelig","Kall"],
    disctitle:"Upptäktsmethod",
    discsearch:["Dopplerspektroskopi","Transitmetoden","Gravitationslins","Astrometri","Pulsartiming","Teleskop"],
    lightyearsearch:["Avstånd","mindre än 20 ljusår","mindre än 200 ljusår","mindre än 2000 ljusår","mindre än 20000 ljusår"],
    planetname:["Planeten heter", "och roterar runt stjärnan","som ligger i stjärnbilden" ],
    decFormatdist:["på ett avstånd utav ", "ljusår från jorden." ],


    massInfo :[
      
      
    "Planeten är av typen Jovian vilket innebär att planeten är en jätte som Jupiter eller Saturnus. ",
    "Planeten är av typen Neptunian vilket innebär att dess massa är i samma storleks ordning som vårat solsystems mindre gasjättar Uranus och Neptunus.",
     
    "Planeten är av typen Super-terrestrisk vilket innebär att dess massa är större än Jordens men betydligt mindre än vårat solsystems mindre gasjättar Uranus och Neptunus.",
    "Planeten är av typen terrestrisk vilket innebär att den har likande massa som vårat solsystems inre planeter Mars, Venus och Jorden.",

    "Planeten är av typen Mercurian vilket innebär att den har likande massa som vårat solsystems minsta planeter t.e.x Merkurius.",

    ],
    
    compInfo :["Planeten består av gas.","Planeten består mestadels av gasformig eller flytande materia.","Planeten har en fast yta i form utav en sten skorpa där även flytande vatten kan förekomma.","Planeten har en fast yta i form utav en sten skorpa och är rik på järn.","Planeten har en fast yta och dess kärna består utav järn"],
        
    orbit:["Det tar", "dagar för planeten att rotera ett varv runt sin sol."],
    decMean:["Planeten ligger på ett avstånd från sin stjärna som motsvarar ", "gånger avståndet mellan jorden och solen."],

    hzd:["Planeten ligger i solsystemets beboeliga zon där liv ska kunna existera.","Planeten ligger för nära sin sol för att liv ska kunna existera.", "Planeten ligger för långt bort från sin sol för att liv ska kunna existera."],
    hza:["Planeten har en atmosfär som skulle kunna vara lämplig för liv.","Planeten saknar atmosfär.", "Planetens atmosfär är olämplig för liv. "],

    atmosinfo:["Atmosfären är rik på väte.","Atmosfären är rik på metaller.",""],

    meantemp:["Planetens medeltempratur är", "En varm dag på", "är temperaturen","C och på en kall dag är det" ],

    moon:"Det är möjligt att planeten kan han ha en beboelig måne.",
    discinfo:["Upptäkten gjordes med hjälp utav Dopplerspektroskopi, d.v.s genom att mäta förändringen av frekvensen (svängningstalet) av stjärnans ljus.","Upptäkten gjordes med hjälp utav Transitmetoden, d.v.s genom att mäta förändringar av stjärnans ljusstyrka när planeten passerar framför den.","Upptäkten gjordes med hjälp utav gravitationslins, d.v.s genom att mäta hur stjärnans ljus böjs i gravitationsfältet på sin väg till oss.","Upptäkten gjordes med hjälp utav Astrometri, d.v.s genom att mäta stjärnans position och dess rörelser med hög precision.","Planeten kretsar runt snabbt roterande neutronstjärnor så kallade pulsar och kunde därför upptäckas med hjälp utav Pulsartiming.","Upptäkten gjordes med hjälp utav ett teleskop."],
    disc:"Planeten upptäcktes år ",
    esiratings:"Liknar Jorden (ESI index):",
    sphratings:"Lämpad för växlighet (SPH index):",
    planetinfo:["Massa","Radie","Densitet","Gravitation","Atmosfäriskt tryck","Flykthastig"],

    earth:"Jordens"
  },

 });