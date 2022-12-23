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

@injectable()
export class FinderWidget extends ReactWidget {
     static readonly ID = "finder:widget";
     static readonly LABEL = "Finder";

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

     render(): React.ReactElement {
          return (
               <div id="widget-container">
                    <TicketForm />
               </div>
          );
     }

     protected displayMessage(information: string): void {
          this.messageService.info(information);
     }

     protected onActivateRequest(msg: Message): void {
          super.onActivateRequest(msg);
          const htmlElement = document.getElementById("displayMessageButton");
          if (htmlElement) {
               htmlElement.focus();
          }
     }
}
