import { inject } from "@theia/core/shared/inversify";

class MessageService {
    
    @inject(MessageService)
    protected readonly messageService: MessageService;

    showMessage(message: string): void {
        this.messageService.showMessage(message);
    }

}

export default MessageService;