class HelloWorldController < ApplicationController

  def index

  end

  def create
    @quote = Quote.new(params.require(:quote).permit(:message))

    @quote.save
  end
end

private
  def quote_params
    params.require(:quote).permit(:message)
  end
