# Code Challenge
Welcome to the Midnite code challenge!

It is a simple, 30-60 minute exercise designed to demonstrate your ability to work with data to present a typical sportsbook component, a list of upcoming esports matches.

You can use this repository as a starting point, which includes some initial setup such as Vue CLI, axios, and tailwind, the utility first css framework we use at Midnite. Using this is optional, and you're free to handle your own setup.

### Vue CLI

**Project setup**
```
yarn install
```

**Compiles and hot-reloads for development**
```
yarn serve
```

**Compiles and minifies for production**
```
yarn build
```

**Lints and fixes files**
```
yarn lint
```


## Brief

Your challenge is to build out a simple match list of upcoming esports matches and get it looking as close to the original design as possible. Below is a preview of what we'd like to see recreated, we have provided a [Figma](https://figma.com/) link to the original design where you can inspect and interact with the design elements. If you're not familiar with Figma, it's the design tool used by our designers, and is frequently used by our frontend engineers during asset hand-off and implementation.

[https://www.figma.com/file/nby4r7Eecn4xMlyF8aK07k/Code-Exercise](https://www.figma.com/file/nby4r7Eecn4xMlyF8aK07k/Code-Exercise)

![Upcoming Matches](https://firebasestorage.googleapis.com/v0/b/clover-f2488.appspot.com/o/document-images%2Ff4b3c7208d125ff56eaf4a60d6aac5dbcb46692f?alt=media&token=b65812a3-3715-4d5e-8919-e4e615eed866)


## Ideas to test yourself

- Train your eye for detail by getting your solution as close to the design as you can
- Populate the bet slip with `contract` selections from the match list
- Make the layout responsive for smaller devices

## Developer Notes

**Match Data**

Axios has been included, and can be pointed at our production API. Below is documentation for our upcoming matches endpoint, which should include all of the necessary data required to render the matches list.

If you'd prefer to mock the data instead of hitting the endpoint, that's also fine.

`[GET] - https://api.midnite.com/v0/matches/upcoming`


**Tailwind CSS**

At Midnite, we use a utility first approach to our CSS and component building, so Tailwind has been included, but it's completely *optional* and you're free to write regular CSS if preferred.


---

Any problems with any of the above, please reach out. Once you've completed the challenge, return it to us in the form of a `.zip` file, or a fork of the GitHub repository provided for review.

Good luck and have fun!
