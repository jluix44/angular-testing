import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http"

import { PokemonService } from '../../../src/app/basic/services/pokemon.service';

describe('PokemonService', () => {
    let service: PokemonService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[
                HttpClientModule
            ]
        });
        service = TestBed.inject(PokemonService);
    });
    
    test('should be created', () => {
        expect(service).toBeTruthy();
    });


    test('debe traer informacion de Bulbasaur', (done) => {
        service.getPokemon(1).subscribe(pokemon => {
            expect(pokemon.name).toBe('bulbasaur')
            done()
        })
    })



});
