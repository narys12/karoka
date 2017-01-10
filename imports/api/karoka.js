import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
 
export const Karokas = new Mongo.Collection('karoka');

Meteor.methods({
  'karoka.insert'(text) {
    check(text, String);
 
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Karokas.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'karoka.remove'(karokaId) {
    check(karokaId, String);
 
    Karokas.remove(karokaId);
  },
});