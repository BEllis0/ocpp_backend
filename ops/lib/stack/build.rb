# TODO: includes needed when codebuild integrated
require 'stax/mixin/s3'
# require 'stax/mixin/logs'
# require 'stax/mixin/codebuild'
# require 'stax/mixin/codepipeline'

module Stax
  class Build < Stack
    include S3
    # , Logs, Codebuild, Codepipeline

    desc 'create', 'create stack'
    def create
      ensure_account!()
      super
    end
  end
end
