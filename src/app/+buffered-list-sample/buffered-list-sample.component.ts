import { Component } from '@angular/core';
import { filter, BUFFERED_LIST_DIRECTIVES, BUFFERED_LIST_PROVIDERS, RtBufferedListService } from '../../right-angled';
import { SHARED_DIRECTIVES, AirportsService } from '../shared';

@Component({
    directives: [BUFFERED_LIST_DIRECTIVES, SHARED_DIRECTIVES],
    moduleId: module.id,
    providers: [BUFFERED_LIST_PROVIDERS],
    templateUrl: 'buffered-list-sample.component.html'
})
export class BufferedListSampleComponent {
    @filter() public airportName: string = null;
    public items: Array<any> = new Array<any>();
    constructor(public airportsService: AirportsService, public ngBufferedListService: RtBufferedListService) {
        this.ngBufferedListService.wrap(this);
    }

    public loadData = (requestParams: any): Promise<any> => {
        return this.airportsService.getAirportsBuffered(requestParams).then((result: any) => {
            this.items.push(...result.items);
            return result;
        });
    };
}