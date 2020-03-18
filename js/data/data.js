let data = [
    {
        "section": "Basics", 
        "practices": [
            `Build a <a href="https://www.uipath.com/rpa/center-of-excellence" target="_blank">Center of Excellence (CoE)</a>. Generally, it's seen as an expensive expense and shouldn't be the case, it's more expensive when it's not implemented.`,
            `Try splitting the bots in small activities that could be reused. This also allows scalability and possibility multi-bot per PC.`,
            `All apps should be pre-screened and tested with different RPA platforms before choosing the final one. <b>This ensures stability based on your solutions.</b>`,
            `Master data should be stored in Excels or Databases (<a href="https://www.sqlite.org/index.html" target="_blank">SQLite</a> is a free option). <b>No data must be hardcoded in the bots.</b>`,
            `Bot should try multiple attempts per action if something didn't work as expected. Ideally, a delay of 500ms should be set and it should be configurable.`,
            `Bots should have a try catch logic, if there is an issue, it must notify the team to react, not to stopped the full process and carry on with the next task to process.`,
            `Ideally, all robots should run on the chosen PCs. <b>Avoid manipulating Citrix "PCs" from others.</b> This reduces the performance and accuracy.`,
            `Control all robots from the Control Room, Orchestrator, etc.`,
            `Develop all robots in Virtual Machines with the same resolution.`,
            `Track inline actions of each robot.`,
            `Use Image Recognition or Coordinates as the last resources. They tend to be highly inaccurate.`,
            `Use the Recorders only for small pieces of the automations. Don't automate full tasks. Also, validate the code generated is not using Image Recognitions or Specific locations.`
        ]
    },
    {
        "section": "Requirements Gathering", 
        "practices": [
            `Define an owner for every application, in order to contact for any issue or query.`,
            `Collect all authorizations, authentications, performance, expected response time, scalability expected, SLAs, etc. Nothing should be over-seen.`,
            `Collect all information where the process was running, CPU, RAM, etc.`,
            `Do not consider projects where there are connectivity issues or multiple networks. Most RPA solutions cannot work offline. They have a requirement of constantly validating its license.
            `,
            `Define and get approvals for Test, UAT and Production environment with all tools provided by the client. Ensure these tools look the same and have the same IDs to avoid unnecessary reconfigurations when they are moved to Production. SAP for example can have different IDs for the same controls in Prod and Test.`,
            `Projects that require VPN with hard or mobile tokens should be considered at the end.
                Projects that require VPN with soft tokens (PC digital) should be considered on the medium term.
            `
        ]
    },
    {
        "section": "Infrastructure", 
        "practices": [
            `Define, a Infrastructure as a Service in a <b>cloud</b>. <i>Robots running in VM are less prone to hardware changes or disruptions.</i> Suggested basic infrastructure:
            <ul>
                <li>
                    One VM for the Command Center.
                </li>
                <li>
                    One VM for the Command Center Database.
                </li>
                <li>
                    One template VM for the bot PC. This one would be replicated to all new bots.
                </li>
            </ul>`
        ]
    },
    {
        "section": "Logs", 
        "practices": [
            `Logs should contain all actions performed including errors, CPU consumption, etc.`,
            `Define a logic for the logs, for example:
            <table class="table">
                <tr>
                <thead>
                    <th>
                    Robot ID
                    </th>
                    <th>
                    Robot PC
                    </th>
                    <th>
                    Robot Task
                    </th>
                    <th>
                    Status
                    </th>
                    <th>
                    Starting Time
                    </th>
                    <th>
                    Ending Time
                    </th>
                    <th>
                    SLA
                    </th>
                </thead>
                </tr>
            </table>`
        ]
    },
    {
        "section": "Desktop Apps", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    },
    {
        "section": "", 
        "practices": [

        ]
    }
];