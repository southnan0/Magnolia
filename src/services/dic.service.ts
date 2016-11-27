import {Service} from './index';

export class GetDicInfoService extends Service{
  constructor(http) {
    super(http);
  }

  get(): Promise<any> {
    return this.post('getDicInfo', {})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class GetDicItemService extends Service{
  constructor(http) {
    super(http);
  }

  get(dicId): Promise<any> {
    return this.post('getDicItem', {dicId})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class EditDicItemService extends Service{
  constructor(http) {
    super(http);
  }

  get(): Promise<any> {
    return this.post('editDicItem', {})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class AddDicItemService extends Service{
  constructor(http) {
    super(http);
  }

  get(): Promise<any> {
    return this.post('addDicItem', {})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class DelDicItemService extends Service{
  constructor(http) {
    super(http);
  }

  get(dictItemId:string): Promise<any> {
    return this.post('delDicItem', {dictItemId})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}
