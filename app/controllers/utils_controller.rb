class UtilsController < ApplicationController
  def subscribe
    begin
    gibbon = Gibbon::Request.new(api_key: ENV.fetch("MAILCHIMP_API_KEY"))
    gibbon.lists(ENV.fetch("MAILCHIMP_LIST_ID")).members.create(body: {
      email_address: params[:subscribe][:email], status: "subscribed"
    })
    redirect_to contact_us_url(welcome: true)
    rescue Gibbon::MailChimpError => e
      redirect_to contact_us_url(params), notice: "#{e}"
    end
  end
end
