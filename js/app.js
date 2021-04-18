function initVue() {

    new Vue({

        el: '#app',

        data: {

            albums: [],
            selected: ''
        },

        mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(data => {

                let arr = data.data.response
                this.albums = arr.sort((a, b) => b.year - a.year)
            })
            .catch(() => {

                console.log('error');
            })
        },

        computed: {

            getGenres: function() {

                const arr = [];

                for (let i=0; i<this.albums.length; i++){
                
                    const album = this.albums[i];

                    if (!arr.includes(album.genre)){

                        arr.push(album.genre)
                    };
                };

                return arr
            },
            getFilteredByGenre: function() {

                let arr = [];

                if (this.selected != ''){

                    for (let i = 0; i < this.albums.length; i++) {

                        const album = this.albums[i];

                        if (album.genre == this.selected) {

                            arr.push(album)
                        }
                    }
                }
                else{

                    arr = this.albums
                }

                return arr
            },
        }
    });
};

function init() {

    initVue()
};

document.addEventListener('DOMContentLoaded', init);
