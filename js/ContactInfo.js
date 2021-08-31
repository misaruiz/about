class ContactInfo {
    constructor(contact, link, icon){
        this.contact = contact;
        this.link = link;
        this.icon = icon;
        this.print = this.printContact();
    }
    printContact() {
        document.getElementById('contact-info').insertAdjacentHTML("beforeend", 
                `<li class="d-block d-md-inline-block d-lg-block me-md-3 m-lg-0">
                    <i class="bi bi-${this.icon} text-primary"></i>
                    <a href="${this.link}">${this.contact}</a>
                </li>`);
    }
}