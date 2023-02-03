import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({

    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent implements OnInit,OnChanges,DoCheck{
    
    @Input() childMessage:string | undefined;
    __name: String = 'sandeep';
    __isDisabled: boolean = false;
    private __inputText: String = "see you !";
    h1_color: String = 'rgb(255, 165, 0)';
    h3_color: String = 'rgb(255, 165, 140)'



    ngOnChanges(changes: SimpleChanges): void {
        console.log("Inside ngOnChanges ")
    }

    
    ngOnInit(): void {
        setTimeout(()=>{
            this.__inputText = "Iam Back !";
        },10000);
        
    }

    ngDoCheck(): void {
        console.log("Inside do check method "+this.__inputText)
    }

    set name(nameVal:String){
        this.__name=nameVal;
    }
    get name(){
        return this.__name;
    }

    set_isDisabled(){
        this.__isDisabled = !this.__isDisabled;
    }

    get isDisabled(){
        return this.__isDisabled;
    }

    changeColor_h1(){
        this.h1_color=this.changeColor();
    }
    
    changeColor_h3(event:Event){
        
        this.h3_color=this.changeColor();
    }

    private changeColor(){
        
        let redVal:number = Math.floor(Math.random()**256);
        let greenVal:number = Math.floor(Math.random()*256);
        let blueVal:number = Math.floor(Math.random()*256);

        let finalVal: String = `rgb(${redVal},${greenVal},${blueVal})`;
        return finalVal;
    }

    get inputText():String{
        return this.__inputText;
    }
    onInput(event:any){
        this.__inputText = event.target.value;
    }

}