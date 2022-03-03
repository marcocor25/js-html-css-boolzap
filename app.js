// TEST
console.log("Welcome to the new version of WhatsApp Web!");

// COLLEGAMENTO VUEJS
const app = new Vue({
    el: "#root",
    data: {
        isActive1: false,
        isActive2: false,
        isClosed: false,
        isMinimized: false,
        isExpanded: false,
        isOpened: false,
        currentChat: "-1",
        newMessage: "",
        randomAnswers: [
            "Si",
            "No.",
            "Certamente!!",
            "Ok",
            "Vuoi avere sempre ragione!! 😡",
            "Noooooooo...",
            "Ci puoi scommettere!",
            "La smetti!?",
            "Ma sei scemo??",
            "Vorrei proprio vedere!",
            "Bastaaaaaaaaaaaaaaaa",
            "OVVIO",
            "😘",
            "😂😂😂",
            "👍",
            "Vaff... 🤬",
            "Quella conversazione deve aver significato molto più per te che per me.",
            "Aspetta 10 minuti che trovo un modo gentile per rifiutare.",
            "È successo solo perché da Facebook ho visto che sei single e da Instagram che stavi camminando in quel quartiere da sola.",
            "Cosa ti hanno fatto i tuoi genitori per provocarti questo costante bisogno di approvazione?",
            "Bn! Sn paxato agli smartphone 3 anni fa. Tu?",
            "Magari quando passi la verifica di italiano.",
            "È triste tu abbia così tanti gruppi su Whatsapp e così pochi nella vita.",
            "Sei l’allegoria della delusione.",
            'E come disse il netturbino: "Mi rifiuto!"',
            'Ho saputo della tua esperienza con l`acqua lete... È vero che la particella di sodio quando ti è salita in testa gridava: "c`è nessunOOO?"',
            "Mi è bastato vederti da lontano per capire che sei bellissimo, mi e bastato vederti da vicino per capire che da lontano non ci vedo proprio.",
            "QUESTO MESSAGGIO È PARTITO IL 7/1/1949 DAL CENTRO SPAZIALE AREA49 (USA) ALLA RICERCA DI UNA FORMA DI VITA INTELLIGENTE. ADESSO CHE È ARRIVATO A TE LA MISSIONE È FALLITA!!!",
            "Io scavo, tu scavi, egli scava, noi scaviamo, voi scavate, essi scavano... non è una bella dedica ma è profonda",
        ],
        contacts: [
            {
                name: "Michele",
                accesso: "",
                avatar: "img/01.jpg",
                visible: true,
                messages: [
                    {
                        date: "15:30",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                        seen: "read",
                    },
                    {
                        date: "15:50",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                        seen: "read",
                    },
                    {
                        date: "16:15",
                        text: "Tutto fatto!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Fabio",
                accesso: "",
                avatar: "img/02.jpg",
                visible: true,
                messages: [
                    {
                        date: "16:30",
                        text: "Ciao come stai?",
                        status: "sent",
                        seen: "read",
                    },
                    {
                        date: "16:30",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },
                    {
                        date: "16:35",
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
                        seen: "unread",
                    },
                ],
            },
            {
                name: "Samuele",
                accesso: "",
                avatar: "img/03.jpg",
                visible: true,
                messages: [
                    {
                        date: "10:10",
                        text: "La Marianna va in campagna",
                        status: "received",
                    },
                    {
                        date: "10:20",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                        seen: "read",
                    },
                    {
                        date: "16:15",
                        text: "Ah scusa!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Luisa",
                accesso: "",
                avatar: "img/04.jpg",
                visible: true,
                messages: [
                    {
                        date: "15:30",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                        seen: "read",
                    },
                    {
                        date: "15:50",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
        ],
    },
    methods: {
        closeWindow: function () {
            this.isClosed = true;
        },

        minimizeWindow: function () {
            this.isMinimized = !this.isMinimized;
        },

        expandWindow: function () {
            this.isExpanded = !this.isExpanded;
        },

        menuToggler1: function () {
            this.isActive1 = !this.isActive1;
        },

        menuToggler2: function () {
            this.isActive2 = !this.isActive2;
        },

        openApp: function () {
            this.isClosed = false;
        },

        selectChat: function (i) {
            this.currentChat = i;
        },

        sendMessage: function () {
            if (this.newMessage !== "") {
                const contact = this.contacts[this.currentChat];

                const message = {
                    date: dayjs().format("HH:mm"),
                    text: this.newMessage,
                    status: "sent",
                    seen: "unread",
                };

                contact.messages.push(message);

                // SVUOTA L'INPUT DI TESTO DELLA CHAT
                this.newMessage = "";

                // TIMER ONLINE
                setTimeout(() => {
                    contact.accesso = `online`;
                }, 2500);

                // TIMER SEEN
                setTimeout(() => {
                    message.seen = "read";
                }, 3500);

                // TIMER STA SCRIVENDO
                setTimeout(() => {
                    contact.accesso = "sta scrivendo...";
                }, 5000);

                // TIMER RISPOSTA AUTOMATICA
                setTimeout(this.autoReply, 7500);
            }
        },

        autoReply: function () {
            const contact = this.contacts[this.currentChat];

            const message = {
                date: dayjs().format("HH:mm"),
                text: this.randomAnswers[
                    Math.floor(Math.random() * this.randomAnswers.length)
                ],
                status: "received",
            };

            contact.messages.push(message);

            // TIMER ONLINE
            setTimeout(() => {
                contact.accesso = `online`;
            }, 0);

            // TIMER ULTIMO ACCESSO
            setTimeout(() => {
                contact.accesso = "oggi alle " + dayjs().format("HH:mm");
            }, 10000);
        },
    },
});

console.log(app);
