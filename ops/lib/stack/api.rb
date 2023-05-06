require 'stax/mixin/lambda'
require 'stax/mixin/logs'

module Stax
  class Api < Stack
    include Sam, Lambda, Logs

  end
end