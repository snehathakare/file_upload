Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static#index'
  put '/image_attribs/latest' => "image_attribs#latest"
  resources :image_attribs
end
