const tradizionali = [
    {"id":"1", "gust":"MARINARA", "desc": "pomodoro, aglio", "normal": "4,50", "media": "8,50", "maxi": "10,00"},
    {"id":"2", "gust":"MARGHERITA", "desc": "pomodoro, mozzarella", "normal": "5,50", "media": "10", "maxi": "12,00"},
    {"id":"3", "gust":"GIGLIO BIANCO (BIANCA)", "desc": "mozzarella, origano", "normal": "8,50", "media": "14", "maxi": "17,50"},
    {"id":"4", "gust":"PUGLIESE", "desc": "pomodoro, mozzarella, cipolla", "normal": "8,50", "media": "14", "maxi": "17,50"},
    {"id":"5", "gust":"SICILIANA", "desc": "pomodoro, mozzarella, acciughe, capperi, olive", "normal": "4,50", "media": "8,50", "maxi": "10,00"},
    {"id":"6", "gust":"ROMANA", "desc": "pomodoro, mozzarella, acciughe", "normal": "5,50", "media": "10", "maxi": "12,00"},
    {"id":"7", "gust":"CALZONE", "desc": "pomodoro, mozzarella, prosciutto, funghi, ricotta", "normal": "8,50", "media": "14", "maxi": "17,50"},
    {"id":"8", "gust":"PROSCIUTTO E FUNGHI", "desc": "pomodoro, mozzarella, prosciutto, funghi"},
    {"id":"9", "gust":"PROSCIUTTO", "desc": "pomodoro, mozzarella, prosciutto"},
    {"id":"10", "gust":"FOCACCIA", "desc": "semplice con sale e olio ex. verg. d'oliva"},
    {"id":"11", "gust":"AMERICANA", "desc": "pomodoro, mozzarella, salamino"},
    {"id":"12", "gust":"VIENNESE", "desc": "pomodoro, mozzarella, wurstel"},
    {"id":"13", "gust":"NORDICA", "desc": "pomodoro, mozzarella, salamino, wurstel"},
    {"id":"14", "gust":"PAZZA", "desc": "pomodoro, mozzarella, prosciutto, salamino, wurstel"},
    {"id":"15", "gust":"DIAVOLA", "desc": "pomodoro, mozzarella, salamino, peperoni"},
    {"id":"16", "gust":"ORTOLANA", "desc": "pomodoro, mozzarella, radicchio cotto, funghi fr., zucchini gratt., grana"},
    {"id":"17", "gust":"PARMIGIANA", "desc": "pomodoro, mozzarella, melanzane, pomodorini, grana"},
    {"id":"18", "gust":"PANA & SPECK", "desc": "pomodoro, mozzarella, panna, speck"},
    {"id":"19", "gust":"VERDURE AI FERRI", "desc": "pomodoro, mozzarella, melanzane, zucchine, peperoni, grana"},
    {"id":"20", "gust":"CHIPS", "desc": "pomodoro, mozzarella, patatine"},
    {"id":"21", "gust":"CAPRICCIOSA", "desc": "pomodoro, mozzarella, prosciutto, funghi, carciofi"},
    {"id":"22", "gust":"4 STAGIONI", "desc": "pomodoro, mozzarella, prosciutto, funghi, carciofi, olive"},
    {"id":"23", "gust":"4 FORMAGGI", "desc": "pomodoro, mozzarella, gorgonzola, grana, latteria"},
    {"id":"24", "gust":"TONNO", "desc": "pomodoro, mozzarella, tonno"},
    {"id":"25", "gust":"TONO E CIPOLLA", "desc": "pomodoro, mozzarella, tonno, cipolla"}


];

const doc = [
    {"id":"26", "gust":"SAN DANIELE", "desc": "pomodoro, mozzarella, prosciutto crudo di S.Daniele"},
    {"id":"27", "gust":"DEGLI AMICI", "desc": "pomodoro, mozzarella, ricotta fresca, rucola, grana"},
    {"id":"28", "gust":"CAMPAGNOLA", "desc": "pomodoro, mozzarella, patate, salsiccia, salamino, cipolla"},
    {"id":"29", "gust":"NOSTRANA", "desc": "pomodoro, mozzarella, mais, olive, pancetta"},
    {"id":"30", "gust":"MESSICANA", "desc": "pomodoro, mozzarella, cipolla, salamino, peperoni, sasiccia, olive"},
    {"id":"31", "gust":"BOSCAIOLA", "desc": "pomodoro, mozzarella, prosciutto, funghi, panna"},
    {"id":"32", "gust":"TIROLESE", "desc": "pomodoro, mozzarella, wurstel, speck"},
    {"id":"33", "gust":"ESTIVA", "desc": "pomodoro, mozzarella, pom. fresco, rucola, mozz.fr., olio ex. verg. d'olive"},
    {"id":"34", "gust":"BRIE & SPECK", "desc": "pomodoro, mozzarella, brie, speck"},
    {"id":"35", "gust":"FRICO (BIANCA)", "desc": "pomodoro, formaggi misti, patate"},
    {"id":"36", "gust":"FRIULANA", "desc": "pomodoro, mozzarella, patate, salsiccia, wurstel"},
    {"id":"37", "gust":"GETE", "desc": "pomodoro, mozzarella, asparagi, mais, rucola, grana, olio ex. verg. d'oliva"},
    {"id":"38", "gust":"VALTELLINA", "desc": "pomodoro, mozzarella, bresaola, rucola, grana, olio ex. verg. d'oliva"},
    {"id":"39", "gust":"BRIOSA", "desc": "pomodoro, mozzarella, funghi misti, brie, patate"},
    {"id":"40", "gust":"FIOR DI BOSCO", "desc": "pomodoro, mozzarella, funghi misti, gorganzola"},
    {"id":"41", "gust":"AFFUMICATA", "desc": "pomodoro, mozzarella, ricotta aff., rucola, speck, olio ex. verg. d'oliva"},
    {"id":"42", "gust":"PICCANTISSIMA", "desc": "pomodoro, mozzarella, salamino, olive, tono, tabasco, pom. fr., olio piccante"},
    {"id":"43", "gust":"ZINGARA", "desc": "pomodoro, mozzarella, prosciutto, tonno, salamino, capperi, funghi, peperoni, olive"},
    {"id":"44", "gust":"MONTANARA", "desc": "pomodoro, mozzarella, speck, asparagi, ricotta"},
    {"id":"45", "gust":"SAPORITA", "desc": "pomodoro, mozzarella, tonno, cipolla, peperoni, olive"},
    {"id":"46", "gust":"AI PORCINI", "desc": "pomodoro, mozzarella, funghi porcini"},
    {"id":"47", "gust":"PRIMAVERA", "desc": "pomodoro, mozzarella, ricotta fr., pom. fr., olive, olio ex. verg. d'oliva"},
    {"id":"48", "gust":"BUFALINA", "desc": "pomodoro, mozzarella, pom. fresco, mozz. di bufala, olio ex. verg. d'oliva, origano"},
    {"id":"49", "gust":"DELLA CASA", "desc": "divisa 8 gusti"}

]

const speciali = [
    {"id":"50", "gust":"BAFFO", "desc": "pomodoro, mozzarella, speck cotto, funghi, pomodorini freschi"},
    {"id":"51", "gust":"PAESANA", "desc": "pomodoro, mozzarella, radicchio fr., pancetta, grana, olio ex. verg. d'oliva"},
    {"id":"52", "gust":"SEMPRE PRONTO", "desc": "pomodoro, mozzarella, radicchio cotto, funghi fr., cipolla, salamino"},
    {"id":"53", "gust":"MARE MONTI", "desc": "pomodoro, mozzarella, gamberetti, funghi misti"},
    {"id":"54", "gust":"GAMBERETTO", "desc": "pomodoro, mozzarella, gamberetti, rucola, olio ex. verg. d'oliva"},
    {"id":"55", "gust":"ALLA GRECA", "desc": "pomodoro, mozzarella, rucola, pom. fresco, olive, feta greca, olio ex. verg. d'oliva"},
    {"id":"56", "gust":"RUSTICA", "desc": "pomodoro, mozzarella, prosciutto cotto, wurstel, porcini, cipolla, peperoni"},
    {"id":"57", "gust":"GRATUGGIATA", "desc": "pomodoro, mozzarella, zucchine gratuggiate, gamberetti"},
    {"id":"58", "gust":"AUTUNNALE", "desc": "pomodoro, mozzarella, rucola, radicchio fr., mais, pom. fr., grana, olio ex. verg. d'oliva"},
    {"id":"59", "gust":"DVD", "desc": "pomodoro, mozzarella, rucola, speck, ricotta affumicata, olio ex. verg. d'oliva, bufala"},
    {"id":"60", "gust":"CURIOSA", "desc": "pomodoro, mozzarella, radicchio cotto, ricotta fr., capperi"},
    {"id":"61", "gust":"GUSTOSA", "desc": "pomodoro, mozzarella, funghi, salsiccia, panna"},
    {"id":"62", "gust":"DELIZIA", "desc": "pomodoro, mozzarella, brie, carciofi, peperoni, olive, salamino"},
    {"id":"63", "gust":"DIVERSA", "desc": "pomodoro, mozzarella, brie, salsiccia, zucchine grattugiate"},
    {"id":"64", "gust":"REGINA (ROSSA)", "desc": "pomodoro, mozzarella di bufala, olive, tono, capperi"},
    {"id":"65", "gust":"ALEGRA (BIANCA)", "desc": "mozzarella, funghi, salamino, olive, grana"},
    {"id":"66", "gust":"SPEEDY", "desc": "pomodoro, mozzarella, salsiccia, salamino, peperoni, funghi"},
    {"id":"67", "gust":"PIZZAIOLA (BIANCA)", "desc": "mozzarella, prosciutto, funghi, olive, cipolla, salamino, bufala cotta, pom. fresco"},
    {"id":"68", "gust":"ALMANACCO", "desc": "pomodoro, mozzarella, pomodoro fr., gorgonzola, porchetta"},
    {"id":"69", "gust":"ITALIA", "desc": "pomodoro, mozzarella, zucchine gratuggiate, pomodorini, grana"},
    {"id":"70", "gust":"MIX", "desc": "pomodoro, mozzarella, prosciutto, peperoni, pom. fr., salsiccia, gorgonzola, cipolla"},
    {"id":"71", "gust":"INVERNALE", "desc": "pomodoro, mozzarella, radicchio cotto, patate, cipolla, porchetta"},
    {"id":"72", "gust":"SOFISTICATA", "desc": "pomodoro, mozzarella, gorgonzola, asparagi, speck"}
    
]


const sfiziose = [
    {"id":"73", "gust":"CARNIVORA", "desc": "pomodoro, mozzarella, prosciutto, salamino, sasiccia, wurstel, affettato a scelta del pizzaiolo"},
    {"id":"74", "gust":"NORVEGESE", "desc": "pomodoro, mozzarella, brie, zucchine gratt., salmone"},
    {"id":"75", "gust":"APPETITOSA", "desc": "pomodoro, mozzarella, porcini, peperoni, porchetta"},
    {"id":"76", "gust":"ANTO", "desc": "pomodoro, mozzarella, ricotta, spinaci, salamino, grana"},
    {"id":"77", "gust":"DORDO", "desc": "pomodoro, mozzarella, porcini, rucola, bufala, pomodorini fr., olio ex. verg. d'oliva"},
    {"id":"78", "gust":"PARADISO", "desc": "pomodoro, mozzarella, prosciutto crudo di San Daniele, bufala"},
    {"id":"79", "gust":"PREFERITA (ROSSA)", "desc": "pomodoro, gorganzola, salamino, acciughe, prosc. crudo di S. Daniele"},
    {"id":"80", "gust":"ZIO PEPE", "desc": "pomodoro, mozzarella, funghi, cipolla, olive, pancetta in cottura, pepe nero"},
    {"id":"81", "gust":"GANZA", "desc": "pomodoro, mozzarella, funghi misti, ricotta, porchetta"},
    {"id":"82", "gust":"BELGA", "desc": "pomodoro, mozzarella, panna, pomodorini fr., prosc. crudo di S.Daniele"},
    {"id":"83", "gust":"SALMONE E PANNA", "desc": "pomodoro, mozzarella, panna, salmone"},
    {"id":"84", "gust":"CHOCHO", "desc": "pomodoro, mozzarella, spinaci, porchetta, ricotta aff."},
    {"id":"85", "gust":"MISTO MARE (ROSSA)", "desc": "pomodoro, gamberetti, tonno, salmone"},
    {"id":"86", "gust":"JACK", "desc": "pomodoro, mozzarella, brie, salsiccia, zucchine grattugiate"},
    {"id":"87", "gust":"TRIS", "desc": "pomodoro, mozzarella, spinaci, gorgonzola, salsiccia"},
    {"id":"88", "gust":"SIRENETTA", "desc": "pomodoro, mozzarella, ricotta fr., salmone"},
    {"id":"89", "gust":"SACARAMANTICA", "desc": "pomodoro, mozzarella, pancetta cotta, zucchine gratt., grana"},
    {"id":"90", "gust":"FUFFY", "desc": "pomodoro, mozzarella, rucola, prosciutto crudo di S. Daniele, grana"},
    {"id":"91", "gust":"PICASSO", "desc": "pomodoro, mozzarella, rucola, speck, pomodorini, bufala, olio ex. verg. d'oliva"},
    {"id":"92", "gust":"SORRISO", "desc": "pomodoro, mozzarella, rucola, bresaola, mais, olio ex. verg. d'oliva"},
    {"id":"93", "gust":"MDV", "desc": "pomodoro, mozzarella, zucchine grattugiate, pancetta cotta, funghi, brie, grana"},
    {"id":"94", "gust":"FRANCA", "desc": "pomodoro, mozzarella, carciofi, olive, salamino, ricotta fresca"},
    {"id":"95", "gust":"DEL RE", "desc": "pomodoro, mozzarella, zucchine gratt., speck cotto, grana"},
    {"id":"96", "gust":"BEPP", "desc": "pomodoro, mozzarella, patate, pancetta, bufala, grana"},
    {"id":"97", "gust":"SARDA", "desc": "pomodoro, mozzarella, salsiccia, olive, porchetta"},
    {"id":"98", "gust":"SORGENTE", "desc": "pomodoro, mozzarella, porcini, bresaola"},
    {"id":"99", "gust":"MARILIN", "desc": "pomodoro, mozzarella, melanzane, salsiccia, gorgonzola"},
    {"id":"100", "gust":"100", "desc": "pomodoro, mozzarella, radicchia cotto, bufala"},
    {"id":"101", "gust":"101 (BIANCA)", "desc": "mozzarella, olive nere, bufala cotta, olio ex. verg. d'oliva"}

]


const mainIndex = document.getElementById('main');