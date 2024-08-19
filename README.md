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

![Screenshot (396)](https://github.com/user-attachments/assets/db955752-45b4-4cd6-927a-e1fbd25914c6)


### Step 5:
Make modification to terraform code and push to github

This will trigger the workflow of the  terrafrm infrastruture.

- First Pipleine

![Screenshot (379)](https://github.com/user-attachments/assets/6bd50f85-f62f-4d71-abaa-0e6e0d12b785)

![Screenshot (380)](https://github.com/user-attachments/assets/ccab0741-5a57-4069-86b4-6af3de9b03d6)



### Step 6:
After terraform has created all infrasture including the EKS cluster, run the deployment workflow.

- Deployment Pipeline
- ![Screenshot (382)](https://github.com/user-attachments/assets/7596a098-c0f7-4dbd-9e84-b2157e9183a5)

- Testing Using SonarQube quality gate
- 
![Screenshot (383)](https://github.com/user-attachments/assets/489bbc80-a469-4446-8593-1df9d486c913)

- Build Docker image from docker file and uopload to EKS

![Screenshot (384)](https://github.com/user-attachments/assets/2128e111-7ea8-45d5-8113-39c6838cc969)

- Deploy manifest files to EKS using Helm Charts

![Screenshot (385)](https://github.com/user-attachments/assets/98d2b9de-9b1b-4434-b24e-817014b90c44)






### Step 7:
Verify the cluster, the nodes, the pods, the deployment and services.

![Screenshot (387)](https://github.com/user-attachments/assets/9cd41cfc-0fa6-412a-8c40-16290397870b)


### Ste 8:
Use ALB DNS name created by ingress to create a CNAME in the Route 53 Hosted Zone

![Screenshot (394)](https://github.com/user-attachments/assets/32ac94d1-617d-4c26-8281-49659f1f59d4)


### Step 9:
Access your webapp usingh the cname record.
```
news-app.okproject.site
```
![Screenshot (388)](https://github.com/user-attachments/assets/652aa900-2b02-4ece-a382-9d103a858c73)


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
 This setup not only enhances the deployment speed and reliability but also maintains high code quality standards, making the application resilient and production-ready..


## Author:
Kehinde Omokungbe (kehindefrankli@gmail.com)
