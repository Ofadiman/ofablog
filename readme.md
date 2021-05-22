# Ofablog

Personal blog and knowledge base application.

### Initial setup

The development process is carried out using [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) tools.
Before you start, make sure they are installed on your machine by running `docker -v` and `docker-compose -v` commands in your terminal.
The project uses [yarn](https://yarnpkg.com/) as package manager. Issue the following command to confirm that you have yarn installed `yarn -v`.

<br/>

- Clone the repository using ssh.

```shell
git clone git@github.com:Ofadiman/ofablog.git
```

<br/>

- Run the containers in detached mode.

```shell
make run
```

### GitHub secrets

To publish the application and storybook to [netlify](https://app.netlify.com/) from continuous integration pipeline you must add a few secrets in GitHub repository.

- `NETLIFY_AUTH_TOKEN` - Authentication token used by continuous integration pipeline. Information how to get it [here](https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui).
- `NETLIFY_BLOG_SITE_ID` - Unique id of the blog website published to netlify. Information how to get it [here](https://docs.netlify.com/cli/get-started/#link-with-an-environment-variable).
- `NETLIFY_STORYBOOK_SITE_ID` - Unique id of the storybook website published to netlify. Information how to get it [here](https://docs.netlify.com/cli/get-started/#link-with-an-environment-variable).

### Code generator

- `hygen new component --name <name> --type <type>` - Generate a React component.

  - `<name>` - Any kebab case string.
  - `<type>` - One of `atom`, `molecule`, `organism` or `template`.

- `hygen new constant --name <name>` - Generate a constant value.

  - `<name>` - Any kebab case string.

- `hygen new enum --name <name>` - Generate an enum.

  - `<name>` - Any kebab case string.

- `hygen new function --name <name>` - Generate a function.

  - `<name>` - Any kebab case string.

- `hygen new hook --name <name>` - Generate a hook.

  - `<name>` - Any kebab case string starting with `use` keyword.

- `hygen new type --name <name>` - Generate a type.
  - `<name>` - Any kebab case string.

### Makefile commands

- `logs-blog` - Attach console to the container with blog.
- `logs-storybook` - Attach console to the container with storybook.
- `run-blog` - Run blog container in detached mode.
- `run-storybook` - Run blog storybook in detached mode.
- `run` - Run both blog and storybook containers in detached mode.
- `stop` - Stop all containers.
