new Vue({
    el: '#exercise',
    data: {
        name: 'Park',
        age: 26,
        img: 'data:image/jpeg;base64,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'
    },
    methods: {
        randomFloat: function() {
            return Math.random();
        },
        nameInput: function(event) {
            return event.target.value;
        }

    }
})