resource :DynamoDatabase, 'AWS::DynamoDB::Table', DeletionPolicy: :Delete, UpdateReplacePolicy: :Retain do
  table_name Fn::sub('connections_${branch}')
  attribute_definitions [
    { AttributeName: :connectionId,                   AttributeType: :S }
  ]
  key_schema [
    { AttributeName: :connectionId,                   KeyType: :HASH }
  ]
  provisioned_throughput do
    read_capacity_units 10
    write_capacity_units 10
  end
  # encryption is cool but costs money $$$$
  # SSE_specification(
  #   SSEEnabled: true
  # )
  tag :Stack, Fn::ref('AWS::StackName')
end

output :DynamoTable,      Fn.ref(:DynamoDatabase),                            export: Fn::sub('${AWS::StackName}-DynamoTable')