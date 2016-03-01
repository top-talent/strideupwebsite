class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_share_urls

  private

  def set_share_urls
    @facebook_share_url = URI("http://twitter.com/home")
    t = URI("http://twitter.com/home")
    t.query = {status: "Twitter share text"}.to_query
    @twitter_share_url = t.to_s
  end
end
