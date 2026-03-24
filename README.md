Download and Install Skaffold

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))


After installation, verify by running:
choco --version

. Install Skaffold via Chocolatey:
choco install -y skaffold

Verify Skaffold Installation:
skaffold version
/////////////////////////////////////////////
Summary of the Steps:

Install Chocolatey (if not already installed) via PowerShell.

Install Skaffold using Chocolatey:

choco install -y skaffold

Verify Skaffold Installation:

skaffold version

Add Skaffold Path to VS Code:

Open settings.json in VS Code.

Add C:\ProgramData\chocolatey\bin to the PATH in VS Code's integrated terminal.

Restart VS Code to apply changes.

Test skaffold version in VS Code's terminal to ensure it's working.

Now, Skaffold should be fully installed and accessible from both external terminals (like PowerShell) and the VS Code integrated terminal. You can use skaffold to automate your Kubernetes workflows.


//////////////////////////////////////////////

command to install ingress nginx
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.15.1/deploy/static/provider/cloud/deploy.yaml

