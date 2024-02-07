import { NgModule } from '@angular/core';
import { MatMultiSort } from './mat-multi-sort.directive.mjs';
import { MatMultiSortHeaderComponent } from './mat-multi-sort-header/mat-multi-sort-header.component.mjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatMultiSortTableSettingsComponent } from './mat-multi-sort-table-settings/mat-multi-sort-table-settings.component.mjs';
import { MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export class MatMultiSortModule {
    static { this.ɵfac = function MatMultiSortModule_Factory(t) { return new (t || MatMultiSortModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MatMultiSortModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MatCommonModule,
            MatDividerModule,
            DragDropModule,
            MatIconModule,
            MatCheckboxModule,
            MatMenuModule,
            MatButtonModule,
            FormsModule,
            MatChipsModule,
            MatTooltipModule,
            MatDialogModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultiSortModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MatMultiSortHeaderComponent,
                    MatMultiSort,
                    MatMultiSortTableSettingsComponent,
                ],
                exports: [
                    MatMultiSortHeaderComponent,
                    MatMultiSort,
                    MatMultiSortTableSettingsComponent
                ],
                imports: [
                    CommonModule,
                    MatCommonModule,
                    MatDividerModule,
                    DragDropModule,
                    MatIconModule,
                    MatCheckboxModule,
                    MatMenuModule,
                    MatButtonModule,
                    FormsModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatDialogModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MatMultiSortModule, { declarations: [MatMultiSortHeaderComponent,
        MatMultiSort,
        MatMultiSortTableSettingsComponent], imports: [CommonModule,
        MatCommonModule,
        MatDividerModule,
        DragDropModule,
        MatIconModule,
        MatCheckboxModule,
        MatMenuModule,
        MatButtonModule,
        FormsModule,
        MatChipsModule,
        MatTooltipModule,
        MatDialogModule], exports: [MatMultiSortHeaderComponent,
        MatMultiSort,
        MatMultiSortTableSettingsComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LW11bHRpLXNvcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWF0LW11bHRpLXNvcnQvc3JjL2xpYi9tYXQtbXVsdGktc29ydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBNkIzRCxNQUFNLE9BQU8sa0JBQWtCO21GQUFsQixrQkFBa0I7bUVBQWxCLGtCQUFrQjt1RUFkM0IsWUFBWTtZQUNaLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGVBQWU7WUFDZixXQUFXO1lBQ1gsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlOztpRkFHTixrQkFBa0I7Y0ExQjlCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osMkJBQTJCO29CQUMzQixZQUFZO29CQUNaLGtDQUFrQztpQkFDbkM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDJCQUEyQjtvQkFDM0IsWUFBWTtvQkFDWixrQ0FBa0M7aUJBQ25DO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsV0FBVztvQkFDWCxjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsZUFBZTtpQkFDaEI7YUFDRjs7d0ZBQ1ksa0JBQWtCLG1CQXhCM0IsMkJBQTJCO1FBQzNCLFlBQVk7UUFDWixrQ0FBa0MsYUFRbEMsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGVBQWU7UUFDZixXQUFXO1FBQ1gsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixlQUFlLGFBaEJmLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0TXVsdGlTb3J0IH0gZnJvbSAnLi9tYXQtbXVsdGktc29ydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXRNdWx0aVNvcnRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL21hdC1tdWx0aS1zb3J0LWhlYWRlci9tYXQtbXVsdGktc29ydC1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0TXVsdGlTb3J0VGFibGVTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vbWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MvbWF0LW11bHRpLXNvcnQtdGFibGUtc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWF0TXVsdGlTb3J0SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTWF0TXVsdGlTb3J0LFxyXG4gICAgTWF0TXVsdGlTb3J0VGFibGVTZXR0aW5nc0NvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1hdE11bHRpU29ydEhlYWRlckNvbXBvbmVudCxcclxuICAgIE1hdE11bHRpU29ydCxcclxuICAgIE1hdE11bHRpU29ydFRhYmxlU2V0dGluZ3NDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdENvbW1vbk1vZHVsZSxcclxuICAgIE1hdERpdmlkZXJNb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE11bHRpU29ydE1vZHVsZSB7XHJcbn1cclxuIl19
