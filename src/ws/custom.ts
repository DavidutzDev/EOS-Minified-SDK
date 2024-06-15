import { WebSocket } from "ws";

export class CustomWebSocket {
  private url: string;
  private socket: WebSocket;
  private accessToken: string;

  constructor(url: string, accessToken?: string) {
    this.url = url;
    if (accessToken) this.accessToken = accessToken;
  }

  public async connect(): Promise<WebSocket> {
    const options = {
      headers: {
        Authorization: this.accessToken ? `Bearer ${this.accessToken}` : "",
        Upgrade: "websocket",
        Connection: "Upgrade",
        "Sec-WebSocket-Key": "KSO+hOFs1q5SkEnx8bvp6w==",
        "Sec-WebSocket-Protocol": "v10.stomp,v11.stomp,v12.stomp",
        "Sec-WebSocket-Version": "13",
        "Epic-Connect-Protocol": "stomp",
      },
    };

    this.socket = new WebSocket(this.url, options);

    return this.socket;
  }
}
