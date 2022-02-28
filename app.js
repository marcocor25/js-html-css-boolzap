// TEST
console.log('Welcome to the new version of WhatsApp Web!');

// COLLEGAMENTO VUEJS
const app = new Vue ({
    el: '#root',
    data: {
        isActive: false,
    },
    methods: {

        expandWindow: function() {
            this.isActive = !this.isActive;
        }
    },
});

console.log(app);