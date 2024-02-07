import { Component, ContentChild, Input, ViewChild } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/drag-drop";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/material/chips";
import * as i8 from "@angular/material/tooltip";
const _c0 = ["sortIndicator"];
const _c1 = ["templateRef"];
const _c2 = ["settingsMenu"];
const _c3 = (a0, a1) => ({ direction: a0, columnName: a1 });
function MatMultiSortTableSettingsComponent_mat_chip_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 12);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.sortIndicatorRef)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c3, item_r4.direction, item_r4.name));
} }
function MatMultiSortTableSettingsComponent_mat_chip_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r4.name, ": ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r6.sortToolTip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r4.direction, " ");
} }
function MatMultiSortTableSettingsComponent_mat_chip_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 8);
    i0.ɵɵlistener("removed", function MatMultiSortTableSettingsComponent_mat_chip_3_Template_mat_chip_removed_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r4 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.remove(item_r4.id)); })("click", function MatMultiSortTableSettingsComponent_mat_chip_3_Template_mat_chip_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r4 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.updateDirection(item_r4.id)); });
    i0.ɵɵtemplate(1, MatMultiSortTableSettingsComponent_mat_chip_3_ng_container_1_Template, 1, 5, "ng-container", 9)(2, MatMultiSortTableSettingsComponent_mat_chip_3_div_2_Template, 4, 3, "div", 10);
    i0.ɵɵelementStart(3, "mat-icon", 11);
    i0.ɵɵtext(4, "cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.sortIndicatorRef);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.sortIndicatorRef);
} }
function MatMultiSortTableSettingsComponent_ng_template_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "mat-icon");
    i0.ɵɵtext(2, "drag_indicator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-checkbox", 17);
    i0.ɵɵlistener("ngModelChange", function MatMultiSortTableSettingsComponent_ng_template_8_div_1_Template_mat_checkbox_ngModelChange_3_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r15); const column_r13 = restoredCtx.$implicit; return i0.ɵɵresetView(column_r13.isActive = $event); })("change", function MatMultiSortTableSettingsComponent_ng_template_8_div_1_Template_mat_checkbox_change_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.toggle()); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r13 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", column_r13.isActive);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(column_r13.name);
} }
function MatMultiSortTableSettingsComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("cdkDropListDropped", function MatMultiSortTableSettingsComponent_ng_template_8_Template_div_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.drop($event)); });
    i0.ɵɵtemplate(1, MatMultiSortTableSettingsComponent_ng_template_8_div_1_Template, 5, 2, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2._tableData.columns);
} }
const _c4 = ["*"];
export class MatMultiSortTableSettingsComponent {
    set tableData(tableData) {
        this._tableData = tableData;
    }
    constructor(overlay, viewContainerRef, viewportRuler) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.viewportRuler = viewportRuler;
        this.sort = [];
        this.sortToolTip = '';
        this.closeDialogOnChoice = true;
        this.scrollStrategy = new BlockScrollStrategy(this.viewportRuler, document);
    }
    ngOnInit() {
        this.sort = this.getSort();
        this._tableData.sortObservable.subscribe(() => this.sort = this.getSort());
        this._tableData.onColumnsChange().subscribe(() => this.sort = this.getSort());
    }
    openDialog() {
        const button = this.buttonRef.nativeElement;
        const positionStrategyBuilder = this.overlay.position();
        const positionStrategy = positionStrategyBuilder
            .flexibleConnectedTo(button)
            .withFlexibleDimensions(true)
            .withViewportMargin(10)
            .withGrowAfterOpen(true)
            .withPush(true)
            .withPositions([{
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            }]);
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            panelClass: 'column-overlay',
            positionStrategy,
            scrollStrategy: this.scrollStrategy
        });
        const templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
        this.overlayRef.attach(templatePortal);
        this.overlayRef.backdropClick().subscribe(() => {
            this.overlayRef.dispose();
        });
    }
    drop(event) {
        moveItemInArray(this._tableData.columns, event.previousIndex, event.currentIndex);
        this._tableData.displayedColumns = this._tableData.columns.filter(c => c.isActive).map(c => c.id);
        this._tableData.storeTableSettings();
    }
    toggle() {
        this._tableData.displayedColumns = this._tableData.columns.filter(c => {
            if (!c.isActive) {
                this.sort = this.sort.filter(s => s.id !== c.id);
            }
            return c.isActive;
        }).map(c => c.id);
        this.updateSort();
        if (this.closeDialogOnChoice) {
            this.overlayRef.dispose();
        }
    }
    dropSort(event) {
        moveItemInArray(this.sort, event.previousIndex, event.currentIndex);
        this.updateSort();
    }
    getSort() {
        const sorting = [];
        for (let i = 0; i < this._tableData.sortParams.length; i++) {
            sorting.push({
                id: this._tableData.sortParams[i],
                name: this._tableData.columns.find(c => c.id === this._tableData.sortParams[i]).name,
                direction: this._tableData.sortDirs[i]
            });
        }
        return sorting;
    }
    remove(id) {
        this.sort = this.sort.filter(v => v.id !== id);
        this.updateSort();
    }
    updateDirection(id) {
        const i = this.sort.findIndex(v => v.id === id);
        if (this.sort[i].direction === 'asc') {
            this.sort[i].direction = 'desc';
        }
        else {
            this.sort[i].direction = 'asc';
        }
        this.updateSort();
    }
    updateSort() {
        this._tableData.sortParams = this.sort.map(v => v.id);
        this._tableData.sortDirs = this.sort.map(v => v.direction);
        this._tableData.updateSortHeaders();
    }
    static { this.ɵfac = function MatMultiSortTableSettingsComponent_Factory(t) { return new (t || MatMultiSortTableSettingsComponent)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.ViewportRuler)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatMultiSortTableSettingsComponent, selectors: [["mat-multi-sort-table-settings"]], contentQueries: function MatMultiSortTableSettingsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sortIndicatorRef = _t.first);
        } }, viewQuery: function MatMultiSortTableSettingsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c1, 7);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonRef = _t.first);
        } }, inputs: { sortToolTip: "sortToolTip", closeDialogOnChoice: "closeDialogOnChoice", scrollStrategy: "scrollStrategy", tableData: "tableData" }, ngContentSelectors: _c4, decls: 10, vars: 1, consts: [[1, "table-settings"], [1, "table-settings-sort"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "drag-chip-list", 3, "cdkDropListDropped"], ["class", "drag-chip", "cdkDrag", "", 3, "removed", "click", 4, "ngFor", "ngForOf"], [2, "flex", "1 1 auto"], [1, "table-settings-menu", 3, "click"], ["settingsMenu", ""], ["templateRef", ""], ["cdkDrag", "", 1, "drag-chip", 3, "removed", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], ["matChipRemove", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "sorting", 3, "matTooltip"], ["cdkDropList", "", 1, "column-list", 3, "cdkDropListDropped"], ["class", "column-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "column-item"], [3, "ngModel", "ngModelChange", "change"]], template: function MatMultiSortTableSettingsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "mat-chip-list", 2);
            i0.ɵɵlistener("cdkDropListDropped", function MatMultiSortTableSettingsComponent_Template_mat_chip_list_cdkDropListDropped_2_listener($event) { return ctx.dropSort($event); });
            i0.ɵɵtemplate(3, MatMultiSortTableSettingsComponent_mat_chip_3_Template, 5, 2, "mat-chip", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementStart(5, "div", 5, 6);
            i0.ɵɵlistener("click", function MatMultiSortTableSettingsComponent_Template_div_click_5_listener() { return ctx.openDialog(); });
            i0.ɵɵprojection(7, 0, ["#menuRef", ""]);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(8, MatMultiSortTableSettingsComponent_ng_template_8_Template, 2, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.sort);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.CdkDropList, i3.CdkDrag, i4.MatIcon, i5.MatCheckbox, i6.NgControlStatus, i6.NgModel, i7.MatChip, i7.MatChipRemove, i8.MatTooltip], styles: [".table-settings[_ngcontent-%COMP%]{display:flex}.table-settings[_ngcontent-%COMP%]   .table-settings-menu[_ngcontent-%COMP%]{margin:8px 16px}.table-settings-sort[_ngcontent-%COMP%]{margin:auto 0}.sorting[_ngcontent-%COMP%]{display:inline-block;margin:0 6px;color:#757575}.sorting[_ngcontent-%COMP%]:hover{cursor:pointer}.drag-chip[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12);background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover{cursor:move;background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover:after{opacity:0}.drag-chip[_ngcontent-%COMP%]:focus:after{opacity:0}.drag-chip-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-chip[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list[_ngcontent-%COMP%]{max-height:70vh;overflow:auto;border-radius:4px;padding:1rem;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:#fff;color:#000000de}.column-item[_ngcontent-%COMP%]{height:48px;display:flex;justify-content:flex-start;align-items:center;margin:1px;padding:0 16px 0 8px}.column-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:16px}.column-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{line-height:48px;color:#000000de;font-size:14px;font-weight:400}.column-item[_ngcontent-%COMP%]:hover{cursor:move;border-top:solid 1px rgba(0,0,0,.12);border-bottom:solid 1px rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-item[_ngcontent-%COMP%]:last-child{border:none}.column-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .column-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSortTableSettingsComponent, [{
        type: Component,
        args: [{ selector: 'mat-multi-sort-table-settings', template: "<div class=\"table-settings\">\r\n    <div class=\"table-settings-sort\">\r\n        <mat-chip-list class=\"drag-chip-list\" cdkDropList cdkDropListOrientation='horizontal'\r\n            (cdkDropListDropped)=\"dropSort($event)\">\r\n            <mat-chip class=\"drag-chip\" *ngFor=\"let item of sort\" cdkDrag (removed)=\"remove(item.id)\"\r\n                (click)=\"updateDirection(item.id)\">\r\n                <ng-container *ngIf=\"sortIndicatorRef\"\r\n                              [ngTemplateOutlet]=\"sortIndicatorRef\"\r\n                              [ngTemplateOutletContext]=\"{direction:item.direction, columnName: item.name }\">\r\n                </ng-container>\r\n                <div *ngIf=\"!sortIndicatorRef\">\r\n                    {{item.name}}:\r\n                    <div class=\"sorting\" [matTooltip]=\"sortToolTip\">\r\n                        {{item.direction}}\r\n                    </div>\r\n                </div>\r\n                <mat-icon matChipRemove>cancel</mat-icon>\r\n            </mat-chip>\r\n        </mat-chip-list>\r\n    </div>\r\n    <div style=\"flex: 1 1 auto;\"></div>\r\n    <div #settingsMenu (click)=\"openDialog()\" class=\"table-settings-menu\">\r\n        <ng-content #menuRef></ng-content>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #templateRef>\r\n  <div cdkDropList class=\"column-list\" (cdkDropListDropped)=\"drop($event)\">\r\n    <div class=\"column-item\" *ngFor=\"let column of _tableData.columns\" cdkDrag>\r\n      <mat-icon>drag_indicator</mat-icon>\r\n      <mat-checkbox [(ngModel)]=\"column.isActive\" (change)=\"toggle()\">{{column.name}}</mat-checkbox>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".table-settings{display:flex}.table-settings .table-settings-menu{margin:8px 16px}.table-settings-sort{margin:auto 0}.sorting{display:inline-block;margin:0 6px;color:#757575}.sorting:hover{cursor:pointer}.drag-chip{border:solid 1px rgba(0,0,0,.12);background-color:#fff}.drag-chip:hover{cursor:move;background-color:#fff}.drag-chip:hover:after{opacity:0}.drag-chip:focus:after{opacity:0}.drag-chip-list.cdk-drop-list-dragging .drag-chip:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list{max-height:70vh;overflow:auto;border-radius:4px;padding:1rem;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:#fff;color:#000000de}.column-item{height:48px;display:flex;justify-content:flex-start;align-items:center;margin:1px;padding:0 16px 0 8px}.column-item mat-icon{margin-right:16px}.column-item mat-checkbox{line-height:48px;color:#000000de;font-size:14px;font-weight:400}.column-item:hover{cursor:move;border-top:solid 1px rgba(0,0,0,.12);border-bottom:solid 1px rgba(0,0,0,.12)}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-item:last-child{border:none}.column-list.cdk-drop-list-dragging .column-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
    }], () => [{ type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i1.ViewportRuler }], { templateRef: [{
            type: ViewChild,
            args: ['templateRef', { static: true }]
        }], buttonRef: [{
            type: ViewChild,
            args: ['settingsMenu']
        }], sortIndicatorRef: [{
            type: ContentChild,
            args: ['sortIndicator', { static: false }]
        }], sortToolTip: [{
            type: Input
        }], closeDialogOnChoice: [{
            type: Input
        }], scrollStrategy: [{
            type: Input
        }], tableData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatMultiSortTableSettingsComponent, { className: "MatMultiSortTableSettingsComponent", filePath: "lib\\mat-multi-sort-table-settings\\mat-multi-sort-table-settings.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LW11bHRpLXNvcnQvc3JjL2xpYi9tYXQtbXVsdGktc29ydC10YWJsZS1zZXR0aW5ncy9tYXQtbXVsdGktc29ydC10YWJsZS1zZXR0aW5ncy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXQtbXVsdGktc29ydC9zcmMvbGliL21hdC1tdWx0aS1zb3J0LXRhYmxlLXNldHRpbmdzL21hdC1tdWx0aS1zb3J0LXRhYmxlLXNldHRpbmdzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFjLEtBQUssRUFBdUIsU0FBUyxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEUsT0FBTyxFQUFDLG1CQUFtQixFQUFxRCxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDRW5DLDRCQUdlOzs7O0lBRkQsMERBQXFDLHdGQUFBOzs7SUFHbkQsMkJBQStCO0lBQzNCLFlBQ0E7SUFBQSwrQkFBZ0Q7SUFDNUMsWUFDSjtJQUFBLGlCQUFNLEVBQUE7Ozs7SUFITixlQUNBO0lBREEsOENBQ0E7SUFBcUIsZUFBMEI7SUFBMUIsK0NBQTBCO0lBQzNDLGVBQ0o7SUFESSxrREFDSjs7OztJQVZSLG1DQUN1QztJQUR1QixzUEFBVyxlQUFBLHlCQUFlLENBQUEsSUFBQyxzT0FDNUUsZUFBQSxtQ0FBd0IsQ0FBQSxJQURvRDtJQUVyRixnSEFHZSxrRkFBQTtJQU9mLG9DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVcsRUFBQTs7O0lBVjFCLGVBQXNCO0lB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WUFFZixTQUFTO2tCQUFuQyxTQUFTO21CQUFDLGNBQWM7WUFFeUIsZ0JBQWdCO2tCQUFqRSxZQUFZO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFHaEQsV0FBVztrQkFEVixLQUFLO1lBSU4sbUJBQW1CO2tCQURsQixLQUFLO1lBSU4sY0FBYztrQkFEYixLQUFLO1lBSUYsU0FBUztrQkFEWixLQUFLOztrRkFwQkssa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IFRhYmxlRGF0YSB9IGZyb20gJy4uL3RhYmxlLWRhdGEnO1xyXG5pbXBvcnQge0Jsb2NrU2Nyb2xsU3RyYXRlZ3ksIE92ZXJsYXksIE92ZXJsYXlSZWYsIFNjcm9sbFN0cmF0ZWd5LCBWaWV3cG9ydFJ1bGVyfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtbXVsdGktc29ydC10YWJsZS1zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0TXVsdGlTb3J0VGFibGVTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgX3RhYmxlRGF0YSE6IFRhYmxlRGF0YTxhbnk+O1xyXG4gIHNvcnQ6IHsgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyB9W10gPSBbXTtcclxuICBvdmVybGF5UmVmITogT3ZlcmxheVJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICBAVmlld0NoaWxkKCdzZXR0aW5nc01lbnUnKSBidXR0b25SZWYhOiBFbGVtZW50UmVmO1xyXG5cclxuICBAQ29udGVudENoaWxkKCdzb3J0SW5kaWNhdG9yJywgeyBzdGF0aWM6IGZhbHNlIH0pIHNvcnRJbmRpY2F0b3JSZWYhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNvcnRUb29sVGlwOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBjbG9zZURpYWxvZ09uQ2hvaWNlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzY3JvbGxTdHJhdGVneTogU2Nyb2xsU3RyYXRlZ3kgPSBuZXcgQmxvY2tTY3JvbGxTdHJhdGVneSh0aGlzLnZpZXdwb3J0UnVsZXIsIGRvY3VtZW50KTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdGFibGVEYXRhKHRhYmxlRGF0YTogVGFibGVEYXRhPGFueT4pIHtcclxuICAgIHRoaXMuX3RhYmxlRGF0YSA9IHRhYmxlRGF0YTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNvcnQgPSB0aGlzLmdldFNvcnQoKTtcclxuICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0T2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zb3J0ID0gdGhpcy5nZXRTb3J0KCkpO1xyXG4gICAgdGhpcy5fdGFibGVEYXRhLm9uQ29sdW1uc0NoYW5nZSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNvcnQgPSB0aGlzLmdldFNvcnQoKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25SZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3lCdWlsZGVyID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCk7XHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gcG9zaXRpb25TdHJhdGVneUJ1aWxkZXJcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oYnV0dG9uKVxyXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyh0cnVlKVxyXG4gICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDEwKVxyXG4gICAgICAud2l0aEdyb3dBZnRlck9wZW4odHJ1ZSlcclxuICAgICAgLndpdGhQdXNoKHRydWUpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKFt7XHJcbiAgICAgICAgb3JpZ2luWDogJ2VuZCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgb3ZlcmxheVg6ICdlbmQnLFxyXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgICB9XSk7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcclxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXHJcbiAgICAgIHBhbmVsQ2xhc3M6ICdjb2x1bW4tb3ZlcmxheScsXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLnNjcm9sbFN0cmF0ZWd5XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRlbXBsYXRlUG9ydGFsKTtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLl90YWJsZURhdGEuY29sdW1ucywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuX3RhYmxlRGF0YS5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5fdGFibGVEYXRhLmNvbHVtbnMuZmlsdGVyKGMgPT4gYy5pc0FjdGl2ZSkubWFwKGMgPT4gYy5pZCk7XHJcbiAgICB0aGlzLl90YWJsZURhdGEuc3RvcmVUYWJsZVNldHRpbmdzKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLl90YWJsZURhdGEuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuX3RhYmxlRGF0YS5jb2x1bW5zLmZpbHRlcihjID0+IHtcclxuICAgICAgaWYgKCFjLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0ID0gdGhpcy5zb3J0LmZpbHRlcihzID0+IHMuaWQgIT09IGMuaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYy5pc0FjdGl2ZTtcclxuICAgIH0pLm1hcChjID0+IGMuaWQpO1xyXG4gICAgdGhpcy51cGRhdGVTb3J0KCk7XHJcbiAgICBpZiAodGhpcy5jbG9zZURpYWxvZ09uQ2hvaWNlKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcm9wU29ydChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5zb3J0LCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy51cGRhdGVTb3J0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRTb3J0KCk6IHsgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyB9W10ge1xyXG4gICAgY29uc3Qgc29ydGluZzogeyBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nIH1bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJsZURhdGEuc29ydFBhcmFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzb3J0aW5nLnB1c2goe1xyXG4gICAgICAgIGlkOiB0aGlzLl90YWJsZURhdGEuc29ydFBhcmFtc1tpXSxcclxuICAgICAgICBuYW1lOiB0aGlzLl90YWJsZURhdGEuY29sdW1ucy5maW5kKGMgPT4gYy5pZCA9PT0gdGhpcy5fdGFibGVEYXRhLnNvcnRQYXJhbXNbaV0pIS5uYW1lLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5fdGFibGVEYXRhLnNvcnREaXJzW2ldXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvcnRpbmc7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb3J0ID0gdGhpcy5zb3J0LmZpbHRlcih2ID0+IHYuaWQgIT09IGlkKTtcclxuICAgIHRoaXMudXBkYXRlU29ydCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlyZWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGkgPSB0aGlzLnNvcnQuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHRoaXMuc29ydFtpXS5kaXJlY3Rpb24gPT09ICdhc2MnKSB7XHJcbiAgICAgIHRoaXMuc29ydFtpXS5kaXJlY3Rpb24gPSAnZGVzYyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRbaV0uZGlyZWN0aW9uID0gJ2FzYyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVNvcnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU29ydCgpIHtcclxuICAgIHRoaXMuX3RhYmxlRGF0YS5zb3J0UGFyYW1zID0gdGhpcy5zb3J0Lm1hcCh2ID0+IHYuaWQpO1xyXG4gICAgdGhpcy5fdGFibGVEYXRhLnNvcnREaXJzID0gdGhpcy5zb3J0Lm1hcCh2ID0+IHYuZGlyZWN0aW9uKTtcclxuICAgIHRoaXMuX3RhYmxlRGF0YS51cGRhdGVTb3J0SGVhZGVycygpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIjxkaXYgY2xhc3M9XCJ0YWJsZS1zZXR0aW5nc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXNldHRpbmdzLXNvcnRcIj5cclxuICAgICAgICA8bWF0LWNoaXAtbGlzdCBjbGFzcz1cImRyYWctY2hpcC1saXN0XCIgY2RrRHJvcExpc3QgY2RrRHJvcExpc3RPcmllbnRhdGlvbj0naG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wU29ydCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2hpcCBjbGFzcz1cImRyYWctY2hpcFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvcnRcIiBjZGtEcmFnIChyZW1vdmVkKT1cInJlbW92ZShpdGVtLmlkKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlRGlyZWN0aW9uKGl0ZW0uaWQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic29ydEluZGljYXRvclJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNvcnRJbmRpY2F0b3JSZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2RpcmVjdGlvbjppdGVtLmRpcmVjdGlvbiwgY29sdW1uTmFtZTogaXRlbS5uYW1lIH1cIj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFzb3J0SW5kaWNhdG9yUmVmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtLm5hbWV9fTpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29ydGluZ1wiIFttYXRUb29sdGlwXT1cInNvcnRUb29sVGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5kaXJlY3Rpb259fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZT5jYW5jZWw8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8L21hdC1jaGlwPlxyXG4gICAgICAgIDwvbWF0LWNoaXAtbGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImZsZXg6IDEgMSBhdXRvO1wiPjwvZGl2PlxyXG4gICAgPGRpdiAjc2V0dGluZ3NNZW51IChjbGljayk9XCJvcGVuRGlhbG9nKClcIiBjbGFzcz1cInRhYmxlLXNldHRpbmdzLW1lbnVcIj5cclxuICAgICAgICA8bmctY29udGVudCAjbWVudVJlZj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlUmVmPlxyXG4gIDxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJjb2x1bW4tbGlzdFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWl0ZW1cIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIF90YWJsZURhdGEuY29sdW1uc1wiIGNka0RyYWc+XHJcbiAgICAgIDxtYXQtaWNvbj5kcmFnX2luZGljYXRvcjwvbWF0LWljb24+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjb2x1bW4uaXNBY3RpdmVcIiAoY2hhbmdlKT1cInRvZ2dsZSgpXCI+e3tjb2x1bW4ubmFtZX19PC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19