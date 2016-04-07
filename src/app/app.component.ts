import { Component, Type, Input, DynamicComponentLoader, ElementRef, Directive, Renderer, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {GenericComponent} from './generic.component';
@Component({
    selector: 'app',
    directives:[GenericComponent],
    template: `
        <generic-component component-name="icici-heading"></generic-component>
        <generic-component component-name="icici-body"></generic-component>
    `
})

export class App { 
    constructor() { }     
}