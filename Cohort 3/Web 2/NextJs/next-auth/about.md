## NextAuth

### What is next auth?

NextAuth.js is an open-source authentication solution for Next.js applications. It provides a flexible and easy way to implement authentication in your application, supporting various authentication providers like Google, Facebook, Twitter, GitHub, and more. It also supports email/password authentication, JWT sessions, and database sessions, making it highly adaptable to different needs. With NextAuth.js, you can easily manage user sessions and secure your application.

### Can you do it without next-auth?

Yes, you can implement authentication without using NextAuth.js. However, you should be aware of the potential complexity and security implications of doing so.

### Popular choices for authentication

- External providers:
  - Auth0
  - Clerk
  - Firebase auth
- In-house solutions:
  - Using cookies
- NextAuth.js

### What is oAuth?

OAuth is an authorization protocol that enables applications to obtain limited access to user accounts on another service provider's website, without requiring the user to share their login credentials.

For example, let's say you want to use a third-party application to post a tweet on your behalf. Instead of giving the application your Twitter login credentials, you can use OAuth to give the application a limited access to your Twitter account. The application will then be able to post a tweet on your behalf without having access to your login credentials.

### How does OAuth protocol work?

OAuth protocol works as follows:

1. The user requests authorization to access their account on the service provider's website.
2. The service provider redirects the user to an authorization page.
3. The user grants permission to access their account data.
4. The service provider redirects the user back to the application with an authorization code.
5. The application requests an access token from the service provider, using the authorization code.
6. The service provider verifies the authorization code and issues an access token.
7. The application uses the access token to access the user's account data.

### Why we can't use local storage for authentication in next.js?

Local storage is not secure for storing sensitive information like authentication tokens. This is because:

1. Local storage is accessible by any JavaScript code running on the same domain.
2. Local storage is not encrypted.
3. Local storage is vulnerable to XSS attacks.

In Next.js, you should use server-side sessions instead of local storage. This is because sessions are stored on the server, making it harder for an attacker to access the sensitive information. Additionally, sessions are encrypted and can be made secure against XSS attacks.

Express app - 
![Express](image.png)

Next app - 
![Next](image-1.png)