import { inject } from "@theia/core/shared/inversify";
import {MessageService} from "@theia/core";

class DisplayMessage {

    @inject(MessageService)
    protected readonly messageService: MessageService;

    showErrorMessage(message: string) {
        this.messageService.error(message , {timeout : 3000});
    }


}

export default DisplayMessage;
