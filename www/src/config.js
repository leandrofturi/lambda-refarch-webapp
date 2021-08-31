// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2a6tg637gbalcocfoigqgqhlrq",     // CognitoClientID
  "api_base_url": "",                                     // TodoFunctionApi
  "cognito_hosted_domain": "intranetapp-intranet.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d24gsjotcz412l.amplifyapp.com"                                      // AmplifyURL
};

export default config;
