import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SonComponent } from '../../../src/app/basic/son/son.component';

import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
    let component: FatherComponent;
    let fixture: ComponentFixture<FatherComponent>;
    let compiled: HTMLElement;
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ FatherComponent, SonComponent ]
        })
        .compileComponents();
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(FatherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.nativeElement;
    });
    
    test('should create', () => {
        expect(component).toBeTruthy();
    });


    test('debe hacer match con el snapshop', () => {
        expect(compiled).toMatchSnapshot()
    })


    test('debe establecer el cliente con el nombre indicado', () => {
        component.onSetClient('Pedro')
        fixture.detectChanges()


        const codeTag = compiled.querySelector('.mt-2')
        console.log(codeTag?.textContent)

        expect(codeTag?.textContent).toContain('"name"')
        expect(codeTag?.textContent).toContain('"Pedro"')

    })


    test('debe borrar al cliente si se emite onDeleteClient (hijo)', () => {
        component.client = {id: 1, name: 'Eduardo'}
        fixture.detectChanges()

        const sonDebugElement = fixture.debugElement.query(By.directive(SonComponent))
        const sonComponent: SonComponent = sonDebugElement.componentInstance

        sonComponent.onDeleteClient.emit()
        expect(component.client).toBe(undefined) //toBe para evaluar dos datos primitivos stringm, number,

    })



    test('debe actualizar el cliente onClientUpdated', () => {
        component.client = {id: 1, name: 'Eduardo'}
        fixture.detectChanges()

        const sonDebugElement = fixture.debugElement.query(By.directive(SonComponent))
        const sonComponent: SonComponent = sonDebugElement.componentInstance

        sonComponent.onClientUpdated.emit({id: 10, name: 'Pedro'})
        expect(component.client).toEqual({id: 10, name: 'Pedro'}) //toEqual para evaluar cuando un obj == obj

    })

});
