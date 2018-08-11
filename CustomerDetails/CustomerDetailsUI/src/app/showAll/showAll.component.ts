import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'ShowAll',
    templateUrl: 'app/ShowAll/showAll.component.html',
    styles: ['app/ShowAll/showAll.component.css']
})

export class ShowAll {

    selectedValue: string = '1';

    @Output()
    radioButtonChangedOutputEvent: EventEmitter<string> = new EventEmitter<string>();

    @Input() all: number;
    @Input() active: number;
    @Input() deactive: number;

    OnRadioButtonChange() {
        this.radioButtonChangedOutputEvent.emit(this.selectedValue);
    }
}