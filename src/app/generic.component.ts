import { Component, Type, Input, DynamicComponentLoader, ElementRef, Directive, Renderer, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {bodyComponent} from './body.component';
import {headingComponent} from './heading.component';

@Component({
    selector: 'generic-component',
    template: ''
})

export class GenericComponent {
    @Input('component-name') componentName: string;
    //@Input('component-info') componentInfo: string;

    title: string = 'Generic';
    currentComponent: string = 'Generic';

    typesRegister: Type[] = [bodyComponent, headingComponent];
    keysRegister: string[] = ['icici-body','icici-heading'];

    constructor(private dcl: DynamicComponentLoader, private elementRef: ElementRef) { }

    ngOnInit() {
        console.log('Loading using DCL...' + this.componentName);
        let componentIndex = this.keysRegister.indexOf(this.componentName);
        this.dcl.loadNextToLocation(this.typesRegister[componentIndex], this.elementRef);
        console.log('Loading using DCL...done');
    }    
}