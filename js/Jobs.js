class Jobs {
    constructor(title, company, startDate, endDate, city, state, descriptions) {
        this.title = title;
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.city = city;
        this.state = state;
        this.descriptions = descriptions;
        this.print = this.printJobs();      
    };

    printJobs() { 
            document.getElementById('work-experience').insertAdjacentHTML("beforeend", 
                `<article class="mb-5">
                    <h3 class="h4"><strong>${this.title}</strong></h3>
                    <p class="h6 text-primary">${this.company}</p>
                    <p class="text-muted h6">${this.startDate} – ${this.endDate} <span class="text-primary text-opacity-25">•</span> ${this.city}, ${this.state}</p>
                    <ul class="description">${this.descriptions.map(description => `<li>${description}</li>`).join('')}</ul>
                </article>`);      
    }
}








