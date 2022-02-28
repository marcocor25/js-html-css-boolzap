// TEST
console.log('Welcome to the new version of WhatsApp Web!');

// COLLEGAMENTO VUEJS
const app = new Vue ({
    el: '#root',
    data: {
        isDisabled: false,
        isMinimized: false,
        isExpanded: false,
        isActive: false,
    },
    methods: {

        closeWindow: function() {
            this.isDisabled = !this.isDisabled;
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

    },
});

console.log(app);