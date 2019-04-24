import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory,OnInit
} from '@angular/core';
import { MessageComponent } from './message.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'app';
    componentRef: any;
    message:string;
    @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }

    ngOnInit(){
      this.message = "Welcome!! Please visit our customer support page "
      this.createComponent(this.message);
    }

    createComponent(message) {
        this.entry.clear();
        const factory = this.resolver.resolveComponentFactory(MessageComponent);
        this.componentRef = this.entry.createComponent(factory);
        this.componentRef.instance.message = message;
        this.componentRef.instance.color = 'green';        this.componentRef.instance.isItalic = true;
        this.componentRef.instance.isBold = true;
            }

    destroyComponent() {
        this.componentRef.destroy();
    }
}