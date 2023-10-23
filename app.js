new Vue({
    el: '#app',
    data: {
        authors: [
            {
                name: 'Brianna',
                foodieLevel: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat-free, sugar-free stuffs!'
            },
            {
                name: 'LINH',
                foodieLevel: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently ventured outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
            },
            {
                name: 'CATHERINE LEONARDO',
                foodieLevel: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never looked back since!'
            },
            {
                name: 'KALI',
                foodieLevel: 'Novice',
                bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I\'m a food enthusiast! Invite me over for dinner and Iwill be here!'
            }
        ],
        showAuthorBox: false,
        selectedAuthor: null
    },
    methods: {
        showAuthorDetails(author) {
            this.selectedAuthor = author;
            this.showAuthorBox = true;
        },
        closeAuthorBox() {
            this.showAuthorBox = false;
        }
    }
});
