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
    i0.ɵɵelementStart(0, "div", 16)(1, "mat-icon", 17);
    i0.ɵɵtext(2, "drag_indicator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-checkbox", 18);
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
        } }, inputs: { sortToolTip: "sortToolTip", closeDialogOnChoice: "closeDialogOnChoice", scrollStrategy: "scrollStrategy", tableData: "tableData" }, ngContentSelectors: _c4, decls: 10, vars: 1, consts: [[1, "table-settings"], [1, "table-settings-sort"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "drag-chip-list", 3, "cdkDropListDropped"], ["class", "drag-chip", "cdkDrag", "", 3, "removed", "click", 4, "ngFor", "ngForOf"], [2, "flex", "1 1 auto"], [1, "table-settings-menu", 3, "click"], ["settingsMenu", ""], ["templateRef", ""], ["cdkDrag", "", 1, "drag-chip", 3, "removed", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], ["matChipRemove", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "sorting", 3, "matTooltip"], ["cdkDropList", "", 1, "column-list", 3, "cdkDropListDropped"], ["class", "column-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "column-item"], ["cdkDragHandle", ""], [3, "ngModel", "ngModelChange", "change"]], template: function MatMultiSortTableSettingsComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.CdkDropList, i3.CdkDrag, i3.CdkDragHandle, i4.MatIcon, i5.MatCheckbox, i6.NgControlStatus, i6.NgModel, i7.MatChip, i7.MatChipRemove, i8.MatTooltip], styles: [".table-settings[_ngcontent-%COMP%]{display:flex}.table-settings[_ngcontent-%COMP%]   .table-settings-menu[_ngcontent-%COMP%]{margin:8px 16px}.table-settings-sort[_ngcontent-%COMP%]{margin:auto 0}.sorting[_ngcontent-%COMP%]{display:inline-block;margin:0 6px;color:#757575}.sorting[_ngcontent-%COMP%]:hover{cursor:pointer}.drag-chip[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12);background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover{cursor:move;background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover:after{opacity:0}.drag-chip[_ngcontent-%COMP%]:focus:after{opacity:0}.drag-chip-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-chip[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list[_ngcontent-%COMP%]{max-height:70vh;overflow:auto;border-radius:4px;padding:1rem;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:#fff;color:#000000de}.column-item[_ngcontent-%COMP%]{height:48px;display:flex;justify-content:flex-start;align-items:center;margin:1px;padding:0 16px 0 8px}.column-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:16px}.column-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{line-height:48px;color:#000000de;font-size:14px;font-weight:400}.column-item[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]:hover{cursor:grab;border-top:solid 1px rgba(0,0,0,.12);border-bottom:solid 1px rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-item[_ngcontent-%COMP%]:last-child{border:none}.column-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .column-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSortTableSettingsComponent, [{
        type: Component,
        args: [{ selector: 'mat-multi-sort-table-settings', template: "<div class=\"table-settings\">\n    <div class=\"table-settings-sort\">\n        <mat-chip-list class=\"drag-chip-list\" cdkDropList cdkDropListOrientation='horizontal'\n            (cdkDropListDropped)=\"dropSort($event)\">\n            <mat-chip class=\"drag-chip\" *ngFor=\"let item of sort\" cdkDrag (removed)=\"remove(item.id)\"\n                (click)=\"updateDirection(item.id)\">\n                <ng-container *ngIf=\"sortIndicatorRef\"\n                              [ngTemplateOutlet]=\"sortIndicatorRef\"\n                              [ngTemplateOutletContext]=\"{direction:item.direction, columnName: item.name }\">\n                </ng-container>\n                <div *ngIf=\"!sortIndicatorRef\">\n                    {{item.name}}:\n                    <div class=\"sorting\" [matTooltip]=\"sortToolTip\">\n                        {{item.direction}}\n                    </div>\n                </div>\n                <mat-icon matChipRemove>cancel</mat-icon>\n            </mat-chip>\n        </mat-chip-list>\n    </div>\n    <div style=\"flex: 1 1 auto;\"></div>\n    <div #settingsMenu (click)=\"openDialog()\" class=\"table-settings-menu\">\n        <ng-content #menuRef></ng-content>\n    </div>\n</div>\n\n<ng-template #templateRef>\n  <div cdkDropList class=\"column-list\" (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"column-item\" *ngFor=\"let column of _tableData.columns\" cdkDrag>\n      <mat-icon cdkDragHandle>drag_indicator</mat-icon>\n      <mat-checkbox [(ngModel)]=\"column.isActive\" (change)=\"toggle()\">{{column.name}}</mat-checkbox>\n    </div>\n  </div>\n</ng-template>\n", styles: [".table-settings{display:flex}.table-settings .table-settings-menu{margin:8px 16px}.table-settings-sort{margin:auto 0}.sorting{display:inline-block;margin:0 6px;color:#757575}.sorting:hover{cursor:pointer}.drag-chip{border:solid 1px rgba(0,0,0,.12);background-color:#fff}.drag-chip:hover{cursor:move;background-color:#fff}.drag-chip:hover:after{opacity:0}.drag-chip:focus:after{opacity:0}.drag-chip-list.cdk-drop-list-dragging .drag-chip:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list{max-height:70vh;overflow:auto;border-radius:4px;padding:1rem;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:#fff;color:#000000de}.column-item{height:48px;display:flex;justify-content:flex-start;align-items:center;margin:1px;padding:0 16px 0 8px}.column-item mat-icon{margin-right:16px}.column-item mat-checkbox{line-height:48px;color:#000000de;font-size:14px;font-weight:400}.column-item>mat-icon:hover{cursor:grab;border-top:solid 1px rgba(0,0,0,.12);border-bottom:solid 1px rgba(0,0,0,.12)}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-item:last-child{border:none}.column-list.cdk-drop-list-dragging .column-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatMultiSortTableSettingsComponent, { className: "MatMultiSortTableSettingsComponent", filePath: "lib/mat-multi-sort-table-settings/mat-multi-sort-table-settings.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LW11bHRpLXNvcnQvc3JjL2xpYi9tYXQtbXVsdGktc29ydC10YWJsZS1zZXR0aW5ncy9tYXQtbXVsdGktc29ydC10YWJsZS1zZXR0aW5ncy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXQtbXVsdGktc29ydC9zcmMvbGliL21hdC1tdWx0aS1zb3J0LXRhYmxlLXNldHRpbmdzL21hdC1tdWx0aS1zb3J0LXRhYmxlLXNldHRpbmdzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFjLEtBQUssRUFBdUIsU0FBUyxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEUsT0FBTyxFQUFDLG1CQUFtQixFQUFxRCxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDRW5DLDRCQUdlOzs7O0lBRkQsMERBQXFDLHdGQUFBOzs7SUFHbkQsMkJBQStCO0lBQzNCLFlBQ0E7SUFBQSwrQkFBZ0Q7SUFDNUMsWUFDSjtJQUFBLGlCQUFNLEVBQUE7Ozs7SUFITixlQUNBO0lBREEsOENBQ0E7SUFBcUIsZUFBMEI7SUFBMUIsK0NBQTBCO0lBQzNDLGVBQ0o7SUFESSxrREFDSjs7OztJQVZSLG1DQUN1QztJQUR1QixzUEFBVyxlQUFBLHlCQUFlLENBQUEsSUFBQyxzT0FDNUUsZUFBQSxtQ0FBd0IsQ0FBQSxJQURvRDtJQUVyRixnSEFHZSxrRkFBQTtJQU9mLG9DQUF3QjtJQUFBLHNCQUFNO0lBQUEsaUJBQVcsRUFBQTs7O0lBVjFCLGVBQXNCO0lB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O1lBRWYsU0FBUztrQkFBbkMsU0FBUzttQkFBQyxjQUFjO1lBRXlCLGdCQUFnQjtrQkFBakUsWUFBWTttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBR2hELFdBQVc7a0JBRFYsS0FBSztZQUlOLG1CQUFtQjtrQkFEbEIsS0FBSztZQUlOLGNBQWM7a0JBRGIsS0FBSztZQUlGLFNBQVM7a0JBRFosS0FBSzs7a0ZBcEJLLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IFRhYmxlRGF0YSB9IGZyb20gJy4uL3RhYmxlLWRhdGEnO1xuaW1wb3J0IHtCbG9ja1Njcm9sbFN0cmF0ZWd5LCBPdmVybGF5LCBPdmVybGF5UmVmLCBTY3JvbGxTdHJhdGVneSwgVmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtbXVsdGktc29ydC10YWJsZS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1hdE11bHRpU29ydFRhYmxlU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfdGFibGVEYXRhITogVGFibGVEYXRhPGFueT47XG4gIHNvcnQ6IHsgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyB9W10gPSBbXTtcbiAgb3ZlcmxheVJlZiE6IE92ZXJsYXlSZWY7XG5cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ3NldHRpbmdzTWVudScpIGJ1dHRvblJlZiE6IEVsZW1lbnRSZWY7XG5cbiAgQENvbnRlbnRDaGlsZCgnc29ydEluZGljYXRvcicsIHsgc3RhdGljOiBmYWxzZSB9KSBzb3J0SW5kaWNhdG9yUmVmITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzb3J0VG9vbFRpcDogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KClcbiAgY2xvc2VEaWFsb2dPbkNob2ljZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2Nyb2xsU3RyYXRlZ3k6IFNjcm9sbFN0cmF0ZWd5ID0gbmV3IEJsb2NrU2Nyb2xsU3RyYXRlZ3kodGhpcy52aWV3cG9ydFJ1bGVyLCBkb2N1bWVudCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHRhYmxlRGF0YSh0YWJsZURhdGE6IFRhYmxlRGF0YTxhbnk+KSB7XG4gICAgdGhpcy5fdGFibGVEYXRhID0gdGFibGVEYXRhO1xuICB9XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvcnQgPSB0aGlzLmdldFNvcnQoKTtcbiAgICB0aGlzLl90YWJsZURhdGEuc29ydE9ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc29ydCA9IHRoaXMuZ2V0U29ydCgpKTtcbiAgICB0aGlzLl90YWJsZURhdGEub25Db2x1bW5zQ2hhbmdlKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc29ydCA9IHRoaXMuZ2V0U29ydCgpKTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25SZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5QnVpbGRlciA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSBwb3NpdGlvblN0cmF0ZWd5QnVpbGRlclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oYnV0dG9uKVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnModHJ1ZSlcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oMTApXG4gICAgICAud2l0aEdyb3dBZnRlck9wZW4odHJ1ZSlcbiAgICAgIC53aXRoUHVzaCh0cnVlKVxuICAgICAgLndpdGhQb3NpdGlvbnMoW3tcbiAgICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgICAgfV0pO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxuICAgICAgcGFuZWxDbGFzczogJ2NvbHVtbi1vdmVybGF5JyxcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5zY3JvbGxTdHJhdGVneVxuICAgIH0pO1xuICAgIGNvbnN0IHRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0ZW1wbGF0ZVBvcnRhbCk7XG5cbiAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5fdGFibGVEYXRhLmNvbHVtbnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgdGhpcy5fdGFibGVEYXRhLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLl90YWJsZURhdGEuY29sdW1ucy5maWx0ZXIoYyA9PiBjLmlzQWN0aXZlKS5tYXAoYyA9PiBjLmlkKTtcbiAgICB0aGlzLl90YWJsZURhdGEuc3RvcmVUYWJsZVNldHRpbmdzKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5fdGFibGVEYXRhLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLl90YWJsZURhdGEuY29sdW1ucy5maWx0ZXIoYyA9PiB7XG4gICAgICBpZiAoIWMuaXNBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zb3J0ID0gdGhpcy5zb3J0LmZpbHRlcihzID0+IHMuaWQgIT09IGMuaWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYy5pc0FjdGl2ZTtcbiAgICB9KS5tYXAoYyA9PiBjLmlkKTtcbiAgICB0aGlzLnVwZGF0ZVNvcnQoKTtcbiAgICBpZiAodGhpcy5jbG9zZURpYWxvZ09uQ2hvaWNlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRyb3BTb3J0KGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5zb3J0LCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIHRoaXMudXBkYXRlU29ydCgpO1xuICB9XG5cbiAgZ2V0U29ydCgpOiB7IGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcgfVtdIHtcbiAgICBjb25zdCBzb3J0aW5nOiB7IGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcgfVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJsZURhdGEuc29ydFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgc29ydGluZy5wdXNoKHtcbiAgICAgICAgaWQ6IHRoaXMuX3RhYmxlRGF0YS5zb3J0UGFyYW1zW2ldLFxuICAgICAgICBuYW1lOiB0aGlzLl90YWJsZURhdGEuY29sdW1ucy5maW5kKGMgPT4gYy5pZCA9PT0gdGhpcy5fdGFibGVEYXRhLnNvcnRQYXJhbXNbaV0pIS5uYW1lLFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX3RhYmxlRGF0YS5zb3J0RGlyc1tpXVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzb3J0aW5nO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvcnQgPSB0aGlzLnNvcnQuZmlsdGVyKHYgPT4gdi5pZCAhPT0gaWQpO1xuICAgIHRoaXMudXBkYXRlU29ydCgpO1xuICB9XG5cbiAgdXBkYXRlRGlyZWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpID0gdGhpcy5zb3J0LmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGlkKTtcbiAgICBpZiAodGhpcy5zb3J0W2ldLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHRoaXMuc29ydFtpXS5kaXJlY3Rpb24gPSAnZGVzYyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydFtpXS5kaXJlY3Rpb24gPSAnYXNjJztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTb3J0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNvcnQoKSB7XG4gICAgdGhpcy5fdGFibGVEYXRhLnNvcnRQYXJhbXMgPSB0aGlzLnNvcnQubWFwKHYgPT4gdi5pZCk7XG4gICAgdGhpcy5fdGFibGVEYXRhLnNvcnREaXJzID0gdGhpcy5zb3J0Lm1hcCh2ID0+IHYuZGlyZWN0aW9uKTtcbiAgICB0aGlzLl90YWJsZURhdGEudXBkYXRlU29ydEhlYWRlcnMoKTtcbiAgfVxufVxuXG5cbiIsIjxkaXYgY2xhc3M9XCJ0YWJsZS1zZXR0aW5nc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1zZXR0aW5ncy1zb3J0XCI+XG4gICAgICAgIDxtYXQtY2hpcC1saXN0IGNsYXNzPVwiZHJhZy1jaGlwLWxpc3RcIiBjZGtEcm9wTGlzdCBjZGtEcm9wTGlzdE9yaWVudGF0aW9uPSdob3Jpem9udGFsJ1xuICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wU29ydCgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8bWF0LWNoaXAgY2xhc3M9XCJkcmFnLWNoaXBcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzb3J0XCIgY2RrRHJhZyAocmVtb3ZlZCk9XCJyZW1vdmUoaXRlbS5pZClcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ1cGRhdGVEaXJlY3Rpb24oaXRlbS5pZClcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic29ydEluZGljYXRvclJlZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJzb3J0SW5kaWNhdG9yUmVmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGlyZWN0aW9uOml0ZW0uZGlyZWN0aW9uLCBjb2x1bW5OYW1lOiBpdGVtLm5hbWUgfVwiPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhc29ydEluZGljYXRvclJlZlwiPlxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ubmFtZX19OlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29ydGluZ1wiIFttYXRUb29sdGlwXT1cInNvcnRUb29sVGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0uZGlyZWN0aW9ufX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdENoaXBSZW1vdmU+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvbWF0LWNoaXA+XG4gICAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHN0eWxlPVwiZmxleDogMSAxIGF1dG87XCI+PC9kaXY+XG4gICAgPGRpdiAjc2V0dGluZ3NNZW51IChjbGljayk9XCJvcGVuRGlhbG9nKClcIiBjbGFzcz1cInRhYmxlLXNldHRpbmdzLW1lbnVcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgI21lbnVSZWY+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVSZWY+XG4gIDxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJjb2x1bW4tbGlzdFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbi1pdGVtXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBfdGFibGVEYXRhLmNvbHVtbnNcIiBjZGtEcmFnPlxuICAgICAgPG1hdC1pY29uIGNka0RyYWdIYW5kbGU+ZHJhZ19pbmRpY2F0b3I8L21hdC1pY29uPlxuICAgICAgPG1hdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNvbHVtbi5pc0FjdGl2ZVwiIChjaGFuZ2UpPVwidG9nZ2xlKClcIj57e2NvbHVtbi5uYW1lfX08L21hdC1jaGVja2JveD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19