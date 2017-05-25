#!/bin/bash

pip install awscli
aws configure set region ap-northeast-1

npm run production
aws s3 sync dist/ s3://www.yours3bucket.com/ --delete
