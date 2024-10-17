class AppletGallery {

    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.appletgallery = [];
        this.init();
    }

    async init() {
        await this.fetchData();
        this.renderAppletGallery(this.appletgallery); 
        this.bindSearchEvent();
    }
    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.appletgallery = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderAppletGallery(appletgallery) {
        const appletgalleryCont = document.getElementById('appletgalleryCont');
        appletgalleryCont.innerHTML = appletgallery.map(applet => 
            `<div class="card" style="width: 18rem;"> 
               <img src = "${applet.Image}" class="card-img-top image" alt="${applet.Applet_No}">
                    <h5> ${applet.Applet_No} </h5>
                    <p> ${applet.Description}</p>
                    <a href = "${applet.file}" class = "btn btn-primary">Go to Applet </a>  
            </div>`
        ).join('');
    }
}