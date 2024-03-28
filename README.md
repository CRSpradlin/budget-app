# GCPTemplate

## TL;DR
The project is a template for creating React projects in Google App Script.

The template is a relatively simple web application which allows the user to update a cell in a Google Spreadsheet.

## Setup

### Log into Clasp
Within your terminal, run the `bun install` command.
![run_bun_install.png](./docs/media/run_bun_install.png)

Next, run `bun run clasp login` (If you haven't logged in recently). This command will log you into your google account to allow the project to create and update google cloud projects.

After running the command, the terminal should direct you to a web view to log you into your google account.
![run_bun_login_web_view.png](./docs/media/run_bun_login_web_view.png)

Continue with the web view prompts, including reviewing of access needed for clasp to manage your new web application.
![run_bun_login_web_view_cli_permissions.png](./docs/media/run_bun_login_web_view_cli_permissions.png)

Once you have completed the entire login and permission review process, you should be re-directed to a confirmation view.
![run_bun_login_web_view_logged_in.png](./docs/media/run_bun_login_web_view_logged_in.png)

## Create Google App Script Project

Now you have logged into your Google Account via Clasp, you can now use Clasp to create a new project form which your react code will be deployed to. To do this, run `bun run clasp create <project name>`.
![bun_run_clasp_create.png](./docs/media/bun_run_clasp_create.png)

Select `webapp` when prompted type of script to create.

Once the project is successfully created, you should see the following output.
![bun_run_clasp_create_done.png](./docs/media/bun_run_clasp_create_done.png)

