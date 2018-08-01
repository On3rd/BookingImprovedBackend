import { Injectable } from '@angular/core';

@Injectable()
export class SearchUserService {

  
  
  constructor() { }

  setSearchId(id:number)
  {
    localStorage.setItem('searchID',JSON.stringify({searchID:id}));
   
  }
  getSearchId()
  {
    var searchId = JSON.parse(localStorage.getItem('searchID'))
    return searchId.searchID;

  }

 


}
