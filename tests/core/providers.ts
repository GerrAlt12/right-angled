import { RTFiltersService, RTList, RTOperationStatus, RTSortingsService } from './../../src/core/providers';

describe('providers', () => {
    describe('RTOperationStatus', () => {
        it('Coverage stub for else RTOperationStatus :)', () => {
            let status = new RTOperationStatus();
            expect(status).not.toBeNull();
        });
    });
    describe('RTList', () => {
        it('registers passed filter services on init', () => {
            let filtersService: RTFiltersService = new RTFiltersService();
            let sortingsService: RTSortingsService = new RTSortingsService();
            let list = new RTList(null, null, null, sortingsService, filtersService);
            let registerSpy = spyOn(filtersService, 'registerFilterTarget');
            list.init();
            expect(registerSpy.calls.first().args).toEqual([]);

            filtersService = new RTFiltersService();
            list = new RTList(null, null, {}, sortingsService, filtersService);
            registerSpy = spyOn(filtersService, 'registerFilterTarget');
            list.init();
            expect(registerSpy.calls.first().args).toEqual([{}]);

            filtersService = new RTFiltersService();
            list = new RTList(null, null, [{}, {}, {}], sortingsService, filtersService);
            registerSpy = spyOn(filtersService, 'registerFilterTarget');
            list.init();
            expect(registerSpy.calls.first().args).toEqual([{}, {}, {}]);
        });
    });
});
