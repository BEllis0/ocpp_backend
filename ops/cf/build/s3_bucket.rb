resource :S3Bucket, 'AWS::S3::Bucket', DeletionPolicy: :Delete, UpdateReplacePolicy: :Retain do
  bucket_encryption(
    ServerSideEncryptionConfiguration: [
      {
        BucketKeyEnabled: :true,
        ServerSideEncryptionByDefault: {
          SSEAlgorithm: 'aws:kms'
        }
      }
    ]
  )
  versioning_configuration(
    Status: :Enabled
  )
  tag :Stack, Fn::ref('AWS::StackName')
end

resource :S3BucketPolicy, 'AWS::S3::BucketPolicy', DependsOn: :S3Bucket do
  bucket Fn::ref(:S3Bucket)
  policy_document(
    {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: :Allow,
          Principal: { AWS: Fn::ref('AWS::AccountId') },
          Action: 's3:*',
          Resource: [
            Fn::sub('arn:aws:s3:::${S3Bucket}'),
            Fn::sub('arn:aws:s3:::${S3Bucket}/*'),
          ],
          Condition: {
            Bool: {'aws:SecureTransport': false}
          }
        }
      ]
    }
  )
end
