# PicaPontoScript

## How to use it 
Hello JD worker

Copy the <a href="https://github.com/eusouorui/PicaPontoScript/blob/master/script.js" target="_blank">script.js</a>'s function code and run it in the console while on the assiduity page 😄

### What it does
This will generate an alert with info about when you'll complete 8h with different lunch times considered.

### Disclaimer
**However**, if you are using a Chromium, first of all, I feel very sorry for you.
Second, once <a href="https://support.google.com/chrome/thread/9959602/text-selection-fails-in-alert-messages?hl=en" target="_blank">this problem</a> exists, you can simply paste this line in the console to have the unix time stamp:
```JS
Math.trunc(today.getTime() / 1000) + intHours * 3600 + intMinutesLeft * 60;
```
You can change the "intHours" and "intMinutesLeft" to meet your needs, this being the hours and minutes left for you to complete 8h.

### For Testing 
- Clone the project
- Open the index.html 
- Click on the page

Manually change the time for the message to vary



