description 'ocpp dynamo'

parameter :app,    type: :String
parameter :branch, type: :String

include_template(
  'db/dynamo.rb',
)
