import { Directive } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import * as i0 from "@angular/core";
export class MatMultiSort extends MatSort {
    constructor() {
        super(...arguments);
        this.start = 'asc';
        this.actives = [];
        this.directions = [];
    }
    ngOnInit() {
        super.ngOnInit();
    }
    sort(sortable) {
        this.updateMultipleSorts(sortable);
        super.sort(sortable);
    }
    updateMultipleSorts(sortable) {
        const i = this.actives.findIndex(activeId => activeId === sortable.id);
        if (this.isActive(sortable)) {
            if (this.activeDirection(sortable) === (sortable.start ? sortable.start : this.start)) {
                this.directions.splice(i, 1, this.getNextSortDirection(sortable));
            }
            else {
                this.actives.splice(i, 1);
                this.directions.splice(i, 1);
            }
        }
        else {
            this.actives.push(sortable.id);
            this.directions.push(sortable.start ? sortable.start : this.start);
        }
    }
    isActive(sortable) {
        const i = this.actives.findIndex(activeId => activeId === sortable.id);
        return i > -1;
    }
    activeDirection(sortable) {
        const i = this.actives.findIndex(activeId => activeId === sortable.id);
        return this.directions[i] || (sortable.start ? sortable.start : this.start);
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵMatMultiSort_BaseFactory; return function MatMultiSort_Factory(t) { return (ɵMatMultiSort_BaseFactory || (ɵMatMultiSort_BaseFactory = i0.ɵɵgetInheritedFactory(MatMultiSort)))(t || MatMultiSort); }; })(); }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MatMultiSort, selectors: [["", "matMultiSort", ""]], exportAs: ["matMultiSort"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSort, [{
        type: Directive,
        args: [{
                selector: '[matMultiSort]',
                exportAs: 'matMultiSort'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LW11bHRpLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LW11bHRpLXNvcnQvc3JjL2xpYi9tYXQtbXVsdGktc29ydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBOEIsTUFBTSx3QkFBd0IsQ0FBQzs7QUFNN0UsTUFBTSxPQUFPLFlBQWEsU0FBUSxPQUFPO0lBSnpDOztRQU1FLFVBQUssR0FBRyxLQUF1QixDQUFDO1FBRWhDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFvQixFQUFFLENBQUM7S0FxQ2xDO0lBbkNDLFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksQ0FBQyxRQUFxQjtRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUJBQW1CLENBQUMsUUFBcUI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXZFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbkU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUI7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsUUFBcUI7UUFDNUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBcUI7UUFDbkMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RSxDQUFDO29OQXhDVSxZQUFZLFNBQVosWUFBWTtvRUFBWixZQUFZOztpRkFBWixZQUFZO2NBSnhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0U29ydCwgTWF0U29ydGFibGUsIFNvcnREaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21hdE11bHRpU29ydF0nLFxyXG4gIGV4cG9ydEFzOiAnbWF0TXVsdGlTb3J0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0TXVsdGlTb3J0IGV4dGVuZHMgTWF0U29ydCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgc3RhcnQgPSAnYXNjJyBhcyAnYXNjJyB8ICdkZXNjJztcclxuXHJcbiAgYWN0aXZlczogc3RyaW5nW10gPSBbXTtcclxuICBkaXJlY3Rpb25zOiBTb3J0RGlyZWN0aW9uW10gPSBbXTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgc29ydChzb3J0YWJsZTogTWF0U29ydGFibGUpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlTXVsdGlwbGVTb3J0cyhzb3J0YWJsZSk7XHJcbiAgICBzdXBlci5zb3J0KHNvcnRhYmxlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU11bHRpcGxlU29ydHMoc29ydGFibGU6IE1hdFNvcnRhYmxlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpID0gdGhpcy5hY3RpdmVzLmZpbmRJbmRleChhY3RpdmVJZCA9PiBhY3RpdmVJZCA9PT0gc29ydGFibGUuaWQpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQWN0aXZlKHNvcnRhYmxlKSkge1xyXG4gICAgICBpZiAodGhpcy5hY3RpdmVEaXJlY3Rpb24oc29ydGFibGUpID09PSAoc29ydGFibGUuc3RhcnQgPyBzb3J0YWJsZS5zdGFydCA6IHRoaXMuc3RhcnQpKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnNwbGljZShpLCAxLCB0aGlzLmdldE5leHRTb3J0RGlyZWN0aW9uKHNvcnRhYmxlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZXMucHVzaChzb3J0YWJsZS5pZCk7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKHNvcnRhYmxlLnN0YXJ0ID8gc29ydGFibGUuc3RhcnQgOiB0aGlzLnN0YXJ0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKHNvcnRhYmxlOiBNYXRTb3J0YWJsZSkge1xyXG4gICAgY29uc3QgaSA9IHRoaXMuYWN0aXZlcy5maW5kSW5kZXgoYWN0aXZlSWQgPT4gYWN0aXZlSWQgPT09IHNvcnRhYmxlLmlkKTtcclxuICAgIHJldHVybiBpID4gLTE7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVEaXJlY3Rpb24oc29ydGFibGU6IE1hdFNvcnRhYmxlKTogJ2FzYycgfCAnZGVzYycge1xyXG4gICAgY29uc3QgaSA9IHRoaXMuYWN0aXZlcy5maW5kSW5kZXgoYWN0aXZlSWQgPT4gYWN0aXZlSWQgPT09IHNvcnRhYmxlLmlkKTtcclxuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbnNbaV0gfHwgKHNvcnRhYmxlLnN0YXJ0ID8gc29ydGFibGUuc3RhcnQgOiB0aGlzLnN0YXJ0KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==