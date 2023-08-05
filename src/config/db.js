import dynamoose from 'dynamoose';

const ddb = new dynamoose.aws.ddb.DynamoDB({
    credentials: {
        "accessKeyId": "AKIARKEK6VUWLF6OOTHU",
        "secretAccessKey": "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",
    },
    region: 'us-east-2',
});

dynamoose.aws.ddb.set(ddb);

export default dynamoose;
