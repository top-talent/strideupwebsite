class UtilsController < ApplicationController
  def subscribe
    gibbon = Gibbon::Request.new(api_key: ENV.fetch("MAILCHIMP_API_KEY"))
    gibbon.lists(ENV.fetch("MAILCHIMP_LIST_ID")).members.create(body: {
      email_address: params[:subscribe][:email], status: "subscribed"
    })
  end
end
