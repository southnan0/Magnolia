import {Service} from './index';

export class EditMessageService extends Service {
  constructor(http) {
    super(http);
  }

  get(message:string) {
    return this.post(`editMessage`, {message})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class GetMessageService extends Service {
  constructor(http) {
    super(http);
  }

  get() {
    return this.post(`getMessage`,  {})
      .then(response => response.json().body.message)
      .catch(this.handleError)
  }
}
