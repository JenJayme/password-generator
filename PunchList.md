# Fix PunchList

# Script.js
- Fix While statment - indent statements between {} *DONE*
- line 41
    - malformed if-statement *HOW SHOULD IT BE CHANGED? REVIEW*
    - confirm() *DONE*
        - When invoking functions, whether user-defined or built into javascript, never put a space between the function name and the open parenthesis
- Line 60
        - Malformed condition *HOW SHOULD IT BE CHANGED? REVIEW*
        - After displaying the alert() the application still uses the password length that does not meet the requirement (i.e. must be at least 8 characters but no more than 128 characters) *FIXED?*
- Line 68
        - You know how I feel about misaligned curly braces
- Line 72
        - userChoiseNum is neither an array, a string, nor an object, so the for-loop will not execute.  What do you think is its type?  How do you make the for-loop iterate?
- Line 73
        - You're redeclaring the variable rnum every time you iterate.  You can declare rnum outside the for-loop (i.e. above it) and then just reference the variable inside the for-loop.  Every time you declare something, javascript is creating a new space for it in memory.  So in your code, it's creating numerous slots in memory for rnum.  I know this is advanced topic, but your application would consume more computer memory than necessary.  You know how some apps make your computer come to crawl?  Because some of them are memory hogs.
- Line 74
        - newPassword is never declared anywhere, so javascript will assume it's a global variable (outside any function) and declare it there.  While this is the intention, you should not let javascript make this assumption.  Always be explicit in your intentions.  You need it as a global variable?  Declare it at the top as *var newPassword;*
    - Line 80-81
        - Malformed if-statement.  The expression between the parentheses is what is being evaluated to true. In plain English, the if-statement simply states this:

            If something is true, then I'll execute the following statement.  In pseudo-code, it would appear like the following:

            if (something is true) then

            execute me

            execute me too

            end If

            **An example:**

            *var skyColor = "blue";
            var isSunOut = true;*

            *if ( (skyColor === "blue) && (isSunOut) ) {*

            *console.log('It is a beautiful day.');*

            *}*

            **Note**: (isSunOut) is the same as (isSunOut === true)

        - if-then-else statements follow the same principle.  In plain English, it states:

            if something is true, then I'll execute the following statements.  Otherwise, I'll execute these other statements.  In pseudo-code, it would look like the following:

            if (something is true) then

            execute me

            execute me too

            end if
            else

            execute me

            execute me too

            end else

            **Using the example above:**

            *var skyColor = "blue";
            var isSunOut = true;*

            *if ( (skyColor === "blue) && (isSunOut) ) {*

            *console.log('It is a beautiful day.');*

            *} else {*

            console.log('This reminds me of the U.K.');

            *}*

        - If you have more than one statement to execute based on a condition, you need to group the statements with matching curly braces.

            **One-statement Example:**

            *var myFruit = 'apple';

            if (myFruit === 'apple')*

            console.log('My fruit is an apple');

            Or

            *if (myFruit === 'apple') console.log('My fruit is an apple');*

            **Multi-statement Example:**

            *var myFruit = 'apple';
            var share;

            if (myFruit === 'orange') {*

            *console.log('My fruit is an orange')*

            *share = false;*

            *} else {*

            console.log('My fruit is an apple');

            share = true;

            *}*

    - Line 90
        - You defined and declared writePassword() twice.  Javascript will give precedence to the last declaration which is the one on this line number.
    - Line 98
        - You invoked generatePassword() here, but this function is also invoked inside writePassword when you call that.  You're generating the password twice, and you'll run into some weird edge case of overwriting the generated password.
        
Overall you're on the right path.  It will not run because you have some syntax errors.  You need to correct the syntax before you see it working.  Once it's working, you will likely run into bugs that you'll need to fix.