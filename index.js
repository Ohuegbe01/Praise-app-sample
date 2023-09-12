const express = require('express');
const app = express();
const port = 3000; // You can change the port as needed

app.get('/api', (req, res) => {
    // Extract query parameters
    const slackName = req.query.slack_name;
    const track = req.query.track;

    // Get the current date and time
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = currentDate.toISOString();

    // GitHub URLs
    const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
    const githubRepoUrl = 'https://github.com/Ohuegbe01/backend_stage_one_task';

    // Response JSON
    const jsonResponse = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };

    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});