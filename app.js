// TEST
console.log('Welcome to the new version of WhatsApp Web!');

// COLLEGAMENTO VUEJS
const app = new Vue ({
    el: '#root',
    data: {
        isActive1: false,
        isActive2: false,
        isClosed: false,
        isMinimized: false,
        isExpanded: false,
        isOpened: false,
        chat: '',
        contacts: [
            {
                name: 'Michele',
                accesso: 'online',
                avatar: 'img/01.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        seen: 'read',
                    },
                    {
                        date: '15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        seen: 'read',
                    },
                    {
                        date: '16:15',
                        text: 'Tutto fatto!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Fabio',
                accesso: 'oggi alle  16:47',
                avatar: 'img/02.jpg',
                visible: true,
                messages: [
                    {
                        date: '16:30',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        seen: 'read',
                    },
                    {
                        date: '16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                    },
                    {
                        date: '16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        seen: 'unread',
                    },
                ],
            },
            {
                name: 'Samuele',
                accesso: 'ieri alle 23:38',
                avatar: 'img/03.jpg',
                visible: true,
                messages: [
                    {
                        date: '10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                    },
                    {
                        date: '10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        seen: 'read',
                    },
                    {
                        date: '16:15',
                        text: 'Ah scusa!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Luisa',
                accesso: 'online',
                avatar: 'img/04.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        seen: 'read',
                    },
                    {
                        date: '15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    },
                ],
            },
        ],
    },
    methods: {

        closeWindow: function() {
            this.isClosed = true;
        },

        minimizeWindow: function() {
            this.isMinimized = !this.isMinimized;
        },

        expandWindow: function() {
            this.isExpanded = !this.isExpanded;
        },

        menuToggler1: function() {
            this.isActive1 = !this.isActive1;
        },

        menuToggler2: function() {
            this.isActive2 = !this.isActive2;
        },

        openApp: function() {
            this.isClosed = false;
        },

        selectChat: function(i) {
            this.chat = i;
        },
    },
});

console.log(app);