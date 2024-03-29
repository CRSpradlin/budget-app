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

## Add Script Properties
Now create a new Google Spreadsheet to allow the web application to send and recieve updates to. See the screenshot below to retrieve the I.D. of the new Spreadsheet. The I.D. will be needed within a Script Property in order to connect the web application to the spreadsheet. The Spreadsheet I.D. will be the series of leters, numbers and characters between the `/d/` and `/edit/` portions of the url.
![spreadsheet_id_from_url.png](./docs/media/spreadsheet_id_from_url.png)
In the above example, the I.D. for the document is `1x1pyWBBdLSpaXFXoR7LhG5UsQ6qMm122dh81OMWSeYc`. Your I.D. should look similar. Save this value somewhere to be used in the following steps.

Nagivate back to your termial where you entered the `bun install` and `bun run clasp login` commands. Once there, run the `bun run clasp open` command.

![bun_run_open_command.png](./docs/media/bun_run_open_command.png)

The command should open a web view of your clasp (Google App Script) project.

![bun_run_open_web_view.png](./docs/media/bun_run_open_web_view.png)

Navigate to the gear icon on the left side panel. It should expand to say `Project Settings` when it is hovered over with your cursor. Click `Project Settings` to open its page.

![bun_run_open_web_view_project_settings.png](./docs/media/bun_run_open_web_view_project_settings.png)

Once on the `Project Settings` page, scroll to the very bottom section which reads `Script Properties`. Click on the `Edit script properties` button.

![bun_run_open_web_view_add_project_setting.png](./docs/media/bun_run_open_web_view_add_project_setting.png)

The `Property` value for your new Script Property should be `MAIN_SHEET_ID`. The `Value` should be set to the Google Spreadsheet I.D. we retrieved in the previous steps.

![bun_run_open_web_view_fill_project_setting.png](./docs/media/bun_run_open_web_view_fill_project_setting.png)

Once both fields are filled in, click the `Save script properties` button.


