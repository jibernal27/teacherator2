import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Teachers = new Mongo.Collection('teachers');
 
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('teachers', function teachersPublication() {
    return Teachers.find();
  });
}
 
Meteor.methods({
  'teachers.search'() {
 
    Teachers.find();
  },
  'teachers.update'(teacherId, review) {
 
    Teachers.update(teacherId, { $push: { reviews: review } });
  },
});