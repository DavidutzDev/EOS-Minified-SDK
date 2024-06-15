import HttpService from "./http";

export type Variables = Record<string, any>;

class GraphQLService {
  private client: HttpService;
  private uri: string;
  private headers: any;

  constructor(uri: string, headers?: any) {
    this.client = new HttpService();
    this.uri = uri;
    this.headers = headers;
  }

  public async request<T>(query: string, variables?: Variables): Promise<T> {
    const payload = { query: query, variables: variables }; // Include variables in the payload
    const result = await this.client.post(
      this.uri,
      payload, // Use the payload with variables
      { headers: this.headers } // Include this.headers
    );

    return result as T;
  }
}

export default GraphQLService;
