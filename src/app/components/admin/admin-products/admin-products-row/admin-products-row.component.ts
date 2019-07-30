import { Component, OnInit } from '@angular/core';
import { WineCard } from 'src/app/interfaces/wine';
import { FilterSettings, Category } from 'src/app/interfaces/filter-settings';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { ActivatedRoute } from '@angular/router';
import { EmptyFilterSettingsService } from 'src/app/services/empty-filter-settings.service';

@Component({
    selector: 'admin-products-row',
    templateUrl: './admin-products-row.component.html',
    styleUrls: ['./admin-products-row.component.css']
})
export class AdminProductsRowComponent implements OnInit {

    pageCount: number;

    wineCards: WineCard[];
    filterSettings: FilterSettings;
    currentPage: number;


    constructor(private productHttpService: ProductHttpService, private route: ActivatedRoute,
        private emptyFilterSettingsService: EmptyFilterSettingsService) {
        this.wineCards = [];
        this.filterSettings = {};
    }

    ngOnInit() {
        let category: string = this.route.snapshot.paramMap.get('category');
        if (category != null) {
            let enumCategory: Category;
            switch (category) {
                case 'red': enumCategory = Category.RED; break;
                case 'white': enumCategory = Category.WHITE; break;
            }
            this.filterSettings.category = enumCategory;
        }
        this.refresh();
    }

    refresh(filterSettings?: FilterSettings) {
        this.filterSettings = filterSettings;
        let p = this.productHttpService.getWines(this.cleanedFilter(this.filterSettings));
        //this.promiseForPageCount = p;
        p.then(wineCardResults => {
            this.wineCards = wineCardResults.wines;
            this.pageCount = wineCardResults.numberOfPage;
        });
    };

    cleanedFilter(filterSettings?: FilterSettings) {
        if (filterSettings) {
            for (let key of Object.keys(filterSettings)) {
                if (!filterSettings[key]) {
                    filterSettings[key] = undefined;
                }
            }
        }
        return filterSettings;
    }

    refreshPage(pageNumber: number) {
        if (!this.filterSettings) {
            this.filterSettings = this.emptyFilterSettingsService.emptyObject();
        }
        this.filterSettings.offset = pageNumber;
        this.refresh(this.filterSettings);
    }
}
