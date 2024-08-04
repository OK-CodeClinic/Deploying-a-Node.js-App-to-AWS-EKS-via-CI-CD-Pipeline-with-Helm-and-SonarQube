# CICD Pipeline for a Node.js NewsApp Deployed to EKS using Helm, Terraform and SonarQube

## Description:
This project is designed to establish a comprehensive  CICD Deployment pipeline for a Node.js-based News App, leveraging AWS Elastic Kubernetes Service (EKS) for container orchestration. The pipeline integrates modern DevOps tools, including Helm for Kubernetes deployment, Terraform for infrastructure management in its own pipeline, and SonarQube for continuous code quality inspection.

![nodejs-cicd](https://github.com/user-attachments/assets/7077fd02-0763-42a5-86cd-4a25e157e123)


## Scenario This is trying to Solve;
1. Infrastructure Management and Scaling
2. Streamlined Deployment Process
3. Code Quality Assurance
4. Automated Testing
5. Containerization and Consistency
6. Continuous Integration of Code Changes
7. Management of Dependencies and Build Artifacts


## Tools:
- AWS EKS
- Terraform
- SonarQube
- Docker
- AWS ECR
- GitHub
- GitHub Actions
- Helm

## Prequisites
- GitHub Account
- AWS Account
- SonarCloud Organization Account

## Steps

### Step 1:
Clone the github repository
```
https://github.com/OK-CodeClinic/Deploying-a-Node.js-App-to-AWS-EKS-via-CI-CD-Pipeline-with-Helm-and-SonarQube

cd Deploying-a-Node.js-App-to-AWS-EKS-via-CI-CD-Pipeline-with-Helm-and-SonarQube
```

### Step 2:
- Create AWS Secret and Acces Key
- Create an ECR Private Repository
- Create an s3 bucket that will store all terraform tfstate


### Step 3:
- Create a Sonarcloud token
- Create a Sonarcloud orgainzation
- Create a sonar cloud project



### Step 4:
Update all secrets to the github repo
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY_ID
- REGISTRY
- S3_BUCKET
- SONAR_ORG
- SONAR_URL
- SONAR_TOKEN
- SONAR_PROJECT_KEY

### Step 5:
Make modification to terraform code and push to github

This will trigger the workflow of the  terrafrm infrastruture.



### Step 6:
After terraform has created all infrasture including the EKS cluster, run the deployment workflow.

### Step 7:
Verify the cluster, the nodes, the pods, the deployment and services.

### Ste 8:
Use ALB DNS name created by ingress to create a CNAME in the Route 53 Hosted Zone

### Step 9:
Access your webapp usingh the cname record.
```
news-app.okproject.site
```

### Step 10: Destroy
- Delete the ingress controller

```
kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.3/deploy/static/provider/aws/deploy.yaml
```

- Initialize terraform
``` cd terraform/
terraform init -backend-config="bucket=newsapp-tf-state"  ## You  can specify your s3 bucket
```

- Destroy infrastruture
```
 terraform destroy
```

## Conclusion:
 This setup not only enhances the deployment speed and reliability but also maintains high code quality standards, making the application resilient and production-ready.


## Author:
Kehinde Omokungbe (kehindefrankli@gmail.com)
