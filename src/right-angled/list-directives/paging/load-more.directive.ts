import { SkipSelf, HostListener, Directive } from '@angular/core';

import { ListComponent } from '../list.component';
import { RtBufferedListService } from '../../services/ng-buffered-list-service.service';

@Directive({
    selector: '[rtLoadMore]'
})
export class LoadMoreDirective {
    public bufferedListService: RtBufferedListService;
    constructor( @SkipSelf() listHost: ListComponent) {
        if (!listHost.isBufferedList) {
            throw new Error('[rtLoadMore] directive can be used only with buffered list services.');
        }
        this.bufferedListService = <RtBufferedListService>listHost.serviceInstance;
    }
    @HostListener('click', ['$event'])
    public loadMore(evt: MouseEvent): void {
        this.bufferedListService.loadData();
        evt.preventDefault();
    }
}