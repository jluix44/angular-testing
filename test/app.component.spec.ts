import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });
    
    test('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const commponent = fixture.componentInstance;
        expect(commponent).toBeTruthy();
    });
    
    test(`should have as title 'angular-testing'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const commponent = fixture.componentInstance;
        expect(commponent.title).toEqual('angular-testing');
    });
    
    // test('should render title', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const commponent = fixture.componentInstance;
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;
    //     const h1 = compiled.querySelector('h1')
    //     expect(h1?.textContent).toContain( commponent.title );
    // });

    //Fotografia al componente para hacerguarse que no ha cambiado en el DOM del HTML
    // test('debe hacer match con el snapshot', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;

    //     expect(compiled).toMatchSnapshot()
    // })

});
