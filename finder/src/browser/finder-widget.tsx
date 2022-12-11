import * as React from "react";
import {
    injectable,
    postConstruct,
    inject,
} from "@theia/core/shared/inversify";
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import { MessageService } from "@theia/core";
import { Message } from "@theia/core/lib/browser";
import TicketForm from "../components/ticketForm";
import { render } from '@testing-library/react';

@injectable()
export class FinderWidget extends ReactWidget {
    static readonly ID = "finder:widget";
    static readonly LABEL = "Finder";
    

    constructor() {
        super();
        // this.state = {
        //     path: "",
        //     code: "",
        // }
    }
/*

function changeValeurInitial(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({valeu: e.target.value})
}

    render(): React.ReactNode {
        return (
            <div id="widget-container">
               <input type="email" name="" id="" value={this.state.valeu}/>
                <TicketForm/>
            </div>
        );
    }
*/

    

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    
    @postConstruct()
    protected async init(): Promise<void> {
        this.id = FinderWidget.ID;
        this.title.label = FinderWidget.LABEL;
        this.title.caption = FinderWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = "fa fa-window-maximize"; // example widget icon.
        this.update();
    }

    /**
     * Code 1
     *  Affichage du composant React dans le widget
     * 
     *  */

    render(): React.ReactElement {
        return (
            <div id="widget-container">
                <TicketForm/>
            </div>
        );
    }

    protected displayMessage(information : string): void {
        this.messageService.info(information);
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById("displayMessageButton");
        if (htmlElement) {
            htmlElement.focus();
        }
    }

    // Jusqu'ici, le code est identique à celui du widget de base
}
