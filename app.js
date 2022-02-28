// TEST
console.log('Welcome to the new version of WhatsApp Web!');

// COLLEGAMENTO VUEJS
const app = new Vue ({
    el: '#root',
    data: {
        isActive: false,
        isDisabled: false,
    },
    methods: {

        expandWindow: function() {
            this.isActive = !this.isActive;
        },

        closeWindow: function() {
            this.isDisabled = !this.isDisabled;
        },
    },
});

console.log(app);