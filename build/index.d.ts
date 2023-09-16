type ChatResponse = {
    text: string;
    channel: string;
    conversationId?: string;
};

declare class Authenticator {
    private debug?;
    private bot?;
    private token?;
    private channelTs;
    private client?;
    constructor(token: string, bot: string, debug?: boolean);
    oauth2(clientId: string, clientSecret: string): Promise<string>;
    newChannel(name: string): Promise<string>;
    private _joinChannel;
    private _deleteChannel;
    sendMessage(opt: {
        text: string;
        channel: string;
        conversationId?: string;
        onMessage?: (partialResponse: ChatResponse) => void;
        timeoutMs?: number;
        retry?: number;
    }): Promise<ChatResponse>;
}

export { Authenticator };
