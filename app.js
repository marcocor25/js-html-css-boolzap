// TEST
console.log('Welcome to the new version of WhatsApp Web!');

// COLLEGAMENTO VUEJS
const app = new Vue ({
    el: '#root',
    data: {
        isClosed: false,
        isMinimized: false,
        isExpanded: false,
        isActive: false,
        isOpened: false,
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

        menuToggler: function() {
            this.isActive = !this.isActive;
        },

        openApp: function() {
            this.isClosed = false;
        },
    },
});

console.log(app);