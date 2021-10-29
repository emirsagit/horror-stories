# Laravel Backed Plastic Surgery Website

> It's a horror stories web site where end user can share their stories. It's under development.

## Built With

-   HTML, CSS, PHP, JavaScript, PostgreSQL
-   Laravel, Next.js, React, Tailwind CSS

-   API: Laravel
-   Client: Next.js

## Requirements

Requirements:
• It should have a separate rest API for using a mobile app as well.
• User will have a profile picture
• There will be a tracking system between users (following/following display user to choose)
• There will be DM between users
• Users will be able to comment and score stories
• Users will be able to share two basic shares. One is Horror Story, the other ABC (entry). Stories will have no character limitations, but for ABCs, there will be a 160 character limit.
• Anonymous non-user visitors can only see stories and comments. They won't be able to see the ABCs.
• A scoring system based on story sharing and likes between users. Those with high scores will be able to become VIP users over time.
• There will be five or six basic categories for stories.
• Below the stories will be things like the number of reads, likes, and comments.
• Users will have easy membership with Google.
• It should have a good design.

## Process

- This project is under development. Currently finished authentication with Sanctum. It will have detailed documentation. Below is for giving info about authentication. 

### Authentication routes:

- For same domain SPA's auth (Cookie based auth)
- For cookie-based auth with sanctum app should send a pre-request to /sanctum/csrf-cookie endpoint to get XSRF-TOKEN cookie for using it on next requests.[Further Information ](https://laravel.com/docs/8.x/sanctum#spa-authentication)

    /register (POST)
 For registering users. The request body must include: name, email, password, password_confirmation, redirect_url(API will send a confirmation email after registering users. So this URL is the redirection path when the user clicks to confirm the email.) The other params are self-explainer. It returns user information.

    /login (POST)
 The request body must include: email, password params. It returns user information.

    /logout (POST)

 - For APP or SPA's on different domains (Token based auth): [Further Reading](https://laravel.com/docs/8.x/sanctum)

    /api/register (POST)
 For registering users. The request body must include: name, email, password, password_confirmation, redirect_url(API will send a confirmation email after registering users. So this URL is the redirection path when the user clicks to confirm the email.) The other params are self-explainer. It returns user information and token.

    /api/login (POST)
 The request body should include: email, password params. It returns user information.

    /api/logout (POST)
 It will delete the token.

Auth Routes: (User should login for using below requests. It means sending token information with request)

    /api/user (GET)
 It returns user information.

    /api/user/profile/image (POST)
 For adding profile thumbnail. It will send a verification email to end user's email address. It returns original and manipulated image url information. The request body should include: `image` param. (FILE)

    /api/email/verify (POST)
 For verifying email. It will send a verification email to end user's email address.


## Authors

👤 **Emir Sağıt**

-   GitHub: [@emirsagit](https://github.com/emirsagit)
-   Twitter: [@emirsagit](https://twitter.com/emirsagit)
-   LinkedIn: [Emir Sağıt](https://www.linkedin.com/in/emir-sa%C4%9F%C4%B1t-633035188/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.
