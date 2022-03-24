import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../interfaces';

@Component({
    selector: 'app-son',
    templateUrl: './son.component.html',
    styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
    
    @Input() client?: Client
    @Output() onDeleteClient = new EventEmitter()
    @Output() onClientUpdated = new EventEmitter<Client>()
    
    constructor() { }
    
    ngOnInit(): void {
    }
    

    onDelete(){
        this.client = undefined
        this.onDeleteClient.emit()
    }

    onChange(id: number){
        if(!this.client) return

        //this.client.id = id // no usar asi porque se actualizar el obj en father and son

        this.client = { ...this.client, id}
        this.onClientUpdated.emit({...this.client})
    }
}
