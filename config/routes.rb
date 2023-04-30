Rails.application.routes.draw do
  resources :cats
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
