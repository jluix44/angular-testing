import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonComponent } from '../../../src/app/basic/son/son.component';

describe('SonComponent', () => {
    let component: SonComponent;
    let fixture: ComponentFixture<SonComponent>;
    let compiled: HTMLElement;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SonComponent ]
        })
        .compileComponents();
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(SonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        jest.clearAllMocks()
    });
    
    test('should create', () => {
        expect(component).toBeTruthy();
    });

    //hace sl snapshot pero no es muy util cuando se tienen elementos del DOM bajo una condicion para ser mostrados
    test('debe hacer match con el snapshot',() => {
        expect(compiled).toMatchSnapshot()
    })

    test('no deberian aparecer los botones si no hay un cliente', () => {
        const buttons = compiled.querySelectorAll('button')
        expect(buttons.length).toBe(0) //toBe(0) indica que no debe haber nada
    })

    test('deben aparecer los botones si hay un cliente', () => {
        component.client = {id: 1, name: 'jose'}
        fixture.detectChanges() 
        const buttons = compiled.querySelectorAll('button')
        expect(buttons.length).toBe(2) //toBe(2) indica el numero de elementos econtrados
    })

    test('si hay cliente hacer match con el snapshot', () => {
        component.client = {id: 1, name: 'jose'}
        fixture.detectChanges() 
        expect(compiled).toMatchSnapshot()
    })

    test('debe emitir onDeleteCliente con el button de eliminar', () =>{
        component.client = {id: 1, name: 'jose'}
        fixture.detectChanges()

        jest.spyOn(component.onDeleteClient, 'emit')
        const btnDelete = compiled.querySelector('[data-test=btn-delete]')
        console.log(btnDelete?.innerHTML)

        btnDelete?.dispatchEvent(new Event('click')) //se simula un click en el btn

        expect(component.onDeleteClient.emit).toHaveBeenCalled() //en toHaveBeenCalled() podemos mandar parametros, que son los que se enviar en el emit del output

    })

    test('debe emitir onClienteUpdated con el button de Cambiar ID', () =>{
        component.client = {id: 1, name: 'jose'}
        fixture.detectChanges()

        jest.spyOn(component.onClientUpdated, 'emit')
        const btnChangeID = compiled.querySelector('[data-test=btn-id]')
        console.log(btnChangeID?.innerHTML)

        btnChangeID?.dispatchEvent(new Event('click')) //se simula un click en el btn

        expect(component.onClientUpdated.emit).toBeCalledWith({
            id:5, //si se cambia un atributo genera un error porque no es el obj que se inicializo
            name: 'jose'
        }) //en toHaveBeenCalled() podemos mandar parametros, que son los que se enviar en el emit del output

    })

    test('debe de emitir onChange con el ID especificado si Hay un cliente', () => {
        jest.spyOn(component.onClientUpdated, 'emit')
        component.onChange(20)
        expect(component.onClientUpdated.emit).not.toHaveBeenCalled()

        component.client = {id: 1, name: 'jose'}
        fixture.detectChanges()
        component.onChange(10)

        expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
            id: 10,
            name: 'jose'
        })

    })


});
