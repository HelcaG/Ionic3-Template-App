import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../core/data.service';
import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model';
import { ActivitiesModel } from '../core/activities.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public userProfile: UserModel;
  public uid: string = "";
  public title;
  public description;
  public activities: ActivitiesModel[];
  /*public activitiesselected = {}*/

  constructor(
    public navCtrl: NavController, 
    public authService: AuthService,
    public afs: AngularFirestore,
    public db: DataService
  ) {
    this.db.bindCollection<ActivitiesModel>("activities", this, "activities");
    
  }


  ionViewDidLoad() {
    this.authService.getFullProfile().subscribe((user: UserModel) => {
      this.userProfile = user;
      if(user)
        this.uid = user.uid;
    });
  }

  

  logout() {
    this.authService.signOut().then(() => this.navCtrl.setRoot('AuthPage'));
  }
  

  addActivity() {
    this.db.add<ActivitiesModel>("activities",{title: this.title, description: this.description});
  }

  goToMyActivity() {
    this.navCtrl.push("MyActivityPage");

  }
  

  /*delete(index) {
    this.activities.splice(index, 1)
  }*/


}