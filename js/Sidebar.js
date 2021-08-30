class Sidebar {
    constructor(category, icon, subCategories) {
        this.category = category;
        this.icon = icon;
        this.subCategories = subCategories;
        this.print = this.printCategories();
    }

    printCategories() {

        document.getElementById('sidebar').insertAdjacentHTML("beforeend", 
        `<article class="pb-3">
            <h6 class="text-primary"><i class="bi bi-${this.icon}"></i> ${this.category}</h6>
            ${this.subCategories.map(subCategory => `<p class="small">
                ${subCategory
                    .map((subItem, index) => { 
                        if (index === 0) {
                            return `<strong>${subItem}</strong>`;
                        } else {
                            return `<span>${subItem}</span>`;
                        }
                    }).join(' <span class="text-primary text-opacity-50">•</span> ')
                }</p>`).join('')
            }
        </article>`);
    }
}


