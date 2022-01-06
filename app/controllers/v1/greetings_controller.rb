class V1::GreetingsController < ApplicationController
  def index
    render json: { :greetings => [
      {
        :greeting => 'Hello Sire',
      },
      {
        :greeting => 'Greetings sire'
      }
    ] }.to_json

    # render json: Greeting.all.sample, only: [:greeting]
  end
end
