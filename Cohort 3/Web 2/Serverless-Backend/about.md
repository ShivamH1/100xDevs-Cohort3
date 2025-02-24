## Serverless Server

#### Deployment Options for the Internet:

- Cloud Providers: AWS, GCP, Azure, Cloudflare
- Rent a Virtual Machine (VM) for app deployment
- Utilize Auto Scaling Groups
- Deploy within a Kubernetes Cluster

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
- Cold start problem
