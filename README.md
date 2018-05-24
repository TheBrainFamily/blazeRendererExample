# blazeRendererExample
Simple example of BlazeRenderer use. We are working on more robust and complex example, and a tutorial (Based on the meteor todo implementation), but for now:

# Why?

JavaScript testing tooling skyrocketed in the last few years, with jest along wallabyjs leading the way to really unheard of testing experience.
We wanted to be able to use those advances in the JS world - like amazing jest watch mode or wallabyjs real-time-test-reloads with meteor. [testable-meteor](https://github.com/TheBrainFamily/testable-meteor) package makes it possible for React, [testable-meteor](https://github.com/TheBrainFamily/testable-meteor) + [blazeRenderer](https://github.com/TheBrainFamily/blazeRenderer) makes it possible for blaze, which is even harder, since blaze is so coupled with Meteor. 

# Let the "picture" be worth a thousand words:

```javascript
test(
  "renders main",
  runInFiber(() => {
    expect(renderBlaze("main")).toMatchSnapshot();
  })
);

test(
  "it displays the developers when available",
  runInFiber(() => {
    Developers.insert({name: "Lukasz", surname: "Gandecki", company: "TheBrain Software House"});
    Developers.insert({name: "Sam", surname: "Hatoum", company: "Xolv.io" });

    const $ = cheerio.load(renderBlaze("main"));

    expect($(".test-developers li ul").length).toEqual(2);
    expect($(".test-developers li ul:nth-child(1)").html()).toEqual(
      "Lukasz Gandecki @TheBrain Software House"
    );
    expect($(".test-developers li ul:nth-child(2)").html()).toEqual(
      "Sam Hatoum @Xolv.io"
    );
  })
);
```

# Based on

This is a very basic example of how to use two packages that we extensively use at TheBrain Software house:

https://github.com/TheBrainFamily/testable-meteor

https://github.com/TheBrainFamily/blazeRenderer

There is much more to them than we can show in this simple repo, but we have been hiding those packages long enough, so this is the first step. We are planning to do much more extensive writing on them soon!

# To see what this in more details what this is all about

take a look at

[Example test file](client/main.test.js)

And also 
[blaze templates](client/main.html)

[javascript code for those templates](client/main.js) 

# Run your tests with
```
$ npm test
```
