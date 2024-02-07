import { Component, Input, Optional, Inject, HostListener, HostBinding, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { matSortAnimations, MatSortHeader } from '@angular/material/sort';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "../mat-multi-sort.directive.mjs";
import * as i3 from "@angular/cdk/a11y";
import * as i4 from "@angular/common";
const _c0 = ["mat-multi-sort-header", ""];
function MatMultiSortHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("@arrowPosition.start", function MatMultiSortHeaderComponent_div_3_Template_div_animation_arrowPosition_start_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2._disableViewStateAnimation = true); })("@arrowPosition.done", function MatMultiSortHeaderComponent_div_3_Template_div_animation_arrowPosition_done_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4._disableViewStateAnimation = false); });
    i0.ɵɵelement(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵelement(3, "div", 7)(4, "div", 8)(5, "div", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@indicator", ctx_r0._getArrowDirectionState());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@leftPointer", ctx_r0._getArrowDirectionState());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@rightPointer", ctx_r0._getArrowDirectionState());
} }
function MatMultiSortHeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1._sortId());
} }
const _c1 = ["*"];
export class MatMultiSortHeaderComponent extends MatSortHeader {
    constructor(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef) {
        super(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef);
        this._intl = _intl;
        this._sort = _sort;
        this._columnDef = _columnDef;
        this.start = 'asc';
    }
    __setIndicatorHintVisible(visible) {
        super._setIndicatorHintVisible(visible);
    }
    _handleClick() {
        this._sort.direction = this.getSortDirection();
        super._handleClick();
    }
    _isSorted() {
        return this._sort.actives.findIndex(activeId => activeId === this.id) > -1;
    }
    _sortId() {
        return this._sort.actives.findIndex(activeId => activeId === this.id) + 1;
    }
    _updateArrowDirection() {
        this._arrowDirection = this.getSortDirection();
    }
    _getAriaSortAttribute() {
        if (!this._isSorted()) {
            return 'none';
        }
        return this.getSortDirection() === 'asc' ? 'ascending' : 'descending';
    }
    _renderArrow() {
        return !this._isDisabled() || this._isSorted();
    }
    getSortDirection() {
        const i = this._sort.actives.findIndex(activeIds => activeIds === this.id);
        const direction = this._sort.directions[i];
        return this._isSorted() ? direction : (this.start || this._sort.start);
    }
    static { this.ɵfac = function MatMultiSortHeaderComponent_Factory(t) { return new (t || MatMultiSortHeaderComponent)(i0.ɵɵdirectiveInject(i1.MatSortHeaderIntl), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.MatMultiSort, 8), i0.ɵɵdirectiveInject('C2_SORT_HEADER_COLUMN_DEF', 8), i0.ɵɵdirectiveInject(i3.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatMultiSortHeaderComponent, selectors: [["", "mat-multi-sort-header", ""]], hostVars: 1, hostBindings: function MatMultiSortHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function MatMultiSortHeaderComponent_mouseenter_HostBindingHandler() { return ctx.__setIndicatorHintVisible(true); })("longpress", function MatMultiSortHeaderComponent_longpress_HostBindingHandler() { return ctx.__setIndicatorHintVisible(true); })("mouseleave", function MatMultiSortHeaderComponent_mouseleave_HostBindingHandler() { return ctx.__setIndicatorHintVisible(false); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-sort", ctx._getAriaSortAttribute);
        } }, inputs: { id: ["mat-multi-sort-header", "id"] }, exportAs: ["matMultiSortHeader"], features: [i0.ɵɵInheritDefinitionFeature], attrs: _c0, ngContentSelectors: _c1, decls: 5, vars: 6, consts: [[1, "mat-sort-header-container"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]], template: function MatMultiSortHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MatMultiSortHeaderComponent_div_3_Template, 6, 6, "div", 2)(4, MatMultiSortHeaderComponent_div_4_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx._renderArrow());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._isSorted());
        } }, dependencies: [i4.NgIf], styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"], encapsulation: 2, data: { animation: [
                matSortAnimations.indicator,
                matSortAnimations.leftPointer,
                matSortAnimations.rightPointer,
                matSortAnimations.arrowOpacity,
                matSortAnimations.arrowPosition,
                matSortAnimations.allowChildren
            ] }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSortHeaderComponent, [{
        type: Component,
        args: [{ selector: '[mat-multi-sort-header]', exportAs: 'matMultiSortHeader', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                    matSortAnimations.indicator,
                    matSortAnimations.leftPointer,
                    matSortAnimations.rightPointer,
                    matSortAnimations.arrowOpacity,
                    matSortAnimations.arrowPosition,
                    matSortAnimations.allowChildren
                ], template: "<div class=\"mat-sort-header-container\"\r\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\r\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\">\r\n\r\n  <div class=\"mat-sort-header-content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <!-- Disable animations while a current animation is running -->\r\n  <div class=\"mat-sort-header-arrow\"\r\n       *ngIf=\"_renderArrow()\"\r\n       [@arrowOpacity]=\"_getArrowViewState()\"\r\n       [@arrowPosition]=\"_getArrowViewState()\"\r\n       [@allowChildren]=\"_getArrowDirectionState()\"\r\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\r\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\r\n    <div class=\"mat-sort-header-stem\"></div>\r\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\r\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\r\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\r\n      <div class=\"mat-sort-header-pointer-middle\"></div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"_isSorted()\">{{_sortId()}}</div>\r\n</div>\r\n", styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"] }]
    }], () => [{ type: i1.MatSortHeaderIntl }, { type: i0.ChangeDetectorRef }, { type: i2.MatMultiSort, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: ['C2_SORT_HEADER_COLUMN_DEF']
            }, {
                type: Optional
            }] }, { type: i3.FocusMonitor }, { type: i0.ElementRef }], { id: [{
            type: Input,
            args: ['mat-multi-sort-header']
        }], __setIndicatorHintVisible: [{
            type: HostListener,
            args: ['mouseenter', ['true']]
        }, {
            type: HostListener,
            args: ['longpress', ['true']]
        }, {
            type: HostListener,
            args: ['mouseleave', ['false']]
        }], _getAriaSortAttribute: [{
            type: HostBinding,
            args: ['attr.aria-sort']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatMultiSortHeaderComponent, { className: "MatMultiSortHeaderComponent", filePath: "lib\\mat-multi-sort-header\\mat-multi-sort-header.component.ts", lineNumber: 38 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LW11bHRpLXNvcnQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hdC1tdWx0aS1zb3J0L3NyYy9saWIvbWF0LW11bHRpLXNvcnQtaGVhZGVyL21hdC1tdWx0aS1zb3J0LWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYXQtbXVsdGktc29ydC9zcmMvbGliL21hdC1tdWx0aS1zb3J0LWhlYWRlci9tYXQtbXVsdGktc29ydC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixFQUNqQix1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBcUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7O0lDSDNGLDhCQU1nRTtJQUQzRCwrUEFBcUQsSUFBSSxLQUFDLGdQQUNOLEtBQUssS0FEQztJQUU3RCx5QkFBd0M7SUFDeEMsOEJBQWdGO0lBQzlFLHlCQUEyRixhQUFBLGFBQUE7SUFHN0YsaUJBQU0sRUFBQTs7O0lBVkgsMkRBQXNDLCtDQUFBLG9EQUFBO0lBTUYsZUFBd0M7SUFBeEMsNkRBQXdDO0lBQ25DLGVBQTBDO0lBQTFDLCtEQUEwQztJQUN6QyxlQUEyQztJQUEzQyxnRUFBMkM7OztJQUkxRiwyQkFBeUI7SUFBQSxZQUFhO0lBQUEsaUJBQU07OztJQUFuQixlQUFhO0lBQWIsc0NBQWE7OztBRGN4QyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsYUFBYTtJQUk1RCxZQUFtQixLQUF3QixFQUN6QyxpQkFBb0MsRUFDakIsS0FBbUIsRUFDa0IsVUFBb0MsRUFDNUYsYUFBMkIsRUFDM0IsV0FBb0M7UUFDcEMsS0FBSyxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQU45RCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUV0QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ2tCLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBTjlGLFVBQUssR0FBRyxLQUF1QixDQUFDO0lBVWhDLENBQUM7SUFLRCx5QkFBeUIsQ0FBQyxPQUF5QjtRQUNqRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsT0FBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0MsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUdELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDeEUsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDOzRGQXREVSwyQkFBMkIseUpBTzVCLDJCQUEyQjtvRUFQMUIsMkJBQTJCO3NIQUEzQiw4QkFBMEIsSUFBSSxDQUFDLCtGQUEvQiw4QkFBMEIsSUFBSSxDQUFDLGlHQUEvQiw4QkFBMEIsS0FBSyxDQUFDOzs7OztZQ3JDN0MsOEJBRXlFLGFBQUE7WUFHckUsa0JBQXlCO1lBQzNCLGlCQUFNO1lBR04sNEVBYU0sK0RBQUE7WUFFUixpQkFBTTs7WUF2QkQseURBQTRDLGtFQUFBO1lBU3pDLGVBQW9CO1lBQXBCLHlDQUFvQjtZQWFwQixlQUFpQjtZQUFqQixzQ0FBaUI7c3ZDREtYO2dCQUNWLGlCQUFpQixDQUFDLFNBQVM7Z0JBQzNCLGlCQUFpQixDQUFDLFdBQVc7Z0JBQzdCLGlCQUFpQixDQUFDLFlBQVk7Z0JBQzlCLGlCQUFpQixDQUFDLFlBQVk7Z0JBQzlCLGlCQUFpQixDQUFDLGFBQWE7Z0JBQy9CLGlCQUFpQixDQUFDLGFBQWE7YUFDaEM7O2lGQUVVLDJCQUEyQjtjQWhCdkMsU0FBUzsyQkFDRSx5QkFBeUIsWUFDekIsb0JBQW9CLGlCQUdmLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkM7b0JBQ1YsaUJBQWlCLENBQUMsU0FBUztvQkFDM0IsaUJBQWlCLENBQUMsV0FBVztvQkFDN0IsaUJBQWlCLENBQUMsWUFBWTtvQkFDOUIsaUJBQWlCLENBQUMsWUFBWTtvQkFDOUIsaUJBQWlCLENBQUMsYUFBYTtvQkFDL0IsaUJBQWlCLENBQUMsYUFBYTtpQkFDaEM7O3NCQVFFLFFBQVE7O3NCQUNSLE1BQU07dUJBQUMsMkJBQTJCOztzQkFBRyxRQUFRO3lFQUxoQixFQUFFO2tCQUFqQyxLQUFLO21CQUFDLHVCQUF1QjtZQWM5Qix5QkFBeUI7a0JBSHhCLFlBQVk7bUJBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDOztrQkFDbkMsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7O2tCQUNsQyxZQUFZO21CQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztZQXVCckMscUJBQXFCO2tCQURwQixXQUFXO21CQUFDLGdCQUFnQjs7a0ZBckNsQiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBPcHRpb25hbCxcclxuICBJbmplY3QsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWF0U29ydEFuaW1hdGlvbnMsIE1hdFNvcnRIZWFkZXIsIE1hdFNvcnRIZWFkZXJJbnRsIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7IE1hdE11bHRpU29ydCB9IGZyb20gJy4uL21hdC1tdWx0aS1zb3J0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuXHJcbi8qKiBDb2x1bW4gZGVmaW5pdGlvbiBhc3NvY2lhdGVkIHdpdGggYSBgTWF0U29ydEhlYWRlcmAuICovXHJcbmludGVyZmFjZSBDMk1hdFNvcnRIZWFkZXJDb2x1bW5EZWYge1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbbWF0LW11bHRpLXNvcnQtaGVhZGVyXScsXHJcbiAgZXhwb3J0QXM6ICdtYXRNdWx0aVNvcnRIZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtbXVsdGktc29ydC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1tdWx0aS1zb3J0LWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgbWF0U29ydEFuaW1hdGlvbnMuaW5kaWNhdG9yLFxyXG4gICAgbWF0U29ydEFuaW1hdGlvbnMubGVmdFBvaW50ZXIsXHJcbiAgICBtYXRTb3J0QW5pbWF0aW9ucy5yaWdodFBvaW50ZXIsXHJcbiAgICBtYXRTb3J0QW5pbWF0aW9ucy5hcnJvd09wYWNpdHksXHJcbiAgICBtYXRTb3J0QW5pbWF0aW9ucy5hcnJvd1Bvc2l0aW9uLFxyXG4gICAgbWF0U29ydEFuaW1hdGlvbnMuYWxsb3dDaGlsZHJlblxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE11bHRpU29ydEhlYWRlckNvbXBvbmVudCBleHRlbmRzIE1hdFNvcnRIZWFkZXIge1xyXG4gIHN0YXJ0ID0gJ2FzYycgYXMgJ2FzYycgfCAnZGVzYyc7XHJcbiAgQElucHV0KCdtYXQtbXVsdGktc29ydC1oZWFkZXInKSBpZCE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9pbnRsOiBNYXRTb3J0SGVhZGVySW50bCxcclxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfc29ydDogTWF0TXVsdGlTb3J0LFxyXG4gICAgQEluamVjdCgnQzJfU09SVF9IRUFERVJfQ09MVU1OX0RFRicpIEBPcHRpb25hbCgpIHB1YmxpYyBfY29sdW1uRGVmOiBDMk1hdFNvcnRIZWFkZXJDb2x1bW5EZWYsXHJcbiAgICBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcclxuICAgIHN1cGVyKF9pbnRsLCBjaGFuZ2VEZXRlY3RvclJlZiwgX3NvcnQsIF9jb2x1bW5EZWYsIF9mb2N1c01vbml0b3IsIF9lbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbJ3RydWUnXSlcclxuICBASG9zdExpc3RlbmVyKCdsb25ncHJlc3MnLCBbJ3RydWUnXSlcclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWydmYWxzZSddKVxyXG4gIF9fc2V0SW5kaWNhdG9ySGludFZpc2libGUodmlzaWJsZTogc3RyaW5nIHwgYm9vbGVhbikge1xyXG4gICAgc3VwZXIuX3NldEluZGljYXRvckhpbnRWaXNpYmxlKHZpc2libGUgYXMgYm9vbGVhbik7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLl9zb3J0LmRpcmVjdGlvbiA9IHRoaXMuZ2V0U29ydERpcmVjdGlvbigpO1xyXG4gICAgc3VwZXIuX2hhbmRsZUNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBfaXNTb3J0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydC5hY3RpdmVzLmZpbmRJbmRleChhY3RpdmVJZCA9PiBhY3RpdmVJZCA9PT0gdGhpcy5pZCkgPiAtMTtcclxuICB9XHJcblxyXG4gIF9zb3J0SWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydC5hY3RpdmVzLmZpbmRJbmRleChhY3RpdmVJZCA9PiBhY3RpdmVJZCA9PT0gdGhpcy5pZCkgKyAxO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUFycm93RGlyZWN0aW9uKCkge1xyXG4gICAgdGhpcy5fYXJyb3dEaXJlY3Rpb24gPSB0aGlzLmdldFNvcnREaXJlY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNvcnQnKVxyXG4gIF9nZXRBcmlhU29ydEF0dHJpYnV0ZSgpIHtcclxuICAgIGlmICghdGhpcy5faXNTb3J0ZWQoKSkge1xyXG4gICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFNvcnREaXJlY3Rpb24oKSA9PT0gJ2FzYycgPyAnYXNjZW5kaW5nJyA6ICdkZXNjZW5kaW5nJztcclxuICB9XHJcblxyXG4gIF9yZW5kZXJBcnJvdygpIHtcclxuICAgIHJldHVybiAhdGhpcy5faXNEaXNhYmxlZCgpIHx8IHRoaXMuX2lzU29ydGVkKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTb3J0RGlyZWN0aW9uKCk6ICdhc2MnIHwgJ2Rlc2MnIHwgJycge1xyXG4gICAgY29uc3QgaSA9IHRoaXMuX3NvcnQuYWN0aXZlcy5maW5kSW5kZXgoYWN0aXZlSWRzID0+IGFjdGl2ZUlkcyA9PT0gdGhpcy5pZCk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLl9zb3J0LmRpcmVjdGlvbnNbaV07XHJcbiAgICByZXR1cm4gdGhpcy5faXNTb3J0ZWQoKSA/IGRpcmVjdGlvbiA6ICh0aGlzLnN0YXJ0IHx8IHRoaXMuX3NvcnQuc3RhcnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdC1zb3J0LWhlYWRlci1jb250YWluZXJcIlxyXG4gICAgIFtjbGFzcy5tYXQtc29ydC1oZWFkZXItc29ydGVkXT1cIl9pc1NvcnRlZCgpXCJcclxuICAgICBbY2xhc3MubWF0LXNvcnQtaGVhZGVyLXBvc2l0aW9uLWJlZm9yZV09XCJhcnJvd1Bvc2l0aW9uID09ICdiZWZvcmUnXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtc29ydC1oZWFkZXItY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIERpc2FibGUgYW5pbWF0aW9ucyB3aGlsZSBhIGN1cnJlbnQgYW5pbWF0aW9uIGlzIHJ1bm5pbmcgLS0+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1zb3J0LWhlYWRlci1hcnJvd1wiXHJcbiAgICAgICAqbmdJZj1cIl9yZW5kZXJBcnJvdygpXCJcclxuICAgICAgIFtAYXJyb3dPcGFjaXR5XT1cIl9nZXRBcnJvd1ZpZXdTdGF0ZSgpXCJcclxuICAgICAgIFtAYXJyb3dQb3NpdGlvbl09XCJfZ2V0QXJyb3dWaWV3U3RhdGUoKVwiXHJcbiAgICAgICBbQGFsbG93Q2hpbGRyZW5dPVwiX2dldEFycm93RGlyZWN0aW9uU3RhdGUoKVwiXHJcbiAgICAgICAoQGFycm93UG9zaXRpb24uc3RhcnQpPVwiX2Rpc2FibGVWaWV3U3RhdGVBbmltYXRpb24gPSB0cnVlXCJcclxuICAgICAgIChAYXJyb3dQb3NpdGlvbi5kb25lKT1cIl9kaXNhYmxlVmlld1N0YXRlQW5pbWF0aW9uID0gZmFsc2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXQtc29ydC1oZWFkZXItc3RlbVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hdC1zb3J0LWhlYWRlci1pbmRpY2F0b3JcIiBbQGluZGljYXRvcl09XCJfZ2V0QXJyb3dEaXJlY3Rpb25TdGF0ZSgpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtc29ydC1oZWFkZXItcG9pbnRlci1sZWZ0XCIgW0BsZWZ0UG9pbnRlcl09XCJfZ2V0QXJyb3dEaXJlY3Rpb25TdGF0ZSgpXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtc29ydC1oZWFkZXItcG9pbnRlci1yaWdodFwiIFtAcmlnaHRQb2ludGVyXT1cIl9nZXRBcnJvd0RpcmVjdGlvblN0YXRlKClcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1zb3J0LWhlYWRlci1wb2ludGVyLW1pZGRsZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl9pc1NvcnRlZCgpXCI+e3tfc29ydElkKCl9fTwvZGl2PlxyXG48L2Rpdj5cclxuIl19
