require 'stax/mixin/dynamodb'
module Stax
  class Db < Stack
    include DynamoDB

    PRIMARY_REGION = 'us-west-2'

    no_commands do
      def cfn_parameters
        {
          app: app_name,
          branch: branch_name,
        }
      end
    end

    desc 'create', 'create stack'
    def create
      ensure_account!()
      super
    end

    desc 'delete', 'delete stack'
    def delete
      if aws_region == PRIMARY_REGION
        warn('dynamodb table will be retained, please delete if no longer needed')
        id(:DynamoDatabase)
      end
      super
    end
  end
end
