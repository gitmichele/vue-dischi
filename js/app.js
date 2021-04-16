function initVue() {

    new Vue({

        el: '#app',
        data: {

            albums: [],
            genres: [],
            filteredAlbums: [],
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
            })
            .catch()
        },
        methods:{
            switchSelect(event) {

            let arr = []
            this.selGenre = event.target.value;

            for (let i = 0; i < this.albums.length; i++){

                const album = this.albums[i]

                if (album.genre == this.selGenre) {

                    arr.push(album)
                }
            }
                
                this.filteredAlbums = arr
            }
        }
    });
};

function init() {

    initVue()
};

document.addEventListener('DOMContentLoaded', init);
