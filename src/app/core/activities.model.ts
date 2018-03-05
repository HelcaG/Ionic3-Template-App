import { FirebaseModel } from './firebase.model';

export class ActivitiesModel extends FirebaseModel {
  title: string;
  user?: string;
  description?: string;
  
} 