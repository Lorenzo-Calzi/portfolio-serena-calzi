import ImageCourse1 from "../assets/images/course-1.jpg";
import ImageCourse2 from "../assets/images/course-6.jpg";

export default [
    {
        id: "corso-massaggio-individuale",
        title: "Corso Massaggio Individuale",
        description:
            "Corso personalizzato per genitori e bambini, svolto a casa con incontri flessibili di 90 minuti. L'insegnante offre supporto individuale e su misura, includendo un kit di massaggio e materiali extra. Gli orari vengono concordati con i genitori.",
        image: ImageCourse2,
        details: {
            description: [
                `Questa tipologia di corso é pensata per genitori che desiderano fare un'esperienza di contatto e coccole
                con il proprio bambino nell'ambiente intimo e protetto della propria casa, con la comodità di scegliere
                orari e giorni flessibili, in accordo con l'insegnante e la possibilità di partecipare in coppia. Il corso verrà
                "cucito" ad hoc sul nucleo e lungo il percorso c'é la possibilità, da parte del genitore, di avanzate
                proposte specifiche rispetto a temi di interesse o bisogni specifici. Il rapporto 1-1 tra insegnante e genitori
                consentirà inoltre una conoscenza reciproca più approfondita ed un supporto costante.`,
                `All'interno del percorso verrà fornita a ciascun partecipante 1 kit di primo massaggio comprensivo di
                cartelletta didattica personale, materiale extra e un olio IAIM.`,
                `Ogni incontro avrà la durata di '90 massimo e sarà a cadenza settimanale in base agli accordi presi in
                precedenza. In caso di imprevisti di salute o altro, le parti si impegnano ad avvisarsi entro 24 h al fine di
                riprogrammare l'incontro saltato.`
            ],
            date: ["1 Settembre 2024"],
            place: "Da definire",
            age: "0 - 12 mesi",
            placesAvailable: "2",
            timetables: "Flessibili",
            days: "Flessibili",
            price: "250€",
            discountedPrice: "200€",
            images: [
                "https://media.istockphoto.com/id/1399611777/it/foto/ritratto-di-un-ragazzino-sorridente-dai-capelli-castani-che-guarda-la-macchina-fotografica.jpg?s=612x612&w=0&k=20&c=z0OAA_5m3sfytEqMow1ZzXoIdtXM8mYkyHLcnH_IWsY=",
                "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984788.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=ais"
            ],
            formElementsList: [
                "email",
                "telefono",
                "nomeBambino",
                "dataNascita",
                "corsi",
                "problematiche",
                "preferenze",
                "partecipazioneDiCoppia",
                "presentazione",
                "aspettative",
                "note"
            ]
        }
    },
    {
        id: "corso-massaggio-di-gruppo",
        title: "Corso Massaggio Di Gruppo",
        description:
            "Esperienza di contatto e coccole per genitori e bambini in piccoli gruppi, con incontri settimanali di 90 minuti guidati da un insegnante. Si partecipa insieme ad altri genitori e vengono forniti materiali didattici. I papà sono i benvenuti.",
        image: ImageCourse1,
        details: {
            description: [
                `Questa tipologia di corso é pensata per genitori che desiderano fare un'esperienza di contatto e coccole
                insieme al proprio bambino, all'interno di un piccolo gruppo di mamme e papà al fine di potersi
                confrontare, scambiare consigli ed essere accolti in un uno spazio neutro ed a loro misura. Il gruppo
                verrà considerato come risorsa e l'insegnante un facilitatore e guida esperta all'interno dei 5 incontri.
                All'interno del percorso verrà fornita a ciascun partecipante una cartelletta didattica personale e materiale
                di approfondimento da un incontro con l'altro. Anche i papà sono i benvenuti!`,
                `Ogni incontro avrà la durata di '90 massimo e sarà a cadenza settimanale (vedi date nella tabella sopra).
                Ai fini organizzativi, gli incontri persi non potranno essere recuperati.`
            ],
            date: ["5 Settembre 2024"],
            place: "Centro SWAMI a Cassago Brianza",
            age: "0 - 12 mesi",
            placesAvailable: "5",
            timetables: "10:30 - 12:00",
            days: "Sabato",
            price: "100€",
            discountedPrice: "",
            images: [
                "https://media.istockphoto.com/id/1399611777/it/foto/ritratto-di-un-ragazzino-sorridente-dai-capelli-castani-che-guarda-la-macchina-fotografica.jpg?s=612x612&w=0&k=20&c=z0OAA_5m3sfytEqMow1ZzXoIdtXM8mYkyHLcnH_IWsY=",
                "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984788.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=ais"
            ],
            formElementsList: [
                "email",
                "telefono",
                "nomeBambino",
                "dataNascita",
                "corsi",
                "problematiche",
                "preferenze",
                "partecipazioneDiCoppia",
                "presentazione",
                "aspettative",
                "note"
            ]
        }
    }
];
