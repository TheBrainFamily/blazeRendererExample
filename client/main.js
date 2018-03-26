import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { Developers } from "../imports/collections/Developers";
import "./main.html";

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  }
});

Template.hello.events({
  "click button": function(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});

Template.developers.helpers({
  developers() {
    return Developers.find({});
  }
});
