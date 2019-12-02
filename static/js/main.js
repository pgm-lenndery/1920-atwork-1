(() => {
    const atelier = [
        {
            title: 'Strelitzia construction',
            subTitle: 'Behind the scenes of the workshop',
            about: 'Strelitzia is Latin for the commonly known crane flower, or \'bird of paradise\', a plant...',
            img: '../static/images/atelier-studio/atelier-01.jpg'
        },{
            title: 'Rough construction video — The Beautiful Dreamer',
            subTitle: 'Creation and installation of a new sculpture in Paris',
            about: 'Arne Quinze finds it very important to develop our cities in closer relation to nature, and this...',
            img: '../static/images/atelier-studio/atelier-02.gif'
        },{
            title: 'Finishing a public art installation in Paris',
            subTitle: 'Le Beau Rêveur',
            about: 'Inspired by an active romanticism, Arne Quinze continues his journey with this public sculpture...',
            img: '../static/images/atelier-studio/atelier-03.jpg'
        },{
            title: 'Le Beau Rêveur B/W',
            subTitle: 'Building a new sculpture in Paris',
            about: 'We are at the construction site of ‘The Beautiful Dreamer’ in Porte de Versailles, Paris...',
            img: '../static/images/atelier-studio/atelier-04.jpg'
        },{
            title: 'Spray-painting The Beautiful Dreamer',
            subTitle: 'Natural Chaos sculpture for Paris',
            about: 'Only one month left before heading to Paris for the setup of \'The Beautiful Dreamer\'. The...',
            img: '../static/images/atelier-studio/atelier-05.jpg'
        },{
            title: 'Programming and testing Amazonia',
            subTitle: 'Bioluminescent Natural Chaos',
            about: 'The idea for Amazonia emerged no less than 3 years ago after a series of travels through the...',
            img: '../static/images/atelier-studio/atelier-06.gif'
        }
    ]

    const exhibitions = [
        {
            title: 'Chroma series — Lupines',
            about: 'Arne Quinze\'s garden hosts a series of lupines',
            subtitle: 'Sculpture — Studio, Sint-Martens-Latem, Belgium',
            img: [
                {
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },
            ]
        },{
            title: 'The story of Amazonia',
            about: 'Docu film about the creation of a new art installation',
            subtitle: 'Documentary — Creutz & Partners offices, Beiler, Luxembourg',
            img: [
                {
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },
            ]
        },{
            title: 'The Beautiful Dreamer',
            about: 'Public sculpture',
            subtitle: 'Installation / Sculpture — Porte De Versailles, Paris, France',
            img: [
                {
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },
            ]
        },{
            title: 'Amazonia — Luxembourg',
            about: 'Natural Chaos',
            subtitle: 'Installation / Sculpture — Creutz & Partners, Luxemburg',
            img: [
                {
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },
            ]
        },{
            title: 'Floral study',
            about: 'My Secret Garden',
            subtitle: 'Study',
            img: [
                {
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },
            ]
        },{
            title: '​Bouquette series',
            about: 'Wildflower Field Paintings',
            subtitle: 'Painting — Atelier, Sint-Martens-Latem, Belgium',
            img: [
                {
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },{
                    src: '../static/images/atelier-studio/atelier-01.jpg',
                },
            ]
        }
    ]

    const app = {
        initialize() {
            this.sectionAtelier = document.querySelector('[data-item="atelier-studio-items"]');
            this.sectionExhibitions = document.querySelector('[data-item="arts-exhibitions-items"]');
            this.generateSectionAtelier();
            this.generateSectionExhibitions();
        },

        generateSectionAtelier() {
            console.log(`sectionAtelier = ${this.sectionAtelier}`)
            if (this.sectionAtelier !== null) {
                let tempStr = '';
                let n = 0;
                atelier.forEach((r) => {
                    n ++;

                    if (n == 1) {
                        tempStr += `
                        <div class="arts-grid row align-items-center">
                            <div class="col-4 item">
                                <div class="item-img">
                                    <img src="${r.img}" alt="">
                                </div>
                                <div class="item-descr">
                                    <h3>${r.subTitle}</h3>
                                    <h2>${r.title}</h2>
                                    <p>${r.about}</p>
                                    <a class="link" href="">Learn more</a>
                                </div>
                            </div>
                        `
                    } else if (n == 3) {
                        n = 0;
                        tempStr += `
                                <div class="col-4 item">
                                    <div class="item-img">
                                        <img src="${r.img}" alt="">
                                    </div>
                                    <div class="item-descr">
                                        <h3>${r.subTitle}</h3>
                                        <h2>${r.title}</h2>
                                        <p>${r.about}</p>
                                        <a class="link" href="">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        `
                    } else {
                        tempStr += `
                            <div class="col-4 item">
                                <div class="item-img">
                                    <img src="${r.img}" alt="">
                                </div>
                                <div class="item-descr">
                                    <h3>${r.subTitle}</h3>
                                    <h2>${r.title}</h2>
                                    <p>${r.about}</p>
                                    <a class="link" href="">Learn more</a>
                                </div>
                            </div>
                        `
                    }
                });

                this.sectionAtelier.innerHTML = tempStr;
            };
        },

        generateSectionExhibitions() {
            if (this.sectionExhibitions !== null) {
                let tempStr = '';
                exhibitions.forEach((r) => {
                    tempStr += `
                    <div class="row" data-item="page-arts-exhibitions-item">
                        <div class="col-3">
                            <h2>${r.title}</h2>
                            <h3>${r.about}</h3>
                            <h3>${r.subtitle}</h3>
                        </div>
                        <div class="col-9">
                            ${this.generateExhibitionImages(r.img)}
                        </div>
                    </div>
                    `;
                });
                this.sectionExhibitions.innerHTML = tempStr;
            }
        },

        generateExhibitionImages(array) {
            let tempStr = '';
            array.forEach((img) => {
                tempStr += `
                    <img src="${img.src}" alt="">
                `
                console.log(img.src);
            })

            return tempStr;
        }
    }

    app.initialize();
})()