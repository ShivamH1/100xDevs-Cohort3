## Serverless Server

#### Deployment Options for the Internet:

- Cloud Providers: AWS, GCP, Azure, Cloudflare
- Rent a Virtual Machine (VM) for app deployment
- Utilize Auto Scaling Groups
- Deploy within a Kubernetes Cluster

#### Cloud Servers:

- Rent virtual machines or containers from cloud providers
- Can be customized and configured to meet server needs
- Scalability and flexibility
- Pay-as-you-go model

#### Hardware Servers: (Not in use)

- Buy and manage physical servers
- Can be customized and configured to meet server needs
- Often require upfront capital expenditures
- May require additional maintenance and support costs

#### Potential Drawbacks:

- Managing scaling requirements
- Incurring base costs without traffic
- Monitoring servers for downtime

Imagine a scenario where you only focus on writing code, and all these challenges are managed for you.

### What are serverless backends?

"Serverless" is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers.

#### Easier definition

What if you could just write your express routes and run a command. The app would automatically:

- Deploy
- Autoscale
- Charge you on a per request basis (rather than you paying for VMs)

#### Problems with this approach

- More expensive at scale
- Cold start problem: the delay between when a cloud provider initializes a serverless function to respond to a request and when the function is actually running and ready to respond.
  To avoid this problem we use a technique called "warm pool". This is a pool of already "warmed up" functions that are ready to be used when a request comes in.

#### When should you use a serverless architecture?

- When you have to get off the ground fast and don’t want to worry about deployments
- When you can’t anticipate the traffic and don’t want to worry about autoscaling
- If you have very low traffic and want to optimise for costs

#### Cloudfare - serverless server:

##### Cloudflare Workers:

- Cloudflare Workers is a serverless platform that allows you to run custom code at the edge of the network. It is built on top of the V8 JavaScript engine and allows you to write code that runs on the servers of Cloudflare.
- Cloudflare Workers can be used to modify requests and responses, create custom caching rules, handle redirects, modify headers, and more.
- Cloudflare workers DONT use the Node.js runtime. They have created their own runtime. There are a lot of things that Node.js has that Cloudflare workers do not have.

##### How Workers works?

- Though Cloudflare Workers behave similarly to JavaScript ↗ in the browser or in Node.js, there are a few differences in how you have to think about your code. Under the hood, the Workers runtime uses the V8 engine ↗ — the same engine used by Chromium and Node.js. The Workers runtime also implements many of the standard APIs available in most modern browsers.

- The differences between JavaScript written for the browser or Node.js happen at runtime. Rather than running on an individual's machine (for example, a browser application or on a centralized server ↗), Workers functions run on Cloudflare's global network ↗ - a growing global network of thousands of machines distributed across hundreds of locations.

- Each of these machines hosts an instance of the Workers runtime, and each of those runtimes is capable of running thousands of user-defined applications.

##### Isolates V8 Architecture:

- Cloudflare workers use isolates, which are lightweight contexts that provide your code with variables it can access and a safe environment to be executed within.
- Each isolate's memory is completely isolated, so each piece of code is protected from other untrusted or user-written code on the runtime.
- Isolates are also designed to start very quickly. Instead of creating a virtual machine for each function, an isolate is created within an existing environment.
- This model eliminates the cold starts of the virtual machine model.
- Unlike other serverless providers which use containerized processes each running an instance of a language runtime, Workers pays the overhead of a JavaScript runtime once on the start of a container.
- Workers processes are able to run essentially limitless scripts with almost no individual overhead.
- Any given isolate can start around a hundred times faster than a Node process on a container or virtual machine.
- Notably, on startup isolates consume an order of magnitude less memory.

#### Initializing a worker:

##### Initialize a worker -

```
npm create cloudflare -- my-app
Select no for Do you want to deploy your application as it is configured for now.
```

Application types:

- Hello World: A simple application that demonstrates the basic setup and deployment of a worker script.
- Durable Object: A stateful serverless object in Cloudflare Workers that allows for persistent storage and coordination.
- Website or Web App: A complete static or dynamic web application deployed using Cloudflare Workers for serverless hosting.
- Example Router & Proxy: A worker that acts as an intermediary to route requests to different backends or services.
- Worker: A JavaScript function running on Cloudflare's global network, capable of handling HTTP requests.
- Scheduled Worker (Cron Trigger): A worker that executes based on a defined schedule using cron syntax, allowing for automated task management.
- Queue Consumer & Producer: Workers that interact with queues to process and produce messages for asynchronous task execution.
- Worker Built from a Template Hosted in Git Repo: A worker application initialized from a predefined template stored in a version control system, facilitating quick deployment.

Start the worker locally

```
npm run dev
```

##### Wrangler:

Wrangler is a command-line tool used for building, deploying, and managing Cloudflare Workers. It simplifies the process of working with Cloudflare's serverless platform by providing various commands to help developers set up their development environment, deploy code, manage configurations, and more. Wrangler integrates with Cloudflare's API to streamline interactions with the Workers runtime and other Cloudflare services.

Key features of Wrangler include:

- **Project Initialization**: Easily create new Cloudflare Worker projects with pre-configured templates.
- **Development Environment**: Run Workers locally for testing and development.
- **Deployment**: Deploy Worker scripts to Cloudflare's global network with a single command.
- **Configuration Management**: Manage Worker settings, environment variables, and other configurations via `wrangler.toml`.
- **TypeScript Support**: Compile TypeScript code to JavaScript for use in Workers.
- **Integration with Cloudflare Services**: Access and manage Cloudflare KV, Durable Objects, and other services through Wrangler.

With Wrangler, developers can efficiently develop and deploy serverless applications on Cloudflare, leveraging the platform's global reach and performance optimizations.

##### Routing:

Cloudflare expects you to just write the logic to handle a request.
Creating an HTTP server on top is handled by cloudflare

example:
```
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);

		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};
```

Cloudflare does not expect a routing library/http server out of the box. You can write a full application with just the constructs available above.
