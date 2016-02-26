Rails.application.routes.draw do
  post :subscribe, to: 'utils#subscribe'
  get :homebuyers, to: 'high_voltage/pages#show', id: 'homebuyers'
  get :investors, to: 'high_voltage/pages#show', id: 'investors'
  root 'high_voltage/pages#show', id: 'home'
end
