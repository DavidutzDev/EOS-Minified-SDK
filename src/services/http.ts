interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

class HttpService {
  private async request<T>(
    url: string,
    config: RequestInit
  ): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(url, config);
    try {
      // Assuming the response is in JSON format
      response.parsedBody = await response.json();
    } catch (ex) {
      console.warn("Error parsing JSON response:", ex);
    }
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    return response;
  }

  public async get<T>(url: string, config: RequestInit = {}): Promise<T> {
    const response = await this.request<T>(url, { ...config, method: "GET" });
    return response.parsedBody as T;
  }

  public async post<T>(
    url: string,
    data: any,
    config: RequestInit = {}
  ): Promise<T> {
    const response = await this.request<T>(url, {
      ...config,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...config.headers,
      },
      body: JSON.stringify(data),
    });
    return response.parsedBody as T;
  }

  public async postUrlEncodedForm<T>(
    url: string,
    data: any,
    config: RequestInit = {}
  ): Promise<T> {
    const formParams = new URLSearchParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formParams.append(key, data[key]);
      }
    }

    const response = await this.request<T>(url, {
      ...config,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ...config.headers,
      },
      body: formParams,
    });
    return response.parsedBody as T;
  }
}

export default HttpService;
