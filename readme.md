#install ffmpeg#
## install ffmpeg on windows ##
1. Open PwoerShell as an adminstrator
2. Enable PowerShell execurtion policy. Run the following command in PowerShell:
    Set-ExecutionPolicy Bypass -Scope Process -Force;
3. INstall Chocolately by executing the following command in PowerShell;
    iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
4. After the installation completes, close and reopen PowerShell.
5. Verify the Chocolatey installation by running the following command in PowerShell:
    choco
6. You can now use Chocolatey to install packages simillar to how you'd use Brew on macOS or Linux. For example, to install `ffmpeg`, run the following command in PowerShell'
    choco install ffmpeg

## install ffmpeg on MacOS or Linux ##
You can install `ffmpeg` using the package manager of your choice.
    brew install ffmpeg

# Set up your Node.js project #
npm insatll

# source videos path - /video/ #

# run node index on powershell to convert video #