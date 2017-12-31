import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.isOpen = !this.isOpen;
    }
}