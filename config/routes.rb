Rails.application.routes.draw do
  post :subscribe, to: 'utils#subscribe'
  get :homebuyers, to: 'high_voltage/pages#show', id: 'homebuyers'
  get :investors, to: 'high_voltage/pages#show', id: 'investors'
  get :contact_us, to: 'high_voltage/pages#show', id: 'contact_us'
  root 'high_voltage/pages#show', id: 'home'
end
