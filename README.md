# Overview
A working example that shows how to run lambda functions with serverless-offline and interact with a local SQS queue.

# Setup

## Prerequisites

This project requires the following;
* nodejs
* npm
* serverless framework
* docker
* aws-cli
* graze/sqs-local image docker


### Serverless Framework

Once npm is installed, install serverless npm package with

`npm install -g serverless`


### AWS CLI
This is needed for serverless-offline-sqs plugin to function. Follow (AWS official documentation)[https://docs.aws.amazon.com/cli/latest/userguide/installing.html] to install AWS CLI.

Configure AWS CLI after installation by running `aws configure`. You don't have to set real access key/secret. Any values will do.

As for the region, enter `us-west-2`.

## How to run this

To fully test the integration between API Gateway and the Lambda function, the full deployment can be emulated using [serverless-offline](https://github.com/dherault/serverless-offline)

* Install image graze/sqs-local
* docker run -p 9324:9324 graze/sqs-local

* serverless offline start --stage local