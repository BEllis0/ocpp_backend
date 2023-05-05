module Stax
  class Stack < Base
      ## stacks should only be allowed to create in certain accounts
    no_commands do
      def ensure_account!()
        # TODO: fill me
        if aws_account_id != 'XXXXXXXXXXXX'
          fail_task("#{stack_name} should only be created in our account")
        end
      end
    end
  end
end
