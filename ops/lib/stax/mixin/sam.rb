module Stax
  module Sam

    ## bucket to upload packaged template
    def s3_bucket
      ENV['S3_BUCKET'] || stack(:build).stack_output(:S3Bucket)
    end

    ## location of sam template and function code
    def sam_directory
      # class name is preferred but structure is not set yet
      File.join('..', 'src')
      # File.join('..', class_name)
    end

    def sam_build
      system('sam build')
    end

    ## sam package pollutes stdout with s3uploader progress bar
    def sam_package
      file = Tempfile.new('package')
      begin
        system("sam package --s3-bucket #{s3_bucket} --output-template-file #{file.path}")
        template = file.read
      ensure
        file.close
        file.unlink
      end
      template
    end

    ## override this to use CLI to upload lambdas
    def cfn_template
      @_cfn_template ||= Dir.chdir(sam_directory) do
        sam_build
        sam_package
      end
    end

    ## validate is broken for SAM templates and returns empty capabilities;
    ## change to CAPABILITY_NAMED_IAM if you name an IAM role in template
    def cfn_capabilities
      %w[ CAPABILITY_IAM CAPABILITY_AUTO_EXPAND ]
    end

    ## update_stack cannot be used with templates containing transforms
    def stack_force_changeset
      true
    end

  end
end
