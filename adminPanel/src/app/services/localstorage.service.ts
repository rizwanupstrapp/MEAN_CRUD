import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  public remberMeKey = 'rememberUser';
  public tokenKey = 'auth';
  public currutUserKey = 'admin';
  public currutLanguage = 'currentLanguage';
  private behave = new BehaviorSubject<Object>('');

  private behaveClick = new BehaviorSubject<Object>('');
  private behavePopupClick = new BehaviorSubject<Object>('');

  constructor() {}

  /** Get remeber me (email, password) */
  getRemeberMe() {
    return JSON.parse(localStorage.getItem(this.remberMeKey)) || null;
  }

  /** Set remeber me (email, password) */
  setRemeberMe(data) {
    localStorage.setItem(this.remberMeKey, JSON.stringify(data));
  }

  /** Remove remeber me (email, password) */
  removeRemeberMe() {
    localStorage.removeItem(this.remberMeKey);
  }

  /** Get user token */
  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey)) || null;
  }

  /** Set user token */
  setToken(data) {
    localStorage.setItem(this.tokenKey,  JSON.stringify(data));
  }

  /** Remoce user token */
  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  /** Get currunt user detail */
  getCurruntUser() {
    return JSON.parse(localStorage.getItem(this.currutUserKey)) || null;
  }

  /** Set currunt user detail */
  setCurruntUser(data) {
    localStorage.setItem(this.currutUserKey,  JSON.stringify(data));
  }

  /** Remove currunt user detail */
  removeCurruntUser() {
    localStorage.removeItem(this.currutUserKey);
  }
  
  setBehaviorView(behave: object) {
      this.behave.next(behave);
  }

  /** Get Behavior for user registraion */
  getBehaviorView(): Observable<object> {
      return this.behave.asObservable();
  }

  /** Delete & update status set */
  setBehaviorClick(behave: object) {
    this.behaveClick.next(behave);
  }

  /** Get Behavior for user registraion */
  getBehaviorClick(): Observable<object> {
    return this.behaveClick.asObservable();
  }

 /** Delete & update status PopupClick  */
  setBehaviorPopupClick(behave: object) {
    this.behavePopupClick.next(behave);
  }

  /** Get Behavior for user registraion */
  getBehaviorPopupClick(): Observable<object> {
    return this.behavePopupClick.asObservable();
  }
  
  /** Get header   */
  getHeader() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const token = this.getToken();
    headers = headers.set('Authorization', token);
    headers = headers.set('lang', environment.webDefaultLang);
    return {headers:headers};
  }
  
  /** Get form header   */
  getFormHeader() {
    let headers = new HttpHeaders();
    const token = this.getToken();
    headers = headers.set('Authorization', token);
    headers = headers.set('lang', environment.webDefaultLang);
    return {headers: headers};
  }
}
