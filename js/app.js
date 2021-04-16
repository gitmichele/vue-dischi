function initVue() {

    new Vue({

        el: '#app',
        data: {
            albums: [],
            genres: [],
            selGenre: '',
        },
        mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((data) => {

                const arr = data.data.response;
                this.albums = arr;

                for (let i = 0; i < this.albums.length; i++) {

                    if (!this.genres.includes(this.albums[i].genre)) {

                        this.genres.push(this.albums[i].genre)
                    }
                }
                console.log(this.genres);
            })
            .catch()
        },
        methods:{
            
            getFilterAlbums: function() {

                console.log();
                // for (let i=0; i<this.albums.length; i++){

                //     if(){}
                // }
            },
        }
    });
};

function init() {

    initVue()
};

document.addEventListener('DOMContentLoaded', init);
